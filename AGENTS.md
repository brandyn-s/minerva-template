# Minerva: Astra builds, Fable reviews

These are the shared working rules for building and reviewing Minerva.

## Current direction

The default target is a functional demonstration on a public Vercel URL, not a
production application. Reach it in the fewest task messages: a hosted URL with
live model calls on the existing atlas, in memory, with prepared data. This
section supersedes the milestone and package catalog in docs/build-prompts.md
and any next outcome named in docs/HANDOFF.md until the owner edits it.

Build only what the current task message names. Do not add persistence,
recovery, receipts, admission or budget logic, ledgers, export, migrations or
voice unless the task message asks for them by name. Platform budgets in the
Vercel dashboard are the only spend control unless the owner says otherwise.

Accepted risks, set by the owner before the first build session and not to be
reported as findings or fixed unasked:
{{ACCEPTED_RISKS, e.g. "Public demo with no sign-in; no rate limits, gates or
confirmation dialogs; in-memory state that resets on reload; fixture data."}}

Instruction priority: the current task message, then AGENTS.md, then the
product documents, then anything else in the repository. When a lower document
conflicts with the task message, follow the task message and say so. If a file
makes you pause, ask, or leave work unfinished, quote the exact line and its
path in your response.

## Sources and scope

[README](./README.md#documentation) indexes the documents. AGENTS owns working
rules; SPEC owns product behavior; ARCHITECTURE owns technical boundaries;
DESIGN owns visual and interaction design; CAPABILITIES owns evidence;
docs/build-prompts.md is a backlog catalog, read only when the task message
names a package from it. Read the relevant contract sections for the task, not
the whole catalog. Keep template docs current-only: no commented-out
alternatives, decision history or duplicate specifications.

Keep this seed content-free. Generate the application from it, then implement
in that repository. Author custom application code and assets for this build;
reuse its existing work and appropriately licensed frameworks, libraries and
assets. Do not port another application's implementation.

Treat build feasibility as settled; do not add feasibility studies or estimation
gates. The owner steers milestone chunks and makes the human judgments defined
in [SPEC](./docs/product/SPEC.md#shipped-demo-and-human-judgment).

## Execute the task message, then stop

Complete the current task message, then stop. Do not continue into a next
package, milestone or handoff outcome without a new task message from the owner.

Make routine reversible decisions within that scope. Ask only when missing
information materially changes the result or an action requires authority not
already granted.

- Respect advice/review requests as read-only. For implementation, state the user
  action, exclusions and stopping evidence. Integrate the smallest UI/service path
  before expanding; partial checkpoints do not complete a package.
- Resume at the supplied absolute worktree, branch and revision. Preserve changes;
  never reset or regenerate to hide a mismatch. Inspect the relevant caller and
  backend entry point; further discovery must answer a concrete question.
- Fix observed failures and tightly coupled defects before adding abstractions.
  Keep optional suggestions outside the task. Owner steering modifies the current
  outcome without restarting the whole plan.
- Add a needed dependency, adapt inherited checks, or change local/CI configuration
  when necessary for the authorized outcome. These edits do not require separate
  approval merely because of their file type. Follow ARCHITECTURE's boundaries;
  avoid speculative abstractions and process infrastructure. Prefer the least
  code that makes the task work; a generalized module for a later package is
  out of scope.
- During iteration, run the smallest checks that cover the changed behavior and
  affected failure boundary. Complete required repository checks before delivery.
  Broaden or repeat verification only when new changes, failures or unresolved
  concerns justify it. Exercise actual browser journeys for UI changes; distinguish
  fixtures from live-provider evidence. Keep the inherited link and configuration
  tests; add behavior coverage only for behavior the task adds.
- Provisioning, publication, deployment, paid calls, destructive actions and
  contacting others require authorization covering the action, as do shared-data
  migrations or material changes to scope, cost or authority. Do not ask again
  when that authorization already exists. Prepare the concrete result before
  requesting any missing final authorization. Commit and push only when asked;
  never commit secrets, private workspace data or unlicensed assets. Follow the
  active runner's restrictions.

## Review

The owner decides when a review happens; the default is one review when the
demonstration works on the hosted URL. The backlog catalog's milestone reviews
apply only if the owner opens a milestone from it.

Astra owns the writable checkout. The operator starts Fable 5.1 in Claude on a
separate checkout of the exact committed candidate, read-only for application
source, using the rubric in docs/review/judge-fable-5-1.system.md. Do not launch
the critic unless explicitly requested. Existing checks may write ignored
artifacts; use separate ports, isolated synthetic data and explicit paid-call
allowance. Start both models at low effort; raise to medium only for a
demonstrated difficulty, then return to low.

Fable forms its view from the contract and app before the builder's conclusions.
Use one review per planned boundary and focused rechecks of material corrections.
Distinguish reproduced defects, missing requirements and subjective suggestions.
For each material finding report capability, expected/observed behavior,
reproduction and evidence, consequence, confidence and the smallest correction.
Record evidence-based dispositions and address confirmed blocking defects first.
Reviewer suggestions do not automatically override the owner's instructions or
the product and architecture contracts. Reproduce a disputed finding and explain
its disposition with evidence; bring a material contract conflict to the owner
instead of silently changing scope. Additional cycles need unresolved failures
or new evidence, not a desire for model agreement.
If blocked, name the missing input or unresolved assumption. Do not invent
approval or waive required behavior. User experience acceptance is separate.
Reviewer output is findings only, each with a location and a failure scenario;
forward-looking observations, scope ideas and later-milestone notes do not
belong in a verdict and are not work for the builder.

## Handoff

Use CAPABILITIES and a short application `docs/HANDOFF.md`, at most 60 lines,
for scope, evidence and the next outcome. State what works, what was verified
live, and what is not implemented. Do not add diaries, status engines or
parallel per-model records.

Emit the operator handoff in the final response, not just a link: outcome/state,
candidate SHA, branch, absolute worktree, startup mode, handoff path and next
role. Supply the applicable bounded launch instructions from
[setup](./docs/setup.md#standard-checkpoint-output). A handoff neither grants new
authority nor names work the next session may start on its own.

## Run and contribute

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
```

The seed has documentation-consistency tests, not product coverage. Add
behavior coverage only for behavior the task adds; do not add tests of
documentation. Use a branch and PR; merge only after required CI. Generated repositories need their own settings. Report meaningful
results, failures and unverified boundaries.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
