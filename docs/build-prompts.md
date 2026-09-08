# Minerva: milestone-based Astra build and Fable review

This repository's standard edition is authoritative. Exported HTML and Downloads
copies are reading aids, not independently edited sources. Use this edition for
the whole build. [CONTRACT.md](./product/CONTRACT.md) indexes the contracts:
[SPEC.md](./product/SPEC.md) owns C01-C16 requirements, while
[CAPABILITIES.md](./product/CAPABILITIES.md) owns implementation evidence.
Keep those responsibilities distinct rather than maintaining competing specs.

**Corrected contract, September 8, 2026:** build the complete spatial creative
studio described below, with better architecture and implementation. This is not
a smaller MVP, a generic canvas, or a reskin. Engineering may be staged; the
required product capabilities may not be silently staged out of delivery.

**New implementation:** author the custom application code, styling, runtime
prompts, tests and custom assets from scratch. Do not copy, port, translate,
wrap or cherry-pick an earlier Minerva application. The owner's content-free
template (below) is the one authorized starting point. Standard frameworks,
SDKs, canvas libraries, fonts and generic scaffolding are allowed with
appropriate licenses. Continue and reuse work
created within this new build across sessions; do not rewrite it each time.

**Equivalent product, not an exact replica:** deliver the specified functionality,
capabilities, interactiveness, responsiveness and living-atlas theme. Layouts,
components, artwork, schemas, endpoints and interaction implementations may
differ. Improve them where useful, but do not use that freedom to remove a
workflow, make relationships unreadable, add interaction friction or replace
contextual intelligence with generic controls. No old source or screenshots
are required to execute these prompts.

**Repository and starting point (owner decision, September 8):** the new
`minerva` repository is a **public** GitHub repository created from the
owner's template, https://github.com/brandyn-s/minerva-template. The hosted
application stays private behind platform authentication; public source never
grants access to workspaces, credentials or paid operations, so the repository
must never contain secrets, user workspace data or unlicensed third-party
assets, and its MIT license carries forward. The template's pinned Next.js
shell, CI workflow, `.codex/config.toml`, `AGENTS.md` working agreement,
original owl mark and DESIGN identity are the authorized scaffold and count as
generic starting material, not as the prohibited reuse of an earlier Minerva
application. Earlier template revisions used a superseded 23-prompt sequence,
first-release scope statements and a "no phase gates" rule. Prompt 1 inspects
the generated repository's active contract and reconciles outdated instructions
only where needed. Clearly superseded historical decisions can remain. Do not
infer that a template update is published from the existence of a proposed
patch or branch name; inspect the actual generated files.

**Delivery model:** six milestones, 34 Astra work packages, not 34 mandatory
sessions. The full C01-C16 contract remains required. Demonstrations are
checkpoints of that complete product, not reduced MVP definitions.

**Central feedback loop:** explore -> observe -> challenge -> intervene ->
inspect the result. Demonstrate a person discussing a space while manipulating
it: identify two potentially recurring mechanisms, inspect whether that
interpretation is supported, propose a concrete change, combine a useful
contribution with a distant branch, and inspect both parents and the changed
interaction before keeping the result. Show an inconclusive or unsuccessful
intervention honestly too. Focus the demonstration, not the product scope.

Use one newly authored representative brief and graph throughout the milestones,
plus counterexamples and dense-scene cases. Prepared records are labeled;
an early fixture is not claimed as live AI. Spatial and voice interaction must
remove real friction: tracing inheritance and speaking while the hands manipulate
other work. A separate chat box beside decorative cards does not meet this goal.

| Milestone | Astra work packages | Demonstrated outcome |
|---|---|---|
| M1: Experience proof | 1-3 | An original, populated, interactive atlas that makes relationships and contextual actions understandable before extensive backend work. |
| M2: Working spine | 4-12 | One real end-to-end path through persistence, visible graph, a creative operation, assessment, acceptance and concurrent spoken collaboration. |
| M3: Creative workspace | 13-20 | Rich inheritance, reusable branch development, specific contextual suggestions, direct comparison/Weave and three real views over one workspace. |
| M4: Exploration intelligence | 21-25 | Wander explores and responds to recurrence; map/readings are challengeable; Agent Drive pursues explicit goals without a separate engine. |
| M5: Remaining product capabilities | 26-30 | Complete instrument coverage, usable output artifacts and real REST/MCP access, without duplicating engines or creating alternative state stores. |
| M6: Integrated release | 31-34 | A complete, independently reviewed Minerva with durable infrastructure and accepted experience, deployed privately with honest operating limits. |

**Scheduling:** follow the milestone dependencies and each package's stated
prerequisites. Numbering gives a recommended route, not permission to continue
past a broken prerequisite. Closely related packages may share a session when
they form one coherent outcome; a difficult package may span several fresh
sessions. Do not split concurrent writers over the same code. Prioritize the
next demonstrable user journey over completing disconnected layers.

**Roles:** GPT-6 Astra in Codex owns implementation, commands, evidence,
corrections and deployment. Fable 5.1 in Claude is the independent, read-only
reviewer and outside adviser. Select those models in their respective clients;
no special CLI flags or shared conversation are assumed. Fable runs in Claude
Code opened in a read-only checkout of the review revision, or in Claude Cowork
with that checkout folder connected; in either client it edits nothing under
the application tree and writes review notes only where the packet says. Fable does not silently
edit the app, authorize scope cuts, raise spending limits or approve deployment.
Read-only refers to application code: existing checks and isolated synthetic
review journeys are allowed. Live paid calls require an explicit review allowance;
otherwise inspect available evidence and mark live verification incomplete.

**Milestone loop:** Astra builds the demonstrable outcome; Fable independently
exercises and critiques it; Astra accepts, rejects or clarifies each material
finding with evidence and fixes confirmed problems; Fable rechecks affected
cases against the new revision. Then record the milestone outcome. Fable
agreement is not proof, and does not replace user experience acceptance.
Do not automatically turn every suggestion into a requirement.

Use a fresh Claude review session at each milestone so Fable is not anchored
by the implementation transcript. Rechecks can stay in that review session if
the scope remains bounded. For cross-cutting decisions or a concrete impasse,
use the outside-consultation prompt below rather than restarting the whole plan.

**Review packet:** provide the new repository path and exact revision/diff,
the product/design contracts, milestone and affected capability IDs, startup
instructions, synthetic fixture/journey and available runtime access. Let Fable
form an initial view from the contract and app before reading Astra's success
narrative. Use the same stable revision or a read-only checkout; do not edit
under the reviewer. Never include secrets or private user workspace data.
M5 has one exception to the initial source-first packet: Fable first attempts
the external-client journey using only the published interface documentation,
task, endpoint and authorized access. Give implementation details afterward
for diagnosis, not as a walkthrough that conceals a discovery/usability failure.

**Continuity:** keep one capability matrix in docs/product/CAPABILITIES.md and
a short docs/HANDOFF.md. The template's `AGENTS.md` remains the working
agreement once Prompt 1 has reconciled it with the milestone contract. Record current milestone, package state, actual
evidence, Fable findings and Astra's disposition, pending user acceptance, and
the next unfinished outcome. A fresh session reads these and confirms relevant
prerequisite behavior; a previous "done" statement is not evidence.
Do not create separate status diaries for each model.

Each fenced block is standalone for its named model in the same new project.
It depends only on the stated product contracts, the authorized template
scaffold and code created in that project, not another application's source,
old screenshots or chat history.

**Effort (owner decision):** use medium reasoning effort for both Astra and
Fable. Raise it only for a demonstrated difficulty inside one package or
review, then return to medium. Do not carry a raised setting into the next
session by habit.

**Package completion:** every Astra package ends with an explicit "Package
complete when" condition. Continue working until that condition is met or a
named blocker prevents it; do not stop after the first passing check, and do
not report the condition met without the evidence it names. Readiness of a
package is separate from milestone review and from user acceptance.

**Documentation prose (Astra):** write `CONTRACT.md`, `CAPABILITIES.md`,
`DESIGN.md`, `HANDOFF.md`, architecture decisions, commit messages and review
packets in plain prose paragraphs. Use a table only for the capability matrix
and comparable tabular data, and a list only for parallel items. Avoid
recurring stock phrases; these documents are read by every later session and
by the reviewer, so clarity matters more than formatting.

**Review and release gates:** pause fidelity-sensitive work when the experience
proof needs correction. If review, user acceptance, credentials or infrastructure
are unavailable, mark that gate pending/blocked. Only explicitly authorized
nondependent work may continue; do not manufacture an approval or waive the gap.
M6 has a pre-deployment release-candidate review and a post-deployment outcome
confirmation. Required functionality and overall user experience acceptance
cannot be deferred by calling a partial build complete. Empirical creativity
claims require their own evidence and may honestly remain unresolved.

## Fable consultation: an independent view at a decision or impasse

```text
You are Fable 5.1 in Claude, acting as an independent external adviser for a new
Minerva implementation. GPT-6 Astra in Codex owns implementation. This is a
read-only consultation, not permission to rewrite code or restart the project.

Use the new repository path, current revision, product/design contracts and
specific question supplied for this consultation. The product is a complete
spatial creative studio with visible relationships, three views, contextual
operations, comparison/Weave, Wander/Agent Drive, concurrent voice, outputs and
REST/MCP. Custom implementation is new; no old application or template is needed.

Complete the consultation in one pass without pausing for permission; the
read-only steps here are already authorized and the user is not watching.
Examine the actual relevant code or running behavior before accepting the
builder's explanation. Challenge the concrete assumption, architecture choice,
interaction or failure diagnosis. Distinguish a contract requirement from an
implementation preference. Offer alternatives only where a real choice exists.
Preserve the modular-monolith direction and full capability scope.

Return the recommended next bounded action, supporting evidence, important
tradeoffs, what remains unknown and what observation would change your view.
If useful, give a small falsifying experiment rather than another framework.
Do not treat model agreement, aesthetics alone or a passing check as proof.
Do not change files, deploy, spend, disclose credentials or consult prior app code.
Astra will adjudicate your advice against the contract and working evidence.
```

## Milestone 1: Experience proof

**Entry:** A new project directory and the full product goal; no database or live provider is needed.

**Working demonstration:** Pan and zoom; trace both parents of a recombination; move a card with its edges attached; inspect inherited material; select a pair; open a local contextual chooser on desktop and touch.

**Exit and review:** The local fixture demonstrates the proposed experience, Fable reviews it, and the user accepts the representative visual/interaction direction. Persistence and AI remain explicitly unimplemented, not simulated as real.

**Still open:** All production persistence, generation, voice and wider product capabilities remain open. Fixture interactions do not complete their capability rows.

### Prompt 1: establish the complete standalone product contract

```text
You are GPT-6 Astra in Codex, implementing a work package in M1: Experience proof.
Required prerequisites: The target new-project directory and product goal; this package creates the contract.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Build a new Minerva: a private, single-owner, online-first spatial human-AI
creative studio. It must support exploring an idea space, seeing relationships
and inheritance, developing and recombining branches, interpreting patterns,
and talking to a collaborator while working. Better architecture must preserve
this product, not reduce it to a canvas, a few generation buttons and a chat panel.

Work in the new project directory supplied for this session. The target is the
public GitHub repository named minerva, created from the owner's template
(https://github.com/brandyn-s/minerva-template): a pinned Next.js shell, CI,
MIT license, .codex/config.toml, AGENTS.md, an original owl mark and
docs/product/DESIGN.md. Keep that scaffold. Do not clone, copy, port, translate
or wrap any earlier Minerva application, its styles, tests, prompts or assets.
Standard frameworks, SDKs, canvas libraries, fonts and generic scaffolding may
be used with appropriate licenses. Work created in this new project carries
forward between sessions. Build from the specification below, not an unseen
reference. It is not a one-for-one replica: implementation and composition may
improve while preserving the complete capabilities, direct interaction and
atlas theme.

First inspect the active contract in docs/build-prompts.md,
docs/product/INTENT.md, docs/product/SPEC.md, docs/product/DECISIONS.md,
README.md and AGENTS.md. If active instructions still prescribe a 23-prompt
sequence, make views/instruments/outputs/Agent Drive/REST/MCP optional, or
forbid milestone gates, reconcile only those outdated instructions with this
contract. Record an actual supersession in docs/product/DECISIONS.md and retain
the working agreement's bias-to-action and authorization boundaries.
Historical decisions such as D-104/D-111 may remain when clearly superseded;
their mere presence is not a reason to rewrite history.
If the active contract is already correct, leave it intact. Record the template
revision when known, otherwise mark it unknown; inspect the actual files rather
than infer correctness from a branch name or invent a revision. Do not create
a new supersession or timestamp-only change just to complete this package.
Follow docs/setup.md to set the repository identity. Never commit secrets,
user workspace data or unlicensed assets to this public repo.

Define a representative complete loop in the product contract: a person explores
alternatives while manipulating the canvas, says that two ideas may share a
mechanism, examines evidence, requests a specific intervention, combines a useful
contribution with a distant branch, and inspects the resulting change and both
parents before deciding what to keep. Preserve uncertainty and a failed-change
case. This is the demonstration spine, not a reduction of product scope.

Verify docs/product/CONTRACT.md indexes the authoritative product documents
without duplicating their prose. Reconcile docs/product/SPEC.md with the
following required capability descriptions only if it is incomplete or outdated.
Initialize or update docs/product/CAPABILITIES.md as an evidence matrix without
erasing existing work. These are the REQUIRED IDs:
C01 Workspaces: create, open, rename, duplicate, deliberately delete, recover
    saved work, and export content, history, relationships and run evidence.
C02 Spatial canvas: title-first cards; pan/zoom, find/focus/fit, selection,
    multi-selection, edit, resize, move, explicit arrange/reset, undo/redo of
    deliberate layout changes, and saved viewpoints without automatic takeover.
C03 Relationship graph: visible typed source/result connections, multi-parent
    lineage, ancestry/descendants, semantic relationships and contributions.
    Independent roots share brief context, not fabricated parentage.
C04 History and genome: exact source revisions, functional parts/traits,
    inherited/changed/new material, reasons and enabled moves, original
    artifacts, model input/provenance, reviews, decisions and revisiting.
C05 Branch development: continue any branch, vary/refine one axis, preserve or
    avoid chosen traits, preview before acceptance, retain rejected attempts,
    replay a versioned recipe and save a reusable synthesis.
C06 Comparison and Weave: a two-to-four-card comparison set, readable side-by-side
    artifacts and differences, independently callable comparison, selectable
    contributions and multi-parent recombination with emergent interaction.
C07 Views: Lineage, Evolution and Constellation are real views over the same
    IDs and revisions, with appropriate relationships, selection and saved layout.
C08 Contextual moves: card-specific AI suggestions for divergence, combination,
    recombination, split, tension and mechanism escape; direct choice, affected
    sources previewed, no mandatory long prompt or generic menu-only substitute.
C09 Creative instruments: independent perspective generation, Constraint Deck,
    Assumption Fork, Distance Panel and Refinery with distinct useful semantics.
C10 Wander: bounded durable exploration, independent roots, multiple paths,
    archive-aware development, distant recombination, recurrence detection,
    targeted intervention, partial results, pause/resume/stop and recovery.
C11 Space interpretation: explorable map/groups, representatives, unusual
    candidates, recurrence, provisional basins/attractors, evidenced escape
    attempts and What this space suggests, with source-linked challenges.
C12 Agent Drive: bounded explicit goal pursuit, distinct from Wander's space
    exploration policy, with observable stop conditions and shared operations.
C13 Collaboration: typed and bidirectional voice discussion, idea/link
    suggestions and acknowledged scoped actions across the live workspace;
    speech interruption/reconnect without blocking canvas or exploration.
C14 Outputs: branch-linked structured browser prototype, runnable isolated
    HTML prototype, controlled paired experiment, coding-session handoff and
    reusable synthesis with evidence and provenance.
C15 External access: documented REST and MCP creative/workspace capabilities,
    using the same application operations, identities and cost admission.
C16 Experience: a living atlas, cartographic paper/ink, concise expressive
    titles, legible relationships, compact contextual controls, direct touch/
    keyboard access and concurrent interaction without a dashboard of buttons.

These are release requirements, not a backlog of optional extensions. Keep
multi-user editing, billing, marketplace plugins, global scale and a large
research harness outside this contract unless explicitly requested.
Do not reproduce opaque lockouts, broken controls or misleading creativity claims.

Use a Next.js/React/TypeScript modular monolith, server-owned Postgres and durable
Vercel workflows. The target is the public GitHub repository created from the
owner's template and a separate Vercel project with a requested cumulative $100
application envelope. The hosted application is private; the source is public. GPT-6 Astra is
the coding agent; runtime model profiles are an independent choice.
There must be no second application owner-password screen.

Record six delivery milestones in the product contract:
M1 Experience proof: original populated interactive fixture, no live services.
M2 Working spine: persistence, visible graph, one real creative operation,
   assessment/acceptance and bidirectional voice during canvas work.
M3 Creative workspace: inheritance/recipes, comparison, contextual planning,
   Weave and three views with voice continuity.
M4 Exploration intelligence: Wander, recurrence, map/readings and Agent Drive.
M5 Remaining capabilities: complete instruments, outputs, REST and MCP.
M6 Integrated release: full journeys, independent release review, infrastructure
   readiness, user experience acceptance and verified authorized deployment.
These are milestones, not six reduced products. Astra implements; Fable 5.1
in Claude independently reviews each milestone and provides outside advice.
Keep current milestone, package state, findings/dispositions and open capability
scope in the existing matrix and handoff, not separate model status diaries.

Write observable acceptance journeys for every capability and record unknowns.
Distinguish required outcomes from flexible implementation choices. Do not
invent a scope reduction. This session produces the complete product contract
and a short handoff, not an application-completion claim.
Package complete when: docs/product/CONTRACT.md indexes the authoritative
documents, SPEC.md contains all sixteen required capabilities and observable
acceptance journeys, CAPABILITIES.md records their honest implementation state,
and the six milestones and unknowns are recorded; the active inherited contract is verified
current or reconciled where outdated, with any actual supersession recorded
and clearly superseded history retained; repository identity is set; and
docs/HANDOFF.md names Prompt 2 as the next unfinished outcome.
```

### Prompt 2: create the runnable architecture without shrinking the product

```text
You are GPT-6 Astra in Codex, implementing a work package in M1: Experience proof.
Required prerequisites: The full product contract; no persistence or model service is required yet.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Create Minerva's runnable foundation in the new project directory. It is a full
spatial creative studio with relationship-rich cards, three views, contextual
creative operations, Wander, Agent Drive, voice, outputs and REST/MCP access.
Read this repository's product contract; if absent, report that prerequisite.
Author custom implementation within this new project. The template already
provides a pinned Next.js shell, CI and exact Node/npm pins; extend it rather
than re-scaffolding, and add dependencies only when a slice needs them. Use
maintained, appropriately licensed dependencies; never import an earlier
Minerva application's code.

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
explicit unavailable states. Establish development/preview/production configuration,
database migrations, connection pooling, durable dispatch/reconciliation and
correlated run/request diagnostics as infrastructure responsibilities. At this
experience-proof milestone, define their ownership and interfaces; build the
working persistence and execution paths in the working-spine milestone rather
than delaying the interactive proof for unused infrastructure. Document
operational ownership and backup/restore paths; do not substitute an expiring
demo database for durable release infrastructure. Do not fill the UI with buttons
for unimplemented capabilities or label a scaffold as the product. Do not
manufacture empty modules.

Write concise architecture decisions explaining ownership and extension points.
Use libraries based on the complete interaction requirements, not the smallest
possible demo. A purpose-fit, license-compatible canvas renderer is allowed;
a hand-written minimal renderer is not an architectural achievement.

Add short repository instructions: preserve every required capability, implement
each slice end to end, do not copy earlier applications, keep source revisions
and cost admission intact, and never equate passing checks with product parity.
Run the foundation, exercise its actual routes, and update the capability matrix
and handoff. Do not provision, spend, publish or claim product completion.
Package complete when: the shell runs locally with pinned dependencies and
lint, typecheck, test and build pass; module ownership, extension points and
infrastructure interfaces are recorded in concise architecture decisions;
AGENTS.md reflects the milestone contract; the startup path is documented; and
the capability matrix shows every row at not started or partial with honest
evidence and no unimplemented buttons in the UI.
```

### Prompt 3: establish the original living-atlas design system

```text
You are GPT-6 Astra in Codex, implementing a work package in M1: Experience proof.
Required prerequisites: The product contract and runnable UI foundation; use local synthetic data only.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Create Minerva's original visual system and composed application shell in this
new repository. It is a spatial creative instrument, not an admin dashboard.
Read the product contract; use newly authored custom code and art.
Do not copy CSS, images, SVG paths, screenshots, icons or components
from a pre-existing application. Standard fonts/libraries need appropriate licenses.

Specify and implement paper #e9dfc7, card #f1e9d6, ink #273a35, deep teal #213f3e,
teal #28686a, amber #b18a58, coral #a15442 and violet #755584 as shared tokens.
Use an expressive editorial serif with compact monospaced instrument labels;
Newsreader and IBM Plex Mono are suitable licensed choices, not mandatory
copied files. Author restrained contour/terrain artwork and an original owl mark.
Terrain is decorative, never a map of inferred idea quality.

Compose one compact top header with identity, real view navigation, brief/
workspace context and exploration/conversation access. The atlas occupies the
field beneath it. Put navigation instruments at the field's edges, zoom near
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

Build an original synthetic visual fixture with branches, a multi-parent child,
an unkept draft and a semantic link. Label fixture-only behavior honestly.
Make the fixture interactive: pan/zoom, move a card with attached edges, inspect
its parents, select a pair and open a contextual chooser. These are local
demonstration interactions, not fake persisted or AI-generated outcomes. Use an
explicit fixture data boundary that the working spine can replace with the
new server implementation; retain the newly authored presentation components.
No database or live provider is a prerequisite for this experience proof.
Render desktop and narrow layouts and review the images for hierarchy and
clutter before proceeding. Demonstrate what would become materially harder in
linear chat: trace multiple parents and compare distant contributions while
retaining spatial context. Do not substitute texture or animation for this.
Write DESIGN.md as the enforceable visual contract,
not generic adjectives. Update C16 evidence; this shell is not a finished app.
Milestone closeout: demonstrate this complete M1 journey:
Pan and zoom; trace both parents of a recombination; move a card with its edges attached; inspect inherited material; select a pair; open a local contextual chooser on desktop and touch.
Prepare the exact revision and evidence packet for Fable 5.1 in Claude using
this milestone's independent review prompt. Record and resolve material findings;
Fable's opinion does not replace user acceptance or observed behavior.
Still open at this milestone: All production persistence, generation, voice and wider product capabilities remain open. Fixture interactions do not complete their capability rows.
Package complete when: the interactive fixture renders the populated atlas at
desktop and narrow widths; the full M1 journey works locally on mouse, touch
and keyboard; DESIGN.md is written as an enforceable contract; C16 evidence is
recorded with the fixture boundary labeled; and the Fable M1 review packet
(revision, contracts, startup and fixture instructions) is prepared.
```

### Fable review M1: Experience proof

```text
You are Fable 5.1 in Claude, independently reviewing M1: Experience proof
for a newly authored Minerva application. GPT-6 Astra in Codex implements.
Review only: do not change application files, commit or deploy. Run existing
checks and isolated synthetic journeys, never mutate working user data.
Live paid calls require an explicit review allowance; without it, inspect
available evidence and mark the unexercised live behavior as incomplete.

Use the supplied new-project path, exact candidate revision/diff, local product
and design contracts, capability matrix and startup/fixture instructions.
No earlier application source, template, external screenshot or conversation is
required. The full product is a relationship-rich spatial creative studio with
three views, contextual operations, comparison/Weave, Wander/Agent Drive,
concurrent voice, outputs and REST/MCP. This milestone is not the entire release.

Required demonstration:
Pan and zoom; trace both parents of a recombination; move a card with its edges attached; inspect inherited material; select a pair; open a local contextual chooser on desktop and touch.

Review focus:
Inspect the original populated fixture, not an empty page. Trace both parents, use the contextual chooser and comparison selection, and operate with keyboard/touch. Check hierarchy, atlas character, legibility and control clutter. A static screenshot or attractive background is insufficient. Report experience concerns for user judgment; do not claim the user's acceptance.
Identify a concrete task that is materially easier because of the spatial
interaction. If the same journey is equally clear as a linear chat transcript,
report that the demonstration has not established the modality's value.
Distinguish a weak example from missing behavior; do not automatically remove
capabilities or recommend decorative motion to compensate.

Still-open scope at this boundary:
All production persistence, generation, voice and wider product capabilities remain open. Fixture interactions do not complete their capability rows.

Complete the whole review in one pass; the user is not watching while you work
and has already authorized every read-only step in this prompt, so do not pause
to ask permission for inspection, running existing checks or exercising the
fixture. Ask a question only when a required input from the packet is missing,
and otherwise report. Work in Claude Code opened in a read-only checkout of the
review revision, or in Claude Cowork with that checkout connected.

Independently inspect relevant code and exercise the app where possible.
Do not accept the builder's narrative as evidence. If tools, credentials or
runtime access are missing, report what was actually reviewed and what was not;
source-only inspection cannot approve visual or live-interaction claims.
Use synthetic data and existing project commands. Preserve private access.

Return a milestone verdict: READY FOR NEXT MILESTONE, CHANGES REQUIRED, or
BLOCKED; for M6 distinguish READY TO DEPLOY from DEPLOYED OUTCOME CONFIRMED.
For each material finding give capability ID, expected versus observed behavior,
reproduction/evidence, consequence, confidence and the smallest corrective
outcome. Separate observed failures, hypotheses and optional suggestions.
Include open scope and pending user acceptance; do not invent a likeness or
creativity score. User acceptance is not yours to grant.

Astra must record a disposition for each material finding and fix confirmed
defects. On recheck, inspect the new revision and affected cases, not just a
claim that the problem was fixed. This review never authorizes reduced scope.
```

## Milestone 2: Working spine

**Entry:** The complete product contract, runnable foundation and reviewed experience proof. Authorized credentials/spend are required only for the real provider demonstration.

**Working demonstration:** Create a workspace and idea; generate alternatives; trace sources; inspect and keep a result; reload; discuss a card by voice while moving another and receiving durable operation results; interrupt speech.

**Exit and review:** State and lineage persist, a bounded real generation/review path and bidirectional voice work, the canvas stays usable, and Fable verifies this exact spine. Missing live credentials leave the live gate blocked, not replaced by fixture claims.

**Still open:** Rich genome/recipe workflows, full comparison/Weave, alternate views, contextual planning, Wander/Agent Drive, instrument breadth, outputs and external-client coverage remain explicitly open.

**Review cadence:** M2 is the heaviest milestone, so it has two review points.
After package 10, run the Fable M2 review below as an **interim review** of the
spine without collaboration: persistence, visible graph, frozen context, durable
execution, one live creative operation and assessment/acceptance. Resolve
material findings before starting packages 11 and 12. After package 12, run
the same review as the **final M2 review** with the full demonstration,
including voice during canvas work. Expect the final review to take at least
one recheck round; that is normal for this milestone, not a scope problem.

### Prompt 4: implement workspaces, persistence and frictionless private access

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: The product contract, runnable foundation and original experience proof.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Implement Minerva's workspace lifecycle in this new Next.js/TypeScript modular
monolith. Postgres is authoritative; the browser owns transient interaction.
Read the local product contract. Newly authored custom implementation only;
do not import any earlier application's data, schema implementation or auth code.

Deliver create/open/list/rename/duplicate and deliberate deletion with clear
confirmation, plus saved brief and explicit constraints. Duplicate creates
independent identities and preserves meaningful internal references; deletion
must account for active runs and referenced history rather than orphaning it.
Keep old-system import/migration out of scope.

Use immutable content/brief revisions, independent layout versions, explicit
migrations and named application operations. Create an export contract for
content, revision history, relationships, proposals, decisions, runs and
provenance; extend it with later product records. An export is not an import.
Never save the whole workspace for a card drag.

Use hosting-platform authentication without a second owner-password screen.
Verify the actual protection scope for every deployed address; a public source
repository, a Vercel project setting or a VERCEL environment variable does not
authenticate a request. Keep local
access explicit and loopback-only, never enabled on a hosted deployment.
Keep server credentials private and enforce same-origin JSON mutations.
Do not silently enable an unprotected production/custom domain.

Exercise lifecycle operations, reload, duplication reference integrity,
stale writes and unavailable configuration against an isolated local database.
Report missing hosted access instead of adding a surprise password or fake data.
Update C01 evidence and the handoff; no unauthorized external provisioning.
Package complete when: create, open, list, rename, duplicate and delete, brief
and constraint revisions, the export contract and platform-authenticated access
are exercised against an isolated local database; the listed edge cases pass;
and C01 evidence and the handoff are updated.
```

### Prompt 5: build the spatial canvas and deliberate view controls

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: Working workspace/revision operations and the original fixture presentation.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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

Exercise dragging while results arrive, resize/reload, find/focus, fit, arrange
and layout undo/redo. Render a populated scene, not only an empty canvas.
Update C02 and C16 evidence and the handoff. Missing behavior remains partial;
do not publish this slice as the complete application.
Package complete when: the listed canvas interactions work on a populated
scene with mouse, touch and keyboard; positions, sizes and camera survive
reload; layout undo/redo has a documented scope; no navigation or view switch
starts a model call; and C02/C16 evidence and the handoff are updated.
```

### Prompt 6: make the relationship graph visible and understandable

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: Canonical revision identity and working canvas interaction; rerun fixture proposal transitions against real decisions before M2 closes.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
aggregate explicitly; and C03 evidence records observed behavior and any gap.
```

### Prompt 7: compile exact operation context

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: Exact brief/source revisions and relationship identity; rich part-selection UI follows in M3.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Implement Minerva's shared durable run machinery in this new codebase.
Keep the Next.js/TypeScript modular monolith, Postgres authority and Vercel
Workflow. Inspect frozen context and application operations; report missing
prerequisites rather than building a competing engine.

Persist admission and dispatch intent, start workflows, checkpoint individual
steps, expose progress and partial results, and support pause/resume/stop and
reconnection. Reconcile the gap between database commit and workflow startup.
The browser does not own run lifetime. Durable replay does not guarantee
exactly-once external provider execution.

Commands have stable IDs, payload identity, targets and expected revisions.
Duplicate delivery returns the existing receipt; changed payload reuse conflicts.
Distinguish admitted/running/awaiting-input/completed/failed/stopped outcomes.
Separate operation, Wander and goal-directed policy from shared execution.

Reserve bounded attempts and spend before paid work. Use one cumulative
application envelope, requested at $100 inclusive of text, voice, hosting/workflow
and database; configure component allocations and headroom, not $100 per service.
Retain failed/uncertain attempts. No automatic top-up or silent provider switch.
Vendor metering and app reservations are not an exact hard billing ceiling.

Exercise dispatch failure, duplicate completion, browser close, stopped admission,
partial siblings and exhausted allowance using explicit fixtures. Keep every
canvas view responsive. Update C10/C12 and architecture evidence; do not deploy.
Package complete when: admission, dispatch, checkpointing, progress, pause,
resume, stop, reconnect and reconciliation work against fixtures; command
receipts are idempotent; the shared envelope and component allocations are
configured; the listed failure cases pass with every canvas view responsive;
and C10/C12 and architecture evidence are updated.
```

### Prompt 9: generate live alternatives with capability-aware models

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: Durable run/cost admission and frozen inputs; authorized provider access for live evidence.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Deliver live creative generation in Minerva using newly authored implementation.
Use this repository's operation context, durable runs and spend admission.
The product requires distinct alternatives with lineage, not a chat answer.

Implement a server-side provider adapter with explicit supported model settings,
output schema, timeout/output bounds, prompt version and attempt policy.
GPT-6 Astra is the development agent; runtime model choice is independent.
Consult current official SDK/provider documentation. Never change a model ID
while inheriting unsupported sampling or reasoning settings.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Build Minerva's typed collaborator with newly authored code. It discusses and
develops an evolving creative space, not only recites card text or dispatches
commands. Use the local product contract and shared application operations.

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
open in C13/C15; a read-only chat box cannot satisfy that later gate.
Package complete when: the typed collaborator explains, challenges, suggests
and executes explicitly requested scoped actions through shared operations
with stable intent IDs; attention events behave as specified; the listed
scenarios pass in the working Lineage view during a durable operation; and
C13/C15 evidence records voice for Prompt 12, cross-view/full creative-action
coverage for M3, and repetition during Wander for M4 as pending obligations.
```

### Prompt 12: deliver bidirectional voice that survives concurrent work

```text
You are GPT-6 Astra in Codex, implementing a work package in M2: Working spine.
Required prerequisites: Typed collaboration, shared attention, command identity and cost admission.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Implement Minerva's bidirectional voice collaborator in this new
codebase. Use its typed collaborator, shared commands, attention and cost
admission. Read current official provider/SDK contracts and the product scope.

Provide microphone input and spoken replies, interruption/barge-in, reconnect
and disconnect. Use server-mediated ephemeral credentials and a maintained
provider adapter. Keep connection/model/config identities stable across renders.
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
Milestone closeout: demonstrate this complete M2 journey:
Create a workspace and idea; generate alternatives; trace sources; inspect and keep a result; reload; discuss a card by voice while moving another and receiving durable operation results; interrupt speech.
Prepare the exact revision and evidence packet for Fable 5.1 in Claude using
this milestone's independent review prompt. Record and resolve material findings;
Fable's opinion does not replace user acceptance or observed behavior.
Still open at this milestone: Rich genome/recipe workflows, full comparison/Weave, alternate views, contextual planning, Wander/Agent Drive, instrument breadth, outputs and external-client coverage remain explicitly open.
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
for a newly authored Minerva application. GPT-6 Astra in Codex implements.
The packet states whether this is the interim review after package 10 (spine
without collaboration: persistence, visible graph, frozen context, durable
execution, one live creative operation and assessment/acceptance) or the final
review after package 12 (full demonstration including voice during canvas
work). For the interim review, treat collaboration scope as open, not failed.
Review only: do not change application files, commit or deploy. Run existing
checks and isolated synthetic journeys, never mutate working user data.
Live paid calls require an explicit review allowance; without it, inspect
available evidence and mark the unexercised live behavior as incomplete.

Use the supplied new-project path, exact candidate revision/diff, local product
and design contracts, capability matrix and startup/fixture instructions.
No earlier application source, template, external screenshot or conversation is
required. The full product is a relationship-rich spatial creative studio with
three views, contextual operations, comparison/Weave, Wander/Agent Drive,
concurrent voice, outputs and REST/MCP. This milestone is not the entire release.

Required demonstration:
Create a workspace and idea; generate alternatives; trace sources; inspect and keep a result; reload; discuss a card by voice while moving another and receiving durable operation results; interrupt speech.

Review focus:
Follow one real operation from source revision through admission, provider result, review, visible graph and acceptance/reload. Exercise bidirectional speech, interruption and pending-permission cancellation while the canvas moves. Check server ownership and independent lifecycles. Do not demand not-yet-built Wander or alternate views at this gate; record them as future scope. Do not approve real-path claims from fixtures.

Still-open scope at this boundary:
Rich genome/recipe workflows, full comparison/Weave, alternate views, contextual planning, Wander/Agent Drive, instrument breadth, outputs and external-client coverage remain explicitly open.

Complete the whole review in one pass; the user is not watching while you work
and has already authorized every read-only step in this prompt, so do not pause
to ask permission for inspection, running existing checks or exercising the
fixture. Ask a question only when a required input from the packet is missing,
and otherwise report. Work in Claude Code opened in a read-only checkout of the
review revision, or in Claude Cowork with that checkout connected.

Independently inspect relevant code and exercise the app where possible.
Do not accept the builder's narrative as evidence. If tools, credentials or
runtime access are missing, report what was actually reviewed and what was not;
source-only inspection cannot approve visual or live-interaction claims.
Use synthetic data and existing project commands. Preserve private access.

Return a milestone verdict: READY FOR NEXT MILESTONE, CHANGES REQUIRED, or
BLOCKED; for M6 distinguish READY TO DEPLOY from DEPLOYED OUTCOME CONFIRMED.
For each material finding give capability ID, expected versus observed behavior,
reproduction/evidence, consequence, confidence and the smallest corrective
outcome. Separate observed failures, hypotheses and optional suggestions.
Include open scope and pending user acceptance; do not invent a likeness or
creativity score. User acceptance is not yours to grant.

Astra must record a disposition for each material finding and fix confirmed
defects. On recheck, inspect the new revision and affected cases, not just a
claim that the problem was fixed. This review never authorizes reduced scope.
```

## Milestone 3: Creative workspace

**Entry:** A working persistence/generation/review/voice spine with exact source identity and visible relationships.

**Working demonstration:** Inspect a multi-parent genome; preserve selected parts; compare distant cards; choose a card-specific suggested move; Weave and keep a child; revisit history; switch all three views while speaking and while a durable operation finishes.

**Exit and review:** The complete creative-workspace journey works with existing services, all views use canonical data, Fable verifies the interaction, and the user reviews the richer experience. Constellation initially uses a stated computed method, not canned groupings.

**Still open:** Wander-specific recurrence overlays and advanced space readings belong to M4. Standalone instrument breadth, output artifacts and external clients belong to M5; they are not optional.

### Prompt 13: expose history, inheritance and the idea genome

```text
You are GPT-6 Astra in Codex, implementing a work package in M3: Creative workspace.
Required prerequisites: Persistent revisions, graph relationships, proposal assessments and the working spine.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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

This slice implements the intent, domain operations and fixture-backed UI.
Use the shared live generation/review path when it exists; otherwise label that
part incomplete rather than creating a second engine or fake live output.
The eventual workflow must deliver generated alternatives, not just save forms.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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

Do not prescribe a radial implementation, but preserve its useful behavior:
local to the card, immediate, small, specific, no nested menu path. From a visible
card, opening and choosing a move should need at most two activations, excluding
optional editing. Navigation and opening a chooser must not launch generation.

Exercise suggestions for genuinely different source cards, proposed partner
preview, choosing during planning, stale sources, planner failure and keyboard/
touch use. Confirm every admitted alternative or failure appears in the graph.
Update C08/C16 evidence; do not call a generic menu equivalent to this workflow.
Package complete when: a card-local one-level chooser yields specific AI
suggestions with source previews within two activations on mouse, touch and
keyboard; a choice survives late planning results; stale sources and planner
failure are handled; every admitted result or failure appears in the graph;
and C08/C16 evidence is updated.
```

### Prompt 19: complete distant recombination and contribution selection

```text
You are GPT-6 Astra in Codex, implementing a work package in M3: Creative workspace.
Required prerequisites: Comparison slots, selected-part context and shared generation/review.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Complete Minerva's Weave workflow in this new codebase. Use canonical
revisions, the comparison set, context compiler and shared generation/review.
All implementation is newly authored; no earlier application is a dependency.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Prepare the exact revision and evidence packet for Fable 5.1 in Claude using
this milestone's independent review prompt. Record and resolve material findings;
Fable's opinion does not replace user acceptance or observed behavior.
Still open at this milestone: Wander-specific recurrence overlays and advanced space readings belong to M4. Standalone instrument breadth, output artifacts and external clients belong to M5; they are not optional.
Package complete when: a real or clearly labeled fixture conversation
performs the listed discussion-and-action journey during a durable creative
operation with no unrequested acceptance, duplicate effect or canvas lock;
the same journey during Wander remains required in M4; C13/C08 evidence is
updated; and the Fable M3 review packet is prepared.
```

### Fable review M3: Creative workspace

```text
You are Fable 5.1 in Claude, independently reviewing M3: Creative workspace
for a newly authored Minerva application. GPT-6 Astra in Codex implements.
Review only: do not change application files, commit or deploy. Run existing
checks and isolated synthetic journeys, never mutate working user data.
Live paid calls require an explicit review allowance; without it, inspect
available evidence and mark the unexercised live behavior as incomplete.

Use the supplied new-project path, exact candidate revision/diff, local product
and design contracts, capability matrix and startup/fixture instructions.
No earlier application source, template, external screenshot or conversation is
required. The full product is a relationship-rich spatial creative studio with
three views, contextual operations, comparison/Weave, Wander/Agent Drive,
concurrent voice, outputs and REST/MCP. This milestone is not the entire release.

Required demonstration:
Inspect a multi-parent genome; preserve selected parts; compare distant cards; choose a card-specific suggested move; Weave and keep a child; revisit history; switch all three views while speaking and while a durable operation finishes.

Review focus:
Test inheritance evidence and multi-parent visibility, rejected recipes and revisit behavior, comparison slots, selected contributions, source-specific AI suggestions and actual recombination. Switch Lineage/Evolution/Constellation without changing content or losing voice. Distinguish computed initial Constellation groups from M4 interpretation. Flag generic menus or repeated toolbars that recreate friction.

Still-open scope at this boundary:
Wander-specific recurrence overlays and advanced space readings belong to M4. Standalone instrument breadth, output artifacts and external clients belong to M5; they are not optional.

Complete the whole review in one pass; the user is not watching while you work
and has already authorized every read-only step in this prompt, so do not pause
to ask permission for inspection, running existing checks or exercising the
fixture. Ask a question only when a required input from the packet is missing,
and otherwise report. Work in Claude Code opened in a read-only checkout of the
review revision, or in Claude Cowork with that checkout connected.

Independently inspect relevant code and exercise the app where possible.
Do not accept the builder's narrative as evidence. If tools, credentials or
runtime access are missing, report what was actually reviewed and what was not;
source-only inspection cannot approve visual or live-interaction claims.
Use synthetic data and existing project commands. Preserve private access.

Return a milestone verdict: READY FOR NEXT MILESTONE, CHANGES REQUIRED, or
BLOCKED; for M6 distinguish READY TO DEPLOY from DEPLOYED OUTCOME CONFIRMED.
For each material finding give capability ID, expected versus observed behavior,
reproduction/evidence, consequence, confidence and the smallest corrective
outcome. Separate observed failures, hypotheses and optional suggestions.
Include open scope and pending user acceptance; do not invent a likeness or
creativity score. User acceptance is not yours to grant.

Astra must record a disposition for each material finding and fix confirmed
defects. On recheck, inspect the new revision and affected cases, not just a
claim that the problem was fixed. This review never authorizes reduced scope.
```

## Milestone 4: Exploration intelligence

**Entry:** The creative workspace, shared operations, durable execution, exact context, and concurrent voice.

**Working demonstration:** Explore independent roots and multiple paths; expose a repeated mechanism; attempt a targeted change and an honest stagnation case; navigate a reading to source evidence; challenge a grouping; pursue an achievable and impossible goal. Speak, move and switch views during these runs.

**Exit and review:** Fable verifies policy/context boundaries and the interactive analysis loop, including previously deferred Wander-plus-voice scenarios. Efficacy has its own evidence status; unresolved human comparative judgments prohibit improvement claims, not honest reporting of implemented behavior.

**Still open:** Instrument breadth, materialized outputs and external-client coverage still need M5. Final full-product and infrastructure qualification belongs to M6.

### Prompt 21: build Wander roots, frontier and exploration archive

```text
You are GPT-6 Astra in Codex, implementing a work package in M4: Exploration intelligence.
Required prerequisites: Shared creative operations, durable execution and an independently testable context compiler.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Implement Minerva's required Agent Drive using newly authored code in this
repository. It pursues an explicit goal; Wander explores possibilities.
Keep their policies distinct while sharing context, operations, durable
execution, review, cost admission and recovery.

Let the person set a goal, permitted action scope, observable stopping condition
and attempt/spend allowance. The policy can inspect, develop, compare and
propose recombinations through normal application operations. Record why each
action serves the goal and what result actually occurred.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Prepare the exact revision and evidence packet for Fable 5.1 in Claude using
this milestone's independent review prompt. Record and resolve material findings;
Fable's opinion does not replace user acceptance or observed behavior.
Still open at this milestone: Instrument breadth, materialized outputs and external-client coverage still need M5. Final full-product and infrastructure qualification belongs to M6.
Package complete when: the compact case set runs repeatably; context
isolation and truthful relationships are verified; the blinded comparison is
prepared with declared settings and spend and run only if authorized; efficacy
status is recorded separately from functional status; C10/C11 evidence is
updated; and the Fable M4 review packet is prepared.
```

### Fable review M4: Exploration intelligence

```text
You are Fable 5.1 in Claude, independently reviewing M4: Exploration intelligence
for a newly authored Minerva application. GPT-6 Astra in Codex implements.
Review only: do not change application files, commit or deploy. Run existing
checks and isolated synthetic journeys, never mutate working user data.
Live paid calls require an explicit review allowance; without it, inspect
available evidence and mark the unexercised live behavior as incomplete.

Use the supplied new-project path, exact candidate revision/diff, local product
and design contracts, capability matrix and startup/fixture instructions.
No earlier application source, template, external screenshot or conversation is
required. The full product is a relationship-rich spatial creative studio with
three views, contextual operations, comparison/Weave, Wander/Agent Drive,
concurrent voice, outputs and REST/MCP. This milestone is not the entire release.

Required demonstration:
Explore independent roots and multiple paths; expose a repeated mechanism; attempt a targeted change and an honest stagnation case; navigate a reading to source evidence; challenge a grouping; pursue an achievable and impossible goal. Speak, move and switch views during these runs.

Review focus:
Inspect real manifests, artifacts, transitions and rejected attempts. Do not infer independence from different prompts, an escape from its operation label, or quality from distance. Exercise challenged groupings and source-linked readings on the canvas, plus voice/view continuity during Wander and Agent Drive. Separate implemented policy, live observations and unresolved creative efficacy.
Exercise the complete challenge-to-intervention-to-result loop, including a
mistaken challenge and an attempted change that fails. Verify the displayed
contributions against actual artifacts; correct provenance alone does not
establish that the claimed creative transformation occurred.

Still-open scope at this boundary:
Instrument breadth, materialized outputs and external-client coverage still need M5. Final full-product and infrastructure qualification belongs to M6.

Complete the whole review in one pass; the user is not watching while you work
and has already authorized every read-only step in this prompt, so do not pause
to ask permission for inspection, running existing checks or exercising the
fixture. Ask a question only when a required input from the packet is missing,
and otherwise report. Work in Claude Code opened in a read-only checkout of the
review revision, or in Claude Cowork with that checkout connected.

Independently inspect relevant code and exercise the app where possible.
Do not accept the builder's narrative as evidence. If tools, credentials or
runtime access are missing, report what was actually reviewed and what was not;
source-only inspection cannot approve visual or live-interaction claims.
Use synthetic data and existing project commands. Preserve private access.

Return a milestone verdict: READY FOR NEXT MILESTONE, CHANGES REQUIRED, or
BLOCKED; for M6 distinguish READY TO DEPLOY from DEPLOYED OUTCOME CONFIRMED.
For each material finding give capability ID, expected versus observed behavior,
reproduction/evidence, consequence, confidence and the smallest corrective
outcome. Separate observed failures, hypotheses and optional suggestions.
Include open scope and pending user acceptance; do not invent a likeness or
creativity score. User acceptance is not yours to grant.

Astra must record a disposition for each material finding and fix confirmed
defects. On recheck, inspect the new revision and affected cases, not just a
claim that the problem was fixed. This review never authorizes reduced scope.
```

## Milestone 5: Remaining product capabilities

**Entry:** The creative workspace and exploration intelligence on shared application services.

**Working demonstration:** Invoke each instrument independently; produce a structured prototype and isolated runnable HTML; compare a controlled pair; save/download a synthesis and coding handoff; navigate and invoke the same scoped operation through REST and an actual MCP client.

**Exit and review:** Every required capability has an implemented path. Fable verifies representative adapters, outputs and shared admission. A tool list, code block or endpoint declaration is not enough; unresolved paths remain blockers for M6 completion.

**Cold-start exercise:** Fable first uses only published interface documentation,
an assigned task, endpoints and authorized access to discover and complete a
REST/MCP journey. No builder walkthrough or special demonstration wrapper.
Source inspection follows that attempt to diagnose failures.

**Still open:** All C01-C16 scope is now implemented or explicitly identified as a gap. Cross-product qualification, infrastructure readiness and final user acceptance remain.

### Prompt 26: implement the complete creative instrument family

```text
You are GPT-6 Astra in Codex, implementing a work package in M5: Remaining product capabilities.
Required prerequisites: Shared generation/review, comparison and branch refinement; extend rather than duplicate them.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Package complete when: a controlled paired experiment, a coding-session
handoff and a saved reusable synthesis exist with provenance; the listed cases
pass with unmeasured effects left unresolved; and C05/C14 evidence is updated.
```

### Prompt 29: expose the complete application through REST

```text
You are GPT-6 Astra in Codex, implementing a work package in M5: Remaining product capabilities.
Required prerequisites: The complete application operations and a workable protected-access model.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Implement Minerva's REST surface with newly authored code. Read the
product contract and application operations. External access is required,
not a separate implementation of the product.

Expose documented schemas for creative instruments and progressive workspace
navigation: list/open/active scope, summaries, graph, search, selected cards,
history/provenance, comparison, contextual moves, runs/control, output artifacts
and complete export. HTTP paths may be new; no old endpoint compatibility is
required. Their useful behaviors must exist.

Routes call the same application functions as UI and voice. Preserve exact IDs,
target revisions, input validation, idempotency receipts, read/mutation authority
and shared cost admission. Do not use a global active-workspace pointer for
unrelated callers or a second persistence path.

Keep browser access frictionless after platform authentication, without adding
an owner-password screen. Provide a permitted, scoped machine-access mechanism
and verify it works with deployment protection; never publish an open paid API.

Exercise progressive reads and the same operation through UI/application and
REST, including duplication, stale revisions, denied authority and budget
exhaustion. Update C15 and exact API docs; endpoint presence is not coverage.
Package complete when: documented REST routes cover the listed navigation and
creative operations through shared application functions with idempotency,
authority and admission; the same operation is exercised through UI and REST
including the listed cases; scoped machine access works with deployment
protection; and C15 evidence and API docs are updated.
```

### Prompt 30: expose the same capabilities through MCP

```text
You are GPT-6 Astra in Codex, implementing a work package in M5: Remaining product capabilities.
Required prerequisites: Shared application operations, REST contracts and authorized machine access.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Implement Minerva's MCP adapter with newly authored code and maintained
protocol libraries. Use current official documentation and the complete product
contract in this repository; no external application is a prerequisite.

Expose independently useful creative instruments plus progressive workspace
discovery, active scope, summary/graph/search, exact cards and provenance, run
status/control, scoped creative requests, execution artifacts and export.
Do not require a client to upload the entire workspace or invoke the full suite.

Tools call the same application operations as UI, voice and REST. Scope caller
identity and active workspace correctly. Read permission does not imply mutation
or paid-call authority. Use stable command IDs, expected revisions, explicit
admitted/applied/conflicted/failed receipts and shared allowance.

Verify actual machine authentication and transport behavior with the protected
deployment model; never compensate by opening the app publicly or installing
a second browser password. Keep schemas progressive and descriptions honest.

Document a cold-start task: discover the active workspace, find two specified
ideas, inspect their source revisions, request one authorized scoped operation
and retrieve its actual receipt/result. A fresh client must do this using the
published interface documentation without a builder's private walkthrough or
a one-off wrapper written just for the demonstration.

Exercise one full read-to-action-to-receipt journey through an actual compatible
client, plus denied scope, duplicate delivery and stale source cases. A list
of tool definitions without a working invocation is incomplete. Update C15
evidence and operator instructions; do not deploy without authorization.
Milestone closeout: demonstrate this complete M5 journey:
Invoke each instrument independently; produce a structured prototype and isolated runnable HTML; compare a controlled pair; save/download a synthesis and coding handoff; navigate and invoke the same scoped operation through REST and an actual MCP client.
Prepare the exact revision and evidence packet for Fable 5.1 in Claude using
this milestone's independent review prompt. Record and resolve material findings;
Fable's opinion does not replace user acceptance or observed behavior.
Still open at this milestone: All C01-C16 scope is now implemented or explicitly identified as a gap. Cross-product qualification, infrastructure readiness and final user acceptance remain.
Package complete when: an actual compatible MCP client completes the cold-start
read-to-action-to-receipt journey from published instructions alone, plus the denied-scope, duplicate and stale
cases against shared operations; machine authentication is verified; C15
evidence and operator instructions are updated; and the Fable M5 review packet
is prepared.
```

### Fable review M5: Remaining product capabilities

```text
You are Fable 5.1 in Claude, independently reviewing M5: Remaining product capabilities
for a newly authored Minerva application. GPT-6 Astra in Codex implements.
Review only: do not change application files, commit or deploy. Run existing
checks and isolated synthetic journeys, never mutate working user data.
Live paid calls require an explicit review allowance; without it, inspect
available evidence and mark the unexercised live behavior as incomplete.

Use the supplied new-project path, exact candidate revision/diff, local product
and design contracts, capability matrix and startup/fixture instructions.
No earlier application source, template, external screenshot or conversation is
required. The full product is a relationship-rich spatial creative studio with
three views, contextual operations, comparison/Weave, Wander/Agent Drive,
concurrent voice, outputs and REST/MCP. This milestone is not the entire release.

Required demonstration:
Invoke each instrument independently; produce a structured prototype and isolated runnable HTML; compare a controlled pair; save/download a synthesis and coding handoff; navigate and invoke the same scoped operation through REST and an actual MCP client.

Review focus:
Try the distinct instruments rather than merely inspecting their names. Exercise prototype interactions, source-linked experiments/handoffs/synthesis, and the same operation through REST and a real MCP client. Check shared business logic, source identity, authority and cost admission. Confirm generated artifacts cannot acquire application authority. Do not expand into a generic execution platform.
For the external-client journey, begin without implementation source or Astra's
walkthrough. Use only published API/MCP instructions, the assigned task, endpoint
and approved access to discover the workspace, inspect the specified ideas and
their revisions, invoke an authorized operation and retrieve the receipt/result.
Record discovery or usability failures before reading source to diagnose them.
Do not silently repair the interface or obtain extra coaching and then call
the cold-start attempt successful. Missing paid-call allowance is a stated
limit, not permission to spend or substitute a fabricated response.

Still-open scope at this boundary:
All C01-C16 scope is now implemented or explicitly identified as a gap. Cross-product qualification, infrastructure readiness and final user acceptance remain.

Complete the whole review in one pass; the user is not watching while you work
and has already authorized every read-only step in this prompt, so do not pause
to ask permission for inspection, running existing checks or exercising the
fixture. Ask a question only when a required input from the packet is missing,
and otherwise report. Work in Claude Code opened in a read-only checkout of the
review revision, or in Claude Cowork with that checkout connected.

Independently inspect relevant code and exercise the app where possible.
Do not accept the builder's narrative as evidence. If tools, credentials or
runtime access are missing, report what was actually reviewed and what was not;
source-only inspection cannot approve visual or live-interaction claims.
Use synthetic data and existing project commands. Preserve private access.

Return a milestone verdict: READY FOR NEXT MILESTONE, CHANGES REQUIRED, or
BLOCKED; for M6 distinguish READY TO DEPLOY from DEPLOYED OUTCOME CONFIRMED.
For each material finding give capability ID, expected versus observed behavior,
reproduction/evidence, consequence, confidence and the smallest corrective
outcome. Separate observed failures, hypotheses and optional suggestions.
Include open scope and pending user acceptance; do not invent a likeness or
creativity score. User acceptance is not yours to grant.

Astra must record a disposition for each material finding and fix confirmed
defects. On recheck, inspect the new revision and affected cases, not just a
claim that the problem was fixed. This review never authorizes reduced scope.
```

## Milestone 6: Integrated release

**Entry:** Implemented C01-C16 paths and evidence/findings from all previous milestones; no unacknowledged scope cuts.

**Working demonstration:** Run the complete cross-view, voice, exploration, comparison, output and external-client journey; inject failures; recover and reload; inspect dense scenes and narrow layouts; verify deployment/data ownership and restore instructions.

**Exit and review:** Fable's release-candidate review, Astra's evidence-based resolution of material findings, user experience acceptance and the authorized deployed smoke all complete. Temporary or blocked infrastructure is reported as an incomplete review deployment, not a finished release.

**Demonstration:** prepare one coherent before/after story targeting roughly
90 seconds of presentation, not a 90-second provider-response guarantee.
Clearly label prepared data, live operations, recordings and fallbacks. The
short demonstration highlights the complete product; it does not reduce scope.

**Still open:** Empirical creative superiority may remain unproven and must be described honestly. Required functionality, material unresolved defects or missing experience acceptance cannot be silently deferred.

**Review order:** complete Astra packages 31-33, run the Fable M6 review below against the release candidate, resolve material findings, then run Astra package 34. Return to Fable for the post-deployment outcome confirmation. Do not wait until after publication for the first release review.

### Prompt 31: qualify concurrency and bounded recovery across the product

```text
You are GPT-6 Astra in Codex, implementing a work package in M6: Integrated release.
Required prerequisites: All required capability paths implemented or explicitly listed as blockers.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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
Do not publish or claim the complete product while a required journey fails.
Package complete when: the integrated journey and every injected failure
behave as specified on small and dense scenes with mouse, touch, keyboard and
reduced motion; fixes land in owning modules; and concrete evidence is saved to
the capability matrix.
```

### Prompt 32: qualify the look, feel and interaction economy

```text
You are GPT-6 Astra in Codex, implementing a work package in M6: Integrated release.
Required prerequisites: A populated working product and original design contract, not a static shell.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

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

Optional tactile sound stays off by default, sparse, tied to acknowledged
events and suppressed during voice. No autoplay or correctness celebrations.
Use original custom assets and appropriately licensed standard resources.

Record annotated visual and journey evidence. Human look/feel acceptance is a
separate status; if unavailable, say pending rather than inventing a likeness
score. Fewer buttons achieved by removing capabilities is a failure. Update C16.
Judge equivalent capability, responsiveness and visual character, not exact
pixels, component structure or an earlier application's implementation choices.
Package complete when: populated desktop, narrow, normal-zoom and overview
renderings meet the composition, activation-count, relationship-legibility,
accessibility and sound rules; annotated visual and journey evidence is
recorded; and C16 names human acceptance as recorded or pending.
```

### Prompt 33: prove completeness and architectural improvement

```text
You are GPT-6 Astra in Codex, implementing a work package in M6: Integrated release.
Required prerequisites: The full capability matrix and representative functional/visual/runtime evidence.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Audit this newly authored Minerva implementation against every required
capability C01-C16 and the backend architecture contract. No old application source
or prior conversation is needed. Do not substitute "core works" for completeness.

For each capability, trace a visible user workflow through application logic,
persistence/provider execution and back to the UI, plus the relevant external
adapters. Record evidence and gaps. A stored edge is not a visible relationship;
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
backup/restore instructions and reproducible deployment. Durable release data
must not depend on a temporary preview expiry. Exercise the recovery path
without touching working data; no multi-region or enterprise platform is required.
Confirm custom code/assets were authored for this project rather than imported
from an earlier application. Standard dependencies are not custom application reuse.

Run the appropriate existing checks and representative live/visual journeys.
Separate functional, visual, architecture, infrastructure, runtime and efficacy
statuses. Any required missing capability blocks a completion claim; only an
explicit user-approved scope amendment can change the contract.
Missing user experience acceptance also blocks an overall completed-product
claim, even if automated functional checks pass.
Update the matrix and a concise handoff, including all remaining blockers.
Package complete when: every C01-C16 journey is traced with evidence or a
named gap; the representative change and dependency rules are verified;
infrastructure and provenance checks are recorded; functional, visual,
architecture, infrastructure, runtime and efficacy statuses are separated; the
matrix and handoff list all blockers; and the Fable release-candidate packet is
prepared.
```

### Prompt 34: publish the complete private application honestly

```text
You are GPT-6 Astra in Codex, implementing a work package in M6: Integrated release.
Required prerequisites: Fable's M6 pre-deployment review of the exact candidate, material findings resolved, user acceptance and deployment authorization.
Work only in the new project's code and contracts. Preserve the full product
scope and report package readiness separately from milestone/user acceptance.

Publish Minerva from this newly authored codebase only when authorized.
It is the complete spatial creative studio: relationship-rich cards and
inheritance, three real views, contextual moves, comparison/Weave, instruments,
Wander and space analysis, Agent Drive, concurrent voice, outputs and REST/MCP.
Read the capability matrix, design acceptance and architecture/infrastructure
evidence. No previous application repository or conversation is required.

Do not publish a reduced MVP as completed Minerva. All required behaviors must
have evidence; unresolved subjective acceptance stays explicit.
If representative user experience acceptance is missing, deliver a review build,
not an overall product-completion claim.
Development previews may be shared as incomplete, never relabeled complete
because a deployment is Ready or a CI run is green.

Target the public GitHub repository and separate Vercel project with authorized
database/model resources. Verify platform protection without a second owner
password and actual machine access. Public source is not public hosting: confirm
the deployed application is private and that no secret, fixture user data or
unlicensed asset has been committed.
Do not silently change visibility. Never accept marketplace/legal terms for
the person or copy a pre-existing application's custom code/assets.

Use the public repository name minerva, without a version suffix. Prepare a
short demonstration of the central loop: inspect potentially recurring ideas,
discuss them while manipulating the canvas, request a specific intervention,
Weave useful contributions, and inspect the result and both parents before
deciding what to keep. A failed or inconclusive transformation stays honest.
Aim for roughly 90 seconds of presentation; do not fake fast completion or
mock a core live capability to hit that duration. Label seeded records, fresh
operations, recorded footage and fallback behavior. Keep full-product evidence
separate from this selected presentation path.

Confirm the cumulative requested $100 envelope covers text, voice, workflow/
hosting and database, with separate provider caps and headroom. Do not change
unrelated team limits, buy credits, silently reset caps or imply a hard total
ceiling that metering cannot enforce. Distinguish temporary preview storage
from owned durable production storage and disclose expiration.

Exercise the integrated deployed journey using real configured services within
authorization, including relationship tracing, views, contextual choice,
recombination, conversation, partial failure and reconnect. Deliver actual
URLs, source provenance, operating instructions, cost limits and blockers.
Update the handoff. Functional completion is not empirical proof of creativity;
never disguise missing functionality as later optional extensions.
Milestone closeout: demonstrate this complete M6 journey:
Run the complete cross-view, voice, exploration, comparison, output and external-client journey; inject failures; recover and reload; inspect dense scenes and narrow layouts; verify deployment/data ownership and restore instructions.
Prepare the exact revision and evidence packet for Fable 5.1 in Claude using
this milestone's independent review prompt. Record and resolve material findings;
Fable's opinion does not replace user acceptance or observed behavior.
Still open at this milestone: Empirical creative superiority may remain unproven and must be described honestly. Required functionality, material unresolved defects or missing experience acceptance cannot be silently deferred.
Package complete when: the authorized deployment serves the complete
application privately from the public repository with verified protection and
machine access; the integrated deployed journey is exercised; budget
allocations and storage ownership are confirmed and disclosed; URLs,
provenance, operating instructions, cost limits and blockers are delivered; and
the concise demonstration distinguishes prepared, live, recorded and unavailable
behavior; and the post-deployment Fable confirmation packet is prepared.
```

### Fable review M6: Integrated release

```text
You are Fable 5.1 in Claude, independently reviewing M6: Integrated release
for a newly authored Minerva application. GPT-6 Astra in Codex implements.
Review only: do not change application files, commit or deploy. Run existing
checks and isolated synthetic journeys, never mutate working user data.
Live paid calls require an explicit review allowance; without it, inspect
available evidence and mark the unexercised live behavior as incomplete.

Use the supplied new-project path, exact candidate revision/diff, local product
and design contracts, capability matrix and startup/fixture instructions.
No earlier application source, template, external screenshot or conversation is
required. The full product is a relationship-rich spatial creative studio with
three views, contextual operations, comparison/Weave, Wander/Agent Drive,
concurrent voice, outputs and REST/MCP. This milestone is not the entire release.

Required demonstration:
Run the complete cross-view, voice, exploration, comparison, output and external-client journey; inject failures; recover and reload; inspect dense scenes and narrow layouts; verify deployment/data ownership and restore instructions.

Review focus:
Audit all C01-C16 against running behavior and the exact candidate revision, not the builder's completion narrative. Reproduce representative concurrency/recovery, relationship and external-client journeys. Inspect architecture extension points and infrastructure evidence, plus populated desktop/mobile views. Distinguish ready-to-deploy from an actual deployed result. Verify the post-deploy evidence before closing the milestone; model agreement is not a substitute for user acceptance.
Watch the central before/after journey without builder narration compensating
for missing behavior. Confirm the user can see the challenge, proposed change,
actual outcome and source evidence. Distinguish prepared, live, recorded and
fallback segments; a short polished presentation cannot conceal missing
capabilities, failed transformations or unusable external interfaces.

Still-open scope at this boundary:
Empirical creative superiority may remain unproven and must be described honestly. Required functionality, material unresolved defects or missing experience acceptance cannot be silently deferred.

Complete the whole review in one pass; the user is not watching while you work
and has already authorized every read-only step in this prompt, so do not pause
to ask permission for inspection, running existing checks or exercising the
fixture. Ask a question only when a required input from the packet is missing,
and otherwise report. Work in Claude Code opened in a read-only checkout of the
review revision, or in Claude Cowork with that checkout connected.

Independently inspect relevant code and exercise the app where possible.
Do not accept the builder's narrative as evidence. If tools, credentials or
runtime access are missing, report what was actually reviewed and what was not;
source-only inspection cannot approve visual or live-interaction claims.
Use synthetic data and existing project commands. Preserve private access.

Return a milestone verdict: READY FOR NEXT MILESTONE, CHANGES REQUIRED, or
BLOCKED; for M6 distinguish READY TO DEPLOY from DEPLOYED OUTCOME CONFIRMED.
For each material finding give capability ID, expected versus observed behavior,
reproduction/evidence, consequence, confidence and the smallest corrective
outcome. Separate observed failures, hypotheses and optional suggestions.
Include open scope and pending user acceptance; do not invent a likeness or
creativity score. User acceptance is not yours to grant.

Astra must record a disposition for each material finding and fix confirmed
defects. On recheck, inspect the new revision and affected cases, not just a
claim that the problem was fixed. This review never authorizes reduced scope.
```
