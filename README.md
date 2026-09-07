# Minerva

[![CI](https://github.com/brandyn-s/minerva-template/actions/workflows/ci.yml/badge.svg)](https://github.com/brandyn-s/minerva-template/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A product brief and runnable starter for a **spatial thinking environment**:
choose what AI sees, explore alternatives, and preserve how each idea developed.

**Implemented here:** a pinned Next.js shell and CI. **Not implemented:** the
canvas, workspace persistence, AI operations, Voice, or a deployed product.
This public template stays content-free; build the product in a separate,
explicitly authorized repository, private by default.

## What to build

For someone exploring an ambiguous problem, one accumulating conversation
makes alternatives and their origins hard to manage. Minerva makes that work
visible on a canvas rather than replacing it with another chat interface.

Cards hold editable problems, ideas, evidence, and constraints. Explicit
**Focus** and selected targets determine what AI sees; visual proximity alone
must not change context. **Branch** develops a direction while preserving its
source. Compare alternatives, recombine named contributions, and harvest useful
discoveries without erasing abandoned paths. Searchlight explores independent
approaches from the same frozen context; Voice supports the canvas.

A useful interaction to demonstrate is: edit a card, choose context, Branch,
change a constraint, then compare the new child with its source. A person
should understand what the action will use and what remains unchanged.
The library example is an illustration, not a required build script or layout.
This interaction alone is not the complete prototype.

## Run

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
```

Open [localhost:3000](http://localhost:3000). No cloud account or provider key
is needed. Install dependencies once; Node/npm versions are exact pins.

## Acceptance and boundaries

Read the relevant section when implementing that behavior, not every document
before starting:

- **Canvas and AI context:** [SPEC.md](./SPEC.md) defines observable behavior,
  explicit context, frozen inputs, lineage, and the full capability contract.
- **Saving and recovery:** [ARCHITECTURE.md](./ARCHITECTURE.md) defines durable
  acknowledgement and recovery. Do not report unsaved work as saved.
- **Live AI:** permission, atomic admission, replay protection, and a proven
  hard spend bound are required. Simulations must be labelled.
- **Delivery:** keep secrets and private content out of source. A deployed
  claim requires working behavior, a stable origin, and a reviewer path without
  team membership or a personal provider key. Software success is not human
  comprehension or evidence that the product thesis works.

[INTENT.md](./INTENT.md) and approved [DECISIONS.md](./DECISIONS.md) govern the
product; this brief does not replace their requirements.
[CURRENT_GATE.md](./CURRENT_GATE.md) records what is authorized in this checkout.

## Contribute and deliver

Use a branch and PR. With `gitleaks` `8.30.1` on PATH, run the existing guard:

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run security:audit
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run secrets:scan
```

[CONTRIBUTING.md](./CONTRIBUTING.md) covers contribution requirements.
Report vulnerabilities privately under [SECURITY.md](./SECURITY.md).

## Optional references

Use the [launch helper](./docs/launch-cli.md) for resumable provisioning and
the [deployment helper](./docs/deploy-cli.md) for authorized Next.js delivery.
Neither is a prerequisite to running or editing the shell.
[ROADMAP.md](./ROADMAP.md) retains full-product release/evaluation criteria and
the earlier sequencing plan. [HACKATHON.md](./HACKATHON.md) is an opt-in timed
experiment, not the default workflow. [JOURNAL.md](./JOURNAL.md) preserves past
decisions. No agent lanes, phase clock, separate planning document, or routine
activity tracker is required to contribute.
