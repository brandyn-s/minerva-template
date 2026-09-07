# Launch CLI

Run from the template checkout. No dependencies beyond Node, npm, Git, and (for
online commands) authenticated GitHub CLI are needed.

```sh
node scripts/launch.mjs init --repo demo-owner/launch-sample --profile full
node scripts/launch.mjs preflight --file .minerva/launch.json
node scripts/launch.mjs preflight --file .minerva/launch.json --online
node scripts/launch.mjs create --file .minerva/launch.json --directory ../launch-sample
# Only after an interrupted operation with proven repository ownership:
node scripts/launch.mjs create --resume --file .minerva/launch.json --directory ../launch-sample
```

To select the exact pinned toolchain for preflight:

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run launch -- preflight --file .minerva/launch.json
```

The launcher may download pinned packages if they are not cached. The preflight
itself makes no network requests unless `--online` is supplied.

## Receipt

`init --repo OWNER/NAME --profile full|hackathon` accepts:

| Option | Default / meaning |
| --- | --- |
| `--file PATH` | `.minerva/launch.json`; exclusive creation, never overwritten |
| `--visibility private\|public` | `private`; public must be explicit |
| `--allow-deploy` | Omitted means no deployment authorization |
| `--allow-hosting` | Omitted means no hosting-creation authorization; records permission only |
| `--allow-git-deploys` | Omitted means no Git-triggered deployment authorization, including default-branch production deployments |
| `--spend-usd N` | `0`; nonnegative USD cap, at most two decimal places |
| `--vercel-team SLUG` | Optional intended team; this option alone does not authorize hosting |

Invoking `init` records the owner's selected scope and first-implementation
instruction. It does not invent approval or claim live permissions. Local safe
implementation can proceed while hosting, credentials, deployment, and spending
remain gated. The receipt records `brandyn-s/minerva-template`, current Git HEAD,
Vercel AI Gateway's OpenAI-compatible `/v1` path, and the fixed candidate
`openai/gpt-5.4-mini`. Candidate configuration is not availability proof.
Credentials and unknown configuration fields are rejected; never put secrets in
the receipt. Receipts belong in ignored `.minerva/`; custom paths are the
operator's responsibility.
Git-linked Vercel project creation requires all three explicit permissions:
`--allow-hosting --allow-deploy --allow-git-deploys`. Hosting permission alone
cannot silently enable deployment on future pushes. Older receipts without the
Git permission field are treated as not authorized for that action.

## Read-only preflight

`preflight [--file PATH] [--online]` emits a JSON `readiness` table. Offline is
the default and invokes only a bounded local npm version probe. It checks exact Node/npm pins across
`.node-version`, `.nvmrc`, package engines, `packageManager`, `.npmrc`, and
Vercel install/build commands. Online adds read-only GitHub API probes for the
exact source/revision and target, privacy/non-template flags, populated default
ref, rulesets, vulnerability reporting, Actions permissions, alerts, commit
statuses, and up to three deployment records with their latest statuses.
Combined commit and latest deployment states are exposed only through fixed
allowlists; missing or malformed states are explicitly unverified. No status
bodies, URLs, or logs are emitted.
The active Node version is checked separately. Active npm is verified by
executing `npm_execpath` with the running Node executable and `--version` when
available, otherwise by executing `npm --version` from PATH (including direct
Node CLI use). These are argument-array executions, not shell interpolation.
Inherited `npm_config_user_agent` is never version evidence: nested launchers
can retain an outer npm's metadata. A selected executable that fails, a
malformed version response, or a version mismatch blocks readiness; no PATH
fallback conceals a failed selected executable. Missing PATH npm is unverified,
not ready. Only successful, exact version-only output is accepted; executable
paths and diagnostic output are not printed. The operator controls the local
executable/PATH trust boundary; this is version verification, not binary attestation.

HTTP 404 means absent **or hidden**, not proven nonexistence. HTTP 403 means
unavailable permission, entitlement, or rate limit; authentication and transport
failures are distinct. Independent probes continue. Blocked pins/privacy or
authentication/transport failures yield a nonzero CLI exit; unverified or
unavailable gates remain explicit even when exit is zero. Never interpret exit
zero as release approval. Positive spend is `authorized-not-executed`: the
receipt records a budget instruction, not a technically enforced spending cap.
No raw API bodies, environment values, or tokens are
printed. Gateway credentials are checked for presence only using
`AI_GATEWAY_API_KEY` or `VERCEL_OIDC_TOKEN`.

Failed API observations and optional-control results include a numeric
`httpStatus` (or `null` when no unambiguous HTTP status is available) and a fixed
`errorClass`, plus sanitized evidence:

| Reported HTTP status | `errorClass` |
| --- | --- |
| 400, 422 | `validation-failure` |
| 401, or recognized CLI authentication diagnostic | `authentication-failure` |
| 403 | `permission-entitlement-or-rate-limit` |
| 404 | `absent-or-hidden` |
| 409 | `conflict` |
| 429 | `rate-limited` |
| 5xx | `server-failure` |
| Other 4xx | `http-failure` |
| Missing, malformed, or conflicting HTTP status | `transport-or-unclassified-failure` |

These labels describe reported failure categories, not the underlying cause or
permission proof. A missing status cannot distinguish transport failure from an
unclassified CLI/API error. Raw stdout/stderr, response bodies, request URLs,
tokens, and provider error messages are never included. Existing conservative
`state` values remain unchanged: validation, rate-limit, server, and unclassified
failures still have `state=transport-or-api-failure`; 409 on a Git ref probe
retains `empty-repository`. Classification does not authorize automatic retries.

Local `.vercel/project.json` is not proof that its project exists. Hosting
integration and linkage remain **unverified**, including online mode. GitHub
status/deployment records are not live hosting or successful-inference proof.
Separate live readbacks and authorized smoke-test evidence are still needed.

## Explicit repository creation

`create --file PATH --directory PATH` authorizes only creation of the configured
new GitHub repository and its repository controls. Without `--resume`, it refuses an existing
destination, existing repository, source/destination equality, invalid receipt,
or source HEAD drift before mutation. A GitHub 404 can hide a repository; GitHub
creation must still succeed and will not overwrite it.

Creation uses `gh repo create OWNER/NAME --template brandyn-s/minerva-template
--private` (or explicit `--public`), **without** `--clone`. Source revision must
match the live source default ref because GitHub template generation cannot pin
an arbitrary commit. Generation is not atomic with that readback.

The tool polls at most ten times (one-second pauses, a 60-second poll deadline,
15-second timeout per command) for a populated default-branch Git ref.
Repository existence alone is not initialization. It verifies exact identity,
privacy, and `is_template=false`, applies squash-only merge/branch-deletion,
issues enabled, wiki/projects disabled, and read-only Actions workflow-token
controls once, and requires their readback. Actions must also be enabled with
`allowed_actions=selected` and `sha_pinning_required=true`; selected actions
must have `github_owned_allowed=true`, `verified_allowed=false`, and
`patterns_allowed=[]`. Every required setting needs an independent exact
readback; any unavailability or mismatch stops before clone.
Reporting, vulnerability alerts, automated security fixes, CodeQL default setup
(`state=configured`, `query_suite=default`), secret scanning/push protection, and the
exported `.github/rulesets/main.json` are optional entitlement-sensitive controls;
each is attempted once and read back when supported. Optional failures are
reported independently, without changing visibility or weakening controls.
Ruleset server-owned top-level fields are stripped.

Only then does the tool recheck privacy and clone. Any inherited `.vercel/`
directory is removed from a new clone. The immutable permission receipt is
copied to the product's ignored, untracked `.minerva/launch.json` if absent;
a differing receipt is never overwritten. No Vercel project, link, deployment,
credential retrieval, or model call is performed. Arrange a **separately
authorized hosting step**, using `--allow-hosting` at initialization when desired.

## Interrupted creation and explicit resume

Machine-only state lives under ignored `.minerva/launch-operations/` in the
original checkout. It records a full launch-config hash, exact destination,
repository identity/verified numeric ID, and progress flags/IDs—not product
content, credentials, transcripts, or routine timing events. Keep the original
receipt, operation state, and destination unchanged.

`create --resume --file PATH --directory PATH` can resume default-ref readiness
or failed controls **only** for a repository created by this operation, with
fresh exact identity, numeric ID, privacy, and non-template readbacks. It never
calls repository creation again or changes visibility. Required controls are
reapplied and read back; optional controls remain independently reported.
Rulesets are read by recorded ID or bounded inventory before any POST, avoiding
duplicates. An ambiguous POST with no matching readback requires reconciliation.
Diagnostic detail does not relax that rule: validation failures, 429, 5xx, and
transport/unclassified failures retain the pending POST checkpoint. The existing
401/403/404 path clears that checkpoint, but only an explicit resume with the
usual ownership and inventory checks can attempt another POST.

An existing directory is accepted only after this operation recorded a clone
attempt and Git proves its exact root, expected GitHub origin, current default-ref
HEAD, and clean tracked/untracked worktree. It is reused without reset, checkout,
overwrite, or removing existing hosting metadata; Git optional index writes are
disabled. A missing permission receipt may still be exclusively copied. Dirty,
partial, unrelated, or conflicting checkouts are preserved and rejected—not
repaired automatically. An interrupted clone retaining unverified `.vercel/`
metadata requires manual reconciliation rather than inheriting or deleting it.
A completed checkout that disappears is not re-cloned.

Creation/resume uses an exclusive local operation lock, released on ordinary
success/failure. After a crash:

1. Inspect the `.json.lock` PID and verify that **no owning launch process is
   running**; do not remove a live lock or rely on PID absence alone after reuse.
2. Inspect the original config binding, exact destination, and repository ID.
   A null/missing ID, ambiguous creation response, or mismatched remote identity
   requires manual reconciliation. **Do not fill in a guessed ID, delete the
   receipt to force a retry, or blindly invoke creation again.**
3. Only after confirming the operation is stopped, remove its stale `.lock`.
   If `.json.next` remains, inspect it alongside the durable `.json`; do not
   promote unverified ownership. Reconcile ambiguous state manually.
4. With durable ownership proven and no conflicting checkpoint write, invoke
   the same command with `--resume`. Preserve any incomplete local work.

These local receipts are an operator-local trust boundary, not signed proof.
Live observations are separate and non-atomic. Failures can leave resources
behind; unknown ownership intentionally requires manual reconciliation rather
than automatic adoption.

Validation: `node --test tests/launch.test.mjs tests/deploy.test.mjs` uses isolated local fixtures and
an injected fake command runner, without network or external mutations.
