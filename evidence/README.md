# Evidence policy

Use native evidence at the surface that owns the claim: Git history and diffs
for source, repository commands and CI for deterministic checks, the running
browser for interaction, and the deployment/provider for live behavior. Do not
copy command output into a second machine-scored receipt system.

Gate outcomes are summarized in [JOURNAL.md](../docs/product/JOURNAL.md) with the exact
source revision, observable result, material failures, falsifier result, and
decision. [CURRENT_GATE.md](../CURRENT_GATE.md) holds only the current operating
state and must not become a second history.

Participant material, workspace exports, transcripts, prompts, model output,
screenshots containing user content, and normalized evaluation packets belong
under the ignored `evaluation-artifacts/` directory or another approved
access-controlled store. They must never be committed here. A journal entry may
refer to a content-free session or artifact identifier without reproducing its
contents.

Add a custom evidence helper only when native evidence cannot answer a material
decision. Repair it at most once; after a second defect, remove or simplify it,
narrow the claim, and use native evidence.
