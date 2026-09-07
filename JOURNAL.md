# Minerva judgment journal

This append-only log records consequential human judgment, model proposals and
their disposition, material assumptions, falsifiers, failures, cuts, and gate
transitions. It is not an activity transcript, prompt archive, chain-of-thought
record, or substitute for the approved product documents.

`CURRENT_GATE.md` holds the current operating state. `INTENT.md`, approved
`DECISIONS.md`, `SPEC.md`, `ARCHITECTURE.md`, and `ROADMAP.md` remain the
authority chain.

## Recording rule

Add an entry when any of these occurs:

- the product owner starts, closes, pauses, or redirects a gate or time-boxed
  slice;
- a human approves, modifies, rejects, or reopens a material model proposal;
- an assumption changes scope, architecture, user experience, safety, spend, or
  the demo claim;
- the first material falsifier occurs, a meaningful failure repeats, or a cut
  changes what can truthfully be claimed; or
- native evidence changes the decision.

Do not log routine commands, every model suggestion, private reasoning, or
content-bearing participant material. Reference the smallest native evidence;
keep sensitive artifacts outside Git. Correct an old entry with a new entry—do
not rewrite history. Entries before `J-20260906-06` consolidate the original
bullet log without changing its substance.

## Entry contract

Use only fields that carry the decision. Separate the agent's proposal from the
human disposition so a reviewer can evaluate judgment without reconstructing a
transcript. Authorization to pursue an outcome is not acceptance of every
implementation choice. Never infer human acceptance from silence; record the
disposition as `pending` until the human explicitly accepts, modifies, or
rejects the proposal.

```md
### J-YYYYMMDD-NN — Short title

- Time: ISO 8601 when sequence matters; otherwise date
- Gate or slice: Rn, hackathon, or repository
- Actors: human, agent, reviewer, or system
- Context: what required judgment
- Agent proposal: the material recommendation or `None`
- Human disposition and rationale: accepted | modified | rejected | pending,
  followed by the non-delegable choice and why
- Evidence or result: smallest outcome-bearing observation, including failures
- Errors, friction, or cuts: only what affects the claim
- Remaining uncertainty / reopen when: the condition that changes this decision
- Revision and references: source revision and content-free artifact links
```

## September 6, 2026

### J-20260906-01 — Approve the product and long-form plan

- Gate or slice: Authority / R0
- Actors: Product owner (human)
- Trigger or proposal: Freeze the greenfield Minerva intent, approved decisions
  D-001 through D-008, behavior contract, architecture, and roadmap; authorize
  only the runway needed before product construction.
- Disposition: **Approved**
- Human judgment: Preserve Minerva as a spatial thinking environment whose
  success depends on consequential human discovery, not implementation volume
  or model self-evaluation. R0 alone was authorized at this point.
- Evidence or result: The immutable authority commit predates generated code;
  the next commit established only the isolated scaffold.
- References: `a1a1ff9`, `4318a97`
- Remaining uncertainty / reopen when: Product requirements change or native
  build evidence falsifies an approved architecture boundary.

### J-20260906-02 — Correct the pre-build boundary

- Gate or slice: R0
- Actors: Product owner (human), engineering agent
- Trigger or proposal: The draft prohibition on all implementation conflicted
  with the explicitly authorized greenfield runway.
- Disposition: **Modified**
- Human judgment: Allow only bounded R0 scaffold and isolation work; R1 and all
  product behavior remain unauthorized.
- Evidence or result: The repository, locked shell, and isolation controls were
  created without a product data model, workspace store, provider route,
  deployment, or inherited predecessor state.
- References: `4318a97`
- Remaining uncertainty / reopen when: A pre-clock change creates product
  capability or imports predecessor code, state, deployment, or secrets.

### J-20260906-03 — Close R0 on native infrastructure evidence

- Gate or slice: R0
- Actors: Engineering and review agents
- Trigger or proposal: Decide whether the repository and platform boundary were
  isolated and reproducible enough to begin later work.
- Disposition: **Observed**
- Human judgment: No separate product-owner closeout was recorded. The product
  owner authorized R0; engineering evidence subsequently recorded it passed as
  infrastructure only, with no product capability or R1 authorization.
- Evidence or result: Clean source checks passed at `dcaa0bf`; repository and
  Vercel readback identified only the isolated Minerva boundaries, with zero
  deployments, aliases, integration resources, or provider routes.
  A transient canonical Git link was removed before closeout. Earlier verifier
  defects and development-dependency alerts remained visible rather than being
  converted into a product claim.
- References: `dcaa0bf`, `7c70493`; the retired detailed R0 receipt remains in
  reachable Git history
- Remaining uncertainty / reopen when: Native readback reveals predecessor
  leakage, a deployment, a client secret, or a false isolation claim.

### J-20260906-04 — Define the pre-clock hackathon boundary

- Gate or slice: Hackathon preparation
- Actors: Product owner (human), planning agent
- Trigger or proposal: Prepare Minerva to start quickly without spending the
  event clock on planning or beginning the product early.
- Disposition: **Approved**
- Human judgment: Before the clock, allow plans, locked tooling, content-free
  infrastructure, and scaffold only. The event slice begins solely on an
  explicit product-owner clock declaration and cannot close roadmap gates.
- Evidence or result: `HACKATHON.md` and `DEMO.md` define the T+120 outcome,
  scope ladder, stop rules, and acceptance path while product source,
  persistence, provider routes, and deployment remain absent.
- References: `8e01862`, `3675f43`
- Remaining uncertainty / reopen when: The product owner changes the event
  clock, desired checkpoint, or authority boundary.

### J-20260906-05 — Remediate scaffold dependency alerts

- Gate or slice: Repository readiness
- Actors: Engineering agent; GitHub dependency evidence
- Trigger or proposal: Thirty-five Dependabot alerts entered through the pinned
  Vercel CLI development tree.
- Disposition: **Implemented**
- Human judgment: Not separately recorded; this was an engineering remediation.
- Evidence or result: Pull request 1 merged as `4773e6e`; product source and
  deployment state remained unchanged.
- References: `4773e6e`, GitHub pull request 1
- Remaining uncertainty / reopen when: A Vercel CLI update changes the graph or
  the unlocked graph passes the audit and authenticated project inspection.

### J-20260906-06 — Retire the universal R0 receipt machinery

- Gate or slice: Repository readiness
- Actors: Product owner (human), planning and engineering agents
- Trigger or proposal: The model recommended paring back a custom schema,
  validator, administrative gate counter, and source-string page test that had
  become more complex than the decision they were meant to support.
- Disposition: **Approved**
- Human judgment: Preserve the R0 conclusion and its Git history, but prefer
  native evidence plus one concise journal closeout. Keep controls that still
  protect a material boundary: secret scanning, dependency audit, lint,
  typecheck, tests, and build.
- Evidence or result: The active tree removes the JSON schema, R0 JSON,
  validator, validator tests, and copy-coupled shell test. `CURRENT_GATE.md`,
  this journal, and the native check become the smaller operating system. The
  change is based on `4773e6e`; final verification belongs to the change that
  contains this entry rather than a duplicate machine receipt.
- References: base `4773e6e`; commit containing this entry
- Remaining uncertainty / reopen when: Native evidence and the journal cannot
  answer a material gate decision. Add only the narrow helper needed then.

### J-20260906-07 — Stage the hackathon at T+120 and T+480

- Gate or slice: Hackathon preparation / ROADMAP 1.1
- Actors: Product owner (human), planning agent
- Trigger or proposal: Make the repository a decisive build kickoff for a
  working two-hour prototype with up to eight hours available for refinement.
- Disposition: **Approved**
- Human judgment: T+120 is a preserved working-prototype checkpoint. It does not
  pre-authorize another six hours: after seeing the exact demo, the owner may
  stop, reject every proposed addition, or authorize no more than one primary
  improvement and one distinct safe reliability improvement. Generated feature
  volume is not evidence of maturity.
- Evidence or result: `CURRENT_GATE.md` becomes the subordinate operating
  record; `HACKATHON.md` defines the two checkpoints and stop rules; `DEMO.md`
  preserves the T+120 result and any T+480 delta. No product code or deployment
  is added by this amendment.
- References: base `4773e6e`; commit containing this entry
- Remaining uncertainty / reopen when: The event duration changes, the T+120
  demo exposes different friction, or the product owner changes the truthful
  demo claim.

### J-20260906-08 — Prepare the repository for public collaboration

- Gate or slice: Repository readiness
- Actors: Product owner (human), repository and review agents
- Context: The product owner requested a professional, maintainable,
  agent-first repository that is ready to be made public without implying that
  the product has already been built.
- Agent proposal: Lead with the Minerva thesis; add an MIT license, community
  contribution and security contracts, SHA-pinned CI, dependency maintenance,
  one canonical cross-agent instruction source, and structured judgment fields
  in issues and pull requests. Do not build a real-time activity monitor or
  change visibility as part of repository preparation.
- Human disposition and rationale: **Accepted, with one publication choice
  pending.** Repository preparation and a license were explicitly requested;
  with no license family prescribed, the implementation selects the short,
  permissive MIT License for the public project. Licenses already granted are
  not retroactively revocable. The product owner has not yet decided the public
  treatment of historical infrastructure identifiers.
- Evidence or result: The public-facing README now distinguishes plan, shell,
  and product; the contributor path needs no private platform access. A local
  exact-toolchain run passed install, audit, lint, typecheck, five tests, build,
  and full-history/current-content secret scanning; the CI workflow mirrors
  those checks. `CLAUDE.md` imports `AGENTS.md`, and the obsolete pre-build
  critique is archived as a dated historical snapshot.
- Errors, friction, or cuts: GitHub branch rules, private vulnerability
  reporting, secret scanning, and code scanning cannot be finalized in this
  private/free repository state. A code of conduct is deferred rather than
  publishing a fake or non-private enforcement contact. The retired R0 receipt
  remains reachable in Git history and contains opaque Vercel identifiers, not
  credentials.
- Remaining uncertainty / reopen when: Before visibility changes, the owner
  accepts those identifiers as public metadata or authorizes a clean-root
  history, then enables the publication-time GitHub protections after the
  readiness change reaches `main`.
- Revision and references: base `4773e6e`; draft pull request 2; commit
  containing this entry

### J-20260906-09 — Correct attribution and authorize public delivery

- Gate or slice: Repository readiness
- Actors: Product owner (human), repository agent
- Context: Entry `J-20260906-08` treated authorization of the public-readiness
  outcome as acceptance of implementation details before the product owner had
  explicitly dispositioned them.
- Agent proposal: Keep MIT, the product-first README, one canonical agent
  contract, bounded CI and GitHub maintenance, judgment fields instead of an
  activity monitor, and a one-PR delivery lane. Either retain the retired R0
  receipt with its opaque Vercel identifiers or replace the public Git history.
- Human disposition and rationale: **Modified and approved.** The product owner
  explicitly chose to retain the Vercel identifiers, instructed that the
  attribution be corrected, and authorized the discussed GitHub configuration,
  push, and merge. The identifiers are accepted as non-secret public metadata;
  preserving the intent-before-code history is preferred to rewriting it.
- Evidence or result: This append-only entry corrects `J-20260906-08` without
  rewriting it. The pull-request and proposal templates are reduced to expose
  the consequential proposal, explicit human disposition, rationale, decisive
  evidence, and falsifier without collecting prompts or private reasoning.
- Errors, friction, or cuts: At the time of this entry, publication and its
  public-only protections are authorized but not yet claimed complete. Their
  state must be established by GitHub and Vercel readback after merge.
- Remaining uncertainty / reopen when: Reopen only if the sensitivity model for
  those identifiers changes or live readback contradicts the no-deployment,
  no-Git-link boundary.
- Revision and references: draft pull request 2; commit containing this entry

## Clock-start entry template

Copy this only when the product owner explicitly starts the event clock:

```md
### J-YYYYMMDD-NN — Start the hackathon slice

- Time: YYYY-MM-DDTHH:MM:SS±HH:MM
- Gate or slice: Hackathon T+0
- Actors: Product owner (human), operator, tool/model family when useful
- Context: Product owner declares the clock started
- Agent proposal: T+120 scope or sequencing proposal, if any
- Human disposition and rationale: The T+120 floor, target, cut lines, and demo
  claim are accepted or modified as follows: ...
- Evidence or result: Clean base revision ..., build branch ..., locked runtime
  preflight ...
- Errors, friction, or cuts: ...
- Remaining uncertainty / reopen when: First material falsifier or a cut changes
  the demo claim
- Revision and references: base SHA ..., branch ..., content-free session
  reference only when useful ...
```

After the frozen T+120 artifact is demonstrated, record a separate decision:

```md
### J-YYYYMMDD-NN — Decide whether to refine after T+120

- Time: YYYY-MM-DDTHH:MM:SS±HH:MM
- Gate or slice: Hackathon T+120 checkpoint
- Actors: Product owner (human), operator, tool/model family when useful
- Context: Observed T+120 demo, failures, and friction
- Agent proposal: Ranked stop/continue options and their tradeoffs
- Human disposition and rationale: accepted | modified | rejected — stop now,
  or continue to T+480 with zero or one named primary improvement (floor repair
  or creative leverage) and, only when distinct and safe, zero or one
  reliability improvement because ...
- Evidence or result: T+120 commit ..., demo record ..., observed friction ...
- Errors, friction, or cuts: ...
- Remaining uncertainty / reopen when: The selected work destabilizes the
  checkpoint or new evidence changes the demo claim
- Revision and references: T+120 SHA ..., content-free evidence refs ...
```
