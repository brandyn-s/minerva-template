# Local process CLI

Run from the working repository root using the pinned Node toolchain. No service, dependencies,
private product data, or remote writes are required. `.minerva/events.jsonl` is the
**only canonical source**; keep `.minerva/` ignored. Records use clock timestamps,
protocol version 1 and consecutive sequence numbers. Status, ownership, blockers,
intervention ages, and timeline are replayed, never hand-maintained.
`launch` starts this telemetry clock only; it grants no implementation or
external permission and does not override PRE-CLOCK. It can also track explicitly
authorized content-free template maintenance.

One implementer needs only the event and read commands, not worker registration:

```sh
node scripts/process.mjs launch
node scripts/process.mjs event phase.start '{"id":"spine-one","phase":"spine","owner":"implementer","dependency":null,"expectedSeconds":300}'
node scripts/process.mjs event phase.end '{"id":"spine-one","outcome":"passed","commandExitCode":0,"correctiveAction":null,"repeatedFailure":null}'
node scripts/process.mjs status
node scripts/process.mjs timing
node scripts/process.mjs feedback
```

Record actual outcomes, not intended ones. For optional independent workers:

```sh
node scripts/process.mjs control init template-slice
node scripts/process.mjs worker register ui 1 src/card.ts
node scripts/process.mjs worker ack ui 1
node scripts/process.mjs worker guard ui 1
node scripts/process.mjs worker run ui 1 -- node --test tests/contracts.test.mjs
node scripts/process.mjs worker checkpoint ui 1
node scripts/process.mjs status
node scripts/process.mjs timeline
node scripts/process.mjs feedback
node scripts/process.mjs report
node scripts/process.mjs report --check
```

`register WORKER REVISION FILE...` claims up to 32 relative paths (directories also
cover descendants, compared case-insensitively) for at most five minutes.
Registration is not an ACK. Checkpoint
ends the unit; register and ACK again before starting the next. `worker release
WORKER` abandons a stale/expired unit, but only after its owned run ends.
It cannot replace the required checkpoint for a current valid unit.
`control revise NEW-SCOPE`, `control pause`, and `control resume` increment the
revision, invalidating previous units and ACKs. Status supplies the current revision.
No message-send operation implies acknowledgement. Paused, stale, unacknowledged,
expired, or conflicting units fail closed.
Stale/expired owners retain their paths until explicit release; revision changes
and lease expiry do not imply that an unwrapped worker has relinquished ownership.
Any other active unit or recorded PID blocks overlapping reassignment.

## Events and cadence

`event TYPE 'JSON'` accepts **only** these exact metadata objects:

| Type | Fields |
|---|---|
| `heartbeat` | `{}` |
| `phase.start` | `id`, `phase`, `owner`: slugs; `dependency`: prior phase ID or null; `expectedSeconds`: integer 1-86400 |
| `phase.end` | `id`; `outcome`: `passed`, `failed`, `blocked`, or `cut`; `commandExitCode`: 0-255 or null; `correctiveAction`: slug or null; `repeatedFailure`: earlier failed/blocked phase ID or null |
| `milestone` | `{"milestone":"preview","status":"live"}` |
| `accepted` | `{"milestone":"preview"}` plus explicit `--owner` |
| `flaw` | `{"id":"setup","category":"tooling"}` |
| `observation` | `{"id":"review","category":"decision"}` |
| `blocker.open` | `{"id":"setup","category":"prerequisite"}` |
| `blocker.close` | `{"id":"setup"}` |
| `intervention.request` | `{"id":"review","kind":"acceptance"}` |
| `intervention.resolve` | `{"id":"review"}` |

Milestones: `platform`, `preview`, `editable-card`, `branch`, `creative-loop`,
`comprehension`. Statuses `implemented`,
`integrated`, `live`, and explicit owner `humanAccepted` are independent facts:
tests/controller updates cannot infer acceptance. `--owner` records an explicit
owner assertion; it is **not identity authentication**. Categories:
`prerequisite`, `access`, `integration`, `decision`, `tooling`. Intervention kinds:
`owner-decision`, `access`, `acceptance`. IDs/scopes are lowercase slugs, at most
64 characters. Never encode prompts, product names, URLs, credentials, command
arguments/environment, logs, or content in metadata. Unknown fields are rejected.
Flaws and observations use the same category enum, with no free-text fields.
`feedback` exposes their replay-derived counts and metadata records.

Status alerts at 10 minutes if platform is not implemented or preview is not live,
20 minutes if the durable editable card is not integrated, and after 10 minutes
without an explicit heartbeat. Alerts appear when queried, not through a daemon.
No inferred percentage savings. `status` returns compact current state and feedback
counts, never the event history; request `timeline` explicitly for that history.
Reports contain compact state plus derived feedback, not all events.
Reports are disposable `.minerva/report.md`
snapshots: `--check` rejects edits, changed sources, or snapshots at least ten minutes old;
use `status` for current ages. Editing a report never changes source state.

Open blockers produce a five-minute review alert until explicitly closed.
Phase starts/ends use the event clock; `timing` derives elapsed and over-budget
results, and records owners, dependency IDs, outcomes, command exit codes,
corrective-action IDs, and repeated-failure links. Dependencies describe work;
they are not another scheduler. Phase budgets are measurements, not permission
to extend five-minute worker leases. Use null for non-command outcomes, never
invent an exit code. Routine telemetry stays out of `JOURNAL.md`; consequential
decisions still belong there.

## Enforcement and recovery boundary

Local exclusive `control.lock` serializes event writes and authorization + spawn.
The immutable JSONL prefix is retained through fsynced, same-directory atomic
replacement; readers see a complete old or new snapshot. Corruption, torn records,
clock regression and sequence gaps fail explicitly. Current reads/authorization
also deny a wall clock behind the latest event. A contended lock times out
after two seconds and is **never stolen**. After a crashed writer, an operator
must stop other CLI activity, inspect the lock PID, verify that exact PID is dead,
then explicitly remove only `.minerva/control.lock`. A live/reused or uncertain
PID must not be removed. No automatic recovery or recursive deletion is provided.
For a crashed wrapper with a recorded run, explicit `worker recover WORKER`
records its end only after both the exact PID and process group are confirmed
absent; live/reused/uncertain PIDs fail closed. Then checkpoint or release the unit.

Guarded run supports **macOS/Linux only**, starts a tracked POSIX process group
(never unrefs it), polls control every 50 ms, sends that owned group SIGTERM on
revocation/expiry/error, then SIGKILL after 150 ms. A monotonic remaining-lease timer
prevents wall-clock rollback from extending the five-minute unit. It also cleans up ordinary
descendants when the command exits. Revocation returns code 125. Windows fails
closed. Commands/arguments/env and child output are not persisted in the event
log (output stays attached to the terminal).

This is cooperative local process control, **not a sandbox**: unwrapped tools are
not intercepted, escaping descendants that create new sessions are outside the
group, symlink aliases are not filesystem access controls, and SIGKILL/machine
failure of the wrapper cannot guarantee cleanup.
Do not run daemonizing or adversarial commands. Native supervisor/container
enforcement is required for that stronger boundary. A standalone `guard` is only
a point-in-time check; use `worker run` to close the authorization/spawn race.
Restrict local filesystem access: this protocol is not multi-user authorization.
