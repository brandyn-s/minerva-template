import test from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { randomUUID } from "node:crypto";
import { main, parseArgs, checkPins, SOURCE } from "../scripts/launch.mjs";

const SHA = "a".repeat(40);
const REPO = "demo-owner/launch-sample";
const ok = (data) => ({ status: 0, stdout: data === undefined ? "" : JSON.stringify(data), stderr: "" });
const fail = (code) => ({ status: 1, stdout: "", stderr: `gh: HTTP ${code}` });

function fixture(t) {
  const cwd = resolve(".minerva", `launch-test-${randomUUID()}`);
  mkdirSync(cwd, { recursive: true });
  t.after(() => rmSync(cwd, { recursive: true, force: true }));
  const files = {
    ".node-version": "24.20.0\n", ".nvmrc": "24.20.0\n",
    ".npmrc": "engine-strict=true\nsave-exact=true\n",
    "package.json": JSON.stringify({ engines: { node: "24.20.0", npm: "12.0.2" }, packageManager: "npm@12.0.2" }),
    "vercel.json": JSON.stringify({
      installCommand: "npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci",
      buildCommand: "npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run build",
    }),
  };
  for (const [name, contents] of Object.entries(files)) writeFileSync(resolve(cwd, name), contents);
  return cwd;
}

async function init(cwd, extra = []) {
  return main(["init", "--repo", REPO, "--profile", "full", ...extra], {
    cwd, run: () => ({ status: 0, stdout: `${SHA}\n`, stderr: "" }),
  });
}

function fakeGitHub({ cwd, timeout = false, mismatch = false, targetExists = false, auth = false, optional = 403, badControls = false, badActions = false, actionsUnavailable = false } = {}) {
  const calls = [];
  let created = false;
  let refs = 0;
  let controls = {};
  const actions = {};
  let repositoryId = 54321;
  let storedRules;
  const metadata = () => ({
    id: repositoryId, full_name: REPO, private: !mismatch, is_template: false, default_branch: "main", ...controls,
  });
  const run = (command, args, options) => {
    if (command === "npm") return { status: -1, stdout: "", stderr: "" };
    calls.push({ command, args, input: options?.input });
    if (command === "git") {
      if (args[0] === "check-ignore") return ok();
      if (args[0] === "ls-files") return { status: 1, stdout: "", stderr: "" };
      let stdout = "";
      if (args.includes("--show-toplevel")) stdout = options.cwd;
      if (args[0] === "remote") stdout = `https://github.com/${REPO}.git`;
      if (args.includes("HEAD")) stdout = SHA;
      return { status: 0, stdout, stderr: "" };
    }
    if (command !== "gh") throw new Error("Unexpected executable");
    if (args[0] === "repo" && args[1] === "create") { created = true; return ok(); }
    if (args[0] === "repo" && args[1] === "clone") {
      mkdirSync(resolve(args[3], ".vercel"), { recursive: true });
      mkdirSync(resolve(args[3], ".git"), { recursive: true });
      writeFileSync(resolve(args[3], ".vercel/project.json"), '{"projectId":"synthetic-stale"}');
      return ok();
    }
    assert.equal(args[0], "api");
    const method = args[args.indexOf("--method") + 1];
    const endpoint = args[args.indexOf("--method") + 2];
    if (auth) return fail(401);
    if (endpoint === `repos/${REPO}`) {
      if (!created && !targetExists) return fail(404);
      if (method === "PATCH") {
        const body = JSON.parse(options.input);
        if (body.security_and_analysis) return fail(optional);
        if (!badControls) controls = body;
      }
      return ok(metadata());
    }
    if (endpoint === `repos/${SOURCE}`) return ok({ full_name: SOURCE, is_template: true, default_branch: "main" });
    if (endpoint === `repos/${SOURCE}/commits/${SHA}`) return ok({ sha: SHA });
    if (endpoint === `repos/${SOURCE}/git/ref/heads/main`) return ok({ object: { sha: SHA } });
    if (endpoint === `repos/${REPO}/git/ref/heads/main`) {
      refs++;
      return timeout || refs === 1 ? fail(409) : ok({ object: { sha: SHA } });
    }
    if (endpoint.endsWith("/actions/permissions/workflow")) {
      return ok({ default_workflow_permissions: "read", can_approve_pull_request_reviews: false });
    }
    if (endpoint.endsWith("/actions/permissions") || endpoint.endsWith("/actions/permissions/selected-actions")) {
      if (actionsUnavailable) return fail(403);
      if (method === "PUT") actions[endpoint] = JSON.parse(options.input);
      if (badActions && method === "GET") return ok({ ...actions[endpoint], sha_pinning_required: false, patterns_allowed: ["*"] });
      return ok(actions[endpoint]);
    }
    if (endpoint.endsWith("/automated-security-fixes")) return optional === 0 ? ok({ enabled: true }) : fail(optional);
    if (endpoint.endsWith("/code-scanning/default-setup")) {
      return optional === 0 ? ok({ state: "configured", query_suite: "default" }) : fail(optional);
    }
    if (endpoint.endsWith("/rulesets?per_page=100")) return ok(storedRules ? [{ id: 700, name: storedRules.name }] : []);
    if (endpoint.endsWith("/rulesets/700")) return ok({ id: 700, ...storedRules });
    if (endpoint.endsWith("/rulesets") && method === "POST" && optional === 0) {
      storedRules = JSON.parse(options.input);
      return ok({ id: 700 });
    }
    if (endpoint.endsWith("/private-vulnerability-reporting")
      || endpoint.endsWith("/vulnerability-alerts") || endpoint.endsWith("/rulesets")) return fail(optional);
    return ok({});
  };
  return {
    cwd, env: {}, run, calls, sleep: async () => {}, attempts: 3,
    set: (values) => {
      if (values.badControls !== undefined) badControls = values.badControls;
      if (values.timeout !== undefined) timeout = values.timeout;
      if (values.mismatch !== undefined) mismatch = values.mismatch;
      if (values.repositoryId !== undefined) repositoryId = values.repositoryId;
    },
  };
}

test("init defaults to private, local implementation only, and exclusively records source HEAD", async (t) => {
  const cwd = fixture(t);
  const result = await init(cwd);
  assert.equal(result.config.visibility, "private");
  assert.deepEqual(result.config.authorization, {
    basis: "owner-launch-instruction", scope: "full", firstImplementation: true, deploy: false, spendUsd: 0,
  });
  assert.deepEqual(result.config.source, { repo: SOURCE, revision: SHA });
  assert.equal(result.config.ai.model, "openai/gpt-5.4-mini");
  assert.equal(result.config.hosting.creationAuthorized, false);
  assert.equal(result.config.hosting.gitDeploymentsAuthorized, false);
  const before = readFileSync(result.file, "utf8");
  await assert.rejects(init(cwd, ["--allow-deploy"]), /already exists/);
  assert.equal(readFileSync(result.file, "utf8"), before);
});

test("explicit public/deploy/spend/team flags are recorded, not executed", async (t) => {
  const result = await init(fixture(t), ["--visibility", "public", "--allow-deploy", "--allow-hosting", "--allow-git-deploys", "--spend-usd", "0.29", "--vercel-team", "demo-team"]);
  assert.equal(result.config.visibility, "public");
  assert.equal(result.config.authorization.deploy, true);
  assert.equal(result.config.authorization.spendUsd, 0.29);
  assert.equal(result.config.hosting.team, "demo-team");
  assert.equal(result.config.hosting.gitDeploymentsAuthorized, true);
  assert.equal(result.config.hosting.creationAuthorized, true);
  const preflight = await main(["preflight"], { cwd: resolve(result.file, "../.."), env: {} });
  assert.equal(preflight.readiness.find((r) => r.gate === "spend").state, "authorized-not-executed");
});

test("unknown, duplicate, malformed and secret input is rejected", () => {
  const base = ["init", "--repo", REPO, "--profile", "full"];
  for (const args of [
    [], ["unknown"], [...base, "--token", "not-accepted"], [...base, "--online"],
    [...base, "--profile", "hackathon"], [...base, "--spend-usd", "-1"],
    [...base, "--spend-usd", "Infinity"], [...base, "--spend-usd", "1.001"],
    [...base, "--spend-usd", "1e3"], [...base, "--visibility", "internal"],
    [...base, "--vercel-team", "bearer value"], [...base, "--file"],
    ["init", "--repo", "../bad", "--profile", "full"],
    ["init", "--repo", "demo/..", "--profile", "full"],
    ["init", "--repo", "demo-/sample", "--profile", "full"],
    ["init", "--repo", REPO, "--profile", "anything"], ["create"],
  ]) assert.throws(() => parseArgs(args), undefined, args.join(" "));
});

test("offline preflight only probes local npm and prints presence, never secrets or metadata values", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  mkdirSync(resolve(cwd, ".vercel"));
  writeFileSync(resolve(cwd, ".vercel/project.json"), '{"projectId":"do-not-print-project"}');
  const result = await main(["preflight"], {
    cwd, env: { AI_GATEWAY_API_KEY: "synthetic-do-not-print" },
    run: (command, args) => {
      assert.equal(command, "npm");
      assert.deepEqual(args, ["--version"]);
      return { status: -1, stdout: "", stderr: "" };
    },
  });
  assert.equal(result.readiness.find((r) => r.gate === "toolchain").state, "ready");
  assert.equal(result.readiness.find((r) => r.gate === "hosting-linkage").state, "unverified");
  assert.equal(result.readiness.find((r) => r.gate === "gateway-credential").state, "present-unverified");
  assert.doesNotMatch(JSON.stringify(result), /synthetic-do-not-print|do-not-print-project/);
});

test("every pin mismatch blocks preflight", (t) => {
  for (const filename of [".node-version", ".nvmrc", ".npmrc", "package.json", "vercel.json"]) {
    const cwd = fixture(t);
    writeFileSync(resolve(cwd, filename), filename.endsWith(".json") ? "{}" : "wrong");
    assert.equal(checkPins(cwd).state, "blocked", filename);
  }
});

test("preflight distinguishes active npm from coherent repository pins", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  for (const [version, state] of [["12.0.2", "ready"], ["11.19.0", "blocked"], [null, "unverified"]]) {
    const result = await main(["preflight"], {
      cwd, env: {},
      run: (command, args) => {
        assert.equal(command, "npm");
        assert.deepEqual(args, ["--version"]);
        return { status: version ? 0 : -1, stdout: version ? `${version}\n` : "", stderr: "" };
      },
    });
    assert.equal(result.readiness.find((entry) => entry.gate === "toolchain").state, "ready");
    assert.equal(result.readiness.find((entry) => entry.gate === "runtime-npm").state, state);
  }
});

test("preflight proves selected npm executable rather than inherited advertised metadata", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  for (const [status, stdout, state, actual] of [
    [0, "12.0.2\n", "ready", "12.0.2"],
    [0, "11.19.0\n", "blocked", "11.19.0"],
    [1, "12.0.2\n", "blocked", null],
    [-1, "", "blocked", null],
    [0, "12.0.2\nsynthetic-sensitive-output", "blocked", null],
    [0, "12.0.2-beta\n", "blocked", null],
    [0, "", "blocked", null],
  ]) {
    const calls = [];
    const npmPath = resolve(cwd, "synthetic npm;not-a-shell.cjs");
    const result = await main(["preflight"], {
      cwd, env: { npm_execpath: npmPath, npm_config_user_agent: "npm/11.19.0 synthetic-sensitive-metadata" },
      run: (command, args) => {
        calls.push({ command, args });
        return { status, stdout, stderr: "synthetic-sensitive-stderr" };
      },
    });
    assert.deepEqual(calls, [{ command: process.execPath, args: [npmPath, "--version"] }]);
    assert.deepEqual(result.readiness.find((entry) => entry.gate === "runtime-npm"),
      { gate: "runtime-npm", state, evidence: { required: "12.0.2", actual } });
    assert.doesNotMatch(JSON.stringify(result), /synthetic-sensitive|not-a-shell/);
  }
});
test("preflight distinguishes authentication, absence and optional entitlement without aborting", async (t) => {
  for (const code of [401, 403, 404, 500]) {
    const cwd = fixture(t);
    await init(cwd);
    const calls = [];
    const result = await main(["preflight", "--online"], {
      cwd, env: {}, run: (command, args) => {
        if (command === "npm") return { status: -1, stdout: "", stderr: "" };
        calls.push(args); return fail(code);
      },
    });
    assert.equal(result.readiness.find((r) => r.gate === "repository").state,
      { 401: "authentication-failure", 403: "unavailable", 404: "absent-or-hidden", 500: "transport-or-api-failure" }[code]);
    assert.ok(calls.length >= 8);
    assert.ok(calls.every((args) => args[args.indexOf("--method") + 1] === "GET"));
  }
});

test("create waits for populated ref, uses template/private without clone flag, reads controls, then clones", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  mkdirSync(resolve(cwd, ".github/rulesets"), { recursive: true });
  writeFileSync(resolve(cwd, ".github/rulesets/main.json"), JSON.stringify({
    id: 123, node_id: "server-owned", name: "Protect main", target: "branch", enforcement: "active", rules: [],
  }));
  const fake = fakeGitHub({ cwd });
  const result = await main(["create", "--directory", "checkout"], fake);
  const generation = fake.calls.findIndex((c) => c.args[1] === "create");
  const clone = fake.calls.findIndex((c) => c.args[1] === "clone");
  assert.deepEqual(fake.calls[generation].args, ["repo", "create", REPO, "--template", SOURCE, "--private"]);
  const targetRefs = fake.calls.map((c, i) => ({ c, i })).filter(({ c }) => c.args.includes(`repos/${REPO}/git/ref/heads/main`));
  assert.equal(targetRefs.length, 2);
  assert.ok(generation < targetRefs[0].i && targetRefs[1].i < clone);
  assert.equal(result.controls.find((r) => r.gate === "reporting").state, "unavailable");
  assert.equal(result.controls.find((r) => r.gate === "secret-scanning").state, "unavailable");
  assert.equal(result.controls.find((r) => r.gate === "ruleset").state, "unavailable");
  const rules = fake.calls.find((c) => c.args.includes("POST"));
  assert.equal(JSON.parse(rules.input).id, undefined);
  assert.equal(JSON.parse(rules.input).node_id, undefined);
  assert.equal(existsSync(resolve(cwd, "checkout/.vercel")), false);
  assert.ok(fake.calls.every((c) => ["gh", "git"].includes(c.command)));
  const repositoryWrite = fake.calls.find((c) => c.args.includes("PATCH") && c.args.includes(`repos/${REPO}`));
  assert.deepEqual(JSON.parse(repositoryWrite.input), {
    allow_squash_merge: true, allow_merge_commit: false, allow_rebase_merge: false, delete_branch_on_merge: true,
    has_issues: true, has_wiki: false, has_projects: false,
  });
  for (const [suffix, settings] of [
    ["actions/permissions", { enabled: true, allowed_actions: "selected", sha_pinning_required: true }],
    ["actions/permissions/selected-actions", { github_owned_allowed: true, verified_allowed: false, patterns_allowed: [] }],
  ]) {
    const calls = fake.calls.filter((c) => c.args.includes(`repos/${REPO}/${suffix}`));
    assert.deepEqual(calls.map((c) => c.args[c.args.indexOf("--method") + 1]), ["PUT", "GET"]);
    assert.deepEqual(JSON.parse(calls[0].input), settings);
    assert.ok(fake.calls.indexOf(calls[1]) < clone);
  }
});

test("optional 404 continues independent controls without visibility changes", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd, optional: 404 });
  const result = await main(["create", "--directory", "checkout"], fake);
  assert.equal(result.controls.find((r) => r.gate === "reporting").state, "absent-or-hidden");
  assert.ok(fake.calls.some((c) => c.args.includes(`repos/${REPO}/vulnerability-alerts`)));
  assert.equal(result.controls.find((r) => r.gate === "automated-security-fixes").state, "absent-or-hidden");
  assert.equal(result.controls.find((r) => r.gate === "codeql-default-setup").state, "absent-or-hidden");
  assert.ok(fake.calls.filter((c) => c.input).every((c) => !Object.hasOwn(JSON.parse(c.input), "private")));
});

test("optional-control failures preserve sanitized HTTP classification without changing ruleset retries", async (t) => {
  for (const [httpStatus, errorClass, state, retryable] of [
    [400, "validation-failure", "transport-or-api-failure", false],
    [422, "validation-failure", "transport-or-api-failure", false],
    [401, "authentication-failure", "authentication-failure", true],
    [403, "permission-entitlement-or-rate-limit", "unavailable", true],
    [404, "absent-or-hidden", "absent-or-hidden", true],
    [409, "conflict", "transport-or-api-failure", false],
    [429, "rate-limited", "transport-or-api-failure", false],
    [500, "server-failure", "transport-or-api-failure", false],
    [503, "server-failure", "transport-or-api-failure", false],
    [418, "http-failure", "transport-or-api-failure", false],
    [null, "transport-or-unclassified-failure", "transport-or-api-failure", false],
  ]) {
    const cwd = fixture(t);
    await init(cwd);
    mkdirSync(resolve(cwd, ".github/rulesets"), { recursive: true });
    writeFileSync(resolve(cwd, ".github/rulesets/main.json"), JSON.stringify({
      name: "Protect main", target: "branch", enforcement: "active", rules: [],
    }));
    const fake = fakeGitHub({ cwd });
    const runner = fake.run;
    fake.run = (command, args, options) => {
      const result = runner(command, args, options);
      if (args.includes("POST") || args.includes(`repos/${REPO}/private-vulnerability-reporting`)) {
        return {
          status: 1,
          stdout: '{"token":"synthetic-sensitive-body","message":"401 404 GH_TOKEN"}',
          stderr: `gh: synthetic-sensitive-error https://example.invalid/?token=synthetic-sensitive-url&code=401${httpStatus ? ` (HTTP ${httpStatus})` : ""}`,
        };
      }
      return result;
    };
    const result = await main(["create", "--directory", "checkout"], fake);
    for (const gate of ["reporting", "ruleset"]) {
      const control = result.controls.find((r) => r.gate === gate);
      assert.equal(control.state, state);
      assert.equal(control.httpStatus, httpStatus);
      assert.equal(control.errorClass, errorClass);
    }
    assert.doesNotMatch(JSON.stringify(result), /synthetic-sensitive|https:\/\/example|GH_TOKEN/);
    assert.equal(fake.calls.filter((c) => c.args.includes("POST")).length, 1);
    assert.equal(JSON.parse(readFileSync(operationFile(cwd), "utf8")).rulesetPending, !retryable);
    if (retryable) {
      await main(["create", "--resume", "--directory", "checkout"], fake);
      assert.equal(fake.calls.filter((c) => c.args.includes("POST")).length, 2);
    } else {
      await assert.rejects(main(["create", "--resume", "--directory", "checkout"], fake), /manual reconciliation/);
      assert.equal(fake.calls.filter((c) => c.args.includes("POST")).length, 1);
    }
  }
});

test("explicit public creation uses public flag and requires public readback", async (t) => {
  const cwd = fixture(t);
  await init(cwd, ["--visibility", "public"]);
  const fake = fakeGitHub({ cwd, mismatch: true });
  await main(["create", "--directory", "checkout"], fake);
  assert.ok(fake.calls.some((c) => c.args[1] === "create" && c.args.includes("--public")));
  assert.ok(fake.calls.every((c) => !c.args.includes("--private")));
});

test("online deployment observations are bounded, read-only, and never expose API bodies", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd, targetExists: true });
  const runner = fake.run;
  const calls = [];
  const result = await main(["preflight", "--online"], {
    cwd, env: {},
    run: (command, args, options) => {
      if (command === "npm") return { status: -1, stdout: "", stderr: "" };
      calls.push(args);
      const endpoint = args[args.indexOf("--method") + 2];
      if (endpoint.endsWith("/git/ref/heads/main")) return ok({ object: { sha: SHA } });
      if (endpoint.endsWith(`/commits/${SHA}/status`)) return ok({ state: "failure", description: "synthetic-hidden-body" });
      if (endpoint.includes("/deployments?")) return ok([1, 2, 3, 4].map((id) => ({ id, payload: "synthetic-hidden-body" })));
      if (endpoint.includes("/deployments/1/statuses")) return ok([{ state: "success", log_url: "synthetic-hidden-body" }]);
      if (endpoint.includes("/deployments/2/statuses")) return ok([{ state: "synthetic-hidden-body" }]);
      if (endpoint.includes("/deployments/3/statuses")) return ok([]);
      return runner(command, args, options);
    },
  });
  assert.equal(result.readiness.filter((r) => r.gate.startsWith("deployment-status-")).length, 3);
  assert.equal(result.readiness.find((r) => r.gate === "commit-statuses").evidence.state, "failure");
  assert.equal(result.readiness.find((r) => r.gate === "deployment-status-1").evidence.state, "success");
  assert.equal(result.readiness.find((r) => r.gate === "deployment-status-2").state, "unverified");
  assert.equal(result.readiness.find((r) => r.gate === "deployment-status-3").state, "unverified");
  assert.doesNotMatch(JSON.stringify(result), /synthetic-hidden-body/);
  assert.ok(calls.every((args) => args[args.indexOf("--method") + 1] === "GET"));
});

test("source drift refuses before repository creation", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd });
  const runner = fake.run;
  fake.run = (command, args, options) => args.includes(`repos/${SOURCE}/git/ref/heads/main`)
    ? ok({ object: { sha: "b".repeat(40) } }) : runner(command, args, options);
  await assert.rejects(main(["create", "--directory", "checkout"], fake), /Source HEAD differs/);
  assert.ok(fake.calls.every((c) => c.args[0] === "api" && c.args.includes("GET")));
});

test("empty repository times out within attempt bound without controls or clone", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd, timeout: true });
  await assert.rejects(main(["create", "--directory", "checkout"], fake), /Timed out/);
  assert.equal(fake.calls.filter((c) => c.args.includes(`repos/${REPO}/git/ref/heads/main`)).length, 3);
  assert.ok(fake.calls.every((c) => !c.args.includes("PATCH") && c.args[1] !== "clone"));
  assert.equal(existsSync(resolve(cwd, "checkout")), false);
});

test("existing directory refuses before any command or write", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  mkdirSync(resolve(cwd, "checkout"));
  const fake = fakeGitHub({ cwd });
  await assert.rejects(main(["create", "--directory", "checkout"], fake), /Destination already exists/);
  assert.equal(fake.calls.length, 0);
});

test("existing target and auth failure refuse before mutations", async (t) => {
  for (const setting of [{ targetExists: true }, { auth: true }]) {
    const cwd = fixture(t);
    await init(cwd);
    const fake = fakeGitHub({ cwd, ...setting });
    await assert.rejects(main(["create", "--directory", "checkout"], fake),
      setting.auth ? /authentication-failure/ : /already exists/);
    assert.equal(fake.calls.length, 1);
    assert.equal(existsSync(resolve(cwd, "checkout")), false);
  }
});

test("postcreate privacy mismatch rejects controls and clone", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd, mismatch: true });
  await assert.rejects(main(["create", "--directory", "checkout"], fake), /identity\/privacy\/non-template mismatch/);
  assert.ok(fake.calls.some((c) => c.args[1] === "create"));
  assert.ok(fake.calls.every((c) => !c.args.includes("PATCH") && c.args[1] !== "clone"));
});

test("required control mismatch stops without weakening controls", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd, badControls: true });
  await assert.rejects(main(["create", "--directory", "checkout"], fake), /Required repository controls/);
  assert.equal(fake.calls.filter((c) => c.args.includes("PATCH")).length, 1);
  assert.ok(fake.calls.every((c) => c.args[1] !== "clone"));
});

test("required Actions mismatch or unavailability stops before clone and optional writes", async (t) => {
  for (const setting of [{ badActions: true }, { actionsUnavailable: true }]) {
    const cwd = fixture(t);
    await init(cwd);
    const fake = fakeGitHub({ cwd, ...setting });
    await assert.rejects(main(["create", "--directory", "checkout"], fake), /Required actions/);
    assert.ok(fake.calls.every((c) => c.args[1] !== "clone"));
    assert.ok(fake.calls.every((c) => !c.args.includes(`repos/${REPO}/automated-security-fixes`)));
    assert.equal(existsSync(resolve(cwd, "checkout")), false);
  }
});

test("optional automated fixes and CodeQL are written once and independently read back", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd, optional: 0 });
  const result = await main(["create", "--directory", "checkout"], fake);
  for (const [gate, suffix, method] of [
    ["automated-security-fixes", "automated-security-fixes", "PUT"],
    ["codeql-default-setup", "code-scanning/default-setup", "PATCH"],
  ]) {
    const calls = fake.calls.filter((c) => c.args.includes(`repos/${REPO}/${suffix}`));
    assert.deepEqual(calls.map((c) => c.args[c.args.indexOf("--method") + 1]), [method, "GET"]);
    assert.equal(result.controls.find((r) => r.gate === gate).state, "verified");
    if (method === "PATCH") assert.deepEqual(JSON.parse(calls[0].input), { state: "configured", query_suite: "default" });
  }
});

test("malformed combined commit status is explicitly unverified", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd, targetExists: true });
  const runner = fake.run;
  fake.run = (command, args, options) => args.includes(`repos/${REPO}/git/ref/heads/main`)
    ? ok({ object: { sha: SHA } }) : runner(command, args, options);
  const result = await main(["preflight", "--online"], fake);
  assert.equal(result.readiness.find((r) => r.gate === "commit-statuses").state, "unverified");
});

test("tampered receipts, invalid repo, and source equal destination fail before commands", async (t) => {
  for (const mutate of [
    (c) => { c.token = "not-accepted"; },
    (c) => { c.repo = "../invalid"; },
    (c) => { c.repo = SOURCE; },
    (c) => { c.authorization.firstImplementation = false; },
  ]) {
    const cwd = fixture(t);
    const receipt = await init(cwd);
    mutate(receipt.config);
    writeFileSync(receipt.file, JSON.stringify(receipt.config));
    const fake = fakeGitHub({ cwd });
    await assert.rejects(main(["create", "--directory", "checkout"], fake));
    assert.equal(fake.calls.length, 0);
  }
});

function operationFile(cwd) {
  const directory = resolve(cwd, ".minerva/launch-operations");
  return resolve(directory, readdirSync(directory).find((name) => name.endsWith(".json")));
}

test("failed controls resume with one create and immutable ignored product receipt", async (t) => {
  const cwd = fixture(t);
  const receipt = await init(cwd, ["--allow-hosting"]);
  const fake = fakeGitHub({ cwd, badControls: true });
  await assert.rejects(main(["create", "--directory", "checkout"], fake), /Required repository controls/);
  const recorded = JSON.parse(readFileSync(operationFile(cwd), "utf8"));
  assert.equal(recorded.repositoryId, 54321);
  assert.equal(recorded.repo, REPO);
  assert.equal(Object.hasOwn(recorded, "config"), false);
  fake.set({ badControls: false });
  const result = await main(["create", "--resume", "--directory", "checkout"], fake);
  assert.equal(result.resumed, true);
  assert.equal(fake.calls.filter((c) => c.args[1] === "create").length, 1);
  assert.deepEqual(JSON.parse(readFileSync(resolve(cwd, "checkout/.minerva/launch.json"), "utf8")), receipt.config);
  assert.equal(existsSync(`${operationFile(cwd)}.lock`), false);
});

test("default-ref timeout resumes without re-creating the owned repository", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd, timeout: true });
  await assert.rejects(main(["create", "--directory", "checkout"], fake), /Timed out/);
  fake.set({ timeout: false });
  await main(["create", "--resume", "--directory", "checkout"], fake);
  assert.equal(fake.calls.filter((c) => c.args[1] === "create").length, 1);
});

test("resume rejects changed launch config, repository ID, or privacy before writes", async (t) => {
  for (const change of ["config", "repositoryId", "privacy"]) {
    const cwd = fixture(t);
    const receipt = await init(cwd);
    const fake = fakeGitHub({ cwd, badControls: true });
    await assert.rejects(main(["create", "--directory", "checkout"], fake));
    fake.set({ badControls: false });
    if (change === "config") {
      receipt.config.authorization.spendUsd = 1;
      writeFileSync(receipt.file, JSON.stringify(receipt.config));
    } else fake.set(change === "repositoryId" ? { repositoryId: 99999 } : { mismatch: true });
    const start = fake.calls.length;
    await assert.rejects(main(["create", "--resume", "--directory", "checkout"], fake), /ownership|mismatch/);
    assert.ok(fake.calls.slice(start).every((c) => c.args[0] === "api" && c.args.includes("GET")));
    assert.equal(existsSync(resolve(cwd, "checkout")), false);
  }
});

test("resume refuses an unrelated destination and preserves its files", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd, badControls: true });
  await assert.rejects(main(["create", "--directory", "checkout"], fake));
  mkdirSync(resolve(cwd, "checkout"));
  writeFileSync(resolve(cwd, "checkout/work.txt"), "preserve");
  const before = fake.calls.length;
  await assert.rejects(main(["create", "--resume", "--directory", "checkout"], fake), /Unrelated existing destination/);
  assert.equal(fake.calls.length, before);
  assert.equal(readFileSync(resolve(cwd, "checkout/work.txt"), "utf8"), "preserve");
});

test("resume reuses a verified clean clone without duplicate ruleset POST or checkout writes", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  mkdirSync(resolve(cwd, ".github/rulesets"), { recursive: true });
  writeFileSync(resolve(cwd, ".github/rulesets/main.json"), JSON.stringify({
    name: "Protect main", target: "branch", enforcement: "active", rules: [],
  }));
  const fake = fakeGitHub({ cwd, optional: 0 });
  await main(["create", "--directory", "checkout"], fake);
  const permissionFile = resolve(cwd, "checkout/.minerva/launch.json");
  const before = readFileSync(permissionFile, "utf8");
  const result = await main(["create", "--resume", "--directory", "checkout"], fake);
  assert.equal(result.reused, true);
  assert.equal(fake.calls.filter((c) => c.args[1] === "create").length, 1);
  assert.equal(fake.calls.filter((c) => c.args[1] === "clone").length, 1);
  assert.equal(fake.calls.filter((c) => c.args.includes("POST")).length, 1);
  assert.equal(readFileSync(permissionFile, "utf8"), before);
  assert.equal(result.controls.find((r) => r.gate === "ruleset").state, "verified");
});

test("resume preserves dirty checkout and rejects a differing product permission receipt", async (t) => {
  for (const changed of ["work", "permission"]) {
    const cwd = fixture(t);
    await init(cwd);
    const fake = fakeGitHub({ cwd });
    await main(["create", "--directory", "checkout"], fake);
    if (changed === "permission") {
      const path = resolve(cwd, "checkout/.minerva/launch.json");
      const config = JSON.parse(readFileSync(path, "utf8"));
      config.authorization.deploy = true;
      writeFileSync(path, JSON.stringify(config));
    } else {
      const runner = fake.run;
      fake.run = (command, args, options) => command === "git" && args[0] === "status"
        ? { status: 0, stdout: " M work.txt\n", stderr: "" } : runner(command, args, options);
    }
    const before = fake.calls.length;
    await assert.rejects(main(["create", "--resume", "--directory", "checkout"], fake),
      changed === "permission" ? /receipt differs/ : /preserving all existing work/);
    assert.ok(fake.calls.slice(before).every((c) => c.command === "git" || c.args.includes("GET")));
  }
});

test("ambiguous creation and stale operation locks fail closed without retrying mutations", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd });
  const runner = fake.run;
  fake.run = (command, args, options) => {
    const result = runner(command, args, options);
    return args[1] === "create" ? fail(500) : result;
  };
  await assert.rejects(main(["create", "--directory", "checkout"], fake), /ambiguous/);
  const before = fake.calls.length;
  await assert.rejects(main(["create", "--resume", "--directory", "checkout"], fake), /ownership is unproven/);
  await assert.rejects(main(["create", "--directory", "checkout"], fake), /Operation already recorded/);
  assert.equal(fake.calls.length, before);

  const other = fixture(t);
  await init(other);
  const owned = fakeGitHub({ cwd: other, badControls: true });
  await assert.rejects(main(["create", "--directory", "checkout"], owned));
  writeFileSync(`${operationFile(other)}.lock`, '{"pid":999999}');
  const start = owned.calls.length;
  await assert.rejects(main(["create", "--resume", "--directory", "checkout"], owned), /Operation lock/);
  assert.equal(owned.calls.length, start);
  assert.equal(existsSync(`${operationFile(other)}.lock`), true);
});

test("interrupted checkpoint files block resume before commands", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd, badControls: true });
  await assert.rejects(main(["create", "--directory", "checkout"], fake));
  writeFileSync(`${operationFile(cwd)}.next`, "{}");
  const before = fake.calls.length;
  await assert.rejects(main(["create", "--resume", "--directory", "checkout"], fake), /Interrupted checkpoint/);
  assert.equal(fake.calls.length, before);
  assert.equal(existsSync(`${operationFile(cwd)}.lock`), false);
});

test("partial clone hosting metadata is preserved and requires manual reconciliation", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  const fake = fakeGitHub({ cwd });
  const runner = fake.run;
  fake.run = (command, args, options) => {
    const result = runner(command, args, options);
    return args[1] === "clone" ? fail(500) : result;
  };
  await assert.rejects(main(["create", "--directory", "checkout"], fake), /preserving incomplete work/);
  const before = fake.calls.length;
  await assert.rejects(main(["create", "--resume", "--directory", "checkout"], fake), /unverified hosting metadata/);
  assert.ok(fake.calls.slice(before).every((c) => c.args.includes("GET")));
  assert.equal(existsSync(resolve(cwd, "checkout/.vercel/project.json")), true);
});

test("ambiguous ruleset POST is reconciled by inventory without duplicate creation", async (t) => {
  const cwd = fixture(t);
  await init(cwd);
  mkdirSync(resolve(cwd, ".github/rulesets"), { recursive: true });
  writeFileSync(resolve(cwd, ".github/rulesets/main.json"), JSON.stringify({
    name: "Protect main", target: "branch", enforcement: "active", rules: [],
  }));
  const fake = fakeGitHub({ cwd, optional: 0 });
  const runner = fake.run;
  fake.run = (command, args, options) => {
    const result = runner(command, args, options);
    return args.includes("POST") ? fail(500) : result;
  };
  await main(["create", "--directory", "checkout"], fake);
  const result = await main(["create", "--resume", "--directory", "checkout"], fake);
  assert.equal(fake.calls.filter((c) => c.args.includes("POST")).length, 1);
  assert.equal(result.controls.find((r) => r.gate === "ruleset").state, "verified");
});
