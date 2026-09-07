# Minerva current gate

> Subordinate execution record. This file tells a new human or agent what the
> product owner has authorized and where work may begin; it cannot grant its own
> authority or override `INTENT.md`, approved `DECISIONS.md`, `SPEC.md`,
> `ARCHITECTURE.md`, or `ROADMAP.md`.

## State

| Field | Current value |
|---|---|
| Mode | **PRE-CLOCK / READY / NOT ACTIVE** |
| Completed | R0 greenfield runway and pre-clock hackathon preparation |
| Active product work | None |
| Hackathon transition | Begins only when the product owner explicitly declares the clock started and records the base revision in `JOURNAL.md` |
| Hackathon execution | `HACKATHON.md` with `DEMO.md` as the acceptance contract |
| Event checkpoints | Working prototype at T+120; refinement remains inactive until a separate post-demo product-owner go/no-go is recorded |
| Long-form roadmap | R1 remains unauthorized; the hackathon slice does not pass or replace R1–R9 |
| Product capability | None in the pre-clock baseline |

## Authorized now

- Keep the repository, exact toolchain, and isolated configuration ready.
- Correct or clarify product and execution documents.
- Maintain content-free safety controls and evidence policy.
- Resolve a material pre-clock defect that would prevent the shell or locked
  toolchain from starting when the clock begins.

Do not add product domain code, workspace state, canvas behavior, provider
routes, credentials, Voice, product UI, or a deployment before the recorded
clock start.

## Clock-start transition

When the product owner declares the start:

1. Record the declaration time, exact clean base revision, build branch,
   operator, and model/session identifiers in `JOURNAL.md`.
2. Follow the commands, two-hour scope ladder, cut lines, and stop rules in
   `HACKATHON.md`.
3. At T+120, commit and evaluate the exact working artifact with `DEMO.md`.
4. Record what is real, simulated, partial, failed, or cut and the product
   owner's judgment about the most important friction. Preserve that revision
   before any optional refinement.
5. Stop at T+120 unless the product owner records a separate post-demo decision
   to continue. That decision may reject all proposed changes or select no more
   than one primary improvement—floor repair or creative leverage—and, only when
   distinct and safe, one reliability improvement.
6. If refinement is authorized, follow the T+120–480 rules in `HACKATHON.md`.
   Do not infer a long-form roadmap-gate pass from the hackathon result.

## Outcome sought at T+120

A user can arrange durable cards, explicitly choose what the AI sees, receive a
visibly derived alternative as an ordinary card, and use the spatial result to
name a consequential direction they did not begin with. The canvas remains the
primary surface and any simulation remains visibly labeled.

## Optional outcome sought at T+480

At T+120, selecting neither improvement and stopping is valid when the rationale
follows the observed demo. If refinement is authorized, the exact T+120
checkpoint remains preserved and the intervening hours visibly reflect
product-owner judgment. The owner selects no more than one primary improvement:
repair a failed floor or deepen one source of creative leverage. A second,
distinct reliability or accessibility risk may be addressed only when safe.
The final artifact is easier to understand without becoming a feature pile.
The journal shows what was proposed, approved, modified, or rejected; why; and
what remains unsupported.

## Smallest decisive evidence

- The exact build starts on the locked runtime.
- The `HACKATHON.md` Floor and `DEMO.md` narrative/pass conditions work in a
  fresh browser.
- Reload preserves only state that the interface acknowledged as durable.
- The context count and derived relationship remain inspectable.
- The journal ties the human framing, at least one consequential model proposal
  disposition, any evidence-driven correction actually made, and the final
  artifact to source revisions.

## First material falsifier

Before clock start: product behavior or a secret enters the baseline, the
repository is not clean and attributable, or the locked shell cannot start.

After clock start: acknowledged state is lost, geometry changes AI context
silently, a secret reaches the browser, simulated generation is presented as
live, or the canvas stops being the primary interaction surface. Apply the stop
rules in `HACKATHON.md` at the first affected boundary.

## Closeout rule

`CURRENT_GATE.md` is replaced in place when the operating state changes. The
history is append-only in `JOURNAL.md`. A closeout records the exact revision,
native evidence, failures and cuts, falsifier result, and human decision; it
does not require a custom schema or gate counter.
