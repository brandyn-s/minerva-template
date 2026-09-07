# Contributing

Use the [README](./README.md) to run the shell and
[CURRENT_GATE.md](./CURRENT_GATE.md) to identify authorized work. Read only the
product requirements relevant to the change. Approved work does not require
another proposal, plan, or journal entry before implementation.

Work on a branch and open a PR. Explain what changed, the evidence that it
works, and important limits. Add tests for changed behavior; use targeted tests
during repair and the README's full guard for the completed candidate.
CI and branch protections remain required.

Changes to approved product intent, scope, architecture, or safety boundaries
require owner approval and corresponding requirement/acceptance updates.
Record consequential product decisions in [JOURNAL.md](./JOURNAL.md), not
routine activity. A local or simulated slice must not claim full-prototype,
live-provider, deployed, or human acceptance.

Never publish secrets, private workspace content, raw transcripts, or
participant data. Keep local operational receipts in ignored `.minerva/`.
Security reports follow [SECURITY.md](./SECURITY.md), not public issues.

AI assistance does not change contributor accountability for correctness,
security, licensing, or evidence. No separate AI-process narrative is required.
Commits need no special prefix. Contributions are licensed under
[MIT](./LICENSE).
