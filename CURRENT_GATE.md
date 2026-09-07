# Minerva current gate

> Subordinate execution record. This file states current authorization; it
> cannot override `INTENT.md`, approved `DECISIONS.md`, `SPEC.md`,
> `ARCHITECTURE.md`, or `ROADMAP.md`.

## Operating state

| Field | Current value |
|---|---|
| Product mode | **PRE-CLOCK / INACTIVE** |
| Repository work | **COMPLETE** — public delivery and launch preparation closed |
| Product capability | None; the tracked application remains a shell |
| Readiness change | Pull requests 2 and 3 merged as `ccf2ed5` and `64f8b88`; each exact `main` push check passed |
| Publication state | **PUBLIC** — GitHub controls enabled; renamed to `brandyn-s/minerva-template` and marked as a GitHub template on September 7, 2026 (the old name redirects); Vercel remains undeployed and unlinked from Git |
| Event checkpoint | Working prototype at T+120; optional refinement requires a separate T+120 owner decision |
| Long-form roadmap | R1 through R9 remain unauthorized |
| Authority documents | **FROZEN** until the T+120 artifact exists; see `J-20260907-04` |
| Last transition | Authority freeze and consolidation recorded in `JOURNAL.md` entry `J-20260907-04` |

## Authorized before clock start

- Maintain the public repository and repair a material defect that would
  prevent a fresh contributor or the locked shell from starting.
- Correct planning or execution documents without changing approved product
  intent or manufacturing product progress.
- Maintain the exact toolchain, content-free controls, and bounded evidence
  needed to begin the event cleanly.
- Leave `INTENT.md`, `DECISIONS.md`, `SPEC.md`, `ARCHITECTURE.md`, and
  `ROADMAP.md` frozen. Only a correction of a demonstrated defect or an
  owner-approved consolidation with no semantic change may land. A new
  decision is recorded as a pending proposal in `JOURNAL.md`, not approved
  from paper.

Product domain code, workspace state, canvas behavior, provider routes,
credentials, Voice, product UI, and deployment remain unauthorized. Repository
publication does not authorize any of them.

## Publication result

The product owner explicitly accepts the opaque Vercel project and environment
record identifiers in the retired R0 receipt as non-secret public metadata.
Retain the reachable history; do not scrub or replace it.

Live readback closed the publication boundary:

- GitHub is public with Issues on and Projects, Wiki, and Discussions off.
- Squash is the only merge method; merged branches are deleted.
- `main` requires a pull request, resolved review threads, and the single
  `Verify repository` check. It blocks deletion and force-pushes, but requires
  zero approvals so the hackathon does not manufacture review ceremony.
- Actions have read-only default token permissions, cannot approve pull
  requests, allow only GitHub-owned actions, and require full commit SHA pins.
- Secret scanning, push protection, private vulnerability reporting, and
  CodeQL default setup for JavaScript/TypeScript are enabled. CodeQL is
  advisory rather than a merge requirement.
- The authorized `thalient/minerva` Vercel project still has zero deployments
  and no Git provider link. It remains an isolated future deployment target.

GitHub and Vercel remain the authority for live state; this is the concise
operating record, not a substitute monitor.

## Next product transition

When the product owner explicitly declares the event clock started, record the
time, clean base revision, branch, operator, and tool/model family when useful
in `JOURNAL.md`. Then follow [HACKATHON.md](./HACKATHON.md), with
its demo contract as the T+120 acceptance contract. Preserve the T+120
revision before any separately authorized refinement.

## First material falsifier

Before clock start: product behavior, a secret, inherited predecessor state, a
deployment, or a Git-to-Vercel link enters the baseline; the locked shell cannot
start; or the public controls above drift in a way that defeats the contributor
or evidence path. Once the clock starts, the detailed outcome, cut lines,
falsifiers, and stop rules live in `HACKATHON.md` rather than being
duplicated here.

Replace this file in place when operating state changes. Append consequential
history to `JOURNAL.md`; do not turn this gate into an activity log.
