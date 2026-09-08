import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFile(resolve(root, path), "utf8");
const capabilityIds = Array.from({ length: 16 }, (_, i) => `C${String(i + 1).padStart(2, "0")}`);
const packagesIn = (source) => [...source.matchAll(/^### Prompt (\d+): ([^\n]+)\n\n```text\n([\s\S]*?)\n```/gm)];

test("the standard edition retains all packages, milestones and independent reviews", async () => {
  const prompts = await read("docs/build-prompts.md");
  const packages = packagesIn(prompts);
  assert.deepEqual(packages.map((p) => Number(p[1])), Array.from({ length: 34 }, (_, i) => i + 1));
  assert.deepEqual([...prompts.matchAll(/^## Milestone (\d):/gm)].map((m) => Number(m[1])), [1, 2, 3, 4, 5, 6]);
  assert.deepEqual([...prompts.matchAll(/^### Fable review M(\d):/gm)].map((m) => Number(m[1])), [1, 2, 3, 4, 5, 6]);
  assert.equal([...prompts.matchAll(/^## Fable consultation:/gm)].length, 1);
  for (const [, number, , body] of packages) {
    assert.match(body, /^Required prerequisites: .+/m, `Prompt ${number}`);
    assert.equal([...body.matchAll(/^Package complete when:/gm)].length, 1, `Prompt ${number}`);
    assert.doesNotMatch(body, /\/Users\/|minerva[-_]v[23]\b/, `Prompt ${number} depends on old material`);
  }
  assert.match(packages[11][2], /bidirectional voice/);
  assert.match(packages[10][3], /working Lineage view during a durable operation/);
  assert.doesNotMatch(packages[10][3], /scenarios pass in all three views/);
  assert.match(prompts, /complete Astra packages 31-33, run the Fable M6 review/);
  assert.match(packages[2][3], /M1 offers only functioning local interactions/);
  assert.doesNotMatch(packages[2][3], /real view navigation|exploration\/conversation access/);
  const spineReview = prompts.match(/### Fable review M2: [^\n]+\n\n```text\n([\s\S]*?)\n```/)?.[1];
  assert.ok(spineReview);
  assert.match(spineReview, /^Interim demonstration \(after package 10\):/m);
  assert.match(spineReview, /^Final demonstration \(after package 12\):/m);
});

test("SPEC owns the full scope and the evidence matrix covers the same capabilities", async () => {
  const spec = await read("docs/product/SPEC.md");
  const matrix = await read("docs/product/CAPABILITIES.md");
  const contract = await read("docs/product/CONTRACT.md");
  const prompts = packagesIn(await read("docs/build-prompts.md"));
  assert.deepEqual([...spec.matchAll(/^### (C\d{2}):/gm)].map((m) => m[1]), capabilityIds);
  assert.deepEqual([...matrix.matchAll(/^\| (C\d{2}) \|/gm)].map((m) => m[1]), capabilityIds);
  assert.deepEqual([...prompts[0][3].matchAll(/^(C\d{2}) /gm)].map((m) => m[1]), capabilityIds);
  assert.match(contract, /index, not a duplicate specification/);
  assert.match(prompts[0][3], /If the active contract is already correct, leave it intact/);
  assert.match(prompts[0][3], /active inherited contract is verified\s+current or reconciled/);
  assert.match(spec, /platform protection without a second owner-password screen/);
  assert.match(await read("docs/product/INTENT.md"), /C01-C16 in \[SPEC\.md\]\(\.\/SPEC\.md\)/);
  assert.match(await read("docs/product/INTENT.md"), /recovery begin with the M2 working spine/);
});

test("working instructions preserve the milestone boundaries and seed ownership", async () => {
  const agents = await read("AGENTS.md");
  const decisions = await read("docs/product/DECISIONS.md");
  assert.match(agents, /SPEC owns requirements/);
  assert.match(agents, /Fable 5\.1/);
  assert.match(agents, /seed has\s+documentation-consistency tests, not product coverage/);
  assert.doesNotMatch(agents, /Do not\s+create transcripts, diaries, phase gates/);
  assert.match(decisions, /D-104 \(superseded by D-115\)/);
  assert.match(decisions, /D-111 \(superseded by D-116\)/);
  assert.match(await read("CLAUDE.md"), /^@AGENTS\.md/m);
});

test("dry-run interaction scenarios reach implementation and independent review prompts", async () => {
  const spec = await read("docs/product/SPEC.md");
  const design = await read("docs/product/DESIGN.md");
  const prompts = await read("docs/build-prompts.md");
  const packages = packagesIn(prompts);
  assert.deepEqual([...spec.matchAll(/^\| (IB\d{2}) \|/gm)].map((m) => m[1]),
    ["IB01", "IB02", "IB03", "IB04", "IB05", "IB06"]);
  assert.match(design, /SPEC\.md#interaction-boundary-scenarios/);
  assert.match(packages[2][3], /IB01-IB06/);
  assert.match(packages[4][3], /IB01-IB04 and IB06/);
  assert.match(packages[5][3], /IB05/);
  for (const milestone of [1, 2, 6]) {
    const review = prompts.match(new RegExp(`### Fable review M${milestone}: [^\\n]+\\n\\n\`\`\`text\\n([\\s\\S]*?)\\n\`\`\``));
    assert(review, `Missing Fable M${milestone} review`);
    assert.match(review[1], /IB01-IB06/);
  }
});

async function markdownFiles(directory) {
  const files = [];
  for (const entry of await readdir(resolve(root, directory), { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) files.push(...await markdownFiles(path));
    else if (extname(path) === ".md") files.push(path);
  }
  return files;
}

test("checkpoints emit bounded operator launch prompts, not just a handoff link", async () => {
  const agents = await read("AGENTS.md");
  const prompts = await read("docs/build-prompts.md");
  const setup = await read("docs/setup.md");
  assert.match(agents, /operator handoff in the final\s+response, not just a link/);
  assert.match(prompts, /setup\.md#standard-checkpoint-output/);
  assert.match(setup, /A handoff supplies context, not authorization/);
  assert.match(setup, /not automatically after every\s+increment/);
  assert.match(setup, /\*\*Not authorized yet\*\*/);
  const review = setup.match(/### Fable review launch and prompt[\s\S]*?```text\n([\s\S]*?)\n```/)?.[1];
  const resume = setup.match(/### Astra return or next-outcome prompt[\s\S]*?```text\n([\s\S]*?)\n```/)?.[1];
  assert.ok(review);
  assert.ok(resume);
  assert.match(review, /Review checkout: <absolute-review-checkout-path>/);
  assert.match(review, /Exact committed candidate: <candidate-sha>/);
  assert.match(review, /read-only for application source/);
  assert.match(review, /M5 preserve its published-interface-first/);
  assert.match(review, /Do not implement fixes/);
  assert.match(resume, /Worktree: <absolute-existing-build-worktree-path>/);
  assert.match(resume, /Branch and expected checkpoint: <branch> at <commit-sha>/);
  assert.match(resume, /Authorized task:/);
  for (const block of [review, resume]) {
    assert.match(block, /Exclusions:/);
    assert.match(block, /docs\/HANDOFF\.md/);
    assert.match(block, /CAPABILITIES\.md/);
  }
  assert.match(resume, /Do not launch Fable automatically or advance to another increment/);
});

test("repository documentation links resolve without external workspace paths", async () => {
  const files = ["AGENTS.md", "CLAUDE.md", "README.md", "SECURITY.md", ...await markdownFiles("docs")];
  for (const file of files) {
    const prose = (await read(file)).replace(/```[\s\S]*?```/g, "");
    for (const match of prose.matchAll(/\[[^\]]+\]\(([^)\s]+)\)/g)) {
      const target = match[1];
      if (/^[a-z][a-z\d+.-]*:/i.test(target) || target.startsWith("#")) continue;
      const path = resolve(root, dirname(file), decodeURIComponent(target.split("#")[0]));
      assert(path.startsWith(root.endsWith(sep) ? root : root + sep), `${file}: link escapes repo: ${target}`);
      await access(path).catch((error) => {
        throw new Error(`${file}: missing local link ${target}`, { cause: error });
      });
    }
  }
});
