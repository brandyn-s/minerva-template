# Minerva — Roadmap

## 1. Status, authority, and scope

| Field | Value |
|---|---|
| Status | **Approved 1.1 — original long-form plan approved September 6, 2026; R0 passed; event slice prepared but inactive** |
| Date | September 6, 2026 |
| Effort | **XL** — execute as bounded gate plans, never as one undifferentiated build |
| Product authority | [INTENT.md](./INTENT.md), then approved entries in [DECISIONS.md](./DECISIONS.md), then [SPEC.md](./SPEC.md) |
| Architecture authority | [ARCHITECTURE.md](./ARCHITECTURE.md) |
| Current execution | [CURRENT_GATE.md](./CURRENT_GATE.md) is the subordinate operational record; it cannot itself grant authority or alter the authorities above or this long-form sequence |
| Event slice | [HACKATHON.md](./HACKATHON.md), evaluated against its demo contract, is prepared but inactive until a product-owner clock-start declaration is recorded |
| Scope | Greenfield first prototype through staged product evaluation and a terminal evidence-backed decision |
| Historical boundary | Searchlight, Atlas, Gestures, their repositories, schemas, deployments, prompts, and secrets are evidence only |

This file governs sequence, dependencies, stopping rules, and release gates. It cannot weaken an approved product or architecture contract. If a roadmap step conflicts with an authoritative document, the roadmap changes.

The original R0 authorization was exercised and R0 was recorded passed. R1
through R9 still require explicit product-owner authorization after their
dependencies produce the named decisive evidence. `CURRENT_GATE.md` may record
an explicitly labelled, disposable experiment that the product owner authorizes
outside gate order; that experiment cannot close, satisfy, or silently replace a roadmap
gate. A failed gate triggers
simplification or re-planning; it does not authorize bypassing the falsifier.

## 2. Goal and terminal demonstrations

Demo: A fresh-browser user can enter an ordinary editable library example or blank workspace, complete the spatial thinking loop with inspectable context and exact lineage, recover acknowledged work and preserved Paths, use bounded Searchlight and concurrent read-only Voice, and open the exact isolated Vercel build used to create a complete evaluation packet.

The roadmap has two different terminal claims:

1. **Prototype ready:** Evidence levels E0 through E6 establish that the exact build implements the approved behavior across its declared browser, provider, and audio boundaries.
2. **Product thesis supported or unsupported:** E7 applies D-008 to determine whether Minerva exposes consequential discoveries beyond a capable matched linear-chat baseline. More cards, more variation, passing tests, visual polish, and a successful deployment cannot substitute for this judgment.

The first prototype is complete only when required capabilities are implemented and the staged evaluation has produced its terminal decision artifact. The decision may truthfully be **unsupported**; the roadmap succeeds by learning the answer without concealing negative results.

## 3. Session context carried into execution

### Approved foundation

The approved foundation is stated once: product invariants `INV-001` through
`INV-012` in `SPEC.md` Section 2, decisions D-001 through D-008 in
`DECISIONS.md`, and architecture decisions A-001 through A-007 in
`ARCHITECTURE.md`. This roadmap sequences them and does not restate them.

### R0 closeout baseline (historical)

- The canonical greenfield repository and minimal Next.js shell exist; approved
  authority history precedes generated code and R0 has passed.
- Node 24.20.0 and npm 12.0.2 are locked in the repository. Vercel CLI 59.11.7
  was a development dependency at R0 closeout; it was removed on September 7,
  2026 because no script invokes it, and it is run as `npx vercel@59.11.7`
  only when a gate authorizes deployment.
- The isolated Vercel project is linked locally but undeployed.
  Browser-storage and admission namespaces are reserved; no browser database,
  provider route, credential, or product capability exists yet.
- `HACKATHON.md` prepares the event slice and its demo contract without
  implementing it.
- The approved architecture contains four named falsifying experiments:
  EXP-001 through EXP-004.
- Volatile work authorization and the exact next transition live in
  `CURRENT_GATE.md`, not in this snapshot.

### Human judgment boundary

The product owner retains authority over:

- changes to intent, decisions, success criteria, and non-goals;
- whether the canvas feels like a thinking environment rather than interface management;
- canonical example framing and must-preserve evaluation constraints;
- whether a discovery is consequential;
- interpretation of negative or mixed product evidence; and
- any later expansion into cloud workspaces, transcript ingestion, expeditions, ambient exploration, touch gestures, or Voice writes.

Agents may propose, implement, test, and assemble evidence. They may not approve their own product changes, weaken a falsifier, rank discoveries, or use model judgment as a substitute for participant judgment.

### Sequencing interpretation

The earliest product-risk test does not require every approved capability. A complete central loop can use Branch rather than Searchlight. Therefore:

- the Branch-based central loop is built first;
- the product-owner rehearsal runs immediately when that loop works;
- Searchlight and Voice remain required first-prototype work, but begin only after that early rehearsal shows the basic instrument is usable enough to justify more capability;
- accessibility and failure truth ship with every slice, never as cleanup; and
- the external matched evaluation remains the terminal product gate.

This preserves the approved scope while applying the pre-build finding that voice and orchestration must not delay the first test of the spatial thesis.

## 4. Domains and execution path

### Domains

| Domain | Role | Responsibility |
|---|---|---|
| Greenfield product/software engineering | Primary | Domain kernel, browser persistence, canvas, accessibility, AI operations, Searchlight, Voice, tests, and product integration |
| Infrastructure/Cloud | Supplementary | New repository and Vercel isolation, server routes, environments, admission state, deployment, rollback, and live proof |
| Product evaluation | Supplementary | Owner rehearsal, normalized evidence capture, matched comparison, countermetrics, and terminal decision |

### Capability matrix

| Action | Available path | Boundary |
|---|---|---|
| Local source and documentation work | apply_patch, shell, Git, Node.js, npm | Current work is bounded by `CURRENT_GATE.md` |
| Independent adapter spikes | Scoped subagents in isolated worktrees | Shared ports freeze before parallel dispatch |
| Browser-local and accessibility verification | Repository tests plus Playwright or equivalent real-browser automation | Native browser evidence outranks mocks |
| Manual visual and audio verification | Real supported browser and actual audio hardware | Simulation cannot prove media concurrency or product feel |
| Vercel deployment and readback | npx Vercel CLI plus direct HTTP/browser readback | Re-verify current CLI and project identity at execution |
| Provider execution | Versioned Minerva route with one selected provider after EXP-003 | Provider remains disabled until admission and spend gates pass |
| Human product evaluation | Consented, checkpointed evaluation process | Agents do not recruit or contact participants without explicit authorization |

### Execution route

Use the software-development chain phase by phase:

1. Read `CURRENT_GATE.md`, then the relevant sections of the approved authorities and this roadmap.
2. Use fresh, scoped subagents for independent file-level slices.
3. Keep shared domain contracts and integration in one authoritative lane.
4. Merge only after the gate's smallest decisive evidence passes.
5. Stop on its first material falsifier.
6. Record the result, decision, and any correction in JOURNAL.md.

Do not run this XL roadmap through one long autonomous loop. R2A/R2B and R6/R6V are the only planned parallel build lanes. R6V is a disposable Voice-feasibility lane and does not edit R6's shared integration files. Browser-matrix checks in R8 may run in parallel against one immutable build because they are read-only observations.

## 5. Non-negotiable constraints

- **Greenfield means isolated.** No predecessor code, package manifest, persistence, deployment metadata, analytics, secrets, domain alias, or schema enters Minerva by default.
- **Intent precedes generated code.** The approved authorities must be committed before the first scaffold or generated implementation.
- **One semantic authority.** React, the renderer, IndexedDB wrapper, provider callbacks, and Voice prompts cannot own product truth.
- **Browser-local workspace.** The server cannot store, reconstruct, synchronize, or mutate a workspace.
- **Content-free admission only.** Server admission data cannot include workspace IDs, card text, manifests, prompts, results, filenames, URLs, transcripts, or audio.
- **No silent context.** Geometry cannot change AI context. Overflow blocks before provider execution instead of truncating or summarizing.
- **No false acknowledgement.** Provider success is subordinate to durable browser commit.
- **No hidden work.** No automatic semantic retry, critic, repair, ranking, tool use, recursive follow-up, queue, cron, workflow, or closed-page continuation.
- **Continuous accessibility.** Every semantic operation gains its keyboard and structured-view path in the same slice.
- **Read-only Voice.** Voice receives no workspace mutation port and has no durable transcript.
- **Bounded provider exposure.** Long-lived secrets remain server-only; provider routes fail closed until atomic admission and hard limits are proven.
- **Evidence-class honesty.** Source, tests, local browser, deployed web, live provider, supported environment, and product outcome are distinct claims.
- **One bounded terminal review.** Verification stops when decisive evidence passes or at the first material falsifier.
- **Proof stays smaller than product work.** A helper exists only when native evidence cannot answer a material gate.

## 6. Gate policy

Every gate records:

- observable outcome;
- smallest decisive evidence;
- first material falsifier;
- fixed effort budget or stop condition;
- exact evidence level earned;
- decisions unlocked;
- negative and partial results; and
- one user-visible Demo.

Gate status is one of **not started**, **active**, **passed**, **falsified**, or **superseded**. A gate is never marked passed from file presence, test count, reviewer unanimity, a provider response without local landing, or a Vercel READY status without live readback.

When implementation discovers an in-scope material defect, fix it and return to the gate. Speculative generality is not a defect fix. If work grows more than 25 percent beyond the gate's task set, stop and re-scope before continuing.

## 7. Roadmap at a glance

| Gate | Scope | Type and mode | Depends on | Outcome | Evidence target |
|---|---|---|---|---|---|
| R0 | Critical | WRITE/BUILD · LOCAL-FAST | Approved roadmap | Greenfield runway and build controls | E0 and isolation closeout |
| R1 | Critical | BUILD/MEASURE · LOCAL-FAST | R0 | EXP-001 proves local truth | E2 plus focused E3 |
| R2A | Critical | BUILD/MEASURE · LOCAL-FAST | R1 shared ports | EXP-002 selects renderer and structured projection seam | E2/E3 |
| R2B | Critical | BUILD/MEASURE · LOCAL-FAST | R1 shared ports | EXP-003 selects provider, protocol, admission, and hard envelope | E2 plus narrow E5 |
| R3 | Critical | BUILD · LOCAL-FAST | R2A and R2B | First useful durable Branch slice | E1–E5 for the slice |
| R4 | Critical | BUILD · LOCAL-FAST | R3 | Complete Branch-based spatial loop | E1–E5 for the loop |
| R5 | Critical | MEASURE · DURABLE | R4 | Earliest product-owner rehearsal | Readiness evidence toward E7 |
| R6 | Critical | BUILD · LOCAL-FAST | R5 passes | Targeted Searchlight | E1–E5 for Searchlight |
| R6V | Critical | MEASURE · LOCAL-FAST | R5 passes | EXP-004 selects or falsifies a real Voice transport | Narrow E5 actual-audio evidence |
| R7 | Critical | BUILD/MEASURE · LOCAL-FAST | R6 and R6V | Bounded Voice integration | E1–E6 for Voice |
| R8 | Critical | BUILD/MEASURE · LOCAL-FAST | R7 | Frozen evaluation candidate | Complete E0–E6 |
| R9 | Critical | MEASURE · DURABLE | R8 | Staged matched evaluation and terminal product decision | E7 |

Dependency summary:

~~~text
R0 → R1 → [R2A | R2B] → R3 → R4 → R5 → [R6 | R6V] → R7 → R8 → R9
~~~

## 8. Wave 0 — Establish authority before implementation

### R0 — Greenfield runway

**Status:** Passed September 6, 2026. This section remains as the historical
contract; current authorization lives in `CURRENT_GATE.md`.

**Outcome:** Establish a canonical, isolated repository and the smallest controls needed to keep later generated work aligned with the approved documents.

**Budget:** At most one engineer-day. This is infrastructure and makes no product-capability claim.

| Task | Scope | Action, tool, and owner | Depends on | Expected output |
|---|---|---|---|---|
| R0.1 | Critical | Initialize the Minerva directory as a new Git repository, create its separate canonical remote, and establish the trunk; main integration lane using Git/GitHub CLI | Approved roadmap | Local and remote repository identity with no predecessor remote or history |
| R0.2 | Critical | Commit INTENT.md, DECISIONS.md, SPEC.md, ARCHITECTURE.md, ROADMAP.md, and the pre-build findings before scaffolded code; Git | R0.1 | A source commit proving intent preceded generated code |
| R0.3 | Critical | Add a short AGENTS.md pointing to the authority order, a JOURNAL.md seeded with human approvals and corrections, a concise README, and a tracked evidence index; main lane | R0.2 | Session-readable controls without duplicating the specification |
| R0.4 | Critical | Bootstrap one current Next.js App Router application only after reading the installed version's `node_modules/next/dist/docs` guidance; select and lock the supported Node/package-manager and Vercel CLI versions; Node/npm | R0.3 | Minimal application shell, dependency lockfile, and repository-native check commands |
| R0.5 | Critical | Create and link a new Vercel project; reserve a browser-database namespace and separate Preview/Production admission namespaces; keep provider routes absent and disabled; main lane using the repository-locked Vercel CLI | R0.4 | Isolation closeout naming the new project, remote, tool versions, and reserved namespaces, with no production capability claim |
| R0.6 | Critical | Add one bounded check entrypoint, an initial gate-status receipt format, secret scanning, and explicit ignore rules for content-bearing evaluation artifacts; main lane | R0.4 | The original repeatable check and evidence convention |

**Post-R0 simplification:** The 1.1 amendment replaces the generic receipt
schema, validator, and gate counter with the subordinate `CURRENT_GATE.md`, the
append-only `JOURNAL.md`, and native evidence. Git history preserves the
original R0 machinery and closeout; the secret scanner, dependency audit, and
ordinary check remain active.

Demo: Repository history shows the approved intent commit before generated code;
the linked Vercel project and reserved browser/admission namespace names are
unique to Minerva. This is an infrastructure demo, not evidence that the
product works or that a browser database exists.

**Smallest decisive evidence:** Git history, remote/project identifiers, tracked control files, dependency lockfile, one passing baseline check, and a source inspection showing no predecessor linkage or client-exposed secret.

**First material falsifier:** Any predecessor repository state, deployment metadata, persistent data, secret, alias, analytics, or unstated product contract is imported.

**Exit decision:** Confirm the implementation boundary and make R1 eligible for
a separate product-owner authorization. R0 does not itself authorize EXP-001.
The hackathon slice, when active, has its own bounded authorization in
`CURRENT_GATE.md`. No renderer, provider, admission store, or Voice transport
is selected here.

## 9. Wave 1 — Prove truth before pixels

### R1 — EXP-001: interleaved local truth

**Outcome:** Prove or reject the Revision/Moment/Path model, transactional repository, one-writer rule, and cancellation authority before a production canvas exists.

**Budget:** Two engineer-days. Simplify immediately after the first architecture-level falsifier.

| Task | Scope | Action, tool, and owner | Depends on | Expected output |
|---|---|---|---|---|
| R1.1 | Critical | Define framework-independent domain records, typed commands, CommitPlan, repository ports, canonical versioned ContextManifest/hash and closed stage-input schemas, deterministic IDs/clocks, and fake async-result inputs; domain lane | R0 | No React, DOM, IndexedDB, provider, or renderer types enter the kernel; later provider fixtures cannot invent a competing manifest contract |
| R1.2 | Critical | Implement the immutable-version journal, rebuildable projection, Moment/Path rules, dependency-aware Undo/Redo, authority epochs, and exact Redo fixtures; domain lane | R1.1 | Pure contract suite for semantic truth |
| R1.3 | Critical | Compare native IndexedDB, idb, and Dexie only against the required transaction, migration, blocked-open, failure-injection, and testability contract; repository lane | R1.1 | One selected wrapper or native path with recorded rejection reasons |
| R1.4 | Critical | Exercise the full EXP-001 sequence through a disposable text/debug surface in a real browser; browser harness | R1.2 and R1.3 | Revision-by-revision record of normal, partial, interrupted, and corrupt cases |
| R1.5 | Critical | Select the object-store split, indexes, migration strategy, writer primitive, and last-good-revision recovery procedure; record the decision in JOURNAL.md | R1.4 | Closed R1 implementation choices without altering A-002 or A-003 |
| R1.6 | Critical | Retain only the proven kernel/repository foundation and discard or quarantine the disposable debug surface; main integration lane | R1.5 | Product foundation independent of the spike UI |

Demo: A real-browser debug surface performs create, edit, move, Focus, simulated Searchlight authorization, an arriving result, an unrelated edit, failure, Retry, Harvest, Undo/Redo, Continue from history, a late response, reload, second-tab write, partial write, and recoverable corruption while displaying the exact Revision, Moment, Path, and authority outcome.

**Smallest decisive evidence:** Pure domain contracts plus one real-browser IndexedDB sequence showing atomic acknowledgement, preserved futures, exact no-provider Redo, read-only secondary tab behavior, and truthful last-good recovery.

**First material falsifier:** False acknowledgement, destroyed future, wrong Undo target, provider work during Redo, late cross-Path landing, silent second writer, failure to expose the newest internally valid Revision, or any requirement for framework objects in the kernel.

**Exit decision:** Select repository implementation details and authorize the two R2 adapter spikes. If falsified, revise the architecture before canvas work.

## 10. Wave 2 — Select volatile adapters in parallel

R2A and R2B begin only after R1 freezes their shared domain and port contracts. They use isolated worktrees and do not edit the same implementation files.

### R2A — EXP-002: disposable renderer and structured projection

**Outcome:** Select the smallest renderer that remains a disposable visual projection while the sibling structured representation can complete the same semantic actions.

**Budget:** Two engineer-days total across no more than two candidates.

| Task | Scope | Action, tool, and owner | Depends on | Expected output |
|---|---|---|---|---|
| R2A.1 | Critical | Paper-screen tldraw, React Flow, and custom DOM/SVG against production licensing, editing, regions, links, accessibility, and second-store risk; renderer lane | R1 | At most two candidates proceed |
| R2A.2 | Critical | Define one stable-ID SceneProjection and device-neutral CanvasIntent protocol over the approved kernel; shared contract lane | R1 | Renderer-independent scene and interaction seam |
| R2A.3 | Critical | Implement disposable central-slice adapters for the surviving candidates using the same representative subset of the canonical library example, without native persistence or product History; isolated renderer worktrees | R2A.1 and R2A.2 | Comparable card, region, relationship, Focus, selection, movement, pan, zoom, and orientation slice rather than an empty-canvas beauty test |
| R2A.4 | Critical | Build the sibling structured view against the same projections and commands, including keyboard/non-drag movement and one semantic Undo/Redo; accessibility lane | R2A.2 | No duplicate semantic store |
| R2A.5 | Critical | Predeclare an initial interaction corpus and thresholds, then profile both candidates under simulated Searchlight and audio update load; real browser | R2A.3 and R2A.4 | Measured comparison and one selected renderer |
| R2A.6 | Critical | Record owner judgment on whether the surface feels like a thinking environment or graph administration; product owner | R2A.5 | Qualitative decision alongside technical evidence |

Demo: The selected candidate supports an editable card, Group/Region, relationship, Focus drop preview, rich edit, multi-select, pointer and keyboard movement, semantic Undo/Redo, orientation recovery, and a sibling structured operation; replacing the adapter preserves semantic state.

**Smallest decisive evidence:** One real-browser central slice, programmatic and keyboard inspection, a license decision, bounded performance measurements, and rebuild from canonical projection after renderer disposal.

**First material falsifier:** Renderer state or history becomes semantic authority, the structured view depends on geometry, production licensing remains unresolved, the predeclared interaction budget fails, or the owner experiences the surface as graph management.

**Exit decision:** Select renderer, scene protocol, initial supported corpus, and initial interaction thresholds.

### R2B — EXP-003: bounded provider, admission, and cancellation

**Outcome:** Select one generation path and prove that a publicly reachable route cannot exceed its disclosed work or land content after local authority is revoked.

**Budget:** Two engineer-days.

| Task | Scope | Action, tool, and owner | Depends on | Expected output |
|---|---|---|---|---|
| R2B.1 | Critical | Define and contract-test the closed versioned request, result, and normalized-failure schemas for every approved stage using R1's canonical manifest/hash contract and deterministic manifest fixtures; provider lane | R1 | No arbitrary prompt, model, tool, stage, workspace endpoint, or second context contract |
| R2B.2 | Critical | Re-read current official provider, Vercel, and installed Next.js documentation; smoke each viable provider/configuration with the exact intended parameters and a representative structured stage | R2B.1 | Reachability and schema evidence rather than a capability listing |
| R2B.3 | Critical | Implement and contention-test a content-free AdmissionLedger with finite capabilities, one versioned server-maximum policy, idempotent worst-case reservations, reconciliation, expiry, environment separation, and kill switch; server lane | R2B.1 | Atomic spend authority with no workspace content and one policy ID shared by reservation and provider enforcement |
| R2B.4 | Critical | Exercise valid, malformed, oversized, adversarial, replayed, expired, exhausted, and cross-environment requests; server contract harness | R2B.2 and R2B.3 | Specific rejection and zero-work evidence for denied requests |
| R2B.5 | Critical | From a clean real browser, exchange a one-use invitation capability, strip it from the URL, inspect Secure/HttpOnly/SameSite cookie behavior, then attempt anonymous, expired, replayed, exhausted, killed, and cross-environment access; browser/server harness | R2B.3 and R2B.4 | Actual browser admission works and every denial produces zero reservation and zero provider execution |
| R2B.6 | Critical | Run every closed AI stage once against the candidate provider with hidden retries disabled, explicit deadlines, sanitized errors, the R2B server-maximum policy, and actual usage receipts; protected deployment | R2B.2, R2B.3, and R2B.5 | Provider/configuration and immutable server-maximum envelope selection |
| R2B.7 | Critical | Cancel with two simulated arms active, inject a delayed response, reload, and attempt landing on a departed Path; browser/server harness | R2B.4 and R2B.6 | Local revocation prevents every late commit |

Demo: From a clean browser, a one-use invitation becomes a Secure, HttpOnly, SameSite session credential and disappears from the URL. The protected deployed route then accepts exactly one bounded typed stage, atomically reserves allowance, returns one closed terminal object or normalized failure, and cannot exceed the configured allowance under contention or replay. Anonymous, expired, replayed, killed, and cross-environment requests perform zero work. A deliberately late valid response cannot mutate the browser workspace.

**Smallest decisive evidence:** One real call for every stage class; strict malformed/oversized rejection; an admission contention result; real-browser capability exchange, URL stripping, cookie attributes, and zero-work denials; separate Preview/Production allowance; one shared maximum-policy ID; sanitized logs; and a cancelled late response rejected by the kernel.

**First material falsifier:** Hidden retry or repair, silent truncation, arbitrary tools or context, admission race, cross-environment spend, browser-visible long-lived secret, content-bearing ledger/log, or late landing.

**Exit decision:** Select provider/configuration, structured-output mechanism, immutable server-maximum request/token/time/spend envelope and policy ID, admission store, evaluator-capability exchange, and provider-retention disclosure. Later product/session limits may be lower; exceeding this maximum reopens R2B. Provider routes remain disabled if atomic hard bounds cannot be demonstrated.

## 11. Wave 3 — Deliver the first useful vertical slice

### R3 — First useful durable Branch slice

**Outcome:** A fresh-browser user can begin with the canonical editable example or a blank canvas, form explicit context, invoke one real Branch, and return after reload to the acknowledged result and its exact cause.

**Budget:** Three engineer-days. Favor one coherent path over broad but disconnected controls.

| Task | Scope | Action, tool, and owner | Depends on | Expected output |
|---|---|---|---|---|
| R3.1 | Critical | Build the first encounter with equally visible **Open the library example** and **Start blank** choices; product shell lane | R2A | No tour, sign-in, static showcase, or hidden blank path |
| R3.2 | Critical | Add the ordinary-card substrate: create, edit, move, remove/restore, lightweight semantic role, pan/zoom, selection/multi-selection, and orientation recovery; canvas lane | R2A | An editable spatial surface backed only by committed projections |
| R3.3 | Critical | Add Groups/Regions, explicit membership, labeled relationships, persistent **Focus — AI sees N cards**, selected targets, direct Add/Remove/Clear controls, and an inspectable inclusion preview; domain and projection lanes | R3.2 | Visible context semantics with no geometry inference |
| R3.4 | Critical | Add bounded local intake for paste, client-side `.txt` and `.md`, and URL reference cards; browser adapter lane | R3.2 | Ordinary editable source cards with visible provenance and zero automatic network/provider work |
| R3.5 | Critical | Implement the canonical manifest compiler and compact context receipt; context lane | R3.3 | Deterministic versioned payload/hash invariant under pure view changes and exact under explicit context changes |
| R3.6 | Critical | Route Branch through the shared authorization, manifest, admission, transport, normalization, kernel-validation, and durable-commit path; operation lane | R2B and R3.5 | At most one durable result outside Focus, exact `derived from` lineage, and visible attempt/failure state |
| R3.7 | Critical | Provide the same create/edit/context/Branch/receipt/Undo/Redo outcomes in the sibling structured projection and keyboard path; accessibility lane | R3.2 through R3.6 | Semantic parity without geometry interpretation |
| R3.8 | Critical | Exercise the vertical slice locally and in one protected Vercel Preview deployment with one real provider call; integration lane | R3.6 and R3.7 | E1–E5 receipts for this slice, not a full-product release claim |

Demo: In a fresh browser, open the neighborhood-library example, change a card, add an explicit card to Focus, select a target outside Focus, inspect **AI sees N cards**, invoke Branch without a mandatory direction, keep editing while it runs, inspect the landed card's frozen receipt and lineage, reload, and find the exact acknowledged result. Repeat the semantic path by keyboard in the structured view. Then show that a pasted source, local file, and URL reference neither enter Focus nor cause network work.

**Smallest decisive evidence:** AC-001 through AC-004 and AC-013 on the central slice, one real protected provider call with a durable local landing, and a reload proving the result and operation record survived.

**First material falsifier:** The first encounter hides either start path; canvas geometry changes AI input; intake uploads or fetches; Branch edits its source, lands inside Focus, or reports success before local commit; a generated result requires per-result approval; or a keyboard user cannot achieve the same semantic outcome.

**Exit decision:** Confirm that the common operation pipeline and first-run surface can support the full central loop. Do not broaden the intake or add Searchlight or Voice here.

## 12. Wave 4 — Complete the spatial thinking loop

### R4 — Complete Branch-based spatial loop

**Outcome:** Complete the approved central loop with neutral comparison, contribution-level recombination, explicit harvest, semantic History, and preserved Paths before adding Searchlight or Voice.

**Budget:** Four engineer-days. Any capability added here must use the R3 context and operation paths rather than create a parallel workflow.

| Task | Scope | Action, tool, and owner | Depends on | Expected output |
|---|---|---|---|---|
| R4.1 | Critical | Finish direct, selection-local structure and relationship actions, including the reserved `member of` and `derived from` facts plus optional free-form labels; domain/UI lane | R3 | Inspectable meaning without spatial inference or graph-editor ceremony |
| R4.2 | Critical | Add neutral Compare for at least two explicit selected cards through the common pipeline; operation lane | R3.6 | Durable source-backed commonalities, differences, tensions, and tradeoffs with no winner |
| R4.3 | Critical | Add Recombine with explicit contribution selection from at least two parents; operation and provenance lanes | R4.2 | One editable child whose exact inherited contributions can be reconstructed |
| R4.4 | Critical | Add standalone explicit Harvest for a chosen nonempty context; operation lane | R4.2 | Concise source-linked consequences and limitations without fabricated consensus |
| R4.5 | Critical | Expose semantic Undo/Redo, History preview, dependency explanations, **Continue from here**, active Path, and preserved former futures; history UI lane | R4.1 through R4.4 | Meaningful action order independent of async arrival and zero-spend exact Redo |
| R4.6 | Critical | Complete one-writer UX, blocked-open handling, last-good recovery, interrupted-operation truth, and local operation during provider failure; persistence/failure lane | R4.5 | No false durability, silent takeover, hidden resume, or offline queue |
| R4.7 | Critical | Extend the structured projection, keyboard actions, names, state, focus management, and bounded live announcements for every R4 semantic outcome; accessibility lane | R4.1 through R4.6 | Continuous parity rather than a late accessibility replica |
| R4.8 | Critical | Run the complete canonical-example loop locally and on one protected Preview using real integrated Compare, Recombine, and Harvest calls; include durable landing/provenance/reload plus one normalized provider failure, retry, unrelated edit, Undo/Redo, and Path departure; integration lane | R4.7 | Traceable AC-005–AC-007, AC-012, AC-014, AC-017, and AC-018 evidence at E1–E5 for the exact loop build |

Demo: Starting from the example, explicitly structure and focus material, Branch, neutrally Compare two selected cards, Recombine named contributions, Harvest a chosen context, inspect lineage versus History, preview an older Moment, Continue from there, and reload with both Paths preserved. Undoing and redoing an AI Moment restores its exact durable consequences without a provider call. A second tab is visibly read-only, and a persistence or provider failure never produces a false success.

**Smallest decisive evidence:** Local and protected-deployment real-browser traces showing live Compare, Recombine, and Harvest results durably land with exact manifests/contributions; one dependency-aware Undo; one preserved former future after reload; zero provider requests during Redo; one normalized provider failure/recovery path; and structured-view parity.

**First material falsifier:** Compare ranks a winner; Recombine cannot identify exact parent contributions; Harvest invents agreement or hides a failed source; async arrival corrupts action order; Undo destroys a future or permits a dependent orphan; Redo regenerates; recovery claims an uncommitted state; or managing structures displaces the thinking work.

**Exit decision:** Freeze a coherent Branch-based rehearsal build. If the central loop is not understandable and useful without Searchlight or Voice, simplify the implicated interaction before adding either capability.

## 13. Wave 5 — Test the instrument at the earliest responsible point

### R5 — Product-owner rehearsal

**Outcome:** Learn whether the Branch-based canvas is usable as a thinking instrument and whether the evidence contract can capture a consequential discovery before investing in Searchlight and Voice.

**Mode:** MEASURE · DURABLE. This is the first product-risk gate, not a release or comparative product claim.

**Budget:** One prepared rehearsal plus at most one focused repair-and-rerun of the smallest implicated surface.

| Task | Scope | Action, tool, and owner | Depends on | Expected output |
|---|---|---|---|---|
| R5.1 | Critical | Implement only the evaluation-build `EvaluationPacketAssembler` needed for a deliberate local export of the exact WorkspaceBundle, manifests, lineage/contributions, operations, History/Paths, failures, configuration, and resource metadata; prepare task, source inventory, constraints, pre-session directions, discovery statements, and friction notes in the study process outside the product; evaluation lane | R4 | Local export plus study packet, with no silent upload and all content-bearing artifacts ignored by Git |
| R5.2 | Critical | Rehearse the canonical library example from a clean local state without coaching from implementation notes; product owner | R5.1 | Onboarding, central-loop, and packet-assembly defects |
| R5.3 | Critical | Run one genuine current ambiguous problem in a separate clean browser profile or equivalent evaluation-only origin/database namespace—not through a product New/Reset or multi-workspace feature; product owner | R5.2 | Up to three participant-authored provisional consequential shifts, or an explicit none |
| R5.4 | Critical | Reconstruct each provisional shift from visible Focus/structure, Branch, Compare, Recombine, Harvest, or preserved Path evidence; product owner with evidence assembler | R5.3 | Traceable mechanism support or an honestly unqualified claim |
| R5.5 | Critical | Record separately whether the primary surface felt responsive and helped thinking or felt like graph management; product owner | R5.3 | Product-feel judgment distinct from technical correctness |
| R5.6 | Critical | If falsified, repair only the smallest named interaction and rerun once; integration lane | R5.4 and R5.5 | One bounded correction, not a redesign-by-iteration loop |

Demo: The product owner completes the canonical example and one real ambiguous problem without an operator driving the UI, identifies up to three provisional consequential shifts or explicitly records none, and reconstructs any claimed shift from the product's visible evidence. The packet makes failures, abandoned paths, friction, and negative judgments as visible as successes.

**Smallest decisive evidence:** A complete owner packet in either outcome, one unassisted central-loop trace, a separate graph-burden judgment, and all observed friction ranked by whether it blocks the spatial thesis. Passing readiness additionally requires at least one participant-authored provisional consequential shift with a reconstructable Minerva contribution. `None` is valid negative evidence but cannot pass R5.

**First material falsifier:** The owner cannot reach or understand the loop without hidden coaching; context or lineage cannot explain a claim; canvas operation consumes attention comparable to rebuilding context in chat; or the same material defect recurs after the one focused repair.

**Exit decision:** Pass only if the instrument is usable enough and produces at least one provisional thinking change that justifies adding the already-approved Searchlight and Voice capabilities. Passing does not call that shift D-008-qualified and does not establish superiority to chat; delayed endorsement belongs to the terminal evaluation. An explicit `none` or failed rerun stops the current build direction and requires simplification or a new product/architecture decision.

## 14. Wave 6 — Add targeted divergence through the common operation path

### R6 — Targeted Searchlight

**Outcome:** Add the first Searchlight as one inspectable three-approach sweep whose generation arms are isolated, controllable, durable, neutral, and fully integrated with semantic History.

**Budget:** Four engineer-days. No workflow framework, agent framework, recursive generation, or adaptive follow-up is permitted.

| Task | Scope | Action, tool, and owner | Depends on | Expected output |
|---|---|---|---|---|
| R6.1 | Critical | Add the closed approach-selection stage and durably commit exactly three context-specific plain-language briefs before any arm begins; Searchlight lane | R5 passes | One visible intended move and distinguishing basis per slot, with structural failure blocking all arms |
| R6.2 | Critical | Add the page-scoped scheduler with exactly three fixed slots, maximum concurrency two, factual queued/running/terminal states, and product/session ceilings at or below R2B's versioned server maximum; operation lane | R6.1 | Small bounded coordinator rather than a durable workflow; reservation and enforcement cite one maximum-policy ID |
| R6.3 | Critical | Prove that each arm receives the identical frozen invocation manifest plus only its own brief; context/provider contract lanes | R6.1 and R6.2 | Captured requests with no sibling brief, result, later revision, or hidden whole-workspace context |
| R6.4 | Critical | Land valid arm results independently as ordinary cards outside Focus and preserve every partial, failed, timed-out, interrupted, or cancelled attempt; kernel/UI lane | R6.2 and R6.3 | Completion order conveys no ranking and one failure cannot erase siblings |
| R6.5 | Critical | Add Pause, Resume, and Cancel with original-input continuation, revoke-before-abort authority, retained landed work, and injected-late-result rejection; operation/UI lane | R6.4 | Control behavior remains truthful under races and page lifecycle changes |
| R6.6 | Critical | Add the single eligible derived Harvest, insufficient-contrast state, explicit per-arm Retry Moment, updated Harvest without rewrite, and exact partial/complete assessment; operation/history lane | R6.4 and R6.5 | Old attempts, failures, assessments, and Harvests remain inspectable |
| R6.7 | Critical | Represent one invocation as one expandable top-level History Moment; implement Searchlight Undo/Redo/Paths and equivalent keyboard/structured controls; history/accessibility lane | R6.6 | User-action ordering and zero-spend exact Redo |
| R6.8 | Critical | Run adversarial isolation, concurrency, partial-result, cancellation, reload, retry, and History scenarios against fake and real bounded transports; integration lane | R6.7 | AC-008 through AC-011 at their appropriate evidence levels |

Demo: Invoke Searchlight and inspect three briefs before generation. Observe two running and one queued while continuing to edit the canvas. Pause queued work, resume against the original inputs, cancel, and inject a late result; already landed cards remain. In a separate run, let one arm fail and a two-arm Harvest land, make an unrelated edit, retry the failed arm, receive a new result and three-arm Harvest, then Undo and Redo only the Retry Moment with zero provider calls.

**Smallest decisive evidence:** Captured stage requests proving isolation; a measured concurrency maximum of two; durable incremental cards; distinct failure, timeout, interruption, and cancellation states; an eligible two-arm Harvest; exact Retry-Moment Undo/Redo; and an injected late response that cannot land.

**First material falsifier:** Briefs are chosen after arm output; an arm sees sibling material; a hidden stage, retry, ranking, or repair executes; the canvas blocks; Pause or Resume changes input; Cancel permits a late commit; partial work says complete; a later retry rewrites earlier evidence; or Redo spends.

**Exit decision:** Confirm Searchlight's product/session envelope within R2B's immutable server maximum and its integration with the common operation pipeline. Any proposed increase beyond that maximum reopens R2B's contention, denial, and zero-work evidence. Do not add multi-generation behavior, ambient exploration, or a procedure catalog.

### R6V — EXP-004: Voice transport feasibility

R6V may run in parallel with R6 after R5 passes. It is a disposable feasibility lane and cannot delay or alter Searchlight's fixed operation contract.

**Outcome:** Select or falsify a real-browser Voice transport early enough that an infeasible required capability does not remain hidden until final integration.

**Budget:** Two engineer-days total across no more than two transport candidates.

| Task | Scope | Action, tool, and owner | Depends on | Expected output |
|---|---|---|---|---|
| R6V.1 | Critical | Re-read current official transport/provider guidance and predeclare actual-browser tests for authorization, latency, playback, barge-in, echo, retention, spend, route change, suspension, and expiry; Voice spike lane | R5 passes | Bounded EXP-004 protocol and disclosed candidates |
| R6V.2 | Critical | Create a disposable page-scoped media owner over the R4 canvas without workspace context integration or mutation capability; Voice spike lane | R6V.1 | Renderer remount and active canvas manipulation cannot own media state |
| R6V.3 | Critical | Spike at most two transports using server-minted short-lived authority and actual microphone/speaker paths; Voice spike lane | R6V.2 and R2B | Real round-trip, playback, interruption, credential, latency, and resource evidence |
| R6V.4 | Critical | Exercise permission denial, Mic off, Stop speaking, spoken/typed interruption, self-echo, output failure, route change, suspension, credential expiry, and session allowance; real supported browser/audio hardware | R6V.3 | Measured selection with unsupported routes and rejection reasons, or an explicit falsification |

Demo: With the R4 canvas open, start a disposable Voice session, speak and hear an actual response while moving and editing cards, barge in, stop playback, deny or lose an input route, and inspect truthful session and allowance state. The spike has no workspace context or command port and leaves no durable conversation or audio.

**Smallest decisive evidence:** Actual microphone/playback and interruption on each candidate; measured latency and canvas responsiveness; self-transcription, suspension, expiry, retention, credential, and spend observations; and a recorded selection or falsification.

**First material falsifier:** Every candidate causes canvas/media contention, failed barge-in, self-transcription, excessive credential authority, unbounded use, false media state, or unavoidable durable unpinned conversation/audio.

**Exit decision:** Select the transport and provisional credential/retention envelope for integration, or stop the current first-prototype direction because approved Voice cannot be delivered truthfully. Do not retain the spike UI as product code.

## 15. Wave 7 — Prove and integrate the bounded Voice companion

### R7 — Bounded Voice integration

**Outcome:** Integrate the R6V-selected transport so Voice remains concurrent with the canvas, visibly context-bound, concise, page-scoped, and structurally incapable of writing to the workspace.

**Budget:** Three engineer-days for the selected integration.

| Task | Scope | Action, tool, and owner | Depends on | Expected output |
|---|---|---|---|---|
| R7.1 | Critical | Place one page-scoped `VoiceSession` above the canvas subtree using the selected transport and implement distinct Start voice, Mic off, Stop speaking, and End voice controls; application lane | R6 and R6V | Renderer remounts cannot own or silently restart media |
| R7.2 | Critical | Bind each spoken boundary, typed submission, or eligible Active contribution to the latest exact committed manifest and current selection; context lane | R7.1 | Expandable **Voice saw Focus N + M selected** receipt and truthful stale/overflow behavior |
| R7.3 | Critical | Implement Quiet by default and session-only Active with coalesced eligible checkpoints, one pending unsolicited contribution, no self-recursion, and a one-time provider-call disclosure; Voice policy lane | R7.2 | Persistent context awareness without unsolicited chatter from ordinary canvas activity |
| R7.4 | Critical | Give Voice only context-query and ephemeral-highlight ports; test mutation refusals and ambiguous-reference clarification across every workspace command and AI action; authority lane | R7.2 and R7.3 | Architectural read-only guarantee, not prompt-only restraint |
| R7.5 | Critical | Integrate synchronized spoken/typed turns, concise output, actual barge-in, self-transcription prevention, text degradation, truthful media failures, and final hard session/inference/spend limits; media lane | R7.1 through R7.4 | Bounded concurrent conversation that yields the floor |
| R7.6 | Critical | Keep captions and conversation memory-only; add explicit pin/drag of one visible utterance through the ordinary workspace command path; persistence lane | R7.4 and R7.5 | One durable card and History Moment, with no durable unpinned transcript or raw audio |
| R7.7 | Critical | Stress Voice with active canvas editing and Searchlight; repeat on the proposed browser/input/audio matrix and record unsupported routes; real environment | R7.5 and R7.6 | AC-015 and AC-016 plus a provisional E6 boundary |

Demo: Start Voice explicitly in Quiet, speak and type while moving and editing the canvas, inspect the exact frozen context receipt, turn on Active and receive at most one brief contribution after an eligible checkpoint, barge in during playback, degrade audio output to text, and ask Voice to mutate the workspace. It refuses and points to the direct action. Pin one interrupted utterance, reload, and recover only that ordinary card—not the conversation or audio. Run Searchlight while Voice and canvas interaction remain responsive.

**Smallest decisive evidence:** Actual microphone and playback in each claimed environment; measured first-audio and interaction behavior; successful barge-in without assistant self-transcription; exact context receipts; code-level absence of a Voice mutation port; session/resource ceiling receipts; and storage inspection after pin, reload, and end-session.

**First material falsifier:** Canvas/media contention; failed barge-in; assistant audio re-enters as user speech; stale, hidden, inferred, or truncated context; a browser-visible long-lived secret; unbounded calls or spend; Voice mutation or queued action; false connection state; or durable unpinned conversation/audio.

**Exit decision:** Confirm the integrated model/voice, final credential envelope, supported audio routes, and session limits. If integration fails despite R6V feasibility, Voice is an explicit prototype falsifier—not permission to weaken the approved contract or substitute a non-concurrent chat panel.

## 16. Wave 8 — Freeze the evaluation candidate

### R8 — Supported, deployed prototype candidate

**Outcome:** Produce one immutable build that satisfies the full approved first-prototype contract at E0–E6 and can be used without changing conditions during matched evaluation.

**Budget:** Three engineer-days, including one bounded terminal review. This gate closes open operational values; it does not add product scope.

| Task | Scope | Action, tool, and owner | Depends on | Expected output |
|---|---|---|---|---|
| R8.1 | Critical | Measure the canonical example, owner-rehearsal workspace, preserved Paths, partial Searchlight, and simultaneous Voice load; record supported browser/input/viewport/audio/capacity and latency thresholds from observed behavior; performance lane | R6 and R7 | Closed values for every required `[OPEN]` operational boundary, with unsupported cases named |
| R8.2 | Critical | Profile the main thread and extract at most one coarse deterministic worker workload only if a repeated measured breach names it; performance lane | R8.1 | Responsive core without weakening durability, accessibility, context, or failure truth |
| R8.3 | Critical | Finish evaluation-only local packet assembly, consent-aware export, build/configuration receipts, and ignore rules; evaluation lane | R5 and R8.1 | Normalized packets without product telemetry or committed participant content |
| R8.4 | Critical | Exercise AC-001 through AC-018 at the lowest decisive evidence rung that supports each claim, including browser restart, failure injection, real provider, actual audio, keyboard, and structured-view paths; integration lane | R8.1 through R8.3 | Complete evidence index with failures retained |
| R8.5 | Critical | Inspect client bundles, routes, logs, headers, storage, Markdown rendering, untrusted intake, admission contention, kill switch, environment separation, and retention disclosures; security/privacy lane | R8.4 | No client secret, workspace upload, content-bearing ledger/log, unsafe rendering, or fail-open provider path |
| R8.6 | Critical | On a disposable canonical-origin database, create acknowledged state under schema N, migrate and mutate under N+1, serve N again and prove it refuses mutation truthfully, then return to N+1 and recover the exact state; persistence/release lane | R8.4 and R8.5 | Older code cannot rewrite, reset, or silently downgrade newer browser-local state during alias rollback |
| R8.7 | Critical | Pin one exact source revision and configuration; deploy it to the isolated Vercel project; verify immutable URL, READY state, HTTP route behavior, interactive browser behavior, provider landing, and actual audio; release lane | R8.5 and R8.6 | One exact protected evaluation build with E4/E5 readback |
| R8.8 | Critical | Run one bounded terminal review of authority alignment and first material falsifiers; the product owner repeats the unassisted central loop plus a bounded Quiet/Active Voice rehearsal on the final surface and records first-screen clarity, context predictability, unsolicited-contribution relevance, interruption, refusal behavior, trust, and thinking-versus-graph burden; one independent reviewer checks the relevant evidence contract | R8.7 | One final-surface owner and Voice-trust regression record, one independent contract review, and at most one material repair cycle |
| R8.9 | Critical | Re-run only evidence invalidated by any material repair, freeze task/source/practice/model/configuration, and promote the canonical alias only when decisive readback still passes; release/evaluation lanes | R8.8 | Frozen candidate and complete E0–E6 release receipt |

Demo: From the immutable deployment in every supported environment, complete the central loop, Searchlight control and recovery, Voice concurrency and pinning, keyboard/structured equivalent, reload/restart recovery, and a deliberate provider or storage failure. Exercise Quiet and Active as a human user. On a disposable canonical origin, prove older code refuses to mutate a newer schema and that returning to the newer build recovers the exact acknowledged state. Inspect the exact source/deployment/configuration identity and export one normalized evaluation packet. Local canvas work remains available when provider or admission service is unavailable.

**Smallest decisive evidence:** One evidence index mapping AC-001–AC-018 to exact source and environment; native browser/network/storage/audio observations; admission and kill-switch receipts; the N→N+1→N→N+1 rollback fence; immutable Vercel URL with HTTP and interactive readback; and the bounded owner/Voice-trust plus independent contract review.

**First material falsifier:** Any unsupported environment is claimed as supported; a required acceptance scenario fails; older code can mutate, reset, or silently downgrade a newer local schema; workspace content reaches unintended server storage or logs; a secret reaches the client; deployment readback differs from the frozen revision; Voice/provider proof is simulated; Active is materially distracting or untrustworthy; or a repair changes an evaluation condition without invalidating the old evidence.

**Exit decision:** Declare one evaluation candidate and freeze it. E0–E6 are product-operability evidence only; they do not support the consequential-discovery thesis.

## 17. Wave 9 — Run the terminal product evaluation

### R9 — Staged matched evaluation and decision

**Outcome:** Apply D-008 without substituting output volume, model judgment, or visual preference for participant-owned consequential discovery, then publish a truthful supported-or-unsupported decision.

**Mode:** MEASURE · DURABLE. This is a bounded product study, not an engineering iteration loop.

**Budget:** Up to three initial matched pairs, checked sequentially against the predeclared early-stop ledger. At most two additional valid pairs may run only when mixed or invalid evidence can change the declared decision.

| Task | Scope | Action, tool, and owner | Depends on | Expected output |
|---|---|---|---|---|
| R9.1 | Critical | Freeze the canonical task, source packet, constraints, unrelated mechanics-only practice, exact Minerva build, thirty-minute period, packet schema, invalidation and pair-by-pair early-stop rules, and evidence-handling/access/retention/deletion procedure; select the exact capable ordinary linear-chat surface and its allowed normal capabilities, model/config visibility, transcript capture, and available latency/resource receipts; evaluation owner | R8 | Preregistered conditions, executable baseline contract, and approved evidence custody before recruitment or participant content |
| R9.2 | Critical | Run one unrelated-problem dry run of both conditions; verify task/source delivery, ordinary baseline capability, model/version match where controllable, transcript/workspace capture, timing, resource receipts, blinding transform, and every unavoidable mismatch; evaluation owner | R9.1 | Runnable study path whose known confounds are preregistered and whose claim is narrowed accordingly |
| R9.3 | Critical | Product owner authorizes recruitment/contact and forms up to three comparable matched pairs: one Minerva participant and one capable linear-chat participant per pair; product owner | R9.2 | Consented pair sequence without a deliberately weakened baseline |
| R9.4 | Critical | Before each measured session, freeze the participant's known directions, relationships, tensions, constraints, and intended next action; participant/moderator | R9.3 and open stop ledger | Condition-neutral pre-session inventory |
| R9.5 | Critical | Run mechanics-only practice on an unrelated problem, then the current pair's measured sessions without coaching; Voice remains off in both primary conditions; moderator | R9.4 | Comparable task/time/source/model conditions and resource receipts |
| R9.6 | Critical | Collect no more than three interface-neutral carry-forward discoveries or `none`, the participant's brief causal account, failures/incomplete work, and the required delayed endorsement checkpoint; participant | R9.5 | A valid D-008 case packet rather than an immediate delight score |
| R9.7 | Critical | Normalize each packet, blind its condition label for independent review, then expose Minerva's trace only after the blind evidence check; independent reviewer | R9.6 | Reviewer contract and disagreements preserved; participant retains value judgment |
| R9.8 | Critical | Review the pair's Minerva case for traceability and countermetrics: canvas burden, context predictability, discoverability, collapsed approaches, cancellation/recovery, truthful state, and latency/spend relative to benefit; evaluation owner | R9.7 | No qualified discovery erases a recurring material failure |
| R9.9 | Critical | After both sessions, delayed responses, independent review, and countermetric review for each pair, update the predeclared stop ledger before beginning another pair. Stop immediately on a material falsifier; after three valid pairs apply the initial gate; run up to two extra pairs only if permitted and decision-relevant; evaluation owner | R9.8 | Supported, unsupported, or invalid-and-stopped decision with an exact denominator and no post-falsifier dilution |
| R9.10 | Critical | Publish `EVALUATION_REPORT.md` with normalized findings, counterevidence, invalid sessions, repairs, reviewer disagreements, build/configuration identity, limitations, and the terminal decision; evaluation owner | R9.9 | E7 artifact that preserves negative results and names the next decision boundary |

Demo: First show the executable ordinary-chat baseline dry run and every preregistered mismatch. For each admitted matched pair, show equal task conditions, the frozen pre-session inventory, participant-authored discoveries or `none`, the delayed endorsement checkpoint, the initially blinded reviewer record, the pair-level stop-ledger decision, and—only for Minerva—the native interaction trace used to qualify any claimed contribution. The aggregate report applies the rule without scoring creativity or rewarding output volume.

**Smallest decisive evidence:** If no early falsifier occurs, three valid matched pairs plus complete normalized packets. The initial gate passes only if at least two pairs favor Minerva, no material burden/context/control/trust failure recurs across two Minerva users, and at least one claimed Minerva contribution is reconstructable. If the permitted extension reaches five valid pairs, at least three must favor Minerva. Two valid Minerva sessions that trigger an approved early-stop rule are sufficient terminal evidence for an unsupported decision and prohibit the next pair.

**First material falsifier:** Materially unmatched conditions; moderator coaching; missing pre-session or delayed endorsement evidence; provider outage or implementation defect; hidden context, irreversible loss, silent mutation, late commit, or false completion; automated novelty/quality scoring; or two Minerva sessions with more visible material but no qualified shift. One affected condition may repeat once after a material implementation repair; recurrence stops the approach.

**Exit decision:** Report the thesis as supported only when the declared gate passes. Otherwise report it as unsupported at this prototype stage and stop capability expansion. Either truthful result completes this roadmap; any further product direction requires a new owner decision and a new roadmap.

## 18. Requirement and experiment traceability

### Approved decisions to delivery gates

| Decision | Delivery gates | Decisive terminal evidence |
|---|---|---|
| D-001 — browser-local first workspace | R0, R1, R4, R8 | Exact acknowledged state survives restart; server and deployment inspection finds no workspace persistence |
| D-002 — canonical editable example | R3, R5, R9 | Fresh entry and owner rehearsal succeed without a tour, preferred answer, or hidden blank path |
| D-003 — Focus plus selected targets | R1, R3, R6, R7, R8 | One deterministic inspectable manifest feeds every capability and remains invariant under geometry-only changes |
| D-004 — bounded local intake | R3, R8 | Typed, pasted, `.txt`, `.md`, and URL-reference sources remain local, attributable, inert, and outside Focus by default |
| D-005 — three-approach sweep | R6, R8 | Exactly three fixed isolated arms, concurrency two, factual partial states, eligible Harvest, and no hidden work |
| D-006 — semantic Undo/Redo with preserved Paths | R1, R4, R6, R8 | Meaningful action ordering, dependency safety, exact zero-spend Redo, preserved futures, and late-result rejection |
| D-007 — persistent bounded companion | R6V, R7, R8 | Real concurrent Voice is Quiet by default, exact-context, read-only, ephemeral unless pinned, and hard-bounded |
| D-008 — staged matched evaluation | R5, R8, R9 | Owner readiness packet, frozen candidate, matched packets, countermetrics, and the declared product decision |

### Acceptance scenarios to gates

| Acceptance scenario | Primary construction gate | Final confirmation |
|---|---|---|
| AC-001 — first encounter | R3 | R8 |
| AC-002 — durable local mutation | R1 and R3 | R8 |
| AC-003 — explicit context | R1 and R3 | R8 |
| AC-004 — frozen Branch | R3 | R8 |
| AC-005 — neutral Compare | R4 | R8 |
| AC-006 — contribution Recombine | R4 | R8 |
| AC-007 — Harvest | R4 | R8 |
| AC-008 — Searchlight isolation | R6 | R8 |
| AC-009 — Searchlight control | R6 | R8 |
| AC-010 — Searchlight partial truth | R6 | R8 |
| AC-011 — Retry and semantic Undo/Redo | R6 | R8 |
| AC-012 — preserved Path | R1 and R4 | R8 |
| AC-013 — bounded intake | R3 | R8 |
| AC-014 — storage failure | R1 and R4 | R8 |
| AC-015 — real Voice concurrency | R7 | R8 |
| AC-016 — Voice session memory | R7 | R8 |
| AC-017 — accessible core loop | R2A and every later construction gate | R8 |
| AC-018 — complete product loop | R4 and R5 | R8 |
| AC-019 — matched product evidence | R9 | R9 terminal report |

### Architecture experiments to gates

| Experiment | Gate | Selection made only after |
|---|---|---|
| EXP-001 — interleaved state and failure | R1 | The journal/projection model survives the complete debug sequence in a real browser |
| EXP-002 — renderer and structured projection | R2A | One adapter passes semantic-authority, accessibility, licensing, feel, and measured-load tests |
| EXP-003 — provider/admission envelope | R2B | Every closed stage works, atomic bounds hold, and cancellation defeats a late valid result |
| EXP-004 — concurrent Voice | R6V | Actual browser audio passes transport, credential, barge-in, echo, latency, retention, and spend tests before R7 adds exact workspace context and policy |

There is no implementation gate for a decision or acceptance scenario not listed above. A discovered omission changes this roadmap before code proceeds.

## 19. Evidence ladder and self-assessment rubric

### Evidence progression

| Evidence level | First earned | Required use |
|---|---|---|
| E0 — plan | Roadmap approval and R0 authority commit | Product contract, traceability, scope, sequence, and stopping rules |
| E1 — source | Every construction gate | Exact source revision and bounded relevant-path review |
| E2 — automated contract | R1, then each changed semantic path | Deterministic domain, context, history, cancellation, intake, and accessibility contracts |
| E3 — local browser | R1, then each integrated slice | Fresh browser, real IndexedDB, reload/restart, fault injection, keyboard, and network inspection |
| E4 — deployed web | Narrowly in R3; completely in R8 | Exact immutable Vercel deployment, readiness, direct HTTP, and interactive readback |
| E5 — live provider | Narrowly in R2B and R6V; vertically in R3/R6/R7; completely in R8 | Disclosed provider/configuration, real request or audio, usage/latency, and truthful visible terminal result |
| E6 — supported environment | Provisional in R7; frozen in R8 | Repeated proof across only the declared browser/input/viewport/audio matrix |
| E7 — product outcome | Readiness evidence in R5; terminal decision in R9 | Participant-owned consequential discovery under D-008, with countermetrics and trace |

Evidence is cumulative and claim-specific. A higher rung does not erase a lower-rung failure. A deployed page cannot prove provider behavior; a provider response cannot prove durable landing; neither can prove product value.

### Gate closeout

`CURRENT_GATE.md` holds the active bounded contract. At closeout, append one
`JOURNAL.md` entry naming the gate or slice, exact source revision, observed
outcome, smallest native evidence, whether the first material falsifier
occurred, known limits or cuts, and the human decision. Reference native
runtime, platform, test, deployment, or review evidence directly; do not copy
command output into a second machine-scored receipt system.

Participant content and normalized evaluation packets are not committed to the
product repository. The journal may refer only to consented, access-controlled
artifact locations and content-free identifiers.

### Pass/fail rubric

A gate passes only when every applicable row is **yes**. The rows are not averaged, weighted, or converted into a creativity score.

| Check | Pass question | Required evidence | Failure response |
|---|---|---|---|
| Observable outcome | Can a user or operator perform the named Demo on the exact claimed build? | Native interaction or platform readback | Keep active or mark falsified; do not credit implementation volume |
| Authority integrity | Does behavior preserve INTENT, approved DECISIONS, SPEC, and ARCHITECTURE without an implicit product change? | Traceability plus relevant source/runtime observation | Stop and obtain an explicit decision before continuing |
| Correct evidence rung | Does the evidence directly support the claim being made? | Exact revision, environment, and native evidence | Narrow the claim or obtain the missing evidence |
| Unhappy-path truth | Does the named failure remain safe, visible, and recoverable only when recovery is real? | One decisive failure or race scenario | Repair once within scope or stop on recurrence |
| Durable causality | Can acknowledged state, context, lineage, History, and authority be reconstructed where required? | Reload/restart and native records | Treat false acknowledgement or lost causality as a material falsifier |
| Accessibility parity | Can keyboard and structured-view users reach the same semantic outcome without drag, color, touch, voice, or spatial sight? | Programmatic state plus real keyboard path | Gate cannot pass |
| Negative evidence preserved | Are failures, partial results, unsupported environments, abandoned Paths, and disagreements retained? | Journal closeout and relevant UI/artifact | Restore evidence before deciding |
| Falsifier respected | Did work stop or re-plan when the first material falsifier occurred? | Gate decision record | Invalidate downstream work that assumed a pass |
| Scope complete | Are all Critical tasks done with no required behavior deferred under a different label? | Gate task map | Do not pass a partial gate |
| Bounded review | Was there at most one terminal review, with only invalidated evidence rerun after a material repair? | Review record | Stop verification churn and use the decisive native proof |

R5 and R9 add one non-delegable question: **Does the human participant still regard the claimed shift as consequential under the approved constraints, and can its Minerva contribution be reconstructed?** Model scoring, output counts, divergence measures, delight, and reviewer preference cannot answer it.

### Bounded closeout commands

The default local guard is intentionally short:

~~~sh
git diff --check
if [ -f package.json ]; then
  npm run check
fi
~~~

Add a gate-specific helper only when native checks or readback cannot answer a
material decision. Repair that helper at most once. On a second helper defect,
remove or simplify it, narrow the claim, and use native evidence. Do not add a
generic gate counter or release probe in advance of a concrete need.

## 20. Dependencies, open choices, and effort envelope

### Critical path

R2A/R2B and R6/R6V are the only construction lanes intended to run concurrently. All later gates depend on their shared integration seam or on the product decision immediately before them. The estimated critical path through the frozen candidate is approximately **22 engineering days**, plus the bounded owner rehearsal and external-evaluation logistics. This is the long-form first-prototype sequence, not the hackathon clock. The event slice uses the T+120 checkpoint and optional T+120–480 refinement window in `HACKATHON.md`; neither duration changes gate status. This is a sequencing budget, not a calendar promise; a falsifier shortens the path by stopping work.

No gate may start early by building against a guessed adapter. Paper analysis and disposable fixtures may prepare a gate, but production integration waits for the preceding exit decision.

**Known sequencing tradeoff (recorded September 7, 2026).** D-008 evaluates
the thesis with Voice off, yet R8 depends on R7 and R9 depends on R8, so R6V
and R7 (about five of the 22 days) sit on the critical path to the thesis
test. A proposal to split R8 into a Voice-off evaluation candidate and a
separate later Voice freeze is recorded as pending in `JOURNAL.md` entry
`J-20260907-03`. It takes effect only through an explicit product-owner
decision at R5 closeout; until then the approved order stands.

### Open choices at their latest responsible point

| Open choice | Decision gate | Evidence required | Must not happen earlier |
|---|---|---|---|
| IndexedDB wrapper, stores, indexes, migration, and writer primitive | R1 | EXP-001 transaction/failure sequence | Selecting from convenience or predecessor familiarity |
| Canvas renderer and SceneProjection protocol | R2A | Real-browser semantic, accessible, licensing, feel, and load comparison | Letting a renderer define the domain or product History |
| Generation provider/configuration and structured-output mechanism | R2B | Every closed stage succeeds within the hard envelope | Exposing a general prompt endpoint or relying on advertised capability |
| Admission store, capability exchange, and spend/token/time limits | R2B | Atomic contention, replay, expiry, environment, kill-switch, and usage receipts | Public provider access or content-bearing server state |
| Searchlight product/session ceilings and timeouts within the R2B server maximum | R6 | Measured complete, partial, cancel, retry, and reload cases citing the same maximum-policy ID | Adding hidden recovery, changing the fixed graph, or exceeding R2B without reopening its proofs |
| Voice transport and provisional credential/retention envelope | R6V | EXP-004 actual-browser measurements | Treating simulation or a text panel as concurrent Voice proof |
| Integrated Voice model/voice, audio routes, and final session ceilings | R7 | Exact-context Searchlight-concurrent browser evidence | Carrying spike assumptions into the product without integration proof |
| Browser/input/viewport/capacity/performance support claims | R8 | Representative corpus on the exact frozen build | Copying predecessor targets or claiming unmeasured environments |
| Participant recruitment, matching, and independent reviewer | R9 | Product-owner authorization and frozen evaluation protocol | Agent-initiated contact or selection after outcomes are known |

### Dependency failure behavior

| Failure or unavailable dependency | What remains truthful and usable | What stops |
|---|---|---|
| IndexedDB unavailable, full, blocked, or corrupt | A truthful read-only or unavailable state; export/recovery only when actually possible | Durable mutation and every dependent gate |
| Renderer adapter faults | Rebuild from the committed projection; structured view where still safe | Canvas claim until the adapter is restored |
| Provider or admission service unavailable | Already loaded local cards, structures, Focus, History, Paths, and existing results | New provider-dependent operations; no silent queue or later spend |
| Provider response is late, malformed, or timed out | Existing workspace and an inspectable terminal attempt record | Result landing and any false success |
| Vercel is unavailable | Local E1–E3 evidence remains valid for its exact revision | E4, protected participant access, and R9 |
| Voice transport or audio route fails | Spatial canvas and typed local controls remain usable; synchronized text where valid | Voice claim, E6 for that route, and R8 completion |
| Searchlight arm or Harvest fails | Landed siblings, failures, original briefs, History, and explicit Retry remain | Complete assessment when its definition is unmet |
| Evaluation packet is missing or invalid | Technical E0–E6 evidence and the invalid session record remain | Pair counting, E7, and a positive product claim |

## 21. Falsifier provenance and risk map

### Falsifier provenance

The material falsifier in each construction gate is a pre-build estimate derived from the approved contract and architecture. It becomes an observed pass or failure only through that gate's named evidence. Human-outcome gates derive their decision from measured participant behavior.

| Gate | Provenance label | Principal uncertainty being tested |
|---|---|---|
| R0 | **Derived from: estimated** | Whether greenfield isolation and authority can be established without predecessor leakage |
| R1 | **Derived from: estimated** | Whether browser-local journal/projection semantics remain truthful under interleaving and failure |
| R2A | **Derived from: estimated** | Whether a canvas adapter can remain disposable, accessible, responsive, and instrument-like |
| R2B | **Derived from: estimated** | Whether closed provider work can be admitted, bounded, cancelled, and sanitized without workspace state |
| R3 | **Derived from: estimated** | Whether the first durable Branch slice is directly useful and causally inspectable |
| R4 | **Derived from: estimated** | Whether the complete Branch-based loop remains understandable, reversible, and lighter than context reconstruction |
| R5 | **Derived from: measured** | Whether the owner can use the instrument and reconstruct a consequential shift or explicit none |
| R6 | **Derived from: estimated** | Whether targeted divergence remains fixed, isolated, controllable, neutral, and truthful under partial execution |
| R6V | **Derived from: estimated** | Whether any real-browser Voice transport can satisfy media, credential, interruption, retention, and resource boundaries |
| R7 | **Derived from: estimated** | Whether the selected Voice transport can satisfy exact-context, read-only, Quiet/Active, pinning, privacy, and Searchlight-concurrency boundaries |
| R8 | **Derived from: estimated** | Whether one exact deployment supports every required first-prototype claim at E0–E6 |
| R9 | **Derived from: measured** | Whether matched participant evidence supports the product thesis without recurring material countermetrics |

### Risk and error map

| Risk | Earliest signal | Required response | Owning gate |
|---|---|---|---|
| Predecessor gravity silently recreates Atlas/Searchlight or Gestures | Imported package, schema, deployment metadata, prompt, or interaction convention without fresh justification | Remove it before scaffold work or stop R0 | R0 |
| Domain truth leaks into React, renderer, or persistence wrapper | State cannot rebuild from canonical records or structured actions require renderer objects | Reject the adapter/design; keep the kernel contract authoritative | R1/R2A |
| Browser persistence acknowledges what did not commit | Reload loses a success, tabs overwrite, or recovery skips an internally valid revision | Stop on false acknowledgement; simplify transaction/recovery design | R1/R4 |
| Explicit context becomes surprising or too large | Geometry changes payload, excluded content appears, or overflow invites truncation | Block before work, expose the exact cause, and simplify Focus/context UX | R3 |
| Provider boundary becomes an anonymous spend or injection surface | Arbitrary prompts/tools, hidden retries, admission races, client secret, or content logs | Keep routes disabled and revise R2B | R2B |
| Canvas feels like graph administration | Owner cannot maintain thought while managing structure | Simplify the smallest interaction before more capability | R2A/R5 |
| Searchlight produces volume rather than useful difference | Briefs collapse, sibling leakage occurs, or UI implies ranking | Fail R6; do not add stages or agents as compensation | R6 |
| Voice transport is infeasible or Voice becomes another chat surface or autonomous actor | Media contention, failed interruption, long narration, unsolicited loops, hidden context, write claims, or canvas displacement | Fail R6V or R7 at the first affected boundary; do not weaken approved concurrency/read-only scope | R6V/R7 |
| Accessibility or performance is deferred | A semantic action lacks a non-drag path or concurrent work blocks input | Stop the current construction gate and repair the same slice | Every build gate |
| Evaluation rewards novelty theater | Counts, distance metrics, model scores, delight, or output volume drive the conclusion | Invalidate the decision and reapply D-008 | R9 |
| Verification becomes the deliverable | Repeated reviews add no decision-bearing evidence | Stop after the single bounded review or first falsifier | Every gate |

## 22. Forbidden execution paths

Unless a later explicit product decision replaces an approved authority, execution must not:

- copy or transplant predecessor code, manifests, schemas, persistence, prompts, secrets, analytics, deployment linkage, or aliases;
- edit an approved authority to accommodate an implementation shortcut without product-owner approval;
- make the renderer, React tree, server, provider callback, or Voice conversation a second workspace authority;
- persist or reconstruct workspace content on Vercel, in the admission ledger, in logs, or in telemetry;
- expose a long-lived provider secret to the browser or enable fail-open public inference;
- infer context, Focus, membership, importance, or reading order from proximity, viewport, traversal, or model judgment;
- silently truncate, summarize, retry, repair, rank, critique, call tools, recurse, continue after page close, or queue future provider work;
- require per-result approval, a mandatory prompt, a procedure picker, or repeated permissions beyond the explicit action's disclosed envelope;
- let Voice mutate, invoke, pin automatically, listen in the background, retain raw audio, or durably retain unpinned conversation;
- hide failures, abandoned Paths, invalid sessions, countermetrics, or negative product results;
- commit participant content, transcripts, audio, or normalized evaluation packets to the product repository;
- recruit or contact participants without explicit product-owner authorization;
- continue downstream after a material falsifier merely because code exists; or
- use destructive repository/history operations such as `rm -rf`, `git reset --hard`, or force push as ordinary plan steps.

## 23. Later horizons — explicitly not scheduled in this roadmap

These horizons preserve approved direction without planting dormant controls, schema, services, or abstraction in the first prototype. Each requires a new decision record, specification change, architecture review, threat/privacy analysis, and roadmap after the D-008 gate supports further investment.

| Horizon | Earliest product question | Required precursor | Explicitly absent now |
|---|---|---|---|
| Anonymous cloud continuity | Can an unguessable private link preserve browser-local trust while enabling intentional continuity? | Migration, loss/recovery, retention, deletion, link rotation, abuse, and workspace-authority decisions | Accounts, cloud workspace sync, server content storage, share links |
| Existing LLM session intake | Can user-selected local Claude Desktop and Codex conversations become attributable source material without turning the canvas into transcript storage? | Consent, parser, provenance, privacy, size, and local-file-format decisions | Transcript scanners, broad filesystem access, automatic import |
| Shared-link intake | Is there stable, consented access through Claude Desktop, Codex, or supported shared-link surfaces? | Provider contracts, authentication, revocation, retention, and prompt-injection analysis | URL fetching, scraping, unattended ingestion |
| Multi-generation agentic expeditions | Can bounded depth expose useful frontiers without hiding agency, cost, failure, or lineage? | Targeted Searchlight evidence, fixed budget/control semantics, and a new operation graph | Recursive agents, autonomous follow-up, background continuation |
| Ambient exploration | Can opt-in background exploration add value without stealing attention or authority? | Expedition evidence plus interruption, notification, spend, and page-lifecycle decisions | Ambient provider calls, wakeups, queues, cron, service workers |
| Touch and gestures | Which supported devices permit physically grounded, reversible spatial interaction? | Device matrix, gesture vocabulary, accessibility equivalents, conflict and discoverability studies | Touch-first claims, hidden gesture-only actions, device assumptions |
| Voice-authorized writes | Can simultaneous Voice action preserve directness, inspectable scope, and reversible authority without permission fatigue? | Separate authorization model, staged action semantics, conflict/cancellation design, and evaluation | Workspace command port, tools, queued mutation, automatic pinning |

The horizon order is not a release schedule. Bounded agentic expeditions precede ambient exploration; all other ordering remains a future product decision.

## 24. Interview findings

One bounded adversarial pass challenged the completed roadmap on September 6,
2026; its eight challenges, resolutions, and six preventive corrections are
preserved verbatim in
[`docs/archive/roadmap-interview-findings-2026-09-06.md`](./docs/archive/roadmap-interview-findings-2026-09-06.md).
That was the sole terminal plan review. Execution may revisit a gate only when
its native evidence triggers that gate's named falsifier or invalidates a
dependency.

## 25. Approval and execution handoff

This roadmap is the canonical execution plan for the first Minerva prototype. It intentionally lives beside the approved product documents rather than in a second planning system.

The September 6 approval changed the status from **Draft 0.1** to **Approved
1.0** and authorized R0, which has since passed. Amendment **1.1** records the
pre-clock experiment boundary and simplifies R0 evidence administration without
changing a product requirement or closing another gate. `CURRENT_GATE.md` now
carries the subordinate operating state. Before each later long-form gate, the
implementation session must:

1. read `CURRENT_GATE.md`, the relevant approved authority sections, and the latest journal closeout;
2. confirm that the gate's dependencies and open-choice boundary still hold;
3. create a bounded file-level implementation plan for that gate;
4. name the observable outcome, smallest decisive evidence, first material falsifier, and budget before building; and
5. stop after decisive evidence, the first material falsifier, or the gate budget.

Changes to product intent, approved decisions, acceptance criteria, architecture authority, participant contact, or later-horizon scope return to the product owner. Ordinary in-scope implementation decisions remain with the executing engineering lane and are recorded in JOURNAL.md.

**Next action:** keep the pre-clock baseline ready. When the product owner
explicitly starts the event clock, record the transition and execute the slice
in `HACKATHON.md` against its demo contract. If the event slice is not active, R1 is the
next long-form gate and remains unauthorized until a separate owner decision.
