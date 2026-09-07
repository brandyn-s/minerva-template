import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

test("reports the exact number of accepted gate receipts", () => {
  const fixtureRoot = mkdtempSync(join(tmpdir(), "minerva-roadmap-status-"));
  const gatesDirectory = join(fixtureRoot, "gates");
  mkdirSync(gatesDirectory);

  writeFileSync(
    join(gatesDirectory, "R0.json"),
    JSON.stringify({
      schemaVersion: 1,
      gate: "R0",
      status: "accepted",
      sourceRevision: "a".repeat(40),
    }),
  );
  writeFileSync(
    join(gatesDirectory, "R1.json"),
    JSON.stringify({
      schemaVersion: 1,
      gate: "R1",
      status: "falsified",
      sourceRevision: "b".repeat(40),
    }),
  );

  const result = spawnSync(
    process.execPath,
    [join(projectRoot, "scripts/roadmap-status.mjs"), "--directory", gatesDirectory],
    { encoding: "utf8" },
  );

  rmSync(fixtureRoot, { recursive: true, force: true });
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stdout, "METRIC accepted_gates=1\n");
});
