# Minerva

[![CI](https://github.com/brandyn-s/minerva/actions/workflows/ci.yml/badge.svg)](https://github.com/brandyn-s/minerva/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Minerva is a spatial thinking environment for directing AI with explicit
context, preserving the lineage of ideas, and keeping human judgment in charge.
It is designed for ambiguous creative and strategic work that does not fit in
one accumulating chat transcript.

> **Status: pre-alpha planning scaffold.** The repository currently contains
> the approved product contract, a reproducible Next.js shell, and the bounded
> plan for a two-hour prototype. It does not yet contain the Minerva workspace,
> AI operations, persistence, provider integration, or a public deployment.

## Why Minerva

More generated material does not necessarily create more useful possibility.
Minerva makes the context and trajectory of AI-assisted work visible: people
arrange ideas on a canvas, explicitly choose what an operation can see, explore
deliberately different directions, compare without automatic ranking, and
recombine useful contributions without losing their origins.

The intended loop is:

```text
seed -> focus and arrange -> branch or sweep -> compare -> recombine
     -> harvest -> continue or rewind
```

Three principles define the product:

- **The canvas is primary.** Conversation supports spatial work; it does not
  replace it.
- **Context is explicit.** Geometry alone never silently changes what the AI
  sees.
- **Difference is not judgment.** Minerva exposes alternatives and lineage;
  the person decides what matters.

The full product thesis and non-goals live in [INTENT.md](./INTENT.md).

## First prototype

The hackathon target is deliberately narrower than the long-form roadmap. At
the two-hour checkpoint, a user should be able to:

1. create, edit, and arrange durable cards on a spatial surface;
2. establish an explicit Focus and inspect the number of cards the AI sees;
3. branch from that frozen context into a separate, visibly derived card;
4. use the result to name a consequential direction, connection, or tension;
5. reload without losing acknowledged cards, placement, Focus, or lineage.

If a live provider cannot be integrated safely, the same interaction will use
a conspicuously labelled deterministic simulation. The prototype will not
pretend that simulated inference, partial persistence, or local evidence is a
production capability.

## Run locally

Prerequisites:

- Node.js `24.20.0`
- npm `12.0.2`

The exact versions are recorded in `.node-version`, `.nvmrc`, and
`package.json`. Node.js may ship with a different npm version, so install the
locked npm release after selecting Node.js:

```sh
npm install --global npm@12.0.2
npm --version
npm ci
npm run dev
```

The version command must print `12.0.2`.

Open [http://localhost:3000](http://localhost:3000). No Vercel account,
provider key, or private project access is needed for the current shell.

Run the deterministic repository checks with:

```sh
npm run check
npm run security:audit
```

The full secret check additionally requires `gitleaks` `8.30.1` on `PATH`:

```sh
npm run secrets:scan
```

Together, `npm ci` and `npm run check` prove that the shell installs, lints,
typechecks, tests, and builds. They are not evidence that the product exists or
that a deployment is ready.

## Repository guide

| Start here | Purpose |
|---|---|
| [CURRENT_GATE.md](./CURRENT_GATE.md) | Current authorization, active state, and next transition |
| [AGENTS.md](./AGENTS.md) | Compact working agreement for coding agents and human collaborators |
| [INTENT.md](./INTENT.md) and [DECISIONS.md](./DECISIONS.md) | Product thesis and approved consequential choices |
| [SPEC.md](./SPEC.md) and [ARCHITECTURE.md](./ARCHITECTURE.md) | Product behavior and implementation boundaries |
| [HACKATHON.md](./HACKATHON.md) and [DEMO.md](./DEMO.md) | Two-hour build plan, cut lines, and acceptance narrative |
| [ROADMAP.md](./ROADMAP.md) | Longer product sequence; not implied by the hackathon slice |
| [JOURNAL.md](./JOURNAL.md) | Consequential proposals, human dispositions, corrections, and gate transitions |
| [evidence/README.md](./evidence/README.md) | Rules for small, content-free, decision-relevant evidence |

The repository is agent-first without making agent activity the product. The
same concise contract is available to Codex through `AGENTS.md` and to Claude
Code through `CLAUDE.md`. Agents may make reversible implementation choices
inside the active slice; people retain authority over intent, tradeoffs,
safety, spend, and public claims. Raw prompts, private reasoning, and activity
volume are not treated as proof of judgment.

For a Claude Desktop Project or Cowork workspace, add `AGENTS.md` and
`CURRENT_GATE.md` to the project context and use this project instruction:

> Follow `AGENTS.md` as the working agreement. Start each task at
> `CURRENT_GATE.md`, then load only the authority sections relevant to the
> active work.

Add other product documents only when the task needs them; duplicating the full
contract into another instruction file creates drift.

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a change. The current
gate may intentionally prohibit product implementation until the event clock
starts. Contributions made with AI are welcome, but the contributor remains
responsible for the code, licensing, claims, and decisions they submit.

Please report vulnerabilities through the private path described in
[SECURITY.md](./SECURITY.md), never in a public issue.

Minerva is available under the [MIT License](./LICENSE).
