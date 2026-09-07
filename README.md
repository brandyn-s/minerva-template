# Minerva

R0 infrastructure has passed. R1 and all product behavior remain unauthorized.
This repository does not provide a product capability, provider route,
workspace store, database, authentication, analytics, or deployment.

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
