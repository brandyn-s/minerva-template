# Minerva, built with GPT-6 Astra in Codex and reviewed by Fable 5.1 in Claude

Minerva is a private, single-owner, online-first spatial creative studio: a
living atlas of ideas with visible relationships and inheritance, three views
over one workspace, contextual creative operations, comparison and Weave,
bounded Wander exploration, goal-directed Agent Drive, a concurrent typed and
spoken collaborator, materialized outputs, and REST and MCP access. All sixteen
capabilities in `docs/product/SPEC.md` (C01-C16) are release requirements.
Keep the Next.js/TypeScript modular monolith: Postgres owns durable product
state and Vercel Workflow owns longer execution. The source repository is
public; the hosted application, its workspaces, credentials and paid AI are
private.

Treat this file as the repository working agreement, within the active runner's
instruction and authorization boundaries. Surface conflicts rather than silently
changing the product scope or bypassing safeguards.

Read the part of [INTENT](./docs/product/INTENT.md), [SPEC](./docs/product/SPEC.md),
[ARCHITECTURE](./docs/product/ARCHITECTURE.md), [DECISIONS](./docs/product/DECISIONS.md)
and [DESIGN](./docs/product/DESIGN.md) that the current package needs.
[CONTRACT](./docs/product/CONTRACT.md) is an index, not another specification.
SPEC owns requirements; [CAPABILITIES](./docs/product/CAPABILITIES.md) owns
implementation and milestone evidence. The standard prompts in this repository
are authoritative work packages; Downloads and HTML are exports, not competing
sources. A previous session's "done" is a claim to verify, never evidence.

When maintaining the template itself, keep it content-free. In an application
repository generated from this starter, implement the product directly there;
inherited template wording is never a request to create another repository.

## How to work here

- Perform authorized implementation directly rather than stopping at a plan.
  Respect requests for advice, comparison or read-only review as such. Ask a question
  only when a decision changes product scope, data ownership, paid
  infrastructure or a destructive action, or when a required input is missing.
- Each work package in `docs/build-prompts.md` ends with a "Package complete
  when" condition. Keep working until that condition is met or a specific
  blocker prevents it; stop neither after the first passing check nor after
  drafting a plan when implementation was requested.
- Make reversible local decisions and state consequential assumptions. Deliver
  the slice through working behavior. Keep the requested scope: report
  unrelated bugs as follow-ups, fix tightly coupled defects, and size tests
  to cover the actual changed behavior.
- For UI changes, exercise the actual browser journey. For other changes use
  the smallest relevant checks, and rerun or broaden them only when a new
  failure or an unresolved concern justifies it. Say what ran, what failed and
  what remains unverified.
- When the owner steers mid-run, fold the new instruction into the current
  work and keep going.
- No subagent orchestration is required. Follow the active runner's
  restrictions; never bypass them to obtain parallelism.
- Write commit messages, PR bodies, handoffs and product documents in plain
  prose paragraphs. Use a table for the capability matrix and comparable data,
  and a list only for parallel items.
- Obtain authorization for provisioning, deployment, paid calls, publication,
  destructive changes and contacting others. A prompt that permits preparation
  does not authorize spend. Never commit credentials, user workspace data or
  unlicensed assets to this public repository.
- Domain rules do not import React, HTTP objects, database clients or provider
  SDK types. UI, voice, REST and MCP call the same named operations. Build
  feature-owned operations rather than a generic command bus, agent framework
  or second workflow engine.

## Delivery: six milestones, independent review

The build is organized as six milestones (experience proof, working spine,
creative workspace, exploration intelligence, remaining capabilities,
integrated release) over 34 Astra work packages, described in
`docs/build-prompts.md`. Milestones are checkpoints of the complete product,
never reduced product definitions. Each milestone has entry conditions, a
working demonstration, exit criteria and an independent review by Fable 5.1 in
Claude, which is read-only with respect to application code. Astra records a
disposition for every material finding and fixes confirmed defects; Fable
rechecks the affected cases; then the milestone outcome is recorded. Fable's
agreement is not proof and does not replace the user's experience acceptance.

Use a fresh Fable review context per milestone; select Fable 5.1 at medium
effort in the active Claude client. The import in CLAUDE.md is a working
agreement, not a model selector. In M2, review the persistence/generation/
acceptance spine after package 10 and again after voice in package 12.
M5 begins its external-client review using public API/MCP instructions alone,
before implementation source or builder coaching. M6 reviews the candidate
before deployment and confirms the actual deployed outcome afterward.

Keep reviews read-only with respect to application code. Existing checks and
isolated synthetic journeys are allowed; paid calls need explicit allowance.
No secrets or working user data belong in a review packet. Related packages
may share a coherent session and a hard package may span several sessions.

Keep milestone state, package readiness, evidence, findings and dispositions in
`docs/product/CAPABILITIES.md` and a one-screen `docs/HANDOFF.md`: implemented
scope, relevant files, exact commands and results, blockers, and the next
unfinished outcome. Do not create transcripts, diaries or per-model status
files. An incomplete package is a checkpoint; if a session ends mid-package,
checkpoint coherently and finish that outcome in a fresh session before
advancing.

## Run and check

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
```

`dev` is the inner loop. `check` is lint, typecheck, test, build. The seed has
documentation-consistency tests, not product coverage. Add behavior tests as
application slices are implemented. Work
on a branch and open a PR. For this template, enable auto-merge when required
CI is green; never bypass checks. A generated repository needs its own
settings. The PR body states the change and its evidence, including unrun
checks.

## Effort

`.codex/config.toml` selects GPT-6 Astra at `medium`. The owner's decision is
medium effort for both Astra and the Fable reviewer. Raise effort only for a
demonstrated difficulty inside one package or review, then return to medium.
The template does not override permissions, network access, approvals or
experimental context and delegation features; configure those in the active
runner. Carry context between sessions through the repository, the contract
documents and the handoff, not through one long, repeatedly compacted
conversation.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
