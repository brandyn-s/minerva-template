# Minerva: product intent

Status: active greenfield product contract. This template contains a runnable
shell and specifications, not the implemented product.

## Purpose

Minerva is a private, single-owner, online-first studio for exploring an idea
space with AI. A person can investigate alternatives spatially, understand
their relationships and origins, and speak with a collaborator while work
continues. The canvas, Searchlight, and concurrent voice are the core product
together, not a chat application with optional visual decoration.

The hypothesis is that persistent alternatives, visible lineage, and concurrent
spatial/conversational work help people develop useful directions. Neither
model enthusiasm nor the number of generated cards establishes that benefit.

## The first useful experience

1. Create a workspace with a problem and explicit constraints.
2. Add ideas and start a bounded Searchlight exploration.
3. Inspect, move, edit and zoom while results arrive.
4. Discuss a selected idea with the voice collaborator, including spoken replies.
5. See what the explored space suggests, with evidence and uncertainty.
6. Connect or recombine two distant ideas; inspect what each contributed.
7. Keep, revise or set aside proposals without losing their origins.
8. Interrupt voice, close the browser, return, and recover saved work/run status.

Use synthetic, editable example content and an obvious blank-start path. No
particular example domain is part of the architecture or a mandatory answer.

## Human and AI roles

Searchlight can generate exploratory material and manipulate it within an
explicit run scope. It cannot overwrite human-kept work or turn guesses into
confirmed facts. The collaborator may point, discuss, suggest, create proposals
and execute clearly requested bounded commands through the same application
operations as the UI. Voice is not universally read-only.

The person retains control of goals, explicit constraints, acceptance and
deliberate spatial arrangement. Partial speech and incidental proximity do
not authorize mutations. Generated conventions are not user requirements.

## Experience and truth

Keep title-first cards, warm paper and dark ink, restrained color, direct
contextual actions, and details on demand. Discovery should feel tactile and
curious, but essential functionality must not be hidden in nested menus.
Pointer, keyboard and touch interactions remain useful while AI runs.

Display what an operation actually used, what changed, and what remains
uncertain. Different words or labels do not establish different mechanisms.
Provisional groups are not proven attractors; model review is not proof of
novelty, feasibility or quality. Stagnation and partial failure are real outcomes.

## Foundation

Use one Next.js/TypeScript modular monolith with server-owned Postgres state,
immutable content revisions, explicit commands, and durable Vercel workflows.
The browser owns transient interaction, not canonical product truth or job
lifetime. Code is intended for a new public GitHub repository; application
access and paid operations remain private. No data migration is required.

## First-release exclusions

Do not add multi-user co-editing, offline-first synchronization, billing,
microservices, a plugin marketplace, an agent framework, desktop process
hosting, or a research platform. Additional views, instruments, execution
outputs and REST/MCP are independent extensions after the integrated core.
Reliability at the interaction boundary and bounded recovery are not deferred.

## Definition of success and falsifiers

The complete journey above works with actual configured capabilities, not
only fixtures. Kept content and lineage survive reload. Voice, exploration,
and canvas interaction do not block unrelated work. Failures leave recoverable
state and specific explanations.

The product hypothesis is weakened if exploration repeatedly proposes the
same mechanism, space readings are not grounded in artifacts, conversation
cannot make useful new links, or the person spends more effort controlling
menus and context than developing ideas. Investigate those failures rather
than counting more output as improvement.
