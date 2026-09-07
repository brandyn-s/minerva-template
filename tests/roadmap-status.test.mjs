import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const statusScript = join(projectRoot, "scripts/roadmap-status.mjs");

function git(repository, ...arguments_) {
  return execFileSync("git", arguments_, {
    cwd: repository,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function createRepository(t) {
  const repository = mkdtempSync(join(tmpdir(), "minerva-roadmap-status-"));
  t.after(() => rmSync(repository, { recursive: true, force: true }));
  git(repository, "init", "-b", "main");
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
    "fixture",
  );
  mkdirSync(join(repository, "evidence/gates"), { recursive: true });
  return repository;
}

function validReceipt(sourceRevision, overrides = {}) {
  return {
    schemaVersion: 1,
    gate: "R0",
    status: "passed",
    sourceRevision,
    dependencyReceipts: [],
    authorityReferences: ["ROADMAP Approved 1.0"],
    environmentIds: {
      githubRepository: "brandyn-s/minerva",
      githubVisibility: "private",
      canonicalBranch: "main",
      vercelScope: "thalient",
      vercelTeamId: "team_fixture",
      vercelProject: "minerva",
      vercelProjectId: "prj_fixture",
      deploymentCount: 0,
      integrationCount: 0,
      productionAlias: "none",
    },
    configurationIds: [
      { id: "env_1", key: "MINERVA_ADMISSION_NAMESPACE", target: "development" },
      { id: "env_2", key: "MINERVA_PROVIDER_ROUTES_ENABLED", target: "development" },
      { id: "env_3", key: "MINERVA_ADMISSION_NAMESPACE", target: "preview" },
      { id: "env_4", key: "MINERVA_PROVIDER_ROUTES_ENABLED", target: "preview" },
      { id: "env_5", key: "MINERVA_ADMISSION_NAMESPACE", target: "production" },
      { id: "env_6", key: "MINERVA_PROVIDER_ROUTES_ENABLED", target: "production" },
    ],
    configuration: {
      browserDatabaseNamespace: "minerva.workspace.prototype.v1",
      admissionNamespaces: {
        development: "minerva-development",
        preview: "minerva-preview",
        production: "minerva-production",
      },
      providerRoutesEnabled: {
        development: false,
        preview: false,
        production: false,
      },
      vercelFramework: "nextjs",
      vercelNodeVersion: "24.x",
    },
    toolVersions: { node: "24.20.0" },
    commands: [{ command: "npm test", result: "pass", summary: "fixture" }],
    observableOutcome: "Fixture outcome",
    demoResult: "Fixture demo",
    smallestDecisiveEvidence: ["Fixture evidence"],
    evidenceLevel: "E0",
    firstMaterialFalsifier: "Fixture falsifier",
    falsifierOccurred: false,
    failures: [],
    partialResults: [],
    unsupportedCases: [],
    materialRepairs: [],
    decisions: { opened: [], closed: ["R0"], result: "passed" },
    productOwnerApproval: {
      required: true,
      recorded: true,
      reference: "ROADMAP Approved 1.0",
    },
    ...overrides,
  };
}

function writeReceipt(repository, filename, receipt) {
  writeFileSync(join(repository, "evidence/gates", filename), JSON.stringify(receipt));
}

function runStatus(repository) {
  return spawnSync(process.execPath, [statusScript], {
    cwd: repository,
    encoding: "utf8",
  });
}

test("counts only passed gate receipts", (t) => {
  const repository = createRepository(t);
  const sourceRevision = git(repository, "rev-parse", "HEAD");
  writeReceipt(repository, "R0.json", validReceipt(sourceRevision));
  writeReceipt(
    repository,
    "R1.json",
    validReceipt(sourceRevision, { gate: "R1", status: "active" }),
  );

  const result = runStatus(repository);

  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stdout, "METRIC accepted_gates=1\n");
});

test("rejects a receipt missing a required contract field", (t) => {
  const repository = createRepository(t);
  const receipt = validReceipt(git(repository, "rev-parse", "HEAD"));
  delete receipt.demoResult;
  writeReceipt(repository, "R0.json", receipt);

  const result = runStatus(repository);

  assert.equal(result.status, 1);
  assert.match(result.stderr, /schema validation failed/);
});

test("rejects a receipt status outside the roadmap vocabulary", (t) => {
  const repository = createRepository(t);
  const receipt = validReceipt(git(repository, "rev-parse", "HEAD"), {
    status: "accepted",
  });
  writeReceipt(repository, "R0.json", receipt);

  const result = runStatus(repository);

  assert.equal(result.status, 1);
  assert.match(result.stderr, /schema validation failed/);
});

test("rejects a receipt whose filename does not match its gate", (t) => {
  const repository = createRepository(t);
  writeReceipt(
    repository,
    "wrong.json",
    validReceipt(git(repository, "rev-parse", "HEAD")),
  );

  const result = runStatus(repository);

  assert.equal(result.status, 1);
  assert.match(result.stderr, /filename wrong\.json does not match gate R0/);
});

test("rejects duplicate gate identifiers", (t) => {
  const repository = createRepository(t);
  const receipt = validReceipt(git(repository, "rev-parse", "HEAD"));
  writeReceipt(repository, "R0.json", receipt);
  writeReceipt(repository, "duplicate.json", receipt);

  const result = runStatus(repository);

  assert.equal(result.status, 1);
  assert.match(result.stderr, /duplicate gate R0/);
});

test("rejects an unresolved source revision", (t) => {
  const repository = createRepository(t);
  writeReceipt(repository, "R0.json", validReceipt("c".repeat(40)));

  const result = runStatus(repository);

  assert.equal(result.status, 1);
  assert.match(result.stderr, /source revision .* does not resolve to a commit/);
});

test("rejects a source revision that is not an ancestor of HEAD", (t) => {
  const repository = createRepository(t);
  git(repository, "switch", "--orphan", "unrelated");
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
    "unrelated fixture",
  );
  const unrelatedRevision = git(repository, "rev-parse", "HEAD");
  git(repository, "switch", "main");
  writeReceipt(repository, "R0.json", validReceipt(unrelatedRevision));

  const result = runStatus(repository);

  assert.equal(result.status, 1);
  assert.match(result.stderr, /source revision .* is not an ancestor of HEAD/);
});
