#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readConfig, commandRunner, SOURCE } from "./launch.mjs";

const API = "https://api.vercel.com";
const PINS = {
  framework: "nextjs",
  installCommand: "npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci",
  buildCommand: "npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run build",
};
const fail = (message) => { throw new Error(message); };
function parse(argv) {
  const [command, ...rest] = argv;
  if (!["project", "deploy", "observe", "env"].includes(command)) fail("Expected project, deploy, observe, or env.");
  const v = {};
  for (let i = 0; i < rest.length; i += 2) {
    const key = rest[i].slice(2);
    if (!rest[i].startsWith("--") || !["file", "project", "team", "sha", "deployment", "path", "expect-text", "stable-origin", "key", "target", "value-env", "type"].includes(key)
      || Object.hasOwn(v, key) || !rest[i + 1] || rest[i + 1].startsWith("--")) fail("Invalid arguments.");
    v[key] = rest[i + 1];
  }
  return { command, v };
}
function pins(value) {
  if (value.rootDirectory) {
    const shown = String(value.rootDirectory).replace(/[^A-Za-z0-9._/-]/g, "").slice(0, 80);
    fail(`Project rootDirectory is set (${shown}). This helper deploys a flat repository whose root vercel.json is the effective configuration; Vercel ignores configuration above a rootDirectory. Move the application to the repository root or deploy it separately.`);
  }
  if (Object.entries(PINS).some(([k, v]) => value[k] !== v) || value.outputDirectory) fail("Next.js project pins mismatch.");
}
function hostingReadback(p, config) {
  const text = (value) => (typeof value === "string" && value.length <= 80 ? value : null);
  const hosting = {
    rootDirectory: text(p.rootDirectory),
    productionBranch: text(p.link?.productionBranch),
    gitCreateDeployments: text(p.gitProviderOptions?.createDeployments) ?? "unset",
    ssoProtection: text(p.ssoProtection?.deploymentType) ?? "none",
    passwordProtection: Boolean(p.passwordProtection),
  };
  const warnings = [];
  if (hosting.gitCreateDeployments !== "disabled" && config.hosting.gitDeploymentsAuthorized !== true) {
    warnings.push("git-deployments-not-disabled-without-recorded-permission: pushes to the production branch can create publicly reachable production deployments; record --allow-git-deploys at init or disable Git deployments in the project's Git settings.");
  }
  if (hosting.ssoProtection !== "all") {
    warnings.push(`deployment-protection-${hosting.ssoProtection}: Vercel Authentication does not cover every deployment of this project; treat the production alias as publicly reachable.`);
  }
  return { hosting, warnings };
}
function projectIdentity(p, v, config) {
  if (!/^prj_[A-Za-z0-9]+$/.test(p.id) || !/^team_[A-Za-z0-9]+$/.test(p.accountId)
    || p.name !== v.project || p.link?.type !== "github"
    || `${p.link.org}/${p.link.repo}` !== config.repo) fail("Project identity or GitHub link mismatch.");
  pins(p);
  return p;
}
function origin(value) {
  if (typeof value !== "string" || !/^https:\/\/[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.vercel\.app$/.test(value)) fail("Only exact HTTPS Vercel origins are allowed.");
  return value;
}
async function boundedText(response) {
  let text = "";
  const reader = response.body?.getReader();
  if (!reader) return text;
  try {
    const decoder = new TextDecoder();
    let bytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.length;
      if (bytes > 1024 * 1024) fail("Response exceeds observation bound.");
      text += decoder.decode(value, { stream: true });
    }
    return text + decoder.decode();
  } finally { await reader.cancel(); }
}
export async function execute(argv, options = {}) {
  const { command, v } = parse(argv);
  const cwd = options.cwd ?? process.cwd();
  const config = readConfig(resolve(cwd, v.file ?? ".minerva/launch.json"));
  if (config.repo.toLowerCase() === SOURCE.toLowerCase() || v.project?.toLowerCase().includes("minerva-template")) fail("Template destination denied.");
  if (!/^[a-z0-9][a-z0-9-]{0,99}$/.test(v.project ?? "")
    || !v.team || v.team !== config.hosting.team) fail("Explicit matching team and project required.");
  pins(JSON.parse(readFileSync(resolve(cwd, "vercel.json"), "utf8")));
  const token = (options.env ?? process.env).VERCEL_TOKEN;
  if (!token) fail("VERCEL_TOKEN required; configure the team's Vercel/GitHub integration separately.");
  const fetcher = options.fetch ?? fetch;
  const now = options.now ?? Date.now;
  const deadline = now() + Math.min(120_000, options.timeoutMs ?? 60_000);
  const attempts = Math.min(20, Math.max(1, options.attempts ?? 10));
  const sleep = options.sleep ?? ((ms) => new Promise((done) => setTimeout(done, ms)));
  async function pause(ms = 1000) {
    if (now() + ms >= deadline) fail("Observation deadline exceeded; incomplete.");
    await sleep(ms);
  }
  async function api(path, { method = "GET", body } = {}) {
    const url = new URL(path, API);
    if (url.origin !== API) fail("Untrusted API destination.");
    url.searchParams.set("slug", v.team);
    let response;
    for (let attempt = 0; attempt < attempts; attempt++) {
    if (now() >= deadline) fail("Observation deadline exceeded; incomplete.");
    try {
      response = await fetcher(url, { method, redirect: "manual", signal: AbortSignal.timeout(Math.max(1, Math.min(10_000, deadline - now()))),
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        ...(body ? { body: JSON.stringify(body) } : {}) });
    } catch { fail(method === "POST" ? "Ambiguous create; manual reconciliation required." : "API read unavailable."); }
    if (response.status === 429 && method === "GET" && attempt + 1 < attempts) {
      const retry = response.headers.get("retry-after");
      const ms = retry === null ? 1000 : /^\d+$/.test(retry) ? Number(retry) * 1000 : Date.parse(retry) - now();
      await response.body?.cancel();
      await pause(Number.isFinite(ms) ? Math.max(1000, ms) : 1000);
      continue;
    }
    if (!response.ok) {
      if (response.status === 404 && method === "GET") return null;
      fail(`API ${response.status}: access/integration or service blocker.`);
    }
    try { return JSON.parse(await boundedText(response)); } catch { fail("Invalid API response; manual reconciliation may be required."); }
    }
    fail("API read retry bound exceeded.");
  }
  let project = await api(`/v9/projects/${v.project}`);
  const projectReceipt = resolve(cwd, `.minerva/project-${v.team}-${v.project}.json`);
  if (!project) {
    if (command !== "project" || !config.hosting.creationAuthorized) fail("Hosting creation permission required; project absent.");
    if (!config.authorization.deploy || config.hosting.gitDeploymentsAuthorized !== true) {
      fail("Git-linked project creation requires deployment and explicit Git auto-deployment permission.");
    }
    if (existsSync(projectReceipt)) fail("Ambiguous project create; manual reconciliation required.");
    mkdirSync(dirname(projectReceipt), { recursive: true });
    writeFileSync(projectReceipt, JSON.stringify({ version: 1, repo: config.repo, status: "create-pending-manual-reconciliation" }), { flag: "wx", mode: 0o600 });
    await api("/v11/projects", { method: "POST", body: { name: v.project, ...PINS, gitRepository: { type: "github", repo: config.repo } } });
    project = await api(`/v9/projects/${v.project}`);
  }
  const p = projectIdentity(project ?? {}, v, config);
  if (command === "project") {
    const { hosting, warnings } = hostingReadback(p, config);
    const receipt = { version: 1, status: "project-verified", repo: config.repo, team: v.team, projectId: p.id, hosting, warnings, observedAt: new Date(now()).toISOString() };
    mkdirSync(dirname(projectReceipt), { recursive: true });
    writeFileSync(projectReceipt, `${JSON.stringify(receipt, null, 2)}\n`, { mode: 0o600 });
    return receipt;
  }
  if (command === "env") {
    if (!config.authorization.deploy) fail("Deployment permission required for environment changes.");
    const key = v.key ?? "";
    if (!/^[A-Z_][A-Z0-9_]{0,127}$/.test(key)) fail("Environment variable key must be UPPER_SNAKE_CASE.");
    const targets = [...new Set((v.target ?? "").split(",").map((t) => t.trim()).filter(Boolean))].sort();
    if (!targets.length || targets.some((t) => !["development", "preview", "production"].includes(t))) fail("Explicit --target list required: production, preview, development.");
    const type = v.type ?? "encrypted";
    if (!["encrypted", "plain"].includes(type)) fail("Type must be encrypted or plain.");
    if (!/^[A-Z_][A-Z0-9_]*$/.test(v["value-env"] ?? "")) fail("Provide --value-env NAME; the value is read from that environment variable, never from arguments.");
    const value = (options.env ?? process.env)[v["value-env"]];
    if (typeof value !== "string" || !value.length) fail(`Environment variable ${v["value-env"]} is empty or unset.`);
    const written = await api(`/v10/projects/${p.id}/env?upsert=true`, { method: "POST", body: { key, value, type, target: targets } });
    if (!written || (Array.isArray(written.failed) && written.failed.length)) fail("Environment write not confirmed; read the project's environment settings before retrying.");
    const listed = await api(`/v10/projects/${p.id}/env`);
    const variables = (Array.isArray(listed?.envs) ? listed.envs : Array.isArray(listed) ? listed : [])
      .filter((e) => typeof e?.key === "string")
      .map((e) => ({ key: e.key, target: Array.isArray(e.target) ? [...e.target].filter((t) => typeof t === "string").sort() : [], type: typeof e.type === "string" ? e.type : "unknown" }))
      .sort((a, b) => a.key.localeCompare(b.key));
    const confirmed = variables.some((row) => row.key === key && targets.every((t) => row.target.includes(t)));
    const warnings = targets.includes("production")
      ? ["production-target: values set for production are used by publicly reachable production deployments unless deployment protection covers them."] : [];
    const receipt = { version: 1, status: confirmed ? "env-verified" : "env-unverified", repo: config.repo, team: v.team, projectId: p.id,
      key, targets, type, variables, warnings, observedAt: new Date(now()).toISOString() };
    const envReceipt = resolve(cwd, `.minerva/env-${v.team}-${v.project}.json`);
    mkdirSync(dirname(envReceipt), { recursive: true });
    writeFileSync(envReceipt, `${JSON.stringify(receipt, null, 2)}\n`, { mode: 0o600 });
    return receipt;
  }
  if (command === "deploy" && !config.authorization.deploy) fail("Deployment permission required.");
  if (v.sha && !/^[a-f0-9]{40}$/.test(v.sha)) fail("Exact Git SHA required.");
  if (command === "deploy" && !v.sha) fail("Exact Git SHA required.");
  if (v.path && (!/^\/[A-Za-z0-9/_-]*$/.test(v.path) || v.path.startsWith("//"))) fail("Simple absolute runtime path required.");
  if (v["stable-origin"]) origin(v["stable-origin"]);
  const receiptFile = resolve(cwd, `.minerva/deploy-${v.team}-${v.project}-${v.sha ?? "observation"}.json`);
  const save = (value, exclusive = false) => {
    mkdirSync(dirname(receiptFile), { recursive: true });
    writeFileSync(receiptFile, `${JSON.stringify(value, null, 2)}\n`, { mode: 0o600, flag: exclusive ? "wx" : "w" });
    return value;
  };
  const base = { version: 1, repo: config.repo, sourceRevision: config.source.revision, team: v.team, projectId: p.id };
  let id = v.deployment;
  if (command === "deploy") {
    const run = options.run ?? commandRunner;
    const git = (args) => {
      const r = run("git", args, { cwd });
      if (r.status !== 0) fail("Git checkout verification failed.");
      return r.stdout.trim();
    };
    if (git(["status", "--porcelain"]) || git(["rev-parse", "HEAD"]) !== v.sha
      || ![`https://github.com/${config.repo}.git`, `https://github.com/${config.repo}`, `git@github.com:${config.repo}.git`].includes(git(["remote", "get-url", "origin"]))) fail("Clean product checkout, origin, and HEAD must match.");
    if (existsSync(receiptFile)) {
      const previous = JSON.parse(readFileSync(receiptFile, "utf8"));
      if (Object.entries(base).some(([key, value]) => previous[key] !== value) || previous.sha !== v.sha) fail("Existing receipt belongs to another source; reconcile manually.");
      if (!previous.deploymentId) fail("Ambiguous create; manual reconciliation required. Never retry blindly.");
      id = previous.deploymentId;
    } else {
      save({ ...base, sha: v.sha, status: "create-pending-manual-reconciliation" }, true);
      const [org, repo] = config.repo.split("/");
      const created = await api("/v13/deployments", { method: "POST", body: { name: v.project, project: p.id,
        gitSource: { type: "github", org, repo, sha: v.sha, ref: v.sha } } });
      if (!/^dpl_[A-Za-z0-9]+$/.test(created?.id)) fail("Ambiguous create; manual reconciliation required.");
      id = created.id;
      save({ ...base, sha: v.sha, deploymentId: id, status: "created-unverified" });
    }
  }
  if (!/^dpl_[A-Za-z0-9]+$/.test(id ?? "")) fail("Exact deployment ID required.");
  let d;
  for (let i = 0; i < attempts; i++) {
    d = await api(`/v13/deployments/${id}`);
    if (!d || d.id !== id || d.projectId !== p.id || d.gitSource?.type !== "github"
      || !(`${d.gitSource.org}/${d.gitSource.repo}` === config.repo
        || (p.link.repoId !== undefined && String(d.gitSource.repoId) === String(p.link.repoId)))
      || !/^[a-f0-9]{40}$/.test(d.gitSource.sha) || (v.sha && d.gitSource.sha !== v.sha)) fail("Deployment identity or exact source cannot be verified.");
    if (["READY", "ERROR", "CANCELED"].includes(d.readyState)) break;
    if (i + 1 < attempts) await pause();
  }
  const events = await api(`/v3/deployments/${id}/events?follow=0&limit=100&direction=backward&builds=1`);
  const counts = { stdout: 0, stderr: 0, error: 0, other: 0 };
  if (Array.isArray(events)) for (const e of events.slice(0, 100)) counts[["stdout", "stderr", "error"].includes(e.type) ? e.type : "other"]++;
  const receipt = { ...base, sha: d.gitSource.sha, deploymentId: id, observedAt: new Date(now()).toISOString(),
    readiness: ["READY", "ERROR", "CANCELED", "QUEUED", "BUILDING", "INITIALIZING"].includes(d.readyState) ? d.readyState : "UNKNOWN",
    events: { available: Array.isArray(events), bounded: true, counts }, status: "incomplete", runtime: [] };
  const finish = () => command === "deploy" ? save(receipt) : (() => {
    const observation = resolve(cwd, `.minerva/observe-${id}.json`);
    mkdirSync(dirname(observation), { recursive: true });
    writeFileSync(observation, `${JSON.stringify(receipt, null, 2)}\n`, { mode: 0o600 });
    return receipt;
  })();
  if (d.readyState !== "READY") {
    receipt.status = ["ERROR", "CANCELED"].includes(d.readyState) ? "build-failure" : "queued-or-building";
    return finish();
  }
  if (!v.path || !v["expect-text"] || !v["stable-origin"]) return finish();
  const immutable = origin(`https://${d.url}`);
  const stable = origin(v["stable-origin"]);
  const alias = await api(`/v4/aliases/${new URL(stable).hostname}`);
  if (!alias || alias.alias !== new URL(stable).hostname || alias.deploymentId !== id
    || alias.projectId !== p.id || alias.redirect) {
    receipt.status = "stable-alias-unverified";
    return finish();
  }
  for (const [kind, host] of [["immutable", immutable], ["stable", stable]]) {
    let result;
    for (let i = 0; i < attempts; i++) {
      let r;
      if (now() >= deadline) fail("Observation deadline exceeded; incomplete.");
      try {
        r = await fetcher(`${host}${v.path}`, { method: "GET", redirect: "manual", credentials: "omit",
          signal: AbortSignal.timeout(Math.max(1, Math.min(10_000, deadline - now()))) });
        const contentType = (r.headers.get("content-type") ?? "").split(";")[0].toLowerCase();
        const text = await boundedText(r);
        result = { kind, origin: host, httpStatus: r.status, html: contentType === "text/html",
          markerMatch: r.status === 200 && contentType === "text/html" && text.includes(v["expect-text"]),
          classification: r.status >= 300 && r.status < 400 || [401, 403].includes(r.status) ? "access-blocked"
            : r.status === 404 ? "propagation-incomplete" : r.status >= 500 ? "runtime-failure" : "runtime-mismatch" };
        if (result.markerMatch) result.classification = "contract-verified";
      } catch { result = { kind, origin: host, httpStatus: null, markerMatch: false, classification: "runtime-unavailable" }; }
      if (result.httpStatus !== 404 || i + 1 === attempts) break;
      await pause();
    }
    receipt.runtime.push(result);
  }
  receipt.status = receipt.runtime.every((r) => r.markerMatch) ? "runtime-contract-verified" : "incomplete";
  return finish();
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  execute(process.argv.slice(2)).then((receipt) => {
    console.log(JSON.stringify(receipt, null, 2));
    for (const warning of receipt.warnings ?? []) console.error(`warning: ${warning}`);
    if (!["project-verified", "runtime-contract-verified", "env-verified"].includes(receipt.status)) process.exitCode = 2;
  }).catch((error) => { console.error(error.message); process.exitCode = 1; });
}
