# Minerva, built with GPT-6 Astra in Codex

Minerva is a spatial thinking environment: editable cards on a canvas, an
explicit **Focus** that decides what the AI sees, and Branch, Compare, and
Recombine that keep every result's lineage. The thesis and its falsifier are in
[docs/product/INTENT.md](./docs/product/INTENT.md). Observable behavior is in
[docs/product/SPEC.md](./docs/product/SPEC.md); for the first loop read sections
6 (central loop), 7 (canvas and cards), 8 (context and provenance), 10 (Branch),
13 (History and Undo), and 15 (browser-local persistence). Decisions already
made are in [docs/product/DECISIONS.md](./docs/product/DECISIONS.md); mechanisms
are in [docs/product/ARCHITECTURE.md](./docs/product/ARCHITECTURE.md). Read the
section you need, not the whole document.

This repository is the template. Build the product in a repository created
from it; keep this one content-free.

## How to work here

- A request is an instruction to do the work. Carry it through implementation
  and browser verification in one run. Do not stop at a plan, an offer to
  continue, or a request for approval on reversible work. When the spec leaves a
  choice open, take the reading it supports best and say so in the PR.
- Verify in the browser, not by reading the code. Run `npm run dev`, exercise
  the loop end to end, fix what breaks, run it again. In the PR, say what you
  exercised and what failed.
- When the owner steers mid-run, fold the new instruction into the current work
  and keep going; do not restart.
- Split independent work across subagents when it saves wall-clock time. Keep
  messages between agents legible.
- Write PRs and messages in plain prose. Use a list only when the items are
  parallel.
- Ask the owner first about hosting or deployment, provider spend, contacting
  participants, and publishing private content. Everything else, do.

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

`dev` is the inner loop. `check` is lint, typecheck, test, build; run it before
the PR. Work on a branch, open a PR, and enable auto-merge; it lands when CI is
green. The PR body is what changed and how you know it works.

## Effort

`.codex/config.toml` starts every thread at `low`, which OpenAI's Codex team
measured as stronger than GPT-5.6 Sol at `high`. Raise to `medium` in the thread
after a failed attempt and to `high` for architecture or hard debugging, then
step back down. Approvals are off and the sandbox is workspace-write with
network, so nothing in this repository should make you pause except the four
owner questions above.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
