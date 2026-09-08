# Vercel facts this template depends on

Measured or read from vendor documentation during the minerva_v2 build on 2026-09-07 and its review. Re-verify a row before relying on it; vendor behaviour changes.

| Fact | Consequence for a build | Source |
|---|---|---|
| Connecting a Git repository auto-deploys every push, and pushes to the production branch create production deployments with a public alias | A private repo does not make the deployment private; `--allow-git-deploys` exists to make this consequence explicit | Vercel Git docs; measured on `minerva-v2` |
| Vercel Authentication for production deployments is not available on every plan | "Only protected previews" is a posture you must verify against `ssoProtection.deploymentType`, not assume | PATCH response `invalid_sso_protection`, 2026-09-07 18:45Z |
| Configuration above the project's Root Directory is ignored | A repository-root `vercel.json` is inert once Root Directory points at a subdirectory; headers and framework settings silently stop applying | Vercel Root Directory docs; production headers measured absent |
| Environment variables are scoped per target (`production`, `preview`, `development`) | A variable set for Preview only leaves Production without it; an app whose access control is "no Redis in production" is one env-scope change from open | `vercel env ls` readback |
| `vercel env add` prompts for an optional Git branch even with piped input | Script env provisioning through the REST API, not the CLI | Build log 18:45Z |
| The build-time `VERCEL_OIDC_TOKEN` is not the Function runtime token | Read the runtime token inside the request handler; a build-time value fails at first real request | Build log 19:00Z |
| AI Gateway budgets are soft caps: admitted requests can exceed the limit, and BYOK spend bypasses them | Disclose "soft budget", never "hard cap"; a hard bound needs your own admission ledger | Gateway budgets docs; build log 18:42Z |
| Deployment `READY` means the build finished, not that Functions start or routes answer | Read a real route after `READY` before calling a deploy successful | Build log 19:58Z |
| Redirects and 401/403 from a protected deployment are access states, not application failures | Never follow a redirect and parse the body as JSON; classify 302/401/403 as access-blocked | Build log 19:21Z |
| Realtime voice through AI Gateway requires a Gateway API key; the deployment OIDC token is not sufficient | Realtime needs a key scoped to the project, minted server-side, never sent to the browser | Build log 22:00Z |
| GitHub rulesets, secret scanning, and push protection are unavailable on a private repository under the Free plan | On a private repo the PR lane is a habit, not a control | 403 "Upgrade to GitHub Pro or make this repository public" |
