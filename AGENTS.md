# Minerva agent guide

## Start

1. Inspect Git state and preserve unrelated human work.
2. Read [CURRENT_GATE.md](./CURRENT_GATE.md) for the active authorization and
   first material falsifier.
3. Load only the authority sections relevant to the task. Search by decision,
   gate, capability, or heading instead of loading the whole document set.

Authority order is [INTENT.md](./INTENT.md), approved entries in
[DECISIONS.md](./DECISIONS.md), [SPEC.md](./SPEC.md), then
[ARCHITECTURE.md](./ARCHITECTURE.md). [ROADMAP.md](./ROADMAP.md) governs
sequence and authorization. `CURRENT_GATE.md` is a subordinate execution
record and cannot override those sources.

## Route context

| Work | Read |
|---|---|
| Product direction or copy | Relevant sections of `INTENT.md`, `DECISIONS.md`, and `SPEC.md` |
| Domain behavior | Relevant sections of `SPEC.md` and `ARCHITECTURE.md` |
| Architecture or persistence | Relevant decision IDs and `ARCHITECTURE.md` |
| Hackathon implementation | `CURRENT_GATE.md` and `HACKATHON.md`, including its demo contract |
| Release or security | `CURRENT_GATE.md`, relevant architecture boundaries, and `SECURITY.md` |
| Long-form sequencing | The relevant `ROADMAP.md` gate only |

## Working agreement

- Work only inside the active authorization. While `CURRENT_GATE.md` says
  **PRE-CLOCK**, do not add product domain code, workspace persistence, canvas
  behavior, AI routes, Voice, product UI, or a deployment.
- Within an authorized slice, make reversible, low-risk implementation choices
  using existing patterns. Escalate choices that change product intent, scope,
  safety, spend, external state, or a public claim.
- The product owner decides consequential tradeoffs and whether an observed
  result is valuable. An agent may propose alternatives but may not approve its
  own product changes or weaken a falsifier.
- Build the smallest complete vertical proof. Keep simulations conspicuously
  labelled and generated proposals behind the same validation and durability
  boundaries as human input.
- Never expose secrets, put provider credentials in the browser, import
  predecessor code or state, or treat private reasoning as provenance.
- Never push directly to `main`. Use a branch and pull request. Changing
  repository visibility, deploying, incurring spend, or contacting people
  requires explicit product-owner authorization.
- Append to [JOURNAL.md](./JOURNAL.md) only when consequential judgment,
  correction, failure, cut, or gate state changes. Do not log routine activity,
  raw prompts, private chain-of-thought, or participant content.

## Verification and handoff

Before building, name the user-visible outcome, smallest decisive evidence,
first material falsifier, and time budget. Prefer native tests or runtime
readback at the surface that owns the claim. Stop when the evidence answers the
decision; a passing shell is not product or deployment proof.

A handoff reports:

- the user-visible outcome and exact revision or files changed;
- checks run and their results;
- the material proposal made and the human disposition, when one occurred;
- assumptions, failures, friction, and cuts that affect the claim; and
- remaining uncertainty and the next authorized action.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
