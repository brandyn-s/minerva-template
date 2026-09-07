import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import {
  chmodSync,
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(readFileSync(join(projectRoot, "package.json"), "utf8"));

function git(repository, ...arguments_) {
  return execFileSync("git", arguments_, {
    cwd: repository,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function commit(repository, message) {
  git(
    repository,
    "-c",
    "user.name=Minerva Test",
    "-c",
    "user.email=minerva-test@example.invalid",
    "-c",
    "commit.gpgsign=false",
    "commit",
    "--allow-empty",
    "-m",
    message,
  );
}

function createRepository(t) {
  const repository = mkdtempSync(join(tmpdir(), "minerva-secret-scan-"));
  t.after(() => rmSync(repository, { recursive: true, force: true }));
  git(repository, "init", "-b", "main");
  commit(repository, "fixture");
  return repository;
}

function fakeSecret() {
  return ["AK", "IA", "Z7Q2W9E4R6T8Y1U3"].join("");
}

function runSecretScan(repository, environment = {}) {
  return spawnSync("/bin/sh", ["-c", packageJson.scripts["secrets:scan"]], {
    cwd: repository,
    encoding: "utf8",
    env: { ...process.env, ...environment },
  });
}

test("blocks a force-tracked ignored secret before gitleaks runs", (t) => {
  const repository = createRepository(t);
  writeFileSync(join(repository, ".gitignore"), ".env.local\n");

  writeFileSync(join(repository, ".env.local"), `TOKEN=${fakeSecret()}\n`);
  git(repository, "add", ".gitignore");
  git(repository, "add", "--force", ".env.local");

  const binDirectory = join(repository, "test-bin");
  const marker = join(repository, "gitleaks-ran");
  mkdirSync(binDirectory);
  const fakeGitleaks = join(binDirectory, "gitleaks");
  writeFileSync(fakeGitleaks, '#!/bin/sh\n: > "$MINERVA_GITLEAKS_MARKER"\n');
  chmodSync(fakeGitleaks, 0o755);

  const result = runSecretScan(repository, {
    MINERVA_GITLEAKS_MARKER: marker,
    PATH: `${binDirectory}:${process.env.PATH ?? ""}`,
  });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /\.env\.local/);
  assert.equal(existsSync(marker), false, "gitleaks must not run after guard failure");
});

test("rejects a secret in the current contents of a modified tracked file", (t) => {
  const repository = createRepository(t);
  const trackedFile = join(repository, "tracked.txt");
  writeFileSync(trackedFile, "safe fixture\n");
  git(repository, "add", "tracked.txt");
  commit(repository, "track safe fixture");

  const secret = fakeSecret();
  writeFileSync(trackedFile, `TOKEN=${secret}\n`);
  const temporaryParent = mkdtempSync(join(tmpdir(), "minerva-scan-parent-"));
  t.after(() => rmSync(temporaryParent, { recursive: true, force: true }));

  const result = runSecretScan(repository, { TMPDIR: temporaryParent });
  const output = `${result.stdout}\n${result.stderr}`;

  assert.equal(result.status, 1);
  assert.match(output, /leaks found: 1/);
  assert.equal(output.includes(secret), false, "gitleaks output must redact the secret");
  assert.deepEqual(readdirSync(temporaryParent), [], "temporary scan data must be removed");
});

test("rejects a secret in a new untracked unignored file", (t) => {
  const repository = createRepository(t);
  const secret = fakeSecret();
  writeFileSync(join(repository, "untracked.txt"), `TOKEN=${secret}\n`);
  const temporaryParent = mkdtempSync(join(tmpdir(), "minerva-scan-parent-"));
  t.after(() => rmSync(temporaryParent, { recursive: true, force: true }));

  const result = runSecretScan(repository, { TMPDIR: temporaryParent });
  const output = `${result.stdout}\n${result.stderr}`;

  assert.equal(result.status, 1);
  assert.match(output, /leaks found: 1/);
  assert.equal(output.includes(secret), false, "gitleaks output must redact the secret");
  assert.deepEqual(readdirSync(temporaryParent), [], "temporary scan data must be removed");
});
