# Next.js REST deployment helper

Run from the **product checkout**, after launch authorization and the implementation clock starts.
No command runs automatically. New Git-linked provisioning requires
`hosting.creationAuthorized`, `authorization.deploy`, and
`hosting.gitDeploymentsAuthorized`; existing compatible projects may be read
without those mutation permissions. Set `VERCEL_TOKEN` in the environment, never in arguments or receipts.
All API calls use the explicitly selected launch team slug; personal scope is unsupported.

```sh
node scripts/deploy.mjs project --file .minerva/launch.json --project product-name --team team-slug
node scripts/deploy.mjs deploy --file .minerva/launch.json --project product-name --team team-slug --sha FULL_40_HEX_SHA
node scripts/deploy.mjs observe --file .minerva/launch.json --project product-name --team team-slug --deployment dpl_ID --path /workspace --expect-text EXPECTED_MARKER --stable-origin https://product-name.vercel.app
```

`deploy` also accepts the three runtime observation options. Without all three, READY is **incomplete**,
not runtime success. Exit codes: 0 verified project/HTTP contract; 2 incomplete/build/access/runtime result;
1 invalid input or API/integration blocker. `execute(argv, options)` exposes injectable fetch, runner,
clock, sleep, attempts and timeout for synthetic tests.

## Gates and resumability

- Refuses template destinations, missing/mismatched team, unrelated projects, GitHub links or Next.js pins.
- Existing compatible projects are read-only reuses. Only a confirmed 404 permits authorized project
  creation. A successful create must be read back; 403 is never interpreted as absence.
- Creation links exactly the configured GitHub repository. **Vercel's Git integration automatically
  deploys subsequent pushes, including default-branch production deployments**;
  the separate `--allow-git-deploys` launch permission enforces acknowledgement
  of this consequence before provisioning. Missing integration
  access is an owner setup blocker, never bypassed.
- Install/build commands must match `vercel.json`: Node 24.20.0/npm 12.0.2 using `npm ci`/`npm run build`.
  Deploy requires clean Git status, matching GitHub origin and exact HEAD. Only Git-source commits are
  sent; no files are uploaded. No Vite or standalone-server substitution.
- Deployment target is omitted: preview, not production. No alias assignment, protection changes,
  visibility changes or custom domain mutation occurs.
- `.minerva/deploy-TEAM-PROJECT-SHA.json` is exclusively created **before** POST. Reruns observe its known
  deployment ID. An interrupted/ambiguous POST without an ID blocks further POSTs. Reconcile in Vercel
  manually; do not delete receipts and blindly retry. Each subsequent committed
  revision gets a separate receipt so the shell, card, and creative-loop
  iterations can deploy without discarding earlier evidence. Project creation has a separate intent receipt.
- Observation writes `.minerva/observe-DEPLOYMENT.json`, never overwriting deployment ownership intent.

## Evidence and boundaries

Metadata polling defaults to ten attempts within 60 seconds (maximum injected deadline 120 seconds).
Read-only 429 retries respect Retry-After within that deadline; POSTs are never retried.
Events are non-following, limited to 100; all response bodies are bounded to 1 MiB.
Receipts retain observation time, source/project/deployment identity, readiness, event-type counts, HTTP statuses and marker
match booleans—not raw logs, bodies, credentials, redirect targets, marker text or personal names.

Runtime reads are anonymous, omit credentials and never follow redirects. Only exact HTTPS
single-label `*.vercel.app` origins are supported. The immutable hostname must come from the verified
deployment, and the stable hostname must resolve through the alias API to that project/deployment.
Custom domains, credentials, query strings and fragments are refused. Missing/wrong aliases remain incomplete.
Redirects/401/403 are access-blocked (including SSO), not application build failures. READY 404s receive
bounded propagation retries. 500s and wrong markers are distinct runtime outcomes. No protection bypass.

A 200 HTML response containing the supplied marker proves only that specified HTTP contract.
It does **not** establish browser interaction, comprehension, reviewer acceptance, or whole-product readiness.
Unknown schemas/source identity fail closed. Owner integration setup and real-cloud compatibility remain
unverified until an explicitly authorized live run.

## Vendor contract

[Vercel REST API reference](https://vercel.com/docs/rest-api/reference):
`POST /v11/projects`, `GET /v9/projects/{idOrName}`, `POST /v13/deployments`,
`GET /v13/deployments/{idOrUrl}`, `GET /v3/deployments/{idOrUrl}/events`,
`GET /v4/aliases/{idOrAlias}`. Every request appends `slug`.
See [authentication](https://vercel.com/docs/rest-api/reference/welcome#authentication)
and [deployment protection](https://vercel.com/docs/deployment-protection).
Bearer authorization is team/project constrained; the operation schema does not declare separate scope strings.

Synthetic validation: `node --test tests/deploy.test.mjs`. No live API calls are needed.
