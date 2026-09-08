# Working agreement

Start with [README.md](./README.md) and [CURRENT_GATE.md](./CURRENT_GATE.md).
Read only the requirements relevant to the change. Product authority remains
`docs/product/INTENT.md` -> approved `docs/product/DECISIONS.md` -> `docs/product/SPEC.md` -> `docs/product/ARCHITECTURE.md`.

Claude Code reads this file. Codex reads `AGENTS.md`. The block between the
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

## Claude Code

- Effort starts at `medium` (`.claude/settings.json`). Anthropic's default for
  Claude Fable 5.1 is `high`; medium roughly matches the previous model at lower
  cost. Use `/effort high` for hard debugging or architecture work in the
  session, and step back down afterwards. Do not run at max by habit.
- Say in a line what you are about to do, give brief updates during long tool
  runs, and close with a recap that stands on its own.
- Use lists and headers where the content is multifaceted. There is no
  anti-formatting rule in this repository to obey.
