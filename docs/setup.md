# Starting a new Minerva application

The template provides a runnable shell, not a live database, canvas, AI
integration or deployment. Use a fresh project repository and keep application
content out of this template.

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
The 34 blocks are work packages, not 34 mandatory sessions. Start GPT-6 Astra
in Codex in the new application's directory; read relevant current code, the
contract index, capability evidence and the short `docs/HANDOFF.md`.
No source application, prior conversation or external repository is needed.

Keep existing working code. If a prerequisite is missing, complete or report
that prerequisite rather than introducing a second architecture. Finish one
outcome before advancing, or checkpoint it for a fresh session. Do not require
a long multi-compaction conversation.

Both Astra and Fable start at medium effort. Permissions, network access and optional
runner features are configured by the user, not overridden by the template.
Use relevant official framework documentation for the installed version.

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
Candidate: exact commit, checkout, startup command and one representative journey.
Evidence and gaps: written/integrated/local/live/reviewed/accepted/deployed facts,
                  with mode, revision, known failures and unverified boundaries.
Review question: the concrete behavior or decision that needs independent scrutiny.
Next step: fix, review, owner decision or next bounded outcome; not automatic expansion.
```

Fable reads the contract and exercises the candidate before consuming the
builder's conclusions. M5 retains its external-client cold-start exception.
A partial checkpoint is useful but never silently completes its package or
milestone. Default to one review per planned boundary plus focused recheck; repeat only for remaining
material failures or new evidence, not to chase agreement between models.

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

## Local configuration

Add database/access/model dependencies only when their implementation slice
needs them. Document each variable in `.env.example` without a live value.
Use a local Postgres path or explicitly authorized managed service; lack of
configuration must not silently substitute browser-only persistence.

Synthetic fixtures can support offline development, but label them clearly.
Application model calls need explicit authorization and bounded cost admission.
Do not equate a fixture-backed flow with a live provider integration.

## Vercel

Create a separate project only with authorization. Keep the application root
unambiguous, and configure development/preview/production environments explicitly.
Preview data must not silently mutate production workspaces.

Public code does not mean public application access. Use platform authentication
without a second application owner-password screen. Deployment protection
availability depends on the plan and address: a flag or private repo is not
authentication. Verify preview, production/custom-domain and machine-client
access separately. Keep unsupported deployment targets disabled.
Check a real authenticated journey, not merely a successful build status.

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
M5 begins with public interface instructions alone; M6 reviews before publication
and confirms afterward. Neither model supplies the user's experience acceptance.
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
