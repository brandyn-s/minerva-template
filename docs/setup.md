# Starting a new Minerva application

The template provides a runnable shell, not a live database, canvas, AI
integration or deployment. Use a fresh project repository and keep application
content out of this template.

The prototype is single-user and browser-only, with no sign-in. Default to
loopback-only local access; the starter's dev/start commands bind to 127.0.0.1.
Open the local URL and work. Internal server endpoints, Postgres and durable
runs remain; there is no external REST/MCP/API buildout. Live model/voice
capabilities still need configured providers and authorized spend.

## Repository identity

Generate the public repository `brandyn-s/minerva` from `brandyn-s/minerva-template`
only when authorized. Confirm the target does not already exist under that exact
identity; an old-name redirect is not the requested repository. Never rename,
overwrite or delete an existing repository as a side effect of setup.
Record the actual seed revision and template URL in the generated application's
handoff. A template copy may not retain its parent's commit history; do not
invent lineage from the generated repo's first commit.

After creating the repository, replace the template's identity:

1. Set the package name and its `repository.url`, `bugs.url` and `homepage`.
   Keep `"private": true` unless intentionally publishing an npm package;
   that field does not control GitHub visibility.
2. Update the README's identity/links and the security-advisory URL in
   `SECURITY.md` to the new owner/repository.
3. Confirm the new license and attribution for dependencies/assets.
4. Confirm `git remote -v` points to the intended repository before pushing.
5. Configure the new repository's Actions permissions, branch rules, required
   checks, private vulnerability reporting and desired merge policy. A template
   gives you files, not proof that repository settings are configured.

Use the package manager to update metadata; replace the example values first:

```sh
npm pkg set name=minerva \
  repository.url=git+https://github.com/brandyn-s/minerva.git \
  bugs.url=https://github.com/brandyn-s/minerva/issues \
  homepage=https://github.com/brandyn-s/minerva#readme
```

Use the pinned Node/npm commands from the README and keep the lockfile's root
package metadata consistent when changing the package name. Never paste real
credentials into commands destined for an issue, handoff or commit.

## Fresh development sessions

Follow the six milestone prerequisites in [build-prompts.md](./build-prompts.md).
The 32 blocks are work packages, not 32 mandatory sessions. IDs 29-30 are retired
and the remaining IDs retain their meaning. Start GPT-6 Astra
in Codex in the new application's directory; read relevant current code, the
contract index, capability evidence and the short `docs/HANDOFF.md`.
No source application, prior conversation or external repository is needed.

The foundation choices in [DECISIONS](./product/DECISIONS.md) are already made:
React Flow with custom cards/application layouts, Drizzle with explicit SQL
migrations, and persisted-progress polling over the existing durable execution
contract. Add dependencies when their application slices need them. Do not start
a fresh architecture-selection exercise; plan only a consequential unresolved
decision or respond to evidence that invalidates a selected approach.

Keep existing working code. If a prerequisite is missing, complete or report
that prerequisite rather than introducing a second architecture. Finish one
outcome before advancing, or checkpoint it for a fresh session. Do not require
a long multi-compaction conversation.

Both Astra and Fable start at medium effort. Permissions, network access and optional
runner features are configured by the user, not overridden by the template.
Use relevant official framework documentation for the installed version.

## Resuming an existing checkpoint

Put the absolute worktree path inside the actual copyable resume prompt, not
only in surrounding prose. Open the terminal there first. A branch/commit name
does not locate an unpushed worktree on another machine.

Replace every placeholder in this compact launch block:

```text
Worktree: <absolute-existing-worktree-path>
Branch and expected checkpoint: <branch> at <commit-sha>
Instruction source, only if reconciliation is requested: <repo/path> at <sha>

Use the exact worktree above. Verify its identity and changes without resetting
or recreating anything. If it is unavailable, report that specific mismatch;
do not search the whole home directory for substitutes.
Read docs/HANDOFF.md, the relevant capability rows and current local contracts.
If instructed, reconcile the relevant process-file delta once from the pinned
source, preserving application-specific requirements and evidence. Then leave
unrelated documentation alone while implementing.

Outcome: <one starting state, user action and observable result>
Exclusions: <features and services outside this increment>
Failure boundary: <the specific conflict or failure that must remain visible>

Find the existing UI caller and backend entry point, then implement and exercise
that connected path. Further discovery must answer a concrete unresolved
question. Fix the latest observed failure and re-exercise the affected journey.
Finish with a committed reviewable checkpoint and a short factual handoff.
If blocked or partial, say exactly what remains; do not claim the package done.
Do not launch Fable automatically or advance to another increment.
```

Read only the instruction delta needed for the requested reconciliation; do not
repeatedly diff the whole seed while debugging. If a known file lookup fails,
inspect that directory's actual filenames or use a scoped alternative tool.
Missing glob results in a hidden worktree are not a reason to scan the home
directory. The handoff's exact path and the repository's current tree are the
starting evidence.

## Separate builder and critic

Run Astra in Codex in the writable application checkout. At a review boundary,
commit the intended candidate and provide its exact SHA. The operator opens
Fable 5.1 in a separate Claude terminal/client with a separate checkout of that
SHA, used read-only for tracked application files. `CLAUDE.md` supplies the
working agreement; it does not select or automatically launch the model.
The builder does not invoke its own reviewer without an explicit request or
specific agreed exception. No new orchestration tool is needed.
Confirm all intended source files are in that commit; a runnable dirty tree
with missing untracked files is not a reproducible candidate.

An ordinary detached Git worktree is sufficient; for example, from the build
checkout, substitute the actual candidate SHA and an unused review directory:

```sh
git worktree add --detach ../minerva-review <candidate-sha>
```

Two terminals using the same checkout do not isolate files. Review commands
may create ignored build/test output, but must not change tracked app source.
Use separate ports and isolated synthetic data when a reviewer runs the app;
do not let review startup, migrations or teardown affect the builder's server
or working data. Do not change the candidate during review. A correction is
a new candidate revision for the targeted recheck.

Keep each handoff in the existing HANDOFF/capability record, with these fields:

```text
Outcome and boundary: what should work; what this pass excludes.
Candidate: exact commit, absolute checkout path, startup command and one representative journey.
Evidence and gaps: written/integrated/local/live/reviewed/accepted/deployed facts,
                  with mode, revision, known failures and unverified boundaries.
Review question: the concrete behavior or decision that needs independent scrutiny.
Next step: fix, review, owner decision or next bounded outcome; not automatic expansion.
```

Fable reads the contract and exercises the candidate before consuming the
builder's conclusions. M5 exercises browser instruments and outputs.
A partial checkpoint is useful but never silently completes its package or
milestone. Default to one review per planned boundary plus focused recheck; repeat only for remaining
material failures or new evidence, not to chase agreement between models.

## Standard checkpoint output

Every implementation checkpoint ends with a concise operator handoff in the
final response, even if `docs/HANDOFF.md` already contains the evidence.
Include the delivered outcome and partial/package state, exact committed SHA,
branch, absolute build-worktree path, clean/dirty state, handoff location and
runtime mode/startup instructions where applicable. State whether the candidate
is local-only, published, reviewed or deployed without conflating those facts.
Keep evidence/findings in the existing handoff and capability record; do not
create another status file.

Then identify the next session and provide its copyable launch command and
bounded prompt. Use the relevant blocks below, filling every known value in
the actual output; the placeholders belong only in this template. Machine-local
paths belong in the operator response, not public template content. Missing
inputs or ungranted authorization must be stated, not invented. If review is
next, include the Fable block and explain that a later Astra session will handle
confirmed findings or a separately authorized next outcome. Do not output an
unconditional next-increment prompt before that direction exists.

A handoff supplies context, not authorization. Opening a fresh session with
`docs/HANDOFF.md` alone is not permission to advance. The operator starts the
session and supplies the bounded instruction. Review is next at a planned
review boundary or when explicitly requested, not automatically after every
increment. If awaiting a decision, say so and label any proposed prompt
**Not authorized yet**. Never use a bare "continue M2" or "finish the milestone".

### Fable review launch and prompt

Offer these commands for the operator to run; do not create the review checkout
or launch Fable automatically. Use an unused absolute review path. If a review
checkout already exists, verify its exact candidate instead of overwriting it.

```sh
git -C "<absolute-build-worktree-path>" worktree add --detach "<absolute-review-checkout-path>" <candidate-sha>
cd "<absolute-review-checkout-path>"
```

The operator opens Fable 5.1 in Claude at medium effort in that separate
checkout, then pastes:

```text
Review checkout: <absolute-review-checkout-path>
Exact committed candidate: <candidate-sha>
Review scope: <one outcome and affected capability IDs, or the planned milestone boundary>
Review question: <specific behavior or failure boundary to scrutinize>
Runtime/startup and synthetic data: <mode, exact command, separate port and isolated data instructions, or not applicable>
Exclusions: <out-of-scope features; no paid calls unless explicitly authorized>

This is an operator-started Fable review, read-only for application source.
Verify the checkout and exact candidate; do not reset or recreate anything.
Read AGENTS.md, docs/HANDOFF.md, relevant docs/product/CAPABILITIES.md rows
and local contracts. Form your view from the contract and behavior before
consuming the builder's conclusions. Use the applicable standard review prompt.
Exercise the bounded journey and relevant failure case using existing checks.
Do not alter the builder's server or working data. Report material findings
with evidence, locations and affected revision; distinguish optional suggestions
and unverified boundaries. Return findings to the operator in this session.
Do not implement fixes, expand scope, claim user acceptance or start another agent.
```

### Astra return or next-outcome prompt

After review, return to the existing writable build worktree, not the read-only
review checkout. The operator chooses either named confirmed findings or one
new authorized user-action outcome; the prompt must not leave both as automatic
branches. Reference the actual findings returned by Fable, not an invented
review-notes file. When no review was due, use the same bounded resume form.

```sh
cd "<absolute-existing-build-worktree-path>"
```

The operator starts a fresh Astra session at medium effort and pastes:

```text
Worktree: <absolute-existing-build-worktree-path>
Branch and expected checkpoint: <branch> at <commit-sha>
Authorized task: <fix named confirmed findings OR implement one explicitly authorized next outcome>
Review findings, if applicable: <paste bounded findings with evidence and candidate SHA; otherwise none>
Outcome: <starting state, user action and observable result>
Exclusions: <features, services and later increments outside this task>
Failure boundary and stopping evidence: <specific case and smallest decisive journey>
Runtime/startup: <mode and exact command, or not applicable>

Use this existing worktree. Verify identity and open changes without resetting,
regenerating or replacing the app. Read AGENTS.md, docs/HANDOFF.md, relevant
docs/product/CAPABILITIES.md rows and local contracts. Preserve requirements,
evidence, open edits and selection where applicable.
For fixes, reproduce and address the named confirmed findings; record dispositions.
Implement only the authorized outcome through existing UI/backend operations.
Exercise its relevant journey/failure case and existing required checks.
Finish with a committed reviewable checkpoint and the standard operator handoff,
including the next applicable copyable prompt. Keep partial milestones partial.
Do not launch Fable automatically or advance to another increment.
```

## Integrate before expanding

Choose a user action with starting state, expected observable result, explicit
exclusions and its relevant failure boundary. Build the smallest connected path
and exercise it before moving to the next increment. The collaborator sequence
in packages 11-12 is the worked example: selected-card discussion, one typed
action, bounded voice transport, continuity, the same action through speech,
then recovery and the combined journey. Each checkpoint remains partial until
the package's requirements are met; it does not add a review ceremony per step.

Probe external authentication/transport/settings early when they could invalidate
the design. Use a small explicitly authorized live case with appropriate
credential handling, bounds and accounting, not an unprotected throwaway endpoint.
Keep subsequent iterations fixture-backed where sufficient. Report a missing
credential or access decision instead of building around an unverified assumption.
Do not add a new measurement system, large delegation or architecture layer to
manage an increment that should simply be split.

Close out against observed results: the relevant user journey, the named
failure case and the existing checks. Inspect the failure output before another
edit. A command starting or producing many lines is not its outcome. A rough
timebox can prompt a partial checkpoint, but cannot justify dropping required
behavior, claiming a pass or starting another measurement campaign.

## Local configuration

Add database/access/model dependencies only when their implementation slice
needs them. Document each variable in `.env.example` without a live value.
Use a local Postgres path or explicitly authorized managed service; lack of
configuration must not silently substitute browser-only persistence.

Synthetic fixtures can support offline development, but label them clearly.
Application model calls need explicit authorization and bounded cost admission.
Do not equate a fixture-backed flow with a live provider integration.

Validate Host/Origin and reject cross-origin mutations on internal endpoints;
do not enable permissive CORS. A local no-sign-in app must not let an unrelated
website read its workspace or trigger paid work. Keep these request protections
separate from user accounts. Document which local services must remain running:
closing the browser does not cancel durable work, but stopping local services
halts execution. Recover saved checkpoints and reconcile work after restart.

## Optional private hosting

Local operation is sufficient for prototype release. Do not provision a hosting
or access platform as a prerequisite. Create a separate Vercel project only with
authorization and a suitable existing private boundary. Keep the application root
unambiguous, and configure development/preview/production environments explicitly.
Preview data must not silently mutate production workspaces.

Public code does not mean public application access. Use an existing suitable
private boundary that preserves no-sign-in use
and denies outside access. Do not add app accounts, platform sign-in requirements
or access infrastructure for this prototype. A flag, private repo or obscure URL
is not a boundary. Verify preview and production/custom-domain access separately;
keep unsupported addresses disabled. If no suitable boundary exists, stay local.
Check a real no-sign-in browser journey and denial from outside the private
boundary, not merely a successful build status.

Before enabling paid work, confirm the budget period, included charges, text/
voice credentials, database plan and hosting/workflow cost. The provisional
$100 allowance is cumulative for the application, not a new allowance for
every API key. Do not change shared-team budgets or purchase credits without
authorization. See [Vercel facts](./vercel-facts.md).

## Review and documentation ownership

Use the separately initiated Fable session described above on a stable candidate revision.
Reviews do not edit application source; isolated synthetic journeys are allowed
and paid calls need explicit allowance. Record findings and dispositions in
the capability matrix, not a new diary per model. M2 includes an interim review;
M5 reviews browser instruments/outputs; M6 reviews the candidate and confirms
local operation afterward. If private hosting is separately authorized, confirm
that serving outcome too. Neither model supplies the user's experience acceptance.
If a fix loop stalls, name the unresolved assumption and return a bounded
decision rather than reopening the entire architecture. Keep exploratory
measurement proportional to the question; ordinary delivery does not need
a timing harness or a new reporting system.

The generated repository is authoritative for product docs and standard prompts.
The seed remains independently maintained and content-free. Do not silently
sync application features or user evidence back into it. CONTRACT is an index,
SPEC requirements, CAPABILITIES evidence, and HANDOFF navigation. Exported
HTML/Downloads snapshots must name their source revision and are never edited
as competing specifications.
