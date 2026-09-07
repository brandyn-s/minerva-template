# Minerva — Product Specification

## 1. Status, authority, and requirement language

| Field | Value |
|---|---|
| Status | **Approved — September 6, 2026** |
| Date | September 6, 2026 |
| Product owner | Brandyn Schult |
| Current phase | Stable first-prototype behavior contract; current execution status and product-owner authorization are recorded in [CURRENT_GATE.md](./CURRENT_GATE.md) |
| Authority after approval | This file governs what the first Minerva prototype must do. `INTENT.md` governs the product problem and thesis. Approved entries in `DECISIONS.md` govern choices already made and cannot be changed here. `ARCHITECTURE.md` governs implementation mechanisms; `ROADMAP.md` governs the long-form sequence and release gates. `CURRENT_GATE.md` records current work but cannot itself grant authority or alter product requirements. |
| Historical boundary | Searchlight, Atlas, Gestures, source code, deployments, prompts, and transcripts are evidence only. They create no requirement unless it appears in approved Minerva documents. |
| Change rule | Removing or materially changing an approved requirement requires an explicit decision update, corresponding acceptance changes, and a traceability update. |

`MUST` denotes a first-prototype obligation. `SHOULD` denotes a strong default that may be departed from only through a recorded rationale. `MAY` denotes permitted behavior. **[OPEN]** marks a value or implementation-dependent boundary that must be resolved before the affected capability is claimed complete; it is not permission to invent behavior silently.

`CURRENT_GATE.md` may record a product-owner-authorized, explicitly labelled,
time-boxed experimental subset. Omitted `MUST` requirements remain obligations
of the first prototype; such a slice cannot claim prototype completion or
close a `ROADMAP.md` gate.

This specification defines observable product behavior. It deliberately does not select a canvas renderer, storage technology, AI model or provider, voice transport, orchestration framework, telemetry stack, or Vercel deployment topology.

The September 7 product-starter amendment in `ROADMAP.md` makes its engineering
sequence and execution ceremonies optional. Product obligations, actual
behavioral dependencies, and acceptance/release criteria are unchanged.

**Approved interpretation:** Branch, Compare, Recombine, standalone Harvest, and Searchlight are user-invoked AI-assisted canvas operations that may create cards; Searchlight's eligible Harvest is an authorized AI substage. This follows the approved requirement that every named capability sees a frozen context projection. A user may always create or edit an ordinary card manually, but the named operations themselves use the common AI-operation contract below.

## 2. Product contract

### Primary user

An individual creative or strategic practitioner exploring a real ambiguous problem across one or more sessions. The product must be useful at the beginning of exploration, not only after the user notices that they are stuck.

### Job to be done

Given a problem and whatever source material matters, externalize the working space; deliberately control the context used by AI; open and preserve different directions; compare and recombine exact contributions; capture consequential tensions and experiments; and continue or rewind without losing prior work.

### Intended capability change

The user moves from one accumulating conversation to a durable spatial field in which active context, alternatives, relationships, operational causes, and prior trajectories remain visible and manipulable. The user can use typed input and a concurrent voice companion while the canvas—not a transcript—remains the primary surface.

### First material product falsifier

The thesis is false if Minerva produces more visible material but does not help people reach or articulate consequential alternatives, connections, tensions, or experiments more reliably than a matched linear conversation. It is also false if managing the canvas is as burdensome as reconstructing context in chat, or if users cannot understand what an AI capability saw and why its result appeared.

### Product invariants

`INV-001` **Canvas first.** The durable workspace and its spatial structures are the primary surface. Conversation and operation records support that surface and never replace it with a chat-first workflow.

`INV-002` **Explicit spatial meaning.** Only visible structures, explicit membership, Focus, selection, relationships, and lineage affect product semantics. Proximity, overlap, direction, size, color, z-order, viewport, and collapsed state never affect AI context.

`INV-003` **One context rule.** Branch, Compare, Recombine, standalone Harvest, Searchlight, and Voice use the same canonical Focus-plus-target projection. Every invocation freezes and exposes the exact committed input versions it used. The only derived-stage addition is an eligible Searchlight Harvest, which receives the original sweep manifest plus that sweep's exact landed arm versions under the already disclosed invocation envelope.

`INV-004` **Action is bounded authorization.** An explicit action authorizes the work named by that action and its disclosed envelope. Minerva does not ask for confirmation again before each valid result. Undo, cancellation, and preserved Paths provide control.

`INV-005` **Durable visible acknowledgement.** Minerva never describes a workspace mutation as complete until the resulting state is durably committed in the browser-local workspace and visible on the active Path.

`INV-006` **No silent mutation.** AI may create new result cards and required structural provenance. It may not silently edit, delete, move, focus, group, link, or otherwise reinterpret existing user work.

`INV-007` **Difference is not value.** Comparison, Searchlight, and Harvest may expose difference, tension, and tradeoff but never declare a quality winner. Human judgment owns consequence and selection.

`INV-008` **Causal truth without chain-of-thought.** Every durable canvas-generating AI operation preserves its frozen context, targets, intended move, inherited material, changed material, observed output, exact contributions, attempts, and terminal status. Voice keeps an equivalent receipt only for the page-scoped conversation session. Neither requests nor claims to expose private model reasoning.

`INV-009` **Preserved alternatives.** Routine Undo/Redo is semantic. Continuing from earlier work preserves the former future as a recoverable Path. Redo restores exact prior state without calling an AI provider.

`INV-010` **Bounded read-only voice.** Voice is explicit-start, page-scoped, interruptible, Quiet by default, and incapable of durable workspace mutation. Conversation is session memory; cards are durable memory.

`INV-011` **Failure remains legible.** Partial results, failed attempts, interruptions, and cancellations remain inspectable. One failed asynchronous unit does not erase successful siblings or existing workspace state.

`INV-012` **Truthful local boundary.** Browser-local persistence is not represented as cloud backup, cross-device sync, local AI inference, or guaranteed recovery.

## 3. First-prototype scope

### Required product surface

The first prototype MUST include:

- An editable canonical example and an equally visible blank-start path.
- One current durable browser-local workspace with a directly manipulable canvas.
- Flexible cards with optional lightweight semantic roles.
- Explicit groups, regions, relationships, Focus, selected targets, and lineage.
- Typed entry, paste, local `.txt` and `.md` intake, and inert URL reference cards.
- Branch, neutral Compare, contribution-level Recombine, explicit Harvest, and a one-layer three-approach Searchlight sweep.
- Semantic Undo/Redo, read-only History previews, and preserved Paths.
- One concurrent, context-aware, read-only voice companion.
- User-visible context receipts, operation records, partial/failure states, and provider/spend boundaries.
- The owner rehearsal and staged matched evaluation defined by D-008.

### Scope discipline

`SCOPE-001` A feature is not part of the first prototype merely because it existed in Searchlight, Atlas, or Gestures.

`SCOPE-002` The prototype MUST prove the complete manual and single-operation loop before deferred autonomy, ingestion breadth, sharing, or scale can enter the roadmap as implementation work.

`SCOPE-003` A roadmap item MUST NOT be hidden behind an inactive control, unused schema, background service, or speculative abstraction in the first prototype.

`SCOPE-004` Exact performance, capacity, provider, retention, and spend values remain **[OPEN]** until the corresponding architecture spike produces real-browser or provider evidence.

## 4. Domain vocabulary

| Term | Definition |
|---|---|
| Workspace | A durable browser-local spatial document for one problem or exploration. |
| Card | The common editable content substrate. A card may contain user text, imported source material, an AI result, a pinned utterance, a comparison, a recombination, or a harvest. |
| Role | Optional lightweight metadata such as problem, idea, question, evidence, constraint, or tension. A role helps interpretation but does not change context inclusion or priority. |
| Structure | A visible Group or Region with an explicit list of direct member cards. Presentation may differ; first-prototype context semantics are the same. |
| Structural relationship | A visible causal or membership fact. `derived from` connects cards; `member of` connects a card to a Structure. Other first-prototype relationship labels connect cards, are user-authored, and are free-form. |
| Selection | Temporary, explicitly selected operation target or targets. Selection is not durable Focus and does not enter workspace History by itself. |
| Focus | The durable, explicit set of cards or structures that supplies supporting context to the next AI operation. |
| Context projection | The deterministic, deduplicated card-and-relationship set produced by the approved Focus-plus-target rule. |
| Context manifest | The inspectable immutable record of the exact card versions, inclusion reasons, structural labels, serialization order, and workspace revision supplied to an AI operation. |
| Committed revision | A durable semantic workspace state acknowledged to the user. |
| Operation record | The durable factual receipt for an AI action, distinct from cards and visible structural relationships. |
| Lineage | The causal relationship between a result and the exact parent versions or contributions from which it was derived. |
| Branch | One directed expansion from a selected card or explicit Focus set. |
| Compare | A neutral examination of two or more selected cards that exposes commonality, difference, tension, and tradeoff without a winner. |
| Recombine | A new child card created from explicitly named contributions from two or more parents. |
| Harvest | A concise, editable, evidence-linked capture of consequential directions, connections, tensions, bridges, dead ends, or experiments. |
| Searchlight sweep | One bounded divergence operation containing approach selection, exactly three generation-isolated arms, and an eligible harvest. |
| Approach | A plain-language, context-specific move fixed before any Searchlight result arrives. |
| Arm | One generation attempt that receives the frozen shared context plus only its own approach. |
| Attempt | One provider execution for an operation or arm. A retry creates another attempt and never overwrites the prior one. |
| Moment | One human-readable meaningful workspace-history action. |
| Path | One durable trajectory through workspace Moments. A Path is distinct from card lineage and from the Branch creative operation. |
| Conversation session | The visible page-scoped sequence of spoken and typed voice-companion turns. It is not durable workspace memory. |
| Qualified consequential shift | A discovery satisfying D-008's novelty-to-participant, consequence, constraint, 24-hour, and causal-trace conditions. |

## 5. Canonical state and acknowledgement contracts

### User-visible state families

| Area | Minimum states | Contract |
|---|---|---|
| Workspace | `loading`, `ready`, `degraded/read-only`, `unavailable` | Semantic mutation is accepted only in `ready`. Degradation never silently resets or replaces stored work. |
| Local mutation | `tentative`, `durable-local`, `failed` | Immediate feedback may be tentative. Success is shown only after durable local commit. |
| Generic AI operation | `requested`, `queued`, `running`, `landed`, `failed`, `timed out`, `interrupted`, `cancelled` | Status names the actual stage. Provider response is not equivalent to durable landing. |
| Searchlight sweep | `selecting`, `running`, `paused`, `cancelling`, `cancelled`, `complete`, `partial`, `interrupted`, `failed` | `complete` has the strict meaning in Section 12; terminalization alone is not success. |
| History | `present`, `previewing Moment`, `active on Path` | Preview is read-only. Mutation from the past first establishes a new active Path. |
| Voice connection | `off`, `starting`, `connected`, `reconnecting`, `degraded`, `ended` | Connection state is separate from microphone, response, context, and stance. |
| Voice input | `mic off`, `listening`, `speech detected`, `failed` | `listening` means audio is actually accepted. |
| Voice response | `idle`, `thinking`, `speaking`, `interrupted`, `failed` | `speaking` begins only with audible playback. |
| Voice context | `current`, `updating`, `unavailable` | Workspace-grounded claims stop when context is unavailable. |
| Voice stance | `quiet`, `active` | Quiet is not microphone mute. Active is bounded and session-scoped. |

`STATE-001` Every durable entity and asynchronous invocation MUST have a stable identity before work that can produce a visible result begins.

`STATE-002` Every meaningful committed mutation MUST advance a semantic workspace revision. Rendering state, pointer state, provider callbacks, and temporary captions MUST NOT masquerade as committed revisions.

`STATE-003` All mutation entry points MUST obey the same validation, durability, History, lineage, and acknowledgement semantics. The architecture may choose the mechanism but not different truth rules for different UI surfaces.

`STATE-004` A provider success, audio event, or callback return MUST NOT be shown as a completed workspace action until every acknowledged card, relationship, operation record, History change, and active-Path update is durably visible.

`STATE-005` An AI-created card remains ordinarily editable. Its operation record MUST retain the exact initially landed version so later user edits do not rewrite history or provenance.

`STATE-006` If a referenced parent card is later edited or removed from the active Path, its historical version and contribution citation MUST remain resolvable from lineage or History.

`STATE-007` Two tabs or windows MUST NOT silently overwrite the same workspace. The implementation MUST either coordinate conflict-safe writes or visibly enforce a single-writer boundary. The chosen mechanism belongs in `ARCHITECTURE.md`.

## 6. Central loop and primary journeys

The canonical loop is:

`seed → focus and arrange → branch or targeted sweep → compare → recombine → harvest → continue or rewind`

### Journey A — First useful loop

1. The user opens the editable library example or starts blank without signing in.
2. The user creates or edits cards and arranges explicit structures.
3. The user establishes Focus and can inspect exactly what an AI action will see.
4. The user invokes one Branch or Searchlight sweep without completing a prompt form.
5. Results become usable cards as they durably land.
6. The user compares alternatives, names contributions, recombines them, and creates a Harvest.
7. The user continues from the current Path or rewinds to an earlier Moment without losing the former future.

### Journey B — Directed Branch

The user selects one card or uses a nonempty Focus, optionally supplies a direction, and invokes Branch. Minerva freezes the context, records the intended move, and lands one derived card outside Focus without changing its source.

### Journey C — Targeted Searchlight

The user invokes Searchlight against the visible Focus-plus-target projection. Three approach briefs appear before results. At most two arms run concurrently. Results land independently, remain neutral, and produce an eligible Harvest. The user can continue working, pause, resume, cancel, or explicitly retry a failed unit.

### Journey D — Compare, Recombine, and Harvest

The user selects alternatives, creates a neutral comparison, names an exact contribution from each desired parent, creates a recombined child, and harvests the consequential frontier without Minerva declaring a winner.

### Journey E — Rewind with preserved futures

The user uses familiar Undo/Redo for routine correction, previews a prior Moment, and chooses Continue from here. The earlier Moment becomes writable on a new Path while the former present remains recoverable.

### Journey F — Concurrent voice companion

The user explicitly starts Voice, grants browser permission, and continues manipulating the canvas while speaking or typing. The companion uses the current frozen Focus-plus-selection receipt, remains read-only, yields to interruption, and allows a useful utterance to be pinned as one ordinary card.

### Journey G — Failure and return

The user sees the exact failed stage, retains committed work and successful siblings, reloads if needed, and can resume local editing or explicitly retry an eligible failed unit without silent regeneration or hidden context changes.

## 7. First encounter, workspaces, canvas, and cards

### First encounter and workspace boundary

`ONB-001` A first visit MUST expose both **Open editable example** and **Start blank** as primary, immediately visible choices. Neither may be hidden in a menu, tour, or settings surface.

`ONB-002` The canonical example MUST begin with “How might a neighborhood library remain indispensable in an AI-rich world?” and MUST be an ordinary local workspace, not a read-only showcase or scripted mode.

`ONB-003` Every example card, structure, relationship, Focus membership, and generated result MUST be editable, movable, removable, and eligible for the ordinary Minerva loop.

`ONB-004` The bundled example MUST NOT encode a preferred conclusion or present its initial directions as exhaustive. Creating or editing a local example MUST NOT alter the bundled source for future new examples.

`WSP-001` The prototype MUST require no account, sign-in, organization, or cloud-workspace setup.

`WSP-002` On an uninitialized browser, choosing the example or blank start MUST create the one current workspace. If existing local state is detected, first-run creation MUST NOT replace it silently.

`WSP-003` The current workspace MUST reopen at its latest acknowledged active Path. Workspace naming, multiple-workspace navigation, and a workspace library are not required in the first prototype.

`WSP-004` Creating or switching among multiple local workspaces, whole-workspace deletion, backup, export, cloud recovery, and cross-device continuity remain outside this specification unless separately decided. The prototype MUST NOT expose a destructive New or Reset action that can silently replace the current workspace.

### Canvas and cards

`CAN-001` The canvas MUST support direct creation, editing, selection, multi-selection, movement, inspection, pan, and zoom with ordinary pointer and keyboard input. No canvas or central-loop semantic operation may depend on touch, multi-touch, stylus, device motion, or voice.

`CAN-002` Panning, zooming, hovering, and card expansion MUST NOT change the prospective AI context, create a History Moment, or interrupt concurrent AI or voice work. Temporary selection changes the next invocation's prospective targets, but MUST NOT mutate persistent Focus, create History, or alter any already-frozen operation.

`CAN-003` Actions MUST appear on or near the card, selection, structure, Focus field, operation, or History item they affect. Keyboard shortcuts MAY supplement but MUST NOT be the only discoverable path.

`CAN-004` The user MUST be able to recover orientation and reach all durable cards and structures without changing their semantic relationships. The exact overview, fit, minimap, or navigation mechanism is an architecture/UI decision.

`CAN-005` Minerva MUST present the workspace as a responsive thinking instrument rather than a graph editor or dashboard. The first useful actions occur directly on the canvas; context, provenance, status, and History remain inspectable but visually subordinate to the work. Direct manipulation SHOULD invite play and curiosity while every semantic visual consequence remains real and legible. The product-owner rehearsal evaluates this qualitative contract separately from consequential-discovery proof.

`CARD-001` A user MUST be able to create a card and begin editing without selecting a role or completing a prompt.

`CARD-002` Cards MUST share one editing and manipulation model regardless of whether their origin is user entry, import, AI generation, comparison, recombination, harvest, or pinned conversation.

`CARD-003` A card MAY have one optional lightweight role. Initial suggestions MUST include problem, idea, question, evidence, constraint, and tension, while permitting no role and free-form role labels rather than imposing a fixed domain ontology.

`CARD-004` Changing a role MUST be visible and reversible. It MAY change visible metadata supplied to later AI operations but MUST NOT change inclusion, weighting, or priority.

`CARD-005` User edits, moves, creates, removes, and restores MUST become semantic History actions only after they durably commit.

`CARD-006` Removing a card from the active Path MUST preserve any historical versions, operation records, lineage, or inactive Paths that depend on it.

### Structures and relationships

`STR-001` The first prototype MUST support explicit Groups and Regions with visible names and direct member-card lists. Group and Region context semantics are identical even if their presentation differs.

`STR-002` Adding or removing membership MUST be intentional, visible, durable, and reversible. Crossing a Region boundary may propose membership only through a visible drop consequence; geometry alone MUST NOT create membership.

`STR-003` A card MAY appear within or near a structure without becoming a member. The visual state MUST make explicit membership distinguishable from mere placement.

`STR-004` Structure nesting and recursive membership expansion are unsupported in the first prototype. If structures can be placed near or inside one another visually, they MUST remain semantically independent.

`STR-005` Duplicate or overlapping membership MUST deduplicate the card in a context projection while preserving every visible inclusion reason.

`REL-001` The system MUST reserve `derived from` for causal parentage and `member of` for explicit structure membership. Users MUST NOT be able to repurpose those labels as unrelated free-form links.

`REL-002` Users MAY create other labeled relationships with free-form text. A relationship changes no card content, Focus membership, or History lineage merely by existing.

`REL-003` AI MAY create `derived from` links required by an invoked operation. Any other AI-suggested interpretive relationship MUST remain a suggestion until the user explicitly adopts it.

`REL-004` Deleting a visible free-form relationship MUST NOT delete either endpoint or rewrite an operation record.

## 8. Canonical context and provenance

### Focus and selection

`CTX-001` One persistent on-canvas field MUST communicate **Focus — AI sees N cards**, where `N` is the deduplicated count produced by the canonical projection.

`CTX-002` Cards and structures MUST enter or leave Focus through an intentional drop with a visible consequence preview or through explicit, local **Add to Focus**, **Remove from Focus**, and **Clear Focus** actions.

`CTX-003` A selected target outside Focus MUST be included for the invoked operation without silently becoming persistent Focus.

`CTX-004` The canonical context projection MUST contain only the deduplicated union of:

1. Explicitly selected operation targets.
2. Cards directly in Focus.
3. Direct member cards of a focused Group or Region.
4. Relationship labels whose two endpoints are already included.

`CTX-005` Links MUST NOT pull an excluded endpoint into context. Parent, child, sibling, neighbor, or recursively nested content MUST NOT enter through graph traversal.

`CTX-006` A user MUST be able to expand the Focus summary before invocation and inspect every included card, version, inclusion reason, structure, and included relationship. Inspection is not an additional permission step.

`CTX-007` Invoking an AI capability MUST freeze the exact projection and committed workspace revision. Later edits, moves, membership changes, Focus changes, deletion, or Path changes MUST NOT alter the captured manifest.

`CTX-008` Context serialization MUST be deterministic, recorded, and invariant under geometry-only changes. The implementation MUST NOT imply hidden importance from serialization order.

`CTX-009` Equivalent committed card content, relationships, Focus, and targets MUST produce the same serialized AI payload after pan, zoom, geometry-only card movement, viewport change, or card collapse. The manifest still records the newer source workspace revision when a durable geometry change advanced History.

`CTX-010` Context MUST NOT be silently summarized, truncated, sampled, or supplemented with the viewport or whole workspace. If the exact manifest exceeds a provider boundary, Minerva MUST block the invocation, identify the reducible cause, and let the user change Focus or selection.

`CTX-011` Generated results MUST land outside Focus by default. Outside the narrow authorized Searchlight Harvest stage in `CTX-013`, they affect later AI work only when explicitly selected or added to Focus.

`CTX-012` An explicit **Add all current cards to Focus** action MUST be available when whole-workspace context is needed. It applies only to cards present when the action commits; later results do not join Focus automatically.

`CTX-013` An eligible Searchlight Harvest is a disclosed derived stage of the original sweep, not a later standalone action. Its exact stage manifest MUST contain the original frozen sweep manifest, the three fixed approach briefs, and only the current landed result version for each contributing approach. It MUST exclude later card edits, unrelated canvas state, prior failed output content, and all other cards outside the original manifest. This stage does not add any arm result to persistent Focus or authorize that result for unrelated later operations.

### Operation and lineage records

The durable `PROV-*` requirements in this section apply to canvas-generating operations and Searchlight. Voice-turn context, attempts, responses, and failures remain ephemeral under Section 14 unless the user pins one utterance; pinning preserves only the approved card and lightweight source anchor, not the surrounding transcript or frozen voice context.

`PROV-001` Before provider work begins, every canvas-generating AI invocation MUST record a stable operation identity, operation type, initiating Path and Moment, committed source revision, selected targets, frozen context manifest, user direction if supplied, intended move, and disclosed execution envelope.

`PROV-002` Every attempt MUST preserve its model/configuration identifier, start and terminal times, factual status, failure stage when applicable, resource use available from the provider, and any durably landed output identities.

`PROV-003` Every landed result MUST identify what it inherited, what changed, its observed output, and its exact parent versions or contributions. These are factual provenance fields, not private reasoning.

`PROV-004` The operation record MUST remain distinct from visible structural relationships. Editing a card or link MUST NOT rewrite the factual invocation record.

`PROV-005` Operation records MUST be inspectable from their result cards and from History without forcing the user through a form before ordinary actions.

`PROV-006` Failures, cancelled attempts, discarded late responses, and negative results MUST remain inspectable even when they create no result card.

## 9. Content entry and import

`INP-001` The user MUST be able to create typed cards and paste text directly into cards.

`INP-002` The user MUST be able to select local `.txt` and `.md` files for client-side intake. Each imported source MUST remain visibly attributable to its filename and type and MUST become ordinary editable source material.

`INP-003` Import MUST preserve the selected file as one identifiable source unit and MUST NOT silently summarize, semantically decompose, classify, or create derived cards. Exact presentation of a large source within the common card substrate is an architecture/UI decision.

`INP-004` Importing or pasting content MUST NOT add it to Focus, invoke an AI provider, or initiate background analysis.

`INP-005` Markdown and pasted rich text MUST be treated as untrusted content. Executable HTML, scripts, event handlers, and unsafe URL schemes MUST NOT run.

`INP-006` A malformed, unsupported, disguised-binary, or over-limit file MUST be rejected before partial import with a specific explanation. File and paste limits are **[OPEN]** and require measured selection before implementation is claimed complete.

`INP-007` Duplicate imports MUST NOT be silently merged or replace prior cards. If duplicate detection is offered, it MUST leave the choice visible to the user.

`INP-008` A URL reference card MUST store only the user-provided URL and optional notes. The first prototype MUST NOT fetch, preview, summarize, crawl, or claim knowledge of the remote page.

`INP-009` Only explicitly supported web schemes may become clickable. Other strings remain inert text.

`INP-010` Imported content reaches an AI provider only when it is present in the exact visible context of an explicitly invoked capability.

## 10. Common AI-operation contract and Branch

### Common operation behavior

`AI-001` Branch, Compare, Recombine, explicit Harvest, and Searchlight MUST begin only through an explicit local action that names the capability.

`AI-002` Invocation itself authorizes the disclosed default envelope. Minerva MUST NOT require per-result approval, mandatory procedure selection, or a second confirmation before valid result cards land.

`AI-003` Before first use and thereafter through an inspectable local surface, the user MUST be able to see that selected context will leave the browser, which capability will run, and the applicable bounded call/time/token/spend envelope. Exact values are **[OPEN]** pending provider measurement.

`AI-004` The canvas MUST remain editable and navigable while provider work runs. Background completion MUST NOT capture the user's pointer, selection, or keyboard focus.

`AI-005` Each valid result MUST commit as an ordinary durable card with its operation record and required `derived from` lineage. A card is usable immediately after durable landing.

`AI-006` No AI operation may edit or delete an existing card, add existing content to Focus, adopt a free-form relationship, change structure membership, or switch Paths.

`AI-007` A technical retry MUST require an explicit user action, create a new attempt, and preserve the original context, targets, move, and prior attempts. There is no silent semantic retry.

`AI-008` Retry, Resume, and Redo are distinct: Retry executes a new provider attempt; Resume continues disclosed unfinished work against its original frozen inputs; Redo restores prior durable state with no provider work or spend.

`AI-009` When network or provider access is unavailable, local canvas, Focus, History, and existing-card operations MUST remain usable in an already loaded page. Provider-dependent actions MUST fail or remain unavailable truthfully and MUST NOT silently queue for later execution.

`AI-010` A generated result is structurally valid only when it has nonempty content in the supported card representation, can be rendered safely within the disclosed size/resource bounds, has complete operation identity and frozen-manifest references, contains every provenance or contribution field required for that capability, and still has valid Path and cancellation authority at commit time.

`AI-011` Semantic quality, novelty, creativity, agreement, or usefulness MUST NOT become a hidden validity gate. A structurally valid but disappointing result lands for human judgment; a structurally invalid result remains a factual failed attempt and MUST NOT create a success card.

### Branch

`BR-001` Branch MUST act on one selected primary card or, when no card is selected, a nonempty Focus set. If its targeting requirement is unmet or ambiguous, the action MUST be unavailable with a local explanation rather than guessing.

`BR-002` A Branch direction is optional. Without one, the recorded intended move is the plain default: develop this direction from the visible context.

`BR-003` One Branch invocation MUST produce at most one result card. It MUST preserve its source card or focused sources unchanged and create visible `derived from` lineage.

`BR-004` A Branch result MUST land outside Focus and cite the exact source versions used even if those cards change while the request runs.

`BR-005` Branch failure MUST leave the operation and attempt visible and eligible for explicit retry without creating an empty success card.

## 11. Compare, Recombine, and Harvest

### Compare

`CMP-001` Compare MUST require at least two explicit selected cards. Focus may provide supporting context but MUST NOT silently become an additional compared candidate.

`CMP-002` A comparison MUST identify source-backed commonalities, differences, tensions, and tradeoffs in a durable editable card with references to the compared versions.

`CMP-003` A comparison MUST NOT rank, score, recommend, crown a winner, or treat generated distance as quality.

`CMP-004` The comparison card MUST land outside Focus and remain ordinary editable material. Its original landed version remains preserved in the operation record.

### Recombine

`REC-001` Recombine MUST require at least two selected parent cards and at least one explicitly named contribution from each parent.

`REC-002` A contribution MAY be identified by an exact excerpt or a short user-authored description tied to a parent version. The interaction SHOULD be local to the selected cards and MUST NOT require a procedural questionnaire.

`REC-003` A recombination MUST create one new child card, preserve each parent unchanged, and record a contribution-to-parent mapping plus `derived from` lineage to every parent.

`REC-004` The operation record MUST distinguish the named inherited contributions from the newly generated synthesis without claiming private reasoning.

`REC-005` Later edits or removal of a parent MUST NOT alter the recombination's frozen contribution citations.

### Harvest

`HAR-001` The user MUST be able to invoke Harvest on any nonempty valid context without completing a required template.

`HAR-002` An explicit Harvest MUST create one concise, editable card that cites its sources and captures the consequential subset of directions, connections, tensions, bridges, dead ends, limitations, or open experiments supported by those sources.

`HAR-003` Harvest MUST NOT declare a winner, conceal failed inputs, or invent consensus. It MAY identify a promising frontier or experiment as a possibility for human judgment.

`HAR-004` A Searchlight Harvest MUST use the derived-stage manifest in `CTX-013`, identify the distinct contribution of each landed arm used, one supported tension or connection among them, and a next frontier or experiment. It MUST state omitted, failed, or unavailable approaches.

`HAR-005` A landed Harvest is never silently rewritten when a later retry adds another result. When an explicit Searchlight retry changes the landed approach set, its disclosed envelope may create a new Searchlight Harvest card from a new `CTX-013` manifest. The user may also invoke a separate explicit Harvest against a chosen updated result set. Earlier and later Harvest cards and records remain durable.

## 12. Targeted Searchlight sweep

`SL-001` One Searchlight invocation MUST contain exactly one approach-selection stage, three generation arms, and one Harvest stage when eligible. It MUST contain no hidden critic, ranker, coverage, repair, fallback, or recursive follow-up stage.

`SL-002` Approach selection MUST use the frozen invocation context and produce exactly three plain-language, context-specific briefs before any generation arm begins. Each brief MUST state its intended move and why it differs from the other two.

`SL-003` If approach selection fails, returns other than three briefs, or returns a brief that is empty, unsafe to render, outside disclosed bounds, missing its intended move, or missing its distinguishing basis, no generation arm may begin. The invocation MUST report the structural failure and require an explicit retry; it MUST NOT apply a semantic quality screen or fall back silently to a fixed procedure list.

`SL-004` Every arm MUST receive the same frozen context manifest plus only its own fixed, self-contained approach brief. It MUST NOT receive a sibling brief, a sibling result, a later workspace revision, or hidden whole-workspace context.

`SL-005` Searchlight results MAY be described as generation-isolated. The product MUST NOT claim statistical, cognitive, or model independence.

`SL-006` At most two arms may be `running` at once. The third MUST remain visibly `queued` until capacity is available.

`SL-007` Three labeled approach slots MUST appear before result generation and MUST expose factual arm states: `queued`, `running`, `landed`, `failed`, `timed out`, `interrupted`, or `cancelled`.

`SL-008` A landed arm MUST create exactly one ordinary durable result card outside Focus. Results commit independently and become usable in completion order, which conveys no ranking.

`SL-009` One arm's failure MUST NOT cancel, erase, or prevent independent durable landing of its siblings.

`SL-010` **Pause** MUST prevent queued arms and Harvest from starting. In-flight arms may reach a truthful terminal state. Pause MUST NOT alter the frozen context or erase landed work.

`SL-011` **Resume** MUST continue only the remaining original work against the original context and approach briefs. It MUST NOT absorb canvas changes made while paused.

`SL-012` **Cancel** MUST synchronously revoke authority for future card commits, stop queued work and Harvest, and request transport abort where possible. A later provider response MUST NOT create a card after local cancellation authority commits.

`SL-013` Already landed cards and all attempt/failure records MUST remain durable after Pause or Cancel.

`SL-014` A failed, timed-out, or interrupted arm MAY be retried individually through an explicit action. Retry MUST create a new user-ordered top-level Moment linked to the original sweep, reopen the sweep's current aggregate assessment from its prior terminal state, use the original context and approach, create a new attempt under that approach, and preserve every prior attempt and terminal assessment.

`SL-015` Searchlight Harvest becomes eligible when the currently authorized attempt for every approach is terminal and at least two approaches have a landed result. The first eligible state creates the first derived-stage Harvest. If a later explicit retry changes the landed approach set, that Retry Moment creates a new eligible Harvest stage and, if successful, a new Harvest card without altering the earlier one. With zero or one landed approach, the sweep MUST report insufficient contrast and MUST NOT fabricate a cross-arm Harvest.

`SL-016` After successful approach selection, a sweep's current assessment is `complete` only when every approach has at least one landed attempt and the latest eligible Harvest covering all three has durably landed. It is `partial` when terminal generation work leaves at least one approach without a landed attempt or when the latest eligible Harvest failed. An explicit retry may move the current assessment from `partial` back through `running` to `complete`, while every earlier failure, Harvest, and partial assessment remains inspectable. Approach-selection failure, interruption, and cancellation remain factually distinct.

`SL-017` Reloading or closing the page MUST NOT imply continued browser-local execution. Committed results survive. Queued or running work becomes `interrupted` on re-entry and never restarts or spends automatically.

`SL-018` One Searchlight invocation MUST be one expandable top-level History Moment regardless of arm completion order. Arms, attempts, failures, cards, and Harvest remain inspectable children.

`SL-019` Searchlight MUST enforce hard call, token, wall-time, and spend ceilings and MUST expose limit-caused terminal states accurately. Exact limits are **[OPEN]** pending the provider and orchestration spike.

## 13. Semantic History, Undo/Redo, and Paths

`HIS-001` Workspace Undo MUST reverse one meaningful user-authorized action: one move or multi-card move, completed edit, create/remove/restore, Focus or structure change, import, Branch, Compare, Recombine, Harvest, Searchlight invocation, or explicit AI retry.

`HIS-002` Pan, zoom, hover, temporary selection, card expansion, voice playback, ephemeral highlights, and unpinned conversation MUST NOT create Moments or displace a meaningful action from Undo.

`HIS-003` While a card editor is active, ordinary text-edit undo MAY operate within the uncommitted edit. After commit, workspace Undo MUST treat the completed edit as one semantic action and make the boundary understandable.

`HIS-004` Undo order MUST follow meaningful user action order, not asynchronous result-arrival order. Background AI results MUST attach to their initiating Moment rather than become surprising top-level Undo targets.

`HIS-005` Redo MUST restore exact prior identities, content, versions, positions, structures, relationships, Focus, lineage, operation records, and partial state. It MUST NOT invoke a provider, retry work, use current context, or incur spend.

`HIS-006` History MUST list human-readable Moments rather than implementation events, hashes, autosaves, pointer frames, or model tokens.

`HIS-007` Selecting an older Moment MUST open a visibly read-only preview. Leaving preview for the present MUST make no mutation.

`HIS-008` **Continue from here** MUST create a writable active Path from the previewed Moment without another confirmation. The former present remains a recoverable inactive Path.

`HIS-009` Performing a new meaningful action after stepping backward with Undo MUST preserve the displaced Redo future automatically as a recoverable Path rather than delete it.

`HIS-010` Undoing a Searchlight invocation MUST revoke unfinished authority, cancel remaining work, and remove that invocation's landed cards and Harvest from the active Path while retaining its operation, attempts, failures, results, provenance, and spend in recoverable History.

`HIS-011` If later active-Path actions depend on a result, its source action cannot be undone first. Minerva MUST require dependent actions to be undone in reverse order and explain the dependency; arbitrary selective undo is out of scope.

`HIS-012` Continuing from an earlier Moment while provider work runs MUST revoke unfinished authority on the departing Path. Already committed results remain on the preserved former future; late results MUST NOT cross into the new Path.

`HIS-013` The active Path, current head, Moments, Undo/Redo position, card versions, operation records, and preserved futures MUST survive reload. Preserved Paths MUST NOT be silently pruned.

`HIS-014` Card lineage MUST answer where a result came from; History MUST answer what changed in the workspace. The UI MUST keep the two concepts distinct while allowing cross-reference.

`HIS-015` Undoing a Searchlight Retry Moment MUST remove only the result, derived Harvest, and current aggregate-assessment change created by that retry from the active Path, restoring the preceding partial state without altering the original sweep or intervening earlier actions. Redo MUST restore those exact consequences without provider work.

## 14. Persistent bounded voice companion

### Activation and conversation

`VOI-001` Voice MUST never start automatically. **Start voice** requests browser permission and opens one page-scoped session. **Mic off**, **Stop speaking**, and **End voice** MUST remain distinct actions.

`VOI-002` Spoken and typed turns MUST share one visible current-session conversation and synchronized text/audio representations of the same response. The voice surface MUST remain compact and subordinate to the canvas.

`VOI-003` Every session MUST begin in Quiet. In Quiet, the companion responds only when addressed; canvas changes alone MUST NOT invoke a provider or trigger commentary.

`VOI-004` The user MAY enable Active brainstorming for the current session without reconnecting. Active resets to Quiet when the session ends.

### Active stance

`VOI-005` Active MAY contribute one brief observation, question, tension, or suggested next move after a meaningful committed content, Focus, structure, Path, rewind, pause, cancellation, or terminal AI-operation checkpoint.

`VOI-006` Active triggers MUST be coalesced. Active MUST NOT react to pan, zoom, hover, pointer movement, ordinary layout changes, selection alone, every Searchlight arm, its own prior contribution, or any uncommitted state.

`VOI-007` Only one unsolicited Active contribution may be pending or playing. After contributing, Active MUST wait for another qualifying human or workspace checkpoint rather than recursively continuing.

### Context and authority

`VOI-008` At each spoken-utterance boundary, typed submission, or Active observation, Voice MUST freeze the latest committed canonical Focus projection plus targets selected at that boundary and the visible current-session conversation required for continuity.

`VOI-009` Voice MUST expose a compact receipt such as **Voice saw Focus 4 + 2 selected**, expandable to the exact manifest and revision. Empty Focus and selection mean no canvas material; Voice MUST NOT substitute the viewport or whole workspace.

`VOI-010` Committed canvas changes MUST update the potential next-turn binding locally without restarting media or invoking the provider. A response already underway remains bound to its captured revision.

`VOI-011` If Voice context is stale, incomplete, over limit, or unavailable, the companion MUST stop making workspace-grounded claims until a current exact context can be used. It MUST NOT silently truncate or summarize. Session bounds SHOULD prevent conversation overflow before this state.

`VOI-012` Voice MAY observe, discuss, question, challenge, synthesize, and suggest. It MUST NOT create, edit, move, group, link, focus, remove, restore, or pin cards; invoke any AI or History operation; queue a later mutation; or claim that workspace work occurred.

`VOI-013` When asked to mutate the workspace, Voice MUST respond briefly that it is read-only and point to the relevant direct canvas action without executing or queueing it.

`VOI-014` Voice MAY apply ephemeral turn-scoped highlights to referenced cards or structures. Highlights MUST NOT change selection, Focus, membership, relationships, History, or durable state.

`VOI-015` Ambiguous spatial references such as “this” or “those” MUST receive a brief clarification rather than a guess.

### Concurrency, interruption, and memory

`VOI-016` Canvas manipulation MUST NOT block microphone capture or stop assistant playback, and voice activity MUST NOT block canvas interaction.

`VOI-017` Spoken barge-in, a submitted typed turn, or **Stop speaking** MUST immediately end playback and mark the partial response `interrupted`. The replacement turn uses a newly frozen context.

`VOI-018` Assistant audio MUST NOT be transcribed as user speech. Route changes, echo, input loss, and suspension MUST produce truthful input or connection degradation.

`VOI-019` Finalized and interrupted utterances MAY remain as temporary captions during the page session. They MUST NOT be written to durable browser storage and MUST disappear on reload, explicit clearing, or session end.

`VOI-020` The user MAY pin or drag one visible utterance onto the canvas. That explicit action creates one ordinary durable card outside Focus, records speaker and a lightweight session-local source anchor without retaining the full transcript, and enters History once.

`VOI-021` Nothing in the conversation may be pinned, summarized, or converted into a card automatically.

### Failure, privacy, and bounds

`VOI-022` Permission denial, input loss, transcription failure, model failure, playback failure, context mismatch, suspension, and spend/session exhaustion MUST identify their actual stage. Voice failure MUST NOT impair the canvas or committed work.

`VOI-023` Typed input and synchronized response text MUST remain available when audio output fails. False media continuity after suspension is prohibited.

`VOI-024` Raw audio MUST NOT enter durable browser storage. Provider processing and retention MUST be disclosed so browser-local workspace storage is not confused with local voice inference.

`VOI-025` Enabling Active MUST disclose once that it may initiate bounded provider calls. It MUST NOT require repeated confirmations for qualifying contributions.

`VOI-026` Voice MUST enforce hard session-time, inference, and spend ceilings. Exact values, provider, model, transport, voice, and supported audio routes are **[OPEN]** pending a real-browser spike.

`VOI-027` Voice responses and unsolicited Active contributions MUST default to concise turns that yield the floor quickly. The user MAY request greater detail; the companion MUST NOT default to long narration that displaces canvas work.

## 15. Browser-local persistence, failure, and recovery

### Persistence

`PER-001` Acknowledged workspace state MUST survive reload and browser restart on the same supported browser and device.

`PER-002` Durable state MUST include workspaces, cards and versions, structures and membership, relationships, Focus, operation records, landed and failed results, History Moments, Undo/Redo position, active Path, preserved futures, and interrupted-work status.

`PER-003` Temporary selection, hover, ephemeral voice highlights, raw audio, and unpinned conversation MUST NOT become durable workspace state.

`PER-004` Browser-local durability MUST use an atomic or recoverably equivalent commit boundary. A crash, reload, or tab close during persistence MUST yield either the prior acknowledged revision or the complete new acknowledged revision, never a falsely acknowledged mixture.

`PER-005` Storage unavailability, quota exhaustion, corruption, failed schema migration, unsupported browser behavior, or private-mode restrictions MUST NOT trigger a silent reset. Minerva MUST preserve the last readable state where possible and enter a truthful degraded/read-only or unavailable state.

`PER-006` Schema evolution MUST preserve acknowledged semantic state or stop with recoverable diagnostic information. A newer workspace MUST NOT be silently downgraded or partially opened by an older application version.

`PER-007` The product MUST disclose that clearing site data, browser eviction, device loss, private browsing, or unsupported storage may make a workspace unrecoverable. It MUST NOT claim server backup.

`PER-008` Vercel hosts the application but does not own durable workspace state in this phase. Merely opening, editing, moving, or focusing local content MUST NOT upload the workspace.

### Failure and recovery

`FAIL-001` A failure MUST identify the affected capability and stage, preserve existing durable state, and present only actions that are actually available.

`FAIL-002` Persistence failure takes precedence over provider success. If a generated result cannot commit locally, Minerva MUST NOT acknowledge the card as landed or the operation as complete.

`FAIL-003` Duplicate activation, replayed requests, retries, and late provider responses MUST NOT create untraceable duplicate commits. A legitimate explicit retry remains a distinct inspectable attempt and may land a distinct result.

`FAIL-004` Cancellation authority, Path authority, and frozen input revision MUST be checked again at commit time. A response whose authority was revoked MUST NOT mutate the active workspace.

`FAIL-005` Network loss in an already loaded app MUST leave local editing and persistence available when browser storage remains healthy. AI and voice failures MUST remain isolated and truthful.

`FAIL-006` Reload MUST never auto-retry or silently resume paid work. Interrupted work may be explicitly retried using its preserved inputs when allowed by the originating operation.

`FAIL-007` Hidden context, irreversible loss, silent mutation, a late commit after cancellation, false completion, or a displayed state that contradicts runtime is a release- and evaluation-blocking defect.

## 16. Privacy, security, authorization, and spend

`PRIV-001` User content MUST leave the browser only as part of the exact manifest or utterance required by an explicitly invoked AI capability or enabled Active contribution.

`PRIV-002` Before real user content is sent, Minerva MUST disclose the provider boundary, relevant retention behavior, and which content class is transmitted. The precise provider policy is **[OPEN]** and must be resolved before provider-enabled evaluation.

`PRIV-003` Browser-local storage MUST NOT be described as encrypted, private from other users of the device, backed up, or recoverable unless separately implemented and evidenced.

`PRIV-004` Application diagnostics SHOULD default to operation identity, revision, stage, timing, and resource metadata rather than card text, imported content, transcript text, or raw audio. Any content-bearing telemetry requires an explicit later decision and disclosure.

`PRIV-005` Imported content, pasted content, card text, relationship labels, filenames, URLs, and model output are untrusted data. They MUST NOT alter application authority, unlock hidden tools, execute code, or override the product's operation rules.

`SEC-001` Long-lived provider credentials and privileged service secrets MUST NOT be exposed to browser clients or stored in workspaces. A narrowly scoped, short-lived client setup credential MAY be used only when the selected real-time architecture proves its capability limits, expiry, revocation, origin boundary, and inability to grant broader provider access.

`SEC-002` Publicly reachable provider endpoints MUST enforce bounded admission so an anonymous browser cannot create unlimited billable work. Exact mechanisms and thresholds belong in `ARCHITECTURE.md`.

`SEC-003` A client-supplied operation, workspace, Path, or attempt identifier MUST NOT by itself grant authority to mutate unrelated local or server-side state.

`COST-001` Searchlight and Voice MUST have hard call, time, token, and spend ceilings before live provider use. Single-step AI operations MUST have a bounded request envelope. Exact values are **[OPEN]**.

`COST-002` Hidden retries, hidden follow-up calls, or undisclosed semantic stages are prohibited. Actual available call/token/spend metadata MUST remain attached to the operation record.

`COST-003` Reaching a limit MUST stop new provider work and expose the actual bounded outcome. It MUST NOT erase partial work, claim completion, or silently switch models or procedures.

## 17. Accessibility, responsive behavior, performance, and compatibility

### Accessible operation

`ACC-001` The complete spatial thinking loop MUST be usable without voice and without touch. Pointer and keyboard paths MUST reach equivalent canvas and workspace semantic outcomes; Voice's audio-specific behavior is verified separately.

`ACC-002` Keyboard users MUST be able to create, edit, move, select, multi-select, group, link, add/remove Focus, invoke operations, inspect receipts, Undo/Redo, preview History, and Continue from here.

`ACC-003` Cards, roles, structures, explicit membership, relationships, Focus inclusion, selection, Searchlight slots, operation states, History Moments, Paths, and voice states MUST have programmatic names and state—not color or position alone.

`ACC-004` A nonvisual structured representation MUST make card content, structure membership, relationships, Focus, lineage, operation results, History, and available actions navigable without interpreting the two-dimensional layout.

`ACC-005` Visible focus, readable contrast, browser zoom, text resizing, captions, and reduced-motion preferences MUST preserve access to the core loop. Motion and audio MUST NOT be the sole carrier of state.

`ACC-006` Drag interactions MUST have direct non-drag equivalents for movement where practical and for every semantic effect, including membership and Focus.

### Responsive and input boundary

`RESP-001` The primary editing experience MUST support an explicitly tested desktop/laptop browser matrix using keyboard plus mouse or trackpad. The exact browsers, versions, minimum viewport, and support period are **[OPEN]**.

`RESP-002` Essential fixed controls and truthful status MUST remain reachable without altering canvas semantics at every supported viewport and browser zoom level.

`RESP-003` Unsupported small-screen or input conditions MUST degrade truthfully rather than presenting inaccessible controls or claiming full support. Touch may work through ordinary pointer compatibility but touch-specific or multi-touch behavior is not a first-prototype requirement.

### Performance and reliability

`PERF-001` Card manipulation, canvas navigation, local selection, and Focus changes MUST remain responsive while AI or voice work is active. Provider latency MUST NOT block local input.

`PERF-002` The representative performance corpus MUST include the complete canonical example, a full owner-rehearsal workspace, three simultaneous Searchlight slots, preserved partial/failure records, and multiple History Paths.

`PERF-003` Before a performance claim is accepted, measured thresholds for interaction latency, load/reload, durable commit, Searchlight envelope, voice latency, workspace size, and local storage headroom MUST be recorded against the supported browser matrix. Values are **[OPEN]** and MUST NOT be copied from predecessor projects without measurement.

`PERF-004` Capacity or speed is not evidence of consequential discovery. Reliability metrics MUST distinguish durable commit, truthful terminal state, successful result landing, and D-008 product outcome.

## 18. Product evaluation requirements

The evaluation contract is stated once, in D-008 of `DECISIONS.md`, which this
specification cannot change. Each `EVAL-*` identifier below remains a
first-prototype obligation with the force of `MUST`; its normative text is the
cited D-008 clause. The table exists so acceptance scenarios and traceability
can cite a stable identifier without duplicating the decision.

| ID | Obligation | Normative source in D-008 |
|---|---|---|
| `EVAL-001` | Owner rehearsal runs as soon as one complete central loop works and before recruiting; it uses the canonical example and one genuine problem in separate clean evaluation states, which adds no multiple-workspace product feature | Stage 1; *Latest responsible point* |
| `EVAL-002` | Owner rehearsal is a readiness falsifier, not comparative proof | Stage 1 |
| `EVAL-003` | Three matched pairs, one Minerva and one capable linear-chat participant each | Stage 2, first bullet |
| `EVAL-004` | Same frozen problem, source packet, constraints, model where controllable, and 30-minute period; resource use recorded, not equalized | Stage 2, second bullet |
| `EVAL-005` | Mechanics-only practice on an unrelated problem; moderator coaching invalidates the session | Stage 2, third bullet |
| `EVAL-006` | Capable ordinary linear chat as baseline; Voice off in both primary conditions and evaluated separately against D-007 | Stage 2, fourth bullet |
| `EVAL-007` | Frozen pre-session inventory; at most three interface-neutral carry-forward discoveries or `none` | Stage 2, fifth bullet |
| `EVAL-008` | A qualified consequential shift satisfies all five conditions | *Qualified consequential shift* |
| `EVAL-009` | A Minerva-qualified shift traces to a Minerva-specific interaction, not merely a useful generated card | *Qualified consequential shift*, final paragraph |
| `EVAL-010` | One normalized case packet per session with the listed contents | *Evidence and judgment* |
| `EVAL-011` | Every Minerva session is reviewed against the countermetrics | *Countermetrics* |
| `EVAL-012` | Independent reviewer checks the blinded packet first, then the trace; the participant owns the value judgment | *Evidence and judgment* |
| `EVAL-013` | Initial gate: at least two of three pairs favor Minerva, no recurring material failure across two Minerva users, one reconstructable contribution | *Decision gate* |
| `EVAL-014` | At most two additional pairs when evidence is genuinely mixed; after five valid pairs at least three must favor Minerva | *Decision gate* |
| `EVAL-015` | Capability expansion stops early on the two named negative patterns | *Falsifier* row; *Decision gate* |
| `EVAL-016` | Provider outage or material defect invalidates the affected condition; repeat once after repair | *Invalid sessions and immediate stops* |
| `EVAL-017` | Trust defects stop evaluation until repaired; recurrence after one repair stops the approach | *Invalid sessions and immediate stops* |
| `EVAL-018` | Counts, distance, automated scores, delight, and infrastructure are not proof of consequential discovery | *Intentionally not used as proof* |

## 19. Observable acceptance scenarios

| ID | Capability | Smallest decisive evidence | First material falsifier |
|---|---|---|---|
| `AC-001` | First encounter | A fresh browser reaches either an editable library workspace or blank canvas directly; both choices are visible and the example uses ordinary controls. | A tour, read-only example, hidden blank path, sign-in, or preferred answer blocks first use. |
| `AC-002` | Durable local mutation | Create/edit/move/focus a card, receive success, reload and restart the same supported browser, and recover the exact acknowledged state and History Moment. | Any acknowledged state is absent, mixed, silently reset, or represented as cloud-backed. |
| `AC-003` | Explicit context | Capture a manifest, then pan, zoom, and move cards without changing content or explicit structures; the serialized AI payload remains exact while a durable geometry move may advance the recorded workspace revision. Add/remove Focus or targets and the visible count and payload change accordingly. | Geometry changes the payload, an excluded card appears, a link pulls an endpoint, or overflow truncates silently. |
| `AC-004` | Frozen Branch | Invoke Branch, then edit and move its source while work runs. The landed card remains outside Focus and cites the original source version and manifest. | Source mutation changes the running input, the original is edited, or the result arrives without durable lineage. |
| `AC-005` | Neutral Compare | Compare at least two selected cards and inspect a durable source-backed comparison. | It ranks a winner, silently compares Focus-only cards, or loses source versions. |
| `AC-006` | Contribution Recombine | Name one exact contribution from each of two parents and create a child whose record maps both contributions and preserves both parents. | Parent contributions are vague/untraceable, a parent is overwritten, or later edits rewrite the record. |
| `AC-007` | Harvest | Harvest a nonempty context and inspect a concise editable source-linked result containing supported consequences and limitations. | It fabricates consensus, hides failures, lacks citations, or silently updates later. |
| `AC-008` | Searchlight isolation | Inspect three briefs fixed before generation and captured arm requests showing identical frozen context plus only each arm's own brief, with no sibling result. | Briefs are chosen adaptively after results, sibling content leaks, or a hidden stage/call occurs. |
| `AC-009` | Searchlight control | While two arms run, keep using the canvas; pause queued work, resume against original input, then cancel and inject a late provider response. Landed siblings persist and the late response creates no card. | Canvas blocks, later edits enter resumed work, cancellation erases landed cards, or a late result commits. |
| `AC-010` | Searchlight partial truth | Exercise arm failure, timeout, harvest failure, and page reload. Each stage remains distinct; successful cards persist; queued/running work becomes interrupted; incomplete work never says complete. | One failure erases siblings, reload auto-spends, or terminal state is falsely complete. |
| `AC-011` | Retry and semantic Undo/Redo | Let an initial Searchlight finish partial with one failed arm and a two-arm Harvest; make an unrelated user edit; explicitly retry the failed arm; and let a new result and three-arm Harvest land. Undo removes the Retry Moment's result and new Harvest while retaining the unrelated edit and initial partial sweep; Redo restores them exactly with zero provider calls. | Retry rewrites the earlier Harvest or Moment, asynchronous arrival changes user-action order, old failures disappear, or Redo regenerates content. |
| `AC-012` | Preserved Path | Preview an older Moment, Continue from here, and make a new edit. Both the new active Path and former future remain durable after reload; late departed-Path work cannot cross. | Preview mutates state, former future is destroyed, or late work lands on the new Path. |
| `AC-013` | Bounded intake | Import safe `.txt` and `.md`, paste content, and create a URL reference while monitoring Focus and network requests. Source metadata remains visible and no import causes AI or URL fetch. | Import executes content, auto-chunks/summarizes, enters Focus, calls AI, or fetches a URL. |
| `AC-014` | Storage failure | Force an interrupted/partial write, commit failure, quota exhaustion, recoverable corruption, schema incompatibility, and a concurrent-tab write condition. The last good readable revision remains. For unrecoverable corruption, the UI reports truthful unavailability without reset or recovery claims. | Success is acknowledged, data silently resets, corruption is hidden, false recovery is claimed, or tabs overwrite each other. |
| `AC-015` | Real voice concurrency | In a supported real browser with actual audio, speak and receive concise audible output while moving/editing the canvas; barge in; inspect the frozen context receipt; degrade output to text. | Canvas interrupts media, assistant audio self-transcribes, barge-in fails, context is hidden/stale, voice monopolizes the session, or voice mutates state. |
| `AC-016` | Voice session memory | Pin one finalized or interrupted utterance, reload, and inspect the resulting card and History. The card remains; the unpinned conversation and raw audio do not. | Transcript or audio persists silently, pinning captures unrelated conversation, or the card enters Focus automatically. |
| `AC-017` | Accessible core loop | Complete the loop using keyboard and the nonvisual structure representation with voice and touch unavailable. | A semantic action requires drag, color, spatial sight, touch, or voice. |
| `AC-018` | Complete product loop | On the owner-rehearsal problem, complete every central-loop step and reconstruct one claimed result from visible manifests, contributions, lineage, operation records, and History. Record separately whether the primary canvas felt like a responsive thinking instrument or like operating a graph-management interface. | The loop depends on a hidden guide/workflow, the result's cause cannot be reconstructed, or operating the interface displaces the thinking work. |
| `AC-019` | Matched product evidence | Execute D-008 with preserved packets, 24-hour checks, reviewer records, countermetrics, and the declared decision gate. | Output volume or model scoring substitutes for participant-owned consequence, or conditions are materially unmatched. |

## 20. Evidence required for completion claims

Evidence is cumulative; a later level does not erase failures at an earlier level.

| Level | Claim supported | Evidence |
|---|---|---|
| `E0 — Plan` | Intended behavior is specified | Approved intent, decisions, spec, and traceability |
| `E1 — Source` | Behavior is implemented in source | Exact source revision and bounded review of the relevant path |
| `E2 — Automated contract` | Deterministic semantics hold in a harness | Context, state, history, cancellation, import, and accessibility contract tests |
| `E3 — Local browser` | Integrated behavior works in a real browser | Fresh browser interaction, reload/restart, fault injection, and console/network evidence |
| `E4 — Deployed web` | The exact build is reachable through its isolated Vercel deployment | Deployment identity, immutable URL, readiness, route response, and interactive readback |
| `E5 — Live provider` | Real generation or voice behavior works end to end | Disclosed provider/model, real request, actual audio where claimed, spend/latency receipt, and durable visible outcome |
| `E6 — Supported environment` | Claims hold across the declared browser/input matrix | Repeated real-environment evidence at the selected support boundaries |
| `E7 — Product outcome` | Minerva changes what a person can discover | D-008 owner rehearsal and matched evaluation evidence |

`EVID-001` A build, unit test, source inspection, mocked callback, or deployment-ready status MUST NOT be presented as real-browser, real-provider, real-audio, or product-outcome proof.

`EVID-002` Capability evidence MUST name the observable outcome, smallest decisive evidence, first material falsifier, exact build/revision, environment, and bounded time window.

`EVID-003` Verification stops after decisive evidence passes or at the first material falsifier. Test volume and reviewer unanimity are not goals.

`EVID-004` Operational evidence and product-value evidence MUST remain separate. Durable landing, high terminalization, or many outputs cannot satisfy D-008.

## 21. Explicit exclusions and roadmap boundaries

The following are outside the first prototype:

- Accounts, authentication, anonymous cloud workspaces, private links, cloud backup, cross-device sync, and collaboration.
- Multiple local workspaces, workspace-library navigation, and destructive New/Reset behavior.
- Touch- or multi-touch-dependent interaction, stylus grammar, device motion, spoken deixis timing, and device-specific audio controls.
- Voice-authorized writes, tools, operation invocation, automatic pinning, durable transcripts, wake words, or background listening.
- Multi-generation agentic expeditions, ambient exploration, recursive autonomous branching, coordinators, subagents, and closed-browser continuation.
- More or fewer than three automatically selected Searchlight approaches, multi-model ensembles, adaptive reserve arms, automated coverage checks, and hidden content retries.
- Automated ranking, winner selection, novelty, quality, creativity, basin, attractor, embedding-distance, or user scoring.
- Fixed creative-procedure catalogs, mandatory prompts, mandatory procedure selection, and confirmation before every generated result.
- Context inferred from geometry, recursive structure expansion, multiple Focus sets, weights, importance sliders, link traversal, or silent summarization.
- PDF, office-document, presentation, spreadsheet, image, audio, OCR, web-page extraction, URL fetching, automatic chunking, and background transcript scanning.
- Local Claude Desktop or Codex transcript ingestion and Claude/Codex shared-link ingestion; these remain roadmap investigations.
- A fully exposed revision graph, named commits, selective undo, Path merge, history search, replay animation, concurrent work on inactive Paths, and automatic history pruning.
- General whiteboarding, general document editing, project management, organization administration, plugins, or a general-purpose agent platform.
- Compatibility with predecessor code, schemas, stored data, workflow state, deployments, or visual layouts.

Roadmapped anonymous cloud workspaces, transcript ingestion, agentic expeditions, ambient exploration, and voice writes require new product and authority decisions before implementation. They are not latent first-prototype requirements.

## 22. Implementation and measurement choices outside this specification

The following choices sit outside this specification's authority. Some are
already constrained or selected by `ARCHITECTURE.md` or R0; remaining details
MUST be resolved by the named roadmap spikes or measured support contracts
without changing product behavior. This list is not a current-status tracker;
`CURRENT_GATE.md` and `JOURNAL.md` carry that state.

1. Canvas rendering, hit testing, scene organization, and nonvisual representation.
2. Browser-local database, schema, transaction/commit model, migration, quota handling, and corruption recovery.
3. Multiple-tab coordination or single-writer enforcement.
4. Domain command/state ownership and projection strategy.
5. Card content representation, source-unit presentation, and safe Markdown rendering.
6. AI provider, model, gateway, prompt construction, structured-output validation, and provider-retention policy.
7. Context serialization order that satisfies deterministic, geometry-invariant manifests.
8. Searchlight scheduling, cancellation transport, timeout enforcement, resource accounting, and late-result suppression.
9. Voice model, transport, media-session owner, transcription/playback path, echo control, reconnect behavior, and browser audio support.
10. Provider credential boundary, anonymous abuse controls, request admission, and application diagnostics.
11. Exact single-action, Searchlight, and Voice call/token/time/spend ceilings.
12. Supported browsers, versions, viewports, keyboard conventions, accessibility conformance target, and performance/capacity thresholds.
13. Isolated Vercel project, environment variables, preview/production boundary, observability, and rollback mechanics.

An architecture choice is invalid if it weakens visible context, durable acknowledgement, reversibility, read-only voice authority, cancellation, failure truth, or any other approved invariant.

## 23. Traceability

| Source | Specification coverage |
|---|---|
| `INTENT.md` Problem, user, thesis | Sections 2–3; `INV-001`–`INV-012`; `SCOPE-001`–`SCOPE-004` |
| `INTENT.md` Workspace and context | Sections 4, 7–8; `CARD-*`, `STR-*`, `REL-*`, `CTX-*`, `PROV-*` |
| `INTENT.md` Central loop | Section 6 and `AC-018` |
| `INTENT.md` Branch/Searchlight | Sections 10 and 12 |
| `INTENT.md` Authority and voice | `AI-*`, Section 14, `PRIV-*`, `COST-*` |
| `INTENT.md` Truth principles and success | `STATE-*`, Sections 15, 18–20 |
| D-001 browser-local persistence | `WSP-*`, `PER-*`, `PRIV-003`, `AC-002`, `AC-014` |
| D-002 canonical example | `ONB-*`, `EVAL-001`, `EVAL-004`, `AC-001` |
| D-003 explicit spatial context | `CAN-*`, `STR-*`, `REL-*`, `CTX-*`, `AC-003`–`AC-004` |
| D-004 bounded local intake | `INP-*`, `PRIV-005`, `AC-013` |
| D-005 targeted Searchlight | `AI-*`, `HAR-004`–`HAR-005`, `SL-*`, `AC-008`–`AC-010` |
| D-006 semantic history and Paths | `STATE-005`–`STATE-006`, `HIS-*`, `AC-011`–`AC-012` |
| D-007 bounded voice companion | `VOI-*`, `AC-015`–`AC-016` |
| D-008 staged matched evaluation | `EVAL-*`, `AC-018`–`AC-019`, `E7` |

## 24. Approval record

The product owner approved this specification on September 6, 2026, including the explicit AI-assisted Compare/Recombine/Harvest interpretation in Section 1 and the one-current-workspace prototype boundary.

This approval froze the first-prototype behavior contract. `ARCHITECTURE.md`
and `ROADMAP.md` have since been approved for mechanisms and long-form sequence;
`CURRENT_GATE.md` carries current authorization. None of those documents
authorizes reuse of predecessor code.
