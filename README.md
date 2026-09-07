# Minerva

This repository is the pre-clock launchpad for the Minerva hackathon build. R0
infrastructure has passed; product implementation has not started. The current
tree intentionally provides no product capability, provider route, workspace
store, database, authentication, analytics, or deployment.

Start with the [hackathon launch plan](./HACKATHON.md) and its prewritten
[T+120 demo contract](./DEMO.md). The working prototype is frozen at two hours;
an optional evidence-directed refinement window may continue to T+480 without
claiming that the approved multi-gate prototype roadmap is done.

The authority chain lives in [AGENTS.md](./AGENTS.md) and
[ROADMAP.md](./ROADMAP.md). The current operating state is
[CURRENT_GATE.md](./CURRENT_GATE.md); consequential decisions and gate
closeouts live in [JOURNAL.md](./JOURNAL.md). Evidence handling rules are in
[evidence/README.md](./evidence/README.md).

## R0 isolation

- GitHub: private `brandyn-s/minerva`, branch `main`
- Vercel: `thalient/minerva` (linked configuration only; no deployment)
- Reserved browser database namespace: `minerva.workspace.prototype.v1`
- Admission namespaces: `minerva-development`, `minerva-preview`, and
  `minerva-production`
- Provider routes: absent and disabled in every Vercel environment

## Local baseline

Use the exact Node and npm versions in `.nvmrc` and `package.json`. The retained
secret guard also requires `gitleaks` 8.30.1 on `PATH`. Verify it, then install:

```sh
gitleaks version
npm ci
```

Before starting the development server, link the canonical Vercel project, pull
the development environment, and verify required names without exposing values.
Then run:

```sh
npm run check
npm run dev
```

`npm run check` is bounded infrastructure evidence, not product proof.

The pinned Vercel CLI currently requires patched transitive overrides in
`package.json`. Run `npm run security:audit` after every Vercel CLI update. An
upgrade may remove an override only when the unlocked dependency graph audits
cleanly and the authenticated project inspection still succeeds.

## Pre-clock boundary

Before the event clock, changes are limited to product documents, locked
tooling, content-free infrastructure, evidence, and planning. The domain model,
browser repository, canvas, AI operations, Voice, and deployable product begin
at T+0. The clock-start commands and feature cut lines are in
[HACKATHON.md](./HACKATHON.md).
