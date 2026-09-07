# Minerva — Product Intent

> **Status:** Approved product intent as of September 6, 2026. Implementation
> mechanisms are governed by `ARCHITECTURE.md`; current authorization is
> recorded in `CURRENT_GATE.md`.

## Problem

Creative work with LLMs is constrained by a predominantly linear, single-channel interaction model. One accumulating conversation makes alternatives, abandoned paths, tensions, and relationships increasingly difficult to see and manipulate. As context builds, both people and language models can converge on familiar directions—similar phenomena produced by different mechanisms—and escaping that convergence often means restarting and losing useful work.

The instrument itself restricts the creative space. Keyboard and voice are usually treated as alternative ways to operate the same linear conversation rather than concurrent ways to think. Working through that pipe makes it difficult to hold several possibilities in view, change the context deliberately, and understand how one direction emerged from another.

## Primary user

Minerva is for an individual creative or strategic practitioner working on an ambiguous problem across one or more sessions. It must be useful from the beginning of exploration, not only after the user recognizes that they are stuck.

## Why this matters

Generating more material is not the same as expanding a possibility space. Without visible context, controlled difference, preserved alternatives, and causal lineage, additional output can reinforce the direction already attracting attention.

The user needs agency over the trajectory of the work: the ability to see what remains active, open deliberately different directions, compare without prematurely selecting a winner, recombine exact contributions, preserve unsuccessful attempts, and carry useful discoveries forward.

## Product thesis

Minerva is a **spatial thinking environment** that gives the user agency over the trajectory of AI-assisted thinking. Visible spatial structures determine what context remains active, what changes, and what can be carried forward, while alternatives and lineage remain available.

The canvas—not a transcript—is the primary surface. The user can type, speak, select, edit, and spatially manipulate the workspace concurrently. Conversation supports the canvas; it does not replace it.

Minerva should feel like a responsive thinking instrument, not a graph editor or dashboard. Play, curiosity, and visual beauty belong to the interaction itself. Every visual operation must produce a real, legible, and inspectable consequence for context, focus, relationship, or lineage.

## First encounter

A new user may enter through an immediately editable working example or choose an equally visible **Start blank** path. The example must expose Minerva's central interaction directly; it is not a tour, static demonstration, or separate product mode.

A blank workspace remains permissive. A problem is the obvious starting point, and the user may add supporting material without first completing a setup ritual or learning an ontology.

## Workspace and context

Cards are the common content substrate. Lightweight semantic roles—such as problem, idea, question, evidence, constraint, and tension—help interpretation without turning the workspace into a rigid schema.

Space gains meaning only through visible, inspectable structures such as groups, regions, links, an explicit focus set, and lineage. Mere proximity never changes AI behavior invisibly. Moving content into or out of a meaningful structure must make the resulting context change apparent.

The system reserves a small vocabulary for structural facts, initially including `derived from` and `member of`. Other relationships may use free-form user labels. These relationship labels are distinct from the operational record of an AI action.

Branch, Compare, Recombine, Searchlight, and Voice all consume the same versioned, inspectable projection of the active workspace. The user can see what each capability saw. Material outside that projection cannot silently influence the result.

Every AI operation preserves causal truth: the frozen input context, what was inherited, what changed, the intended move, the observed result, and any exact parent contributions. This record explains the operation without exposing or pretending to expose private chain-of-thought.

## Central loop

`seed → focus and arrange → branch or targeted sweep → compare → recombine → harvest → continue or rewind`

1. **Seed:** Begin with a real problem and whatever supporting material matters.
2. **Focus and arrange:** Organize the workspace and explicitly establish the context for the next action.
3. **Branch or sweep:** Open one directed expansion or several deliberately different approaches.
4. **Compare:** Inspect commonalities, differences, tensions, and tradeoffs without declaring a winner.
5. **Recombine:** Create a durable child from named contributions, preserving exact parent lineage.
6. **Harvest:** Capture the consequential directions, connections, tensions, bridges, dead ends, and open experiments exposed by the work.
7. **Continue or rewind:** Pursue a promising frontier, return to an earlier state, or preserve the current path and fork another.

## Branch and Searchlight

**Branch** is a directed expansion from one selected card or explicit focus set. It is the immediate way to develop a line of thought. The user may supply a prompt or direction, but neither is mandatory.

The first Searchlight capability is a **targeted divergence sweep**, not an autonomous or multi-generation expedition. Minerva automatically selects several context-appropriate, deliberately different approaches. Each approach starts independently from the same frozen context so that earlier results cannot anchor later ones.

Results appear incrementally as ordinary, durable workspace cards. Each result identifies its approach and operational record. Successful results, partial results, and failures remain visible and inspectable; failed approaches may be retried. The canvas remains usable while a sweep runs, and the user may pause, resume, or cancel future work without silently erasing results that have already committed.

A sweep concludes with a concise, specific harvest of what the exploration exposed. Multi-generation agentic expeditions—which may choose and pursue subsequent actions—and ambient exploration belong to the roadmap, not the first prototype.

## Human and AI authority

An explicit canvas action authorizes the action it names. Minerva does not interrupt exploration with repeated prompts or per-result permission requests. Valid generated results become ordinary durable cards immediately; undo and rewind provide the escape hatch.

AI actions may add results and their structural provenance. They may not silently edit or delete existing user work. Suggested interpretive relationships do not become durable workspace meaning until the user explicitly creates or adopts them.

The first voice agent is read-only. It remains context-aware, defaults to quiet, and may be invited into an active brainstorming stance for the current session. It can discuss the workspace, answer questions, surface patterns and tensions, challenge assumptions, and suggest next moves, but it cannot mutate the workspace.

Voice remains available while the user manipulates the canvas, is interruptible, and exposes truthful listening, thinking, speaking, and failure states. It always refers to the latest committed workspace revision rather than a stale or hidden copy.

Conversation is session-scoped. The workspace is the durable memory. The user may pin or drag any useful utterance onto the canvas, where it becomes an ordinary card.

## Interaction and truth principles

- **Direct manipulation:** Cards and structures are directly movable and inspectable. Actions live on the card, selection, or structure they affect.
- **Visible context:** The user can inspect and predict the context used for every AI capability.
- **Action is authorization:** Deliberate actions execute without confirmation ceremony and remain reversible.
- **Durable truth:** Minerva acknowledges a workspace change only after it is durably committed and visible. Partial successes and failures remain inspectable and retryable.
- **Neutral comparison:** Difference does not equal quality. Minerva exposes distinctions; human judgment determines value.
- **Continuous control:** AI work never blocks spatial inspection. Progress appears as it happens, and bounded work can be paused, resumed, or cancelled.
- **Provenance without interruption:** Lineage and operation records remain available without forcing the user through procedural forms.

## First prototype boundary

The first prototype is a single-user web application deployed through Vercel. It includes:

- a persistent, directly manipulable spatial canvas;
- an editable first-run example and a blank-start option;
- flexible cards, visible structures, explicit focus, and lineage;
- Branch, neutral Compare, contribution-level Recombine, harvest, and rewind;
- a targeted one-layer Searchlight sweep; and
- a concurrent, context-aware, read-only voice agent.

It begins as a genuinely greenfield product. Searchlight, Gestures, and Atlas contribute evidence, decisions, and rejected patterns—not code, schemas, persistence, deployment linkage, or implied requirements.

## Non-goals for the first prototype

- Multi-user collaboration.
- Touch- or multi-touch-dependent interaction.
- Voice-authorized workspace mutations.
- Multi-generation agentic expeditions or ambient exploration.
- Automated ranking, winner selection, or creativity scoring.
- A chat-first product, general whiteboard, document editor, or project-management system.
- A fixed ontology of creative procedures or relationship types.
- Mandatory prompts, mandatory procedure selection, or per-action confirmation dialogs.
- Reuse of a predecessor's application shell, state model, persistence, workflow, or deployment boundary by default.

## Checkable definition of success

On a real ambiguous problem, the user can complete the central loop and identify a consequential direction, connection, or tension they likely would not have reached through linear chat. They can explain how Minerva's visible context, branching, comparison, recombination, or harvest helped expose it and can reconstruct the lineage of the result.

The first useful loop is apparent from the primary canvas, not hidden in a guide, drawer, or secondary workflow. Generated work is usable as it arrives; acknowledged work survives reload; unsuccessful and partial work remains legible; and the user can continue exploring without surrendering control of the canvas.

A later product-evaluation protocol should compare Minerva with linear chat using the same problem, source material, model and time budget. It must measure consequential discovery rather than output volume or lexical difference.

## First material falsifier

If Minerva produces more visible material but does not help users reach or articulate consequential alternatives, connections, tensions, or experiments more reliably than a matched linear conversation, the thesis is false.

The thesis is also falsified if managing the canvas imposes a burden comparable to reconstructing context in chat, or if users cannot understand what the AI saw and why a result appeared. Additional agents, visual polish, or generated volume would not rescue either failure.
