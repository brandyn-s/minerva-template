# Starting a new Minerva application

The template provides a runnable shell, not a live database, canvas, AI
integration or deployment. Use a fresh project repository and keep application
content out of this template.

## Repository identity

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
npm pkg set name=your-project \
  repository.url=git+https://github.com/YOUR-OWNER/YOUR-REPO.git \
  bugs.url=https://github.com/YOUR-OWNER/YOUR-REPO/issues \
  homepage=https://github.com/YOUR-OWNER/YOUR-REPO#readme
```

Use the pinned Node/npm commands from the README and keep the lockfile's root
package metadata consistent when changing the package name. Never paste real
credentials into commands destined for an issue, handoff or commit.

## Fresh development sessions

Choose one complete block from [build-prompts.md](./build-prompts.md). Start
GPT-6 Astra in the new application's directory. The prompt supplies product
context; read only relevant current code and the short `docs/HANDOFF.md`.
No source application, prior conversation or external repository is needed.

Keep existing working code. If a prerequisite is missing, complete or report
that prerequisite rather than introducing a second architecture. Finish one
outcome before advancing, or checkpoint it for a fresh session. Do not require
a long multi-compaction conversation.

The model defaults to medium effort. Permissions, network access and optional
runner features are configured by the user, not overridden by the template.
Use relevant official framework documentation for the installed version.

## Local configuration

Add database/session/model dependencies only when their implementation slice
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

Public code does not mean public application access. Configure the app's private
session boundary; deployment protection availability depends on the plan.
Check a real authenticated journey, not merely a successful build status.

Before enabling paid work, confirm the budget period, included charges, text/
voice credentials, database plan and hosting/workflow cost. The provisional
$100 allowance is cumulative for the application, not a new allowance for
every API key. Do not change shared-team budgets or purchase credits without
authorization. See [Vercel facts](./vercel-facts.md).
