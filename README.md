# Minerva

This repository is the pre-clock launchpad for the Minerva hackathon build. R0
infrastructure has passed; product implementation has not started. The current
tree intentionally provides no product capability, provider route, workspace
store, database, authentication, analytics, or deployment.

Start with the [two-hour launch plan](./HACKATHON.md) and its prewritten
[demo contract](./DEMO.md). They compress the hackathon into a useful experience
slice without claiming that the approved multi-gate prototype roadmap is done.

The authority chain and current authorization live in [AGENTS.md](./AGENTS.md)
and [ROADMAP.md](./ROADMAP.md). Tracked gate evidence is indexed in
[evidence/README.md](./evidence/README.md).

## R0 isolation

- GitHub: private `brandyn-s/minerva`, branch `main`
- Vercel: `thalient/minerva` (linked configuration only; no deployment)
- Reserved browser database namespace: `minerva.workspace.prototype.v1`
- Admission namespaces: `minerva-development`, `minerva-preview`, and
  `minerva-production`
- Provider routes: absent and disabled in every Vercel environment

## Local baseline

Use the exact Node and npm versions in `.nvmrc` and `package.json`, then install:

```sh
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
