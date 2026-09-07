import test from "node:test";
import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";
import {
  appendEvent, authorize, guardedRun, main, parseEvents, readState, replay, report, validateEvent, withLock,
} from "../scripts/process.mjs";

const project = fileURLToPath(new URL("../", import.meta.url));
const cli = path.join(project, "scripts/process.mjs");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fixture(t) {
  const root = path.join(project, ".minerva", `test-${randomUUID()}`);
  await fs.mkdir(root, { recursive: true });
  t.after(async () => {
    // Only exact files created by this test; no recursive directory deletion.
    const directory = path.join(root, ".minerva");
    for (const file of await fs.readdir(directory).catch((error) => {
      if (error.code === "ENOENT") return [];
      throw error;
    })) await fs.unlink(path.join(directory, file));
    await fs.rmdir(directory).catch((error) => { if (error.code !== "ENOENT") throw error; });
    await fs.rmdir(root);
  });
  return root;
}

function event(seq, type, data = {}, seconds = seq, actor = type.startsWith("worker.") ? "worker" : "controller") {
  return { v: 1, seq, at: new Date(1_800_000_000_000 + seconds * 1000).toISOString(), actor, type, data };
}
function unitEvents(leaseSeconds = 300) {
  return [
    event(1, "control.init", { scope: "template" }),
    event(2, "worker.register", { worker: "ui", revision: 1, files: ["src/card"], leaseSeconds }),
    event(3, "worker.ack", { worker: "ui", revision: 1 }),
  ];
}
function childCli(root, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [cli, ...args], { cwd: root, stdio: ["ignore", "pipe", "pipe"] });
    let stderr = "";
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("error", reject);
    child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(stderr)));
  });
}

test("strict typed metadata and JSONL reject bad/torn records", () => {
  const valid = event(1, "launch");
  assert.equal(validateEvent(valid), valid);
  assert.throws(() => validateEvent({ ...valid, data: { prompt: "not allowed" } }), /typed fields/);
  assert.throws(() => validateEvent({ ...valid, at: "2027-01-01" }), /Invalid event/);
  assert.throws(() => parseEvents(JSON.stringify(valid)), /Truncated/);
  assert.throws(() => parseEvents("{bad}\n"), /Malformed/);
  assert.throws(() => parseEvents(`${JSON.stringify(valid)}\n\n`), /Malformed/);
  assert.throws(() => parseEvents(`${JSON.stringify({ ...valid, seq: 2 })}\n`), /sequence/);
  assert.throws(() => validateEvent(event(1, "accepted", { milestone: "preview" })), /explicit owner/);
  assert.throws(() => validateEvent(event(1, "worker.register", {
    worker: "ui", revision: 1, files: ["../private"], leaseSeconds: 300,
  })), /typed fields/);
  assert.throws(() => validateEvent(event(1, "worker.register", {
    worker: "ui", revision: 1, files: ["src"], leaseSeconds: 301,
  })), /typed fields/);
  for (const type of ["flaw", "observation"]) {
    assert.doesNotThrow(() => validateEvent(event(1, type, { id: "setup", category: "tooling" })));
    assert.throws(() => validateEvent(event(1, type, { id: "setup", category: "tooling", content: "forbidden" })), /typed fields/);
    assert.throws(() => validateEvent(event(1, type, { id: "setup", category: "arbitrary" })), /typed fields/);
  }
});

test("worker ACK, revision, checkpoint, conflicts, and expiry are replay-derived", () => {
  const events = unitEvents();
  const now = Date.parse(events[2].at);
  assert.throws(() => authorize(replay(events.slice(0, 2), now), "ui", 1, now), /Missing.*ACK/);
  authorize(replay(events, now), "ui", 1, now);
  assert.throws(() => authorize(replay(events, now), "ui", 2, now), /Stale control/);
  assert.throws(() => authorize(replay(events, now), "ui", 1, now + 300_000), /expired/);
  assert.throws(() => replay([...events, event(4, "worker.register", {
    worker: "api", revision: 1, files: ["src/card/title.ts"], leaseSeconds: 300,
  })]), /Conflicting/);
  assert.throws(() => replay([...events, event(4, "worker.register", {
    worker: "api", revision: 1, files: ["SRC/Card"], leaseSeconds: 300,
  })]), /Conflicting/);
  assert.throws(() => replay([...events, event(4, "worker.register", {
    worker: "ui", revision: 1, files: ["src/other"], leaseSeconds: 300,
  })]), /Checkpoint or release/);
  assert.throws(() => replay([...events, event(4, "worker.release", { worker: "ui" })]), /Checkpoint a current unit/);
  const done = [...events, event(4, "worker.checkpoint", { worker: "ui", revision: 1 })];
  assert.equal(replay(done).workers.ui.active, false);
  assert.doesNotThrow(() => replay([...done, event(5, "worker.register", {
    worker: "ui", revision: 1, files: ["src/other"], leaseSeconds: 300,
  })]));
  const paused = [...events, event(4, "control.pause")];
  assert.equal(replay(paused).control.revision, 2);
  assert.equal(replay([...paused, event(5, "worker.release", { worker: "ui" })]).workers.ui.active, false);
  assert.throws(() => replay([...paused, event(5, "worker.ack", { worker: "ui", revision: 2 })]), /paused/);
  const resumed = [...paused, event(5, "control.resume")];
  assert.equal(replay(resumed).control.revision, 3);
  assert.throws(() => replay([...resumed, event(6, "worker.ack", { worker: "ui", revision: 3 })]), /Stale worker/);
  assert.throws(() => replay([...events, event(4, "worker.ack", { worker: "ui", revision: 1 }, 400)]), /expired/);
  const runningRevoked = [...events,
    event(4, "worker.run-start", { worker: "ui", revision: 1, pid: 12345 }),
    event(5, "control.revise", { scope: "next" }),
  ];
  assert.throws(() => replay([...runningRevoked, event(6, "worker.register", {
    worker: "api", revision: 2, files: ["src/card"], leaseSeconds: 300,
  })]), /Conflicting/);
  assert.throws(() => replay([...events, event(4, "heartbeat", {}, 0)]), /Clock moved backwards/);
});

test("phase timing correlates owner, dependency, outcome, correction, and repeated failure", async (t) => {
  const root = await fixture(t);
  await main(["launch"], root);
  const start = { id: "setup-one", phase: "setup", owner: "implementer", dependency: null, expectedSeconds: 30 };
  await main(["event", "phase.start", JSON.stringify(start)], root);
  await main(["event", "phase.end", JSON.stringify({
    id: start.id, outcome: "failed", commandExitCode: 1, correctiveAction: "pin-runtime", repeatedFailure: null,
  })], root);
  await main(["event", "phase.start", JSON.stringify({ ...start, id: "setup-two", dependency: start.id })], root);
  await main(["event", "phase.end", JSON.stringify({
    id: "setup-two", outcome: "passed", commandExitCode: 0, correctiveAction: "pin-runtime", repeatedFailure: start.id,
  })], root);
  const timing = await main(["timing"], root);
  assert.equal(timing.length, 2);
  assert.equal(timing[1].owner, "implementer");
  assert.equal(timing[1].dependency, start.id);
  assert.equal(timing[1].repeatedFailure, start.id);
  assert.ok(timing[0].endedAt >= timing[0].startedAt);
  assert.equal(timing[0].durationSeconds, (timing[0].endedAt - timing[0].startedAt) / 1000);
  assert.deepEqual((await main(["status"], root)).phaseCounts, { passed: 1, failed: 1, blocked: 0, cut: 0 });
  await assert.rejects(main(["event", "phase.start", JSON.stringify(start)], root), /already recorded/);
  await assert.rejects(main(["event", "phase.end", JSON.stringify({
    id: "missing", outcome: "failed", commandExitCode: 1, correctiveAction: null, repeatedFailure: null,
  })], root), /Unknown phase/);
});

test("timing rejects false success, unknown references, and raw telemetry content", () => {
  const start = { id: "one", phase: "setup", owner: "implementer", dependency: null, expectedSeconds: 3 };
  const events = [event(1, "launch"), event(2, "phase.start", start)];
  const end = { id: "one", outcome: "passed", commandExitCode: 0, correctiveAction: null, repeatedFailure: null };
  assert.throws(() => replay([...events, event(3, "phase.end", { ...end, commandExitCode: 1 })]), /failing command/);
  assert.throws(() => replay([...events, event(3, "phase.end", { ...end, repeatedFailure: "absent" })]), /earlier failed/);
  assert.throws(() => replay([event(1, "launch"), event(2, "phase.start", { ...start, dependency: "absent" })]), /Unknown phase dependency/);
  assert.throws(() => validateEvent(event(1, "phase.start", { ...start, rawOutput: "forbidden" })), /typed fields/);
  const state = replay([...events, event(3, "phase.end", end, 8)]);
  assert.equal(state.phases.one.durationSeconds, 6);
  assert.equal(state.phases.one.overBudget, true);
});

test("five-minute blocked-work review alert follows the canonical blocker lifetime", () => {
  const events = [event(1, "launch"), event(2, "blocker.open", { id: "access", category: "access" })];
  const opened = Date.parse(events[1].at);
  assert.equal(replay(events, opened + 299_999).alerts.some((alert) => alert.startsWith("5m:")), false);
  assert.ok(replay(events, opened + 300_000).alerts.includes("5m: review blocked work access"));
  assert.equal(replay([...events, event(3, "blocker.close", { id: "access" }, 303)], opened + 400_000)
    .alerts.some((alert) => alert.startsWith("5m:")), false);
});

test("stale and expired non-PID owners retain paths until explicit release", () => {
  const events = unitEvents();
  const revised = [...events, event(4, "control.revise", { scope: "next" })];
  const register = (seq, revision, seconds) => event(seq, "worker.register", {
    worker: "api", revision, files: ["src/card/title.ts"], leaseSeconds: 300,
  }, seconds);
  assert.throws(() => replay([...revised, register(5, 2, 5)]), /Conflicting/);
  const released = [...revised, event(5, "worker.release", { worker: "ui" })];
  assert.equal(replay([...released, register(6, 2, 6)]).workers.api.active, true);
  assert.throws(() => replay([...events, register(4, 1, 400)]), /Conflicting/);
  const expiredReleased = [...events, event(4, "worker.release", { worker: "ui" }, 400)];
  assert.equal(replay([...expiredReleased, register(5, 1, 401)]).workers.api.active, true);
});

test("current clock rollback denies pure authorization and state reads", async (t) => {
  const events = unitEvents();
  const at = Date.parse(events.at(-1).at);
  assert.throws(() => authorize(replay(events, at), "ui", 1, at - 1), /wall clock.*behind/);
  const root = await fixture(t);
  const saved = await appendEvent(root, "control.init", { scope: "template" });
  await assert.rejects(readState(root, Date.parse(saved.at) - 1), /wall clock.*behind/);
});

test("feedback is replayed separately from compact status and timeline", async (t) => {
  const root = await fixture(t);
  await main(["launch"], root);
  await main(["event", "flaw", '{"id":"setup","category":"tooling"}'], root);
  await main(["event", "observation", '{"id":"review","category":"decision"}'], root);
  const status = await main(["status"], root);
  assert.equal(Object.hasOwn(status, "timeline"), false);
  assert.equal(Object.hasOwn(status, "feedback"), false);
  assert.deepEqual(status.feedbackCounts, { flaw: 1, observation: 1 });
  const timeline = await main(["timeline"], root);
  assert.equal(timeline.length, 3);
  assert.deepEqual(timeline.map((record) => record.type), ["launch", "flaw", "observation"]);
  const feedback = await main(["feedback"], root);
  assert.deepEqual(feedback.counts, { flaw: 1, observation: 1 });
  assert.deepEqual(feedback.records.map(({ type, id, category }) => ({ type, id, category })), [
    { type: "flaw", id: "setup", category: "tooling" },
    { type: "observation", id: "review", category: "decision" },
  ]);
  assert.deepEqual((await readState(root)).feedback, feedback);
  const output = await report(root);
  assert.doesNotMatch(output, /"timeline"/);
  assert.match(output, /"feedback"/);
  assert.match(await report(root, true), /fresh/);
  await main(["event", "flaw", '{"id":"next","category":"access"}'], root);
  await assert.rejects(report(root, true), /Stale/);
});

test("monotonic remaining lease expires even when wall clock stops advancing", {
  skip: !["darwin", "linux"].includes(process.platform),
}, async (t) => {
  const root = await fixture(t);
  await appendEvent(root, "control.init", { scope: "template" });
  await appendEvent(root, "worker.register", { worker: "ui", revision: 1, files: ["src"], leaseSeconds: 1 }, "worker");
  await appendEvent(root, "worker.ack", { worker: "ui", revision: 1 }, "worker");
  const run = guardedRun(root, "ui", 1, process.execPath, ["-e", "setInterval(() => {}, 1000)"]);
  let state;
  for (let i = 0; i < 100; i++) {
    state = await readState(root);
    if (state.workers.ui.pid) break;
    await sleep(10);
  }
  assert.ok(state.workers.ui.pid);
  const frozen = state.latestEventAt;
  const clock = t.mock.method(Date, "now", () => frozen);
  try {
    const result = await run;
    assert.equal(result.code, 125);
    assert.equal(result.reason, "Monotonic worker lease expired");
  } finally {
    clock.mock.restore();
  }
});

test("cadence, blockers, interventions, and human acceptance remain distinct", () => {
  const events = [
    event(1, "launch"),
    event(2, "blocker.open", { id: "setup", category: "prerequisite" }),
    event(3, "intervention.request", { id: "owner-review", kind: "acceptance" }),
    event(4, "milestone", { milestone: "preview", status: "implemented" }),
    event(5, "milestone", { milestone: "preview", status: "integrated" }),
    event(6, "milestone", { milestone: "preview", status: "live" }),
  ];
  const state = replay(events, Date.parse(events[0].at) + 1_200_000);
  assert.deepEqual(state.alerts, [
    "5m: review blocked work setup",
    "10m: platform prerequisite not implemented",
    "20m: durable editable card not integrated",
    "10m: status heartbeat overdue",
  ]);
  assert.equal(state.blockers.setup.ageSeconds, 1199);
  assert.equal(state.interventions["owner-review"].ageSeconds, 1198);
  assert.equal(state.milestones.preview.humanAccepted, undefined);
  const accepted = replay([...events, event(7, "accepted", { milestone: "preview" }, 7, "owner")]);
  assert.ok(accepted.milestones.preview.humanAccepted);
  assert.equal(replay([event(1, "launch")], Date.parse(events[0].at) + 599_999).alerts.length, 0);
  assert.equal(replay([event(1, "launch")], Date.parse(events[0].at) + 600_000).alerts.length, 3);
  const closed = replay([...events, event(7, "blocker.close", { id: "setup" }),
    event(8, "intervention.resolve", { id: "owner-review" })]);
  assert.deepEqual(closed.blockers, {});
  assert.deepEqual(closed.interventions, {});
});

test("concurrent independent processes preserve immutable prefix and real timestamps", async (t) => {
  const root = await fixture(t);
  const before = Date.now();
  await appendEvent(root, "launch");
  const log = path.join(root, ".minerva/events.jsonl");
  const prefix = await fs.readFile(log, "utf8");
  await Promise.all(Array.from({ length: 8 }, () => childCli(root, ["event", "heartbeat", "{}"])));
  const text = await fs.readFile(log, "utf8");
  assert.ok(text.startsWith(prefix));
  const events = parseEvents(text);
  assert.equal(events.length, 9);
  assert.ok(events.every((record) => Date.parse(record.at) >= before && Date.parse(record.at) <= Date.now()));
  assert.equal((await readState(root)).sequence, 9);
});

test("malformed log fails closed without reset; locks time out without stealing", async (t) => {
  const root = await fixture(t);
  await appendEvent(root, "launch");
  const log = path.join(root, ".minerva/events.jsonl");
  await fs.appendFile(log, '{"torn":');
  const before = await fs.readFile(log, "utf8");
  await assert.rejects(appendEvent(root, "heartbeat"), /Truncated/);
  assert.equal(await fs.readFile(log, "utf8"), before);
  await withLock(root, async () => {
    await assert.rejects(withLock(root, async () => {}, 40), /lock timeout/);
    const lock = JSON.parse(await fs.readFile(path.join(root, ".minerva/control.lock"), "utf8"));
    assert.equal(lock.pid, process.pid);
  });
});

test("report freshness tracks canonical source and age, not editable markdown", async (t) => {
  const root = await fixture(t);
  await appendEvent(root, "launch");
  await report(root);
  assert.match(await report(root, true), /fresh/);
  const file = path.join(root, ".minerva/report.md");
  await fs.appendFile(file, "\nManually invented status\n");
  await assert.rejects(report(root, true), /Stale/);
  await report(root);
  await appendEvent(root, "heartbeat");
  await assert.rejects(report(root, true), /Stale/);
  await report(root);
  const text = await fs.readFile(file, "utf8");
  await fs.writeFile(file, text.replace(/([a-f0-9]{64}) \d+ -->/, `$1 ${Date.now() - 600_001} -->`));
  await assert.rejects(report(root, true), /Stale/);
});

test("CLI launch/control/worker requires explicit ACK and owner acceptance", async (t) => {
  const root = await fixture(t);
  await main(["launch"], root);
  await main(["control", "init", "template"], root);
  await main(["worker", "register", "ui", "1", "src/card.ts"], root);
  await assert.rejects(main(["worker", "guard", "ui", "1"], root), /ACK/);
  await main(["worker", "ack", "ui", "1"], root);
  assert.equal((await main(["worker", "guard", "ui", "1"], root)).authorized, true);
  await assert.rejects(main(["event", "accepted", '{"milestone":"preview"}'], root), /owner/);
  await main(["event", "accepted", '{"milestone":"preview"}', "--owner"], root);
  assert.ok((await main(["status"], root)).milestones.preview.humanAccepted);
  await assert.rejects(main(["event", "message", "{}"], root), /Usage/);
  await assert.rejects(appendEvent(root, "worker.run-start", { worker: "ui", revision: 1, pid: 1 }, "worker"), /reserved/);
});

for (const change of ["pause", "revise", "expiry"]) {
  test(`guarded owned child stops on ${change}`, { skip: !["darwin", "linux"].includes(process.platform) }, async (t) => {
    const root = await fixture(t);
    await appendEvent(root, "control.init", { scope: "template" });
    await appendEvent(root, "worker.register", { worker: "ui", revision: 1, files: ["src"], leaseSeconds: change === "expiry" ? 1 : 300 }, "worker");
    await appendEvent(root, "worker.ack", { worker: "ui", revision: 1 }, "worker");
    const run = guardedRun(root, "ui", 1, process.execPath, ["-e", "setInterval(() => {}, 1000)"]);
    let pid;
    for (let i = 0; i < 100 && !pid; i++) {
      pid = (await readState(root)).workers.ui.pid;
      if (!pid) await sleep(20);
    }
    assert.ok(pid, "owned PID recorded before control changes");
    await assert.rejects(main(["worker", "recover", "ui"], root), /still alive/);
    if (change !== "expiry") await appendEvent(root, `control.${change}`, change === "revise" ? { scope: "next" } : {});
    const result = await run;
    assert.equal(result.revoked, true);
    assert.equal(result.code, 125);
    assert.throws(() => process.kill(pid, 0), { code: "ESRCH" });
    assert.equal((await readState(root)).workers.ui.pid, null);
  });
}

test("guarded run succeeds; missing ACK never starts command", async (t) => {
  const root = await fixture(t);
  await appendEvent(root, "control.init", { scope: "template" });
  await appendEvent(root, "worker.register", { worker: "ui", revision: 1, files: ["src"], leaseSeconds: 300 }, "worker");
  await assert.rejects(guardedRun(root, "ui", 1, process.execPath, ["-e", "process.exit(0)"]), /ACK/);
  await appendEvent(root, "worker.ack", { worker: "ui", revision: 1 }, "worker");
  assert.equal((await guardedRun(root, "ui", 1, process.execPath, ["-e", "process.exit(0)"])).code, 0);
  await main(["worker", "checkpoint", "ui", "1"], root);
  assert.equal((await readState(root)).workers.ui.active, false);
});

test("revocation terminates ordinary descendants without killing unrelated processes", {
  skip: !["darwin", "linux"].includes(process.platform),
}, async (t) => {
  const root = await fixture(t);
  const unrelated = spawn(process.execPath, ["-e", "setInterval(() => {}, 1000)"], { stdio: "ignore" });
  const unrelatedExit = new Promise((resolve) => unrelated.once("exit", resolve));
  t.after(async () => { unrelated.kill("SIGTERM"); await unrelatedExit; });
  await appendEvent(root, "control.init", { scope: "template" });
  await appendEvent(root, "worker.register", { worker: "ui", revision: 1, files: ["src"], leaseSeconds: 300 }, "worker");
  await appendEvent(root, "worker.ack", { worker: "ui", revision: 1 }, "worker");
  const script = "const {spawn}=require('node:child_process');"
    + "const child=spawn(process.execPath,['-e','setInterval(() => {}, 1000)'],{stdio:'ignore'});"
    + "require('node:fs').writeFileSync('.minerva/descendant.pid',String(child.pid));"
    + "setInterval(() => {},1000)";
  const run = guardedRun(root, "ui", 1, process.execPath, ["-e", script]);
  let descendant;
  for (let i = 0; i < 100 && !descendant; i++) {
    descendant = Number(await fs.readFile(path.join(root, ".minerva/descendant.pid"), "utf8").catch(() => ""));
    if (!descendant) await sleep(20);
  }
  assert.ok(descendant);
  await appendEvent(root, "control.pause");
  assert.equal((await run).revoked, true);
  assert.throws(() => process.kill(descendant, 0), { code: "ESRCH" });
  assert.equal(process.kill(unrelated.pid, 0), true);
});

test("unsupported guarded platform is denied before spawning", async () => {
  const descriptor = Object.getOwnPropertyDescriptor(process, "platform");
  try {
    Object.defineProperty(process, "platform", { value: "win32" });
    await assert.rejects(guardedRun(project, "ui", 1, process.execPath), /unsupported platform denied/);
  } finally {
    Object.defineProperty(process, "platform", descriptor);
  }
});

test("explicit recovery records a dead run without modifying history", {
  skip: !["darwin", "linux"].includes(process.platform),
}, async (t) => {
  const root = await fixture(t);
  const child = spawn(process.execPath, ["-e", "process.exit(0)"], { detached: true, stdio: "ignore" });
  await new Promise((resolve, reject) => { child.once("exit", resolve); child.once("error", reject); });
  const records = [...unitEvents(), event(4, "worker.run-start", { worker: "ui", revision: 1, pid: child.pid })];
  // A synthetic persisted crashed run uses a PID this test actually observed exit.
  await fs.mkdir(path.join(root, ".minerva"));
  const file = path.join(root, ".minerva/events.jsonl");
  const text = records.map((record) => JSON.stringify({
    ...record, at: new Date(Date.now() - 10_000 + record.seq).toISOString(),
  })).join("\n") + "\n";
  await fs.writeFile(file, text);
  await main(["worker", "recover", "ui"], root);
  assert.equal((await readState(root)).workers.ui.pid, null);
  assert.ok((await fs.readFile(file, "utf8")).startsWith(text));
  await main(["worker", "checkpoint", "ui", "1"], root);
});
