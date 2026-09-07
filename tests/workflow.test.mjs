import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const root = new URL("../", import.meta.url);
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

test("routine process state remains outside Git and lint inputs", () => {
  assert.match(read(".gitignore"), /^\.minerva\/$/m);
  assert.match(read("eslint.config.mjs"), /"\.minerva\/\*\*"/);
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.scripts.launch, "node scripts/launch.mjs");
  assert.equal(pkg.scripts.process, "node scripts/process.mjs");
});
