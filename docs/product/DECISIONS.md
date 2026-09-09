# Minerva: active decisions

Status: revised seed contract, September 8, 2026. This register is a concise
contract, not an implementation-status report.

## Supersession

The first-prototype D-001 through D-007 and A-001 through A-007 are superseded
where they prescribed browser-local-only authority, page-scoped execution,
read-only voice, mandatory fixed three-arm exploration, or a specific Focus/
Path implementation. Their previous wording remains in Git history, not as
competing active instructions. Preserve their useful principles: explicit
context, immutable lineage, visible acknowledgement and retained history.

## Current decisions

| ID | Decision | Consequence |
|---|---|---|
| D-101 (amended by D-128) | Fresh public source repository; single-user local prototype | No public anonymous paid service, multi-user product or data import |
| D-102 | Next.js/TypeScript modular monolith; Postgres is canonical | Browser state is interaction/cache; no microservices or renderer-owned truth |
| D-103 | Durable Vercel workflows for longer work | Browser close does not terminate product jobs; checkpoints and dispatch recovery are explicit |
| D-104 (superseded by D-115) | Canvas, Wander and concurrent voice formed the earlier first-release boundary | Historical decision; not permission to defer required capabilities |
| D-105 | Full frozen application-controlled operation context | Preview/execution share source revisions, excerpts, order, prompt/model profile and explicit archive exposure |
| D-106 | Separate independent roots and archive-aware exploration | No hidden generated-memory leakage; contextual development remains possible |
| D-107 | Shared commands, ephemeral attention and speech-to-proposal contracts | UI/voice/agents share target-scoped operations, stable IDs and acknowledgements |
| D-108 | Human-kept work, proposals, model review and search classifications remain distinct | No silent overwrite, fake review, or model score presented as proof |
| D-109 | Nonblocking canvas/run/voice lifecycles and bounded recovery | No global busy lock; partial work survives and failures have specific outcomes |
| D-110 | Title-first paper/ink canvas with direct actions and details on demand | No requirement to reproduce the old radial fan, hidden menus or renderer |
| D-111 (superseded by D-116) | One bounded task per fresh Astra session | Historical scheduling default; session count does not define delivery |
| D-112 | Medium development effort baseline; runner permissions remain user-managed | No template-wide approval bypass, experimental context mode or delegation requirement |
| D-113 | Living-atlas identity: Wander, Weave, Talk to Minerva | Plain action labels accompany thematic names; attention animates, user layout stays stable |
| D-114 | Optional tactile sound, off by default, with voice priority | No autoplay, ambient soundtrack, or audio implying an idea is correct |
| D-115 (amended by D-128) | C01-C14 and C16 in SPEC are required; new implementation from this content-free seed | C15 retired; no old application port or other silent scope cuts |
| D-116 (amended by D-128) | Six milestones over 32 standard work packages | IDs 29-30 retired; related packages may share a coherent session and a hard package can span sessions |
| D-117 | Astra implements, Fable 5.1 independently reviews, both start at medium effort | Review findings need evidence-based disposition; user experience acceptance is separate |
| D-118 | M1 proves the interactive experience; M2 brings real generation/acceptance and voice forward | M2 has interim review after package 10 and final review after package 12 |
| D-119 (superseded by D-128) | Public repository named minerva; formerly platform-authenticated application | Historical access requirement; no platform sign-in or machine access requirement in the prototype |
| D-120 | SPEC owns scope; CAPABILITIES owns evidence; CONTRACT is an index | Standard prompts live in Git; HTML and Downloads are exports, not parallel sources |
| D-121 | Central loop: explore, observe, challenge, intervene, inspect | A narrow demonstration highlights the complete product; recurrence/escape claims need evidence |
| D-122 (superseded by D-128) | Formerly cold-start external-client and pre/post-deployment review | M5 now reviews browser instruments/outputs; M6 confirms local operation, with hosting only if authorized |
| D-123 | Separate operator-initiated Codex/Astra and Claude/Fable sessions on distinct checkouts | Exact committed review candidate; no routine builder-launched critic or automated coordinator |
| D-124 | One demonstrable outcome per task and a concise evidence-based handoff | Partial checkpoints stay partial; whole capability scope is not the next task's scope |
| D-125 | One independent review per planned boundary plus focused recheck by default; proportionate measurement | Further cycles need material unresolved failures or new evidence, never a waiver of known defects |
| D-126 | Working user-action increments integrate before feature expansion | Resolve external uncertainty with small authorized probes; returned subsystem code is not delivered behavior |
| D-127 | Delivery evidence distinguishes written, integrated, local/live demonstration, review, acceptance and deployment | Record facts in existing capability/handoff fields; no new status engine or implied completion |
| D-128 | Single-user, browser-only prototype with no sign-in; local access by default | Retire C15 and packages 29-30. Keep internal endpoints, Postgres, durable runs and the other capabilities. Hosting is optional only behind an existing suitable private boundary; do not build one or expose anonymous paid work |
| D-129 | React Flow (`@xyflow/react`) with custom cards and application-owned layouts | Reuse viewport/pointer infrastructure; map canonical graph records into renderer data without persisting its store or leaking its types into domain contracts |
| D-130 | Drizzle (`drizzle-orm`) behind feature-owned Postgres adapters; `drizzle-kit` generates reviewed SQL migrations | Keep domain rules ORM-independent; apply committed migrations explicitly to the intended database, never through request-time or implicit startup schema changes |
| D-131 | Poll persisted run progress initially; retain Postgres admission/dispatch intent and Vercel Workflow execution | No additional realtime service or event-owned state; reconsider transport only for an observed requirement that polling cannot satisfy |

The owner's September 8 prototype scope decision explicitly removes external
REST/MCP/API buildout and sign-in. Browser-only means the sole client is a browser,
not browser-only storage or execution. Preserve all other capability/package IDs
so existing checkpoints retain their meaning. Public GitHub source remains
separate from application access. A missing hosting boundary is not a local-release
blocker; no login, client-integration or hosted-release gate may reintroduce it.

These foundation choices are implementation direction, not evidence that their
integration works. D-105/D-107/D-109 already settle frozen context, shared
operations and independent state/lifecycles; D-110 settles composition. Implement
those contracts rather than reopening them at each milestone. Reconsider a
choice only for a demonstrated requirement failure or compatibility constraint,
recording the evidence and the narrow replacement decision. M1 establishes
renderer interaction fit; M2 establishes persistence, recovery and collaboration.
Do not preinstall these application dependencies in the content-free template.

## Provisional deployment detail

Local access is the default. Use a separate Vercel project only if hosting is
explicitly authorized and an existing suitable private boundary preserves
no-sign-in use while denying outside access. The requested application spending
ceiling is
$100; treat it provisionally as cumulative and nonrenewing until the owner
confirms scope/period. Confirm included hosting, workflow, database, model and
voice charges before live work. No automatic credit purchase or independent
allowance for each credential. Provider caps and delayed billing require
headroom; do not claim an exact hard cap.

## Deliberately open

- Local Postgres configuration.
- If optional hosting is requested, its authorized project/database and existing
  suitable private boundary for all serving addresses; no machine-client buildout.
- Compatible dependency versions, database driver/configuration and
  feature-level implementation details within D-129/D-130.
- Runtime text and voice model profiles; Astra is the development model.
- Exact exploration mixture, evaluation thresholds and layout algorithms.
- Comparative creative-efficacy judgments; no automatic claim of improvement.

Choose reversible implementation details within these boundaries. Escalate
changes to product scope, ownership, deployment/spend or destructive behavior.
Do not reopen settled architecture because a fresh session lacks chat history.

## Template boundary

This repository provides a pinned runnable shell, product contracts, independent
build prompts and setup guidance. It does not preinstall database/voice/canvas/
workflow frameworks or claim those product capabilities exist. Build them in
the new application as each end-to-end slice requires them.
