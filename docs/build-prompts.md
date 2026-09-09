# Minerva: Astra build packages and Fable reviews

Build the single-user, browser-only prototype defined by
[SPEC](./product/SPEC.md), with no sign-in. Local development binds to loopback;
the release target is a public Vercel deployment for a bounded demonstration
window used by a small judge panel. Keep the internal backend, Postgres, Vercel
AI Gateway and durable workflows; external APIs are excluded.

Read [AGENTS](../AGENTS.md) for shared working/review rules and
[README](../README.md#documentation) for document ownership. Each copyable package
contains its specific task and acceptance conditions; it depends on the current
repository, not a separate conversation. Read only the relevant contracts.

Use one connected user outcome per assignment. These are 32 work packages, not
32 mandatory sessions. Preserve prerequisites and keep partial work labeled.
The six milestones demonstrate progress toward all fifteen required capabilities.
Astra builds; the operator starts Fable on a separate exact-candidate checkout.
Both start at medium effort. Follow [setup](./setup.md#standard-checkpoint-output)
for bounded launch instructions and a concise evidence-based handoff.

| Milestone | Packages | Demonstrated outcome |
|---|---|---|
| M1: Experience proof | 1-3 | A populated interactive atlas with understandable relationships and contextual actions, using prepared local data. |
| M2: Working spine | 4-12 | Persistence, visible graph, real creative generation, assessment/acceptance and concurrent spoken collaboration. |
| M3: Creative workspace | 13-20 | Inheritance, reusable development, contextual moves, comparison/Weave and three views. |
| M4: Exploration intelligence | 21-25 | Wander, challengeable recurrence/readings and goal-directed Agent Drive on shared operations. |
| M5: Remaining product capabilities | 26-28 | Browser instruments, runnable output artifacts, experiments and reusable results. |
| M6: Integrated release | 29-32 | Independently reviewed local and hosted operation, durable state, accepted experience and honest operating limits. |

## Shared demonstration and review

Use the shipped mall demo in [SPEC](./product/SPEC.md#shipped-demo-and-human-judgment),
plus counterexamples and dense scenes. Extend its editable data and demonstration
of each tool as the owning capability arrives; verify all tools at release.
Show tools expanding the seed problem alone, developing a selected starting
proposal and working across selected proposals, following SPEC's demo inputs.
Build semantic examples around those tool operations and resulting branches.
Demonstrate explore -> observe -> challenge -> intervene -> inspect:
discuss possible recurrence while manipulating ideas, inspect supporting evidence,
request a change, recombine a distant contribution and inspect both parents and
the actual result before keeping it. Include an inconclusive or failed intervention.
Prepared data is not live AI; a separate chat beside decorative cards is insufficient.

Humans judge idea feasibility and creative usefulness. The owner drives examples
and iteration within milestone chunks. Build feasibility is settled; do not add
feasibility studies, estimation gates or a research platform. Define lifecycle
policies when their owning milestone arrives, following
[ARCHITECTURE](./product/ARCHITECTURE.md#open-implementation-choices).

Use the lightweight reference setup in SPEC for the demo and one denser scene.
Record actual input, viewport and graph size; measure reproduced friction when
needed rather than establishing a performance framework or arbitrary time gate.

Review the exact candidate against its milestone journey before reading the
builder's conclusions. Report each material finding with capability, expected
and observed behavior, reproduction/evidence, consequence, confidence and the
smallest correction. Distinguish missing behavior, hypotheses and preferences.
Return READY FOR NEXT MILESTONE, CHANGES REQUIRED or BLOCKED; M2's interim and
M6's release verdicts are specified below. Name access/evidence gaps and pending
user acceptance. Model agreement does not prove quality or grant acceptance.

M1's experience acceptance precedes dependent work. M2 reviews after packages
10 and 12. M6 reviews the candidate before the hosted-release confirmation.
Missing required review, behavior or acceptance remains a blocker; only
authorized independent work may continue. Local operation alone does not open
the demonstration window, and creative-efficacy claims remain unresolved
without human evidence.

### Small task comparisons within milestone chunks

Use brief owner-led comparisons to guide iteration, with the mall brief and the
same source material where possible. A text/list presentation of saved artifacts
is enough as a reference; do not build another interface or evaluation service.

| When | Small task | Human observation to record |
|---|---|---|
| M1 / 3 | Inspect the same prepared parent/child material as text and in the atlas; identify each contribution and select a next direction | Source comprehension, orientation and interaction friction |
| M2 / 10 | Inspect saved results from the first live operation as text and in the workspace; explain their origins and choose what to develop | Useful differences, evidence clarity and effort to choose a next step |
| M2 / 12 | Discuss a branch while moving another and receiving results | Whether spoken collaboration helps or interrupts the person's work |

Record the task, candidate, prepared/live inputs, observed friction and the
owner's judgment in CAPABILITIES. Reuse saved results; any fresh comparison
calls remain within explicit spend authorization. These comparisons are part
of existing demonstrations, not extra review gates, numeric efficacy scores or
claims of general superiority. Repeat when the owner steers a change or new
evidence warrants it. M4 retains its compact exploration comparison.

## Fable consultation: an independent view at a decision or impasse

```text
You are Fable 5.1 in Claude. Read AGENTS.md and the relevant current contracts.
Use the supplied checkout, candidate and specific question. This is read-only
advice, not permission to edit, deploy, spend or restart the project.
Inspect the relevant code or behavior before accepting the builder's explanation.
Challenge the concrete assumption and distinguish requirements from preferences.
Return the next bounded action, evidence, tradeoffs, unknowns and an observation
that would change your recommendation. Preserve the product scope and modular
monolith; suggest a small falsifying experiment only when it resolves uncertainty.
Report missing inputs explicitly. Astra records the disposition of your advice.
```

## Milestone 1: Experience proof

**Entry:** A new project directory and the full product goal; no database or live provider is needed.

**Working demonstration:** Pan and zoom; trace both parents of a recombination; move a card with its edges attached; inspect inherited material; select a pair; open a local contextual chooser on desktop and touch.

**Exit and review:** The local fixture demonstrates the proposed experience, Fable reviews it, and the user accepts the representative visual/interaction direction. Persistence and AI remain explicitly unimplemented, not simulated as real.

**Still open:** All production persistence, generation, voice and wider product capabilities remain open. Fixture interactions do not complete their capability rows.

### Prompt 1: establish the application identity and starting outcome

```text
You are GPT-6 Astra in Codex, implementing a work package in M1: Experience proof.
Required prerequisites: The target project directory and authorization to create the application repository.
Read AGENTS.md, README.md and the relevant product contracts in this repository.

Use the owner's content-free minerva-template to create the public minerva
repository only when authorized. Inspect the target first; never overwrite an
existing repository. Follow docs/setup.md to set identity and repository settings,
and delete tests/seed-only.test.mjs, which asserts that the seed is still empty;
keep tests/seed-docs.test.mjs. Keep the MIT license, pinned shell and original
identity assets. Author custom application code for this build; licensed standard
frameworks and libraries are allowed.

SPEC.md owns all fifteen required capabilities. Read it rather than duplicating
its inventory. Confirm the single-user, browser-only, no-sign-in scope, the
loopback development default, the Vercel demonstration target, internal backend,
Postgres, AI Gateway and durable workflows. Preserve the working code and
current requirements. Missing configuration stays explicit.

Record the actual seed revision and use the mall seed prompt specified in SPEC
for the explore/observe/challenge/intervene/inspect journey. Author synthetic
demo records and label any additional site assumptions explicitly.
The experience includes an unsuccessful intervention, exact source contributions
and uncertainty; a narrow demonstration does not remove required capabilities.

Initialize docs/product/CAPABILITIES.md without erasing existing evidence.
Create a short docs/HANDOFF.md with current scope, relevant files, actual commands
and outcomes, blockers and the next connected task. Do not create extra indexes,
decision registers or historical notes.

Package complete when: repository identity and settings are configured as
authorized; the seed revision and representative brief are recorded; SPEC remains
the single capability contract; capability evidence is accurate; and the handoff
names the next unfinished foundation outcome.
```

### Prompt 2: create the runnable architecture without shrinking the product

```text
You are GPT-6 Astra in Codex, implementing a work package in M1: Experience proof.
Required prerequisites: The full product contract; no persistence or model service is required yet.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Create Minerva's runnable foundation in the new project directory. It is a full
spatial creative studio with relationship-rich cards, three views, contextual
creative operations, Wander, Agent Drive, voice and outputs. It is a browser-only
prototype with no sign-in, local access by default and no external API buildout.
Read this repository's product contract; if absent, report that prerequisite.
Author custom implementation within this new project. The template already
provides a pinned Next.js shell, CI and exact Node/npm pins; extend it rather
than re-scaffolding, and add dependencies only when a slice needs them. Use
maintained, appropriately licensed dependencies.

Organize the shell as a Next.js/React/TypeScript modular monolith. Separate presentation,
client interaction, application use cases, domain contracts, persistence,
model adapters and durable orchestration. Domain types must not import React,
HTTP objects, database clients or provider SDK types. Keep prompts owned by
their features and transport adapters thin.

Models interpret, suggest, generate and explain. Application code owns identity,
revision consistency, graph-reference integrity, permissions, cost admission and
state transitions. Validate model inputs to those operations. Deterministic
code must still be correct, and cannot certify meaningful inheritance, semantic
equivalence or novelty merely because identifiers and calculations are valid.

Provide an actual startup path, pinned compatible dependencies, existing-runner
unit/browser checks and CI. Establish a server-only configuration boundary and
explicit unavailable states. Bind dev/start to loopback with no sign-in.
Establish isolated development/review configuration,
database migrations, connection pooling, durable dispatch/reconciliation and
correlated run/request diagnostics as infrastructure responsibilities. At this
experience-proof milestone, define their ownership and interfaces; build the
working persistence and execution paths in the working-spine milestone rather
than delaying the interactive proof for unused infrastructure. Document
operational ownership and backup/restore paths. Deployment is a later package,
not a foundation prerequisite; do not add authentication or access infrastructure.
Do not fill the UI with buttons
for unimplemented capabilities or label a scaffold as the product. Do not
manufacture empty modules.

Keep ownership and extension points in ARCHITECTURE.md.
Use the selected React Flow renderer (@xyflow/react) with custom cards
and application-owned layouts for the first interactive fixture. Keep canonical
graph records and domain types independent of the renderer store and types.
Preserve the living-atlas composition, not the library's demo appearance.
Pin a compatible licensed version when adding it; exercise IB01-IB06 rather
than assuming the library proves interaction quality. Reopen the choice only
for a demonstrated requirement failure or compatibility constraint.

Run the foundation, exercise its actual routes, and update the capability matrix
and handoff. Do not provision, spend, publish or claim product completion.
Package complete when: the shell runs locally with pinned dependencies and
lint, typecheck, test and build pass; module ownership, extension points and
infrastructure interfaces are recorded in ARCHITECTURE.md;
AGENTS.md reflects the milestone contract; the startup path is documented; and
the capability matrix shows every row at not started or partial with honest
evidence and no unimplemented buttons in the UI.
```

### Prompt 3: establish the original living-atlas design system

```text
You are GPT-6 Astra in Codex, implementing a work package in M1: Experience proof.
Required prerequisites: The product contract and runnable UI foundation; use local synthetic data only.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Create Minerva's original visual system and composed application shell in this
new repository. It is a spatial creative instrument, not an admin dashboard.
Read DESIGN.md; use original custom code/art and appropriately licensed fonts/libraries.

Specify and implement paper #e9dfc7, card #f1e9d6, ink #273a35, deep teal #213f3e,
teal #28686a, amber #b18a58, coral #a15442 and violet #755584 as shared tokens.
Use an expressive editorial serif with compact monospaced instrument labels;
Newsreader and IBM Plex Mono are suitable licensed choices, not mandatory
copied files. Author restrained contour/terrain artwork and an original owl mark.
Terrain is decorative, never a map of inferred idea quality.

Compose one compact top header with identity, the current fixture perspective
and prepared question context. M1 offers only functioning local interactions:
pan/zoom, source inspection, comparison and prepared contextual moves.
Production view switching, live exploration and conversation arrive in their
own later milestones; do not add dead tabs or fake voice/generation controls
to imply they already exist. The atlas occupies the field beneath the header.
Put navigation instruments at the field's edges, zoom near
a lower corner, and details in a dismissible overlay. No stack of full-width
toolbars, permanent diagnostics, or a sidebar that resizes the working canvas.
At a 1440x900 desktop viewport with panels closed, target at least 80% height
for the canvas. This is a composition gate, not a performance measurement.
These are design targets, not a copied pixel specification. An alternative
composition must still keep the spatial field dominant and the workflows direct.

Cards are approximately 260-320px wide at normal zoom, with a strong concise
serif title, restrained operation/source accent, a visible relationship cue and
one principal contextual action. Rich artifact text and evidence open on demand.
Do not reproduce every action on every card. Preserve readable keyboard/touch
controls; color and motion cannot be the only information channels.

Build the original synthetic mall fixture with branches, a multi-parent child,
an unkept draft and a semantic link. Label fixture-only behavior honestly.
Make the fixture interactive: pan/zoom, move a card with attached edges, inspect
its parents, select a pair and open a contextual chooser. These are local
demonstration interactions, not fake persisted or AI-generated outcomes. Use an
explicit fixture data boundary that the working spine can replace with the
new server implementation; retain the newly authored presentation components.
No database or live provider is a prerequisite for this experience proof.
Exercise SPEC's interaction boundary scenarios IB01-IB06 locally: pan without
accidental text selection; pinch starting over cards/actions; switch from a
gesture to Enter/Space and supported assistive activation; Fit narrow and short
desktop views with usable focus targets; inspect incoming and outgoing links;
and return from comparison without losing source orientation. Include explicit
unkept and unknown-evidence states rather than representing every fixture card
as accepted or assessed. Label simulated device/assistive input honestly.
Render desktop and narrow layouts and review the images for hierarchy and
clutter before proceeding. Demonstrate what would become materially harder in
linear chat: trace multiple parents and compare distant contributions while
retaining spatial context. Do not substitute texture or animation for this.
Write DESIGN.md as the enforceable visual contract,
not generic adjectives. Update C15 evidence; this shell is not a finished app.
Run the M1 small task comparison with the owner and record the observation;
use its findings to guide this experience proof within the existing review.
Milestone closeout: demonstrate this complete M1 journey:
Pan and zoom; trace both parents of a recombination; move a card with its edges attached; inspect inherited material; select a pair; open a local contextual chooser on desktop and touch.
Prepare the exact-candidate packet for this milestone's Fable review.
Still open at this milestone: All production persistence, generation, voice and wider product capabilities remain open. Fixture interactions do not complete their capability rows.
Package complete when: the interactive fixture renders the populated atlas at
desktop and narrow widths; the full M1 journey works locally on mouse, touch
and keyboard; DESIGN.md is written as an enforceable contract; C15 evidence is
recorded for IB01-IB06 with the fixture boundary and input method labeled;
unkept state and unknown evidence are distinguishable; and the Fable M1 review packet
(revision, contracts, startup and fixture instructions) is prepared.
```

### Fable review M1: Experience proof

```text
You are Fable 5.1 in Claude, independently reviewing M1: Experience proof
Read AGENTS.md and the Shared demonstration and review section of docs/build-prompts.md.
Use the supplied exact
candidate, isolated checkout/data and startup instructions. Review only; no edits
to application source or paid calls without explicit allowance.

Required demonstration:
Pan and zoom; trace both parents of a recombination; move a card with its edges attached; inspect inherited material; select a pair; open a local contextual chooser on desktop and touch.

Review focus:
Inspect the original populated fixture, not an empty page. Trace both parents, use the contextual chooser and comparison selection, and operate with keyboard/touch. Check hierarchy, atlas character, legibility and control clutter. A static screenshot or attractive background is insufficient. Report experience concerns for user judgment; do not claim the user's acceptance.
Identify a concrete task that is materially easier because of the spatial
interaction. If the same journey is equally clear as a linear chat transcript,
report that the demonstration has not established the modality's value.
Distinguish a weak example from missing behavior; do not automatically remove
capabilities or recommend decorative motion to compensate.

Exercise IB01-IB06 from SPEC instead of checking modalities only in isolation:
pan across text, pinch over card controls, then use keyboard/assistive activation
without touching again; inspect the actual overview targets after Fit; navigate
both incoming and outgoing relationships. Inspect explicit unkept/unknown
fixture states. Report simulated input as simulated, not a physical-device or
screen-reader result. Recheck adjacent transitions after a correction.

Does inspection/comparison help develop a thought while retaining source
orientation, or force the user to reconstruct a diagram after every action?
Treat this as a question for user experience acceptance unless there is a
specific reproduced contract failure. Do not universally ban modals or infer
that prepared suggestions establish live AI quality.
Check the milestone's actual prerequisites: persistent recovery and live voice
belong to M2, not M1. Surface conflicting instructions rather than demand a
future capability or approve a fixture as its implementation.

Still-open scope at this boundary:
All production persistence, generation, voice and wider product capabilities remain open. Fixture interactions do not complete their capability rows.

```

## Milestone 2: Working spine

**Entry:** The complete product contract, runnable foundation and reviewed experience proof. Authorized credentials/spend are required only for the real provider demonstration.

**Working demonstration:** Create a workspace and idea; generate alternatives; trace sources; inspect and keep a result; reload; discuss a card by voice while moving another and receiving durable operation results; interrupt speech.

**Exit and review:** State and lineage persist, a bounded real generation/review path and bidirectional voice work, the canvas stays usable, and Fable verifies this exact spine. Missing live credentials leave the live gate blocked, not replaced by fixture claims.

**Still open:** Rich genome/recipe workflows, full comparison/Weave, alternate views, contextual planning, Wander/Agent Drive, instrument breadth and outputs remain explicitly open.

**Review cadence:** M2 is the heaviest milestone, so it has two review points.
After package 10, run the Fable M2 review below as an **interim review** of the
spine without collaboration: persistence, visible graph, frozen context, durable
execution, one live creative operation and assessment/acceptance. Resolve
material findings before starting packages 11 and 12. After package 12, run
the same review as the **final M2 review** with the full demonstration,
including voice during canvas work. Recheck material corrections when failures
or new evidence warrant it; there is no required number of recheck rounds.

### Prompt 4: implement workspaces, persistence and no-sign-in local access

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: The product contract, runnable foundation and original experience proof.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's workspace lifecycle in this new Next.js/TypeScript modular
monolith. Postgres is authoritative; the browser owns transient interaction.
Read the local product contract.

Deliver create/open/list/rename/duplicate and deliberate deletion with clear
confirmation, plus saved brief and explicit constraints. Duplicate creates
independent identities and preserves meaningful internal references; deletion
must account for active runs and referenced history rather than orphaning it.
Keep old-system import/migration out of scope.
Resolve the M2/4 lifecycle policies listed in ARCHITECTURE before implementing
deletion and retained-data behavior; later voice/run policies remain with their
owning packages.

Use immutable content/brief revisions, independent layout versions, explicit
migrations and named application operations. Use Drizzle (drizzle-orm)
inside feature-owned Postgres adapters; keep ORM types out of domain contracts.
Generate versioned SQL migrations with drizzle-kit, inspect and commit them,
then apply them explicitly to the intended database. No schema push, request-time
or implicit startup schema mutation. Commit each mutation and its command receipt
atomically; replay after a lost acknowledgement must return the same receipt.
Create an export contract for
content, revision history, relationships, proposals, decisions, runs and
provenance; extend it with later product records. An export is not an import.
Never save the whole workspace for a card drag.

Open the local URL and operate without accounts, platform sign-in or an
owner-password screen. Bind the development server to loopback, keep credentials
server-side, validate Host/Origin for every configured serving hostname and
enforce same-origin JSON mutations. Reject cross-origin mutations and permissive
CORS; another website must not be able to use paid operations. Keep internal
endpoints, not an external API product. The same protections carry to the Vercel
demonstration deployment in package 32; do not create access infrastructure.

Exercise lifecycle operations, reload, duplication reference integrity,
stale writes and unavailable configuration against an isolated local database.
Exercise opening the app without sign-in and rejection of unexpected Host/Origin
and cross-origin mutations. Production hosting belongs to package 32, not this
package.
Update C01 evidence and the handoff; no unauthorized external provisioning.
Package complete when: create, open, list, rename, duplicate and delete, brief
and constraint revisions, the export contract and no-sign-in loopback access
are exercised against an isolated local database; the listed edge cases pass;
and C01 evidence and the handoff are updated.
```

### Prompt 5: build the spatial canvas and deliberate view controls

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: Working workspace/revision operations and the original fixture presentation.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's spatial canvas in this new repository, using its original
design system and server-owned workspace operations. All custom code must be
newly authored. Read the complete product contract; do not reduce it.

Support title-first cards, create/edit/inspect, direct selection, a comparison
set, mouse/touch pan, zoom anchored to user intent, dragging, card resizing,
find-by-title/content, explicit focus/fit, saved viewpoints and deliberate
arrange/reset. Provide undo/redo for supported layout changes with clear scope.
Preserve user positions, card sizes and active-view camera across reload.
Undo of content decisions is a separate domain operation, not a camera action.

Keep pointer interaction local and responsive; persist deliberate layout changes
through target-scoped commands. Neither panning, zooming, searching, selecting
nor switching a presentation starts a model call. Incoming records merge by ID
without moving existing cards or fitting the camera.

Use detail/title/overview presentation where needed for scale, with stable
thresholds and hysteresis. Never make selected cards or actions disappear at
a zoom boundary. Provide keyboard and touch equivalents, not hover-only access.
The details panel must not change canvas dimensions or reset its transform.

Carry SPEC's IB01-IB04 and IB06 behaviors forward from the original fixture.
Exercise touch-to-keyboard/assistive activation after gestures and when results
arrive; preserve usable overview focus targets and intentional text selection.
Do not replace the scenarios with a particular event-handler trick or assume
that a fix to pinch is complete until subsequent activation also works.

Exercise dragging while results arrive, resize/reload, find/focus, fit, arrange
and layout undo/redo. Render a populated scene, not only an empty canvas.
Update C02 and C15 evidence and the handoff. Missing behavior remains partial;
do not publish this slice as the complete application.
Package complete when: the listed canvas interactions work on a populated
scene with mouse, touch and keyboard; positions, sizes and camera survive
reload; layout undo/redo has a documented scope; no navigation or view switch
starts a model call; IB01-IB04 and IB06 hold across the new persistence/update
boundary; and C02/C15 evidence and the handoff are updated.
```

### Prompt 6: make the relationship graph visible and understandable

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: Canonical revision identity and working canvas interaction; rerun fixture proposal transitions against real decisions before M2 closes.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's visible relationship graph in this new modular monolith.
Use newly authored implementation in this project. Inspect canonical revisions,
canvas rendering and the product contract. Database relationships alone do
not satisfy this task: a person must see and reason about them on the canvas.

Represent exact-revision derivation, multi-parent recombination, labeled semantic
connections and brief/run membership distinctly. Derivation is acyclic;
semantic links may cycle and preserve kind/direction. Independent roots can
share a brief-context anchor but must not be portrayed as inheriting one
another's content. Never invent parentage to make a sparse graph look connected.

In Lineage view, meaningful parent/child connections are visible at rest at the
normal working zoom. Selection/hover/focus strengthens the relevant neighborhood
and exposes direction, kind and contributions; it is not the only discoverability
mechanism. Offer ancestry/descendant focus and an accessible relationship list.
At dense zoom levels use explicit aggregation, not invisible low-opacity edges.
The list exposes incoming sources, outgoing descendants and semantic associations
with their kinds/directions and navigable endpoints. Exercise IB05 from either
endpoint, including unkept work and unknown evidence. An incoming-only inspector
is not a complete textual equivalent of the graph.

Connect user-selected cards directly. Keep endpoints attached while cards move
or resize. Unkept proposals and kept descendants remain connected to their
actual sources; acceptance must not erase the visible graph. Filtering/folding
must explain omitted branches and provide an explicit way back.

Use a synthetic fixture with one brief, two independent roots, a grandchild,
a two-parent recombination, a semantic cycle and an unkept proposal. Trace all
paths visually and through keyboard/touch; test move, keep, filter and reload.
No JSON inspector or screenshot containing untraceable lines counts as C03.
Record the observed behavior and any gap; do not weaken the graph contract.
Package complete when: every path in the fixture is traceable at rest and by
keyboard and touch; edges survive move, keep, filter and reload; dense scenes
aggregate explicitly; IB05 covers incoming and outgoing relationships with
correct state distinctions; and C03 evidence records observed behavior and any gap.
```

### Prompt 7: compile exact operation context

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: Exact brief/source revisions and relationship identity; rich part-selection UI follows in M3.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's operation-context compiler in this new modular monolith.
Use newly authored code and current repository contracts only.
Inspect revisions, traits, selected contributions and relationship identity.
In the working spine, complete brief-only and whole-source context end to end.
Define typed part/excerpt selection and validate it with focused domain cases;
the creative-workspace milestone wires the richer selection UI. Track that UI
as partial, not as a prerequisite that blocks the first real operation.

A frozen manifest records exact source IDs/revisions, selected functional parts
or validated excerpts, inclusion reasons/order, brief/constraint revision,
operation/prompt version, runtime model profile and declared archive exposure.
Preview and execution consume the same application-controlled input.
No hidden memory or summary may be appended after this projection.

Independent-root context contains only the explicit brief and user constraints.
Source-directed context contains selected sources plus declared references.
Archive-aware context admits a named bounded subset explicitly. Spatial
proximity, grouping and shared attention are hints, not inherited constraints.
Record later tool retrieval as additional evidence, not a rewritten manifest.

Show readable inherited/selected/excluded material next to the source cards.
Reject stale excerpts and changed dependencies. Input limits must surface
omissions or require a narrower selection, never silently truncate meaning.
Moving a card or switching views must not invalidate content-only context.

Test exact ordering, exclusions, stale dependencies, contribution selection,
large inputs and model-boundary root isolation. Update C04/C08 evidence and
the handoff. This is not permission to generate before cost admission exists.
Package complete when: brief-only and whole-source manifests compile end to
end with preview and execution sharing the same frozen input; the listed tests
pass; typed part/excerpt selection is domain-tested with its UI tracked as
partial; and C04/C08 evidence and the handoff are updated.
```

### Prompt 8: implement durable execution and bounded cost admission

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: Frozen context, named application operations and stable command identity.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's shared durable run machinery in this new codebase.
Keep the Next.js/TypeScript modular monolith, Postgres authority and Vercel
Workflow. Inspect frozen context and application operations; report missing
prerequisites rather than building a competing engine.
Define the M2/8 run lifecycle policies in ARCHITECTURE with this implementation.

Persist admission and dispatch intent, start workflows, checkpoint individual
steps, expose progress and partial results, and support pause/resume/stop and
reconnection. Reconcile the gap between database commit and workflow startup.
The browser does not own run lifetime. Durable replay does not guarantee
exactly-once external provider execution.
Use bounded polling of persisted progress initially; reconnect from
durable state and stop polling on unmount or terminal status without stopping
the run. Do not add a realtime service unless an observed requirement warrants it.

Commands have stable IDs, payload identity, targets and expected revisions.
Duplicate delivery returns the existing receipt; changed payload reuse conflicts.
Distinguish admitted/running/awaiting-input/completed/failed/stopped outcomes.
Separate operation, Wander and goal-directed policy from shared execution.

Reserve bounded attempts and spend before paid work. Use one application
envelope sized by the owner for the demonstration window, inclusive of text,
voice, workflow and database; configure component allocations and headroom.
Retain failed/uncertain attempts. No automatic top-up or silent provider switch.
Vendor metering and app reservations are not an exact hard billing ceiling.

Exercise dispatch failure, duplicate completion, browser close, stopped admission,
partial siblings and exhausted allowance using explicit fixtures. Keep the
working Lineage view responsive. Repeat affected cases across Evolution and
Constellation when those views arrive in M3. Link the repository to the
authorized Vercel project in this package so automatic preview deployments exist
from here on, and exercise restart recovery and dispatch reconciliation on a
preview as well as locally; packages 9 and 12 use the same previews for budget
rejection and realtime session limits. A preview is evidence, not the release.
Update C10/C12 and architecture evidence; do not deploy to production.
Package complete when: admission, dispatch, checkpointing, progress, pause,
resume, stop, reconnect and reconciliation work against fixtures; command
receipts are idempotent; the shared envelope and component allocations are
configured; the listed failure cases pass with the working Lineage view
responsive; and C10/C12 and architecture evidence record the M3 cross-view
obligation.
```

### Prompt 9: generate live alternatives with capability-aware models

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: Durable run/cost admission and frozen inputs; authorized provider access for live evidence.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Deliver live creative generation in Minerva using newly authored implementation.
Use this repository's operation context, durable runs and spend admission.
The product requires distinct alternatives with lineage, not a chat answer.

Implement a server-side model adapter over Vercel AI Gateway through the AI SDK,
with a server-held Gateway credential, explicit supported model settings, output
schema, timeout/output bounds, prompt version and attempt policy. Runtime models
are Gateway model ids; GPT-6 Astra is the development agent and does not decide
them. Consult current official AI Gateway and AI SDK documentation. Never change
a model ID while inheriting unsupported sampling or reasoning settings.

Generate bounded independent perspectives or source-directed alternatives as
separate proposals. Preserve full text/code artifacts as appropriate, concise
titles, operative mechanism, prerequisites, uncertainties, parent contributions
and the requested-versus-observed transformation. Different wording alone is
not a different mechanism. Keep the original goal fixed.

Persist every result or explicit failure and display it connected to its actual
source/context. Do not move kept cards, drop inconvenient alternatives or label
raw output accepted. Record actual input, output, finish state, usage and errors.
Fixtures are clearly separate from live paths; missing credentials never produce
fabricated live output.

Exercise malformed output, partial failure and a bounded real call only with
authorized credentials/spend. Complete one-source divergence in the working
spine. The creative-workspace milestone extends this same path to rich branch
development; leave those C05/C08/C09 behaviors explicitly partial until then.
Package complete when: one-source divergence produces persisted,
lineage-linked proposals through the durable path; malformed output and
partial failure are handled; one bounded authorized live call is recorded with
input, output, finish state and usage, or the live gate is marked blocked; and
C05/C08/C09 rows state what remains partial.
```

### Prompt 10: assess proposals and preserve human decisions

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: Generated proposals, immutable source revisions and a visible graph.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's independent review and transactional decisions in this new
codebase. Use shared revisions, generation and lineage. Read the product
contract; do not replace richer inspection with a single pass/fail badge.

Assess exact proposal revisions for goal fidelity, explicit constraints,
causal dependencies, requested transformation and mechanism differences.
Distinguish supported, contradicted, unclear, pending and unavailable evidence.
Grounding support is separate from recurrence and does not certify novelty.

Let users inspect/edit/keep/set aside proposals. Keeping atomically records the
decision, accepted revision, per-parent contributions and visible lineage.
Editing retains the original and invalidates old text-specific assessments.
Deterministically invalid output is not accepted; unavailable review can only
be kept through explicit acknowledgement as unreviewed work.

Changed sources require regeneration or an explicit separate historical-context
branch. Rejected work remains inspectable. Undo respects downstream references
and does not erase evidence or silently delete a used ancestor.

Exercise duplicate acceptance, changed parents, unavailable review, edited
annotations, multi-parent keep and dependent undo. Verify graph visibility
before/after keep and after reload. Update C03/C04/C05 evidence and the handoff.
Use live calls only within existing authorization; no extra review engine.
Run the M2/10 small task comparison using the saved live-operation results;
record the owner's observations with the interim review evidence.
Package complete when: assessment states, inspect/edit/keep/set-aside
decisions, atomic acceptance with lineage, invalidation on edit and dependent
undo work; the listed cases pass; graph visibility holds before and after keep
and after reload; C03/C04/C05 evidence and the handoff are updated; and the
interim Fable M2 review packet for packages 4-10 is prepared.
```

### Prompt 11: build a collaborative typed partner with shared attention

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: The working Lineage canvas, shared command receipts and creative-operation admission.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Build Minerva's typed collaborator with newly authored code. It discusses and
develops an evolving creative space, not only recites card text or dispatches
commands. Use the local product contract and shared application operations.
Define transcript retention and deletion before persisting conversation, using
the M2/11-12 lifecycle policies in ARCHITECTURE. Raw-audio policy belongs to voice.

Deliver this package as connected increments, not a whole collaborator subsystem.
First select a saved card, send a typed message and display a context-grounded
reply in the working UI; actions stay disabled for this increment. Label fixture
versus live behavior. Then integrate shared attention and one explicit typed
operation through the existing command/admission path, exposing its actual
receipt. Do not start the next increment while these pieces have no working
caller. These checkpoints do not waive the full package criteria below.

Support explanation, assumption challenges, connections, alternative readings,
contextual move suggestions and explicitly requested scoped actions. Resolve
named cards, relationships, comparison slots and active-view attention. Fetch
specific details on demand rather than sending the whole graph/transcript
every turn. Distinguish user requirements from conversational speculation.

Use the same operation vocabulary as the UI, with stable intent/command IDs
and exact target revisions. Acknowledge actual outcomes, not a model's intention.
Clarify ambiguous referents. Suggestions and generated material remain proposals
unless the user explicitly requested an allowed state change.

Implement ephemeral attention for cards and edges with source, sequence and
expiry. Highlighting does not replace selection, mutate content, launch work
or move the camera. Explicit navigation can move it; stale events cannot.

Exercise discussion during a durable creative operation, two-card references, relationship inspection,
suggested versus executed actions, duplicates and out-of-order attention.
In the working spine, deliver selected-card discussion, attention and one
explicitly requested creative action against the working Lineage canvas.
Keep the service independent of view/panel lifetimes. Cross-view and full
creative-action coverage belongs to the creative-workspace milestone and stays
open in C13; a read-only chat box cannot satisfy that later gate.
Package complete when: the typed collaborator explains, challenges, suggests
and executes explicitly requested scoped actions through shared operations
with stable intent IDs; attention events behave as specified; the listed
scenarios pass in the working Lineage view during a durable operation; and
C13 evidence records voice for Prompt 12, cross-view/full creative-action
coverage for M3, and repetition during Wander for M4 as pending obligations.
```

### Prompt 12: deliver bidirectional voice that survives concurrent work

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: Typed collaboration, shared attention, command identity and cost admission.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's bidirectional voice collaborator in this new
codebase. Use its typed collaborator, shared commands, attention and cost
admission. Voice runs through the Vercel AI Gateway realtime path, which is a
beta capability: read its current official documentation, confirm the installed
AI SDK channel, and read the product scope. Resolve conversation and audio
retention with the owner before implementing storage, following the M2/11-12
lifecycle policies in ARCHITECTURE.

Use the following increments rather than one large "voice subsystem" assignment.
Integrate and exercise each in the running workspace before expanding it.

| Increment | Observable result |
|---|---|
| Provider uncertainty | A small authorized probe through the Gateway token route establishes authentication, bidirectional transport, session limits including the team's concurrent-session cap, and supported settings, or records the exact blocker |
| Basic voice | The user connects, speaks, hears a reply, interrupts and disconnects through the workspace UI; basic permission, cleanup and cost bounds are already enforced |
| Continuity | The conversation remains grounded while the user moves cards and changes panels; late permission/setup cannot reopen a stopped session |
| One spoken action | A clear spoken request invokes the already working typed operation and shows its acknowledged result without duplicate effects |
| Recovery and combined journey | Reconnect, cancellation, denied allowance and uncertain outcomes behave explicitly during the full M2 canvas/generation/voice journey |

These are implementation checkpoints within package 12, not extra milestone
reviews or a reduced release. Keep any not-yet-delivered action path disabled
and explicit. Use fixtures for repeated iterations and bounded authorized live
cases at the transport boundary; no personal recordings are needed for synthetic
browser exercises. If live access is unavailable, report that gap and proceed
only with genuinely independent work. A component and endpoints that are not
wired together do not complete an increment.

Provide microphone input and spoken replies, interruption/barge-in, reconnect
and disconnect. Mint single-use short-lived session tokens on the server only
after microphone permission is granted, because the Gateway closes a session
that sends no client message within 30 seconds of connecting; Gateway
credentials never reach the browser. Sessions end at the Gateway's 25-minute
limit or after 5 idle minutes, and reconnect starts a new session with
resynchronized context. Keep
connection/model/config identities stable across renders.
Voice has its own lifecycle, not that of an inspector panel or canvas view.

In the representative journey, speak about one card while moving another.
The collaborator must resolve the intended reference and relevant state changes,
not merely produce speech beside an unrelated canvas. Clarify an ambiguous
reference instead of acting on whichever card is currently nearest.

Panel switching, card selection, dragging, zooming and incoming operation results
must not reset the voice connection or lose its relevant context. Demonstrate
this in the working spine. Add the same scenario across all three views in the
creative-workspace milestone and during Wander in the exploration-intelligence
milestone; those absent features are tracked dependencies, not fake demonstrations.
Stopping while microphone permission or setup is pending must dispose late
media and prevent a stopped session from reopening.

Interruption stops speech, not unrelated runs or acknowledged mutations.
Reconnect resynchronizes context without replaying intents or camera events.
Show microphone/listening/speaking state and retain typed fallback. Suppress
decorative audio during the conversation.

Bound duration and spend within the shared envelope; verify token and billing
behavior instead of assuming token expiry is a hard billing cutoff. No silent
provider switch or top-up. Exercise fixtures and an authorized real spoken
exchange including interruption and reconnect. Record live versus simulated
evidence for C13; do not describe transcription alone as voice collaboration.
Run the M2/12 small task comparison during this combined journey and record
the owner's judgment; the comparison adds no separate review gate.
Milestone closeout: demonstrate this complete M2 journey:
Create a workspace and idea; generate alternatives; trace sources; inspect and keep a result; reload; discuss a card by voice while moving another and receiving durable operation results; interrupt speech.
Prepare the exact-candidate packet for this milestone's Fable review.
Still open at this milestone: Rich genome/recipe workflows, full comparison/Weave, alternate views, contextual planning, Wander/Agent Drive, instrument breadth and outputs remain explicitly open.
Package complete when: microphone input, spoken replies, barge-in, disconnect
and reconnect work with a stable connection across panel, selection, drag and
zoom changes and incoming operation results; cross-view coverage is completed
in M3 and Wander coverage in M4; speech remains grounded in the intended cards;
duration and spend are bounded in
the shared envelope; an authorized real exchange is recorded or the live gate
is marked blocked; C13 evidence separates live from simulated; and the final
Fable M2 review packet is prepared.
```

### Fable review M2: Working spine

```text
You are Fable 5.1 in Claude, independently reviewing M2: Working spine
Read AGENTS.md and the Shared demonstration and review section of docs/build-prompts.md.
Use the supplied exact
candidate, isolated checkout/data and startup instructions. Review only; no edits
to application source or paid calls without explicit allowance.

Interim demonstration (after package 10):
Create a workspace and idea; generate alternatives; trace sources; inspect and
keep a result; reload and recover the saved graph/run state. Follow one operation
from source revision through admission, provider result, assessment and acceptance.
Collaboration and voice are open scope, not interim failures. Missing real
provider evidence is still a named live gate; a fixture cannot substitute for it.

Final demonstration (after package 12):
Repeat the interim journey while discussing a card by voice, moving another,
and receiving durable results. Exercise spoken replies, interruption, reconnect
and pending-permission cancellation without losing the workspace context.
An unconnected component or transcription-only path is not complete voice.

Shared review focus:
Apply only the demonstration matching the packet's review stage. Check server
ownership and independent lifecycles. Wander and alternate views remain later
scope. Never approve real-path claims from fixture evidence.
Recheck affected IB01-IB06 scenarios against the working state/update boundary,
including gesture-to-keyboard activation and outgoing relationship inspection
after a result is accepted. A fixture-only pass does not establish the new path.
For each claimed increment, follow its actual UI caller through the application
and service boundary to the visible result. Separate written components,
integrated behavior, local fixture demonstration and real provider evidence.
Do not accept an unconnected voice component or a reported code return as a
working conversation. Review the planned boundary, not every increment as an
additional full-review ceremony.

Still-open scope at this boundary:
Rich genome/recipe workflows, full comparison/Weave, alternate views, contextual planning, Wander/Agent Drive, instrument breadth and outputs remain explicitly open.

For the interim review, return READY FOR COLLABORATION INCREMENTS,
CHANGES REQUIRED, or BLOCKED. Interim readiness does not complete M2 or
permit advancing to M3. For the final review, return READY FOR NEXT MILESTONE,
CHANGES REQUIRED, or BLOCKED.
```

## Milestone 3: Creative workspace

**Entry:** A working persistence/generation/review/voice spine with exact source identity and visible relationships.

**Working demonstration:** Inspect a multi-parent genome; preserve selected parts; compare distant cards; choose a card-specific suggested move; Weave and keep a child; revisit history; switch all three views while speaking and while a durable operation finishes.

**Exit and review:** The complete creative-workspace journey works with existing services, all views use canonical data, Fable verifies the interaction, and the user reviews the richer experience. Constellation initially uses a stated computed method, not canned groupings.

**Still open:** Wander-specific recurrence overlays and advanced space readings belong to M4. Standalone instrument breadth and output artifacts belong to M5; they are not optional.

### Prompt 13: expose history, inheritance and the idea genome

```text
You are GPT-6 Astra in Codex, implementing a work package in M3: Creative workspace.
Required prerequisites: Persistent revisions, graph relationships, proposal assessments and the working spine.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Build Minerva's history and inheritance inspection using newly authored
code in this repository. Keep the modular monolith and immutable revisions.
Read the product contract and existing source/relationship operations.

From a card, let the person inspect its full artifact, exact parent revisions,
functional parts/traits, inherited material, changes, reasons, newly enabled
moves and per-parent contributions. Show original input, generation provenance,
review evidence, human edits and decisions in a readable hierarchy.
"Genome" is a product metaphor for inspectable functional structure, not a
biological model, novelty score or fixed taxonomy imposed on every idea.
Unknown traits and unsupported interpretations remain explicitly unknown.

Support history navigation, ancestor/descendant inspection and revisiting an
earlier state. Revisit creates a provenance-bearing new revision/branch; it does
not destroy later history or make an old review apply to new text.
Keep generated annotations distinct from human assertions and explicit locks.

Make source claims link to the actual content revision and relevant excerpt.
A raw JSON dump, parent count or generic lineage badge is insufficient.
Editing a source invalidates only dependent claims, never unrelated layout.

Exercise multi-parent inheritance, edited descendants, unknown traits, rejected
work in history and revisit-after-edit. Confirm the displayed narrative matches
records and export, without an extra model call just to inspect saved evidence.
Update C04 evidence and the handoff. No external application reference is needed.
Package complete when: from any card the full artifact, exact parents, parts
and traits, inherited/changed/new material, provenance, review, edits and
decisions are inspectable; revisit creates a provenance-bearing revision; the
listed cases match records and export; and C04 evidence is updated.
```

### Prompt 14: support branch continuation and reusable transformation intent

```text
You are GPT-6 Astra in Codex, implementing a work package in M3: Creative workspace.
Required prerequisites: Source/history inspection and the already working shared generation/review path; wire real behavior now.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement branch-development intent for Minerva in this new repository.
New custom implementation only. Use the product contract,
immutable revisions and application operations; do not invent a smaller product.

Any branch can be continued, varied or refined. Let the person name one axis
to change, choose functional traits to preserve, specify what to avoid, and
preview the exact source and intended change. Store a versioned transformation
recipe with source identity, user constraints and requested behavior.
Do not silently convert earlier model assumptions into permanent constraints.

Provide explicit preview/accept-as-child/discard semantics. Retain rejected
attempts and their reasons. A recipe can later be replayed against an explicitly
chosen source revision, with fresh validation and separate result identity.
Do not overwrite the source, silently rerun a recipe or imply its result works.

Use fixtures for focused iteration, then integrate through the already working
shared live generation/review path. If that prerequisite is unavailable, keep
the package incomplete and report the specific gap. Completion requires
generated alternatives through that path, not only saved forms or fixture UI.

Exercise preserve/avoid conflicts, stale source selection, recipe replay,
rejected previews and acceptance with downstream history. Update C05 with
separate implemented and pending live-path evidence. Keep canvas controls usable.
Package complete when: continue, vary and refine with preserve/avoid, preview,
accept-as-child and discard, retained rejections, versioned recipes and replay
work through the live generation/review path; the listed cases pass; and C05
evidence is updated.
```

### Prompt 15: build the comparison workbench

```text
You are GPT-6 Astra in Codex, implementing a work package in M3: Creative workspace.
Required prerequisites: Canonical cards/revisions and multi-selection; build the complete comparison workbench.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Build Minerva's generation-independent comparison workflow in the new project.
Use newly written code and this project's canonical idea/revision model.
Read the complete contract; comparison is required, not optional polish.

Let users add two to four cards to a stable comparison set, replace/remove
slots, inspect full artifacts side by side, and compare functional mechanisms,
constraints, inheritance and available evidence. Preserve input order and
source revision identity. Distant cards are selectable without moving them.

Provide a Distance Panel that can compare supplied artifacts without generating
new ones. State the actual lexical/structural/semantic method and its limits.
Distance is neither quality nor novelty. Missing profiles or contradictions
must not be converted into a winner or a confident equivalence claim.

Comparison selection is distinct from camera focus and temporary AI attention.
Use a compact contextual workbench, not repeated controls covering every card.
Keep source cards readable and the active voice channel independent.
Show the path to contribution selection and Weave; if generation is not yet
implemented, clearly mark that action unavailable rather than simulate it.

Exercise repeated slot selection, source edits, identical artifacts, unknown
profiles, removing a slot and view switching with the comparison set intact.
Update C06/C09 evidence and the handoff. Do not introduce another content store.
Package complete when: a stable two-to-four slot comparison set with
side-by-side inspection and a generation-independent Distance Panel works with
its method and limits stated; the listed cases pass with voice unaffected; and
C06/C09 evidence is updated.
```

### Prompt 16: implement the Evolution view

```text
You are GPT-6 Astra in Codex, implementing a work package in M3: Creative workspace.
Required prerequisites: Visible lineage and recorded history; preserve the working voice lifecycle.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's Evolution view as required product behavior in this new
repository. Newly authored implementation only. Use the same canonical ideas,
revisions, relationships, decisions and runs as Lineage; read the contract first.

Show development over recorded time, including continuation, variation,
refinement, recombination, edits and human decisions. Let users follow a thread,
inspect a prior step, focus related work and return to the current branch.
Creation order alone is not a causal relationship; render the real source links.

Maintain stable IDs, selected cards and comparison slots across view changes.
Store the Evolution arrangement/viewpoint independently from Lineage. Changes
to presentation must not copy content, regenerate artifacts or mutate lineage.
Incoming work does not reset the user's chosen place in the stream.

Use the original atlas typography and compact instruments. Keep a clear way
to switch views and explain folded/omitted work. Support keyboard and touch.
Do not render a disabled tab, the same flat grid, or a list of timestamps and
claim that the Evolution capability is complete.

Exercise a branched timeline with a two-parent child, revised content, hidden
history and incoming results. Verify selection continuity and saved viewpoint
recovery. Update C07 evidence and the handoff without reducing other scope.
Package complete when: Evolution renders real source links over recorded
time with independent layout, selection and comparison continuity across views
and a stable place during incoming results; the listed cases pass; and C07
evidence is updated.
```

### Prompt 17: implement the Constellation view

```text
You are GPT-6 Astra in Codex, implementing a work package in M3: Creative workspace.
Required prerequisites: Canonical graph and view-state separation; compute initial groups, with M4 interpretation tracked separately.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's required Constellation view with newly authored
code in this repository. Use canonical records and the complete product contract.
It complements Lineage and Evolution; it must not become a separate workspace.

Show provisional relationships or groupings under a stated analysis, while
retaining access to actual ancestry. Let users inspect groups, representatives,
outliers and source records, search/focus a card, and return to another view
with the same selection and comparison set.

Store view layout independently from content. Preserve deliberate positions;
recompute a grouping only through an explicit action or a clearly indicated
new analysis snapshot. Do not silently rearrange the working field when results
arrive. Unknown profiles must be visible, not fabricated coordinates or scores.
Spatial distance and regions are not quality or novelty claims.

For this milestone, compute a real initial grouping from available canonical
relationships/content under a stated deterministic method. Do not use a canned
fixture as the only implementation. Model-assisted interpretation and recurrence
overlays are completed in the exploration-intelligence milestone; keep that C11
dependency open. A renamed Lineage view is not completion.

Exercise multiple groups, unknown records, a cross-group relationship, filtering,
saved arrangement and switching during incoming updates. Verify that no view
switch triggers generation or loses source identity. Update C07/C11 evidence.
Package complete when: Constellation shows computed provisional groups under
a stated method with access to ancestry, independent layout, no silent
rearrangement and visible unknowns; the listed cases pass; and C07/C11
evidence records the M4 interpretation dependency.
```

### Prompt 18: make contextual creative moves specific and immediate

```text
You are GPT-6 Astra in Codex, implementing a work package in M3: Creative workspace.
Required prerequisites: Shared context, generation, review and the creative workspace; no static-menu substitute.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Build Minerva's contextual move experience with newly authored implementation.
Use this repository's frozen context, shared generation/review and durable runs.
Read the complete contract; a toolbar of generic operation names is insufficient.

From one card, expose a discoverable one-level chooser immediately, with mouse,
touch and keyboard access. Produce card-specific AI suggestions for divergence,
combination, recombination, split, tension and mechanism escape. Suggestions name
what would change, why, the actual proposed sources and what to preserve.
Retrieve a relevant contrasting partner when appropriate, rather than forcing
the user to manually construct every pairing or write a long instruction.

Preview affected cards and contributions before admission. A person can choose
available moves while planning continues; late suggestions must not replace a
choice already made. Pan/zoom does not restart planning. Source/constraint edits
do require revalidation. A static generic fallback must be labeled as such and
cannot stand in for the required contextual-planning capability.

Implement C08's distinction between the local chooser, bounded planning and
creative artifact generation. Define the planning trigger, revision-scoped
freshness and admission with this package while preserving the direct journey.

Do not prescribe a radial implementation, but preserve its useful behavior:
local to the card, immediate, small, specific, no nested menu path. From a visible
card, opening and choosing a move should need at most two activations, excluding
optional editing. Navigation cannot launch model work; opening the chooser must
not generate creative artifacts or create new spending authority.

Exercise suggestions for genuinely different source cards, proposed partner
preview, choosing during planning, stale sources, planner failure and keyboard/
touch use. Confirm every admitted alternative or failure appears in the graph.
Update C08/C15 evidence; do not call a generic menu equivalent to this workflow.
Package complete when: a card-local one-level chooser yields specific AI
suggestions with source previews within two activations on mouse, touch and
keyboard; a choice survives late planning results; stale sources and planner
failure are handled; every admitted result or failure appears in the graph;
and C08/C15 evidence is updated.
```

### Prompt 19: complete distant recombination and contribution selection

```text
You are GPT-6 Astra in Codex, implementing a work package in M3: Creative workspace.
Required prerequisites: Comparison slots, selected-part context and shared generation/review.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Complete Minerva's Weave workflow in this new codebase. Use canonical
revisions, the comparison set, context compiler and shared generation/review.

Two to four distant cards can be compared and recombined without moving them.
Let the person choose whole ideas or exact functional parts/excerpts, identify
what each contributes, and distinguish preservation from a changed interaction.
Offer both combine and recombine semantics; do not concatenate summaries and
call the result emergent.

AI may recommend a useful contrasting pair with evidence and uncertainty;
spatial distance or a scalar similarity score alone is not the recommendation.
Preview source threads and the intended interaction before admission. Show
each proposed result with all real parents, then retain those edges after keep.

Expose what was selected from each parent and where it appears or changes in
the result. Parent identifiers establish provenance, not proof that the claimed
contribution was meaningfully used. Unsupported inheritance claims and mere
summary concatenation remain visible for challenge, not labeled emergent success.

Place Connect and Weave directly beside the selected comparison set, not behind
workspace settings or a mandatory inspector sequence. After selecting the
sources, the principal recombination action is one further activation; optional
contribution editing is additional by choice.

Exercise different parent counts, duplicate source selection, edited sources,
partial alternatives, true contribution preservation and acceptance/reload.
Keep the camera, comparison slots and voice stable. Update C03/C06/C08 evidence.
Do not use a new standalone recombination engine or claim proven creativity.
Package complete when: two to four distant cards can be compared and
recombined with chosen parts, previewed contributions and all real parents
retained after keep; Connect and Weave sit beside the comparison set as one
activation; the displayed contributions can be inspected against source and
result artifacts rather than inferred from parent IDs; the listed cases pass;
and C03/C06/C08 evidence is updated.
```

### Prompt 20: connect conversation to the full creative workflow

```text
You are GPT-6 Astra in Codex, implementing a work package in M3: Creative workspace.
Required prerequisites: Working voice, three views, comparison, contextual moves and Weave.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Complete Minerva's collaborative actions with newly authored code.
Use the same live workspace, typed/voice channels, context compiler and
application operations. This is not a second agent engine.

A person can discuss a card's ancestry, ask about a relationship, request a
contrasting direction, compare two named ideas, propose a link, choose parts
to recombine and direct bounded exploration. Resolve references against current
IDs/revisions and expose affected sources before ambiguous or material actions.

Separate discussion, attention, suggestions, proposals and explicit commands.
Partial speech never mutates. Finalized intents have stable identity; execute
each allowed requested effect at most once and report its receipt. Do not
silently narrow the collaborator to only highlighting and navigation while
claiming the complete action contract.

AI attention and user selection remain independent. Keep context coherent when
views/panels change or one person speaks while manipulating a different card.
If the source changed, clarify or replan only that action.

Treat "these ideas use the same mechanism" as a challenge to examine, not an
automatic fact or an instruction to overwrite either card. Discuss evidence,
preview a concrete intervention and resolve whether the person requested
execution. Reuse existing scoped authority for clear requests; do not add
another confirmation dialog to every reversible interaction.

Exercise a real or clearly labeled fixture conversation that explains a
multi-parent child, identifies a tension, proposes a connection, and performs
an explicitly requested recombination while a durable creative operation
continues. The exploration-intelligence milestone repeats it during Wander
once that policy exists. Verify no
unrequested acceptance, no duplicate effects and no canvas lock. Update C13/C08.
Milestone closeout: demonstrate this complete M3 journey:
Inspect a multi-parent genome; preserve selected parts; compare distant cards; choose a card-specific suggested move; Weave and keep a child; revisit history; switch all three views while speaking and while a durable operation finishes.
Prepare the exact-candidate packet for this milestone's Fable review.
Still open at this milestone: Wander-specific recurrence overlays and advanced space readings belong to M4. Standalone instrument breadth and output artifacts belong to M5; they are not optional.
Package complete when: a real or clearly labeled fixture conversation
performs the listed discussion-and-action journey during a durable creative
operation with no unrequested acceptance, duplicate effect or canvas lock;
the same journey during Wander remains required in M4; C13/C08 evidence is
updated; and the Fable M3 review packet is prepared.
```

### Fable review M3: Creative workspace

```text
You are Fable 5.1 in Claude, independently reviewing M3: Creative workspace
Read AGENTS.md and the Shared demonstration and review section of docs/build-prompts.md.
Use the supplied exact
candidate, isolated checkout/data and startup instructions. Review only; no edits
to application source or paid calls without explicit allowance.

Required demonstration:
Inspect a multi-parent genome; preserve selected parts; compare distant cards; choose a card-specific suggested move; Weave and keep a child; revisit history; switch all three views while speaking and while a durable operation finishes.

Review focus:
Test inheritance evidence and multi-parent visibility, rejected recipes and revisit behavior, comparison slots, selected contributions, source-specific AI suggestions and actual recombination. Switch Lineage/Evolution/Constellation without changing content or losing voice. Distinguish computed initial Constellation groups from M4 interpretation. Flag generic menus or repeated toolbars that recreate friction.

Still-open scope at this boundary:
Wander-specific recurrence overlays and advanced space readings belong to M4. Standalone instrument breadth and output artifacts belong to M5; they are not optional.

```

## Milestone 4: Exploration intelligence

**Entry:** The creative workspace, shared operations, durable execution, exact context, and concurrent voice.

**Working demonstration:** Explore independent roots and multiple paths; expose a repeated mechanism; attempt a targeted change and an honest stagnation case; navigate a reading to source evidence; challenge a grouping; pursue an achievable and impossible goal. Speak, move and switch views during these runs.

**Exit and review:** Fable verifies policy/context boundaries and the interactive analysis loop, including previously deferred Wander-plus-voice scenarios. Efficacy has its own evidence status; unresolved human comparative judgments prohibit improvement claims, not honest reporting of implemented behavior.

**Still open:** Instrument breadth and materialized outputs still need M5. Final full-product and infrastructure qualification belongs to M6.

### Prompt 21: build Wander roots, frontier and exploration archive

```text
You are GPT-6 Astra in Codex, implementing a work package in M4: Exploration intelligence.
Required prerequisites: Shared creative operations, durable execution and an independently testable context compiler.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's durable Wander foundation with newly authored code.
It explores a possibility space while a person works on the canvas and speaks.
Use this repository's context, generation/review, run and graph contracts.

Start a user-authorized bounded exploration from the brief and explicit
constraints. Generate multiple independent roots: no sibling output, prior
narrative, selected favorite or generated archive in their model inputs.
Record actual context exposure. Independence does not guarantee novelty.

Maintain a frontier of branches available for exploration and an archive of full artifacts,
mechanisms, source paths, operations, reviews, repeated/rejected outcomes,
repairs and usage. Keep archive classification separate from human taste.
Allow useful partial results to appear without a keep click per generated card.
Make root-context membership distinguishable from content inheritance in the graph.

Provide understandable exploration envelopes governed by allowance, not an
arbitrary tiny demo quota presented as whole-space exploration. Short runs
are labeled starting points. Bounded concurrent branches may refill as they
finish when allowed; one failed sibling does not erase the others.

Support progress, pause/resume/stop, reconnect and full archive inspection/export.
Neither results nor run-state changes take over the canvas or voice.
Exercise model-boundary isolation, partial roots, duplicate completion, browser
close and archive retention. Update C10 evidence without claiming efficacy.
Package complete when: an authorized bounded Wander run produces isolated
independent roots, a frontier and an inspectable, exportable archive with
recorded context exposure, partial results, pause, resume, stop and reconnect;
the listed cases pass; and C10 evidence is updated without efficacy claims.
```

### Prompt 22: make Wander change strategy on actual recurrence

```text
You are GPT-6 Astra in Codex, implementing a work package in M4: Exploration intelligence.
Required prerequisites: Wander roots, frontier, archive and recorded outcomes.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's adaptive exploration policy with newly authored
code. Use shared durable execution, archive and operation services; read the
complete product contract. This is not a fixed loop over renamed operations.

Choose among fresh brief-only roots, local branch development, distant
recombination and targeted assumption/mechanism challenges. Record the source,
context exposure, requested change, observed result and rationale for the next
move. Keep the original goal and explicit constraints fixed.

Detect recurrence from operative mechanisms and recorded paths, not titles,
operation names, layout distance or the generator's own narrative. On stagnation,
change an inherited assumption or causal structure, try a clean root or combine
genuinely different contributions. Repair near misses within a declared allowance.
Do not treat the act of choosing an escape operation as an achieved escape.

Retain repeated and failed outcomes. Do not silently request the same source/
operation/context repeatedly. If bounded alternatives fail, stop or ask for
direction with a specific stagnation explanation and intact partial map.
No scalar model-rated creativity score governs success.

Close the user-feedback loop: link an explicit challenge to the exact source
revisions, the proposed intervention, the admitted step when authorized, and its
observed result. Reconsider the next move from that evidence. Do not silently
promote the challenge to a permanent constraint or treat it as necessarily true.
An already-authorized bounded run may act within its scope; otherwise surface
the proposed action rather than spend just because somebody made an observation.

Exercise paraphrases, changed wording/same mechanism, distinct mechanism changes,
infeasible novelty, independent reconvergence, contaminated roots and exhausted
alternatives. Show both successful intervention and honest failure. Update
C10/C11 evidence and unresolved quality risks; fixtures do not prove live efficacy.
Package complete when: the policy chooses among fresh roots, local
development, distant recombination and targeted challenges from recorded
evidence; recurrence is detected from mechanisms and paths; strategy changes or
a specific stagnation stop occurs; repeated and failed outcomes are retained;
both a supported and a mistaken user recurrence challenge lead to explicit,
evidence-linked dispositions and an inspectable next-step outcome; the listed
fixture cases pass; and C10/C11 evidence and quality risks are
recorded.
```

### Prompt 23: make the explored space readable, challengeable and navigable

```text
You are GPT-6 Astra in Codex, implementing a work package in M4: Exploration intelligence.
Required prerequisites: Actual artifacts, ancestry/context exposure, archive and computed Constellation view.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Build Minerva's evidence-linked map and What this space suggests experience in
this new codebase. Use canonical artifacts, ancestry, context exposure
and the exploration archive. A text summary alone is not the map capability.

Expose provisional groups, representatives, unusual candidates, repeated
mechanisms, possible connections and alternative next experiments. Users can
navigate from a reading to actual cards and paths, inspect members and omitted
records, challenge a grouping, identify equivalent mechanisms or request another
analysis. Persist explicit feedback with provenance, not hidden preferences.

Make the feedback actionable and visible: from a claim, open the referenced
cards, examine counterevidence, propose a specific change, and inspect what
happened after the authorized intervention. A saved comment with no path back
to exploration does not complete the loop. If no intervention is supported,
say so. Keep evidence beside the relevant interaction, not in a mandatory audit
dashboard, and do not replace explanation with an unexplained confidence score.

Distinguish a provisional basin under a stated analysis from a candidate
attractor evidenced by distinct paths returning to a mechanism. A large family
is not an attractor. An escape needs a supported mechanism change serving the
goal, not merely a new label; feasibility and global novelty remain separate.
Do not force a grouping or manufacture attractors to fill an output schema.

Link every substantive claim to exact supporting revisions and include confidence/
uncertainty, counterexamples, competing explanations and coverage limits.
Similarity retrieves candidates; it does not prove equivalence or creativity.
A stale reading is visibly stale and cannot quietly govern new work.

Wire the analysis into Constellation and the relevant Lineage overlays without
automatic rearrangement or permanent diagnostic clutter. Exercise misgrouping,
unknown profiles, stale data, contradictory evidence and navigation to a
multi-parent source. Update C07/C11 with behavior, not just generated prose.
Package complete when: readings expose groups, representatives, outliers,
recurrence and next experiments linked to exact revisions with uncertainty;
challenges persist with provenance and connect to a proposed intervention and
its outcome or an explicit reason not to act; Constellation and Lineage overlays are
wired without rearrangement; the listed cases pass; and C07/C11 evidence is
updated.
```

### Prompt 24: implement goal-directed Agent Drive

```text
You are GPT-6 Astra in Codex, implementing a work package in M4: Exploration intelligence.
Required prerequisites: Shared operations, durable execution, cost admission and recoverable state.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's required Agent Drive using newly authored code in this
repository. It pursues an explicit goal; Wander explores possibilities.
Keep their policies distinct while sharing context, operations, durable
execution, review, cost admission and recovery.

Let the person set a goal, permitted action scope, observable stopping condition
and attempt/spend allowance. The policy can inspect, develop, compare and
propose recombinations through normal application operations. Record why each
action serves the goal and what result actually occurred.
Resolve the M4 lifecycle policies in ARCHITECTURE here: overlapping run scope
and the evidence appropriate to each stopping condition. Human judgments of
feasibility and creative usefulness remain with the person.

Distinguish model-estimated progress from an observed satisfied condition.
Stop on completion, user stop, allowance exhaustion or bounded stagnation.
Do not redefine success after seeing the output or launch unauthorized actions
under a broad goal. Keep partial work, source identity and decision history.

Make goal pursuit and exploration clearly distinguishable without another
control dashboard. Conflicting agents may have scoped admission constraints,
but canvas manipulation, inspection and voice remain available.

Exercise an achievable goal, an impossible goal, repeated attempts, source edits,
interruption and reload. Confirm that the same command receives the same result
through manual and agent invocation. Update C12 evidence; do not defer this
required capability as an optional extension.
Package complete when: goal, action scope, stop condition and allowance can
be set; estimated progress is distinguished from an observed satisfied
condition; the achievable and impossible goals and the listed scenarios pass
with identical receipts for manual and agent invocation; and C12 evidence is
updated.
```

### Prompt 25: qualify exploration without trusting its own narrative

```text
You are GPT-6 Astra in Codex, implementing a work package in M4: Exploration intelligence.
Required prerequisites: Actual exploration policy, manifests/artifacts and the interactive analysis loop.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Assess and improve Minerva's exploration implementation using newly authored code.
Read actual artifacts, manifests and the complete product contract. A successful
run or fluent reading does not demonstrate useful creative exploration.

Maintain compact repeatable cases for paraphrases, repeated mechanisms, real
mechanism changes, infeasible novelty, independent reconvergence, contaminated
roots, unsupported escapes, misleading summaries and partial failures.
Verify context isolation, goal fidelity, truthful graph relationships, archive
retention and bounded strategy change/stagnation.

Prepare a small blinded comparison with ordinary independent generation on
representative synthetic briefs. Declare model/settings, candidate/attempt
counts and comparable bounded spend before running. Retain failures, usage,
cost and context exposure. A fixed candidate count alone is not cost parity.
Run paid comparisons only within explicit authorization.

Separate human judgments of useful differences/feasibility from model scores.
Record confidence, supporting artifacts, counterexamples and what would refute
the interpretation. If human judgments or live runs are unavailable, keep
efficacy unresolved. Do not claim an improvement percentage from fixtures.

Fix supported methodological defects without changing the goal or deleting
counterexamples. Update C10/C11 and efficacy status separately from functional
completion. Keep evaluation compact rather than building a research platform
or cutting product scope.
Milestone closeout: demonstrate this complete M4 journey:
Explore independent roots and multiple paths; expose a repeated mechanism; attempt a targeted change and an honest stagnation case; navigate a reading to source evidence; challenge a grouping; pursue an achievable and impossible goal. Speak, move and switch views during these runs.
Prepare the exact-candidate packet for this milestone's Fable review.
Still open at this milestone: Instrument breadth and materialized outputs still need M5. Final full-product and infrastructure qualification belongs to M6.
Package complete when: the compact case set runs repeatably; context
isolation and truthful relationships are verified; the blinded comparison is
prepared with declared settings and spend and run only if authorized; efficacy
status is recorded separately from functional status; C10/C11 evidence is
updated; and the Fable M4 review packet is prepared.
```

### Fable review M4: Exploration intelligence

```text
You are Fable 5.1 in Claude, independently reviewing M4: Exploration intelligence
Read AGENTS.md and the Shared demonstration and review section of docs/build-prompts.md.
Use the supplied exact
candidate, isolated checkout/data and startup instructions. Review only; no edits
to application source or paid calls without explicit allowance.

Required demonstration:
Explore independent roots and multiple paths; expose a repeated mechanism; attempt a targeted change and an honest stagnation case; navigate a reading to source evidence; challenge a grouping; pursue an achievable and impossible goal. Speak, move and switch views during these runs.

Review focus:
Inspect real manifests, artifacts, transitions and rejected attempts. Do not infer independence from different prompts, an escape from its operation label, or quality from distance. Exercise challenged groupings and source-linked readings on the canvas, plus voice/view continuity during Wander and Agent Drive. Separate implemented policy, live observations and unresolved creative efficacy.
Exercise the complete challenge-to-intervention-to-result loop, including a
mistaken challenge and an attempted change that fails. Verify the displayed
contributions against actual artifacts; correct provenance alone does not
establish that the claimed creative transformation occurred.

Still-open scope at this boundary:
Instrument breadth and materialized outputs still need M5. Final full-product and infrastructure qualification belongs to M6.

```

## Milestone 5: Remaining product capabilities

**Entry:** The creative workspace and exploration intelligence on shared application services.

**Working demonstration:** Invoke each instrument in the browser; produce a structured prototype and isolated runnable HTML; compare a controlled pair; save/download a synthesis and coding handoff.

**Exit and review:** Every required capability has an implemented path. Fable verifies browser instruments, outputs and shared admission. A code block alone is not a working output; unresolved paths remain blockers for M6 completion.

**Still open:** All C01-C15 scope is now implemented or explicitly identified as a gap. Cross-product qualification, infrastructure readiness and final user acceptance remain.

### Prompt 26: implement the complete creative instrument family

```text
You are GPT-6 Astra in Codex, implementing a work package in M5: Remaining product capabilities.
Required prerequisites: Shared generation/review, comparison and branch refinement; extend rather than duplicate them.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's required creative instruments using newly authored code and
the existing shared operation pipeline. Read the product contract. These are
distinct capabilities, not optional labels on the same generic prompt.

Provide independent perspective generation under explicitly chosen conflicting
operations; Constraint Deck with content-blind chance/medium/scale/combinatorial
restrictions; Assumption Fork with independent reversals of agency, sequence,
interface or success assumptions; generation-independent Distance Panel; and
Refinery for human-selected development while preserving chosen constraints.

Each instrument has a clear input/output contract, appropriate use, prompt or
algorithm version, bounded behavior and readable result. Experimental
restrictions are not silently promoted to permanent user requirements.
These are user-selectable instruments, not a taxonomy every Wander idea must fit.

Use the same context, cost, generation, assessment, lineage and decision services.
Expose instruments contextually without adding every instrument button to every
card. Preserve the ability to invoke one without running the whole family.

Exercise materially distinct inputs and outputs for each instrument, independent
comparison without generation, retained failures and refinement lineage.
Use authorized bounded live cases where available, label fixtures separately,
and update C09 evidence. A renamed operation enum is not completion.
Package complete when: each of the five instruments has a distinct contract,
is independently invocable through the shared pipeline and produces materially
distinct results in the listed cases; fixtures are labeled apart from
authorized live cases; and C09 evidence is updated.
```

### Prompt 27: materialize selected ideas into controlled prototypes

```text
You are GPT-6 Astra in Codex, implementing a work package in M5: Remaining product capabilities.
Required prerequisites: Selected revisions, shared generation/admission and artifact provenance.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Implement Minerva's required prototype outputs with newly authored
code. Use selected exact revisions, execution contracts, shared generation,
spend admission and provenance; read the complete product contract.

Provide a structured browser prototype with actual screens/actions and a
self-contained runnable HTML prototype. Each is a separate branch-linked
artifact stating the goal, preserved contributions, requested behavior,
observable outcome and evidence to return. Text/code source remains inspectable.

Render generated HTML in an isolated sandbox without application credentials,
same-origin authority or unapproved network access. Do not insert it into
Minerva's runtime, execute generated server code or autonomously deploy a site.
Distinguish static validity from demonstrated interaction and actual feasibility.

Support focus/side-by-side inspection, download and later result revision.
Source edits do not rewrite an execution artifact already used elsewhere.
Preserve failure receipts and partial results; no generic success-shaped output.

Exercise structured screen navigation, an actual HTML interaction, malformed
output, forbidden capabilities and source revision changes. Use authorized live
calls or honest fixtures. Update C14 evidence; output generation is not an
optional extension and a code block alone is not a runnable prototype.
Package complete when: a structured browser prototype and an isolated
runnable HTML prototype are produced from selected revisions, rendered in a
credential-free sandbox, inspectable and downloadable; the listed cases pass;
and C14 evidence is updated.
```

### Prompt 28: support paired experiments, handoffs and reusable synthesis

```text
You are GPT-6 Astra in Codex, implementing a work package in M5: Remaining product capabilities.
Required prerequisites: Prototype/output contracts, comparison and source-linked evidence.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Complete Minerva's output-to-next-work loop with newly authored code. Use the
existing execution/artifact contracts and exact source revisions.

Provide a controlled paired experiment comparing ordinary output and a selected
direction under declared comparable conditions. Record inputs, procedure,
artifacts, observations and limitations; do not retroactively choose a favorable
baseline or treat model scores as human evidence.

Generate a coding-session handoff containing the goal, selected contributions,
constraints, proposed behavior, uncertainties and observable acceptance cases.
Keep it independent of hidden conversations or inaccessible application repos.

Let the person record observed effect, evidence, rationale and a reusable
synthesis, save it as a provenance-bearing result, and copy/download it.
Preserve links to the experiment and sources. An observation and an AI
interpretation must remain distinguishable.

Exercise a pair with a contradictory outcome, missing human observation,
edited sources, handoff export and synthesis reload. Keep unmeasured effects
unresolved. Use shared modules and authorized spend, not a research platform.
Update C05/C14 evidence and the handoff without claiming product completion.
Milestone closeout: demonstrate this complete M5 journey:
Invoke each instrument in the browser; produce a structured prototype and
isolated runnable HTML; compare a controlled pair; save/download a synthesis
and coding handoff. Prepare the exact revision and evidence packet for Fable's
M5 review. Cross-product qualification and final user acceptance remain open.
Package complete when: a controlled paired experiment, a coding-session
handoff and a saved reusable synthesis exist with provenance; the listed cases
pass with unmeasured effects left unresolved; C05/C14 evidence is updated;
and the Fable M5 review packet is prepared.
```

### Fable review M5: Remaining product capabilities

```text
You are Fable 5.1 in Claude, independently reviewing M5: Remaining product capabilities
Read AGENTS.md and the Shared demonstration and review section of docs/build-prompts.md.
Use the supplied exact
candidate, isolated checkout/data and startup instructions. Review only; no edits
to application source or paid calls without explicit allowance.

Required demonstration:
Invoke each instrument in the browser; produce a structured prototype and isolated runnable HTML; compare a controlled pair; save/download a synthesis and coding handoff.

Review focus:
Try the distinct instruments in the browser rather than merely inspecting their
names. Exercise prototype interactions and source-linked experiments, handoffs
and synthesis. Check shared operations, source identity and cost admission.
Confirm generated artifacts cannot acquire application authority. No external
API, machine-client journey or generic execution platform is required.
Missing paid-call allowance is a stated limit, not permission to spend or
substitute a fabricated response.

Still-open scope at this boundary:
All C01-C15 scope is now implemented or explicitly identified as a gap. Cross-product qualification, infrastructure readiness and final user acceptance remain.

```

## Milestone 6: Integrated release

**Entry:** Implemented C01-C15 paths and evidence/findings from all previous milestones; no unacknowledged scope cuts.

**Working demonstration:** Run the complete cross-view, voice, exploration, comparison and output journey locally and on the served Vercel URL with no sign-in; inject failures; recover and reload; inspect dense scenes and narrow layouts; verify service/data ownership, restore instructions and the teardown plan.

**Exit and review:** Fable's release-candidate review, Astra's evidence-based resolution of material findings, user experience acceptance, local operation with configured services and hosted operation on the served Vercel URL all complete. Missing live provider evidence remains a gap; the demonstration window does not open on a candidate that fails hosted confirmation.

**Demonstration:** prepare one coherent before/after story targeting roughly
90 seconds of presentation, not a 90-second provider-response guarantee.
Clearly label prepared data, live operations, recordings and fallbacks. The
short demonstration highlights the complete product; it does not reduce scope.

**Still open:** Empirical creative superiority may remain unproven and must be described honestly. Required functionality, material unresolved defects or missing experience acceptance cannot be silently deferred.

**Review order:** complete Astra packages 29-31, run the Fable M6 review below against the release candidate, resolve material findings, then run Astra package 32. Return to Fable for hosted-operation confirmation on the served URL before the demonstration window opens; do not wait until after publication for the first release review.

### Prompt 29: qualify concurrency and bounded recovery across the product

```text
You are GPT-6 Astra in Codex, implementing a work package in M6: Integrated release.
Required prerequisites: All required capability paths implemented or explicitly listed as blockers.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Qualify and fix Minerva's integrated behavior in this new codebase.
Use its complete capability contract; do not reduce scope to make checks pass.
Canvas, exploration/goal execution and voice have independent lifecycles.

Run this journey: start Wander; speak about one branch; move/resize another;
zoom to distant work; inspect a relationship; compare and Weave selected parts;
switch Lineage/Evolution/Constellation; interrupt speech; receive proposals;
keep one; close/reopen; recover state and runs.

Inject transient provider failure, malformed output, review unavailability,
source edits, duplicate dispatch, delayed reads, voice loss and exhausted
allowance. Preserve successful siblings and all uncertain/billed attempts.
Retry/repair/replan only within one explicit combined SDK/workflow allowance.
Unknown repeated errors stop the affected action with a useful explanation.

No global busy lock, fit-on-update, remount-driven voice loss, hidden failure,
false success, silent model switch or replayed human decision is acceptable.
Conflicting writes are target-scoped; layout changes do not stale content.

Exercise representative small and dense scenes, mouse/touch/keyboard and
reduced motion. Save concrete evidence for the capability matrix. Fix failures
through their owning modules rather than another recovery framework.
Include IB01-IB06 across supported input-mode transitions, not only one isolated
journey per device. After repairing a gesture, repeat its next deliberate
pointer/keyboard/assistive action and relevant voice/update transition.
Do not publish or claim the complete product while a required journey fails.
Package complete when: the integrated journey and every injected failure
behave as specified on small and dense scenes with mouse, touch, keyboard and
reduced motion; fixes land in owning modules; and concrete evidence is saved to
the capability matrix.
```

### Prompt 30: qualify the look, feel and interaction economy

```text
You are GPT-6 Astra in Codex, implementing a work package in M6: Integrated release.
Required prerequisites: A populated working product and original design contract, not a static shell.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Review and correct Minerva against this new repository's complete product and
original design contracts. Use newly authored custom code/assets. This is a
functional experience gate, not permission to hide missing features with polish.

Render a populated atlas with two independent roots, descendants, a multi-parent
child, a semantic link, unkept/rejected work and a live or labeled fixture run.
Inspect desktop, narrow-screen, normal-zoom and overview images and interaction.
Verify original cartographic paper/ink, expressive title-first typography,
distinct but restrained card accents and legible source paths.

At desktop with panels closed, the canvas target is at least 80% of viewport
height. Primary controls must not be stacked in full-width bars. Cards expose
one principal next action and a compact contextual selection affordance, not
the full operation catalog. From a visible card, inspect is one activation;
open/choose a contextual move at most two; after source selection Weave is one.
These exclude optional user-requested editing, not mandatory hidden setup.

Trace relationships without hunting through JSON or relying only on hover.
Switch real views with one explicit action. Opening details must not resize
the canvas or disconnect voice. Verify dense scenes and keyboard/touch
equivalents, readable focus/contrast, reduced motion and non-color state.
Use IB01-IB06 to judge actual screen-space overview targets, readable
incoming/outgoing relationships and source orientation through comparison.
Record subjective friction separately from a demonstrated functional failure.

Optional tactile sound stays off by default, sparse, tied to acknowledged
events and suppressed during voice. No autoplay or correctness celebrations.
Use original custom assets and appropriately licensed standard resources.

Record annotated visual and journey evidence. Human look/feel acceptance is a
separate status; if unavailable, say pending rather than inventing a likeness
score. Fewer buttons achieved by removing capabilities is a failure. Update C15.
Judge capability, responsiveness and visual character against the product contract.
Package complete when: populated desktop, narrow, normal-zoom and overview
renderings meet the composition, activation-count, relationship-legibility,
accessibility and sound rules; annotated visual and journey evidence is
recorded; and C15 names human acceptance as recorded or pending.
```

### Prompt 31: prove completeness and architectural improvement

```text
You are GPT-6 Astra in Codex, implementing a work package in M6: Integrated release.
Required prerequisites: The full capability matrix and representative functional/visual/runtime evidence.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Audit this newly authored Minerva implementation against every required
capability C01-C15 and the backend architecture contract.
Do not substitute "core works" for completeness.

For each capability, trace a visible user workflow through application logic,
persistence/provider execution and back to the browser. Record evidence and gaps.
A stored edge is not a visible relationship;
a generic action enum is not contextual planning; a text summary is not a map;
transcription is not conversation; tabs are not implemented views.

Verify maintainability using a representative change: an ordinary new creative
operation should extend its contract/definition, generation or analysis logic,
registration and focused checks without editing canvas pointer mechanics,
voice connection lifecycle or unrelated workspace serialization. Explain any
legitimate new-data migration separately. Do not impose an arbitrary file count.
Domain code cannot depend on React, routes or provider SDKs; all transports
must share business operations. Content/layout/run writes remain independent.

Inspect infrastructure as well as modules: environment isolation, migration
execution, database pooling, durable dispatch/reconciliation, observable failures,
backup/restore instructions and reproducible local startup. Distinguish closing
the browser from stopping local services; reconcile interrupted work on restart.
Hosted data must not depend on a temporary preview expiry. Exercise the recovery path
without touching working data; no multi-region or enterprise platform is required.
Confirm custom code/assets belong to this build and dependencies have suitable licenses.

Run the appropriate existing checks and representative live/visual journeys.
Separate functional, visual, architecture, infrastructure, runtime and efficacy
statuses. Any required missing capability blocks a completion claim; only an
explicit user-approved scope change can change the contract.
Missing user experience acceptance also blocks an overall completed-product
claim, even if automated functional checks pass.
Update the matrix and a concise handoff, including all remaining blockers.
Package complete when: every C01-C15 journey is traced with evidence or a
named gap; the representative change and dependency rules are verified;
infrastructure and provenance checks are recorded; functional, visual,
architecture, infrastructure, runtime and efficacy statuses are separated; the
matrix and handoff list all blockers; and the Fable release-candidate packet is
prepared.
```

### Prompt 32: release the Vercel demonstration honestly

```text
You are GPT-6 Astra in Codex, implementing a work package in M6: Integrated release.
Required prerequisites: Fable's M6 release-candidate review, material findings resolved, user acceptance, authorized configured services and the owner's authorization to deploy.
Read AGENTS.md and the relevant product contracts; implement one connected outcome.

Deliver Minerva as a single-user, browser-only prototype with no sign-in, served
from a public Vercel deployment for a bounded demonstration window used by a small
judge panel. It is the complete spatial creative studio: relationship-rich cards
and inheritance, three real views, contextual moves, comparison/Weave, instruments,
Wander and space analysis, Agent Drive, concurrent voice and outputs. Read the
capability matrix, design acceptance and architecture/infrastructure evidence.

Ship the editable mall demo described in SPEC alongside every fully functional
tool. Demonstrate each tool on that seed prompt, preserve the resulting source
relationships and outputs, and let the person continue exploring through normal
workspace operations. Verify the blank-start path as well. Record each demo
example in the owning capability's evidence; prepared records never replace
missing live functionality, and demonstration records cannot claim fabricated
historical provider receipts.

Do not present further scope cuts as completed Minerva. All required behaviors must
have evidence; unresolved subjective acceptance stays explicit. If representative
user experience acceptance is missing, deliver a review build, not an overall
product-completion claim. Development previews may be shared as incomplete, never
relabeled complete because a deployment is Ready or a CI run is green.

Local operation stays the development loop: a loopback-bound server with
authorized database/model resources, documented startup, required running
services, persistence and recovery. Confirm same-origin request protections and
rejection of unexpected Host/Origin on every configured serving hostname.

Deploy to the authorized Vercel project following docs/setup.md: production
database and credentials separate from local and preview, text and realtime voice
through Vercel AI Gateway with a server-held credential, Vercel Workflows for
durable runs, the owner's Gateway budget and Spend Management amount configured,
and the demonstration workspace seeded. Public source is not a secret store:
confirm no secret, user data or unlicensed asset has been committed. Do not
silently change repository visibility. Never accept marketplace/legal terms for
the person. Do not add sign-in, gates or confirmation steps that slow the judges.

Use the public repository name minerva, without a version suffix. Prepare a
short demonstration of the central loop: inspect potentially recurring ideas,
discuss them while manipulating the canvas, request a specific intervention,
Weave useful contributions, and inspect the result and both parents before
deciding what to keep. A failed or inconclusive transformation stays honest.
Aim for roughly 90 seconds of presentation; do not fake fast completion or
mock a core live capability to hit that duration. Label seeded records, fresh
operations, recorded footage and fallback behavior. Keep full-product evidence
separate from this selected presentation path.

Exercise the integrated hosted journey on the served URL using real configured
services within authorization, including relationship tracing, views, contextual
choice, recombination, conversation, partial failure and reconnect; repeat the
local journey where it differs. Deliver the served URL, local startup commands,
source provenance, operating instructions, the window's dates, cost limits and
blockers. Write the teardown plan into the handoff: when the window closes,
pause or delete the deployment, which ends its OIDC access to the Gateway,
revoke the database credentials, export or delete judge data, and record what
was preserved. Do not tear down
before the owner closes the window.
Update the handoff. Functional completion is not empirical proof of creativity;
never disguise missing functionality as later optional extensions.
Milestone closeout: demonstrate this complete M6 journey:
Run the complete cross-view, voice, exploration, comparison and output journey locally and on the served Vercel URL with no sign-in; inject failures; recover and reload; inspect dense scenes and narrow layouts; verify service/data ownership, restore instructions and the teardown plan.
Prepare the exact-candidate packet for this milestone's Fable review.
Still open at this milestone: Empirical creative superiority may remain unproven and must be described honestly. Required functionality, material unresolved defects or missing experience acceptance cannot be silently deferred.
Package complete when: the complete prototype operates locally and on the served
Vercel URL with no sign-in and internal request protections; the integrated
hosted journey is exercised against configured services; budget settings, data
isolation and storage ownership are confirmed and disclosed; the served URL,
startup commands, provenance, operating instructions, window dates, cost limits,
blockers and teardown plan are delivered; the concise demonstration distinguishes
prepared, live, recorded and unavailable behavior; and the Fable hosted-operation
confirmation packet is prepared.
```

### Fable review M6: Integrated release

```text
You are Fable 5.1 in Claude, independently reviewing M6: Integrated release
Read AGENTS.md and the Shared demonstration and review section of docs/build-prompts.md.
Use the supplied exact
candidate, isolated checkout/data and startup instructions. Review only; no edits
to application source or paid calls without explicit allowance.

Required demonstration:
Run the complete cross-view, voice, exploration, comparison and output journey locally and on the served Vercel URL with no sign-in; inject failures; recover and reload; inspect dense scenes and narrow layouts; verify service/data ownership, restore instructions and the teardown plan.

Review focus:
Return READY FOR HOSTED RELEASE, CHANGES REQUIRED or BLOCKED for the candidate;
return HOSTED OPERATION CONFIRMED only after exercising the served Vercel URL as
a judge would, with no sign-in. Audit C01-C15 against running behavior and the
exact candidate revision, not the builder's completion narrative. Reproduce
representative concurrency, recovery, relationship and browser output journeys.
Inspect architecture and infrastructure evidence, plus populated desktop/mobile
views. Confirm opening and operating without sign-in, loopback binding for local
development and internal request protections on every configured hostname.
Confirm the deployed revision matches the candidate, production data is separate
from local and preview, the Gateway budget and Spend Management amount are set as
the owner specified, and the teardown plan is written. Do not execute the
teardown. Model agreement is not a substitute for user acceptance.
Sample IB01-IB06 on the final implementation and revisit cases adjacent to
recent fixes. Verify the relationship list is bidirectional in coverage while
preserving each edge's actual direction. Distinguish input simulation, physical
device observation, technical defects and user experience preferences.
Distinguish written, integrated, local/live demonstration, reviewed, accepted
and hosted facts in the handoff. A merge or a Ready deployment does not
establish hosted operation; exercise the served journey yourself.
Watch the central before/after journey without builder narration compensating
for missing behavior. Confirm the user can see the challenge, proposed change,
actual outcome and source evidence. Distinguish prepared, live, recorded and
fallback segments; a short polished presentation cannot conceal missing
capabilities, failed transformations or unusable browser outputs.

Still-open scope at this boundary:
Empirical creative superiority may remain unproven and must be described honestly. Required functionality, material unresolved defects or missing experience acceptance cannot be silently deferred.

```
