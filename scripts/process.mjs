import { randomUUID, createHash } from "node:crypto";
import { spawn } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const PROTOCOL_VERSION = 1;
export const MAX_UNIT_SECONDS = 300;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const fail = (message) => { throw new Error(message); };
const identifier = (value) => typeof value === "string" && /^[a-z][a-z0-9-]{0,63}$/.test(value);
const integer = (value) => Number.isSafeInteger(value) && value >= 1;
const oneOf = (...values) => (value) => values.includes(value);
const files = (value) => Array.isArray(value) && value.length > 0 && value.length <= 32
  && new Set(value).size === value.length && value.every((file) => typeof file === "string"
    && file.length <= 180 && /^[a-zA-Z0-9_.-]+(?:\/[a-zA-Z0-9_.-]+)*$/.test(file)
    && file.split("/").every((part) => part !== "." && part !== ".."));
const workerRevision = { worker: identifier, revision: integer };
const milestone = oneOf("platform", "preview", "editable-card", "branch", "creative-loop", "comprehension");
const category = oneOf("prerequisite", "access", "integration", "decision", "tooling");
const optionalId = (value) => value === null || identifier(value);
const exitCode = (value) => Number.isInteger(value) && value >= 0 && value <= 255;
const schemas = {
  launch: {},
  "control.init": { scope: identifier },
  "control.revise": { scope: identifier },
  "control.pause": {},
  "control.resume": {},
  "worker.register": { ...workerRevision, files, leaseSeconds: (n) => integer(n) && n <= MAX_UNIT_SECONDS },
  "worker.ack": workerRevision,
  "worker.checkpoint": workerRevision,
  "worker.release": { worker: identifier },
  "worker.run-start": { ...workerRevision, pid: integer },
  "worker.run-end": { ...workerRevision, pid: integer, code: (n) => Number.isInteger(n) && n >= 0 && n <= 255 },
  heartbeat: {},
  milestone: { milestone, status: oneOf("implemented", "integrated", "live") },
  accepted: { milestone },
  flaw: { id: identifier, category },
  observation: { id: identifier, category },
  "phase.start": {
    id: identifier, phase: identifier, owner: identifier, dependency: optionalId,
    expectedSeconds: (value) => integer(value) && value <= 86_400,
  },
  "phase.end": {
    id: identifier, outcome: oneOf("passed", "failed", "blocked", "cut"),
    commandExitCode: (value) => value === null || exitCode(value),
    correctiveAction: optionalId, repeatedFailure: optionalId,
  },
  "blocker.open": { id: identifier, category },
  "blocker.close": { id: identifier },
  "intervention.request": { id: identifier, kind: oneOf("owner-decision", "access", "acceptance") },
  "intervention.resolve": { id: identifier },
};

function exactObject(value, schema, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)
    || Object.keys(value).length !== Object.keys(schema).length
    || Object.entries(schema).some(([key, check]) => !Object.hasOwn(value, key) || !check(value[key]))) {
    fail(`Invalid ${label}: only the documented typed fields are permitted`);
  }
}

export function validateEvent(event) {
  exactObject(event, {
    v: (v) => v === PROTOCOL_VERSION,
    seq: integer,
    at: (v) => typeof v === "string" && Number.isFinite(Date.parse(v)) && new Date(v).toISOString() === v,
    actor: oneOf("controller", "worker", "owner"),
    type: (v) => typeof v === "string" && Object.hasOwn(schemas, v),
    data: (v) => v && typeof v === "object" && !Array.isArray(v),
  }, "event");
  exactObject(event.data, schemas[event.type], event.type);
  const expected = event.type === "accepted" ? "owner"
    : event.type.startsWith("worker.") ? "worker" : "controller";
  if (event.actor !== expected) fail(`${event.type} requires explicit ${expected} actor`);
  return event;
}

export function parseEvents(text) {
  if (text === "") return [];
  if (!text.endsWith("\n")) fail("Truncated event log: missing final newline");
  return text.slice(0, -1).split("\n").map((line, index) => {
    let event;
    try { event = JSON.parse(line); } catch { fail(`Malformed event record ${index + 1}`); }
    validateEvent(event);
    if (event.seq !== index + 1) fail(`Invalid sequence at record ${index + 1}`);
    return event;
  });
}

function requireControl(state) {
  if (!state.control) fail("Control not initialized");
}

function overlap(a, b) {
  // Conservatively protect case-insensitive checkouts on every supported OS.
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a === b || a.startsWith(`${b}/`) || b.startsWith(`${a}/`);
}

export function authorize(state, worker, revision, now = Date.now(), requireAck = true) {
  checkClock(state, now);
  requireControl(state);
  if (state.control.paused) fail("Control paused");
  if (revision !== state.control.revision) fail("Stale control revision");
  const unit = state.workers[worker];
  if (!unit || !unit.active) fail("No active worker unit");
  if (unit.revision !== revision) fail("Stale worker unit");
  if (now >= unit.expiresAt) fail("Worker unit expired");
  if (requireAck && unit.ack !== revision) fail("Missing current revision ACK");
  for (const [other, candidate] of Object.entries(state.workers)) {
    if (other !== worker && (candidate.pid || candidate.active)
      && unit.files.some((a) => candidate.files.some((b) => overlap(a, b)))) {
      fail("Conflicting active file ownership");
    }
  }
  return unit;
}

export function replay(events, now = Date.now()) {
  const state = {
    version: PROTOCOL_VERSION, sequence: 0, launchedAt: null, control: null,
    workers: {}, milestones: {}, blockers: {}, interventions: {}, heartbeatAt: null,
    timeline: [], alerts: [], latestEventAt: null, phases: {},
    feedback: { counts: { flaw: 0, observation: 0 }, records: [] },
  };
  for (const event of events) {
    validateEvent(event);
    if (event.seq !== state.sequence + 1) fail("Invalid event sequence");
    const at = Date.parse(event.at);
    if (state.timeline.length && at < Date.parse(state.timeline.at(-1).at)) fail("Clock moved backwards");
    const { type, data } = event;
    if (type === "launch") {
      if (state.launchedAt !== null) fail("Already launched");
      state.launchedAt = at;
      state.heartbeatAt = at;
    } else if (type === "control.init") {
      if (state.control) fail("Control already initialized");
      state.control = { revision: 1, scope: data.scope, paused: false };
    } else if (type.startsWith("control.")) {
      requireControl(state);
      if (type === "control.pause" && state.control.paused) fail("Already paused");
      if (type === "control.resume" && !state.control.paused) fail("Not paused");
      state.control.revision += 1;
      if (type === "control.revise") state.control.scope = data.scope;
      if (type === "control.pause") state.control.paused = true;
      if (type === "control.resume") state.control.paused = false;
    } else if (type === "worker.register") {
      requireControl(state);
      if (state.control.paused) fail("Control paused");
      if (data.revision !== state.control.revision) fail("Stale registration revision");
      const previous = state.workers[data.worker];
      if (previous?.active) fail("Checkpoint or release previous unit before registering");
      state.workers[data.worker] = {
        revision: data.revision, files: [...data.files], expiresAt: at + data.leaseSeconds * 1000,
        ack: null, active: true, pid: null,
      };
      authorize(state, data.worker, data.revision, at, false);
    } else if (type === "worker.release") {
      const unit = state.workers[data.worker];
      if (!unit?.active) fail("No active worker unit");
      if (unit.pid) fail("Wait for owned run to end before release");
      if (!state.control.paused && unit.revision === state.control.revision && at < unit.expiresAt) {
        fail("Checkpoint a current unit; release is only for revoked or expired units");
      }
      unit.active = false;
    } else if (type === "worker.run-end") {
      const unit = state.workers[data.worker];
      if (!unit || unit.pid !== data.pid || unit.revision !== data.revision) fail("Unknown owned run");
      unit.pid = null;
    } else if (type.startsWith("worker.")) {
      const unit = authorize(state, data.worker, data.revision, at, type !== "worker.ack");
      if (type === "worker.ack") unit.ack = data.revision;
      if (type === "worker.checkpoint") {
        if (unit.pid) fail("Wait for owned run to end before checkpoint");
        unit.active = false;
      }
      if (type === "worker.run-start") {
        if (unit.pid) fail("Worker already running");
        unit.pid = data.pid;
      }
    } else if (type === "heartbeat") {
      if (state.launchedAt === null) fail("Launch before heartbeat");
      state.heartbeatAt = at;
    } else if (type === "milestone" || type === "accepted") {
      if (state.launchedAt === null) fail("Launch before milestone");
      state.milestones[data.milestone] ??= {};
      state.milestones[data.milestone][type === "accepted" ? "humanAccepted" : data.status] = event.at;
    } else if (type === "flaw" || type === "observation") {
      state.feedback.counts[type] += 1;
      state.feedback.records.push({ type, ...data, at: event.at, seq: event.seq });
    } else if (type === "phase.start") {
      if (state.launchedAt === null) fail("Launch before phase");
      if (Object.hasOwn(state.phases, data.id)) fail("Phase ID already recorded");
      if (data.dependency !== null && !Object.hasOwn(state.phases, data.dependency)) fail("Unknown phase dependency");
      state.phases[data.id] = { ...data, startedAt: at, endedAt: null, outcome: null };
    } else if (type === "phase.end") {
      if (!Object.hasOwn(state.phases, data.id)) fail("Unknown phase");
      const phase = state.phases[data.id];
      if (phase.endedAt !== null) fail("Phase already ended");
      if (data.outcome === "passed" && data.commandExitCode !== null && data.commandExitCode !== 0) {
        fail("Passed phase cannot report a failing command");
      }
      if (data.repeatedFailure !== null
        && (!Object.hasOwn(state.phases, data.repeatedFailure)
          || !["failed", "blocked"].includes(state.phases[data.repeatedFailure].outcome))) {
        fail("Repeated failure must reference an earlier failed or blocked phase");
      }
      Object.assign(phase, data, { endedAt: at });
    } else {
      const target = type.startsWith("blocker.") ? state.blockers : state.interventions;
      if (type.endsWith(".open") || type.endsWith(".request")) {
        if (Object.hasOwn(target, data.id)) fail("Already open");
        target[data.id] = { ...data, openedAt: at };
      } else {
        if (!Object.hasOwn(target, data.id)) fail("Not open");
        delete target[data.id];
      }
    }
    state.sequence = event.seq;
    state.latestEventAt = at;
    state.timeline.push(event);
  }
  for (const collection of [state.blockers, state.interventions]) {
    for (const item of Object.values(collection)) item.ageSeconds = Math.max(0, Math.floor((now - item.openedAt) / 1000));
  }
  for (const blocker of Object.values(state.blockers)) {
    if (blocker.ageSeconds >= 300) state.alerts.push(`5m: review blocked work ${blocker.id}`);
  }
  for (const phase of Object.values(state.phases)) {
    phase.durationSeconds = Math.max(0, ((phase.endedAt ?? now) - phase.startedAt) / 1000);
    phase.overBudget = phase.durationSeconds > phase.expectedSeconds;
  }
  for (const unit of Object.values(state.workers)) {
    unit.expired = now >= unit.expiresAt;
    unit.revoked = state.control.paused || unit.revision !== state.control.revision;
  }
  if (state.launchedAt !== null) {
    const age = now - state.launchedAt;
    if (age >= 600_000 && !state.milestones.platform?.implemented) state.alerts.push("10m: platform prerequisite not implemented");
    if (age >= 600_000 && !state.milestones.preview?.live) state.alerts.push("10m: preview not live");
    if (age >= 1_200_000 && !state.milestones["editable-card"]?.integrated) state.alerts.push("20m: durable editable card not integrated");
    if (now - state.heartbeatAt >= 600_000) state.alerts.push("10m: status heartbeat overdue");
  }
  return state;
}

function location(root) {
  return path.join(root, ".minerva");
}

async function readText(root) {
  try { return await fs.readFile(path.join(location(root), "events.jsonl"), "utf8"); }
  catch (error) { if (error.code === "ENOENT") return ""; throw error; }
}

function checkClock(state, now) {
  if (!Number.isFinite(now) || (state.latestEventAt !== null && now < state.latestEventAt)) {
    fail("Current wall clock is behind latest event");
  }
}

export async function readState(root = process.cwd(), now) {
  const events = parseEvents(await readText(root));
  now ??= Date.now();
  const state = replay(events, now);
  checkClock(state, now);
  return state;
}

export function summarize(state) {
  return {
    version: state.version, sequence: state.sequence, latestEventAt: state.latestEventAt,
    launchedAt: state.launchedAt, control: state.control, workers: state.workers,
    milestones: state.milestones, blockers: state.blockers, interventions: state.interventions,
    activePhases: Object.values(state.phases).filter((phase) => phase.endedAt === null),
    phaseCounts: Object.fromEntries(["passed", "failed", "blocked", "cut"].map((outcome) => [
      outcome, Object.values(state.phases).filter((phase) => phase.outcome === outcome).length,
    ])),
    heartbeatAt: state.heartbeatAt, alerts: state.alerts, feedbackCounts: state.feedback.counts,
  };
}

export async function withLock(root, operation, timeoutMs = 2000) {
  const directory = location(root);
  await fs.mkdir(directory, { recursive: true, mode: 0o700 });
  const lock = path.join(directory, "control.lock");
  const start = performance.now();
  let handle;
  while (!handle) {
    try { handle = await fs.open(lock, "wx", 0o600); }
    catch (error) {
      if (error.code !== "EEXIST") throw error;
      if (performance.now() - start >= timeoutMs) fail("Control lock timeout; never automatically steal a lock");
      await sleep(20);
    }
  }
  try {
    await handle.writeFile(JSON.stringify({ pid: process.pid, createdAt: new Date().toISOString() }) + "\n");
    await handle.sync();
    return await operation();
  } finally {
    await handle.close();
    await fs.unlink(lock);
  }
}

async function atomicWrite(file, text) {
  const staging = `${file}.${process.pid}.${randomUUID()}.new`;
  let handle;
  try {
    handle = await fs.open(staging, "wx", 0o600);
    await handle.writeFile(text);
    await handle.sync();
    await handle.close();
    handle = null;
    await fs.rename(staging, file);
    if (process.platform !== "win32") {
      const directory = await fs.open(path.dirname(file), "r");
      try { await directory.sync(); } finally { await directory.close(); }
    }
  } finally {
    if (handle) await handle.close();
    await fs.unlink(staging).catch((error) => { if (error.code !== "ENOENT") throw error; });
  }
}

async function appendLocked(root, type, data, actor) {
  const text = await readText(root);
  const events = parseEvents(text);
  const event = { v: PROTOCOL_VERSION, seq: events.length + 1, at: new Date().toISOString(), actor, type, data };
  replay([...events, event]);
  // Atomic replacement retains the immutable prefix; no partial JSONL append is exposed.
  await atomicWrite(path.join(location(root), "events.jsonl"), text + JSON.stringify(event) + "\n");
  return event;
}

export async function appendEvent(root, type, data = {}, actor = "controller") {
  if (type === "worker.run-start" || type === "worker.run-end") fail("Run lifecycle is reserved for guarded run");
  return withLock(root, () => appendLocked(root, type, data, actor));
}

const digest = (text) => createHash("sha256").update(text).digest("hex");

function renderReport(text, now) {
  const state = replay(parseEvents(text), now);
  checkClock(state, now);
  return `<!-- minerva-report ${digest(text)} ${now} -->\n# Process snapshot\n\n`
    + `Disposable; do not edit. Generated ${new Date(now).toISOString()}; source sequence ${state.sequence}.\n\n`
    + `\`\`\`json\n${JSON.stringify({ ...summarize(state), feedback: state.feedback }, null, 2)}\n\`\`\`\n`;
}

export async function report(root = process.cwd(), check = false) {
  const text = await readText(root);
  const now = Date.now();
  replay(parseEvents(text), now);
  const file = path.join(location(root), "report.md");
  if (check) {
    const saved = await fs.readFile(file, "utf8");
    const match = saved.match(/^<!-- minerva-report ([a-f0-9]{64}) (\d+) -->/);
    if (!match || match[1] !== digest(text) || now < Number(match[2]) || now - Number(match[2]) >= 600_000
      || saved !== renderReport(text, Number(match[2]))) {
      fail("Stale generated report; regenerate from events");
    }
    return "Report fresh (source unchanged; generated less than 10 minutes ago)";
  }
  const output = renderReport(text, now);
  await fs.mkdir(location(root), { recursive: true, mode: 0o700 });
  await atomicWrite(file, output);
  return output;
}

export async function guardedRun(root, worker, revision, command, args = [], { pollMs = 50 } = {}) {
  if (!["darwin", "linux"].includes(process.platform)) fail("Guarded run supports POSIX macOS/Linux only; unsupported platform denied");
  if (!command || !identifier(worker) || !integer(revision)) fail("Invalid guarded run arguments");
  let child;
  let outcome;
  let revoked = false;
  let reason = null;
  let monitor;
  let checking = false;
  let escalation;
  let leaseTimer;
  const signalGroup = (signal) => {
    if (!child?.pid) return;
    try { process.kill(-child.pid, signal); }
    catch (error) { if (error.code !== "ESRCH") throw error; }
  };
  const stop = (message) => {
    if (revoked) return;
    revoked = true;
    reason = message;
    signalGroup("SIGTERM");
    escalation = setTimeout(() => signalGroup("SIGKILL"), 150);
  };
  const interrupt = () => stop("Wrapper interrupted");
  process.on("SIGINT", interrupt);
  process.on("SIGTERM", interrupt);
  try {
    await withLock(root, async () => {
      const state = await readState(root);
      if (revoked) fail("Wrapper interrupted before spawn");
      const wallNow = Date.now();
      const unit = authorize(state, worker, revision, wallNow);
      if (unit.pid) fail("Worker already running");
      // Node timers use elapsed time; wall-clock rollback cannot extend this lease.
      leaseTimer = setTimeout(() => stop("Monotonic worker lease expired"),
        Math.min(MAX_UNIT_SECONDS * 1000, unit.expiresAt - wallNow));
      // detached creates an owned POSIX process group; never unref the child.
      child = spawn(command, args, { cwd: root, stdio: "inherit", detached: true });
      outcome = new Promise((resolve) => {
        child.once("error", () => resolve(127));
        child.once("exit", (code) => resolve(Number.isInteger(code) ? Math.min(255, code) : 128));
      });
      await new Promise((resolve, reject) => {
        child.once("spawn", resolve);
        child.once("error", reject);
      });
      try { await appendLocked(root, "worker.run-start", { worker, revision, pid: child.pid }, "worker"); }
      catch (error) { stop("Could not persist run authorization"); throw error; }
    });
    monitor = setInterval(async () => {
      if (checking || revoked) return;
      checking = true;
      try { authorize(await readState(root), worker, revision); }
      catch { stop("Control changed, unit expired, or event log unreadable"); }
      finally { checking = false; }
    }, pollMs);
    const code = await outcome;
    clearTimeout(leaseTimer);
    // Also remove ordinary descendants when their leader finishes.
    signalGroup("SIGTERM");
    await sleep(175);
    signalGroup("SIGKILL");
    if (escalation) clearTimeout(escalation);
    if (monitor) clearInterval(monitor);
    await withLock(root, () => appendLocked(root, "worker.run-end", {
      worker, revision, pid: child.pid, code: revoked ? 125 : code,
    }, "worker"));
    return { code: revoked ? 125 : code, revoked, reason };
  } finally {
    if (monitor) clearInterval(monitor);
    if (escalation) clearTimeout(escalation);
    if (leaseTimer) clearTimeout(leaseTimer);
    if (child?.pid) {
      signalGroup("SIGKILL");
      await outcome;
    }
    process.removeListener("SIGINT", interrupt);
    process.removeListener("SIGTERM", interrupt);
  }
}

async function recoverRun(root, worker) {
  if (!["darwin", "linux"].includes(process.platform)) fail("Run recovery supports POSIX macOS/Linux only");
  if (!identifier(worker)) fail("Invalid worker");
  return withLock(root, async () => {
    const state = await readState(root);
    const unit = state.workers[worker];
    if (!unit?.pid) fail("No recorded run to recover");
    for (const pid of [unit.pid, -unit.pid]) {
      try { process.kill(pid, 0); }
      catch (error) {
        if (error.code === "ESRCH") continue;
        throw error;
      }
      fail("Recorded PID or process group is still alive; recovery denied");
    }
    return appendLocked(root, "worker.run-end", { worker, revision: unit.revision, pid: unit.pid, code: 125 }, "worker");
  });
}

export async function main(args = process.argv.slice(2), root = process.cwd()) {
  const [command, action, ...rest] = args;
  if (command === "status" && args.length === 1) return summarize(await readState(root));
  if (command === "timeline" && args.length === 1) return (await readState(root)).timeline;
  if (command === "feedback" && args.length === 1) return (await readState(root)).feedback;
  if (command === "timing" && args.length === 1) return Object.values((await readState(root)).phases);
  if (command === "report" && (args.length === 1 || (args.length === 2 && action === "--check"))) return report(root, action === "--check");
  if (command === "launch" && args.length === 1) return appendEvent(root, "launch");
  if (command === "control") {
    if (["init", "revise"].includes(action) && rest.length === 1) return appendEvent(root, `control.${action}`, { scope: rest[0] });
    if (["pause", "resume"].includes(action) && !rest.length) return appendEvent(root, `control.${action}`);
  }
  if (command === "worker") {
    const [worker, revisionText, ...tail] = rest;
    const revision = Number(revisionText);
    if (action === "register" && tail.length >= 1) {
      return appendEvent(root, "worker.register", { worker, revision, files: tail, leaseSeconds: MAX_UNIT_SECONDS }, "worker");
    }
    if (["ack", "checkpoint"].includes(action) && rest.length === 2) return appendEvent(root, `worker.${action}`, { worker, revision }, "worker");
    if (action === "release" && rest.length === 1) return appendEvent(root, "worker.release", { worker }, "worker");
    if (action === "recover" && rest.length === 1) return recoverRun(root, worker);
    if (action === "guard" && rest.length === 2) {
      return withLock(root, async () => { authorize(await readState(root), worker, revision); return { authorized: true, revision }; });
    }
    if (action === "run" && tail[0] === "--" && tail.length >= 2) {
      const result = await guardedRun(root, worker, revision, tail[1], tail.slice(2));
      process.exitCode = result.code;
      return result;
    }
  }
  if (command === "event" && ["heartbeat", "milestone", "accepted", "flaw", "observation", "phase.start", "phase.end", "blocker.open", "blocker.close", "intervention.request", "intervention.resolve"].includes(action)) {
    if (rest.length !== (action === "accepted" ? 2 : 1) || (action === "accepted" && rest[1] !== "--owner")) fail("Acceptance requires explicit --owner; events require one JSON object");
    return appendEvent(root, action, JSON.parse(rest[0]), action === "accepted" ? "owner" : "controller");
  }
  fail("Usage: process.mjs launch|status|timeline|timing|feedback|report [--check]|control init/revise SCOPE|control pause/resume|worker register/ack/checkpoint/release/recover/guard/run ...|event TYPE JSON [--owner]");
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().then((result) => console.log(typeof result === "string" ? result : JSON.stringify(result, null, 2)))
    .catch((error) => { console.error(`process: ${error.message}`); process.exitCode = 1; });
}
