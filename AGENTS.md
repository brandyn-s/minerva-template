# Minerva agent guide

Authority order: [INTENT.md](./INTENT.md), approved entries in
[DECISIONS.md](./DECISIONS.md), [SPEC.md](./SPEC.md), then
[ARCHITECTURE.md](./ARCHITECTURE.md). [ROADMAP.md](./ROADMAP.md) governs
sequence and authorization; [JUDGMENT_AT_SPEED_FINDINGS.md](./JUDGMENT_AT_SPEED_FINDINGS.md)
is supporting critique only.

Work only on the currently authorized roadmap gate. Record human approvals and
corrections in [JOURNAL.md](./JOURNAL.md), keep tracked evidence content-free,
and never import predecessor code, state, deployment metadata, or secrets.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
