# Minerva

[![CI](https://github.com/brandyn-s/minerva-template/actions/workflows/ci.yml/badge.svg)](https://github.com/brandyn-s/minerva-template/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A product brief and runnable starter for a **spatial thinking environment**:
choose what AI sees, explore alternatives, and preserve how each idea developed.

**Implemented here:** a pinned Next.js shell and CI. **Not implemented:** the
canvas, workspace persistence, AI operations, Voice, or a deployed product.
This template stays content-free; build the product in a repository created
from it. It assumes a greenfield Next.js app on Vercel, one implementer, and
GPT-6 Astra in Codex as the builder.

## What to build

For someone exploring an ambiguous problem, one accumulating conversation
makes alternatives and their origins hard to manage. Minerva makes that work
visible on a canvas rather than replacing it with another chat interface.

Cards hold editable problems, ideas, evidence, and constraints. Explicit
**Focus** and selected targets determine what AI sees; visual proximity alone
never changes context. **Branch** develops a direction while preserving its
source. Compare alternatives, recombine named contributions, and harvest useful
discoveries without erasing abandoned paths. Searchlight explores independent
approaches from the same frozen context; Voice supports the canvas.

The first interaction to make work: edit a card, choose context, Branch,
change a constraint, then compare the new child with its source. A person
should understand what the action will use and what remains unchanged.

## Run

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
```

Open [localhost:3000](http://localhost:3000). No cloud account or provider key
is needed. Node and npm versions are exact pins.

## What defines correct

Read the relevant section when implementing that behavior, not every document
before starting.

- [INTENT.md](./docs/product/INTENT.md): the thesis, the checkable definition
  of success, and the falsifier.
- [SPEC.md](./docs/product/SPEC.md): observable behavior, explicit context,
  frozen inputs, lineage, and the capability contract.
- [DECISIONS.md](./docs/product/DECISIONS.md): choices already made.
- [ARCHITECTURE.md](./docs/product/ARCHITECTURE.md): durable acknowledgement,
  recovery, and the implementation boundaries.
- [docs/vercel-facts.md](./docs/vercel-facts.md): platform facts a build has
  already paid to learn.

## Build it with Codex

This template is tuned for GPT-6 Astra in Codex. In a repository created from
it, trust the project, open Codex, and give it the first loop:

```text
Build the first loop in AGENTS.md end to end, verify it in the browser, and open a PR.
```

[AGENTS.md](./AGENTS.md) is the whole working agreement: one page. Codex reads
`.codex/config.toml`, which pins `gpt-6-astra` at low reasoning effort, turns
approvals off, keeps the sandbox at workspace-write with network, and enables
notes across context windows for long runs. Claude Code reads the same
agreement through `CLAUDE.md`.

## Contribute

Branch, PR, auto-merge on green. `npm run check` is lint, typecheck, test,
build. Report vulnerabilities privately under [SECURITY.md](./SECURITY.md).
