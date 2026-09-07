# Minerva

[![CI](https://github.com/brandyn-s/minerva-template/actions/workflows/ci.yml/badge.svg)](https://github.com/brandyn-s/minerva-template/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A launch template for a spatial thinking environment: choose what AI sees,
develop a direction, change a constraint, and compare a child with its source.

**Status: content-free Next.js shell, not the product.** No workspace store,
canvas, provider integration, or deployment is implemented here. Product work
starts in a separate repository after an explicit launch instruction.

## Run the shell

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
```

Open [localhost:3000](http://localhost:3000). No cloud account or provider key
is needed. Node `24.20.0` and npm `12.0.2` are exact pins, not minimum versions.
Existing dependencies need not be installed again.

## Launch a product

Read [the current authorization](./CURRENT_GATE.md), then follow the short
[build-and-deliver guide](./docs/delivery-workflow.md). One implementer and
one branch are the default; there is no required coordination framework.

After the owner authorizes creation:

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run launch -- init --repo OWNER/REPO --profile full
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run launch -- preflight --online
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run launch -- create --directory /absolute/path/to/product
```

Creation requires owner authorization. The helper defaults to private, no
deployment, and zero provider spend; it verifies identity and supported
controls. Use `--resume` after a known interrupted operation, not another create.
The [launch reference](./docs/launch-cli.md) has options and recovery details.
Transfer [product metadata](./HACKATHON.md#transfer-repository-identity) without
rewriting historical template references.

Choose `full` for the [product roadmap](./ROADMAP.md), or `hackathon` for the
[two-hour demo contract](./HACKATHON.md). These describe outcomes and safety
boundaries, not a requirement to build every internal layer before the first
interaction. Neither a local simulation nor a protected preview satisfies the
deployed reviewer contract.

## Check and ship

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run security:audit
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run secrets:scan
```

Use the pinned toolchain for all commands. `gitleaks` `8.30.1` must be on PATH.
CI runs the same checks. During a fix, run only the relevant tests;
`npm run test:ops` covers the retained launch/deploy helpers.
Deployment uses the [Next.js helper](./docs/deploy-cli.md) after separate
authorization; it never grants itself permission.

## Reference, when needed

[AGENTS.md](./AGENTS.md) is the working agreement.
[INTENT.md](./INTENT.md), [DECISIONS.md](./DECISIONS.md), [SPEC.md](./SPEC.md),
and [ARCHITECTURE.md](./ARCHITECTURE.md) hold the product contract.
Read relevant sections, not the entire library before starting.
[JOURNAL.md](./JOURNAL.md) preserves consequential decisions, not routine activity.

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [SECURITY.md](./SECURITY.md).
Report vulnerabilities privately, never through public issues.
Licensed under [MIT](./LICENSE).
