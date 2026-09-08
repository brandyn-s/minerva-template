# Minerva

[![CI](https://github.com/brandyn-s/minerva-template/actions/workflows/ci.yml/badge.svg)](https://github.com/brandyn-s/minerva-template/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A product contract and thin runnable starter for a private **spatial creative
studio**: a living atlas of ideas with visible relationships and inheritance,
three views, contextual creative operations, comparison and Weave, bounded
Wander exploration, goal-directed Agent Drive, a concurrent typed and spoken
collaborator, materialized outputs, and REST and MCP access.

**A living atlas of ideas.** The starter expresses the paper-and-ink identity
with an original owl mark and native disclosure controls. It does not simulate
the application. See [Design](./docs/product/DESIGN.md) for naming, interaction,
truthful motion, and opt-in sound that gives voice priority.

**Implemented:** a pinned Next.js shell, CI and seed-document consistency checks.
**Not implemented:** workspace
persistence, canvas, AI operations, voice, workflow execution or deployment.
Keep this template content-free; build the application in a new repository.

## Product direction

The complete product is defined by sixteen required capabilities, C01-C16, in
[SPEC](./docs/product/SPEC.md). All of them are release
requirements; none is an optional extension. People edit, zoom, trace
relationships and recombine distant ideas while exploration and conversation
run. Ideas preserve exact source revisions and contributions. Space readings
link evidence and uncertainty; repetitive generation is not presented as
discovery. Delivery is staged through six demonstrable milestones, each
independently reviewed, and a milestone is a checkpoint of the whole product
rather than a smaller product.

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

## Build in Astra sessions, review in Claude

[docs/build-prompts.md](./docs/build-prompts.md) holds the milestone plan: 34
GPT-6 Astra work packages grouped into six milestones, one Fable 5.1 review
prompt per milestone and one consultation prompt for decisions or impasses.
Paste one complete package into a fresh Astra session in the new repository.
Each package states its prerequisites and ends with an explicit "Package
complete when" condition. Related packages may share a session; a hard package
may span several. Publication is the last package and follows the
release-candidate review.

Use separate terminals and checkouts: Astra in Codex builds; Fable 5.1 in Claude
reviews the exact committed candidate without editing application source.
The operator starts reviews; builder-launched reviewers are an explicit
exception, not the default. [Setup](./docs/setup.md#separate-builder-and-critic)
describes the small handoff and checkout arrangement.

Choose one demonstrable outcome per task. A partial package can have a useful
checkpoint without being called complete. Default to one independent review
per planned boundary and a focused recheck of material fixes. Keep optional suggestions separate
from required defects; avoid speculative abstractions, repeated full reviews
and measurement infrastructure that does not answer a consequential question.

Make each implementation assignment a working user action, not an entire
subsystem. Integrate the UI and current service path before expanding; packages
11-12 include a concrete typed/voice increment sequence. Probe consequential
external assumptions early within authorized bounds. Report written, integrated,
local/live demonstration, review, acceptance and deployment separately; a
large code return or merged PR is not a functioning or hosted capability.

There is no requirement to read another application's code, consult prior
conversations, or run one long repeatedly compacted session. Continue from
this repository's code, `docs/product/CAPABILITIES.md` and a short
`docs/HANDOFF.md`.

`.codex/config.toml` selects Astra with **medium** effort; the Fable reviewer
also runs at medium. Escalate for an observed difficult task, then return to
medium. Runner permissions, approvals, network access and experimental
features remain user-managed. [AGENTS.md](./AGENTS.md) is the working
agreement; `CLAUDE.md` imports it.

## Product contracts

Read the relevant section when implementing, not every document on every turn:

- [INTENT](./docs/product/INTENT.md): purpose, the complete experience and falsifiers.
- [SPEC](./docs/product/SPEC.md): observable behavior, required capabilities and acceptance scenarios.
- [ARCHITECTURE](./docs/product/ARCHITECTURE.md): state ownership and module boundaries.
- [DECISIONS](./docs/product/DECISIONS.md): active decisions and supersession.
- [DESIGN](./docs/product/DESIGN.md): living-atlas identity, naming, motion and sound.
- [Setup](./docs/setup.md): new-repository identity, sessions and deployment boundaries.
- [Vercel facts](./docs/vercel-facts.md): current vendor constraints and sources.

The starter contains no database implementation, generic agent framework,
plugin platform, workflow harness or research apparatus. Add the smallest
implementation required for each end-to-end slice.

## Check and contribute

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
```

`check` runs lint, typecheck, test and build. The seed tests protect documentation
structure and internal links, not product behavior. Green shell CI is not
evidence that Minerva exists. Add relevant
behavior coverage as features are implemented.

For this template, use a branch and PR, with auto-merge only after required CI.
Generated repositories need their own repository settings and corrected
package, badge and reporting URLs; follow [setup](./docs/setup.md).
Report vulnerabilities privately under [SECURITY.md](./SECURITY.md).

## Seed versus application

Use this template to generate the public `minerva` repository after the seed
update is merged. Record the seed revision and update identity/settings through
[setup](./docs/setup.md). The hosted application remains private.

Start with [CONTRACT](./docs/product/CONTRACT.md), the documentation index.
SPEC owns required behavior; [CAPABILITIES](./docs/product/CAPABILITIES.md) owns
implementation evidence. Use the standard prompts in this repository; HTML and
Downloads are exports. The starter landing page is identity material, not the
final atlas or an approved M1 proof. Keep database, canvas, voice, AI and live
deployment implementation in the generated application.
