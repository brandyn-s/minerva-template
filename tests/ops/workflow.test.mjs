import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const root = new URL("../../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");

test("Vercel uses the repository's exact toolchain without inherited project identity", () => {
  const pkg = JSON.parse(read("package.json"));
  const vercel = JSON.parse(read("vercel.json"));
  const pinned = `npx --yes --package=node@${pkg.engines.node} --package=npm@${pkg.engines.npm}`;
  assert.equal(read(".node-version").trim(), pkg.engines.node);
  assert.equal(read(".nvmrc").trim(), pkg.engines.node);
  assert.equal(pkg.packageManager, `npm@${pkg.engines.npm}`);
  assert.equal(vercel.installCommand, `${pinned} npm ci`);
  assert.equal(vercel.buildCommand, `${pinned} npm run build`);
  assert.deepEqual(Object.keys(vercel).sort(), [
    "$schema", "buildCommand", "framework", "installCommand",
  ]);
});

test("operational receipts stay ignored without a required coordination framework", () => {
  assert.match(read(".gitignore"), /^\.minerva\/$/m);
  assert.match(read("eslint.config.mjs"), /"\.minerva\/\*\*"/);
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.scripts.launch, "node scripts/launch.mjs");
  assert.equal(pkg.scripts.process, undefined);
  assert.equal(pkg.scripts["test:process"], undefined);
  assert.equal(pkg.scripts["test:ops"], "node --test tests/ops/*.test.mjs");
  assert.equal(pkg.scripts.test, "node --test tests/*.test.mjs");
  assert.equal(pkg.scripts["security:audit"], "npm audit --audit-level=high");
  for (const file of ["scripts/process.mjs", "contracts/index.mjs", "tests/process.test.mjs", "tests/contracts.test.mjs"]) {
    assert.equal(existsSync(new URL(file, root)), false, `${file} must not remain a maintenance dependency`);
  }
});
