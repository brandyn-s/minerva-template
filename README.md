# Minerva

[![CI](https://github.com/brandyn-s/minerva-template/actions/workflows/ci.yml/badge.svg)](https://github.com/brandyn-s/minerva-template/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Minerva is a spatial thinking environment for directing AI with explicit
context, preserving the lineage of ideas, and keeping human judgment in charge.
It is designed for ambiguous creative and strategic work that does not fit in
one accumulating chat transcript.

> **Status: pre-alpha planning scaffold.** The repository currently contains
> the approved product contract, a reproducible Next.js shell, and the bounded
> full and two-hour delivery profiles with executable launch/control tooling.
> It does not yet contain the Minerva workspace,
> AI operations, persistence, provider integration, or a public deployment.

This repository is the reusable **launch template**, not the product build.
At an explicit launch, generate the owner-selected product repository and follow
[the identity-transfer checklist](./HACKATHON.md#transfer-repository-identity).
Do not reuse the template's deployment linkage or change historical template
references into product references.

## Launch a prototype

Choose `full` for the complete [ROADMAP](./ROADMAP.md), or `hackathon` for
the narrower [two-hour checkpoint](./HACKATHON.md). Both start with the
[walking-skeleton delivery workflow](./docs/delivery-workflow.md), not a long
invisible foundation phase. Product implementation still requires a launch
instruction; this template's maintenance work does not start it.

Using the pinned toolchain described below:

```sh
npm run launch -- init --repo OWNER/REPO --profile full
npm run launch -- preflight --online
```

This records private visibility, no deployment, and zero provider spend by
default. Preflight is read-only. Only after the owner authorizes creation:

```sh
npm run launch -- create --directory /absolute/path/to/product-clone
```

The [launch reference](./docs/launch-cli.md) covers explicit permissions,
generation readiness, unsupported optional controls, and Vercel/AI Gateway
prerequisites. Repository-owned Vercel commands preserve the exact Node/npm
pins; configuration does not create a project or deploy it. The
[Next.js REST operations helper](./docs/deploy-cli.md) prepares explicit
provisioning, deployment, build/runtime/access observations, and sanitized
receipts; it is not a product server and never authorizes itself. Use the
[process CLI](./docs/process-cli.md) for one event log, generated status, and
acknowledged worker control, and the
[contract fixtures](./docs/contract-fixtures.md) to catch boundary regressions.
Keep implemented, integrated, live, and human-accepted outcomes separate.

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

## Hackathon checkpoint

The hackathon target is deliberately narrower than the long-form roadmap. At
the two-hour checkpoint, a user should be able to open a stable deployed URL,
without developer setup, and:

1. start from a self-contained editable example or an equally visible blank
   workspace, then create, edit, and arrange durable cards;
2. establish an explicit Focus and inspect the number of cards the AI sees;
3. branch from that frozen context into a separate, visibly derived card;
4. select a result, change an idea or constraint, and branch again while
   retaining alternatives and exact source lineage;
5. name a consequential direction, connection, or tension, then reload without
   losing acknowledged cards, placement, Focus, or lineage.

The preferred target adds generation-isolated three-arm Searchlight; a complete
Branch-based refinement loop remains a valid fallback. Deployment and meaningful
iteration are not stretch goals. The interface must expose the first action
without a narrated tour; a personal provider key or developer-team membership
must not be required. No submission URL exists yet.

If a live provider cannot be integrated safely, the same interaction will use
a conspicuously labelled, honestly limited deterministic simulation. Unsupported
edits must not appear to receive fresh generated responses. A simulation does
not establish consequential discovery; partial persistence or a local-only demo
does not satisfy the deployed interaction contract.

## Run locally

Prerequisites:

- Node.js `24.20.0`
- npm `12.0.2`
- `gitleaks` `8.30.1` on `PATH` (required by `npm run check`, whose tests
  exercise the secret scanner; the scanner fails fast with an install hint
  when it is missing)

The exact Node.js and npm versions are recorded in `.node-version`, `.nvmrc`,
and `package.json`, and `npm ci` refuses any other version. Choose one of two
ways to satisfy the pin.

Without changing your machine, run every command through the pinned toolchain:

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
```

Or install the exact versions once (Node.js may ship with a different npm):

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
npm run secrets:scan
```

`check` lints, typechecks, tests, and builds; `secrets:scan` scans Git history
and the current working-tree contents. Together with `npm ci` they prove that
the shell installs and its controls hold. They are not evidence that the
product exists or that a deployment is ready.

## Repository guide

Start at [CURRENT_GATE.md](./CURRENT_GATE.md) for what is currently
authorized, then [AGENTS.md](./AGENTS.md), which routes every kind of work to
the documents and sections that govern it. The product thesis is
[INTENT.md](./INTENT.md); consequential human decisions and corrections are
in [JOURNAL.md](./JOURNAL.md).

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
