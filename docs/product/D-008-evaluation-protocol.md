# D-008 — Staged matched evaluation: protocol

The operating protocol for [D-008](./DECISIONS.md#d-008--staged-matched-evaluation). The register's decision table is
authoritative for what was decided and why; this file holds how the evaluation is run.
`SPEC.md` `EVAL-*` obligations cite these sections by name.

## Stage 1 — Product-owner rehearsal

The product owner completes one full Minerva loop on the D-002 library example and one genuine current ambiguous problem. Before each session, record the current framing, known directions, important relationships or tensions, must-preserve constraints, and intended next action. Afterward, record up to three carry-forward discoveries—or explicitly record `none`—and trace any claimed discovery to the interaction that exposed it.

This stage answers a narrow question: can a usable build change the thinking rather than merely produce more material? If operating the canvas consumes the session, the user cannot predict what AI actions see, the loop cannot be completed, or no interaction changes a framing, decision, investigation, experiment, or next action, simplify before recruiting participants. A successful owner rehearsal is readiness evidence only; it does not count toward the external comparison.

## Stage 2 — Three matched pairs

- Recruit three pairs of comparable solo creative or strategic practitioners: six people total. Match each pair on relevant experience and familiarity with the problem, then assign one person to Minerva and the other to the linear-chat baseline without letting either person see the other condition's work.
- Use the D-002 library problem for the first external evaluation. Every participant receives the same frozen task, source packet, must-preserve constraints, and 30-minute working period. Use the same model and version where controllable. Record calls, tokens, spend, failures, and latency rather than concealing Minerva's additional inference cost through an artificial call-count match.
- Give participants a short mechanics-only practice on an unrelated problem before measurement. Assistance during the measured session is limited to resolving product malfunction; moderator coaching invalidates the session.
- The baseline is capable ordinary linear chat, not a deliberately weakened prompt or interface. Its participant may prompt, revise, quote, and organize within the normal chat surface. Minerva's participant may use the available prototype loop. The primary matched test isolates the spatial core, so voice remains off in both conditions; D-007 concurrency and trust are evaluated separately against its own falsifiers.
- Freeze each participant's pre-session inventory of known directions, relationships, tensions, constraints, and intended next action. After the session, each participant submits no more than three carry-forward discoveries, or `none`, in the same interface-neutral format.
- Follow up after 24 hours to determine whether each claimed discovery still changes the participant's framing or intended action.

## Qualified consequential shift

A session contains a **qualified consequential shift** only when at least one submitted discovery satisfies every condition:

1. It was absent from the participant's frozen pre-session inventory and is not a mere rewording of a known direction.
2. It materially changes a framing, decision, investigation, experiment, or concrete next action.
3. It preserves the declared must-preserve constraints, or makes an explicit, consequential conflict with one of them visible.
4. The participant still endorses its usefulness after 24 hours.
5. The session record supports a plausible trace from the interaction to the discovery.

For a Minerva result, the trace must identify a Minerva-specific contribution—explicit Focus or spatial structure, Branch, targeted Searchlight, simultaneous Compare, contribution-level Recombine, Harvest, or preserved Path—not merely that a model generated a useful card. A productive card without that trace is a usability observation, not evidence for Minerva's product thesis.

## Evidence and judgment

Each session preserves one compact case record:

- The frozen task, source packet, initial inventory, constraints, model/configuration, time window, and resource-use receipt.
- The final Minerva workspace or linear transcript, including failures and incomplete work.
- The participant's interface-neutral carry-forward packet and 24-hour response.
- For Minerva, the native context manifests, operation records, lineage, History, and any relevant Harvest.
- A brief post-session account of what helped, what obstructed thinking, and why the participant believes each claimed discovery appeared.

An independent reviewer first checks the normalized packet without seeing the assigned condition, then reviews the interaction trace. The reviewer decides only whether the evidence satisfies the qualification contract; the participant owns the judgment that a shift is consequential. Disagreements and negative results remain part of the record. Neither a model nor Minerva ranks the discoveries or selects a winner.

## Countermetrics

A qualified shift does not excuse damage elsewhere. Review every Minerva session for:

- Canvas-management burden relative to reconstructing context in chat.
- Whether the participant could predict the exact material an AI action would see.
- Whether the central loop was discoverable without moderator rescue.
- Searchlight overload or three approaches that were one idea wearing different labels.
- Predictable cancellation, failure, Undo/Redo, and Path recovery.
- Durable acknowledged work and truthful partial, interrupted, or failed states.
- Latency, inference volume, and spend relative to the judged benefit.
- Whether any apparent advantage disappears against a skillfully used chat baseline.

D-007 voice evaluation separately records canvas/media concurrency, interruption, context receipts, unwanted Active contributions, and trust failures. Voice usability does not substitute for the matched spatial outcome.

## Decision gate

After the first three valid pairs, **continue bounded prototype development** only when:

- At least two pairs favor Minerva: the Minerva session contains a qualified consequential shift attributable to a Minerva-specific interaction, while its matched chat does not contain a comparable qualified shift.
- No material burden, context-predictability, control, or trust failure recurs across two Minerva participants.
- At least one complete Minerva loop and its claimed contribution can be reconstructed from native records.

Run no more than two additional matched pairs when a split result, an invalid session, or reviewer disagreement could realistically change the decision. After five valid pairs, require at least three Minerva-favoring pairs under the same conditions. If that gate is not met, treat the thesis as unsupported at this prototype stage and simplify or rework it rather than adding agents, output volume, polish, or telemetry.

## Invalid sessions and immediate stops

A provider outage or material implementation defect invalidates the affected session; report it and repeat that condition once after repair. Hidden context, irreversible loss, silent mutation, a late commit after cancellation, false completion, or a displayed state that contradicts actual behavior stops evaluation immediately until repaired. If the same material trust defect recurs after one repair, stop the current implementation approach rather than continuing the study.

## Intentionally not used as proof

- Card, branch, prompt, token, gesture, word, or session counts.
- Lexical, embedding, stylistic, or visual distance as a proxy for usefulness.
- Automated novelty, creativity, coverage, quality, or winner scores.
- Model self-evaluation or reviewer unanimity.
- Visual preference, delight, time on canvas, or NPS as proof of consequential discovery.
- Test count, architectural elegance, deployed infrastructure, or telemetry volume.
- Deferred capabilities, general market demand, retention, collaboration, or commercial return.
