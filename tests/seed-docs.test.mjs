import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFile(resolve(root, path), "utf8");
const capabilityIds = Array.from({ length: 16 }, (_, i) => `C${String(i + 1).padStart(2, "0")}`)
  .filter((id) => id !== "C15");
const packageIds = Array.from({ length: 34 }, (_, i) => i + 1)
  .filter((id) => id !== 29 && id !== 30);
const packagesIn = (source) => [...source.matchAll(/^### Prompt (\d+): ([^\n]+)\n\n```text\n([\s\S]*?)\n```/gm)];

test("the prototype retires only external API packages and retains milestone reviews", async () => {
  const prompts = await read("docs/build-prompts.md");
  const packages = packagesIn(prompts);
  assert.deepEqual(packages.map((p) => Number(p[1])), packageIds);
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
  assert.match(spec, /loopback-only local access with no sign-in/);
  assert.match(await read("docs/product/INTENT.md"), /C01-C14 and C16 in \[SPEC\.md\]\(\.\/SPEC\.md\)/);
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

test("selected foundations reach the relevant implementation packages", async () => {
  const decisions = await read("docs/product/DECISIONS.md");
  const architecture = await read("docs/product/ARCHITECTURE.md");
  const packages = packagesIn(await read("docs/build-prompts.md"));
  for (const id of ["D-129", "D-130", "D-131"]) {
    assert.match(decisions, new RegExp(`^\\| ${id} \\|`, "m"));
  }
  assert.match(architecture, /@xyflow\/react/);
  assert.match(architecture, /drizzle-orm/);
  assert.match(architecture, /drizzle-kit/);
  assert.match(packages.find((p) => p[1] === "2")[3], /@xyflow\/react, D-129/);
  assert.match(packages.find((p) => p[1] === "4")[3], /drizzle-orm, D-130/);
  assert.match(packages.find((p) => p[1] === "8")[3], /persisted progress initially \(D-131\)/);
  assert.doesNotMatch(decisions.split("## Deliberately open")[1], /Canvas renderer/);
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
  assert.doesNotMatch(review, /published-interface-first|cold-start/);
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

test("prototype entry points retain the local no-sign-in scope and internal backend", async () => {
  for (const file of ["README.md", "AGENTS.md", "docs/setup.md",
    "docs/product/INTENT.md", "docs/product/SPEC.md", "docs/product/ARCHITECTURE.md",
    "docs/build-prompts.md"]) {
    const source = await read(file);
    assert.match(source, /no.sign.in/i, file);
    assert.match(source, /loopback|localhost/i, file);
    assert.doesNotMatch(source, /C01-C16|sixteen required|34 (?:Astra work |mandatory |work )?packages/, file);
    assert.doesNotMatch(source, /READY TO DEPLOY|DEPLOYED OUTCOME CONFIRMED|platform-authenticated access/, file);
  }
  const spec = await read("docs/product/SPEC.md");
  const architecture = await read("docs/product/ARCHITECTURE.md");
  assert.match(spec, /Host\/Origin/);
  assert.match(spec, /cross-origin\s+mutations/);
  assert.match(architecture, /Postgres/);
  assert.match(architecture, /Vercel Workflow/);
  assert.match(architecture, /existing suitable\s+private boundary/);

  const manifest = JSON.parse(await read("package.json"));
  assert.equal(manifest.scripts.dev, "next dev --hostname 127.0.0.1");
  assert.equal(manifest.scripts.start, "next start --hostname 127.0.0.1");
});

test("M5 ends with browser outputs and M6 permits local completion without hosting", async () => {
  const source = await read("docs/build-prompts.md");
  const packages = packagesIn(source);
  const outputs = packages.find((p) => p[1] === "28")[3];
  assert.match(outputs, /Milestone closeout: demonstrate this complete M5 journey/);
  assert.match(outputs, /Fable M5 review packet is prepared/);
  const m5 = source.match(/### Fable review M5: [^\n]+\n\n```text\n([\s\S]*?)\n```/)[1];
  assert.doesNotMatch(m5, /actual MCP client|published API|cold-start/);
  assert.match(m5, /instruments in the browser/);
  const release = packages.find((p) => p[1] === "34")[3];
  assert.match(release, /Hosting is not required to complete this package/);
  assert.match(release, /integrated local journey/);
  assert.match(release, /existing\s+suitable private boundary/);
  assert.doesNotMatch(release, /machine access|pre-deployment review/);
  const m6 = source.match(/### Fable review M6: [^\n]+\n\n```text\n([\s\S]*?)\n```/)[1];
  assert.match(m6, /LOCAL OPERATION CONFIRMED/);
  assert.match(m6, /Hosted operation is not required/);
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
