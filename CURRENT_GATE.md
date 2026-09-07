# Minerva current gate

> Subordinate execution record. This file states current authorization; it
> cannot override `INTENT.md`, approved `DECISIONS.md`, `SPEC.md`,
> `ARCHITECTURE.md`, or `ROADMAP.md`.

## Operating state

| Field | Current value |
|---|---|
| Product mode | **PRE-CLOCK / INACTIVE** |
| Repository work | **ACTIVE** — public-readiness and hackathon launch preparation |
| Product capability | None; the tracked application remains a shell |
| Readiness change | Draft pull request 2 targets `main`; replace this row after merge or publication |
| Event checkpoint | Working prototype at T+120; optional refinement requires a separate T+120 owner decision |
| Long-form roadmap | R1 through R9 remain unauthorized |
| Last transition | Public-readiness preparation recorded in `JOURNAL.md` entry `J-20260906-08` |

## Authorized now

- Make the repository clear, maintainable, agent-compatible, and safe to
  evaluate for publication.
- Correct product and execution documents without changing approved product
  intent.
- Maintain the exact toolchain, content-free controls, and bounded evidence
  needed to begin the event cleanly.
- Resolve a material defect that would prevent a fresh contributor or the
  locked shell from starting.

Product domain code, workspace state, canvas behavior, provider routes,
credentials, Voice, product UI, deployment, and a visibility change remain
unauthorized before a recorded product-owner transition.

## Publication hold

One owner disposition remains before changing visibility. A retired R0 receipt
in reachable Git history contains opaque Vercel project and environment record
identifiers. A full-history secret scan found no credentials, but secret
scanning cannot decide whether those identifiers are acceptable public
metadata. The owner must either accept their disclosure or authorize a
clean-root public history. Rewriting history is not implied by this gate.

After that decision, publication still requires the operational sequence:
merge the readiness pull request, verify CI on `main`, confirm the isolated
Vercel project remains undeployed and unlinked from Git, change visibility, and
immediately enable branch rules, secret scanning with push protection, private
vulnerability reporting, and code scanning. Visibility is not changed by this
document.

## Next product transition

When the product owner explicitly declares the event clock started, record the
time, clean base revision, branch, operator, and tool/model family when useful
in `JOURNAL.md`. Then follow [HACKATHON.md](./HACKATHON.md), with
[DEMO.md](./DEMO.md) as the T+120 acceptance contract. Preserve the T+120
revision before any separately authorized refinement.

## First material falsifier

Before publication: a credential or unacceptable private identifier is
reachable, the contributor path requires private access, CI does not exercise
the stated checks, or public documentation overstates product or deployment
state.

Before clock start: product behavior, a secret, inherited predecessor state, or
a deployment enters the baseline, or the locked shell cannot start. Once the
clock starts, the detailed outcome, cut lines, falsifiers, and stop rules live
in `HACKATHON.md` and `DEMO.md` rather than being duplicated here.

Replace this file in place when operating state changes. Append consequential
history to `JOURNAL.md`; do not turn this gate into an activity log.
