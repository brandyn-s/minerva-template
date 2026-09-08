# Minerva

[![CI](https://github.com/brandyn-s/minerva-template/actions/workflows/ci.yml/badge.svg)](https://github.com/brandyn-s/minerva-template/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A product contract and thin runnable starter for a private **spatial idea
studio**: explore alternatives with Searchlight, manipulate their relationships
on a canvas, and talk with a concurrent voice collaborator.

**Implemented:** a pinned Next.js shell and CI. **Not implemented:** workspace
persistence, canvas, AI operations, voice, workflow execution or deployment.
Keep this template content-free; build the application in a new repository.

## Product direction

The first useful release combines **canvas + Searchlight + voice**. People can
edit, zoom and recombine distant ideas while exploration and conversation run.
Ideas preserve exact source revisions and contributions. Space readings link
evidence and uncertainty; repetitive generation is not presented as discovery.

Use one Next.js/TypeScript modular monolith. Postgres owns durable workspace
state; Vercel Workflow owns longer runs. Browser interaction, layout, content,
attention and speech have distinct responsibilities. UI and agents call the
same bounded operations. Public GitHub source does not grant public access to
workspaces, credentials or paid AI.

## Run the shell

Node and npm are exact pins:

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
```

Open [localhost:3000](http://localhost:3000). The placeholder page needs no
cloud account or provider key. Database, auth, model and voice configuration
arrive with their working application slices, not unused dependencies here.

## Build in fresh Astra sessions

The [23 standalone build prompts](./docs/build-prompts.md) describe the product
from scratch. Paste one complete task into a fresh GPT-6 Astra session in the
new repository. Prompts 1-18 lead to the integrated first release and publishing;
19-23 are optional feature sessions afterward.

Each task carries its own relevant context, scope and completion criteria.
There is no requirement to read another application's code, consult prior
conversations, or run one long repeatedly compacted session. Continue from
this new repository's code and a short `docs/HANDOFF.md`.

`.codex/config.toml` selects Astra with **medium** effort. Escalate for an
observed difficult task, not by default. Runner permissions, approvals,
network access and experimental features remain user-managed.
[AGENTS.md](./AGENTS.md) is the working agreement; `CLAUDE.md` imports it.

## Product contracts

Read the relevant section when implementing, not every document on every turn:

- [INTENT](./docs/product/INTENT.md): purpose, first useful experience and falsifiers.
- [SPEC](./docs/product/SPEC.md): observable behavior and acceptance scenarios.
- [ARCHITECTURE](./docs/product/ARCHITECTURE.md): state ownership and module boundaries.
- [DECISIONS](./docs/product/DECISIONS.md): active decisions and supersession.
- [Setup](./docs/setup.md): new-repository identity, sessions and deployment boundaries.
- [Vercel facts](./docs/vercel-facts.md): current vendor constraints and sources.

The starter contains no database implementation, generic agent framework,
plugin platform, workflow harness or research apparatus. Add the smallest
implementation required for each end-to-end slice.

## Check and contribute

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
```

`check` runs lint, typecheck, test and build. The empty shell has no product
tests; green shell CI is not evidence that Minerva exists. Add relevant
behavior coverage as features are implemented.

For this template, use a branch and PR, with auto-merge only after required CI.
Generated repositories need their own repository settings and corrected
package, badge and reporting URLs; follow [setup](./docs/setup.md).
Report vulnerabilities privately under [SECURITY.md](./SECURITY.md).
