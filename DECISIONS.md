# Minerva — Decision Register

> **Status:** Active product decision record. `INTENT.md` was approved on September 6, 2026. Decisions are added here only after explicit product-owner approval.

## How this register works

- `INTENT.md` defines the product thesis and is authoritative over this register.
- A recommendation or provisional assumption is not a decision.
- Prototype choices and roadmap intentions are recorded separately so later ambitions do not expand the first prototype by accident.
- Implementation mechanisms remain open unless a decision explicitly closes them.
- Revisit a decision when its stated falsifier or latest responsible point is reached, not merely because another project used a different approach.

## Decided now

### D-001 — Initial workspace identity and persistence

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Scope | First prototype |
| Decision | The first prototype uses **browser-local workspace persistence only**. It has no account, authenticated workspace, cloud-synchronized workspace, or shareable capability link. |
| Why | Minerva must first prove its spatial thinking loop without introducing identity, synchronization, sharing, migration, or cloud-state complexity. Local persistence preserves immediate entry and keeps the prototype boundary honest. |
| User-visible contract | Work committed in the workspace survives reload and browser restart on the same browser and device. It does not automatically appear on another browser or device. Clearing site data, losing the device, using private browsing, or browser eviction may make the workspace unrecoverable. The product must describe this boundary truthfully. |
| Hosting boundary | Vercel may host the web application, but it does not own durable workspace state in this phase. Browser-local persistence does not imply that AI inference occurs locally; context intentionally sent to an AI capability still crosses the disclosed provider boundary. |
| Consequences | No sign-up or identity ceremony; fastest route to testing the core loop. No cross-device continuity, collaboration, link sharing, server backup, or guaranteed recovery. Local schema evolution and failure handling still matter. |
| Reversibility | **Moderate.** Cloud persistence can be added later, but migration and identity must be designed explicitly rather than inferred from the local model. |
| Latest responsible point | Revisit before inviting users who require cross-device continuity, recovery, or sharing. |
| Falsifier | If browser-local durability cannot reliably preserve an acknowledged workspace across reload and restart on supported browsers, the prototype does not have truthful durable memory. Narrow or replace the storage approach before adding more capability. |

#### Roadmap disposition

Roadmap an **anonymous cloud workspace accessed through an unguessable private link**. This is a later capability, not dormant prototype scope. Its authorization model, link loss and rotation behavior, retention, deletion, migration from local workspaces, abuse controls, and optional future account attachment require separate decisions before implementation.

#### Explicitly not decided by D-001

- Browser storage technology or schema.
- Export, import, backup, or recovery behavior.
- Local encryption or device-sharing protections.
- Migration mechanics for the later cloud workspace.
- AI provider, prompt retention, or telemetry policy.
- Whether authenticated accounts ever become necessary.

### D-002 — First proof problem and editable example

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Scope | First prototype and its initial evaluation |
| Decision | Minerva's canonical editable example begins with: **“How might a neighborhood library remain indispensable in an AI-rich world?”** |
| Why | The problem is understandable without specialist knowledge, genuinely ambiguous, and rich in competing values. It can support materially different directions across place, service, trust, education, technology, and community without making Minerva or software development the subject. |
| User-visible contract | The example is an ordinary, already-working Minerva workspace. Its cards, structures, relationships, focus, lineage, and generated material are editable, movable, removable, and reusable. It exposes the central loop directly rather than presenting a tour, scripted slideshow, or read-only demonstration. An equally visible **Start blank** path remains available. |
| Evaluation role | The example is the first repeatable proof problem for comparing Minerva with matched linear chat. It does not become the only domain in which Minerva must work. |
| Consequences | Design and testing gain one stable scenario with real tensions and recognizable outcomes. The example must avoid steering every user toward a preselected answer or presenting its initial branches as exhaustive. |
| Reversibility | **High.** Example content may be replaced without changing the product model, but keeping one canonical problem stable improves comparison across iterations. |
| Latest responsible point | Revisit if users need substantial domain explanation, mistake the example for a template they must preserve, or cannot reach the central loop from it directly. |
| Falsifier | If the example feels like a static showcase, encodes an obvious preferred answer, or requires more explanation than it saves, it fails its onboarding role. Replace the content before adding instructional UI. |

#### Explicitly not decided by D-002

- Exact seed cards, wording, visual arrangement, or precomputed branches.
- Whether later releases offer additional examples or templates.
- The final evaluation rubric or participant population.
- Any privileged domain ontology for civic or library work.

### D-003 — Explicit spatial context semantics

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Scope | First prototype |
| Decision | Use a **Focus field plus selected targets**, with one-level expansion of explicit groups or regions. Focus supplies durable supporting context; selection identifies what the next operation acts on. |
| Why | This preserves Atlas's direct, card-local interaction and Searchlight's meaningful, inspectable structures without importing recursive context machinery. Moving and selecting both have understandable consequences, while arbitrary geometry remains purely visual. |
| Canonical context | An operation receives the deduplicated union of: (1) its explicitly selected targets; (2) cards directly in the active Focus set; (3) a focused group's or region's direct, visibly listed members; and (4) relationship labels whose two endpoints are already included. Nothing else enters through spatial inference or graph traversal. |
| User-visible contract | One persistent on-canvas field communicates **Focus — AI sees N cards**. Cards or structures enter and leave Focus through an intentional drop with a visible consequence preview or through card/selection-local **Add to Focus**, **Remove**, and **Clear** actions. A target outside Focus is included for that operation without silently becoming persistent Focus. |
| Structural contract | A group or region may be added to Focus as one visible object; doing so includes only its direct members. Links describe relationships among already included endpoints but never pull additional cards into context. `member of` and `derived from` remain visible structural facts. |
| Geometry contract | Position on open canvas, proximity, overlap, direction, card size, color, z-order, viewport, and collapsed state have no AI-context meaning. Crossing a region boundary changes membership only after an intentional drop preview makes that consequence explicit. |
| Invocation contract | Branch, Compare, Recombine, Searchlight, Harvest, and Voice derive context from the same rule. Invocation freezes the exact visible projection and committed workspace revision; subsequent movement affects later operations, not work already running. The resulting operation record cites that frozen projection. |
| Result behavior | Generated results become durable immediately and land outside Focus by default. They cannot influence later work until explicitly selected or added to Focus. This prevents arriving results from silently anchoring later actions. |
| Consequences | A first-time user learns two concepts—persistent Focus and temporary targets—in exchange for predictable context. Whole-space interpretation requires an explicit whole-workspace focus action; context does not grow merely because the graph grows. |
| Reversibility | **Moderate.** Richer structural inclusion can be added later, but changing the meaning of existing arrangements would require a visible migration or versioned context rule. |
| Latest responsible point | Before specifying any AI action, voice context, canvas interaction, or operation receipt. |
| Falsifier | If users cannot accurately predict the cards an operation will see, mistake nearby cards for included context, or move cards merely to satisfy the interface rather than express their thinking, simplify or replace the model before adding more spatial semantics. |

#### Explicitly deferred by D-003

- Recursive or arbitrarily nested context expansion.
- Multiple or named active Focus sets.
- Per-item exclusions inside a focused structure.
- Context weights, importance scores, or token-budget sliders.
- Meaning inferred from proximity, distance, size, color, viewport, or movement direction.
- Automatic link traversal or inclusion of parent, child, sibling, or neighboring cards.
- AI-created durable groups or interpretive links without user adoption.
- Silent context summarization or truncation.
- Voice-specific targeting and fallback behavior, which remains D-007.

### D-004 — Initial content-entry boundary

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Scope | First prototype, with an explicit roadmap direction |
| Decision | Begin with **bounded local intake**: users may create typed cards, paste text, and import local plain-text or Markdown files. URLs may be stored as reference cards, but Minerva does not fetch or extract their contents in the first prototype. |
| Why | This supports real source-backed exploration without introducing document parsers, remote retrieval, connector authorization, or ingestion infrastructure before the central loop is proven. It is materially more useful than manual card entry alone while preserving a small and truthful boundary. |
| Local-file contract | `.txt` and `.md` files are read client-side and become ordinary, editable source material in the browser-local workspace. Minerva retains visible source metadata sufficient to distinguish imported material from later user or AI-derived cards. Importing a file does not add it to Focus or send it to an AI provider automatically. |
| Link contract | A URL card records a user-provided reference and optional notes. The first prototype does not retrieve the page, claim knowledge of its contents, or include unseen page content in AI context. The user may paste relevant excerpts as source material. |
| AI boundary | Imported material reaches an AI provider only when the user includes it in the visible context of an invoked capability. Browser-local ingestion does not imply local inference; the provider boundary remains disclosed. |
| Consequences | Users can begin from notes and lightweight documents without setup. PDF, office-document, image, audio, web-page, and application-specific transcript ingestion remain unavailable initially. Large inputs require an explicit later size and decomposition policy rather than silent truncation. |
| Reversibility | **High.** Additional importers can produce the same card and provenance model without changing the central interaction contract. |
| Latest responsible point | Revisit after the central loop works with typed, pasted, and lightweight imported material, or earlier if the chosen evaluation problem cannot be represented truthfully within that boundary. |
| Falsifier | If bounded intake forces users to reconstruct ordinary source material manually or imported content cannot retain understandable provenance, expand the smallest necessary format before adding broad ingestion infrastructure. |

#### Roadmap disposition: existing LLM conversations

Roadmap explicit ingestion of existing local LLM session transcripts, initially targeting user-selected Claude Desktop and Codex conversations or exports. Imported conversations become source material for the spatial workspace; they do not replace the canvas with a durable chat transcript.

The intended future experience is to preserve the selected conversation as a source, let the user materialize useful turns or passages as ordinary cards, and retain source anchors back to the originating session. The default import boundary should include user-visible conversation content and must not silently absorb hidden instructions, private reasoning, credentials, unrelated sessions, or unselected tool output.

Also investigate importing from user-provided Claude or Codex shared links where supported access, consent, and stable content retrieval can be established. Shared-link ingestion is a potential capability, not an assumption that either product exposes a permanent or machine-readable interface.

#### Explicitly deferred by D-004

- PDF, DOCX, presentation, spreadsheet, image, audio, OCR, and web-page extraction.
- Automatic fetching of URL contents or following links.
- Automatic chunking, summarization, entity extraction, or card generation during import.
- Background scanning of Claude Desktop, Codex, browser, or filesystem history.
- Exact transcript formats, app integrations, connector permissions, and shared-link access mechanisms.
- Transcript attachment, tool-output, redaction, retention, deduplication, and update policies.
- Maximum source sizes and any explicit user-directed decomposition workflow.

### D-005 — Targeted Searchlight envelope

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Scope | First prototype |
| Decision | A targeted Searchlight sweep contains **exactly three automatically selected, context-specific approaches**. It is a one-layer divergence operation, not a recursive agentic expedition. |
| Why | Three is the smallest genuine plurality: enough to expose contrast, connection, and recombination without recreating Searchlight's output flood or disguising weak approach selection with more generations. A predictable envelope also keeps time, spend, layout, and failure behavior understandable. |
| Approach contract | Before generation begins, Minerva records all three plain-language approach briefs. Each names its intended move and distinguishing basis in the frozen context. Approaches are selected for the problem at hand rather than drawn from a fixed procedure catalog. All three are fixed before any result arrives. |
| Independence contract | Every arm receives the same frozen D-003 context projection plus only its own approach brief. No arm receives a sibling result or a later canvas change. Arms are described as generation-isolated, not claimed to be statistically or cognitively independent. |
| Execution envelope | At most two generation arms run concurrently; the third remains visibly queued. The semantic operation contains one approach-selection stage, three generation stages, and, when eligible, one harvest stage. There is no hidden critique, ranking, coverage, repair, or follow-up stage. Hard call, token, wall-time, and spend ceilings are required, but their exact deployment values wait for provider selection and measurement. Invoking Searchlight authorizes work within the disclosed default envelope without another confirmation. |
| Progress and arrival | Three labeled approach slots appear immediately. Each uses factual states such as `queued`, `running`, `landed`, `failed`, `timed out`, `interrupted`, or `cancelled`. Results commit independently as ordinary durable cards outside Focus and become usable as they arrive. Completion order conveys no ranking, and the canvas remains usable throughout. |
| Pause and resume | Pause prevents queued work and harvest from starting. In-flight work reaches a truthful terminal state. Resume continues only the remaining original approaches against the original frozen context; it never absorbs later workspace edits silently. |
| Cancel | Cancel revokes authority for future commits, prevents queued work and harvest from starting, and aborts in-flight transport where possible. Late responses cannot create cards. Already committed cards and failure records remain durable. |
| Failure and retry | One arm never fails its siblings. Technical failures remain as inspectable approach records and may be retried individually through an explicit user action using the same frozen context and approach. There is no automatic semantic retry, and prior attempts are never overwritten. |
| Harvest | If at least two results land, Minerva creates one concise, editable, evidence-linked Harvest card covering the distinct contributions, a supported tension or connection, and a promising next frontier or experiment. It cites the contributing result cards, reports limitations and failed approaches where relevant, and never names a winner. With zero or one result, Minerva reports insufficient contrast rather than inventing a cross-arm harvest. |
| Completion truth | A sweep is complete only when all three approaches and an eligible harvest have truthful terminal records and every acknowledged card is durably visible. Arm or harvest failure produces a visibly partial or incomplete run, never false completion. |
| Interruption | The browser-local prototype does not claim to continue after its page is closed. Committed cards survive reload; queued or in-flight work becomes visibly interrupted and individually retryable. |
| Reversibility | **High.** The approach count may change after evidence, while the frozen-context, independent-arm, incremental-commit, and truthful-run contracts remain stable. |
| Latest responsible point | Revisit the count only after observed three-arm sweeps show whether a fourth approach materially improves consequential discovery enough to justify its added time and spend. |
| Falsifier | The envelope fails if three approaches repeatedly expose no consequential contrast, or if a controlled four-approach sweep materially improves discovery within acceptable time and spend. The implementation fails immediately if an arm sees sibling context, a late result commits after cancellation, hidden model work exceeds the envelope, or completion is claimed without durable visible results and an eligible harvest. |

#### Explicitly deferred by D-005

- More or fewer automatically chosen approaches.
- Adaptive reserve approaches or model-authored coverage checks.
- Recursive branching from a result without a new user action.
- Multi-generation agentic expeditions, coordinators, or subagents.
- Multi-model ensembles or model routing as a diversity mechanism.
- Ambient, background, or closed-browser continuation.
- Automated novelty, basin, creativity, or quality scoring.
- Automatic content retries or silent fallback to fixed procedures.
- Runs sized by historical 25-, 100-, or 250-action targets.

### D-006 — Semantic Undo/Redo with preserved Paths

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Scope | First prototype |
| Decision | Minerva uses **semantic Undo and Redo with preserved Paths**. Routine recovery behaves like familiar Undo/Redo. Rewinding and continuing from an earlier meaningful state creates a new active Path while preserving the former future automatically. |
| Why | Immediate correction should require no history expertise or confirmation ceremony, while creative exploration must not destroy abandoned directions. This model preserves Atlas/Searchlight lineage without exposing a version-control system or a second graph as the primary experience. |
| Undo unit | Undo reverses one meaningful user-authorized action rather than low-level events: one drag or multi-card move, one completed edit, one create/remove/restore, one Focus or structural change, one import, or one Branch, Compare, Recombine, Harvest, or Searchlight invocation. |
| Non-history interaction | Pan, zoom, hover, temporary selection, card expansion, voice playback, and unpinned conversation do not enter workspace history. Navigation cannot displace a meaningful action from Undo. |
| Undo ownership | Undo follows the user's meaningful action order, not asynchronous completion order. A Searchlight arm or other AI result landing in the background never becomes a surprising new top-level Undo target. |
| Redo | Redo restores the exact previously committed identities, content, position, relationships, lineage, operation records, and partial state. It never invokes an AI provider, retries work, absorbs newer context, or incurs additional spend. |
| History surface | A compact History surface lists human-readable **Moments**, not raw events, hashes, autosaves, pointer frames, or model tokens. Selecting a Moment opens a clearly marked read-only preview. Returning to the present makes no mutation. |
| Continue from history | **Continue from here** makes the selected Moment writable as a new active **Path** without another confirmation. The former present remains unchanged as a recoverable Path. Likewise, new work after stepping backward with Undo preserves the displaced redo future as a collapsed recoverable Path rather than deleting it. |
| Vocabulary | **Branch** remains the creative operation that develops a card. **Path** describes a workspace-history trajectory. Card lineage answers where an idea came from; History answers what changed in the workspace. The two remain distinct and cross-linked where useful. |
| Searchlight grouping | One Searchlight invocation is one expandable top-level history action. Its approach selection, three arms, attempts, failures, landed cards, and Harvest remain inspectable child records rather than independent surprises in the Undo stack. |
| Undo Searchlight | Undoing a partial or completed Searchlight invocation revokes authority for future commits, cancels unfinished work, and removes that invocation's landed cards and Harvest from the active Path. Its attempts, failures, results, provenance, and spend record remain recoverable in History. Actions depending on those results must be undone first; arbitrary selective undo is not supported. |
| Rewind during work | Merely previewing an earlier Moment does not change the active Path. Choosing **Continue from here** while work is running revokes unfinished work on the departing Path; committed results remain on its preserved future, and late responses cannot cross into the new Path. |
| Durability | The active Path, current head, meaningful Moments, Undo/Redo position, preserved futures, card versions, and operation records survive reload in browser-local storage. Minerva acknowledges a history action only after the resulting local state is durably committed. Preserved Paths are never silently pruned. |
| Consequences | The interface remains familiar for ordinary mistakes but supports genuine divergence in workspace history. The implementation requires reconstructable semantic revisions rather than a disposable UI-only undo stack, without deciding whether architecture uses events, snapshots, or a hybrid. |
| Reversibility | **Moderate.** The presentation can simplify or grow, but silently destructive history would violate the approved product thesis and existing workspaces. |
| Latest responsible point | Before specifying workspace storage, asynchronous AI commits, deletion, or any interaction that claims reversibility. |
| Falsifier | The model fails if users cannot predict what Undo, Redo, Cancel, and Continue from here affect; if a new action destroys the former future; if background completion changes the expected Undo target; if Redo regenerates content or incurs spend; or if acknowledged history and Paths do not survive reload. |

#### Explicitly deferred by D-006

- A fully exposed revision graph or timeline visualization.
- Named commits, manual checkpoints, cherry-picking, or version-control terminology.
- Arbitrary selective undo of an older action with active dependents.
- Path merge, automatic conflict resolution, or cross-Path synchronization.
- History search, AI-written history summaries, annotations, or replay animation.
- Concurrent AI work on inactive Paths.
- Cross-device or collaborative history.
- Automatic pruning of preserved Paths or history.
- Re-running an old AI operation against current context as part of Redo; that is always a new action.

### D-007 — Persistent bounded voice companion

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Scope | First prototype |
| Decision | Minerva provides one **persistent, bounded, read-only voice companion**. The user starts it explicitly; it remains available while the canvas changes, defaults to **Quiet**, and may be invited into **Active brainstorming** for the current session. |
| Why | Turn-scoped voice would reproduce ordinary chat with speech input, while an always-on ambient observer would introduce hidden context, unwanted interruption, privacy ambiguity, and unbounded use. A persistent bounded companion proves genuine voice/canvas concurrency without granting mutation authority. |
| Activation | Voice never starts automatically. **Start voice** requests the required browser permission and opens one page-scoped media session. **Mic off**, **Stop speaking**, and **End voice** remain distinct controls. Ending voice or closing/reloading the page ends the conversational session; the prototype makes no background-listening claim. |
| Shared conversation | Spoken and typed turns belong to the same session and produce synchronized speech and text representations of the same response. The voice presence remains compact and subordinate to the canvas rather than becoming a full-height chat surface. |
| Quiet stance | Every session begins in **Quiet**. The agent responds only when addressed. Canvas changes update its potential context binding locally but do not themselves send context, invoke the provider, or cause commentary. Quiet must not be visually confused with a muted microphone. |
| Active stance | The user may enable **Active brainstorming** without restarting voice. Active may offer one brief observation, question, tension, or suggested next move after a meaningful committed content, Focus, structural, Path, rewind, pause, cancellation, or terminal AI-operation checkpoint. Qualifying changes are coalesced. It does not react to pan, zoom, hover, pointer movement, ordinary layout changes, selection alone, or every arriving Searchlight arm. Only one unsolicited contribution may be pending or playing, it cannot react to itself, and it waits after contributing. Active resets to Quiet when the session ends. |
| Context contract | When a spoken utterance ends, a typed turn is submitted, or an Active observation begins, Minerva freezes the latest committed D-003 Focus projection plus the targets selected at that boundary and the visible current-session conversation needed for continuity. A compact receipt such as **Voice saw Focus 4 + 2 selected** expands to the exact manifest and revision. Empty Focus and selection mean the agent has no canvas material; it never silently substitutes the viewport or whole workspace. |
| Context freshness | Committed canvas changes update the session binding without restarting its media connection. A response already underway remains bound to its captured revision; later changes affect the next turn. If binding is stale, incomplete, or unavailable, the agent stops making workspace-grounded claims until the visible current context is restored. Context is never silently truncated. |
| Authority | The companion may observe, discuss, question, challenge, synthesize, and suggest. It may not create, edit, move, group, link, focus, remove, restore, or pin cards; invoke Branch, Compare, Recombine, Harvest, Searchlight, Undo, Redo, or Path changes; queue a later mutation; or claim that workspace work occurred. If asked to act, it briefly points the user to the relevant direct canvas action. |
| Spatial reference | Voice may apply ephemeral, turn-scoped highlights to cards or structures it references and pair them with synchronized text references. These highlights never change selection, Focus, relationships, History, or durable state. Ambiguous references such as “this” or “those” receive a brief clarification rather than a guess. |
| Concurrency and interruption | Canvas manipulation never blocks voice input or stops assistant playback, and voice never blocks canvas interaction. Spoken barge-in, a submitted typed turn, or **Stop speaking** immediately ends playback and marks the partial response `interrupted`; the new turn uses a new context snapshot. Assistant audio must not be transcribed as user speech. Responses default to concise contributions and yield quickly. |
| Session memory | Finalized and interrupted utterances may remain as temporary synchronized captions for the current page session. They are not written to durable browser storage and disappear on reload or explicit clearing. The user may pin or drag either speaker's utterance onto the canvas; that user-authorized action creates an ordinary durable card outside Focus with a lightweight source anchor and enters D-006 History. Nothing is pinned or summarized automatically. |
| Truthful state | The interface exposes distinct state for session connection (`off`, `starting`, `connected`, `reconnecting`, `degraded`, `ended`), input (`mic off`, `listening`, `speech detected`, `failed`), response (`idle`, `thinking`, `speaking`, `interrupted`, `failed`), context (`current`, `updating`, `unavailable`), and stance (`quiet`, `active`). `Listening` means audio is actually accepted; `speaking` begins only with audible playback. |
| Failure and degradation | Permission denial, input loss, transcription failure, model failure, playback failure, suspension, and context mismatch report their actual stage. Voice failure never impairs the canvas or committed work. Typed input remains available; synchronized text preserves a response when audio output fails. There are no hidden semantic retries or false continuity claims after suspension. |
| Privacy and bounds | Minerva never stores raw audio in durable browser storage. Unpinned transcript text is not durable. Provider processing and retention are disclosed separately so local workspace storage is not mistaken for local voice inference. Starting Active discloses once that it may initiate provider calls; no repeated confirmation follows. Hard session time, inference, and spend ceilings are required, with exact values selected after the provider/transport spike. |
| Reversibility | **Moderate.** Voice may later gain explicitly authorized actions, but doing so requires a new authority decision and D-006 commit-before-acknowledgement semantics. The read-only prototype contract cannot be expanded silently. |
| Latest responsible point | Before choosing voice transport/provider or integrating voice with the canvas. First prove one real-browser media owner, audible output, spoken barge-in, canvas concurrency, truthful disconnect, current context binding, and text degradation in an isolated spike. |
| Falsifier | The model fails if canvas interaction interrupts capture or playback; the user cannot predict what voice sees; stale or excluded material enters unacknowledged; spoken barge-in cannot reliably regain the floor; Active becomes distracting narration; displayed states disagree with actual media behavior; any voice behavior mutates durable workspace state; or unpinned conversation survives as hidden workspace memory. |

#### Explicitly deferred by D-007

- Voice-authorized workspace actions or tool calls.
- Voice invocation of Branch, Compare, Recombine, Harvest, Searchlight, or History operations.
- Wake words, automatically started capture, always-on listening, or closed-page/background operation.
- Whole-workspace ambient observation outside explicit Focus.
- Cross-session conversational memory or durable transcripts.
- Automatic pinning, summarization, or conversion of conversation into cards.
- Durable voice-created highlights, arrows, groups, or ghost arrangements.
- Cross-device or collaborative voice sessions.
- Multiple agents, personas, speakers, or diarization.
- Audio recording, storage, or replay by Minerva.
- Exact model, voice, provider, transport, supported audio routes, latency target, retention terms, or spend ceiling.

### D-008 — Staged matched evaluation

| Field | Decision |
|---|---|
| Status | **Approved — September 6, 2026** |
| Scope | First prototype evaluation and the gate for roadmap expansion |
| Decision | Minerva uses a **staged matched evaluation**. A product-owner rehearsal first exposes gross failure and unnecessary friction. The first external gate then compares three matched pairs of practitioners—one Minerva participant and one capable linear-chat participant per pair—with at most two additional pairs only when the initial evidence is genuinely mixed. |
| Why | Self-use is the fastest way to reject a burdensome loop, but it cannot establish comparative value. A small between-person matched comparison avoids same-problem carryover, keeps the evaluation proportionate to a prototype, and tests the actual thesis: whether Minerva helps a person reach a consequential direction, connection, or tension they likely would not have reached through linear chat. |
| Interpretation boundary | This is a directional product gate, not a population-level scientific claim and not a benchmark of general creativity. Passing authorizes another bounded product iteration. It does not establish that Minerva makes people more creative, that every Minerva result is better, or that one discovered direction is objectively best. |
| Reversibility | **High.** Pair count, problem set, and review mechanics may change as evidence accumulates. The participant-owned consequence test, matched baseline, mechanism trace, preserved negative results, and separation of difference from value remain stable. |
| Latest responsible point | Run the product-owner rehearsal as soon as one complete central loop works. Run the external matched gate before expanding into multi-generation agentic expeditions, ambient exploration, voice-authorized writes, cloud workspaces, or scale-oriented hardening. |
| Falsifier | Stop capability expansion and simplify or rework the product when two valid Minerva sessions create more material or visible variation but no qualified consequential shift beyond their matched chats; when two independent users experience recurring canvas burden, context confusion, or loss of control that negates the thinking benefit; or when the final bounded comparison remains unsupported after five valid pairs. |

#### Stage 1 — Product-owner rehearsal

The product owner completes one full Minerva loop on the D-002 library example and one genuine current ambiguous problem. Before each session, record the current framing, known directions, important relationships or tensions, must-preserve constraints, and intended next action. Afterward, record up to three carry-forward discoveries—or explicitly record `none`—and trace any claimed discovery to the interaction that exposed it.

This stage answers a narrow question: can a usable build change the thinking rather than merely produce more material? If operating the canvas consumes the session, the user cannot predict what AI actions see, the loop cannot be completed, or no interaction changes a framing, decision, investigation, experiment, or next action, simplify before recruiting participants. A successful owner rehearsal is readiness evidence only; it does not count toward the external comparison.

#### Stage 2 — Three matched pairs

- Recruit three pairs of comparable solo creative or strategic practitioners: six people total. Match each pair on relevant experience and familiarity with the problem, then assign one person to Minerva and the other to the linear-chat baseline without letting either person see the other condition's work.
- Use the D-002 library problem for the first external evaluation. Every participant receives the same frozen task, source packet, must-preserve constraints, and 30-minute working period. Use the same model and version where controllable. Record calls, tokens, spend, failures, and latency rather than concealing Minerva's additional inference cost through an artificial call-count match.
- Give participants a short mechanics-only practice on an unrelated problem before measurement. Assistance during the measured session is limited to resolving product malfunction; moderator coaching invalidates the session.
- The baseline is capable ordinary linear chat, not a deliberately weakened prompt or interface. Its participant may prompt, revise, quote, and organize within the normal chat surface. Minerva's participant may use the available prototype loop. The primary matched test isolates the spatial core, so voice remains off in both conditions; D-007 concurrency and trust are evaluated separately against its own falsifiers.
- Freeze each participant's pre-session inventory of known directions, relationships, tensions, constraints, and intended next action. After the session, each participant submits no more than three carry-forward discoveries, or `none`, in the same interface-neutral format.
- Follow up after 24 hours to determine whether each claimed discovery still changes the participant's framing or intended action.

#### Qualified consequential shift

A session contains a **qualified consequential shift** only when at least one submitted discovery satisfies every condition:

1. It was absent from the participant's frozen pre-session inventory and is not a mere rewording of a known direction.
2. It materially changes a framing, decision, investigation, experiment, or concrete next action.
3. It preserves the declared must-preserve constraints, or makes an explicit, consequential conflict with one of them visible.
4. The participant still endorses its usefulness after 24 hours.
5. The session record supports a plausible trace from the interaction to the discovery.

For a Minerva result, the trace must identify a Minerva-specific contribution—explicit Focus or spatial structure, Branch, targeted Searchlight, simultaneous Compare, contribution-level Recombine, Harvest, or preserved Path—not merely that a model generated a useful card. A productive card without that trace is a usability observation, not evidence for Minerva's product thesis.

#### Evidence and judgment

Each session preserves one compact case record:

- The frozen task, source packet, initial inventory, constraints, model/configuration, time window, and resource-use receipt.
- The final Minerva workspace or linear transcript, including failures and incomplete work.
- The participant's interface-neutral carry-forward packet and 24-hour response.
- For Minerva, the native context manifests, operation records, lineage, History, and any relevant Harvest.
- A brief post-session account of what helped, what obstructed thinking, and why the participant believes each claimed discovery appeared.

An independent reviewer first checks the normalized packet without seeing the assigned condition, then reviews the interaction trace. The reviewer decides only whether the evidence satisfies the qualification contract; the participant owns the judgment that a shift is consequential. Disagreements and negative results remain part of the record. Neither a model nor Minerva ranks the discoveries or selects a winner.

#### Countermetrics

A qualified shift does not excuse damage elsewhere. Review every Minerva session for:

- Canvas-management burden relative to reconstructing context in chat.
- Whether the participant could predict the exact material an AI action would see.
- Whether the central loop was discoverable without moderator rescue.
- Searchlight overload or three approaches that were one idea wearing different labels.
- Predictable cancellation, failure, Undo/Redo, and Path recovery.
- Durable acknowledged work and truthful partial, interrupted, or failed states.
- Latency, inference volume, and spend relative to the judged benefit.
- Whether any apparent advantage disappears against a skillfully used chat baseline.

D-007 voice evaluation separately records canvas/media concurrency, interruption, context receipts, unwanted Active contributions, and trust failures. Voice usability does not substitute for the matched spatial outcome.

#### Decision gate

After the first three valid pairs, **continue bounded prototype development** only when:

- At least two pairs favor Minerva: the Minerva session contains a qualified consequential shift attributable to a Minerva-specific interaction, while its matched chat does not contain a comparable qualified shift.
- No material burden, context-predictability, control, or trust failure recurs across two Minerva participants.
- At least one complete Minerva loop and its claimed contribution can be reconstructed from native records.

Run no more than two additional matched pairs when a split result, an invalid session, or reviewer disagreement could realistically change the decision. After five valid pairs, require at least three Minerva-favoring pairs under the same conditions. If that gate is not met, treat the thesis as unsupported at this prototype stage and simplify or rework it rather than adding agents, output volume, polish, or telemetry.

#### Invalid sessions and immediate stops

A provider outage or material implementation defect invalidates the affected session; report it and repeat that condition once after repair. Hidden context, irreversible loss, silent mutation, a late commit after cancellation, false completion, or a displayed state that contradicts actual behavior stops evaluation immediately until repaired. If the same material trust defect recurs after one repair, stop the current implementation approach rather than continuing the study.

#### Intentionally not used as proof

- Card, branch, prompt, token, gesture, word, or session counts.
- Lexical, embedding, stylistic, or visual distance as a proxy for usefulness.
- Automated novelty, creativity, coverage, quality, or winner scores.
- Model self-evaluation or reviewer unanimity.
- Visual preference, delight, time on canvas, or NPS as proof of consequential discovery.
- Test count, architectural elegance, deployed infrastructure, or telemetry volume.
- Deferred capabilities, general market demand, retention, collaboration, or commercial return.

## Decision queue

**D-001 through D-008 are approved. The first-prototype product decision set is closed.**

Architecture-specific choices—renderer, local store, AI provider, voice transport, orchestration, and deployment mechanics—remain open. They should be resolved only after `SPEC.md` translates the approved intent and decisions into one coherent, testable product contract.
