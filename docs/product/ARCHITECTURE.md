# Minerva: architecture

Status: active modular-monolith architecture. The shell does not yet implement
the services described here. [DECISIONS.md](./DECISIONS.md) records supersession
of incompatible first-prototype decisions.

## System shape

```text
Canvas / typed collaborator / voice / HTTP / MCP
                    |
           named application operations
                    |
       feature-owned domain rules and contracts
                    |
      Postgres       model adapter       Vercel Workflow
```

One Next.js/React/TypeScript application is the deployment unit. Start with
feature folders in one package, not empty packages or independently deployed
services. Add dependencies when a working slice needs them.

## Ownership and dependencies

| Area | Owns | Does not own |
|---|---|---|
| Workspace/ideas | Brief, constraints, content revisions, relationships, ownership | DOM, camera, provider transport |
| Exploration/review | Operation definitions, proposals, assessments, decisions | Canvas rendering or runtime model SDK types |
| Wander/space analysis | Exploration policy, archive, recurrence and evidence-linked readings | A second execution engine or universal creativity score |
| Runs | Admission, attempt identity, progress and recovery contracts | Browser lifecycle or policy-specific creative choices |
| Agent Drive | Explicit goal pursuit and stopping policy on shared operations | A separate execution engine |
| Comparison/development | Comparison slots, selected parts, versioned recipes and inheritance evidence | Provider transport or user camera |
| Outputs | Branch-linked prototypes, experiments, handoffs and reusable synthesis | Executing arbitrary generated server code |
| Investigator | Conversational intents and bounded context/attention contracts | A duplicate mutation path |
| Canvas/UI | Viewport, selection, rendering and interaction | Canonical content or direct provider credentials |
| Infrastructure | Database, model and workflow bindings | Independent business rules |

Domain code does not import React, route handlers, `Request`/`Response`, or
provider SDK objects. UI and transport adapters call the same application
functions. Use narrow dependencies at real boundaries; no generic command bus,
service framework, dependency-injection container, or universal agent engine.

## Canonical records

Postgres owns workspaces, brief/constraint revisions, ideas and immutable
revisions, derivation edges, semantic links, proposals, reviews, decisions,
command receipts, operation manifests, runs/steps and exploration observations.
Use relational records for identities/relationships and bounded versioned JSON
for feature payloads. Derivation is acyclic; semantic links may contain cycles.

Add comparison state, selected functional parts, transformation recipes,
inheritance evidence, execution artifacts and reusable synthesis as their
owning slices arrive. Lineage, Evolution and Constellation share canonical
IDs/revisions and have independent presentation state. Model classifications,
user decisions and recorded relationships are distinct.

The graph read model returns usable typed relationships and source references,
including brief-context membership and all recombination parents. It exposes
omissions and ancestor expansion rather than silently dropping endpoints at
pagination boundaries. Keeping a proposal does not sever its original sources.

Layout/viewpoint state has its own revision path. Browser selection, active
pointer gestures, temporary highlights and unfinished speech are ephemeral.
Caching must not create a second authority. Restore/revisit creates a new
revision referring to the source; it does not erase intervening history.

## Four shared contracts

**Exploration archive:** retain attempt/context references, parent/root lineage,
full artifacts, compact mechanism descriptions, failed/repeated outcomes,
repair reasons and usage. Search classifications do not replace human taste
decisions. Independent roots exclude generated archive content; archive-aware
requests list what they include.

**Commands:** use named operations such as create/revise idea, connect ideas,
set position, propose exploration, accept proposal and control run. Carry actor,
workspace, stable command ID, payload identity, targets and expected revisions.
Duplicate delivery returns the same receipt; conflicting ID reuse fails.
Admission is not completion. Apply conflicts to dependencies actually read or
written, not every change anywhere in the workspace.

**Attention:** point/highlight references are sequenced and expire. They do not
write content, steal selection or move the camera. An explicit navigation
command may move it. Reconnection discards stale navigation/highlights.

**Speech-to-proposal:** partial text is preview only. Finalized utterances have
stable intent IDs and resolve to discussion, attention, proposal or a clearly
requested bounded command. Preserve source revisions and distinguish user
language from model additions. Do not duplicate actions after reconnect.

## Context compilation

Compile a deterministic operation manifest with exact source revisions,
excerpts or full text, inclusion/order reasons, brief/constraints, operation
and prompt version, model profile, and admitted reference/archive material.
Preview and execution use that same frozen application-controlled context.
No hidden memory injection afterward. Record execution-time retrieval as an
additional input receipt without rewriting the original manifest.

Provide explicit brief-only and source-directed modes. Archive-aware mode
declares its extra inputs. Context selection is inspectable; incidental
proximity is not an instruction. Geometry does not reorder content or
invalidate content-only requests. Enforce size bounds without silent truncation.

## Durable execution

Persist run admission and dispatch intent before starting Workflow. Reconcile
the database/startup gap. Execute provider/database I/O in durable steps and
checkpoint independent results. Stable step IDs prevent duplicate application
effects; they do not prove exactly-once provider billing.

Poll persisted progress initially if sufficient. Normalize progress, input-needed,
proposal-saved and terminal events for presentation. Event delivery is not a
second state store. Reconnect from durable state rather than replaying UI actions.
Stopping ends future admission; already-admitted work may finish or incur cost.

Bound SDK retries, workflow retries, repair and replanning under one explicit
attempt/time/spend policy. Transient failures, invalid output, revision conflict,
repetition and quota denial have different responses. Preserve partial results
and failed attempts. Never bypass a quota or invent successful fallback output.

## Concurrent interaction

Canvas, run execution and voice have independent lifecycles. No global busy flag.
Incoming results merge by identity and preserve viewport, selection and deliberate
positions. Source edits affect dependent work only. Keep expensive layout and
analysis off the synchronous pointer path; add workers for observed need.

Voice uses a maintained provider adapter with server-mediated ephemeral
credentials, bounded sessions, interruption and context resync. Barge-in stops
speech, not unrelated work or acknowledged commands. Typed fallback remains.

## Provider and deployment boundaries

Runtime model profiles state capability, supported settings, output schema,
limits and attempt policy. Astra as the development agent does not force the
runtime model. Model output is untrusted and assessments are not proofs.

Models interpret, suggest, generate and explain. Conventional application code
owns identity, revision consistency, graph-reference integrity, permissions,
spend admission and state transitions. Deterministic code still requires
correctness evidence; valid parent IDs do not certify meaningful inheritance.

Use platform-authenticated browser entry without a second owner-password
screen. An environment flag is not proof of platform identity/protection.
Verify each preview/production/custom address and scoped machine access.

The target is a separate Vercel project with private application access and
separate preview/production data. Provisionally use a cumulative $100 total
application envelope, pending explicit scope/period confirmation before spend.
Model, voice, hosting/workflow and database charges need separate accounting
within that envelope. See [Vercel facts](../vercel-facts.md) for vendor limitations.

No infrastructure is created by the template. It contains no paid credentials,
configured budget, database, voice implementation or deployed application.

## Infrastructure and extension evidence

The application implements environment-separated data/configuration, explicit
migration execution, pooler-compatible database connections, durable dispatch
reconciliation, correlated run/request diagnostics, and documented backup/
restore and reproducible deployment paths. Test recovery on isolated data.
An expiring preview is not durable release storage. These are responsibilities
to implement during the application milestones, not unused seed dependencies.

An ordinary new operation should extend its feature contract/definition,
generation or analysis logic, registration and focused tests without editing
canvas pointer mechanics, voice connection lifecycle or unrelated workspace
serialization. New data concepts may legitimately need migrations. Evaluate
ownership boundaries, not arbitrary file counts or dependency minimization.
