# Minerva hackathon launch plan

Status: **pre-clock launch packet**. This document makes the repository ready
to reach a working checkpoint in two hours and, when useful, refine it for up
to eight. It does not authorize or claim completion of any ROADMAP gate, and it
does not replace the approved authority chain.

## Clock boundary

Before the clock starts, the repository may contain only approved product
documents, locked tooling, content-free infrastructure configuration, evidence,
and planning. Product domain code, workspace persistence, canvas behavior, AI
routes, Voice, and deployable product behavior begin only after the clock starts.

The pre-clock baseline is intentionally uneventful:

| Ready before the clock | Deliberately starts at T+0 |
|---|---|
| Greenfield repository and clean `main` | Product-owned domain records and commands |
| Isolated Vercel project with no deployment | Browser-local workspace repository |
| Exact Node/npm lock and reproducible install | Editable spatial canvas and Focus behavior |
| Minimal Next.js shell and one bounded `npm run check` | Branch/Searchlight operation adapters |
| Reserved environment and storage names; provider routes disabled | Provider selection, route implementation, or credentials |
| Approved intent, decisions, specification, architecture, and roadmap | Any demo deployment |

Do not add speculative directories, empty abstractions, SDKs, sample product
state, or hidden feature flags merely to make the repository look busier.

## Two-hour outcome

At T+120, Minerva should make one narrow claim:

> On a real ambiguous problem, a user can arrange durable cards, explicitly
> choose what the AI sees, receive a visibly derived alternative as an ordinary
> card, and use the spatial result to name a consequential direction they did
> not begin with.

The canvas remains the primary surface. A transcript, prompt form, settings
panel, or generic chat must not become the product.

This is a hackathon experience slice, not the approved first prototype. It
borrows the smallest useful vertical slice from R3 and, only if the floor is
stable, the targeted divergence behavior from R6. It does not pass R1, R2, R3,
or R6 and must not be used to close their evidence gates.

## Scope ladder

### Floor — protect this first

- Editable cards on a pan-and-drag spatial surface.
- The canonical example and an equally visible blank start.
- Browser-local durability using an adapter behind the product-owned workspace
  boundary.
- Explicit Focus with a visible **AI sees N cards** count. Geometry alone never
  changes AI context.
- One Branch action whose result lands as an ordinary editable card with a
  visible `derived from` relationship and a compact context receipt.
- Reload restores the last acknowledged cards, positions, Focus, and lineage.

### Target — the best two-hour demo

- A targeted Searchlight sweep selects three context-appropriate, deliberately
  different approaches before generation.
- The three arms stay neutral and land independently as ordinary cards; failed
  work remains visible.
- The user can arrange the alternatives, write an ordinary synthesis card, and
  explain one consequential connection, tension, or direction.

### Stretch — only after the target is frozen

- Neutral Compare for two selected cards.
- One contribution-level Recombine action.
- A protected Vercel Preview of the exact frozen revision.

Voice, touch, semantic History/Paths, multi-generation agentic expeditions,
cloud workspaces, ingestion beyond paste, authentication, analytics, and visual
polish beyond legibility are outside this two-hour build.

## Pre-clock toolchain check

The host default may not match the locked toolchain. Before the event, cache and
exercise the exact versions without changing repository dependencies:

```sh
gitleaks version
npx --yes --package=node@24.20.0 --package=npm@12.0.2 node --version
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm --version
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run security:audit
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
```

The first three commands must report `8.30.1`, `v24.20.0`, and `12.0.2`. The
pre-clock operator then leaves `main` clean and synchronized.

## Clock-start sequence

When the event clock starts:

```sh
git switch -c codex/hackathon-slice
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
```

Do not spend clock time reinstalling or re-running the entire readiness suite
unless the machine or lockfile changed after the pre-clock check.

Append one `JOURNAL.md` entry using the standard entry contract with: the ISO
8601 start time; the clean base revision; the build branch; the operator and,
when useful, the tool/model family; and whether the T+120 floor, target, cut
lines, and demo claim are accepted or modified. After the frozen T+120 artifact
is demonstrated, append a second entry recording the stop/continue decision,
the zero-or-one primary improvement, and the zero-or-one distinct reliability
improvement, each with its rationale.

## 120-minute execution map

| Time | Outcome | Cut line |
|---|---|---|
| T+0–10 | Create the build branch, start the locked shell, open the canonical example, and keep the current placeholder available as a known baseline. | If the shell does not start, repair only the first material failure. |
| T+10–30 | Establish the smallest product-owned records and command seam for Card, Focus, relationship, and operation state. | No full History engine, migrations framework, or generalized command bus. |
| T+30–55 | Implement acknowledged browser-local card creation/edit/move, Focus, example/blank start, and reload. | Use one bounded native IndexedDB adapter; do not add a second store or renderer-owned truth. |
| T+55–75 | Make the spatial surface direct and legible: drag cards, pan, select, add/remove/clear Focus, and show lineage/context receipts where they act. | Prefer plain DOM/CSS for this disposable slice; do not turn that into an R2 renderer decision. |
| T+75–95 | Land one Branch through a closed generation port. Keep the source unchanged and the result outside Focus. | If a safe real provider path is not working by T+90, use a visibly labeled deterministic fixture; never expose a secret or imply live AI. |
| T+95–105 | Add the three-approach Searchlight only if the floor is durable and the Branch path is truthful. | At the first instability, cut Searchlight and strengthen the Branch demo. |
| T+105–115 | Freeze features, run the demo contract, repair only material failures, and preserve truthful degraded states. | No new capability after T+105. |
| T+115–120 | Rehearse the four-minute narrative, commit the exact demo revision, and record what is real, simulated, partial, or cut. | Deploy only a frozen, safe build; otherwise demo locally. |

## Optional refinement window: T+120–480

T+120 is a mandatory working-prototype checkpoint, not a soft milestone.
Refinement is not authorized by the T+0 declaration. Commit and demo the exact
T+120 revision, then record a separate product-owner go/no-go in `JOURNAL.md`.
Stopping is a valid outcome. If continuing, the owner may choose zero or one
primary improvement—either repair the floor or deepen creative leverage—and,
only when distinct and safe, zero or one reliability improvement. An agent may
propose the options; it may not choose them or quietly turn every option into
scope.

If the T+120 floor passed, default priority for a leverage improvement is:

1. replace a simulated Branch with one safe, bounded, visibly attributed live
   provider path;
2. if Branch is already live and stable, deepen the intended thinking loop with
   the neutral three-arm Searchlight;
3. if Searchlight is already stable, add Compare or contribution-level
   Recombine based on the product owner's real-problem rehearsal—not both by
   default.

The reliability improvement addresses the first observed material weakness in
durability, failure truth, keyboard/structured access, responsive interaction,
or secret/spend containment. Visual polish is eligible only when it makes
context, lineage, actions, or state easier to understand.

| Time | Decision and outcome | Cut line |
|---|---|---|
| T+120–150 | Run the exact demo on a real problem, inspect failure/reload behavior, and record the stop/continue choice, selected primary improvement, and any distinct reliability improvement. | If the floor is not reliable, choose repair as the primary improvement; do not expand scope. |
| T+150–300 | Implement the selected primary improvement: repair the floor or deepen one source of leverage through the existing product-owned seams. | No new platform, generalized framework, Voice, auth, ingestion, or History system. |
| T+300–390 | If separately chosen and still safe, resolve one distinct reliability/accessibility weakness and exercise its unhappy path; otherwise rehearse and simplify the primary loop. | If the primary work destabilizes a passing T+120 loop, revert or isolate it rather than repairing indefinitely. |
| T+390–435 | Repeat the real-problem rehearsal; make only evidence-driven interaction or explanation fixes. | No checklist-driven features and no redesign detached from observed friction. |
| T+435–465 | Freeze, run the demo and native checks, and deploy a protected preview only if the exact build is safe. | A local truthful artifact outranks a rushed or ambiguous deployment. |
| T+465–480 | Record accepted, modified, and rejected model proposals; exact evidence; cuts; unsupported claims; and the final human judgment. | Stop feature work. Preserve both T+120 and T+480 revisions. |

The optional window does not promise that every item above will ship. Its proof
of maturity is selective depth, explicit rejection, preserved checkpoints, and
a more truthful experience—not eight hours of generated surface area.

## Implementation constraints

- The workspace kernel, not React, the renderer, IndexedDB callbacks, or the
  provider, decides semantic truth.
- Geometry affects presentation only. Focus and operation targets are explicit.
- A provider result is untrusted proposal data until it lands through the same
  durable workspace path as a local mutation.
- Provider requests use one closed operation contract. No browser secret,
  arbitrary prompt endpoint, hidden retry, tool call, or fail-open route is
  acceptable for the demo.
- If a deterministic adapter substitutes for a provider, label it **Simulated**
  in the interface and in the demo narration.
- Generated material is immediately editable and durable; it does not require a
  second permission dialog.
- Do not edit approved authority documents to rationalize a shortcut. Record
  hackathon compromises in the journal or final demo record.

## Stop rules

- At T+45 without durable editable cards, remove renderer ambition and use the
  smallest direct DOM surface.
- At T+75 without explicit Focus and reload, stop AI work and finish the local
  loop.
- At T+90 without a safe real provider response, switch to the labeled fixture
  adapter and preserve the generation port.
- At T+105, freeze capability. Remaining time belongs to the demo contract, not
  feature expansion.
- A false durability claim, hidden context, exposed secret, or unlabeled
  simulation stops the affected path immediately.

## Checkpoint and final handoff

At T+120, record the exact commit and complete the T+120 checkpoint record in
the demo contract below. If refinement continues, preserve that record and add
the T+480 delta rather than rewriting history. Separate observed behavior from
planned behavior and list every cut. The hackathon artifact then enters the
approved roadmap as evidence or a disposable experiment; it does not silently
become the production architecture.

## Demo contract

This is the acceptance script for the two-hour experience slice. It is written
before product implementation so the build optimizes for a checkable user
outcome rather than implementation volume.

### Four-minute narrative

1. **Begin with ambiguity.** Open the editable example or blank start and state
   the real problem being explored.
2. **Externalize the problem.** Create or edit cards, move them into a useful
   arrangement, and establish Focus using visible Add, Remove, and Clear actions.
3. **Inspect the boundary.** Show **AI sees N cards** and the compact inclusion
   receipt. Move an unrelated card and demonstrate that proximity does not
   silently change context.
4. **Create difference.** Invoke Branch. If the target scope landed, invoke the
   targeted three-approach Searchlight and show the approaches before results.
5. **Keep thinking.** Continue arranging or editing while work runs. Show each
   result arriving as an ordinary card outside Focus with visible lineage and an
   honest live, simulated, partial, or failed state.
6. **Make judgment.** Arrange the alternatives, write an ordinary synthesis
   card, and name one consequential direction, connection, or tension that was
   not present at the beginning. Minerva must not declare a winner.
7. **Prove durability.** Reload and show that acknowledged cards, placement,
   Focus, the useful result, and lineage remain.

### Pass conditions

- The canvas, not a transcript, is visibly the primary work surface.
- The user can start blank or from the editable example without signing in.
- Cards are editable before and after generation.
- Focus is explicit and inspectable; geometry never changes it invisibly.
- Branch leaves its source unchanged and lands a separate derived card.
- The useful result remains after reload with enough lineage to explain where it
  came from.
- The user can state the consequential discovery and how the spatial arrangement
  or divergent operation helped expose it.
- Every simulated, partial, degraded, or failed capability is named truthfully.

### Honest fallback demo

If real provider work is unavailable, use the same interaction with the
deterministic adapter and keep **Simulated** visible throughout. Demonstrate the
interaction thesis and persistence, not a fake inference claim. If durability
is unavailable, do not perform the reload step or call the state durable.

### Claims this demo cannot make

- Completion of the approved first prototype or any ROADMAP gate.
- Production-ready persistence, security, accessibility, performance, provider
  admission, cancellation, or spend control.
- Validated Searchlight generation isolation if its three arms are simulated.
- Voice, semantic Undo/Redo with preserved Paths, anonymous cloud sharing,
  multi-user collaboration, or matched product-evaluation results.

### T+120 checkpoint record

Fill this in against the exact demo commit:

| Field | Observation |
|---|---|
| Commit | Not yet built |
| Demo surface | Not yet built |
| Provider mode | Not yet built |
| Floor | Not run |
| Target | Not run |
| Stretch | Not run |
| Consequential discovery | Not evaluated |
| Material failures or cuts | Not evaluated |
| Deployment, if any | None |

### Optional T+480 delta record

Do not overwrite the T+120 record. Re-run the same four-minute narrative, then
record only the consequential delta:

| Field | Observation |
|---|---|
| T+120 commit | Not yet built |
| T+480 commit | Not yet built |
| Human stop/continue decision and primary improvement, if any | Not evaluated |
| Distinct reliability improvement, if any | Not evaluated |
| Material model proposals modified or rejected | Not evaluated |
| User friction removed or introduced | Not evaluated |
| Consequential discovery changed | Not evaluated |
| Remaining unsupported claims | Not evaluated |
| Deployment, if any | None |
