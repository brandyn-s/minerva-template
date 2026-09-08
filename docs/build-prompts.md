# Minerva: standalone Astra build prompts

These prompts define a new application from first principles. They require
no reference application, external repository, research report, or earlier
conversation. Each fenced block is a complete task to paste into a fresh
GPT-6 Astra session working in the new project's directory. No supplementary
project history is needed.

**Sequence:** prompts 1-18 deliver and publish the first integrated release.
Prompts 19-23 are optional extensions, one session each, after the core works.
The first useful release includes Searchlight, voice, and the canvas together;
the earlier slices are implementation checkpoints, not substitute products.

**Session practice:** start with medium effort; increase it for a demonstrated
reasoning/debugging difficulty, not by habit. One prompt is one bounded outcome,
not a fixed time limit or a guarantee of one-session completion. If a slice
outgrows its session, save a coherent checkpoint and resume that same outcome
in a fresh session before advancing. No multi-agent orchestration is required.

**Continuity:** only the new repository carries state between sessions.
Keep `docs/product/ARCHITECTURE.md` concise and `docs/HANDOFF.md` roughly one screen:
implemented capability, relevant files, exact commands/results, blockers, and
next unfinished outcome. Do not store secrets, transcripts, or long diaries.
Git commits, code, and executable behavior are the evidence; a handoff is a
navigation aid, not an instruction to trust an unverified claim.

## Prompt 1: create the runnable product foundation

```text
Build Minerva from scratch: a private, single-owner, online-first application
where a person explores ideas on a spatial canvas, starts bounded AI exploration
called Searchlight, and talks with a concurrent voice collaborator. The first
useful product must combine all three. This session builds only the foundation.

Work in the new project directory supplied for this session; ask for that
directory if none is specified. Inspect it before scaffolding; preserve any
working foundation already present. Use only this repository and official
dependency documentation. Create a Next.js/React/TypeScript modular monolith
suitable for a public GitHub repository and a separate Vercel project.
Postgres will own durable
product state; Vercel Workflow will run longer tasks. Domain code must not depend
on React, HTTP objects, or provider SDK types. Do not create empty feature modules.

Make a working home page and concise docs/product/INTENT.md and
docs/product/ARCHITECTURE.md; update these rather than duplicate their contracts.
The visual direction is warm paper, dark green ink, restrained teal/coral
accents, serif content, and compact readable controls. Use original styling
and system fonts.
Pin compatible dependencies and document local startup and genuine check commands.
Add minimal CI; do not present an empty test run as product coverage.

Write a short AGENTS.md covering scope, module boundaries, server-only secrets,
and completion. Do not configure permissive runner approvals or experimental
agent features. Do not provision services, spend money, publish, or deploy.

Run the app and relevant checks. Finish with working files, not just a plan.
Create docs/HANDOFF.md with implemented scope, files, commands/results, blockers,
and next unfinished work so another fresh session can continue without chat history.
```

## Prompt 2: persist a private workspace and editable ideas

```text
You are building Minerva, a private spatial idea studio whose eventual core is
canvas + Searchlight exploration + concurrent voice. Use the current new
repository only. Keep its Next.js/TypeScript modular monolith; inspect its code
and docs/HANDOFF.md, and report a missing prerequisite instead of changing architecture.

Implement workspace creation/listing and a first editable idea through a simple
working page. Use Postgres with explicit schema migrations and a documented local
development path. Workspaces have an owner, name, brief, and explicit constraints.
Ideas have stable IDs; content edits create immutable revisions. Give brief and
constraints revision identity too. Saved state must come from the server after
reload, not only browser storage.

Establish private single-owner access using a maintained session mechanism.
Keep credentials server-side; protect data reads and mutations. Any development
bypass must be explicit, loopback-only, and impossible to activate in deployment.
If database/auth configuration is unavailable, surface it and complete the local
setup path rather than returning fake saved data.

Implement named create/revise operations with input validation and target-scoped
revision checks. Do not add teams, billing, offline synchronization, or AI calls.
Use synthetic examples suitable for public source. Do not provision paid services.

Exercise create -> edit -> reload and a stale revision conflict. Run relevant
checks and update docs/HANDOFF.md with exact outcomes, files, and blockers.
```

## Prompt 3: build the nonblocking spatial canvas

```text
Build Minerva's first spatial canvas in this repository. Minerva is a private
idea studio with server-owned Postgres content and future concurrent AI/voice.
Keep the Next.js/React/TypeScript modular monolith. Inspect its workspace/idea
operations first; if those are absent, report the prerequisite rather than
creating another state store. No other repository or conversation is required.

Show title-first idea cards on a pannable, zoomable field. Support creation,
selection, inspection/editing, multi-selection, dragging, and saved positions.
Separate content revisions from layout revisions. Pointer movement is local and
responsive; persist deliberate layout changes without rewriting the entire graph.
Neither dragging nor zooming triggers a model request.

Use paper #e9dfc7, card #f1e9d6, ink #273a35, teal #28686a, coral #a15442,
amber #b18a58, and violet #755584 as design tokens. Prefer serif reading text
and compact labeled controls. Keep rich content in an inspector, not on every
card. Include keyboard-accessible actions, touch panning, and narrow-screen access.
Choose a maintained, license-compatible renderer only if it simplifies this slice.

Simulate incoming card additions while dragging/zooming. They must not reset
the camera, selection, or user positions. Do not use a workspace-wide busy lock,
automatic fit-on-update, nested menus, or a generic canvas/plugin framework.

Demonstrate editing and position recovery after reload. Run focused browser and
code checks; update docs/HANDOFF.md with files, results, and unfinished behavior.
```

## Prompt 4: make relationships and history inspectable

```text
Minerva is a new private spatial idea studio implemented as a Next.js/TypeScript
modular monolith with Postgres-owned content. In this repository, inspect the
canvas, idea revisions, and application operations. This session adds relationships
and history; do not add model calls or consult external application repositories.

Distinguish immutable derivation lineage from editable semantic relationships.
Lineage connects exact source and result revisions and records the operation and
contributions. Semantic links have stable IDs, direction, and a labeled kind such
as supports, challenges, or relates-to; they may form cycles. Derivation lineage
must not create cycles or refer to nonexistent revisions.

Let a person connect two cards, inspect parents/contributions, read revision
history, and revisit an earlier revision. Revisiting creates a new revision with
source provenance; it does not erase later work. Deduplicate repeated commands
without collapsing different relationship kinds or directions.

Keep relationships visible on selection/hover rather than permanently covering
the field. Add a versioned JSON workspace export containing content, revisions,
relationships, and layout. No import or cross-system migration is required.
Keep target-scoped conflicts separate from unrelated layout activity.

Exercise duplicate links, missing parents, a lineage cycle, restore-after-edit,
and reload/export. Preserve original content and the existing canvas experience.
Run relevant checks and update docs/HANDOFF.md with files, outcomes, and blockers.
Do not publish, deploy, or provision services.
```

## Prompt 5: implement explicit operation context

```text
Minerva is a private canvas for developing and recombining ideas with AI. It uses
a Next.js/TypeScript modular monolith and Postgres with immutable idea revisions.
Work only in this repository. Inspect the workspace, lineage, and selection code;
if missing, report the prerequisite. This session builds context compilation,
not model generation.

Implement a deterministic operation-context compiler and an on-demand inspector.
A manifest records source IDs and revisions, exact selected excerpts or full
content, inclusion reasons and order, brief/constraint revision, operation and
prompt version, runtime model profile, and any explicitly admitted archive data.
Preview and execution must consume the same frozen application-controlled input.
Validate excerpt membership against the selected revision.

Provide two explicit modes: independent-root uses only the brief and user
constraints; source-directed uses named sources plus declared references.
Archive-aware context can be added explicitly later. Spatial proximity and
attention are labeled hints, never instructions or inherited constraints.
Do not append invisible memory after compilation. Record later tool retrieval
as separate evidence rather than rewriting the original manifest.

Dragging a card must not change content ordering or invalidate a manifest.
Changing a dependency must expose a revision mismatch; omitted material must
remain omitted. Handle input size limits explicitly, without silent truncation.

Use focused fixtures for ordering, exclusions, stale excerpts, and independent
roots. Update docs/HANDOFF.md with implemented contracts, files, check results,
and blockers. Do not make paid calls or introduce a context-service framework.
```

## Prompt 6: implement durable runs and cost admission

```text
Build Minerva's durable execution slice in this new repository. Minerva combines
a private spatial canvas, bounded Searchlight exploration, and concurrent voice.
Keep its Next.js/TypeScript modular monolith, Postgres authority, and Vercel
Workflow. Inspect the context manifests and operations first; report missing
prerequisites. Use official installed-version documentation, not another app.

Implement run admission, persisted dispatch intent, workflow start, individual
step checkpoints, progress reads, stop, and reconnection. Use a deterministic
fake generator explicitly labeled development-only. The browser must not own
run lifetime. Start with polling persisted state if sufficient.

Commands have stable IDs, payload identity, actor, targets and expected revisions.
Duplicate delivery returns the existing receipt; different payload reuse conflicts.
Distinguish queued/admitted, running, awaiting input, completed, failed, and stopped.
Handle the gap between database commit and workflow start with reconciliation.
Do not assume durable replay guarantees exactly-once external calls.

Create bounded attempt and spend admission using a configurable cumulative
application allowance, provisionally $100 total. Reserve before paid work;
uncertain outcomes remain accounted for until reconciled. No automatic top-ups
or provider switching. Vendor metering is not an exact real-time hard cap.

Exercise startup failure, duplicate dispatch, partial completion, browser close,
reconnect, and stop with in-flight work. Keep the canvas available throughout.
Run relevant checks and update docs/HANDOFF.md. Do not enable paid calls or deploy.
```

## Prompt 7: deliver the first live creative operation

```text
Minerva is a private spatial idea studio with a Next.js/TypeScript modular
monolith, Postgres revisions, frozen operation context, and durable workflows.
Inspect those capabilities in this repository only; report missing prerequisites.
Implement one-source divergence end to end without expanding to a general agent.

Given a saved idea, brief, and constraints, produce a small bounded set of
alternative mechanisms as separate proposals. Each has a concise title, artifact,
actor/action/feedback description, dependencies, uncertainties, and source links.
Different phrasing or styling alone is not a different mechanism.

Use a server-side model adapter with an explicit configurable capability profile:
model, supported settings, output schema, time/output limits, and attempt policy.
GPT-6 Astra is the development agent; runtime model selection is independent.
Never inherit unsupported sampling settings by merely changing a model ID.
Record actual inputs, output, finish state, usage, and provider errors.

Persist each result and show it near its source without moving original cards.
Keep proposals distinguishable from accepted ideas; source content is untouched.
Provide an explicitly labeled fixture mode. A missing credential or denied budget
must not become fabricated live output.

Complete the fixture path and run a bounded live case only when credentials and
explicit spend authorization are available. Exercise malformed output, timeout,
and partial failure. Run focused checks; record actual versus simulated behavior
and remaining blockers in docs/HANDOFF.md. Do not deploy or buy services.
```

## Prompt 8: add review and transactional human decisions

```text
Build proposal review and human decisions for Minerva, a private spatial
human-AI idea studio. Work only in this repository's Next.js/TypeScript modular
monolith. Postgres owns revisions and durable run results. Inspect proposal,
context, and lineage code first; report missing prerequisites instead of
creating a competing mechanism.

Keep model assessment separate from generation and from human acceptance.
Review the exact proposal revision for goal fidelity, explicit constraints,
causal dependencies, and meaningful differences from supplied alternatives.
Separate supported, contradicted, unclear, pending, and unavailable evidence.
A model assessment is not proof of feasibility, novelty, or quality.

Provide inspect/edit/keep/set-aside actions. Keeping must atomically record the
decision, idea revision, source contributions, and lineage. Editing creates a
new draft revision and invalidates claims about the old text; retain original
text/evidence. Deterministic invalid output cannot be accepted. Missing or
unavailable review must never appear as passing: allow only an explicit,
clearly unreviewed keep where the person acknowledges that state.

If source dependencies changed, offer regeneration or an explicit separate
branch retaining the original input provenance. Undo must respect downstream
dependencies rather than delete used history.

Exercise repeated acceptance, stale sources, edits after review, unavailable
assessment, and dependent undo. Preserve canvas/voice concurrency boundaries.
Use fixtures unless paid calls are explicitly authorized. Run focused checks and
update docs/HANDOFF.md with outcomes, files, and blockers.
```

## Prompt 9: implement direct combination and contextual moves

```text
Minerva is a private spatial idea studio where people and AI explore alternatives
without losing their origins. Use this repository's Next.js/TypeScript modular
monolith, Postgres revisions, operation manifests, durable runs, and proposal
decisions. Inspect these capabilities first and report missing prerequisites.

Add contextual actions for one to four selected ideas:
diverge develops alternatives; combine preserves recognizable contributions;
recombine changes how functional parts interact; split produces independently
useful parts; tension explores competing assumptions; escape changes a named
repeated mechanism while preserving the original goal.

Use typed operation definitions and shared generation/review machinery, with
specialized behavior where necessary. Do not build a plugin platform. Freeze
selected source revisions and contribution choices. Let users choose whole
ideas or exact excerpts and inspect what is inherited versus newly generated.

Make two distant cards directly selectable for Connect/Recombine. Offer a small
labeled contextual strip; specific suggested actions may be AI-generated after
an explicit request. Do not require a radial fan or nested menus. Pan/zoom never
starts planning or invalidates content-only context.

Show every returned alternative or its explicit failure, preserve original
positions, and provide Find drafts without unsolicited camera movement.
Exercise a two-source recombination, split semantics, stale dependency, and
partial failure. Use fixtures unless paid calls are authorized. Run relevant
checks and update docs/HANDOFF.md. Do not publish or deploy.
```

## Prompt 10: build Searchlight roots and the exploration archive

```text
Implement the first Searchlight in Minerva, a private spatial idea studio using
a Next.js/TypeScript modular monolith, Postgres, and durable Vercel workflows.
Searchlight explores a possibility space while the person edits the canvas and
eventually talks to a voice collaborator. Work only in this repository; inspect
the operation/run/context capabilities and report absent prerequisites.

Start a user-authorized bounded run from the brief and explicit constraints.
Generate multiple independent roots from that frozen brief-only context.
Independent means no sibling outputs, generated archive memory, leading answer,
or prior space narrative in their inputs; it does not guarantee novel results.
Record exact context exposure and source/root lineage per attempt.

Implement an exploration archive retaining full artifacts plus compact mechanism
descriptions, repeated/rejected outcomes, repair reasons, and attempt usage.
Archive classifications are not human taste decisions. A repetitive idea can
still be kept. Independent-root mode excludes archive content; archive-aware
operations explicitly declare the subset they see.

Persist and display exploratory cards as they arrive without requiring one
acceptance click per generated card. Keep them separate from human-kept work.
Expose bounded progress, pause/resume/stop and useful partial results. Never
overwrite kept content or lock canvas movement.

Exercise root-context isolation at the model adapter, partial failure, duplicate
completion, and reload mid-run. Use fixtures unless live spend is authorized.
Run focused checks; update docs/HANDOFF.md with actual scope and blockers.
```

## Prompt 11: make Searchlight adapt instead of repeat

```text
Minerva is a private spatial idea studio. Its Searchlight must explore different
ways to satisfy a brief while the canvas remains usable. Work only in this
repository's Next.js/TypeScript modular monolith with Postgres and durable runs. Inspect the
root generator, archive and operations; report missing prerequisites.

Implement a small exploration policy separate from generation and analysis.
Choose among fresh brief-only roots, local development, distant recombination,
and targeted assumption/mechanism challenges. Track what source/operation/context
was tried and its outcome. Repeated attempts require a reason rather than silent
recursion. Keep the goal and explicit user constraints fixed.

Detect stagnation from artifact-level mechanism recurrence and recorded paths,
not title diversity, operation names, or distance alone. On repetition, change
the approach: remove an inherited assumption, use a fresh root, or combine truly
different contributions. Repair near-misses within a stated attempt allowance.
If permitted alternatives fail, preserve the map and report stagnation honestly.

Keep rejection/failure evidence and spend in the run record. Do not optimize a
single model-rated creativity score or create a rigid taxonomy every idea must
fit. Unknown mechanisms and uncertain judgments are valid states.

Use fixtures for cosmetic variants, same mechanism with different wording, real
mechanism changes, infeasible novelty, and repeat loops. Demonstrate bounded
termination and strategy changes. Use live calls only if authorized. Run focused
checks and update docs/HANDOFF.md with files, results, and unresolved quality risks.
```

## Prompt 12: explain the explored space with evidence

```text
Build Minerva's space analysis and "What this space suggests" surface. Minerva
is a private canvas with Searchlight exploring ideas in durable runs. Keep this
repository's Next.js/TypeScript modular monolith and Postgres authority. Inspect
the archive and source revisions; report missing prerequisites.

Analyze actual artifacts, parent relationships, and context exposure. Produce
provisional groups, representative ideas, unusual candidates, repeated mechanisms,
and possible connections. Lexical or embedding similarity may find candidates;
it must not establish novelty, quality, or causal equivalence.

Use "basin" only for a provisional group under a stated analysis. A candidate
attractor needs distinct recorded paths returning to a mechanism with shared
context disclosed; a large descendant cluster is insufficient. An escape needs
evidence of a mechanism change that still serves the goal, not proof it will work.

Each short space reading links exact supporting revisions, distinguishes observed
patterns from hypotheses, includes counterexamples/coverage limits, and proposes
a concrete next experiment. Do not feed narrative summaries back as authoritative
facts. Let users challenge a grouping or mark two ideas as the same mechanism.

Make analysis inspectable without covering the canvas in permanent badges or
moving user-arranged cards. Run it off the synchronous pointer path.
Exercise misgrouping, unknown profiles, stale readings and contradictory evidence.
Use fixtures unless paid calls are authorized. Run focused checks and update
docs/HANDOFF.md with implemented behavior and remaining uncertainty.
```

## Prompt 13: add a typed collaborator and shared attention

```text
Minerva is a private spatial idea studio with concurrent Searchlight exploration.
Build a typed collaborator that will also support voice. Use this repository's
Next.js/TypeScript modular monolith, Postgres, revisioned commands and durable runs.
Inspect those capabilities first; report missing prerequisites. Do not use other
application repositories or add a separate agent service.

Support discussion, explanation, assumption challenges, link suggestions and
explicit scoped actions on the current workspace. Assemble a bounded context
from saved state, selected cards, relevant changes and run events. Fetch detailed
cards on demand; do not send the entire graph and transcript every turn.
Keep suggestions and speculative conversation separate from user constraints.

Use the same named application operations as the UI. Commands carry stable IDs
and target revisions; announce success only after acknowledgement. Ambiguous
referents require clarification. Generated ideas/links become inspectable
proposals rather than silently replacing kept content.

Implement ephemeral shared attention: point/highlight card or relationship,
with origin, sequence and expiration. Agent highlighting does not steal user
selection, write content, launch paid work, or move the camera. Explicit
navigation can move the camera; stale events are discarded on reconnect.

Exercise discussion during Searchlight, duplicate commands, stale sources and
out-of-order highlights. Use fixtures unless calls are authorized. Run relevant
checks and update docs/HANDOFF.md with files, outcomes, and blockers.
```

## Prompt 14: make the collaborator genuinely conversational by voice

```text
Minerva is a private spatial idea studio where a person speaks with an AI
collaborator while Searchlight runs and the canvas remains editable. In this
repository's Next.js/TypeScript modular monolith, inspect typed conversation,
shared commands, attention, and spend admission. Report missing prerequisites.

Add bidirectional voice: speech input and spoken collaborative replies, not only
transcription. Use a maintained realtime provider behind a small adapter with
server-mediated ephemeral credentials. Verify current protocol and session
billing constraints from official documentation. Keep secrets off the client.

Voice has its own lifecycle: connect, listen, speak, interrupt, reconnect and
disconnect. Barge-in stops playback, not unrelated exploration or already-applied
commands. Show microphone state and retain typed fallback. Context resynchronizes
after disconnect without replaying executed intents or stale camera navigation.

Partial transcripts may update previews but never mutate. Finalized utterances
have stable intent IDs and resolve to discussion, attention, a proposal, or a
clear requested command. Preserve source revisions and distinguish user words
from model additions. Deduplicate relationships by kind and direction too.

Bound session duration and cost within the shared cumulative application allowance,
provisionally $100 total. An API-key allowance must not bypass project accounting.
No automatic top-up, silent provider change, or paid calls without authorization.

Exercise fixtures plus a bounded real voice session when authorized; explicitly
report if live transport remains untested. Run relevant checks and record actual
speech, interruption, action and reconnect behavior in docs/HANDOFF.md.
```

## Prompt 15: make concurrent work recover visibly

```text
Harden the core interaction of Minerva: a private idea canvas, durable Searchlight,
and simultaneous typed/voice collaboration. Work only in this repository's
Next.js/TypeScript modular monolith with Postgres and Vercel Workflow. Inspect
the current implementations; report missing features rather than substituting
simulated success or redesigning the architecture.

Classify failures and implement bounded responses: retry transient provider
errors, repair invalid structured output, replan affected stale-source actions,
change exploration strategy on recurrence, and reconnect voice with context.
Combine SDK and workflow retries under one explicit attempt/time/spend policy.
Quota/auth failures stop paid admission; unknown repeated failures stop the
affected action with a checkpoint and a specific explanation.

Keep successful sibling results, review-unavailable states, and all billed or
uncertain attempts. Do not weaken constraints, fabricate review, erase failures,
or secretly switch providers. Stop prevents future admission without claiming
in-flight calls cost nothing. Resume must not repeat accepted mutations.

Exercise the integrated journey: run Searchlight, speak about one card, move
another, zoom elsewhere, recombine distant ideas, interrupt speech, receive
results, close/reopen, and recover from an injected failure. Preserve viewport,
selection, layout and history. No global busy lock.

Fix concrete failures with focused checks rather than building a general
recovery framework. Do not deploy or incur unauthorized spend. Update
docs/HANDOFF.md with scenarios/results, changed files and remaining blockers.
```

## Prompt 16: refine the experience for discovery

```text
Refine Minerva's integrated canvas/Searchlight/voice UX in this repository.
The product is a private spatial place to explore ideas, understand their
relationships, and collaborate conversationally. Keep its Next.js/TypeScript
modular monolith and existing product operations. Inspect the working journeys;
report missing core capabilities instead of disguising them with visual polish.

Use warm paper #e9dfc7, card #f1e9d6, ink #273a35, teal #28686a, coral #a15442,
amber #b18a58, violet #755584; serif reading text and compact labeled controls.
Aim for tactile curiosity and clear discovery, not game points or hidden commands.
Expose Explore, Talk and run status. Cards lead with concise meaningful titles;
selection reveals actions and an inspector for detail, lineage and contributions.
Two-card selection reveals Connect/Recombine directly.

Simplify nested menus and permanent button clutter. If needed, implement semantic
zoom: detail nearby, title/takeaway cards at overview, compact markers farther
out. Use hysteresis to prevent flicker and keep selected/input-needed items
accessible. Never auto-fit on incoming results.

Provide mouse, touch and keyboard equivalents, readable narrow-screen panels,
focus management, reduced motion, and non-color status cues. Make errors and
unavailable review understandable without a diagnostic dashboard.

Exercise desktop/mobile core journeys during incoming updates. Fix observed
interaction problems, run focused checks, and update docs/HANDOFF.md with files,
outcomes and remaining usability issues. Do not add unrelated features or deploy.
```

## Prompt 17: qualify exploration without trusting its own scores

```text
Assess and improve Minerva's creative exploration behavior in this repository.
Minerva is a private spatial canvas with durable Searchlight and concurrent voice,
built as a Next.js/TypeScript modular monolith. Inspect actual implementations,
fixtures and docs/HANDOFF.md. Do not treat a polished narrative or model self-rating
as proof of useful exploration.

Create a compact repeatable fixture suite covering paraphrases, same mechanisms
with different labels, genuinely different mechanisms, infeasible novelty,
independent reconvergence, contaminated roots, misleading summaries, and failed
attempts. Check source/review fidelity, archive retention, bounded stagnation,
and the distinction between observation and inference.

Prepare a small comparison of Searchlight and ordinary independent generation
on synthetic representative briefs. Specify model/settings, candidate/attempt
counts, and a bounded equal spending opportunity before running. Retain failures,
tokens, cost, and context exposure. A fixed candidate count alone is not cost parity.

Run live comparisons only with explicit spend authorization. Present blinded
candidate sets for human assessment of useful mechanism differences, goal
fidelity and feasibility; report model scores separately. If human judgments or
live runs are unavailable, leave efficacy unresolved, not inferred from fixtures.
Do not invent an improvement percentage or build a large research platform.

Fix supported behavioral defects, preserve counterexamples, and run relevant
checks. Record evidence locations and unresolved judgments in docs/HANDOFF.md.
Do not deploy or expand the product scope.
```

## Prompt 18: publish the first private application from public source

```text
Prepare and, when authorized, publish Minerva: a private single-owner spatial
idea studio with Searchlight exploration and concurrent voice, implemented here
as a Next.js/TypeScript modular monolith with Postgres and Vercel Workflow.
Inspect this repository and its actual completed capabilities. No other source
repository or conversation is required.

Target a new public GitHub repository and a separate Vercel project. Ask for
missing owner/repository/project identifiers, public-source license, and publishing
authorization before external changes. Prepare local configuration while blocked.
Publish only redistributable code/assets and synthetic fixtures. Keep credentials
and workspace data private; public source is not anonymous model/API access.

Configure independent preview/production data and explicit production access.
Before paid traffic, confirm a cumulative $100 total application envelope and
its included charges; do not silently convert it into a monthly allowance.
Account for text, voice, workflow/hosting and database. OIDC project caps and
API-key caps differ; use headroom for in-flight/delayed billing. No automatic
top-ups or changes to unrelated shared-team limits.

Run the integrated preview journey with real configured services within the
authorized allowance: exploration, voice, editing/zoom, distant recombination,
partial failure and reconnect. Report live capabilities and remaining gaps
separately; do not present a fixture-backed path as deployed live behavior.

Deliver actual repository/deployment URLs when created, operating instructions,
cost-control limits, and blockers. Update docs/HANDOFF.md. Do not claim publication
or product completion when required access or core behavior remains unavailable.
```

## Prompt 19: add alternate views of the same idea space

```text
Optional extension for Minerva, a private spatial idea studio with Searchlight
and voice. Work only in this repository's Next.js/TypeScript modular monolith.
Inspect canonical ideas, lineage, revisions and view state; if the integrated
core is incomplete, report that prerequisite rather than expanding the scope.

Add evolution and constellation views alongside lineage. Evolution organizes
recorded development over time. Constellation presents provisional relationships
or groupings under a stated analysis. All views reference the same idea IDs,
revisions, decisions and runs; they must not become separate content stores.

Store arrangement/viewpoints independently per view. Switching views preserves
content and useful selection without replaying operations. Layout and clustering
do not trigger generation. Distances and regions are not quality/novelty scores.
Keep unknown data explicit rather than inventing placement claims.

Maintain title-first paper-and-ink styling, direct inspection, keyboard/touch
navigation and accessible alternatives to visual positioning. Incoming results
must not erase deliberate positions or force camera movement. Voice attention
resolves by stable object ID even when its presentation changes.

Exercise switching views during exploration, saved-layout recovery, missing
analysis and explicit viewpoint navigation. Run relevant checks and update
docs/HANDOFF.md with implemented behavior, files and blockers. Do not provision
services, incur unauthorized spend, or deploy.
```

## Prompt 20: add a small catalog of creative instruments

```text
Optional extension for Minerva, a private canvas for exploring and recombining
ideas with Searchlight and voice. Work in this repository's Next.js/TypeScript
modular monolith; inspect context, operations, proposals and review before editing.
Report missing core prerequisites. Do not introduce a plugin marketplace.

Add a small named instrument catalog using the existing operation pipeline:
Constraint Deck introduces an explicit medium/scale/resource restriction;
Assumption Fork proposes alternatives that reverse a named assumption;
Refinery develops a human-selected direction while preserving chosen constraints.
Offer generation-independent comparison of artifacts as a separate capability.

Define each instrument's input/output schema, appropriate use, bounded behavior
and prompt version. State introduced constraints as experimental choices, not new
permanent user requirements. Distinguish the original goal from inherited choices.
Show the mechanism requested and what the actual output changed.

Use explicit source revisions and contribution records. Preserve uncertainty,
failures and human choice. More instrument labels do not prove greater creative
diversity; comparison must not silently choose a winner or collapse alternatives.
Do not execute every instrument automatically.

Demonstrate one end-to-end use of each supported instrument with fixtures, then
bounded live calls only if authorized. Run focused checks and update
docs/HANDOFF.md with exact capabilities and limitations. Do not deploy, buy
services, or add unrelated feature families.
```

## Prompt 21: add goal-directed Agent Drive

```text
Optional extension for Minerva, a private spatial idea studio. Searchlight
explores alternatives; Agent Drive should instead pursue a user's explicit
bounded goal using the same workspace operations. Work only in this repository's
Next.js/TypeScript modular monolith with Postgres and durable workflows. Inspect
run, context, archive and command contracts; report missing prerequisites.

Let the person state a goal, permitted operation scope, stopping condition and
attempt/spend allowance. The goal-directed policy can inspect, develop, compare
and propose recombinations. Keep this policy separate from Searchlight's space
coverage policy, while sharing generation, receipts and recovery machinery.

Record why each action serves the goal and what observable result occurred.
Distinguish model-estimated progress from a condition that is actually satisfied.
Stop on completion, user stop, exhausted allowance or bounded stagnation; preserve
partial work and a specific reason. Do not invent success criteria after the run.

Preserve source revisions, user constraints and human-kept content. Agent-created
material remains visibly exploratory; destructive or out-of-scope actions are not
authorized by a broad goal. Canvas and voice remain usable during execution.

Exercise an achievable synthetic goal, an impossible goal, repeated attempts,
source edits and interruption. Use fixtures unless live spend is authorized.
Run focused checks and update docs/HANDOFF.md with implemented scope and
unresolved limitations. Do not create a second agent engine or deploy.
```

## Prompt 22: turn selected directions into inspectable outputs

```text
Build this optional extension for Minerva in this repository. Minerva is a private
spatial idea studio: a Next.js/TypeScript modular monolith with Postgres revisions
and durable runs.
Inspect idea selection, context manifests, generation and provenance. Report
missing core prerequisites. Build bounded output capabilities, not autonomous
deployment of arbitrary generated applications.

Implement a coding-session handoff and a self-contained browser prototype from
a selected idea revision. The handoff states the goal, source contributions,
constraints, proposed behavior, uncertainties and observable acceptance cases.
The prototype is a separate artifact linked to that revision, not code inserted
into Minerva's own runtime.

Render generated HTML in an isolated sandbox with no app credentials, same-origin
authority, or unapproved network access. Do not execute generated server code.
Preserve the exact artifact and generation receipt; let users inspect/download it.
Validate the output format and distinguish static checks from demonstrated
functionality or proven feasibility.

Include versioned exports of the selected result and its lineage. A later edit
creates a new result revision rather than overwriting the artifact used elsewhere.
Do not add a generic execution platform or host generated sites.

Exercise valid, malformed and disallowed artifacts plus source edits after
generation. Use fixtures unless live calls are authorized. Run focused checks;
record actual capabilities, isolation limits and blockers in docs/HANDOFF.md.
Do not publish or spend on external services without explicit authorization.
```

## Prompt 23: expose the same capabilities through REST and MCP

```text
Optional extension for Minerva, a private spatial idea studio with Searchlight,
voice, shared commands and durable provenance. Work only in this repository's
Next.js/TypeScript modular monolith. Inspect its application operations and
ownership model; report missing prerequisites rather than duplicating logic.

Expose a focused REST and MCP surface for listing/opening workspaces, reading
selected ideas/lineage/run status, and requesting supported scoped operations.
Use maintained protocol libraries and official documentation. Routes and tools
must call the same application functions as UI and voice; no alternative
persistence or unconstrained model/tool execution path.

Scope credentials and active-workspace identity to the caller. Read access must
not imply mutation authority. Use stable command IDs, expected target revisions,
bounded inputs and explicit admitted/applied/conflicted/failed responses.
Paid tool calls share the same cost admission as browser-triggered calls.

Document a progressive read sequence so clients can inspect summaries and fetch
relevant details without uploading full workspace history by default. Provide
schemas and public-safe examples. Preserve source, command and proposal IDs
across all transports.

Exercise the same operation through UI/application and API/tool adapters, including
duplicate delivery, denied scope, stale revisions and exhausted allowance.
Run relevant checks; update docs/HANDOFF.md with supported operations and limits.
Do not publish endpoints, issue real credentials, or deploy without authorization.
```
