# Executable adapter contract fixtures

These are reusable behavioral assertions, **not a product implementation**.
`tests/contracts.test.mjs` proves the harness accepts independent scripted
readbacks and rejects deliberately faulty readbacks. Those self-tests prove
neither product conformance, browser persistence, keyboard accessibility, nor
provider integration. All fixture content is freshly synthetic.

## Public API

```js
import { runConformance } from './contracts/index.mjs';
import { createAdapter } from './my-product-adapter.mjs';

const report = await runConformance(createAdapter, {
  cases: ['semantic-placement', 'focus-receipt'],
});
console.log(JSON.stringify(report, null, 2));
if (!report.ok) process.exitCode = 1;
```

The adapter module above is an explicit integration point, **not supplied by
the template**. Do not replace it with the harness oracle to claim conformance.
Omit `cases` to run all seven cases. Unknown, empty, non-array, and duplicate
case selections reject. `ok` means every **selected** case passed, not that
omitted cases or the whole specification passed.

Exports from `contracts/index.mjs`:

- `runConformance(adapterFactory, { cases? } = {})`: async; returns
  `{ ok, results: [{ id, status: 'PASS' | 'FAIL' | 'NOT RUN', reason? }] }`.
- `caseIds`: frozen ordered list of seven scenario IDs.
- `fixtureFor(caseId)`: fresh mutable synthetic seed for each invocation.
- `scenarios[caseId](adapter)`: async behavioral assertion functions. Direct
  callers own setup, capability checking, exception reporting, and cleanup.
- `UnsupportedCapabilityError`: throw when an adapter cannot exercise the
  required surface. The runner reports **NOT RUN**, with a reason and
  `ok: false`; assertions, ordinary errors, and cleanup failures are **FAIL**.

No adapter factory, undeclared capability, or missing adapter method can pass.
The runner does not use test skips. Integrators must fail CI when `ok` is false.
Each case gets an isolated factory invocation and cleanup in `finally`.
The integration's existing test runner should supply a bounded test timeout;
this library does not attempt to cancel a hung browser or adapter.

## Compact adapter interface

`await createAdapter({ caseId, fixture })` returns:

```js
{
  capabilities: ['focus-receipt'], // actual supported case IDs, an array
  async dispatch(command) { /* invoke the real owning surface */ },
  async inspect() { /* read normalized observable state */ },
  async dispose() { /* release this case's isolated resources */ },
}
```

The factory loads the seed into a fresh isolated test workspace before
recording counters. Seeds contain `schemaVersion: 1`, `revision: 0`, card
projections `{ id, text, x, y }`, `focus`, `selectedTargets`,
`limits.contextCards`, and `keyboardMoveStep`. Seeded cards have logical
version 1; the first committed edit produces version 2. Seed setup creates no
History actions, acknowledgements, or provider starts in measured counters.
IDs are fixture aliases: adapters map them to native IDs/versions and normalize
readbacks back to aliases. Do not coerce malformed reference values into IDs.

Provider execution is intercepted at the **actual execution port**, with a
controlled pending response. No external calls, credentials, real user content,
or paid work are needed. `settle` releases a synthetic terminal response through
the product's normal validation/commit path; it must not directly write a
projected success. `providerStarts` counts actual execution-port calls across
Undo, Redo, and reload, not just active operations.

### Commands

All commands have a `type`:

| Type | Inputs and required adapter behavior |
|---|---|
| `createCard` | `{ id, text, x, y }`; create with initial position in one user action |
| `editCard` | `{ id, text }`; one committed edit |
| `setFocus` | `{ ids }`; explicit replacement of persistent Focus |
| `branch` | `{ id, target }` or `{ id, targets }`; explicit bounded invocation using current Focus plus targets |
| `settle` | `{ id, outcome: 'failed' \| 'landed', card? }`; deliver the controlled operation response, including initial result position |
| `retry` | `{ id, attempt }`; explicit retry of the failed operation |
| `undo`, `redo` | One normal semantic history action each |
| `rawCommand` | `{ command }`; pass unmodified runtime values through the real command validator, bypassing only compile-time typing |
| `corruptStorage` | `{ actualRevisionKey, embeddedRevisionId, cachedHead }`; test-only storage fault injection described below |
| `reload` | Tear down and hydrate from actual persisted state without restarting work |
| `focusCardControl` | `{ id }`; focus that card's keyboard move control without adding a semantic History action |
| `key` | `{ key: 'ArrowRight' }`; dispatch through the keyboard input path, not direct movement commands |

`dispatch` resolves after the command's effects and observable publications
settle. Successful domain mutations return `{ acknowledged: true }` only after
the real durability/visibility boundary. Rejections return
`{ acknowledged: false, code }`, normalized to `CONTEXT_OVERFLOW` or
`INVALID_REFERENCE` for these cases. Instrumentation/control commands use
`acknowledged: true` solely to signal their completion, **not a workspace
mutation acknowledgement**. `reload` has no asserted return value.

### Readbacks

`inspect()` returns relevant fields below; extra unrelated fields are allowed.
Collections use deterministic fixture order. It must read the owning state or
surface, never derive expected output from the case ID or command trace.

| Field | Observable source |
|---|---|
| `cards` | Active committed projection, normalized `{ id, text, x, y }` |
| `historyDepth` | Number of currently applied semantic user actions, excluding seeded state |
| `focus` | Persistent Focus membership, distinct from browser keyboard focus |
| `summaryCount` | Prospective visible Focus/target count (not copied from the receipt) |
| `receiptCards` | Exact immutable card-version aliases in the invocation receipt |
| `sentCards` | Card-version aliases observed at the execution port, independently of receipt |
| `providerStarts` | Cumulative actual port invocations, including undone work |
| `blockedCause` | Visible reducible overflow cause normalized as `{ actual, limit }` |
| `early` | Earlier operation's `{ status, authority }`; authority is a stable opaque string |
| `revision`, `mode`, `unreadableBoundary` | Hydrated authoritative revision and explicit recovery diagnostics |
| `acknowledgements` | Cumulative workspace success notifications, not just current UI messages |
| `activeControl` | Actual focus owner normalized to `card:a:move`, not intended focus state |
| `durableCards` | Independent persisted card/layout readback after each key event |

For recovery, create and edit a card into three acknowledged revisions.
`corruptStorage` changes the record at **actual storage key 3** to claim
embedded revision identity **2**, while leaving the actual key-2 record and its
required records intact; it also makes the cached head unreadable. This is a
deliberate malformed journal record, not an ordinary domain command. Hydration
must reject that later mismatch, recover revision 2 rather than shadowing it,
expose unreadable boundary 3, and enter recovery/read-only mode. Adapters map
these fixture revision numbers to their native storage keys. An adapter unable
to corrupt and reopen the real storage must report this capability NOT RUN.

## Authority and scenario coverage

These probes specialize existing requirements; fixture IDs, positions, input
limits, keyboard step size, and normalized readback names are **test
conventions**, not newly approved product schemas or keyboard bindings.

| Scenario | Expected behavior | SPEC IDs | ARCHITECTURE authority |
|---|---|---|---|
| `semantic-placement` | Create plus initial placement is one Undo; Branch result plus placement belongs to invocation, not another action; Redo restores exact sampled cards/positions without work | `HIS-001`, `HIS-004`, `HIS-005`, `STATE-004` | `A-002`, §7 Moment/Revision records, §8 command boundary, `A-004` result commit |
| `focus-receipt` | Target outside Focus contributes once to the displayed count, exact receipt and actual submitted versions; persistent Focus remains unchanged | `CTX-001`, `CTX-003`, `CTX-004`, `CTX-007`, `INV-003` | `A-001`, §10 Context compiler |
| `overflow-editing` | Overflow blocks before work with a reducible cause; editing and Focus reduction still commit; reduced exact context can invoke | `CTX-010`, `FAIL-001`, `STATE-003` | `A-001`, §10 Context compiler, §19 failure isolation |
| `running-authority` | Undo unrelated edit and Retry leaves earlier operation running with unchanged authority; both Redos start no work; earlier valid result can still land | `HIS-001`, `HIS-004`, `HIS-005`, `FAIL-004` | `A-002`, §8 unrelated edits versus authority, §6 History, `A-004` |
| `storage-recovery` | Corrupt later embedded identity cannot shadow intact earlier actual storage key; newest valid prefix is recovered read-only | `PER-004`, `PER-005`, `INV-005` | `A-002`, §9 atomic commit and hydration |
| `runtime-references` | Number, null, object, array card references are rejected at runtime before any acknowledgement, revision, content, or execution change | `STATE-001`, `STATE-003`, `STATE-004`, `INV-005` | `A-001`, §8 typed command validation and acknowledgement |
| `keyboard-durability` | Three consecutive keyboard moves retain real control focus and persistent Focus, commit each layout, and survive reload | `ACC-001`, `ACC-002`, `ACC-005`, `CAN-001`, `PER-004` | `A-007`, §8 command boundary, §9 persistence |

## Verification and honest limits

Run the template harness self-tests with the pinned runtime:

```sh
npx --offline --yes --package=node@24.20.0 node --test tests/contracts.test.mjs
```

Offline invocation requires the pinned runtime already cached. The normal
repository toolchain setup supplies it; these fixtures introduce no dependency.

The tests contain one script table of exact expected calls/readbacks, **not
a second domain engine**. Mutation tests falsify each scenario: split create
or result History; Redo execution; omitted targets or mutated Focus; overflow
execution or blocked edits; revoked earlier authority or lost late results;
older/empty/writable recovery; false acknowledgement; lost keyboard focus,
unpersisted movement, or reload loss. Runner tests cover unsupported surfaces,
bad selections, setup errors, cleanup errors, and fresh fixture isolation.

A native adapter can support only native scenarios. It must not claim browser
focus or IndexedDB evidence from an in-memory substitute. A browser-backed
adapter can reuse the exported scenarios, normalize real DOM focus and storage
readbacks, and report the actual browser/version and adapter revision alongside
results. Actual product/browser adapters are intentionally absent.

This bounded pack does not establish full receipt provenance, every reference
field, multi-tab exclusion, migration safety, provider schema coverage,
Searchlight's complete state machine, assistive-technology usability, pixel
rendering, or all History identities. Independent runtime/browser evidence is
still required for those claims; no passing harness substitutes for it.
