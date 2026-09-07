# Working agreement

Read [CURRENT_GATE.md](./CURRENT_GATE.md), preserve existing work, and use
[the short delivery guide](./docs/delivery-workflow.md).
Read product documents only for the question at hand. Authority remains
`INTENT.md` -> approved `DECISIONS.md` -> `SPEC.md` -> `ARCHITECTURE.md`;
`ROADMAP.md` supplies product sequence, not a mandatory agent organization.

- Build the smallest complete interaction first. One implementer and one
  branch are the default. No extra planning document, worker registry,
  telemetry protocol, or separate review agent is required.
- Complexity must earn its place by saving demonstrated work or protecting
  a real boundary. Delete unnecessary machinery rather than wrapping it.
- While PRE-CLOCK, keep the app content-free: no workspace store, canvas,
  provider routes, or product implementation.
- Preserve explicit context, durable acknowledgement, lineage, and failure
  truth. Simulations remain labelled. Tests and silence are not human acceptance.
- Do not change product intent or claim approval for a human decision.
  Deployment, publicity, spend, and participant contact need separate permission.
- Work on a branch and PR, never directly on main. Keep credentials and private
  content out of source, logs, and evidence; never import predecessor state.
- Use existing tools and targeted regressions. Test actual interaction and
  failure boundaries, then run the complete candidate's required checks.
- If blocked, report the cause promptly and stop unrelated polish. Do not
  repeatedly research a known contract or wait silently for an optional agent.
- Put outcome, limits, and evidence in the PR. Use `JOURNAL.md` only when a
  consequential decision changes; do not maintain a second activity tracker.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
