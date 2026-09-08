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
  when" condition. Work toward that condition, but choose one demonstrable
  outcome for the current session. A large package may end at an explicitly
  partial checkpoint with its next outcome named; never call that package
  complete. Do not accumulate whole subsystems before a useful handoff.
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

Default to separate terminals and separate checkouts: Astra in Codex has the
writable build checkout; Fable 5.1 in Claude reviews an exact committed candidate
in a separate checkout used read-only for application source. Two terminals
sharing a mutable tree are not isolation. The operator starts the review;
the builder does not launch Fable or a review subagent unless explicitly
requested or covered by a specific agreed exception. No coordinator is required.

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

At every implementation checkpoint, include the operator handoff in the final
response, not just a link to `docs/HANDOFF.md`. State the outcome/partial status,
exact committed SHA and branch, worktree state, handoff path and next session's
role. Supply ready-to-paste launch instructions and the applicable bounded
Fable review or Astra resume prompt from
[Standard checkpoint output](./docs/setup.md#standard-checkpoint-output).
Put absolute checkout paths and the exact candidate inside the copied blocks.
Label proposed, not-yet-authorized work explicitly. A handoff supplies context,
not authorization; never substitute "continue M2" or another whole milestone
for a bounded outcome. Do not invent an extra review gate per increment.

## Bound the next outcome

Resume in the supplied absolute worktree path and verify its branch, checkpoint
and current changes before searching. Do not scan the home directory to
rediscover a path already supplied. If the path/checkpoint is absent, report
that exact mismatch; do not recreate the app or reset existing work.

Reconcile explicitly requested instruction changes once, using the pinned
source revision and relevant file delta, before implementation. Preserve
application-specific requirements and evidence. Reopen that reconciliation
only for a new instruction or a concrete conflict affecting the current work.
After locating the caller, backend entry point and decisive journey, each
further search/read should answer a named unresolved question. Batch known
reads; recover a failed lookup within the known directory rather than widening
to the whole machine.

The full capability contract is the destination, not the scope of each task.
State the current outcome, explicit exclusions and stopping evidence before
implementing. Fix demonstrated failures in existing shared operations before
adding a reusable abstraction. Add infrastructure only when the current
required capability needs it; defer speculative hardening without weakening
revision integrity, authorization, cost admission or required recovery.

The unit of work is a working user action, not a whole subsystem or necessarily
one numbered prompt. Connect the smallest path through the UI and its current
backend/provider boundary before expanding the feature. Do not accumulate
unintegrated services, adapters and components and count their return as
delivery. If an increment expands, checkpoint the working path, name the
specific dependency and split the remaining work without dropping requirements.

Resolve consequential external uncertainty early with a small authorized probe
of authentication, transport and supported settings before building extensive
surrounding code. Keep credentials server-side and cost admission intact.
Use fixtures for the normal fast loop; missing live access stays a named gap,
not an invitation to fabricate success or build speculative infrastructure.

Report written, integrated, demonstrated locally, demonstrated live, reviewed,
accepted and deployed as distinct facts. Identify revision, runtime mode and
remaining gaps in the existing evidence record. Written code is not integration;
a merged PR is not deployment; model review is not user acceptance.

Default to one independent review per planned review boundary and a focused
recheck of material corrections,
not repeated full-product reviews. Recurrent findings without new evidence
require a concrete unresolved assumption and an owner decision or bounded
falsifying experiment. This is not a hard cap that waives a known defect.
New reviewer suggestions are not automatically requirements; separate contract
defects, missing required behavior and optional enhancements.

Use existing checks/logs to answer the current question, retain failed attempts
and run required checks. Do not build timing harnesses, comparative benchmarks,
review coordinators or extensive telemetry for routine development. Additional
measurement needs a consequential uncertainty and a decision it can change.
During debugging, name the failing assertion and observed behavior, make the
smallest supported correction, and repeat the affected journey. A concrete
fix and recheck is not itself a fix loop. Do not interleave unrelated document
cleanup or broaden a stale-context/retry case into a general framework.
Command launches, output line counts and a typecheck alone are not observed
UI success. An elapsed-time budget may trigger an honest checkpoint; it
cannot waive a failing outcome or establish completion.

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
