import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFileSync(join(projectRoot, path), "utf8");
const MARKERS = ["<!-- BEGIN:shared-agreement -->", "<!-- END:shared-agreement -->"];
const NEXT_MARKERS = ["<!-- BEGIN:nextjs-agent-rules -->", "<!-- END:nextjs-agent-rules -->"];
const EFFORT_LEVELS = new Set(["low", "medium", "high", "xhigh"]);

function block(text, [begin, end], file) {
  const start = text.indexOf(begin);
  const stop = text.indexOf(end);
  assert.ok(start >= 0 && stop > start, `${file} lacks a complete ${begin} block`);
  return text.slice(start + begin.length, stop);
}

function withoutNextBlock(text) {
  const start = text.indexOf(NEXT_MARKERS[0]);
  if (start < 0) return text;
  const stop = text.indexOf(NEXT_MARKERS[1]);
  return text.slice(0, start) + (stop < 0 ? "" : text.slice(stop + NEXT_MARKERS[1].length));
}

test("AGENTS.md and CLAUDE.md carry a byte-identical shared agreement", () => {
  const agents = block(read("AGENTS.md"), MARKERS, "AGENTS.md");
  const claude = block(read("CLAUDE.md"), MARKERS, "CLAUDE.md");
  assert.equal(claude, agents);
  const bullets = agents.split("\n").filter((line) => line.startsWith("- "));
  assert.ok(bullets.length >= 5, `shared agreement has ${bullets.length} bullets; expected at least 5`);
});

test("harness instruction files stay short and do not import each other", () => {
  for (const file of ["AGENTS.md", "CLAUDE.md"]) {
    const lines = withoutNextBlock(read(file)).trim().split("\n").length;
    assert.ok(lines <= 60, `${file} is ${lines} lines outside the Next.js block; keep it at or under 60`);
  }
  assert.doesNotMatch(read("CLAUDE.md"), /@AGENTS\.md/, "CLAUDE.md must carry its own copy, not import AGENTS.md");
  assert.match(read("AGENTS.md"), /^## Codex$/m);
  assert.match(read("CLAUDE.md"), /^## Claude Code$/m);
});

test("each harness has an explicit effort default that its instruction file names", () => {
  const codex = read(".codex/config.toml").match(/^model_reasoning_effort\s*=\s*"([a-z]+)"$/m);
  assert.ok(codex, ".codex/config.toml must set model_reasoning_effort");
  assert.ok(EFFORT_LEVELS.has(codex[1]) || codex[1] === "minimal", `unexpected Codex effort ${codex[1]}`);
  assert.match(read("AGENTS.md"), new RegExp(`effort starts at \`${codex[1]}\``, "i"));

  const claude = JSON.parse(read(".claude/settings.json"));
  assert.ok(EFFORT_LEVELS.has(claude.effortLevel), `unexpected Claude Code effortLevel ${claude.effortLevel}`);
  assert.match(read("CLAUDE.md"), new RegExp(`Effort starts at \`${claude.effortLevel}\``));
});
