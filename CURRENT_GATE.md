# Minerva current gate

> Subordinate execution record. This file states current authorization; it
> cannot override `INTENT.md`, approved `DECISIONS.md`, `SPEC.md`,
> `ARCHITECTURE.md`, or `ROADMAP.md`.

## Operating state

| Field | Current value |
|---|---|
| Product mode | **PRE-CLOCK / INACTIVE** |
| Repository work | **PROCESS MAINTENANCE AUTHORIZED** — reusable launch, control, conformance fixtures, and delivery-workflow amendment (`J-20260907-14`) |
| Product capability | None; the tracked application remains a shell |
| Readiness change | Pull requests 2 and 3 merged as `ccf2ed5` and `64f8b88`; each exact `main` push check passed |
| Publication state | **PUBLIC** — GitHub controls enabled; renamed to `brandyn-s/minerva-template` and marked as a GitHub template on September 7, 2026 |
| Vercel | Historical template project retired; no deployment is authorized here. Each product launch preflights its own project and access boundary. Never inherit the retired linkage. |
| Product repository | Selected explicitly per launch; private by default. A generated repository does not inherit template commit history. This template does not track the state of individual products. |
| Event checkpoint | Reviewer-accessible deployed creative loop at T+120, including a visible second iteration; optional refinement requires a separate T+120 owner decision |
| Long-form roadmap | R1 through R9 remain inactive here. A product launch may authorize named implementation scope once; evidence and human gates remain separate. |
| Authority documents | **FROZEN** with owner-approved exceptions: D-012 through D-014 (`J-20260907-10`), ROADMAP 1.2 (`J-20260907-11`), and process/sequence amendment 1.3 (`J-20260907-14`). Product semantics are unchanged. |
| Authorized experiments | **D-012** Voice spike, **D-013** Oblique-seeded Searchlight slice, **D-014** bounded Expedition and descriptive terrain — T+120–480 only, disposable, one at a time as the owner's primary improvement, cannot close a gate or claim the conformance they depart from |
| Last transition | Owner authorized the reusable process improvements in `J-20260907-14`; this does not launch a product or authorize deployment or spend. |

## Authorized before clock start

- Maintain the public repository and repair a material defect that would
  prevent a fresh contributor or the locked shell from starting.
- Correct planning or execution documents without changing approved product
  intent or manufacturing product progress.
- Maintain the exact toolchain, content-free controls, and bounded evidence
  needed to begin the event cleanly.
- Implement the approved reusable launch/preflight CLI, worker control/event
  tooling, adapter-facing contract fixtures, and walking-skeleton workflow.
  Fixture harness doubles are synthetic tooling, not a product implementation.
- Leave `INTENT.md`, `DECISIONS.md`, `SPEC.md`, `ARCHITECTURE.md`, and
  `ROADMAP.md` frozen. Only a correction of a demonstrated defect or an
  owner-approved consolidation with no semantic change may land, apart from
  the explicitly approved ROADMAP 1.3 delivery-order amendment. A new
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

When the owner explicitly requests a product launch, record its repository,
`full` or `hackathon` profile, and separate external permissions with the
[launch CLI](./docs/launch-cli.md). Preflight, generate the named repository,
read back supported controls, and record the source revision and launch
decision in that product's `JOURNAL.md`. Replace its copied `CURRENT_GATE.md`
with its actual authorized state before implementation. Follow the
[delivery workflow](./docs/delivery-workflow.md) and the selected profile.
Only the hackathon profile uses the T+120 demo contract and separate refinement
decision; a full-profile request is not silently cut to that profile.

## First material falsifier

Before clock start: product behavior, a secret, inherited predecessor state, a
deployment, or a Git-to-Vercel link enters the baseline; the locked shell cannot
start; the public controls above drift in a way that defeats the contributor
or evidence path; or external creation, publication, deployment, or spending
occurs without the corresponding launch permission. After launch, detailed
outcomes and stop rules live in the selected profile rather than being
duplicated here.

Replace this file in place when operating state changes. Append consequential
history to `JOURNAL.md`; do not turn this gate into an activity log.
