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
| Publication state | **PUBLIC** — GitHub controls enabled; renamed to `brandyn-s/minerva-template` and marked as a GitHub template on September 7, 2026 |
| Vercel | **No project exists.** The `thalient/minerva` project recorded at R0 was gone by September 7, 2026 (`prj_JqzTIJqpZZZomnXhqMVnEPSNNzFe` returns 404; the team listed no projects then and holds only unrelated ones now). Nothing is deployed. The project is recreated at T+0 as content-free infrastructure (`J-20260907-09`) |
| Product repository | **Not yet created** — `brandyn-s/minerva` is generated from this template as the first T+0 action and does not inherit commit history (`J-20260907-05`) |
| Event checkpoint | Working prototype at T+120; optional refinement requires a separate T+120 owner decision |
| Long-form roadmap | R1 through R9 remain unauthorized |
| Authority documents | **FROZEN** until the T+120 artifact exists (`J-20260907-04`), with two owner-approved exceptions on September 7: D-012 through D-014 in `DECISIONS.md` (`J-20260907-10`) and ROADMAP amendment 1.2 (`J-20260907-11`) |
| Authorized experiments | **D-012** Voice spike, **D-013** Oblique-seeded Searchlight slice, **D-014** bounded Expedition and descriptive terrain — T+120–480 only, disposable, one at a time as the owner's primary improvement, cannot close a gate or claim the conformance they depart from |
| Last transition | ROADMAP amendment 1.2 accepted in `JOURNAL.md` entry `J-20260907-11` |

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
- The `thalient/minerva` Vercel project that R0 created and pull request 3
  read back with zero deployments no longer existed on September 7, 2026:
  the recorded project ID returns 404. The team's project list was empty on
  that date and now holds only unrelated projects; no `minerva` project
  exists.
  Nothing has ever been deployed. The clock-start sequence in `HACKATHON.md`
  recreates and links an isolated project; the template checkout's local
  `.vercel/project.json` points at the deleted project and is not reused.

GitHub and Vercel remain the authority for live state; this is the concise
operating record, not a substitute monitor.

## Next product transition

When the product owner explicitly declares the event clock started, generate
`brandyn-s/minerva` from this template and re-apply its controls as the first
action, then record the time, template revision, branch, operator, and
tool/model family when useful in the product repository's `JOURNAL.md`. Then
follow [HACKATHON.md](./HACKATHON.md), with
its demo contract as the T+120 acceptance contract. Preserve the T+120
revision before any separately authorized refinement.

## First material falsifier

Before clock start: product behavior, a secret, inherited predecessor state, a
deployment, or a Git-to-Vercel link enters the baseline; the locked shell cannot
start; the public controls above drift in a way that defeats the contributor
or evidence path; or a repository named `brandyn-s/minerva` is created before
the clock-start declaration. Once the clock starts, the detailed outcome, cut lines,
falsifiers, and stop rules live in `HACKATHON.md` rather than being
duplicated here.

Replace this file in place when operating state changes. Append consequential
history to `JOURNAL.md`; do not turn this gate into an activity log.
