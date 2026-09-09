import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFile(resolve(root, path), "utf8");
const capabilityIds = Array.from({ length: 15 }, (_, i) => `C${String(i + 1).padStart(2, "0")}`);
const packageIds = Array.from({ length: 32 }, (_, i) => i + 1);
const packagesIn = (source) => [...source.matchAll(/^### Prompt (\d+): ([^\n]+)\n\n```text\n([\s\S]*?)\n```/gm)];

test("the prototype has consecutive packages and complete milestone reviews", async () => {
  const prompts = await read("docs/build-prompts.md");
  const packages = packagesIn(prompts);
  assert.deepEqual(packages.map((p) => Number(p[1])), packageIds);
  assert.deepEqual([...prompts.matchAll(/^## Milestone (\d):/gm)].map((m) => Number(m[1])), [1, 2, 3, 4, 5, 6]);
  assert.deepEqual([...prompts.matchAll(/^### Fable review M(\d):/gm)].map((m) => Number(m[1])), [1, 2, 3, 4, 5, 6]);
  assert.equal([...prompts.matchAll(/^## Fable consultation:/gm)].length, 1);
  for (const [, number, , body] of packages) {
    assert.match(body, /^Required prerequisites: .+/m, `Prompt ${number}`);
    assert.equal([...body.matchAll(/^Package complete when:/gm)].length, 1, `Prompt ${number}`);
    assert.match(body, /Read AGENTS\.md/, `Prompt ${number} must load the shared working rules`);
    assert.doesNotMatch(body, /\/Users\/|minerva[-_]v[23]\b/, `Prompt ${number} depends on old material`);
  }
  assert.match(packages[0][3], /tests\/seed-only\.test\.mjs/, "Prompt 1 must delete the seed-only test");
  assert.match(packages[11][2], /bidirectional voice/);
  assert.match(packages[10][3], /working Lineage view during a durable operation/);
  assert.doesNotMatch(packages[10][3], /scenarios pass in all three views/);
  assert.match(prompts, /complete Astra packages 29-31, run the Fable M6 review/);
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
  const index = await read("README.md");
  const prompts = packagesIn(await read("docs/build-prompts.md"));
  assert.deepEqual([...spec.matchAll(/^### (C\d{2}):/gm)].map((m) => m[1]), capabilityIds);
  assert.deepEqual([...matrix.matchAll(/^\| (C\d{2}) \|/gm)].map((m) => m[1]), capabilityIds);
  assert.match(index, /## Documentation/);
  assert.match(index, /SPEC owns behavior/);
  assert.match(prompts[0][3], /SPEC\.md owns all fifteen required capabilities/);
  assert.doesNotMatch(prompts[0][3], /^C\d{2} /m);
  assert.match(spec, /no\s+sign-in, account or owner-password screen/);
  assert.match(spec, /demonstration\s+window/);
  assert.match(await read("docs/product/INTENT.md"), /C01-C15 in \[SPEC\.md\]\(\.\/SPEC\.md\)/);
  assert.match(await read("docs/product/INTENT.md"), /recovery begin with the M2 working spine/);
});

test("working instructions preserve the milestone boundaries and seed ownership", async () => {
  const agents = await read("AGENTS.md");
  assert.match(agents, /SPEC owns requirements/);
  assert.match(agents, /Fable 5\.1/);
  assert.match(agents, /seed has\s+documentation-consistency tests, not product coverage/);
  assert.doesNotMatch(agents, /Do not\s+create transcripts, diaries, phase gates/);
  assert.match(agents, /Read the selected package and relevant contracts/);
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
  const architecture = await read("docs/product/ARCHITECTURE.md");
  const setup = await read("docs/setup.md");
  const packages = packagesIn(await read("docs/build-prompts.md"));
  const pkg = (number) => packages.find((p) => p[1] === String(number))[3];
  assert.match(architecture, /@xyflow\/react/);
  assert.match(architecture, /drizzle-orm/);
  assert.match(architecture, /drizzle-kit/);
  assert.match(architecture, /AI Gateway/);
  assert.match(pkg(2), /@xyflow\/react/);
  assert.match(pkg(4), /drizzle-orm/);
  assert.match(pkg(8), /persisted progress initially/);
  assert.match(pkg(9), /AI Gateway/);
  assert.match(pkg(12), /AI Gateway/);
  assert.match(architecture, /mutation and its command receipt in the same database transaction/);
  assert.match(architecture, /Canceling a poll does not stop the\s+run/);
  assert.match(architecture, /Do not replace migrations with schema push/);
  assert.match(architecture, /Typed and voice collaboration share context compilation/);
  assert.match(setup, /React Flow with custom cards\/application layouts, Drizzle with explicit SQL/);
  assert.match(setup, /AI Gateway/);
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

test("entry points keep no-sign-in, loopback development and the Vercel demonstration target", async () => {
  for (const file of ["README.md", "AGENTS.md", "SECURITY.md", "docs/setup.md",
    "docs/product/INTENT.md", "docs/product/SPEC.md", "docs/product/ARCHITECTURE.md",
    "docs/build-prompts.md"]) {
    const source = await read(file);
    assert.match(source, /no.sign.in/i, file);
    assert.match(source, /loopback|localhost/i, file);
    assert.match(source, /Vercel/, file);
    assert.doesNotMatch(source, /C01-C16|sixteen required|34 (?:Astra work |mandatory |work )?packages/, file);
    assert.doesNotMatch(source, /READY TO DEPLOY|DEPLOYED OUTCOME CONFIRMED|platform-authenticated access/, file);
    assert.doesNotMatch(source,
      /Hosting is optional only|stay local|suitable\s+private boundary|\$100|expose it directly to the internet/,
      `${file} still carries the local-only hosting posture`);
  }
  const spec = await read("docs/product/SPEC.md");
  const architecture = await read("docs/product/ARCHITECTURE.md");
  assert.match(spec, /Host\/Origin/);
  assert.match(spec, /cross-origin\s+mutations/);
  assert.match(architecture, /Postgres/);
  assert.match(architecture, /Vercel Workflow/);
  assert.match(architecture, /demonstration\s+window/);

  const manifest = JSON.parse(await read("package.json"));
  assert.equal(manifest.scripts.dev, "next dev --hostname 127.0.0.1");
  assert.equal(manifest.scripts.start, "next start --hostname 127.0.0.1");
});

test("M5 ends with browser outputs and M6 releases the hosted demonstration", async () => {
  const source = await read("docs/build-prompts.md");
  const packages = packagesIn(source);
  const outputs = packages.find((p) => p[1] === "28")[3];
  assert.match(outputs, /Milestone closeout: demonstrate this complete M5 journey/);
  assert.match(outputs, /Fable M5 review packet is prepared/);
  const m5 = source.match(/### Fable review M5: [^\n]+\n\n```text\n([\s\S]*?)\n```/)[1];
  assert.doesNotMatch(m5, /actual MCP client|published API|cold-start/);
  assert.match(m5, /instruments in the browser/);
  const release = packages.find((p) => p[1] === "32")[3];
  assert.match(release, /Vercel/);
  assert.match(release, /demonstration\s+window/);
  assert.match(release, /hosted journey/);
  assert.match(release, /tear down/);
  assert.doesNotMatch(release, /Hosting is not required|machine access|pre-deployment review/);
  const m6 = source.match(/### Fable review M6: [^\n]+\n\n```text\n([\s\S]*?)\n```/)[1];
  assert.match(m6, /READY FOR HOSTED RELEASE/);
  assert.match(m6, /HOSTED OPERATION CONFIRMED/);
  assert.doesNotMatch(m6, /LOCAL OPERATION CONFIRMED|Hosted operation is not required/);
});

test("current documents have valid capability references and no obsolete scaffolding", async () => {
  for (const file of ["AGENTS.md", "README.md", ...await markdownFiles("docs")]) {
    const source = await read(file);
    assert.doesNotMatch(source, /CONTRACT\.md|DECISIONS\.md|vercel-facts\.md|D-\d{3}/, file);
    assert.doesNotMatch(source, /superseded|retired|23-prompt|scope amendment/i, file);
    for (const [id] of source.matchAll(/\bC\d{2}\b/g)) {
      assert(capabilityIds.includes(id), `${file}: unknown capability ${id}`);
    }
    const authored = source.replace(/<!-- BEGIN:nextjs-agent-rules -->[\s\S]*?<!-- END:nextjs-agent-rules -->/, "");
    assert.doesNotMatch(authored, /<!--/, `${file}: commented-out documentation`);
  }
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
