import test from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { execute } from "../../scripts/deploy.mjs";

const sha = "b".repeat(40);
const pins = {
  framework: "nextjs",
  installCommand: "npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci",
  buildCommand: "npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run build",
};
function fixture(t, change = {}) {
  const cwd = resolve(`.minerva-test-deploy-${process.pid}-${Math.random().toString(16).slice(2)}`);
  mkdirSync(cwd);
  t.after(() => rmSync(cwd, { recursive: true, force: true }));
  const config = {
    version: 1, repo: "example/product", profile: "full", visibility: "private",
    source: { repo: "brandyn-s/minerva-template", revision: "a".repeat(40) },
    authorization: { basis: "owner-launch-instruction", scope: "full", firstImplementation: true, deploy: true, spendUsd: 0 },
    hosting: { provider: "vercel", team: "example", creationAuthorized: false },
    ai: { provider: "vercel-ai-gateway", baseUrl: "https://ai-gateway.vercel.sh/v1", model: "openai/gpt-5.4-mini" },
    ...change,
  };
  writeFileSync(resolve(cwd, "launch.json"), JSON.stringify(config));
  writeFileSync(resolve(cwd, "vercel.json"), JSON.stringify(pins));
  const project = { id: "prj_test", name: "product", accountId: "team_test", ...pins, link: { type: "github", org: "example", repo: "product" } };
  const deployment = { id: "dpl_test", projectId: project.id, readyState: "READY", url: "product-abc.vercel.app", gitSource: { type: "github", org: "example", repo: "product", sha } };
  const calls = [];
  const opts = {
    cwd, env: { VERCEL_TOKEN: "secret-token" }, attempts: 3, sleep: async () => {},
    run: (_cmd, args) => ({ status: 0, stdout: args.includes("HEAD") ? sha : args.includes("remote") ? "https://github.com/example/product.git" : "" }),
    fetch: async (url, init) => {
      calls.push({ url: String(url), init });
      const path = new URL(url).pathname;
      if (path === "/v9/projects/product") return Response.json(project);
      throw new Error("Unexpected request");
    },
  };
  const args = (command, extra = []) => [command, "--file", "launch.json", "--project", "product", "--team", "example", ...extra];
  return { cwd, config, project, deployment, calls, opts, args };
}

test("project resumes exact compatible existing project without mutation", async (t) => {
  const f = fixture(t);
  const result = await execute(f.args("project"), f.opts);
  assert.equal(result.projectId, "prj_test");
  assert.equal(result.status, "project-verified");
  assert.equal(f.calls.length, 1);
  assert.equal(f.calls[0].init.method, "GET");
  assert.equal(new URL(f.calls[0].url).searchParams.get("slug"), "example");
});

test("project receipt reads back hosting posture and warns when Git deployments and protection are not recorded", async (t) => {
  const f = fixture(t);
  Object.assign(f.project, { link: { ...f.project.link, productionBranch: "main" }, gitProviderOptions: { createDeployments: "enabled" }, ssoProtection: { deploymentType: "preview" } });
  const r = await execute(f.args("project"), f.opts);
  assert.deepEqual(r.hosting, { rootDirectory: null, productionBranch: "main", gitCreateDeployments: "enabled", ssoProtection: "preview", passwordProtection: false });
  assert.ok(r.warnings.some((w) => w.startsWith("git-deployments-not-disabled")));
  assert.ok(r.warnings.some((w) => w.startsWith("deployment-protection-preview")));
  const saved = JSON.parse(readFileSync(resolve(f.cwd, ".minerva/project-example-product.json"), "utf8"));
  assert.deepEqual(saved.hosting, r.hosting);
  assert.deepEqual(saved.warnings, r.warnings);
  assert.ok(f.calls.every((c) => c.init.method === "GET"));
});

test("recorded Git-deploy permission and full protection clear the hosting warnings", async (t) => {
  const f = fixture(t);
  Object.assign(f.project, { gitProviderOptions: { createDeployments: "enabled" }, ssoProtection: { deploymentType: "all" } });
  f.config.hosting.gitDeploymentsAuthorized = true;
  writeFileSync(resolve(f.cwd, "launch.json"), JSON.stringify(f.config));
  const r = await execute(f.args("project"), f.opts);
  assert.deepEqual(r.warnings, []);
  assert.equal(r.hosting.ssoProtection, "all");
});

test("a project with rootDirectory is refused with the configuration-precedence explanation and no POST", async (t) => {
  const f = fixture(t);
  f.project.rootDirectory = "apps/product";
  await assert.rejects(execute(f.args("project"), f.opts), /rootDirectory is set \(apps\/product\)[^]*ignores configuration above/);
  assert.ok(f.calls.every((c) => c.init.method === "GET"));
});

test("env upserts one variable for explicit targets, reads it back, and never records the value", async (t) => {
  const f = fixture(t);
  f.opts.env = { VERCEL_TOKEN: "secret-token", MY_SOURCE: "s3cret-value" };
  let posted = null;
  f.opts.fetch = async (url, init) => {
    const u = new URL(url);
    assert.equal(u.searchParams.get("slug"), "example");
    if (u.pathname === "/v9/projects/product") return Response.json(f.project);
    if (u.pathname === "/v10/projects/prj_test/env" && init.method === "POST") {
      assert.equal(u.searchParams.get("upsert"), "true");
      posted = JSON.parse(init.body);
      return Response.json({ created: { key: posted.key, target: posted.target }, failed: [] });
    }
    if (u.pathname === "/v10/projects/prj_test/env") {
      return Response.json({ envs: [{ key: "MY_KEY", target: ["preview", "development"], type: "encrypted", value: "s3cret-value" }, { key: "OTHER", target: ["production"], type: "plain", value: "x" }] });
    }
    assert.fail(`Unexpected endpoint ${u.pathname}`);
  };
  const r = await execute(f.args("env", ["--key", "MY_KEY", "--target", "development,preview", "--value-env", "MY_SOURCE"]), f.opts);
  assert.deepEqual(posted, { key: "MY_KEY", value: "s3cret-value", type: "encrypted", target: ["development", "preview"] });
  assert.equal(r.status, "env-verified");
  assert.deepEqual(r.variables, [{ key: "MY_KEY", target: ["development", "preview"], type: "encrypted" }, { key: "OTHER", target: ["production"], type: "plain" }]);
  assert.deepEqual(r.warnings, []);
  const saved = readFileSync(resolve(f.cwd, ".minerva/env-example-product.json"), "utf8");
  assert.ok(!saved.includes("s3cret-value") && !saved.includes("secret-token"));
  assert.ok(!JSON.stringify(r).includes("s3cret-value"));
});

test("env with a production target is allowed only explicitly and carries a warning; readback mismatch is unverified", async (t) => {
  const f = fixture(t);
  f.opts.env = { VERCEL_TOKEN: "secret-token", MY_SOURCE: "v" };
  f.opts.fetch = async (url, init) => {
    const u = new URL(url);
    if (u.pathname === "/v9/projects/product") return Response.json(f.project);
    if (init.method === "POST") return Response.json({ created: {}, failed: [] });
    return Response.json({ envs: [{ key: "MY_KEY", target: ["preview"], type: "encrypted" }] });
  };
  const r = await execute(f.args("env", ["--key", "MY_KEY", "--target", "production", "--value-env", "MY_SOURCE"]), f.opts);
  assert.equal(r.status, "env-unverified");
  assert.ok(r.warnings[0].startsWith("production-target"));
});

for (const [name, extra, env] of [
  ["missing permission", ["--key", "MY_KEY", "--target", "preview", "--value-env", "MY_SOURCE"], { VERCEL_TOKEN: "t", MY_SOURCE: "v" }],
  ["invalid target", ["--key", "MY_KEY", "--target", "staging", "--value-env", "MY_SOURCE"], { VERCEL_TOKEN: "t", MY_SOURCE: "v" }],
  ["lowercase key", ["--key", "my_key", "--target", "preview", "--value-env", "MY_SOURCE"], { VERCEL_TOKEN: "t", MY_SOURCE: "v" }],
  ["unset source variable", ["--key", "MY_KEY", "--target", "preview", "--value-env", "MY_SOURCE"], { VERCEL_TOKEN: "t" }],
  ["value in arguments", ["--key", "MY_KEY", "--target", "preview", "--value-env", "not-a-name"], { VERCEL_TOKEN: "t" }],
]) {
  test(`env refuses ${name} without POST`, async (t) => {
    const f = fixture(t);
    f.opts.env = env;
    if (name === "missing permission") {
      f.config.authorization.deploy = false;
      writeFileSync(resolve(f.cwd, "launch.json"), JSON.stringify(f.config));
    }
    await assert.rejects(execute(f.args("env", extra), f.opts));
    assert.ok(f.calls.every((c) => c.init.method === "GET"));
  });
}

test("deploy persists identity, resumes without POST, and verifies anonymous immutable and stable HTTP", async (t) => {
  const f = fixture(t);
  let posts = 0;
  f.opts.fetch = async (url, init) => {
    const u = new URL(url);
    f.calls.push({ url: String(url), init });
    if (u.origin !== "https://api.vercel.com") {
      assert.equal(init.headers?.Authorization, undefined);
      assert.equal(init.redirect, "manual");
      return new Response("expected-marker", { headers: { "content-type": "text/html" } });
    }
    assert.equal(init.headers.Authorization, "Bearer secret-token");
    assert.equal(u.searchParams.get("slug"), "example");
    if (u.pathname === "/v9/projects/product") return Response.json(f.project);
    if (u.pathname === "/v13/deployments" && init.method === "POST") {
      posts++;
      assert.deepEqual(JSON.parse(init.body).gitSource, { type: "github", org: "example", repo: "product", sha, ref: sha });
      assert.equal(JSON.parse(init.body).target, undefined);
      return Response.json(f.deployment);
    }
    if (u.pathname === "/v13/deployments/dpl_test") return Response.json(f.deployment);
    if (u.pathname === "/v3/deployments/dpl_test/events") {
      assert.equal(u.searchParams.get("builds"), "1");
      assert.equal(u.searchParams.get("follow"), "0");
      assert.equal(u.searchParams.get("limit"), "100");
      return Response.json([{ type: "stdout", text: "secret-token private build content" }]);
    }
    if (u.pathname === "/v4/aliases/product.vercel.app") return Response.json({ alias: "product.vercel.app", deploymentId: "dpl_test", projectId: "prj_test" });
    assert.fail(`Unexpected endpoint ${u.pathname}`);
  };
  const args = f.args("deploy", ["--sha", sha, "--path", "/workspace", "--expect-text", "expected-marker", "--stable-origin", "https://product.vercel.app"]);
  assert.equal((await execute(args, f.opts)).status, "runtime-contract-verified");
  assert.equal((await execute(args, f.opts)).status, "runtime-contract-verified");
  assert.equal(posts, 1);
  const receipt = readFileSync(resolve(f.cwd, `.minerva/deploy-example-product-${sha}.json`), "utf8");
  assert.ok(!receipt.includes("secret-token") && !receipt.includes("private build") && !receipt.includes("expected-marker"));
});

test("absent project is permission-gated and authorized creation requires live readback", async (t) => {
  const f = fixture(t);
  let posts = 0;
  let present = false;
  f.opts.fetch = async (_url, init) => {
    if (init.method === "POST") {
      posts++;
      assert.deepEqual(JSON.parse(init.body).gitRepository, { type: "github", repo: f.config.repo });
      present = true;
      return Response.json(f.project);
    }
    return present ? Response.json(f.project) : new Response(null, { status: 404 });
  };
  await assert.rejects(execute(f.args("project"), f.opts), /permission/i);
  assert.equal(posts, 0);
  f.config.hosting.creationAuthorized = true;
  writeFileSync(resolve(f.cwd, "launch.json"), JSON.stringify(f.config));
  await assert.rejects(execute(f.args("project"), f.opts), /auto-deployment permission/);
  assert.equal(posts, 0);
  f.config.hosting.gitDeploymentsAuthorized = true;
  f.config.authorization.deploy = false;
  writeFileSync(resolve(f.cwd, "launch.json"), JSON.stringify(f.config));
  await assert.rejects(execute(f.args("project"), f.opts), /deployment.*permission/);
  assert.equal(posts, 0);
  f.config.authorization.deploy = true;
  writeFileSync(resolve(f.cwd, "launch.json"), JSON.stringify(f.config));
  assert.equal((await execute(f.args("project"), f.opts)).status, "project-verified");
  assert.equal(posts, 1);
});

test("successive committed revisions get distinct resumable deployment receipts", async (t) => {
  const f = fixture(t);
  const revisions = [sha, "c".repeat(40)];
  let current = sha;
  let posts = 0;
  const deployments = new Map();
  f.opts.run = (_command, args) => ({ status: 0, stdout: args.includes("HEAD") ? current
    : args.includes("remote") ? "https://github.com/example/product.git" : "" });
  f.opts.fetch = async (url, init) => {
    const path = new URL(url).pathname;
    if (path.startsWith("/v9/")) return Response.json(f.project);
    if (path.startsWith("/v3/")) return Response.json([]);
    if (init.method === "POST") {
      const id = `dpl_revision${++posts}`;
      const deployment = { ...f.deployment, id, gitSource: { ...f.deployment.gitSource, sha: current } };
      deployments.set(id, deployment);
      return Response.json(deployment);
    }
    return Response.json(deployments.get(path.split("/").at(-1)));
  };
  for (current of revisions) {
    const args = f.args("deploy", ["--sha", current]);
    const first = await execute(args, f.opts);
    assert.equal((await execute(args, f.opts)).deploymentId, first.deploymentId);
    assert.equal(first.sha, current);
    assert.ok(JSON.parse(readFileSync(resolve(f.cwd, `.minerva/deploy-example-product-${current}.json`))).deploymentId);
  }
  assert.equal(posts, 2);
});
for (const mismatch of ["repo", "project", "framework", "installCommand", "buildCommand", "team", "template", "permission", "dirty"]) {
  test(`denies ${mismatch} without POST`, async (t) => {
    const f = fixture(t);
    if (mismatch === "repo") f.project.link.repo = "other";
    if (mismatch === "project") f.project.name = "other";
    if (["framework", "installCommand", "buildCommand"].includes(mismatch)) f.project[mismatch] = "wrong";
    if (mismatch === "team") f.config.hosting.team = "other";
    if (mismatch === "template") f.config.repo = "brandyn-s/minerva-template";
    if (mismatch === "permission") f.config.authorization.deploy = false;
    if (mismatch === "dirty") f.opts.run = () => ({ status: 0, stdout: "dirty" });
    writeFileSync(resolve(f.cwd, "launch.json"), JSON.stringify(f.config));
    await assert.rejects(execute(f.args("deploy", ["--sha", sha]), f.opts));
    assert.ok(f.calls.every((c) => c.init.method === "GET"));
  });
}

for (const [status, text, classification] of [[302, "", "access-blocked"], [500, "", "runtime-failure"], [404, "", "propagation-incomplete"], [200, "wrong", "runtime-mismatch"]]) {
  test(`anonymous runtime ${status} classifies ${classification}`, async (t) => {
    const f = fixture(t);
    let runtimeReads = 0;
    f.opts.fetch = async (url, init) => {
      const u = new URL(url);
      if (u.origin !== "https://api.vercel.com") {
        runtimeReads++;
        assert.equal(init.headers, undefined);
        return new Response(text, { status, headers: { "content-type": "text/html", location: "https://sso.example/login?secret=x" } });
      }
      if (u.pathname.startsWith("/v9/")) return Response.json(f.project);
      if (u.pathname.startsWith("/v13/")) return Response.json(f.deployment);
      if (u.pathname.startsWith("/v3/")) return Response.json([]);
      if (u.pathname.startsWith("/v4/")) return Response.json({ alias: "product.vercel.app", projectId: "prj_test", deploymentId: "dpl_test" });
      assert.fail("unexpected request");
    };
    const r = await execute(f.args("observe", ["--deployment", "dpl_test", "--path", "/workspace", "--expect-text", "marker", "--stable-origin", "https://product.vercel.app"]), f.opts);
    assert.equal(r.status, "incomplete");
    assert.equal(r.runtime[0].classification, classification);
    assert.equal(runtimeReads, status === 404 ? 6 : 2);
    assert.ok(!JSON.stringify(r).includes("secret"));
  });
}

test("ambiguous deployment POST is never duplicated", async (t) => {
  const f = fixture(t);
  let posts = 0;
  f.opts.fetch = async (_url, init) => {
    if (init.method === "POST") { posts++; throw new Error("private response"); }
    return Response.json(f.project);
  };
  for (let i = 0; i < 2; i++) await assert.rejects(execute(f.args("deploy", ["--sha", sha]), f.opts), /manual reconciliation/);
  assert.equal(posts, 1);
});

test("bounded read retries honor Retry-After without retrying auth failures", async (t) => {
  const f = fixture(t);
  let reads = 0;
  const waits = [];
  f.opts.sleep = async (ms) => waits.push(ms);
  f.opts.fetch = async () => ++reads < 3 ? new Response(null, { status: 429, headers: { "retry-after": "2" } }) : Response.json(f.project);
  assert.equal((await execute(f.args("project"), f.opts)).status, "project-verified");
  assert.deepEqual(waits, [2000, 2000]);
  f.opts.fetch = async () => { reads++; return new Response(null, { status: 403 }); };
  await assert.rejects(execute(f.args("project"), f.opts), /403/);
  assert.equal(reads, 4);
  f.opts.fetch = async () => new Response(null, { status: 429, headers: { "retry-after": "600" } });
  await assert.rejects(execute(f.args("project"), f.opts), /deadline/);
});

for (const state of ["READY", "ERROR", "QUEUED"]) {
  test(`bounded metadata polling reports ${state} and sanitizes events`, async (t) => {
    const f = fixture(t);
    let reads = 0;
    f.opts.fetch = async (url) => {
      const path = new URL(url).pathname;
      if (path.startsWith("/v9/")) return Response.json(f.project);
      if (path.startsWith("/v13/")) return Response.json({ ...f.deployment, readyState: ++reads === 1 ? "BUILDING" : state });
      if (path.startsWith("/v3/")) return Response.json([{ type: "error", text: "secret-token" }]);
      assert.fail("unexpected endpoint");
    };
    const result = await execute(f.args("observe", ["--deployment", "dpl_test"]), f.opts);
    assert.equal(result.status, state === "ERROR" ? "build-failure" : state === "QUEUED" ? "queued-or-building" : "incomplete");
    assert.equal(result.events.counts.error, 1);
    assert.equal(reads, state === "QUEUED" ? 3 : 2);
    assert.ok(!JSON.stringify(result).includes("secret-token"));
  });
}

test("wrong stable alias prevents all runtime fetches", async (t) => {
  const f = fixture(t);
  f.opts.fetch = async (url) => {
    const u = new URL(url);
    assert.equal(u.origin, "https://api.vercel.com");
    if (u.pathname.startsWith("/v9/")) return Response.json(f.project);
    if (u.pathname.startsWith("/v13/")) return Response.json(f.deployment);
    if (u.pathname.startsWith("/v3/")) return Response.json([]);
    if (u.pathname.startsWith("/v4/")) return Response.json({ alias: "product.vercel.app", projectId: "prj_test", deploymentId: "dpl_other" });
    assert.fail("unexpected endpoint");
  };
  const result = await execute(f.args("observe", ["--deployment", "dpl_test", "--path", "/workspace", "--expect-text", "marker", "--stable-origin", "https://product.vercel.app"]), f.opts);
  assert.equal(result.status, "stable-alias-unverified");
  assert.deepEqual(result.runtime, []);
});

for (const bad of ["https://evil.example", "https://product.vercel.app/?token=x", "https://user@product.vercel.app", "https://product.vercel.app#x", "https://product.vercel.app.evil.example"]) {
  test(`rejects untrusted stable origin ${bad}`, async (t) => {
    const f = fixture(t);
    await assert.rejects(execute(f.args("observe", ["--deployment", "dpl_test", "--stable-origin", bad]), f.opts), /origins/);
    assert.equal(f.calls.length, 1);
  });
}
