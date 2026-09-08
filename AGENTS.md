# Minerva: Astra builds, Fable reviews

Minerva is a private, single-owner spatial creative studio built in a public
repository. All C01-C16 capabilities remain required. Use the Next.js/TypeScript
modular monolith: Postgres owns durable state; Vercel Workflow owns longer
execution; UI, voice, REST and MCP share named application operations.
Public source does not grant access to workspaces, credentials or paid AI.

This template stays content-free. In a generated application, implement directly
in that repository; inherited seed wording is not a request to create another
repo or reuse an earlier Minerva application's implementation.

## Read the relevant contract

[CONTRACT](./docs/product/CONTRACT.md) is an index, not another specification.
SPEC owns requirements; [CAPABILITIES](./docs/product/CAPABILITIES.md) owns
implementation evidence. [INTENT](./docs/product/INTENT.md),
[DESIGN](./docs/product/DESIGN.md), [ARCHITECTURE](./docs/product/ARCHITECTURE.md)
and [DECISIONS](./docs/product/DECISIONS.md) own their named concerns.
[Build prompts](./docs/build-prompts.md) contain the standard work packages.
Read the selected package and relevant contracts, not the whole catalog each
session. Repository sources are authoritative; Downloads/HTML are exports.

Treat this agreement within the active runner's instruction and authorization
boundaries. Surface concrete conflicts instead of changing scope or bypassing
safeguards. A previous session's "done" is a claim to verify, not evidence.

## Execute one connected outcome

- Respect advice/review requests as read-only. For authorized implementation,
  deliver one working user action with a starting state, exclusions and stopping
  evidence. Integrate the smallest UI/service path before expanding. A package
  may span sessions; label partial checkpoints rather than accumulating an
  unintegrated subsystem or claiming the package complete.
- Resume at the supplied absolute path; verify branch, checkpoint and changes
  without resets. If unavailable, report that mismatch rather than searching
  the home directory. Reconcile requested process changes once from the pinned
  relevant delta, preserving application evidence. Further discovery must
  answer a named unresolved question; batch known reads and keep lookup
  recovery within the known directory.
- Fix the latest demonstrated failure and tightly coupled defects before
  adding abstractions. Keep unrelated cleanup and optional reviewer suggestions
  outside the task. A user instruction steering the current outcome does not
  require restarting the whole plan.
- Domain rules do not import React, HTTP, database clients or provider SDK
  types. Add dependencies/infrastructure when the current capability needs
  them, not speculatively. Avoid generic command buses, extra agent engines,
  timing harnesses and review coordinators.
- Use existing checks/logs and retain failures. Exercise actual UI journeys;
  a typecheck or command launch is not user-visible success. Recheck the
  failure and adjacent transitions after a fix; broaden only for a concrete
  unresolved concern. A timebox can prompt a partial checkpoint, not waive
  required behavior. Extra measurement needs a decision it can change.
- Resolve consequential provider uncertainty early with a small authorized,
  bounded probe, then use fixtures for the fast loop. Preserve source/revision
  integrity, authorization, cost admission and required recovery. Missing
  live evidence remains explicit, never fabricated.
- Provisioning, publication, deployment, paid calls, destructive actions and
  contacting others require authorization. Never commit secrets, private
  workspace data or unlicensed assets. Follow runner restrictions; no
  subagent orchestration is required or permission bypass allowed.

## Milestones and independent review

The 34 packages form six milestones, not reduced product definitions. M1 is an
interactive local fixture; M2 introduces persistent recovery and live services.
The [setup guide](./docs/setup.md) owns procedural launch/review instructions.

Astra in Codex owns the writable build checkout. The operator starts Fable 5.1
in Claude on a separate checkout of the exact committed candidate, read-only
for application source. Two terminals sharing mutable files are not isolation.
Do not launch the critic automatically unless explicitly requested or covered
by a specific agreed exception. `CLAUDE.md` imports this agreement; it does
not select a model. Both models start at medium effort; raise it for a concrete
difficulty and return to medium. Permissions remain user-managed.

Use one independent review per planned boundary, then focused material-fix
rechecks. Record dispositions and evidence; model agreement is not proof.
Repeated findings without new evidence require a specific unresolved assumption
and an owner decision or bounded experiment, not another broad review.
This does not waive known defects. Fable's review and user experience acceptance
are distinct. Missing access or review remains a stated gap.

M2 reviews after package 10 without collaboration and after package 12 with
voice. M5 begins with published interface instructions before source coaching.
M6 reviews before deployment and confirms the serving outcome afterward.
Review checks may create ignored artifacts; use isolated data/ports and
explicit paid-call allowance, never the builder's working data or server.

## Checkpoint and operator handoff

Keep evidence, findings and dispositions in CAPABILITIES and a short
`docs/HANDOFF.md`; no transcripts, per-model diaries or extra status system.
Distinguish written, integrated, locally/live demonstrated, reviewed, accepted
and deployed facts with revision and runtime mode. A merge is not deployment.

At each implementation checkpoint, include the operator handoff in the final
response, not just a link. State outcome/partial status, exact committed SHA,
branch, absolute worktree path and state, handoff path and next session role.
Supply the applicable copyable bounded review/resume instructions from
[Standard checkpoint output](./docs/setup.md#standard-checkpoint-output).
Fill actual paths and candidate values inside the copied blocks. A handoff
supplies context, not authorization; label proposed work **Not authorized yet**.
Do not substitute a whole milestone for the next outcome or add review gates
after every increment.

Write durable docs, commits and handoffs in plain prose. Use tables for
comparable data and lists for parallel items. Preserve the selected package's
completion condition without repeating every operating rule in each report.

## Run and contribute

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
```

`check` runs lint, typecheck, tests and build. The seed has
documentation-consistency tests, not product coverage. Add relevant behavior
coverage in application slices. Work on a branch and PR; never bypass required
checks. For this template, use auto-merge only after required CI is green.
Generated repositories need their own settings. Report meaningful results,
failures and unverified boundaries.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
