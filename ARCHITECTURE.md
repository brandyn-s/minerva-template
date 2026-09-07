# Minerva — Architecture

## 1. Status, authority, and interpretation

| Field | Value |
|---|---|
| Status | **Approved 1.0 — architecture decisions `A-001`–`A-007` approved; named spike selections remain open** |
| Date | September 6, 2026 |
| Approved foundation | `A-001` — browser-local modular monolith with a product-owned semantic kernel |
| Approved detailed decisions | `A-002` — hybrid immutable-version journal plus rebuildable current projection; `A-003` — one writable tab with visibly read-only secondary tabs; `A-004` — page-scoped AI/Searchlight coordination with no server workspace state; `A-005` — content-free durable server admission state only; `A-006` — main-thread authority initially, with evidence-gated worker extraction; `A-007` — sibling structured nonvisual projection over the same domain and commands |
| Product authority | [`INTENT.md`](./INTENT.md), then approved entries in [`DECISIONS.md`](./DECISIONS.md), then [`SPEC.md`](./SPEC.md) |
| Purpose of this file | Define how the approved first-prototype behavior is implemented without changing it |
| Historical boundary | Searchlight, Atlas, Gestures, their deployments, and their source are evidence only. Minerva is greenfield. |

`MUST`, `SHOULD`, `MAY`, and **[OPEN]** retain the meanings defined in `SPEC.md`. An architecture choice cannot weaken a product requirement. If this file conflicts with the approved product documents, the product documents win and the architecture must change.

This file does not authorize implementation. It establishes the design to be approved before `ROADMAP.md` sequences work.

## 2. Architecture decision A-001

### Decision

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Choice | **Option B — browser-local modular monolith** |
| Semantic authority | A framework-independent TypeScript `WorkspaceKernel` |
| Durable workspace authority | One transactional browser-local `WorkspaceRepository` |
| Replaceable adapters | Canvas, browser storage, AI transport, Voice transport, clocks, identifiers, and diagnostics |
| Server role | Bounded provider access, ephemeral Voice setup, content-free admission, and content-free operational diagnostics; never workspace authority |

The three foundations considered were:

| Option | Shape | Disposition |
|---|---|---|
| A. Renderer-led prototype | A canvas SDK owns document state, history, and persistence | Rejected because renderer semantics would redefine Focus, Moments, Paths, and durable acknowledgement |
| **B. Browser-local modular monolith** | Minerva owns semantic truth; volatile technologies sit behind narrow ports | **Approved** |
| C. Worker/event platform | A worker-owned event log communicates through a message protocol | Deferred because it adds concurrency and debugging cost before a measured need |

### Why this boundary

Minerva's irreducible complexity is not drawing cards. It is keeping context, causality, asynchronous effects, semantic Undo/Redo, and preserved futures truthful while the canvas and Voice remain responsive. Those rules need one product-owned authority.

This choice gives the prototype one answer to each critical question:

- What state is committed?
- What did the user authorize?
- Which Path may receive a late result?
- What exact context did an operation see?
- When may the interface say an action landed?
- What survives reload?

It also preserves a future cloud seam without building accounts, synchronization, CRDTs, cloud tables, or dual-write behavior now.

### A-001 falsifier

Revisit this foundation if the interleaved-local-truth spike in Section 24 shows that the approved History and cancellation contracts cannot be represented without framework objects in the kernel, destructive rewriting of prior state, provider execution during Redo, or materially different semantics for a future repository.

## 3. System shape

```text
Human
  | pointer, keyboard, speech, typed conversation
  v
Next.js application shell
  |
  +-- WorkspaceRuntime — one instance for the page session
        |
        +-- CanvasAdapter ----------------------- visual spatial projection
        +-- StructuredWorkspaceView ------------ nonvisual/keyboard projection
        +-- InteractionSessionStore ------------ ephemeral UI state
        +-- VoiceSession ------------------------ ephemeral media/conversation
        |
        +-- WorkspaceFacade
              |
              +-- WorkspaceKernel -------------- sole semantic authority
              |     +-- History/Path rules
              |     +-- ContextCompiler
              |     +-- operation authority
              |
              +-- WorkspaceRepository ---------- atomic IndexedDB adapter
              |
              +-- OperationCoordinator --------- page-scoped AI scheduling
                        |
                        v
                bounded Vercel Route Handlers
                   +-- admission reservation
                   +-- one disclosed AI stage
                   +-- ephemeral Voice setup
                        |
                        v
                     provider
```

The server has no route back into the workspace. A provider response returns to the browser as untrusted proposal data and may land only through the same kernel and repository path as any other mutation.

## 4. Module and dependency boundaries

| Module | Sole responsibility | Must not own |
|---|---|---|
| `domain/kernel` | Validate typed commands and produce complete commit plans | React, DOM, IndexedDB, network, media, provider SDKs |
| `domain/history` | Moments, Paths, dependency rules, Undo/Redo, preserved futures | UI timeline state or provider execution |
| `domain/context` | Deterministic Focus-plus-target projection and manifests | Token truncation, model prompts, geometry inference |
| `application/facade` | Serialize commands, commit them, publish acknowledged projections | Independent semantic state |
| `application/operations` | Launch and coordinate work only after durable authorization | Direct workspace mutation or hidden retry |
| `application/voice` | Own one page-scoped media and conversation session | Durable transcript or workspace command authority |
| `ports` | Define repository, inference, Voice, admission, IDs, clocks, and diagnostics seams | Implementations or framework types |
| `adapters/browser` | IndexedDB, writer coordination, file intake, browser capabilities | Product semantics |
| `adapters/server` | Versioned HTTP protocol and provider normalization | Workspace reads or writes |
| `ui` | Render projections and translate interaction into intents | Persistence, context construction, provider calls |

Dependency direction is inward: UI and adapters depend on application and domain contracts; the domain never imports outward. A port exists only at a proven volatility or trust boundary. Minerva MUST NOT grow a generic plugin system, service bus, agent framework, or internal microservice topology.

## 5. State ownership

| State | Canonical owner | Durability |
|---|---|---|
| Cards and versions, committed geometry, roles, structures, membership, relationships, Focus, lineage | `WorkspaceKernel` through `WorkspaceRepository` | Durable |
| Revisions, Moments, Paths, active head, preserved futures, dependencies | `WorkspaceKernel` through `WorkspaceRepository` | Durable |
| Canvas-generating operations, manifests, approaches, attempts, effects, failures, usage receipts | `WorkspaceKernel` through `WorkspaceRepository` | Durable |
| Current selection, edit buffer, drag ghost, drop preview, hover, marquee, menus, expanded card | `InteractionSessionStore` | Ephemeral |
| Camera, pointer capture, hit-test and culling caches, animation state | `CanvasAdapter` | Ephemeral in the first prototype |
| Provider deltas and transport handles | `OperationCoordinator` | Ephemeral; terminal facts become durable commands |
| Voice connection, mic, playback, captions, conversation, current response, highlights | `VoiceSession` | Ephemeral |
| Pinned utterance | Ordinary card created by a user command | Durable |
| Provider admission reservations and reconciled usage | Server `AdmissionLedger` | Durable but content-free |

Tentative visual feedback is allowed. It MUST remain visibly distinguishable from committed state when the difference matters, MUST NOT enter AI context, and MUST disappear or revert if the durable transaction fails.

## 6. Revision, Moment, and Path

These are three different coordinates.

| Coordinate | Meaning | Answers |
|---|---|---|
| `Revision` | Monotonic order of successful durable transactions | What actually committed, and when? |
| `Moment` | One meaningful user-authorized action in user order | What does Undo or Redo act on? |
| `Path` | One recoverable trajectory through Moments and an exact head | Which future is active, and which futures are preserved? |

### Revision

Every acknowledged semantic mutation advances `Revision`. A provider response, render, stream chunk, pointer frame, and Voice callback do not. An asynchronous AI effect may commit at a later Revision while remaining attached to its initiating Moment.

### Moment

A Moment is created for one completed edit, move or multi-card move, create/remove/restore, Focus or structural change, import, AI invocation, Searchlight invocation, explicit Retry, or pinned utterance. An AI invocation creates its Moment and authority record before provider work begins. Its later results, failures, and Harvest are child effects of that Moment rather than surprise top-level Undo targets.

A Searchlight Retry is a new Moment linked to the original Searchlight Moment. It does not rewrite the earlier attempt, result, or Harvest.

### Path

A Path contains an ordered sequence of Moments plus an exact active head and Revision boundary. Undo and Redo move the active head without deleting canonical records. Redo reactivates the exact recorded versions and performs no provider work.

New work after Undo, or **Continue from here**, creates a new Path from the selected boundary. The displaced future remains intact as an inactive Path. The fork records the source Path, selected Moment, exact source Revision/effect boundary, new Path identity, and new head. Effects arriving after that boundary on the former Path cannot appear retroactively in the new Path.

Card lineage and History remain separate. Lineage connects exact content versions causally; History records meaningful workspace actions. They may cross-link but neither substitutes for the other.

### Approved detailed model — A-002

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Choice | **Hybrid immutable-version journal plus rebuildable current projection** |

Use immutable entity versions, an append-only factual journal of Revisions/Moments/operation effects, and a rebuildable materialized projection for the current Path head. This is a hybrid journal, not pure event sourcing: the product does not need to reconstruct all truth from a generalized event vocabulary, and it does not rewrite a whole workspace blob for every action.

## 7. Canonical durable records

All records use globally unique client-generated IDs and explicit schema versions. Durable records MUST contain only structured-cloneable data—not React objects, DOM nodes, browser `File` handles, open database handles, provider instances, or media objects.

| Record | Purpose |
|---|---|
| `WorkspaceMeta` | Workspace ID, schema version, latest Revision, active Path/head, projection version |
| `Card` and `CardVersion` | Stable identity plus immutable content and role versions |
| `LayoutVersion` | Committed position and size; excluded from semantic AI payload |
| `StructureVersion` and `MembershipVersion` | Named Groups/Regions and explicit direct membership |
| `RelationshipVersion` | Reserved or free-form visible relationship |
| `FocusVersion` | Explicit durable Focus membership |
| `ImportedSource` | Text plus inert filename/type/source metadata; no retained file handle |
| `ContextManifest` | Exact included versions, reasons, relationships, order, source Revision, payload hash |
| `Operation` | Type, initiating Moment/Path, envelope, manifest, authority epoch, status |
| `Approach` | One immutable Searchlight brief fixed before arm execution |
| `Attempt` | One provider execution and its factual outcome/usage |
| `OperationEffect` | Landed result, failure, Harvest, or discarded late response attributable to a Moment |
| `LineageRecord` | Immutable child-version-to-parent-version causality plus inherited and changed material |
| `ContributionRecord` | Immutable Recombine mapping from each exact parent version and selected contribution to the child version |
| `RevisionFact` | Commit order and exact changed-record references |
| `Moment` | One semantic user action plus dependencies and child effects |
| `Path` | Fork boundary, ordered Moment references, active head, preserved future linkage |
| `ProjectionCheckpoint` | Replaceable acceleration for one exact Path/head/Revision |
| `WriterGeneration` | Current browser writer authority; operational, not product History |

The architecture MUST retain exact historical card versions referenced by lineage, contributions, manifests, operations, or preserved Paths even when those versions are no longer active. `LineageRecord` and `ContributionRecord` are factual provenance and remain separate from editable visible relationships. Removing or relabeling a canvas link cannot rewrite them.

## 8. Command and acknowledgement contract

Every workspace mutation follows one path:

```text
interaction or async result
  -> typed command
  -> WorkspaceKernel validation
  -> complete CommitPlan
  -> one IndexedDB transaction
  -> transaction completion
  -> committed projection published
  -> user-visible acknowledgement
  -> external effect launched, if authorized
```

The command carries expected Revision, active Path, actor class, stable command ID, and command-specific input. The kernel returns either a rejection or a complete `CommitPlan` containing new versioned records, Revision fact, History change, projection change, and external effects that may launch only after commit.

Representative user commands include:

- `InitializeWorkspace`, `CreateCard`, `EditCard`, `MoveCards`, `RemoveCard`, `RestoreCard`
- `CreateStructure`, `ChangeMembership`, `CreateRelationship`, `RemoveRelationship`
- `ChangeFocus`, `ImportTextSource`
- `InvokeBranch`, `InvokeCompare`, `InvokeRecombine`, `InvokeHarvest`
- `StartSearchlight`, `PauseSearchlight`, `ResumeSearchlight`, `CancelSearchlight`
- `RetryOperation`, `Undo`, `Redo`, `ContinueFromMoment`, `PinUtterance`

Representative asynchronous result commands include:

- `RecordApproaches`, `StartAttempt`
- `LandOperationResult`, `LandSearchlightArm`, `LandSearchlightHarvest`
- `FailAttempt`, `TimeOutAttempt`, `InterruptAttempt`, `RecordDiscardedLateResponse`

Provider data never mutates state directly. Before an asynchronous result can commit, the kernel rechecks the attempt identity, active Path and owning Moment, authority epoch, cancellation state, frozen context identity, and structural schema. It does not impose a hidden usefulness, novelty, or quality judgment on a structurally valid result.

The frozen source Revision is provenance, not a blanket requirement that the workspace remain unchanged. An add-only AI result MAY land after unrelated later edits when its owning Moment remains active, its exact parent versions remain resolvable, and its authority is current. The kernel plans that landing against the latest committed Revision without rewriting parent content. It rejects the result when the source Moment or Path is inactive, an authority epoch was revoked, or the operation's exact dependency contract no longer holds.

No network, model, media, arbitrary timer, or renderer work may occur inside a persistence transaction.

## 9. Browser-local persistence and writer ownership

### Selected persistence class

The first prototype uses IndexedDB. It provides asynchronous structured storage and transactional writes, while quota, eviction, and physical durability remain browser-controlled and must be described truthfully. [MDN IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

The initial wrapper remains **[OPEN]** between the native API, [`idb`](https://github.com/jakearchibald/idb), and Dexie. The local-truth spike selects the smallest option that exposes transaction completion, schema migration, blocked/version-change behavior, and testable failure injection without becoming application state.

### Candidate object stores

| Store | Content |
|---|---|
| `meta` | One current `WorkspaceMeta` record |
| `domainRecords` | Immutable card, layout, structure, membership, relationship, Focus, and import versions |
| `revisions` | Append-only Revision facts, parent links, integrity manifests, and commit markers |
| `moments` and `paths` | Semantic History, dependencies, heads, and fork boundaries |
| `operations`, `attempts`, `effects` | AI/Searchlight records and factual outcomes |
| `provenance` | Immutable lineage and contribution mappings |
| `manifests` | Immutable durable canvas-operation manifests |
| `projections` | Rebuildable materialized checkpoints |
| `writer` | Current writer generation metadata |

The exact split and indexes are **[OPEN]** until representative query and migration measurements. `localStorage`, one mutable whole-workspace JSON document, and one complete snapshot per action are rejected as canonical designs.

### Atomic commit

One in-page serial command queue produces commit plans. Each write transaction verifies persisted Revision and writer generation, writes every affected record and projection update, appends a `RevisionFact` containing its parent Revision, changed-record identities and integrity hashes, writes a terminal commit marker, updates `WorkspaceMeta` in the same transaction, and waits for transaction completion. An abort leaves the prior Revision authoritative, launches no external effect, and yields no success acknowledgement.

`WorkspaceMeta` is a cached head pointer, not the only way to identify valid state. On hydration, Minerva validates the pointed Revision and its referenced records. If that pointer or Revision is malformed, it scans immutable commit markers backward to the newest internally complete Revision whose parent chain and required records validate. It opens that state in explicit recovery/read-only mode, identifies the unreadable later boundary, and never claims that lost data was recovered. If no complete Revision is readable, the workspace is unavailable; Minerva does not create an empty replacement.

### Approved writer contract — A-003

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Choice | **One writable tab; secondary tabs are visibly read-only** |

The selected product behavior is one visible writer and read-only secondary tabs. The leading mechanism is an exclusive origin-scoped Web Lock plus a transactionally persisted writer generation; BroadcastChannel announces new Revisions but never carries authority or canonical state. [Web Locks](https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API), [BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)

Every write verifies the current generation. A stale resumed tab becomes read-only before mutation. When the writer closes or crashes, another tab may acquire a new generation. If the supported-browser spike falsifies Web Locks, use one transactional IndexedDB lease instead; do not ship two competing authority systems.

### Hydration and migration

Startup proceeds in this order:

1. Open storage and inspect the stored schema version.
2. Refuse silent downgrade when application code is older than the workspace.
3. Acquire writer authority or enter explicit read-only secondary-tab mode.
4. Run the selected atomic migration strategy.
5. Validate the cached head against immutable Revision commit markers and record hashes.
6. If needed, locate the newest complete internally valid Revision and enter explicit recovery/read-only mode.
7. Load or rebuild its active projection from canonical records.
8. Mark browser-owned `queued` or `running` work `interrupted`; never restart it.
9. Render only after the last valid Revision is known.

Migration remains **[OPEN]** between bounded in-place version-change transactions and side-by-side validated database replacement. Migration failure preserves the last readable state where possible and never initializes an empty replacement silently.

The bundled example is immutable application data. Choosing it creates ordinary local records; editing those records cannot modify the bundled source.

## 10. Context compiler

`ContextCompiler` is a pure domain service over one committed Path/Revision and the explicitly supplied ephemeral selection.

```text
compile(committed state, source Revision, Focus version, targets, capability)
  -> Ready(manifest, semantic payload, payload hash, inclusion reasons)
   | TooLarge(measured boundary, contributing items)
   | Invalid(reason)
```

It MUST:

- include only selected targets, direct Focus cards, direct members of focused Groups/Regions, and relationship labels whose endpoints are already included;
- deduplicate cards while retaining every visible inclusion reason;
- use a stable documented order unrelated to geometry, viewport, size, color, or z-order;
- keep `sourceRevision` separate from `semanticPayloadHash`, so a geometry-only Revision may leave the payload identical;
- persist exact manifests for canvas-generating operations;
- keep Voice receipts and manifests page-session ephemeral;
- block overflow before provider execution instead of truncating or summarizing;
- give each Searchlight arm the original manifest plus only its own fixed brief; and
- give an eligible Searchlight Harvest only the original manifest, all three briefs, and current landed versions of contributing arms.

Provider-specific token measurement is an adapter. It may report an unsupported boundary but cannot change semantic inclusion.

## 11. Client island and interaction state

The Next.js shell MAY server-render metadata, static layout, and loading/error boundaries. The workspace is one client island rooted at a single `WorkspaceRuntime`, created above the canvas subtree so renderer remounts cannot duplicate state listeners, persistence coordination, provider work, or media ownership.

High-frequency interaction remains ephemeral:

- Drag, resize, pan, zoom, and marquee feedback update at the renderer's animation-frame cadence.
- Pointer-up or edit completion emits one semantic command.
- Selection is application-owned ephemeral state shared by canvas and structured views.
- Provider deltas are buffered; they do not create Revisions or one render per token.
- Canonical context always reads the last committed projection, never a drag ghost or edit buffer.

Pointer Events are the input seam for mouse, trackpad, pen, and possible future touch support. No touch-specific or multi-contact meaning exists in the first prototype.

## 12. Canvas adapter and renderer gate

`CanvasAdapter` renders scene projections, owns screen/world coordinate conversion, camera, hit testing, pointer capture, culling, and tentative direct-manipulation feedback, and emits device-neutral intents. It also supports programmatic reveal, selection mirroring, edit focus, orientation recovery, and clean disposal.

It MUST NOT persist product state, construct AI context, decide Focus or membership from geometry, call providers, acknowledge mutations, or use native renderer history as Minerva History.

### Renderer candidates

| Candidate | Strength | Material risk |
|---|---|---|
| tldraw custom shapes | Mature infinite-canvas interaction, custom shapes, culling, and accessibility hooks | Its store/history can become a second authority; production requires an accepted license ([accessibility](https://tldraw.dev/sdk-features/accessibility), [license](https://tldraw.dev/sdk-features/license-key)) |
| React Flow controlled nodes/edges | Atlas-aligned card/link model, controlled state, keyboard accessibility, MIT license | Can pull the experience toward the graph-editor presentation Minerva rejects ([accessibility](https://reactflow.dev/learn/advanced-use/accessibility), [license](https://github.com/xyflow/xyflow)) |
| Custom DOM cards + SVG relationships/regions | Maximum control over editing, semantics, and accessibility | Minerva must build transforms, selection, hit testing, culling, navigation, and spatial indexing |

The renderer remains **[OPEN]**. Paper constraints eliminate unsuitable candidates first; at most two disposable central-slice adapters are implemented. Selection requires:

1. no renderer-owned product truth or History;
2. card editing, Groups, Regions, links, Focus preview, selection, pan, zoom, and orientation recovery;
3. complete keyboard and nonvisual semantic operation;
4. acceptable production licensing;
5. representative responsiveness while Voice and two Searchlight arms are active; and
6. an owner judgment that the surface feels like a thinking environment rather than a graph editor.

The first material falsifier is any requirement to keep a second semantic store synchronized with Minerva's kernel.

## 13. Approved structured nonvisual projection — A-007

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Choice | **Require a sibling structured nonvisual projection driven by the same domain and commands** |

Accessibility is a sibling projection of the same committed domain, not a hidden copy of canvas DOM or a geometry-derived reading order. It exposes cards and roles, Focus and inclusion reasons, structures and membership, relationships, lineage, operations and attempts, Searchlight states, Moments, Paths, available actions, and Voice state.

Its actions dispatch the same commands as canvas actions. Keyboard users receive non-drag equivalents for every semantic outcome. Programmatic order is stable and unrelated to visual importance or AI serialization order. Canvas and structured views coordinate through stable entity IDs: selecting or revealing an entity in either view does not add it to Focus or create History.

Live announcements are limited to meaningful durable outcomes, operation state changes, actionable failures, and Voice state. Pointer frames, pan/zoom, animation, and model token deltas MUST NOT flood assistive technology.

Renderer accessibility features supplement this projection; they do not replace it.

## 14. AI execution and Searchlight coordination

### Approved coordination boundary — A-004

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Choice | **Page-scoped AI/Searchlight coordination; server workspace state absent** |

`OperationCoordinator` runs in the browser because the operation's authority, History, and durable state are browser-local. It uses a small bounded scheduler, not a workflow framework.

The page lifetime is deliberately the operation lifetime. Closing or reloading the page interrupts unfinished work; reopening records or exposes that interruption and never resumes provider execution automatically.

For every canvas-generating operation:

1. The kernel freezes the exact manifest and durably creates the Moment, operation, authority epoch, disclosed envelope, and attempt identity.
2. After commit, the coordinator sends one typed stage request.
3. The server admits and performs exactly that disclosed stage.
4. The browser validates the returned terminal object.
5. The kernel rechecks attempt, Path, authority epoch, cancellation, and manifest identity.
6. Card, lineage, receipt, operation effect, History consequence, and new Revision commit atomically.
7. Only then may the UI display `landed` or `complete`.

Token-by-token output is not required for the first implementation. Stage-level factual progress and independently arriving complete cards satisfy the product contract with less transient state. Streaming MAY be introduced only if measured latency materially harms the central loop; streamed content remains ephemeral until one terminal object validates and commits.

### Searchlight scheduler

One Searchlight invocation performs:

1. one approach-selection request;
2. a durable commit of exactly three fixed briefs;
3. exactly three isolated arm requests with at most two concurrent;
4. independent result/failure commits; and
5. one eligible Harvest request only after every approach's currently authorized attempt is terminal and at least two current results have landed.

There is no hidden critique, ranking, coverage, repair, fallback, follow-up, or automatic semantic retry. Pause prevents queued arms and Harvest from starting. Resume uses the original manifest and briefs. Reload marks unfinished work interrupted.

### Cancellation authority

Cancellation correctness does not depend on transport cancellation:

1. commit cancellation and revoke the local authority epoch;
2. stop queued work;
3. abort in-flight fetches where supported; and
4. reject every later callback whose authority no longer matches.

A provider may already have completed or charged for cancelled transport. Minerva records the distinction and never treats transport abort as proof of remote cancellation. Undo of an operation or departure to another Path uses the same revoke-before-abort order.

## 15. Server and provider boundary

Use one greenfield Next.js App Router application in an isolated Vercel project. The workspace client calls versioned Route Handlers because provider work requires explicit HTTP contracts, external API access, cancellation, admission, and independent testing. The default Node.js runtime is used unless a spike demonstrates a specific need for another runtime. [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

Before writing framework code, the implementation session MUST read the installed Next.js version's generated guidance under `node_modules/next/dist/docs/`; training-memory conventions are not implementation authority.

Initial server surfaces:

| Surface | Responsibility |
|---|---|
| `POST /api/ai/execute` | Admit and execute exactly one closed AI stage |
| `POST /api/voice/session` | Admit and create one bounded ephemeral Voice session/bootstrap |
| `AdmissionLedger` | Atomically reserve, reconcile, expire, and deduplicate provider allowance |

The server MUST NOT store or reconstruct a workspace, maintain Focus/selection/Path/History, land a card, fetch a URL from a card, continue browser work after page close, accept arbitrary system prompts/tools/models, or treat client IDs as authorization.

Each `POST /api/ai/execute` request uses a closed discriminated stage:

- `branch`
- `compare`
- `recombine`
- `harvest`
- `searchlight.approach-selection`
- `searchlight.arm`
- `searchlight.harvest`

The versioned request contains opaque request/operation/attempt IDs, the exact manifest and hash, the permitted stage input, and no arbitrary system instruction. The server recomputes the manifest hash, validates a strict schema and size, selects the server-approved provider configuration and limits, and rejects overflow without changing context.

The response contains matching IDs and hash, one closed result object or normalized failure, a versioned provider-configuration ID, timestamps, stop reason, and available usage. Raw provider errors, secrets, and stack traces are never returned.

First-prototype model calls expose no tools. Imported text, URLs, relationship labels, user text, and model output remain untrusted content and cannot change server policy or application authority.

If Vercel AI SDK is selected, hidden SDK retries MUST be disabled and explicit abort/time limits supplied. The current SDK documents a default retry count greater than zero, so the prototype cannot rely on defaults. [AI SDK `streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text)

No Vercel Workflow, queue, cron, service worker, detached promise, or server callback continues work after the initiating page/request lifecycle. That would contradict the approved interruption contract.

## 16. Prototype admission and spend authority

### Approved persistence boundary — A-005

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Choice | **Only content-free durable server admission state is permitted** |

The product has no account, but provider endpoints cannot be unrestricted anonymous spend surfaces. Provider-enabled owner rehearsal and participant evaluation use opaque, random, expiring evaluation capabilities. This is an operational provider-access boundary, not workspace identity or cloud persistence.

The leading flow is:

1. An invitation URL carries a one-use capability.
2. The server exchanges it for a Secure, HttpOnly, SameSite session credential and removes the raw capability from the URL.
3. Before each stage or Voice session, `AdmissionLedger` atomically reserves the server-defined worst-case allowance.
4. Completion reconciles available actual usage. An ambiguous failure retains its reservation until reconciliation or expiry.
5. Replaying a request ID cannot reserve or execute twice.
6. Environment/provider hard ceilings and a kill switch remain defense in depth.

The ledger contains only hashed capability, opaque request/attempt identity, operation/stage class, reservation and reconciled units, state, timestamps, expiry, and environment/deployment identity. It contains no workspace ID, card text, manifest, prompt, output, transcript, filename, URL content, or audio.

The exact store, allowance values, capability lifetime, token/time/spend ceilings, and reconciliation behavior remain **[OPEN]** until the provider/admission spike. If an atomic hard bound cannot be demonstrated, provider routes remain disabled. Broader public anonymous provider access requires a later decision.

## 17. Voice architecture

One `VoiceSession` exists above the canvas subtree and owns browser permission, media tracks, transport, mic state, playback, interruption, connection/input/response state machines, Quiet/Active stance, temporary captions/conversation, resource ceilings, and cleanup.

Canvas components never own media objects. Renderer remounts cannot restart or end Voice.

`VoiceContextBinder` observes committed Revisions and current ephemeral selection locally without invoking a provider. At a spoken utterance boundary, typed submission, or eligible Active trigger, it freezes the latest exact context, source Revision, and necessary session conversation; creates the visible receipt; and binds that immutable snapshot to the turn. Later changes affect the next turn.

Voice receives a context-query port and an ephemeral-highlight port. It receives no workspace command port and no model tools. Pinning an utterance is a separate visible user command through `WorkspaceFacade`.

Raw audio, credentials, unpinned transcript, and conversation remain memory-only and are excluded from workspace persistence and application telemetry.

The transport remains **[OPEN]** between a provider-native browser WebRTC session and Vercel AI Gateway Realtime. OpenAI's current browser guidance uses a server-minted short-lived credential and WebRTC; Vercel's current Realtime Gateway capability is beta. Both require a real-browser authority, concurrency, barge-in, retention, and spend spike before selection. [OpenAI Voice quickstart](https://openai.github.io/openai-agents-js/guides/voice-agents/quickstart/), [Vercel Realtime AI Gateway](https://vercel.com/blog/realtime-voice-agents-on-ai-gateway)

A cascaded speech-to-text/model/text-to-speech path is a degradation candidate, not assumed equivalent to concurrent realtime conversation. A Vercel-hosted media relay would be a new architecture and is not an automatic fallback.

## 18. Approved main-thread and worker boundary — A-006

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Choice | **Keep the main thread authoritative initially; extract only a measured coarse workload to a worker** |

The first prototype keeps input, canvas coordination, text editing, focus/ARIA, kernel validation, commit promotion, network result handling, and media-element control on the main thread. It does not send pointer frames through worker RPC.

An application Web Worker is deferred until profiling names one coarse deterministic workload that repeatedly breaches the supported budget. Eligible later workloads include manifest serialization, large bounded import validation, projection/checkpoint rebuilding, or measured layout computation. Each worker request carries source Revision and identity; stale output is discarded.

AudioWorklet and OffscreenCanvas are introduced only for measured bottlenecks required by the chosen Voice or renderer adapter.

## 19. Failure and recovery boundaries

| Failure | Required containment |
|---|---|
| Kernel rejection | No transaction; prior state unchanged |
| IndexedDB abort, quota, or migration failure | No acknowledgement; last readable state or truthful read-only/unavailable mode |
| Stale or second writer | Reject before mutation; secondary tab remains read-only |
| Renderer fault | Rebuild from committed projection; durable state remains intact |
| Context overflow | Block before provider work; show exact reducible cause |
| Admission denied/exhausted | Zero provider work; local canvas remains usable |
| Provider unavailable/timeout | Only the affected attempt fails; siblings and existing work remain |
| Invalid provider output | Failed attempt record; no result card |
| Cancel, Undo, or Path departure | Revoke authority before abort; late result cannot land |
| Page reload | Committed state survives; queued/running work becomes interrupted; no auto-spend |
| Local commit failure after provider success | No landed acknowledgement; provider success remains subordinate to failed durability |
| Voice permission/media/provider failure | Truthful Voice degradation; canvas and typed local work continue |
| Admission ledger unavailable | Provider routes fail closed; local product continues |
| Telemetry failure | Product continues; content is not queued as diagnostic fallback |

## 20. Performance and capacity strategy

Exact thresholds remain **[OPEN]** until measured against the `SPEC.md` representative corpus and supported browser matrix.

Measure at least pointer and keyboard response, edit latency, long/dropped frames during concurrent Voice and Searchlight, durable commit time, load/reload restoration, context compilation at the input boundary, Voice start/first audio/barge-in, operation latency, and storage use/headroom.

Respond to measured degradation in this order:

1. eliminate unnecessary projection work and coalesce ephemeral updates;
2. keep high-frequency interaction outside committed state;
3. cull or simplify offscreen visual detail;
4. move one measured coarse workload behind the existing worker seam; and
5. replace the renderer if its gate fails.

Performance MUST NOT be recovered by weakening durable acknowledgement, pruning preserved Paths, truncating context, hiding failures, reducing accessibility, or blocking local interaction during provider work.

## 21. Security, privacy, and diagnostics

- Long-lived provider and admission credentials remain server-only and never use a public client prefix.
- Realtime credentials are narrow, short-lived, memory-only, and unable to authorize workspace mutation.
- Preview and Production use distinct credentials, admission namespaces, and provider ceilings.
- Server routes validate strict schemas, sizes, methods, origins, and content types; all responses are `no-store`.
- User and model content renders as inert text by default. Markdown raw HTML, scripts, event handlers, unsafe URL schemes, and arbitrary embeds do not execute.
- URLs remain references; the server never fetches them in the first prototype.
- Provider prompts are fixed per versioned stage and delimit workspace material as untrusted data.
- Diagnostics default to deployment/config version, opaque request/operation/attempt identity, stage, status, timing, cancellation, normalized error class, and resource counts.
- Card text, manifests, prompts, filenames, URLs, outputs, transcripts, and audio are absent from application logs and diagnostics by default.
- Provider exceptions and receipts are normalized before logging or returning them.
- The provider, transmitted content class, retention boundary, and applicable policy version are disclosed before real content is sent.

## 22. Environment and release isolation

Before implementation, Minerva receives:

- a new Git repository and canonical trunk;
- a new Vercel project, aliases, and environment linkage;
- a new browser database name and schema namespace;
- separate development, Preview, and Production provider credentials;
- separate admission and diagnostics namespaces;
- no predecessor workspace, Vercel metadata, secrets, analytics, or production alias; and
- an explicit source-to-deployment receipt.

Every releasable deployment records its exact source revision, immutable deployment URL, protocol/schema versions, provider configuration IDs, and policy version. Alias promotion follows verification of that immutable deployment. Rollback MUST NOT allow older code to silently open or rewrite a newer local schema.

## 23. Testability and evidence

| Boundary | Smallest decisive evidence |
|---|---|
| Kernel and History | Pure command/property tests covering Moments, Paths, dependency order, exact Redo, and authority revocation |
| Repository | Real-browser transaction, reload, quota/migration fault, and two-tab contract tests |
| Context | Deterministic payload/hash fixtures invariant under geometry and exact under Focus/selection changes |
| Canvas adapter | One central-loop browser journey plus keyboard/nonvisual parity |
| AI protocol | One real call for each stage class plus malformed/oversized/adversarial cases |
| Searchlight | Concurrency-two, pause/resume/cancel, partial, Retry, Harvest, and injected late-result scenario |
| Voice | Real microphone/playback journey with canvas manipulation, barge-in, context update, and text degradation |
| Deployment | Exact source revision, Vercel `READY`, live route, provider receipt, and browser journey |
| Product thesis | The staged matched evaluation in D-008; implementation evidence cannot substitute for it |

Use one bounded terminal review per release by default. Stop when the smallest decisive evidence passes; stop earlier on the first material falsifier. A custom verifier may be repaired once, then simplified or discarded in favor of native runtime evidence.

Before generated implementation begins, create and commit the approved product documents, a short repository `AGENTS.md` that points to them, a `JOURNAL.md` that identifies human decisions and corrections, a bounded check command, and an evidence location. These are build controls, not product features.

### Evaluation-only evidence capture

D-008 evaluation runs use one clean browser profile or equivalent isolated origin/database namespace per participant. This provides a fresh one-current-workspace condition without adding product workspace management.

An `EvaluationPacketAssembler` exists only in an evaluation build or harness. After explicit participant disclosure and a deliberate capture action, it serializes the exact final `WorkspaceBundle`, required manifests, lineage and contribution records, operation/attempt receipts, History/Paths, failures, configuration IDs, and measured resource metadata into a local evidence file. It does not upload silently and is absent from the ordinary prototype surface.

The study process—not the workspace server—combines that file with the frozen task/source packet, pre-session inventory, participant response, 24-hour follow-up, reviewer record, and the matched linear-chat transcript. Evidence handling, access, retention, and deletion are defined before recruitment. This harness is not cloud workspace persistence, product export/import, or a second workspace library.

## 24. Bounded architecture spikes

Each spike exists to make one decision. It is discarded or reduced after that decision.

### `EXP-001` — Interleaved local truth

- **Outcome:** Prove or reject the Revision/Moment/Path model and browser transaction boundary.
- **Smallest evidence:** A minimal text/debug surface runs create/edit/move/Focus, Searchlight authorization, an arriving arm, an unrelated edit, failure, Retry, Harvest, Undo/Redo, Continue from history, injected late response, reload, a second-tab write attempt, a partial write, and recoverable corruption of the cached head and latest records.
- **First falsifier:** False acknowledgement, destroyed future, wrong Undo target, provider call during Redo, late cross-Path commit, silent second writer, inability to locate and truthfully expose the last internally valid Revision, or browser/framework objects required in the kernel.
- **Budget:** Two engineer-days; simplify after the first architecture-level falsifier.
- **Unlocks:** Journal shape, object stores, wrapper, writer mechanism, migration strategy.

### `EXP-002` — Disposable renderer and structured view

- **Outcome:** Select the smallest renderer that remains a projection and makes the central loop inviting.
- **Smallest evidence:** Custom card, Group/Region, relationship, Focus drop preview, rich edit, multi-select, pointer and keyboard move, one semantic Undo/Redo, orientation recovery, and sibling structured operation under simulated Voice/Searchlight load.
- **First falsifier:** Renderer state becomes semantic authority, structured operation depends on geometry, production licensing remains unresolved, or the owner experiences the surface as canvas management/graph editing rather than thinking.
- **Budget:** Two engineer-days total across no more than two candidates.
- **Unlocks:** Renderer, scene protocol, supported initial corpus, initial interaction threshold.

### `EXP-003` — Bounded provider, admission, and cancellation

- **Outcome:** Select one generation path and prove the exact Searchlight envelope cannot exceed its disclosed work or land after cancellation.
- **Smallest evidence:** All closed stage types run against one real provider; malformed and oversized inputs fail before work; concurrent/replayed requests cannot exceed an atomic allowance; cancellation with two arms active suppresses a deliberately late result.
- **First falsifier:** Hidden retry/repair, silent truncation, arbitrary tools/context, reservation race, cross-environment spend, late landing, or secrets in the browser.
- **Budget:** Two engineer-days.
- **Unlocks:** Provider/configuration, schema mechanism, request/token/time/spend limits, admission store, evaluation capability.

### `EXP-004` — Real Voice concurrency

- **Outcome:** Select or reject one browser Voice transport.
- **Smallest evidence:** Real microphone and audible playback while moving/editing cards, spoken and typed interruption, Stop speaking, Mic off, permission denial, context change without hidden capture, exact receipt, text degradation, credential expiry, End, and reload.
- **First falsifier:** Canvas/media contention, self-transcription, failed barge-in, stale or hidden context, excessive credential authority, unbounded spend, untruthful state, or durable unpinned conversation.
- **Budget:** Two engineer-days and one supported real-browser/audio setup per candidate; test at most two candidates.
- **Unlocks:** Voice provider/transport, browser/audio matrix, session ceilings, reconnect and retention contract.

## 25. Explicitly rejected or deferred

- Reusing a predecessor application shell, state model, schema, deployment, or secret.
- Renderer-owned product state, history, or persistence.
- React state, provider callbacks, or Voice prompts as semantic authority.
- Pure event sourcing, CRDTs, collaboration, sync, and offline merge.
- Cloud workspace tables, accounts, capability links, migration UI, and dual writes.
- Multiple local workspaces or a workspace library.
- Durable server workflows, queues, cron, service workers, and closed-page AI.
- A general agent runtime, tool platform, prompt endpoint, or model router in the domain.
- Vector databases, embeddings, hidden context retrieval, novelty scoring, or automated quality ranking.
- Per-pointer worker messaging, WebGL/OffscreenCanvas, or AudioWorklet without measured need.
- Token streaming as an assumed requirement.
- Public unrestricted anonymous provider access.
- Automatic pruning of Moments, Paths, attempts, failures, or provenance.

## 26. Approved decisions and spike-gated details

### Approved

- `A-002` — **Approved September 6, 2026.** Use the hybrid immutable-version journal plus rebuildable current projection described in Sections 6–8.
- `A-003` — **Approved September 6, 2026.** Use one writable tab; secondary tabs are visibly read-only.
- `A-004` — **Approved September 6, 2026.** Keep AI/Searchlight coordination page-scoped and server workspace state absent.
- `A-005` — **Approved September 6, 2026.** Permit only content-free durable server admission state in the prototype.
- `A-006` — **Approved September 6, 2026.** Keep the main thread authoritative initially; add a worker only for a measured coarse bottleneck.
- `A-007` — **Approved September 6, 2026.** Require a sibling structured nonvisual projection driven by the same domain and commands.

### Remain open until a named spike

- IndexedDB wrapper, object-store split, migration strategy, writer primitive.
- Canvas renderer and measured supported corpus.
- AI provider, model/configuration, output mechanism, and hard envelopes.
- Admission-store product and exact evaluator-capability exchange.
- Voice provider, transport, credential mechanism, and browser/audio matrix.
- Performance, capacity, intake, retention, diagnostics, and spend values marked **[OPEN]** in `SPEC.md`.

## 27. Architecture approval

Architecture decisions `A-001` through `A-007` are approved. Every explicitly spike-gated item remains **[OPEN]** until its named experiment supplies decisive evidence. This approval authorizes work on `ROADMAP.md`, not implementation.
