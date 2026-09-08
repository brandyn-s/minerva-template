# Minerva

Minerva is a spatial thinking environment: editable cards on a canvas, an
explicit **Focus** that decides what the AI sees, and Branch, Compare, and
Recombine that keep every result's lineage. The thesis and its falsifier are in
[docs/product/INTENT.md](./docs/product/INTENT.md). Observable behavior is in
[docs/product/SPEC.md](./docs/product/SPEC.md). Decisions already made are in
[docs/product/DECISIONS.md](./docs/product/DECISIONS.md); mechanisms are in
[docs/product/ARCHITECTURE.md](./docs/product/ARCHITECTURE.md). Read the section
you need, not the whole document.

This repository is the template. Build the product in a repository created
from it; keep this one content-free.

## Build

The first thing to make work, end to end in the browser: edit a card, choose
Focus, Branch, change a constraint, compare the new child with its source, and
reload with everything still there. Then Searchlight (independent approaches
from the same frozen context), then Compare and Recombine, then Voice.

Done means INTENT.md's checkable definition of success holds on a real
ambiguous problem. Plan and sequence the work yourself; this template has no
roadmap, phase gates, lanes, journal, or clock on purpose.

## Run and check

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
```

`check` is lint, typecheck, test, build. Work on a branch, open a PR, merge when
CI is green. The PR body is what changed and how you know it works.

## Ask the owner first; everything else, just do

Hosting or deployment, provider spend, contacting participants, and publishing
private content.

## Claude Code

- Effort starts at `medium` (`.claude/settings.json`). Use `/effort high` for
  hard debugging or architecture work, then step back down.
- Say in a line what you are about to do, give brief updates during long tool
  runs, and close with a recap that stands on its own.
