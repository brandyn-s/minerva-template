# Minerva: observable product specification

Status: requirements for a new application, not capabilities implemented by
this starter. Build the integrated core in bounded sessions; do not substitute
a generated demo for the defined behavior.

## Workspace and content

- Private single-owner, online-first access. Public source does not expose data
  or authorize anonymous paid operations.
- A workspace has a name, brief and explicit constraints. Ideas have stable IDs,
  concise titles and immutable content revisions.
- Saved acknowledgements reflect server-side persistence. Reload recovers
  content, lineage and saved layout from canonical state.
- Derivation connects exact revisions and contributions. Missing parents and
  cycles in derivation are invalid. Semantic relationships can be cyclic.
- Link identity includes direction and kind, not just two endpoint IDs.
- Revisit/restore creates a new source-linked revision. Keep prior work
  inspectable; undo may not silently delete material used downstream.
- Versioned JSON export includes content, revisions, relationships and layout.
  Import, cross-system migration and offline synchronization are not required.

## Canvas and discovery

Show a spatial field with title-first cards, direct selection, panning, zoom,
dragging, and details on demand. Two selected cards expose Connect/Recombine
without a nested menu. Show relationships when they help inspection, not as
permanent diagnostic clutter.

Use warm paper, dark green ink, restrained teal/coral/amber/violet, serif
reading text and compact labeled controls. The experience should invite
exploration without hiding intent. Give mouse, touch and keyboard equivalent
access, visible focus, readable narrow-screen controls and reduced motion.

Movement and zoom remain available during AI work. New cards do not reset
selection, move originals or auto-fit the camera. Content and layout have
separate writes. Pointer gestures and layout do not trigger model calls.
Optional semantic zoom changes detail with stable thresholds while preserving
access to selected cards and outstanding input requests.

## Context and acknowledgement

An inspector shows exact source revisions/excerpts, inclusion and order reasons,
brief/constraint revision, operation/prompt version, model profile, and explicit
reference/archive exposure. That manifest is the dispatched application-controlled
input, not a partial preview before hidden memory is added.

Independent-root requests contain only the frozen brief and user constraints.
Source-directed and archive-aware modes declare their sources. Spatial attention
is a labeled hint; it does not become an instruction or permanent constraint.
No silent truncation. Later retrieval receives its own record.

Commands use stable IDs and target-specific revision expectations. Repeated
delivery does not repeat effects; conflicting payload reuse fails. Show admitted,
running, applied, conflicted and failed work accurately. A source change does
not block unrelated workspace operations.

## Creative operations

| Operation | Required distinction |
|---|---|
| Diverge/Branch | Develop alternative mechanisms while retaining source lineage |
| Combine | Preserve recognizable contributions from selected sources |
| Recombine | Change the interaction of functional parts, not merely summarize |
| Split | Produce independently useful parts, not just alternate wording |
| Tension | Explore competing assumptions/tradeoffs through concrete procedures |
| Escape | Change an identified repeated mechanism while still serving the goal |
| Compare | Describe differences with evidence; do not silently choose a winner |

Inputs can be whole ideas or exact source excerpts. Record what is inherited,
changed and newly generated. Each proposal carries a concise title, artifact,
actor/action/feedback mechanism, dependencies and uncertainty.

Generation, assessment and human decisions are separate. Review exact proposal
revisions for goal/constraint fidelity, prerequisites and actual differences.
Pending, supported, contradicted, unclear and unavailable are distinct states.
Model review is not proof of originality, feasibility or quality.

Keep/edit/set-aside are direct actions. Acceptance atomically creates the
decision, content revision and lineage. Editing invalidates claims about the
previous text without deleting its evidence. Deterministically invalid output
cannot be accepted. Keeping when review is unavailable requires a deliberate,
clearly unreviewed decision, never an implied passing assessment.

Stale dependencies offer regeneration or explicit keep-as-separate-branch with
the original input provenance. Every independent result/failure is represented.

## Searchlight

Searchlight is a bounded exploration strategy, not a fixed three-arm sweep.
Separate policy, generation and space analysis. A run may use independent roots,
local development, distant recombination and assumption/mechanism challenges
within its explicit allowance.

Record source/context exposure, ancestry, repeated mechanisms, failed attempts
and usage. The archive retains full evidence with compact descriptions.
Independent roots do not inherit sibling outputs or generated memory.
Archive-aware operations explicitly identify what they saw.

Detect repetition in operating mechanisms, not just words, colors, titles,
roles or operation labels. On stagnation, change strategy or report stagnation;
do not silently repeat the same source/operation/context until the budget runs
out. Keep original goals and user constraints fixed. Repair has explicit bounds.

Exploratory cards can arrive without a human click for each one, but remain
distinct from kept work. Start/pause/resume/stop and partial outcomes survive
reconnection. Starting a run does not grant authority to overwrite kept content.

## Reading the space

Show provisional groups, representative ideas, unusual candidates, recurrence
and possible connections using artifact and lineage evidence. Distance can
support retrieval, not establish quality.

"Basin" labels a provisional group under a stated analysis. A candidate attractor
requires different recorded paths returning to a mechanism with shared context
disclosed; many descendants are insufficient. A proposed escape is not proven
feasibility or global novelty.

"What this space suggests" links exact supporting revisions, distinguishes
observations from hypotheses, includes counterexamples/coverage limits, and
offers concrete next experiments. A person can challenge grouping. The narrative
does not become authoritative context for the next generation.

## Concurrent collaborator

Typed and bidirectional voice collaboration can discuss, explain, challenge,
suggest relationships, point at material, and request scoped operations.
Speech-to-text capture alone is not a spoken collaborator.

Assemble bounded context from saved state, attention, relevant changes and run
events; retrieve card detail on demand. Do not replay the whole workspace and
conversation every turn. Speculation is not silently stored as a user constraint.

Partial speech may preview intent, never mutate. Finalized utterances have stable
intent IDs and resolve to discussion, attention, proposal or a clear command.
Ambiguous referents are clarified. Source revisions and acknowledgements govern
effects; reconnection cannot duplicate them.

Attention is ephemeral, sequenced and expiring. Highlighting does not write
content, start paid work, steal selection or move the camera; explicit navigation
may move it. Barge-in stops playback, not unrelated Searchlight or saved actions.
Expose microphone state, bounded sessions, reconnect/resync and typed fallback.

## Recovery and spending

Bound retries across provider and workflow layers. Transient errors may retry;
malformed results may receive a limited repair; stale dependencies replan only
affected work; repetition changes strategy. Save successful siblings.

Quota/auth denial stops paid admission. Exhausted recovery leaves a checkpoint,
specific reason and explicit resume/retry action. Never relax constraints,
change providers silently, fake reviews or report fallback text as live success.
Stop cannot guarantee zero cost for admitted requests.

Before live work, explicitly authorize the model/session and its share of the
provisional cumulative $100 application envelope. Cover voice/text and platform/
database costs without independent $100 allowances or automatic renewal/top-up.
Disclose delayed metering and vendor soft caps; app receipts are not a billing
guarantee. No real credentials or workspace data belong in public Git.

## Acceptance scenarios

1. Create/edit an idea, save, reload and inspect its history/lineage.
2. Inspect a manifest; move cards without changing it; edit a dependency and
   see the correct conflict instead of a stale write.
3. Generate, inspect, edit and keep a proposal, preserving exact source evidence.
4. Recombine distant ideas and identify inherited versus new contributions.
5. Start Searchlight, speak about one card, move another, zoom elsewhere and
   receive results without a lock, camera jump or lost selection.
6. Interrupt/reconnect voice without duplicate actions; retain typed access.
7. Close/reopen during exploration and recover actual results/run state.
8. Inject partial failure, invalid output, repetition and quota denial; preserve
   evidence and show bounded, specific recovery outcomes.
9. Compare short exploration runs with an ordinary-generation baseline using
   declared settings and retained failures/cost. Leave creative efficacy
   unresolved without appropriate human evidence.

## Extensions and exclusions

Alternate evolution/constellation views, more creative instruments, goal-directed
Agent Drive, isolated output artifacts and REST/MCP can follow the integrated
core. They reuse the same records/operations. Do not add a second execution
engine, generic plugins, multi-user co-editing, desktop agents or research
infrastructure merely to support an optional feature.
