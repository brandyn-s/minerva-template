# Minerva: Astra builds, Fable reviews

Minerva is a single-user, browser-only spatial creative prototype with no sign-in.
C01-C15 are required. Use the Next.js/TypeScript monolith: Postgres owns durable
state; Vercel Workflow owns longer execution; UI and voice share named operations.
Default to loopback-only local access. Hosting is optional only behind an existing
suitable private boundary that preserves no-sign-in use and denies outside access.
Do not build accounts, external APIs or access infrastructure.

## Sources and scope

[README](./README.md#documentation) indexes the documents. SPEC owns requirements;
CAPABILITIES owns evidence. Read the selected package and relevant contracts,
not the whole catalog. Keep template docs current-only: no commented-out
alternatives, decision history or duplicate specifications.

Keep this seed content-free. Generate the application from it, then implement
in that repository. Author custom application code and assets for this build;
reuse its existing work and appropriately licensed frameworks, libraries and
assets. Do not port another application's implementation.

## Execute one connected outcome

- Respect advice/review requests as read-only. For implementation, state the user
  action, exclusions and stopping evidence. Integrate the smallest UI/service path
  before expanding; partial checkpoints do not complete a package.
- Resume at the supplied absolute worktree, branch and revision. Preserve changes;
  never reset or regenerate to hide a mismatch. Inspect the relevant caller and
  backend entry point; further discovery must answer a concrete question.
- Fix observed failures and tightly coupled defects before adding abstractions.
  Keep optional suggestions outside the task. Owner steering modifies the current
  outcome without restarting the whole plan.
- Domain rules do not import React, HTTP, database clients or provider SDK types.
  Add dependencies when needed; no generic command bus, extra agent engine,
  review coordinator or measurement infrastructure without a consequential need.
- Exercise actual UI journeys and affected failure transitions using existing
  checks. Keep fixtures distinct from live providers. Probe consequential provider
  uncertainty with small authorized cases; retain failures and state evidence gaps.
- Provisioning, publication, deployment, paid calls, destructive actions and
  contacting others require authorization. Preserve source revisions, request
  protections, cost admission and bounded recovery. Never commit secrets, private
  workspace data or unlicensed assets. Follow the active runner's restrictions.

## Milestones and review

The 32 packages form six milestones. M1 uses prepared local data; M2 integrates
persistence, generation and voice. M2 reviews after package 10 and after package
12; M5 reviews browser instruments/outputs. M6 reviews the candidate and confirms
local operation. Hosting confirmation applies only when hosting is authorized.

Astra owns the writable checkout. The operator starts Fable 5.1 in Claude on a
separate checkout of the exact committed candidate, read-only for application
source. Do not launch the critic unless explicitly requested. Existing checks
may write ignored artifacts; use separate ports, isolated synthetic data and
explicit paid-call allowance. Start both models at medium effort; escalate only
for demonstrated difficulty, then return to medium.

Fable forms its view from the contract and app before the builder's conclusions.
Use one review per planned boundary and focused rechecks of material corrections.
Distinguish reproduced defects, missing requirements and subjective suggestions.
Record evidence-based dispositions; fix confirmed defects. Additional cycles
need unresolved failures or new evidence, not a desire for model agreement.
If blocked, name the missing input or unresolved assumption. Do not invent
approval or waive required behavior. User experience acceptance is separate.

## Handoff

Use CAPABILITIES and a short application `docs/HANDOFF.md` for scope, findings,
dispositions, evidence and the next outcome. Distinguish written, integrated,
locally/live demonstrated, reviewed, accepted and hosted facts by revision.
Do not add diaries, status engines or parallel per-model records.

Emit the operator handoff in the final response, not just a link: outcome/state,
candidate SHA, branch, absolute worktree, startup mode, handoff path and next
role. Supply the applicable bounded launch instructions from
[setup](./docs/setup.md#standard-checkpoint-output). A handoff is context, not
authorization. Do not automatically advance or create a review gate per increment.

## Run and contribute

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
```

The seed has documentation-consistency tests, not product coverage. Add relevant
behavior coverage in application slices. Use a branch and PR; merge only after
required CI. Generated repositories need their own settings. Report meaningful
results, failures and unverified boundaries.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
