# Working agreement

Start with [README.md](./README.md) and [CURRENT_GATE.md](./CURRENT_GATE.md).
Read only the requirements relevant to the change. Product authority remains
`docs/product/INTENT.md` -> approved `docs/product/DECISIONS.md` -> `docs/product/SPEC.md` -> `docs/product/ARCHITECTURE.md`.

Codex reads this file. Claude Code reads `CLAUDE.md`. The block between the
`shared-agreement` markers is identical in both and `npm test` keeps it so;
everything after the block is specific to the harness that reads it.

<!-- BEGIN:shared-agreement -->
- Keep this template content-free; product code belongs in an authorized clone.
- Preserve existing work, explicit context, durable acknowledgement, lineage,
  privacy, and hard spend bounds.
- Approval gates: hosting, deployment, provider spend, participant contact,
  and edits to approved authority documents need the owner's explicit decision.
  Everything else that `CURRENT_GATE.md` authorizes is yours to finish without
  asking: local implementation, tests, branches, draft PRs, read-only checks.
- Do the requested change completely and nothing beside it. Report pre-existing
  bugs and nearby improvements as follow-ups in the PR instead of fixing them in
  the same change. Prefer a targeted edit to a whole-file rewrite.
- Verify in proportion to the change: run the existing guard, add tests only
  where the task or the repository's convention asks for them, sized like the
  neighbouring tests, and re-run only when something changed or failed. Do not
  add planning rituals, agent lanes, timing protocols, or speculative abstractions.
- Use a branch and PR. Keep secrets and private content out of source. Write
  the PR in plain prose: what changed, how it was verified, what is unverified.
  No stock phrases and no closing summary.
- If an instruction here or in a skill makes you pause, ask for permission, or
  change course, name the file and quote the line.
<!-- END:shared-agreement -->

## Codex

- The user's instruction in the thread outranks this file; this file outranks
  skills. Product claims still follow the authority order above.
- Carry an authorized request through implementation and verification. Do not
  stop at a plan or an offer to continue. Ask one focused question only when the
  answer would materially change the result, and prefer to ask after preparing a
  concrete, reviewable result.
- Reasoning effort starts at `medium` (`.codex/config.toml`). Go lower for
  routine edits; go higher only after a documented failure at medium. OpenAI's
  guidance for GPT-6 Astra is low or medium where earlier models needed high.
- Delegate to subagents only when the work is independent and the handoff costs
  less than doing it yourself. Keep messages to other agents legible.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
