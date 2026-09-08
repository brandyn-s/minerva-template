# Minerva, built with GPT-6 Astra in Codex

Minerva is a private, online-first spatial idea studio. Its first useful release
combines a manipulable canvas, bounded Searchlight exploration, and a concurrent
voice collaborator. Keep the Next.js/TypeScript modular monolith: Postgres owns
durable product state; Vercel Workflow owns longer execution. The public source
repository does not imply public access to workspaces or paid AI.

Read the relevant part of [INTENT](./docs/product/INTENT.md),
[SPEC](./docs/product/SPEC.md), [ARCHITECTURE](./docs/product/ARCHITECTURE.md),
and [DECISIONS](./docs/product/DECISIONS.md), not all documents every session.
The [standalone build prompts](./docs/build-prompts.md) describe bounded sessions
from an empty application. They need no other repository or conversation.

When maintaining the template itself, keep it content-free. In an application
repository generated from this starter, implement the product directly there;
do not interpret inherited template wording as a request to create another repo.

## How to work here

- Implement the requested slice through working behavior. Make reversible local
  decisions; state consequential assumptions. Do not stop at a plan when asked
  to implement, or widen a bounded task into a framework.
- For UI changes, exercise the actual browser journey. For other changes use
  the smallest relevant checks. Say what ran, failed, or remains unverified.
  Documentation-only work does not need simulated product coverage.
- When the owner steers mid-run, fold the new instruction into the current work
  and keep going; do not restart.
- No subagent orchestration is required. Follow the active runner's restrictions;
  never bypass them to obtain parallelism.
- Write PRs and messages in plain prose. Use a list only when the items are
  parallel.
- Obtain authorization for provisioning, deployment, paid calls, publication,
  destructive changes, and contacting others. Never publish credentials or
  private content. A prompt that permits preparation does not authorize spend.
- Domain rules do not import React, HTTP objects, or provider SDK types. UI,
  voice, REST and MCP call the same named operations. Do not create a generic
  command bus, agent framework, or second workflow engine.

## Build

Use one standalone prompt per fresh session. Inspect the code and
`docs/HANDOFF.md` in the new application; verify its claims rather than importing
chat history. Keep that handoff roughly one screen: implemented scope, relevant
files, exact commands/results, blockers, and next unfinished outcome. Do not
create transcripts, diaries, phase gates, or timing/measurement infrastructure.

The first integration target is exploration while speaking, moving cards,
zooming and recombining distant ideas. No global busy lock or automatic camera
jump. An incomplete slice is a checkpoint, not a complete Minerva product.
If a session ends mid-slice, checkpoint coherently and finish that outcome in
a fresh session before advancing.

## Run and check

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
```

`dev` is the inner loop. `check` is lint, typecheck, test, build. The empty shell
has no product tests; add behavior coverage with implemented slices. Work on a
branch and open a PR. For this template, enable auto-merge when required CI is
green; never bypass checks. A generated repository needs its own settings.
The PR body states the change and its evidence, including unrun checks.

## Effort

`.codex/config.toml` selects GPT-6 Astra at `medium` as the starting point.
Increase effort for a demonstrated reasoning/debugging difficulty; do not use
maximum effort by habit. The template does not override permissions, network
access, approvals, or experimental context/delegation features. Configure those
in the active runner. There is no requirement to complete the product in one
long, repeatedly compacted conversation.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
