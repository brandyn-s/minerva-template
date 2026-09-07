import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

test("the R0 shell reports completed groundwork without claiming product capability", () => {
  const pageSource = readFileSync(join(projectRoot, "app/page.tsx"), "utf8");

  assert.match(pageSource, /<h1>R0 groundwork is complete\.<\/h1>/);
  assert.match(pageSource, /It does not yet\s+provide a Minerva product capability\./);
});
