# Minerva hackathon launch plan

Status: **pre-clock launch packet**. This document makes the repository ready
to begin a two-hour build. It does not authorize or claim completion of any
ROADMAP gate, and it does not replace the approved authority chain.

## Clock boundary

Before the clock starts, the repository may contain only approved product
documents, locked tooling, content-free infrastructure configuration, evidence,
and planning. Product domain code, workspace persistence, canvas behavior, AI
routes, Voice, and deployable product behavior begin only after the clock starts.

The pre-clock baseline is intentionally uneventful:

| Ready before the clock | Deliberately starts at T+0 |
|---|---|
| Private greenfield GitHub repository and clean `main` | Product-owned domain records and commands |
| Isolated Vercel project with no deployment | Browser-local workspace repository |
| Exact Node/npm lock and reproducible install | Editable spatial canvas and Focus behavior |
| Minimal Next.js shell and one bounded `npm run check` | Branch/Searchlight operation adapters |
| Reserved environment and storage names; provider routes disabled | Provider selection, route implementation, or credentials |
| Approved intent, decisions, specification, architecture, and roadmap | Any demo deployment |

Do not add speculative directories, empty abstractions, SDKs, sample product
state, or hidden feature flags merely to make the repository look busier.

## Two-hour outcome

At T+120, Minerva should make one narrow claim:

> On a real ambiguous problem, a user can arrange durable cards, explicitly
> choose what the AI sees, receive a visibly derived alternative as an ordinary
> card, and use the spatial result to name a consequential direction they did
> not begin with.

The canvas remains the primary surface. A transcript, prompt form, settings
panel, or generic chat must not become the product.

This is a hackathon experience slice, not the approved first prototype. It
borrows the smallest useful vertical slice from R3 and, only if the floor is
stable, the targeted divergence behavior from R6. It does not pass R1, R2, R3,
or R6 and must not be used to close their evidence gates.

## Scope ladder

### Floor — protect this first

- Editable cards on a pan-and-drag spatial surface.
- The canonical example and an equally visible blank start.
- Browser-local durability using an adapter behind the product-owned workspace
  boundary.
- Explicit Focus with a visible **AI sees N cards** count. Geometry alone never
  changes AI context.
- One Branch action whose result lands as an ordinary editable card with a
  visible `derived from` relationship and a compact context receipt.
- Reload restores the last acknowledged cards, positions, Focus, and lineage.

### Target — the best two-hour demo

- A targeted Searchlight sweep selects three context-appropriate, deliberately
  different approaches before generation.
- The three arms stay neutral and land independently as ordinary cards; failed
  work remains visible.
- The user can arrange the alternatives, write an ordinary Harvest card, and
  explain one consequential connection, tension, or direction.

### Stretch — only after the target is frozen

- Neutral Compare for two selected cards.
- One contribution-level Recombine action.
- A protected Vercel Preview of the exact frozen revision.

Voice, touch, semantic History/Paths, multi-generation agentic expeditions,
cloud workspaces, ingestion beyond paste, authentication, analytics, and visual
polish beyond legibility are outside this two-hour build.

## Pre-clock toolchain check

The host default may not match the locked toolchain. Before the event, cache and
exercise the exact versions without changing repository dependencies:

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 node --version
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm --version
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
```

The first two commands must report `v24.20.0` and `12.0.2`. The pre-clock
operator then leaves `main` clean and synchronized.

## Clock-start sequence

When the event clock starts:

```sh
git switch -c codex/hackathon-slice
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
```

Do not spend clock time reinstalling or re-running the entire readiness suite
unless the machine or lockfile changed after the pre-clock check.

## 120-minute execution map

| Time | Outcome | Cut line |
|---|---|---|
| T+0–10 | Create the build branch, start the locked shell, open the canonical example, and keep the current placeholder available as a known baseline. | If the shell does not start, repair only the first material failure. |
| T+10–30 | Establish the smallest product-owned records and command seam for Card, Focus, relationship, and operation state. | No full History engine, migrations framework, or generalized command bus. |
| T+30–55 | Implement acknowledged browser-local card creation/edit/move, Focus, example/blank start, and reload. | Use one bounded native IndexedDB adapter; do not add a second store or renderer-owned truth. |
| T+55–75 | Make the spatial surface direct and legible: drag cards, pan, select, add/remove/clear Focus, and show lineage/context receipts where they act. | Prefer plain DOM/CSS for this disposable slice; do not turn that into an R2 renderer decision. |
| T+75–95 | Land one Branch through a closed generation port. Keep the source unchanged and the result outside Focus. | If a safe real provider path is not working by T+90, use a visibly labeled deterministic fixture; never expose a secret or imply live AI. |
| T+95–105 | Add the three-approach Searchlight only if the floor is durable and the Branch path is truthful. | At the first instability, cut Searchlight and strengthen the Branch demo. |
| T+105–115 | Freeze features, run the demo contract, repair only material failures, and preserve truthful degraded states. | No new capability after T+105. |
| T+115–120 | Rehearse the four-minute narrative, commit the exact demo revision, and record what is real, simulated, partial, or cut. | Deploy only a frozen, safe build; otherwise demo locally. |

## Implementation constraints

- The workspace kernel, not React, the renderer, IndexedDB callbacks, or the
  provider, decides semantic truth.
- Geometry affects presentation only. Focus and operation targets are explicit.
- A provider result is untrusted proposal data until it lands through the same
  durable workspace path as a local mutation.
- Provider requests use one closed operation contract. No browser secret,
  arbitrary prompt endpoint, hidden retry, tool call, or fail-open route is
  acceptable for the demo.
- If a deterministic adapter substitutes for a provider, label it **Simulated**
  in the interface and in the demo narration.
- Generated material is immediately editable and durable; it does not require a
  second permission dialog.
- Do not edit approved authority documents to rationalize a shortcut. Record
  hackathon compromises in the journal or final demo receipt.

## Stop rules

- At T+45 without durable editable cards, remove renderer ambition and use the
  smallest direct DOM surface.
- At T+75 without explicit Focus and reload, stop AI work and finish the local
  loop.
- At T+90 without a safe real provider response, switch to the labeled fixture
  adapter and preserve the generation port.
- At T+105, freeze capability. Remaining time belongs to the demo contract, not
  feature expansion.
- A false durability claim, hidden context, exposed secret, or unlabeled
  simulation stops the affected path immediately.

## End-of-clock handoff

Record the exact commit and complete [DEMO.md](./DEMO.md). Separate observed
behavior from planned behavior and list every cut. The hackathon artifact then
enters the approved roadmap as evidence or a disposable experiment; it does not
silently become the production architecture.
