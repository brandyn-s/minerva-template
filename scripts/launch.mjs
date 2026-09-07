#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync, lstatSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const SOURCE = "brandyn-s/minerva-template";
const DEFAULT_FILE = ".minerva/launch.json";
const NODE = "24.20.0";
const NPM = "12.0.2";
const MODEL = "openai/gpt-5.4-mini";
const repoPattern = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,38})\/[A-Za-z0-9_.-]{1,100}$/;

function validSpend(value) {
  return Number.isFinite(value) && value >= 0 && value <= Number.MAX_SAFE_INTEGER / 100
    && Math.abs(value * 100 - Math.round(value * 100)) < 0.000001;
}

function validRepo(repo) {
  return typeof repo === "string" && repoPattern.test(repo)
    && !repo.split("/")[0].endsWith("-") && !repo.split("/")[0].includes("--")
    && ![".", ".."].includes(repo.split("/")[1]);
}

export function parseArgs(argv) {
  const [command, ...args] = argv;
  const options = {
    init: ["repo", "profile", "visibility", "allow-deploy", "allow-hosting", "allow-git-deploys", "spend-usd", "vercel-team", "file"],
    preflight: ["file", "online"],
    create: ["file", "directory", "resume"],
  };
  if (!Object.hasOwn(options, command)) throw new Error("Expected init, preflight, or create.");
  const values = {};
  for (let i = 0; i < args.length; i++) {
    const name = args[i].startsWith("--") ? args[i].slice(2) : "";
    if (!options[command].includes(name) || Object.hasOwn(values, name)) {
      throw new Error("Unknown or duplicate argument.");
    }
    if (["online", "allow-deploy", "allow-hosting", "allow-git-deploys", "resume"].includes(name)) values[name] = true;
    else {
      const value = args[++i];
      if (!value || value.startsWith("--")) throw new Error(`Missing value for --${name}.`);
      values[name] = value;
    }
  }
  if (command === "init") {
    if (!validRepo(values.repo)) throw new Error("Expected a valid OWNER/NAME repository.");
    if (!["full", "hackathon"].includes(values.profile)) throw new Error("Expected full or hackathon profile.");
    if (values.visibility && !["private", "public"].includes(values.visibility)) {
      throw new Error("Visibility must be private or public.");
    }
    if (values["spend-usd"] !== undefined
      && (!/^\d+(?:\.\d{1,2})?$/.test(values["spend-usd"])
        || !validSpend(Number(values["spend-usd"])))) {
      throw new Error("Spend must be a finite nonnegative USD amount with at most two decimals.");
    }
    if (values["vercel-team"] && !/^[a-z0-9][a-z0-9-]{0,62}$/.test(values["vercel-team"])) {
      throw new Error("Vercel team must be a slug, not a credential.");
    }
  }
  if (command === "create" && !values.directory) throw new Error("--directory is required.");
  return { command, values };
}

export function commandRunner(command, args, { cwd, input, timeout = 15_000 } = {}) {
  const result = spawnSync(command, args, {
    cwd, input, encoding: "utf8", timeout, maxBuffer: 1024 * 1024,
    env: { ...process.env, GH_HOST: "github.com", GH_PROMPT_DISABLED: "1", GIT_TERMINAL_PROMPT: "0", GH_PAGER: "cat", GIT_OPTIONAL_LOCKS: "0" },
  });
  return { status: result.status ?? -1, stdout: result.stdout ?? "", stderr: result.stderr ?? "" };
}

function context(options) {
  return {
    cwd: options.cwd ?? process.cwd(),
    run: options.run ?? commandRunner,
    env: options.env ?? process.env,
    sleep: options.sleep ?? ((ms) => new Promise((done) => setTimeout(done, ms))),
    attempts: Math.min(10, Math.max(1, options.attempts ?? 10)),
    now: options.now ?? Date.now,
  };
}

function jsonFile(file) {
  try { return JSON.parse(readFileSync(file, "utf8")); }
  catch { throw new Error("Required JSON file is missing or invalid."); }
}

function exactKeys(value, keys) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).length === keys.length && keys.every((key) => Object.hasOwn(value, key));
}

export function readConfig(file) {
  const config = jsonFile(file);
  if (!exactKeys(config, ["version", "repo", "profile", "visibility", "source", "authorization", "hosting", "ai"])
    || config.version !== 1 || !validRepo(config.repo)
    || !["full", "hackathon"].includes(config.profile)
    || !["private", "public"].includes(config.visibility)
    || !exactKeys(config.source, ["repo", "revision"])
    || config.source.repo !== SOURCE || typeof config.source.revision !== "string" || !/^[a-f0-9]{40,64}$/.test(config.source.revision)
    || !exactKeys(config.authorization, ["basis", "scope", "firstImplementation", "deploy", "spendUsd"])
    || config.authorization.basis !== "owner-launch-instruction"
    || config.authorization.scope !== config.profile
    || config.authorization.firstImplementation !== true
    || typeof config.authorization.deploy !== "boolean"
    || !validSpend(config.authorization.spendUsd)
    || !(exactKeys(config.hosting, ["provider", "team", "creationAuthorized"])
      || (exactKeys(config.hosting, ["provider", "team", "creationAuthorized", "gitDeploymentsAuthorized"])
        && typeof config.hosting.gitDeploymentsAuthorized === "boolean"))
    || config.hosting.provider !== "vercel" || typeof config.hosting.creationAuthorized !== "boolean"
    || (config.hosting.team !== null && (typeof config.hosting.team !== "string"
      || !/^[a-z0-9][a-z0-9-]{0,62}$/.test(config.hosting.team)))
    || !exactKeys(config.ai, ["provider", "baseUrl", "model"])
    || config.ai.provider !== "vercel-ai-gateway"
    || config.ai.baseUrl !== "https://ai-gateway.vercel.sh/v1" || config.ai.model !== MODEL) {
    throw new Error("Invalid launch receipt: unsupported fields, credentials, or authorization values.");
  }
  return config;
}

function init(values, ctx) {
  const file = resolve(ctx.cwd, values.file ?? DEFAULT_FILE);
  if (existsSync(file)) throw new Error("Launch receipt already exists; refusing overwrite.");
  const head = ctx.run("git", ["rev-parse", "HEAD"], { cwd: ctx.cwd });
  const revision = head.stdout.trim();
  if (head.status !== 0 || !/^[a-f0-9]{40,64}$/.test(revision)) throw new Error("Cannot resolve source HEAD.");
  const config = {
    version: 1, repo: values.repo, profile: values.profile, visibility: values.visibility ?? "private",
    source: { repo: SOURCE, revision },
    authorization: {
      basis: "owner-launch-instruction", scope: values.profile, firstImplementation: true,
      deploy: values["allow-deploy"] === true, spendUsd: Number(values["spend-usd"] ?? 0),
    },
    hosting: {
      provider: "vercel", team: values["vercel-team"] ?? null,
      creationAuthorized: values["allow-hosting"] === true,
      gitDeploymentsAuthorized: values["allow-git-deploys"] === true,
    },
    ai: { provider: "vercel-ai-gateway", baseUrl: "https://ai-gateway.vercel.sh/v1", model: MODEL },
  };
  mkdirSync(dirname(file), { recursive: true });
  try { writeFileSync(file, `${JSON.stringify(config, null, 2)}\n`, { flag: "wx", mode: 0o600 }); }
  catch { throw new Error("Cannot exclusively write launch receipt; no existing receipt was replaced."); }
  return { command: "init", file, config };
}

function api(ctx, endpoint, method = "GET", body) {
  const args = ["api", "--hostname", "github.com", "--method", method, endpoint];
  if (body !== undefined) args.push("--input", "-");
  const result = ctx.run("gh", args, { cwd: ctx.cwd, input: body === undefined ? undefined : JSON.stringify(body) });
  if (result.status !== 0) {
    const text = result.stderr ?? "";
    if (/HTTP 401|\b401\b|not logged|authentication|authenticate|GH_TOKEN/i.test(text)) {
      return { state: "authentication-failure" };
    }
    if (/HTTP 403|\b403\b/.test(text)) return { state: "unavailable", reason: "HTTP 403: permission, entitlement, or rate limit" };
    if (/HTTP 404|\b404\b/.test(text)) return { state: "absent-or-hidden", reason: "HTTP 404: absent or inaccessible" };
    if (/HTTP 409|\b409\b/.test(text) && endpoint.includes("/git/ref/")) return { state: "empty-repository" };
    return { state: "transport-or-api-failure" };
  }
  try { return { state: "observed", data: result.stdout.trim() ? JSON.parse(result.stdout) : null }; }
  catch { return { state: "invalid-api-response" }; }
}

function row(gate, state, evidence) {
  return { gate, state, evidence };
}

function observation(gate, result, evidence = "Read-only API response received; not an atomic delivery proof.") {
  return row(gate, result.state, result.reason ?? (result.state === "observed" ? evidence : "No verified evidence."));
}

function statusObservation(gate, result, allowed, latest = false) {
  if (result.state !== "observed") return observation(gate, result);
  const state = latest
    ? (Array.isArray(result.data) ? result.data[0]?.state : undefined)
    : result.data?.state;
  return allowed.includes(state)
    ? row(gate, "observed", { state, limitation: "Reported status only; not live or atomic delivery proof." })
    : row(gate, "unverified", "Missing or malformed status; no verified state.");
}

export function checkPins(cwd) {
  try {
    const pkg = jsonFile(resolve(cwd, "package.json"));
    const vercel = jsonFile(resolve(cwd, "vercel.json"));
    const npmrc = readFileSync(resolve(cwd, ".npmrc"), "utf8").split(/\r?\n/)
      .map((line) => line.trim()).filter((line) => line && !line.startsWith("#") && !line.startsWith(";"));
    const prefix = `npx --yes --package=node@${NODE} --package=npm@${NPM} npm`;
    const checks = {
      nodeVersion: readFileSync(resolve(cwd, ".node-version"), "utf8").trim() === NODE,
      nvmrc: readFileSync(resolve(cwd, ".nvmrc"), "utf8").trim() === NODE,
      engines: pkg.engines?.node === NODE && pkg.engines?.npm === NPM,
      packageManager: pkg.packageManager === `npm@${NPM}`,
      npmrc: npmrc.length === 2 && npmrc.includes("engine-strict=true") && npmrc.includes("save-exact=true"),
      vercelInstall: vercel.installCommand === `${prefix} ci`,
      vercelBuild: vercel.buildCommand === `${prefix} run build`,
    };
    return row("toolchain", Object.values(checks).every(Boolean) ? "ready" : "blocked", checks);
  } catch { return row("toolchain", "blocked", "Missing or invalid pin files."); }
}

async function preflight(config, online, ctx) {
  // npm-run metadata can describe an outer npx, not the npm running this script.
  const selectedNpm = typeof ctx.env.npm_execpath === "string" && ctx.env.npm_execpath.length > 0;
  const npm = selectedNpm
    ? ctx.run(process.execPath, [resolve(ctx.cwd, ctx.env.npm_execpath), "--version"], { cwd: ctx.cwd })
    : ctx.run("npm", ["--version"], { cwd: ctx.cwd });
  const npmVersion = npm.status === 0 && /^\d+\.\d+\.\d+$/.test(npm.stdout.trim())
    ? npm.stdout.trim() : null;
  const npmState = npmVersion ? npmVersion === NPM ? "ready" : "blocked"
    : !selectedNpm && npm.status === -1 ? "unverified" : "blocked";
  const rows = [
    checkPins(ctx.cwd),
    row("runtime-node", process.versions.node === NODE ? "ready" : "blocked", { required: NODE, actual: process.versions.node }),
    row("runtime-npm", npmState, { required: NPM, actual: npmVersion }),
    row("implementation", "authorized", "Recorded owner scope and first implementation; live permissions do not block local work."),
    row("hosting-integration", "unverified", "Separate authorized Vercel integration/project readback is needed."),
    row("hosting-creation", config.hosting.creationAuthorized ? "authorized-not-executed" : "not-authorized",
      "Hosting permission is recorded only; this CLI never provisions Vercel."),
    row("hosting-linkage", "unverified", existsSync(resolve(ctx.cwd, ".vercel/project.json"))
      ? "Local metadata exists; it does not prove a live project exists." : "No local linkage metadata; live project existence not checked."),
    row("gateway-credential", ctx.env.AI_GATEWAY_API_KEY || ctx.env.VERCEL_OIDC_TOKEN ? "present-unverified" : "missing",
      "Presence only; no credential value, validity, model availability, or inference proof."),
    row("deployment", config.authorization.deploy ? "authorized-not-executed" : "not-authorized",
      "No hosting mutation is performed by this CLI."),
    row("spend", config.authorization.spendUsd > 0 ? "authorized-not-executed" : "not-authorized",
      { usd: config.authorization.spendUsd, model: MODEL }),
  ];
  if (!online) {
    for (const gate of ["source", "repository", "privacy", "default-branch", "optional-controls"]) {
      rows.push(row(gate, "unverified", "Offline: live readback required."));
    }
  } else {
    const source = api(ctx, `repos/${config.source.repo}`);
    rows.push(observation("source", source));
    if (source.state === "observed") {
      rows.push(row("source-template", source.data?.is_template === true
        && source.data?.full_name?.toLowerCase() === SOURCE.toLowerCase() ? "observed" : "blocked", "Source identity and template flag readback."));
    }
    rows.push(observation("source-revision", api(ctx, `repos/${config.source.repo}/commits/${config.source.revision}`)));
    const target = api(ctx, `repos/${config.repo}`);
    rows.push(observation("repository", target));
    if (target.state === "observed") {
      const matches = target.data?.full_name?.toLowerCase() === config.repo.toLowerCase()
        && target.data.private === (config.visibility === "private") && target.data.is_template === false;
      rows.push(row("privacy", matches ? "observed" : "blocked", "Exact repository, privacy, and non-template flag readback."));
      const branch = target.data?.default_branch;
      const ref = typeof branch === "string" && branch ? api(ctx, `repos/${config.repo}/git/ref/heads/${encodeURIComponent(branch)}`) : { state: "empty" };
      rows.push(row("default-branch", ref.state === "observed" && ref.data?.object?.sha ? "observed" : ref.state === "observed" ? "empty" : ref.state,
        "A populated Git ref, not repository existence, is required."));
      if (ref.state === "observed" && /^[a-f0-9]{40,64}$/.test(ref.data?.object?.sha ?? "")) {
        rows.push(statusObservation("commit-statuses", api(ctx, `repos/${config.repo}/commits/${ref.data.object.sha}/status`),
          ["failure", "pending", "success"]));
        const deployments = api(ctx, `repos/${config.repo}/deployments?sha=${ref.data.object.sha}&per_page=3`);
        rows.push(observation("deployments", deployments,
          "Up to three deployment records read; not live hosting or deployed behavior proof."));
        if (deployments.state === "observed" && Array.isArray(deployments.data)) {
          for (const deployment of deployments.data.slice(0, 3)) {
            if (!Number.isSafeInteger(deployment.id) || deployment.id < 1) continue;
            rows.push(statusObservation(`deployment-status-${deployment.id}`,
              api(ctx, `repos/${config.repo}/deployments/${deployment.id}/statuses?per_page=1`),
              ["error", "failure", "inactive", "pending", "queued", "in_progress", "success"], true));
          }
        }
      }
    } else {
      rows.push(row("privacy", "unverified", "Target metadata unavailable."));
      rows.push(row("default-branch", "unverified", "Target metadata unavailable."));
    }
    for (const [gate, suffix] of [
      ["rulesets", "rulesets"], ["reporting", "private-vulnerability-reporting"],
      ["actions", "actions/permissions"], ["workflow-permissions", "actions/permissions/workflow"],
      ["selected-actions", "actions/permissions/selected-actions"],
      ["security-alerts", "vulnerability-alerts"], ["automated-security-fixes", "automated-security-fixes"],
      ["codeql-default-setup", "code-scanning/default-setup"],
    ]) rows.push(observation(gate, api(ctx, `repos/${config.repo}/${suffix}`)));
  }
  rows.push(row("delivery-evidence", "needed", "Required checks, live hosting readback, authorized deploy, and an authorized model smoke test remain separate evidence. Observations are not atomic proof."));
  return { command: "preflight", online, repo: config.repo, readiness: rows };
}

function requireObserved(result, label) {
  if (result.state !== "observed") throw new Error(`${label}: ${result.state}. No further mutations attempted.`);
  return result.data;
}

function verifyRepository(data, config, repositoryId) {
  if (data?.full_name?.toLowerCase() !== config.repo.toLowerCase()
    || data.private !== (config.visibility === "private") || data.is_template !== false
    || (repositoryId !== undefined && data.id !== repositoryId)) {
    throw new Error("Repository identity/privacy/non-template mismatch; refusing controls and clone.");
  }
}

function digest(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

function pathExists(path) {
  try { lstatSync(path); return true; } catch (error) { if (error.code === "ENOENT") return false; throw error; }
}

function saveOperation(file, operation, exclusive = false) {
  const next = exclusive ? file : `${file}.next`;
  writeFileSync(next, `${JSON.stringify(operation, null, 2)}\n`, { flag: "wx", mode: 0o600 });
  if (!exclusive) renameSync(next, file);
}

function verifyCheckout(ctx, destination, config, sha) {
  if (lstatSync(destination).isSymbolicLink() || !existsSync(resolve(destination, ".git"))) {
    throw new Error("Existing destination is not this operation's verified checkout; preserving it.");
  }
  const git = (args) => ctx.run("git", args, { cwd: destination });
  const top = git(["rev-parse", "--show-toplevel"]);
  const origin = git(["remote", "get-url", "origin"]);
  const head = git(["rev-parse", "HEAD"]);
  const clean = git(["status", "--porcelain", "--untracked-files=all"]);
  const urls = [`https://github.com/${config.repo}.git`, `https://github.com/${config.repo}`,
    `git@github.com:${config.repo}.git`, `git@github.com:${config.repo}`].map((url) => url.toLowerCase());
  if (top.status !== 0 || resolve(top.stdout.trim()) !== destination
    || origin.status !== 0 || !urls.includes(origin.stdout.trim().toLowerCase())
    || head.status !== 0 || head.stdout.trim() !== sha || clean.status !== 0 || clean.stdout.trim()) {
    throw new Error("Checkout identity, HEAD, or cleanliness mismatch; preserving all existing work.");
  }
}

function productReceipt(ctx, destination, config) {
  const directory = resolve(destination, ".minerva");
  const file = resolve(directory, "launch.json");
  if (pathExists(directory) && (lstatSync(directory).isSymbolicLink() || !lstatSync(directory).isDirectory())) {
    throw new Error("Product receipt directory is unsafe; preserving it.");
  }
  const ignored = ctx.run("git", ["check-ignore", "--quiet", "--no-index", ".minerva/launch.json"], { cwd: destination });
  const tracked = ctx.run("git", ["ls-files", "--error-unmatch", ".minerva/launch.json"], { cwd: destination });
  if (ignored.status !== 0 || tracked.status !== 1) throw new Error("Product launch receipt must be ignored and untracked.");
  if (pathExists(file)) {
    if (lstatSync(file).isSymbolicLink() || digest(readConfig(file)) !== digest(config)) {
      throw new Error("Product launch receipt differs; refusing overwrite.");
    }
    return;
  }
  mkdirSync(directory, { recursive: true });
  writeFileSync(file, `${JSON.stringify(config, null, 2)}\n`, { flag: "wx", mode: 0o600 });
}

async function create(config, directory, resume, ctx) {
  const destination = resolve(ctx.cwd, directory);
  if (!resume && pathExists(destination)) throw new Error("Destination already exists; refusing all mutation.");
  if (config.repo.toLowerCase() === config.source.repo.toLowerCase()) throw new Error("Source and destination repositories must differ.");
  const operationFile = resolve(ctx.cwd, ".minerva/launch-operations", `${digest([config.repo.toLowerCase(), destination])}.json`);
  const lock = `${operationFile}.lock`;
  let operation;
  if (resume) {
    if (!existsSync(operationFile)) throw new Error("No operation receipt proves ownership; manual reconciliation required.");
    if (lstatSync(operationFile).isSymbolicLink()) throw new Error("Operation receipt must not be a symlink.");
    operation = jsonFile(operationFile);
    if (operation.version !== 1 || operation.configHash !== digest(config) || operation.directory !== destination
      || operation.repo !== config.repo || !Number.isSafeInteger(operation.repositoryId) || operation.repositoryId < 1) {
      throw new Error("Operation config/identity ownership is unproven; manual reconciliation required.");
    }
    if (pathExists(destination) && operation.cloneStarted !== true) {
      throw new Error("Unrelated existing destination; preserving it.");
    }
  } else {
    if (pathExists(operationFile) || pathExists(lock)) throw new Error("Operation already recorded or locked; use --resume or checked manual reconciliation.");
    const target = api(ctx, `repos/${config.repo}`);
    if (target.state === "observed") throw new Error("Target repository already exists; refusing all mutation.");
    if (target.state !== "absent-or-hidden") throw new Error(`Cannot establish target absence: ${target.state}.`);
    operation = {
      version: 1, configHash: digest(config), directory: destination, repo: config.repo,
      repositoryId: null, cloneStarted: false, cloneSanitized: false, complete: false, rulesetId: null, rulesetPending: false,
    };
  }
  mkdirSync(dirname(operationFile), { recursive: true });
  try { writeFileSync(lock, JSON.stringify({ pid: process.pid }), { flag: "wx", mode: 0o600 }); }
  catch { throw new Error("Operation lock exists or cannot be acquired; checked manual recovery required."); }
  try {
    if (pathExists(`${operationFile}.next`)) throw new Error("Interrupted checkpoint write requires manual reconciliation before resume.");
    // Re-read under the exclusive lock so a concurrent operation cannot change the binding.
    if (resume) {
      const current = jsonFile(operationFile);
      if (JSON.stringify(current) !== JSON.stringify(operation)) throw new Error("Operation changed while acquiring lock; retry explicitly.");
    }
    return await createLocked(config, destination, resume, ctx, operation, operationFile);
  } finally { rmSync(lock); }
}

function optionalControl(ctx, endpoint, method, body, gate, matches) {
  const written = api(ctx, endpoint, method, body);
  if (written.state !== "observed") return observation(gate, written);
  const read = api(ctx, endpoint);
  if (read.state !== "observed") return observation(gate, read);
  return row(gate, matches(read.data) ? "verified" : "unverified", "Control was requested once and independently read back.");
}

function provisionRuleset(ctx, config, operation, operationFile, rules) {
  const endpoint = `repos/${config.repo}/rulesets`;
  if (!operation.rulesetId) {
    const listed = api(ctx, `${endpoint}?per_page=100`);
    if (listed.state !== "observed") return observation("ruleset", listed);
    if (!Array.isArray(listed.data)) return row("ruleset", "unverified", "Malformed ruleset inventory.");
    const matches = listed.data.filter((entry) => entry.name === rules.name);
    if (matches.length > 1) throw new Error("Ambiguous existing rulesets; manual reconciliation required.");
    if (matches.length === 1 && Number.isSafeInteger(matches[0].id) && matches[0].id > 0) {
      operation.rulesetId = matches[0].id;
      saveOperation(operationFile, operation);
    } else {
      if (operation.rulesetPending || listed.data.length >= 100) {
        throw new Error("Ruleset ownership or inventory is ambiguous; manual reconciliation required before any POST.");
      }
      operation.rulesetPending = true;
      saveOperation(operationFile, operation);
      const written = api(ctx, endpoint, "POST", rules);
      if (written.state !== "observed") {
        if (["unavailable", "absent-or-hidden", "authentication-failure"].includes(written.state)) {
          operation.rulesetPending = false;
          saveOperation(operationFile, operation);
        }
        return observation("ruleset", written);
      }
      if (!Number.isSafeInteger(written.data?.id) || written.data.id < 1) {
        return row("ruleset", "unverified", "No ruleset ID returned; reconcile before retrying.");
      }
      operation.rulesetId = written.data.id;
      saveOperation(operationFile, operation);
    }
  }
  const read = api(ctx, `${endpoint}/${operation.rulesetId}`);
  if (read.state !== "observed") return observation("ruleset", read);
  const matches = ["name", "target", "enforcement", "bypass_actors", "conditions", "rules"]
    .every((key) => JSON.stringify(read.data?.[key]) === JSON.stringify(rules[key]));
  if (matches) {
    operation.rulesetPending = false;
    saveOperation(operationFile, operation);
  }
  return row("ruleset", matches ? "verified" : "unverified", "Existing or recorded ruleset read back; never overwritten.");
}

async function createLocked(config, destination, resume, ctx, operation, operationFile) {
  if (resume) {
    verifyRepository(requireObserved(api(ctx, `repos/${config.repo}`), "Resume ownership readback"), config, operation.repositoryId);
  } else {
    const source = requireObserved(api(ctx, `repos/${config.source.repo}`), "Source check");
    if (source?.full_name?.toLowerCase() !== SOURCE.toLowerCase() || source.is_template !== true) {
      throw new Error("Source identity or template flag is invalid.");
    }
    requireObserved(api(ctx, `repos/${config.source.repo}/commits/${config.source.revision}`), "Source revision check");
    // Template generation uses the live default branch, not an arbitrary historical revision.
    const sourceRef = requireObserved(api(ctx, `repos/${SOURCE}/git/ref/heads/${encodeURIComponent(source.default_branch ?? "")}`), "Source ref check");
    if (sourceRef?.object?.sha !== config.source.revision) {
      throw new Error("Source HEAD differs from the launch receipt; refusing template drift.");
    }
    saveOperation(operationFile, operation, true);
    const generated = ctx.run("gh", ["repo", "create", config.repo, "--template", SOURCE, `--${config.visibility}`], { cwd: ctx.cwd });
    if (generated.status !== 0) throw new Error("GitHub creation response is ambiguous; ownership unproven. Manual reconciliation required; do not retry creation.");
  }
  const deadline = ctx.now() + 60_000;
  let populated;
  for (let attempt = 0; attempt < ctx.attempts && ctx.now() < deadline; attempt++) {
    const metadata = api(ctx, `repos/${config.repo}`);
    if (metadata.state !== "observed" && metadata.state !== "absent-or-hidden") {
      throw new Error(`Repository initialization probe failed: ${metadata.state}. Repository may already exist.`);
    }
    if (metadata.state === "observed") {
      verifyRepository(metadata.data, config, operation.repositoryId ?? undefined);
      if (operation.repositoryId === null) {
        if (!Number.isSafeInteger(metadata.data.id) || metadata.data.id < 1) {
          throw new Error("GitHub repository ID is unproven; manual reconciliation required.");
        }
        operation.repositoryId = metadata.data.id;
        saveOperation(operationFile, operation);
      }
      const branch = metadata.data.default_branch;
      if (typeof branch === "string" && branch) {
        const ref = api(ctx, `repos/${config.repo}/git/ref/heads/${encodeURIComponent(branch)}`);
        if (ref.state === "observed" && /^[a-f0-9]{40,64}$/.test(ref.data?.object?.sha ?? "")) {
          populated = ref.data.object.sha;
          break;
        }
        if (!["observed", "absent-or-hidden", "empty-repository"].includes(ref.state)) {
          throw new Error(`Default ref probe failed: ${ref.state}. Repository may already exist.`);
        }
      }
    }
    if (attempt + 1 < ctx.attempts) await ctx.sleep(1000);
  }
  if (!populated) throw new Error("Timed out waiting for a populated default-branch Git ref. Repository may exist; no clone performed.");
  if (pathExists(destination)) {
    if (!resume || !operation.cloneStarted) throw new Error("Unrelated existing destination; preserving it.");
    if (!operation.cloneSanitized && pathExists(resolve(destination, ".vercel"))) {
      throw new Error("Interrupted clone has unverified hosting metadata; preserving it for manual reconciliation.");
    }
    verifyCheckout(ctx, destination, config, populated);
    const receipt = resolve(destination, ".minerva/launch.json");
    if (pathExists(receipt) && (lstatSync(receipt).isSymbolicLink() || digest(readConfig(receipt)) !== digest(config))) {
      throw new Error("Product launch receipt differs; refusing overwrite.");
    }
  }
  const required = {
    allow_squash_merge: true, allow_merge_commit: false, allow_rebase_merge: false, delete_branch_on_merge: true,
    has_issues: true, has_wiki: false, has_projects: false,
  };
  requireObserved(api(ctx, `repos/${config.repo}`, "PATCH", required), "Repository controls");
  const configured = requireObserved(api(ctx, `repos/${config.repo}`), "Repository control readback");
  verifyRepository(configured, config, operation.repositoryId);
  if (!Object.entries(required).every(([key, value]) => configured[key] === value)) {
    throw new Error("Required repository controls failed readback; no clone performed.");
  }
  const controls = [row("repository-controls", "verified", "Squash-only merges, branch deletion, issues enabled, wiki/projects disabled read back.")];
  for (const [gate, suffix, settings] of [
    ["actions", "actions/permissions", { enabled: true, allowed_actions: "selected", sha_pinning_required: true }],
    ["selected-actions", "actions/permissions/selected-actions",
      { github_owned_allowed: true, verified_allowed: false, patterns_allowed: [] }],
  ]) {
    requireObserved(api(ctx, `repos/${config.repo}/${suffix}`, "PUT", settings), `Required ${gate} controls`);
    const read = requireObserved(api(ctx, `repos/${config.repo}/${suffix}`), `Required ${gate} readback`);
    if (!Object.entries(settings).every(([key, value]) => JSON.stringify(read?.[key]) === JSON.stringify(value))) {
      throw new Error(`Required ${gate} controls failed readback; no clone performed.`);
    }
    controls.push(row(gate, "verified", "Required Actions restrictions independently read back."));
  }
  const workflow = { default_workflow_permissions: "read", can_approve_pull_request_reviews: false };
  const workflowWrite = api(ctx, `repos/${config.repo}/actions/permissions/workflow`, "PUT", workflow);
  requireObserved(workflowWrite, "Required Actions workflow controls");
  const workflowRead = requireObserved(api(ctx, `repos/${config.repo}/actions/permissions/workflow`), "Actions control readback");
  if (!Object.entries(workflow).every(([key, value]) => workflowRead?.[key] === value)) {
    throw new Error("Required Actions controls failed readback; no clone performed.");
  }
  controls.push(row("workflow-permissions", "verified", "Read-only default token and no pull-request approval read back."));
  for (const [gate, suffix, body, matches] of [
    ["reporting", "private-vulnerability-reporting", { enabled: true }, (data) => data?.enabled === true],
    ["security-alerts", "vulnerability-alerts", undefined, () => true],
    ["automated-security-fixes", "automated-security-fixes", undefined, (data) => data?.enabled === true],
  ]) controls.push(optionalControl(ctx, `repos/${config.repo}/${suffix}`, "PUT", body, gate, matches));
  controls.push(optionalControl(ctx, `repos/${config.repo}/code-scanning/default-setup`, "PATCH",
    { state: "configured", query_suite: "default" }, "codeql-default-setup",
    (data) => data?.state === "configured" && data?.query_suite === "default"));
  const security = {
    secret_scanning: { status: "enabled" },
    secret_scanning_push_protection: { status: "enabled" },
  };
  controls.push(optionalControl(ctx, `repos/${config.repo}`, "PATCH", { security_and_analysis: security },
    "secret-scanning", (data) => Object.keys(security)
      .every((key) => data?.security_and_analysis?.[key]?.status === "enabled")));
  const rulesFile = resolve(ctx.cwd, ".github/rulesets/main.json");
  if (existsSync(rulesFile)) {
    const exported = jsonFile(rulesFile);
    const rules = Object.fromEntries(["name", "target", "enforcement", "bypass_actors", "conditions", "rules"]
      .filter((key) => Object.hasOwn(exported, key)).map((key) => [key, exported[key]]));
    controls.push(provisionRuleset(ctx, config, operation, operationFile, rules));
  } else controls.push(row("ruleset", "unavailable", "No exported ruleset in source checkout."));
  verifyRepository(requireObserved(api(ctx, `repos/${config.repo}`), "Final privacy check"), config, operation.repositoryId);
  let reused = false;
  if (pathExists(destination)) {
    if (!resume || !operation.cloneStarted) throw new Error("Destination appeared during creation; refusing clone.");
    verifyCheckout(ctx, destination, config, populated);
    reused = true;
  } else {
    if (operation.complete) throw new Error("Completed checkout is missing; manual reconciliation required.");
    operation.cloneStarted = true;
    saveOperation(operationFile, operation);
    const cloned = ctx.run("gh", ["repo", "clone", config.repo, destination], { cwd: ctx.cwd });
    if (cloned.status !== 0) throw new Error("Clone failed; preserving incomplete work. Resume requires a clean verified checkout or an absent destination.");
    rmSync(resolve(destination, ".vercel"), { recursive: true, force: true });
    verifyCheckout(ctx, destination, config, populated);
    operation.cloneSanitized = true;
    saveOperation(operationFile, operation);
  }
  productReceipt(ctx, destination, config);
  operation.cloneSanitized = true;
  operation.complete = true;
  saveOperation(operationFile, operation);
  return {
    command: "create", repo: config.repo, directory: destination, controls, resumed: resume, reused, operationFile,
    hosting: "not-created-or-linked", deployment: "not-executed", spend: "not-executed",
    evidence: "Repository controls are separate readbacks, not atomic delivery proof. Configure hosting in a separately authorized step.",
  };
}

export async function main(argv, options = {}) {
  const { command, values } = parseArgs(argv);
  const ctx = context(options);
  if (command === "init") return init(values, ctx);
  const config = readConfig(resolve(ctx.cwd, values.file ?? DEFAULT_FILE));
  if (command === "preflight") return preflight(config, values.online === true, ctx);
  return create(config, values.directory, values.resume === true, ctx);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const result = await main(process.argv.slice(2));
    console.log(JSON.stringify(result, null, 2));
    if (result.readiness?.some((entry) => entry.state === "blocked"
      || ["authentication-failure", "transport-or-api-failure", "invalid-api-response"].includes(entry.state))) process.exitCode = 1;
  } catch (error) {
    console.error(JSON.stringify({ error: error.message }));
    process.exitCode = 1;
  }
}
