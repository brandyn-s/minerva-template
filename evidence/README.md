# Evidence index

Tracked evidence is limited to concise, content-free JSON gate receipts in
`evidence/gates/`. Each receipt identifies the evaluated source revision,
environment, native command outcomes, falsifier result, and gate decision.

Participant material, workspace exports, transcripts, prompts, model output,
screenshots containing user content, and normalized evaluation packets belong
under the ignored `evaluation-artifacts/` directory or another approved
access-controlled store. They must never be committed here.

Current accepted gates are reported by `npm run roadmap:status`.
