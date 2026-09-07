# Working agreement

Start with [README.md](./README.md) and [CURRENT_GATE.md](./CURRENT_GATE.md).
Read only requirements relevant to the change. Product authority remains
`INTENT.md` -> approved `DECISIONS.md` -> `SPEC.md` -> `ARCHITECTURE.md`.

- Keep this template content-free; product code belongs in an authorized clone.
- Preserve existing work, explicit context, durable acknowledgement, lineage,
  privacy, and hard spend bounds. Do not invent human acceptance or permission
  for hosting, deployment, provider spend, or participant contact.
- Implement approved work directly. Do not add planning rituals, agent lanes,
  timing protocols, or speculative abstractions.
- Use a branch and PR, existing tests, and required CI. Keep secrets and private
  content out of source. Put outcome and limitations in the PR once.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
