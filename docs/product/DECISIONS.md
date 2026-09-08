# Minerva: active decisions

Status: revised product direction, September 7, 2026. This register is a concise
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
| D-101 | Fresh public source repository; private single-owner online-first app | No anonymous paid operations, multi-user product or data import |
| D-102 | Next.js/TypeScript modular monolith; Postgres is canonical | Browser state is interaction/cache; no microservices or renderer-owned truth |
| D-103 | Durable Vercel workflows for longer work | Browser close does not terminate product jobs; checkpoints and dispatch recovery are explicit |
| D-104 | Canvas, Wander and concurrent voice form the first useful release | Earlier slices are checkpoints, not substitute MVPs |
| D-105 | Full frozen application-controlled operation context | Preview/execution share source revisions, excerpts, order, prompt/model profile and explicit archive exposure |
| D-106 | Separate independent roots and archive-aware exploration | No hidden generated-memory leakage; contextual development remains possible |
| D-107 | Shared commands, ephemeral attention and speech-to-proposal contracts | UI/voice/agents share target-scoped operations, stable IDs and acknowledgements |
| D-108 | Human-kept work, proposals, model review and search classifications remain distinct | No silent overwrite, fake review, or model score presented as proof |
| D-109 | Nonblocking canvas/run/voice lifecycles and bounded recovery | No global busy lock; partial work survives and failures have specific outcomes |
| D-110 | Title-first paper/ink canvas with direct actions and details on demand | No requirement to reproduce a radial fan, hidden menus or specific renderer |
| D-111 | Small fresh Astra sessions with standalone task prompts | New-repository code and a short handoff replace accumulated chat history |
| D-112 | Medium development effort baseline; runner permissions remain user-managed | No template-wide approval bypass, experimental context mode or delegation requirement |
| D-113 | Living-atlas identity: Wander, Weave, Talk to Minerva | Plain action labels accompany thematic names; attention animates, user layout stays stable |
| D-114 | Optional tactile sound, off by default, with voice priority | No autoplay, ambient soundtrack, or audio implying an idea is correct |

## Provisional deployment detail

Use a separate Vercel project. The requested application spending ceiling is
$100; treat it provisionally as cumulative and nonrenewing until the owner
confirms scope/period. Confirm included hosting, workflow, database, model and
voice charges before live work. No automatic credit purchase or independent
allowance for each credential. Provider caps and delayed billing require
headroom; do not claim an exact hard cap.

## Deliberately open

- Repository/project names and the new application's license.
- Managed Postgres provider, private session provider and canvas renderer.
- Runtime text and voice model profiles; Astra is the development model.
- Exact exploration mixture, evaluation thresholds and layout algorithms.
- Optional extension order after the integrated core.

Choose reversible implementation details within these boundaries. Escalate
changes to product scope, ownership, deployment/spend or destructive behavior.
Do not reopen settled architecture because a fresh session lacks chat history.

## Template boundary

This repository provides a pinned runnable shell, product contracts, independent
build prompts and setup guidance. It does not preinstall database/voice/canvas/
workflow frameworks or claim those product capabilities exist. Build them in
the new application as each end-to-end slice requires them.
