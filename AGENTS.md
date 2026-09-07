# Minerva agent guide

Authority order: [INTENT.md](./INTENT.md), approved entries in
[DECISIONS.md](./DECISIONS.md), [SPEC.md](./SPEC.md), then
[ARCHITECTURE.md](./ARCHITECTURE.md). [ROADMAP.md](./ROADMAP.md) governs
sequence and authorization; [JUDGMENT_AT_SPEED_FINDINGS.md](./JUDGMENT_AT_SPEED_FINDINGS.md)
is supporting critique only.

Start each session with [CURRENT_GATE.md](./CURRENT_GATE.md). It is the concise
operational status and retrieval guide; it cannot override the authority chain.
Work only within the product-owner authorization recorded there. Record
consequential human/model choices and corrections in
[JOURNAL.md](./JOURNAL.md), keep tracked evidence content-free, and never import
predecessor code, state, deployment metadata, or secrets.

While `CURRENT_GATE.md` says **PRE-CLOCK**, do not add product domain code,
workspace persistence, canvas behavior, AI routes, Voice, product UI, or a
deployment. After a recorded product-owner clock start,
[HACKATHON.md](./HACKATHON.md) supplies the bounded build plan and
[DEMO.md](./DEMO.md) supplies its acceptance contract; neither document closes
or replaces an approved roadmap gate. The clock begins only when the product
owner explicitly declares it and the base revision is recorded in the journal.

For each active slice:

1. Name the user-visible outcome, smallest decisive evidence, first material
   falsifier, and time budget before building.
2. Surface assumptions that could change the product, scope, safety, spend, or
   demo claim. The product owner decides consequential tradeoffs; silence is not
   approval.
3. Build the smallest complete vertical proof, then use native tests or runtime
   readback at the surface that owns the claim.
4. Stop when the evidence answers the decision. Record material errors,
   friction, cuts, and whether the human approved, modified, or rejected the
   model's proposal; do not record private reasoning or manufacture activity
   telemetry as a proxy for judgment.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
