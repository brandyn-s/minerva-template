import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import {
  chmodSync,
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
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

test("blocks a force-tracked ignored secret before gitleaks runs", (t) => {
  const repository = mkdtempSync(join(tmpdir(), "minerva-secret-scan-"));
  t.after(() => rmSync(repository, { recursive: true, force: true }));
  git(repository, "init", "-b", "main");
  writeFileSync(join(repository, ".gitignore"), ".env.local\n");

  const fakeSecret = ["gh", "p", "_", "A".repeat(36)].join("");
  writeFileSync(join(repository, ".env.local"), `TOKEN=${fakeSecret}\n`);
  git(repository, "add", ".gitignore");
  git(repository, "add", "--force", ".env.local");

  const binDirectory = join(repository, "test-bin");
  const marker = join(repository, "gitleaks-ran");
  mkdirSync(binDirectory);
  const fakeGitleaks = join(binDirectory, "gitleaks");
  writeFileSync(fakeGitleaks, '#!/bin/sh\n: > "$MINERVA_GITLEAKS_MARKER"\n');
  chmodSync(fakeGitleaks, 0o755);

  const result = spawnSync("/bin/sh", ["-c", packageJson.scripts["secrets:scan"]], {
    cwd: repository,
    encoding: "utf8",
    env: {
      ...process.env,
      MINERVA_GITLEAKS_MARKER: marker,
      PATH: `${binDirectory}:${process.env.PATH ?? ""}`,
    },
  });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /\.env\.local/);
  assert.equal(existsSync(marker), false, "gitleaks must not run after guard failure");
});
