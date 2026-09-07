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

### J-20260906-10 — Close public delivery on live evidence

- Gate or slice: Repository readiness
- Actors: Product owner (human), repository agent
- Context: Close the public transition only after the authorized readiness
  change reached `main`, its integrated check passed, and GitHub and Vercel
  could be read back in their final roles.
- Agent proposal: Publish the retained history; use one protected pull-request
  lane, one required repository check, squash-only merges, read-only and
  SHA-pinned GitHub-owned Actions, and native GitHub security services. Keep
  CodeQL advisory and leave Vercel undeployed and unlinked. Do not add an
  activity monitor or approval ceremony.
- Human disposition and rationale: **Accepted through the modified direction
  in `J-20260906-09`.** The owner chose retained Vercel identifiers, corrected
  attribution, and the streamlined GitHub configuration, then authorized push
  and merge. This entry records execution of that decision; it does not infer
  approval from silence or from the agent completing work.
- Evidence or result: Pull request 2 merged as `ccf2ed5`, and the exact
  `main` push run `34083669179` passed `Verify repository`. GitHub readback
  reports public visibility; Issues on; Projects, Wiki, and Discussions off;
  squash-only merging with branch deletion; an active `main` ruleset requiring
  pull requests, resolved threads, and `Verify repository` with zero required
  approvals; read-only Actions restricted to full-SHA-pinned GitHub-owned
  actions; and secret scanning, push protection, private vulnerability
  reporting, and CodeQL default setup enabled. Vercel readback reports zero
  deployments for `thalient/minerva`; the separate provider-link read reports
  no Git connection.
- Errors, friction, or cuts: The first merge command used an incorrectly
  expanded short SHA, so GitHub's expected-head lease rejected it and no merge
  occurred. Refreshing the exact head allowed the authorized squash merge.
  CodeQL's initial analysis was still running at closeout and is intentionally
  not a required status check. No custom activity monitor, project board,
  deployment, or history rewrite was added.
- Remaining uncertainty / reopen when: Reopen repository readiness if a secret
  alert, CodeQL result, protection drift, Vercel deployment or Git link, or a
  contributor-path failure materially changes the public boundary. Product
  work still requires an explicit event-clock declaration.
- Revision and references: pull request 2; `ccf2ed5`; GitHub Actions runs
  `34083669179` and `34083863062`; commit containing this entry

## September 7, 2026

### J-20260907-01 — Repair the contributor path and drop the unused Vercel CLI

- Gate or slice: Repository readiness
- Actors: Product owner (human), repository agent
- Context: A review of the public repository found that `npm run check` failed
  with exit 127 when gitleaks was absent while README and CONTRIBUTING said
  gitleaks was needed only for `secrets:scan`, and that the pinned Vercel CLI
  development dependency was invoked by nothing yet supplied 336 of 736
  lockfile entries, the whole override block, and every alert remediated in
  pull request 1.
- Agent proposal: Fail fast with a named install hint rather than skip the
  gitleaks-dependent tests; document the no-mutation `npx` toolchain path;
  remove the Vercel CLI and its overrides and run it as `npx vercel@59.11.7`
  only when a gate authorizes deployment; remove CODEOWNERS because the ruleset
  does not enforce it; correct stale copy in SECURITY.md and CURRENT_GATE.md.
- Human disposition and rationale: **Accepted.** The owner instructed all
  ranked review items to be implemented. A skipped test reports the same exit
  code as a passing one, and CI should not be gated on a tool the repository
  does not run.
- Evidence or result: Pull request 4 merged as `c45a1d6` and pull request 5 as
  `3329d7d`; each passed `Verify repository`. Pinned-toolchain `npm ci`,
  `npm run check` (six tests, build compiled), `security:audit`, and
  `secrets:scan` all exit 0. Lockfile entries fell from 736 to 400 and
  installed packages from 587 to 340 with zero audit findings.
- Errors, friction, or cuts: Auto-merge is not enabled on the repository, so
  each pull request was merged directly after its checks passed. The
  repository was renamed to `brandyn-s/minerva-template` and marked as a
  GitHub template during this work; the old name redirects, and hardcoded
  `brandyn-s/minerva` URLs in README, SECURITY.md, the issue-template config,
  and package.json still resolve but were not changed.
- Remaining uncertainty / reopen when: The owner decides what the template is
  for; instantiated repositories would inherit those URLs.
- Revision and references: `c45a1d6`, `3329d7d`; pull requests 4 and 5

### J-20260907-02 — Hold the post-review decision drafts as a pending proposal

- Gate or slice: Authority documents
- Actors: Product owner (human), repository agent
- Context: Drafts approving architecture decisions A-008 and A-009 and product
  decisions D-009 through D-011, dated September 7, existed only as
  uncommitted edits on the owner's machine, based on `4773e6e` and therefore
  conflicting with pull requests 2 and 3. No spike, product code, or T+120
  artifact yet exists to inform them, and `ARCHITECTURE.md` keeps spike-gated
  selections open until a named experiment supplies evidence.
- Agent proposal: Preserve the drafts unchanged on the branch
  `proposal/a008-a009-d009-d011-2026-09-07`, record their disposition as
  pending, and revisit them after the T+120 artifact exists rather than
  merging paper-approved decisions ahead of evidence.
- Human disposition and rationale: **Pending** for the decisions themselves;
  the owner accepted recording them as proposals. The decision set on `main`
  is unchanged: D-001 through D-008 and A-001 through A-007.
- Evidence or result: Branch pushed at `99cef44`; `main` carries no A-008,
  A-009, or D-009 through D-011 text.
- Errors, friction, or cuts: The branch is not rebased onto current `main`;
  six files will conflict when it is revisited.
- Remaining uncertainty / reopen when: After the T+120 artifact, or earlier if
  a spike produces evidence bearing on renderer protocol or lineage validation.
- Revision and references: `99cef44` on the proposal branch

### J-20260907-03 — Record the Voice critical-path tradeoff

- Gate or slice: ROADMAP sequencing
- Actors: Product owner (human), repository agent
- Context: D-008 evaluates the thesis with Voice off, yet R8 depends on R7 and
  R9 depends on R8, so R6V and R7 (about five of the 22 critical-path days)
  gate the thesis test on a capability that test does not use. Section 24
  resolved the R5 ordering but not R9.
- Agent proposal: Split R8 into a Voice-off evaluation candidate that feeds R9
  and a separate later Voice freeze, so the thesis test does not wait on
  Voice integration.
- Human disposition and rationale: **Pending.** The owner accepted recording
  the tradeoff in `ROADMAP.md` Section 20; changing approved gate order is a
  product-owner decision to be taken at R5 closeout with rehearsal evidence.
- Evidence or result: The dependency table in `ROADMAP.md` Section 7 and the
  22-day critical-path estimate in Section 20.
- Remaining uncertainty / reopen when: R5 closeout.
- Revision and references: commit containing this entry

### J-20260907-04 — Freeze authority documents and consolidate duplicated text

- Gate or slice: Authority documents / repository readiness
- Actors: Product owner (human), repository agent
- Context: Ten governance files totalled about 3,500 normative lines and 232
  specification identifiers against 88 lines of application code, and the
  documents were still growing before any evidence existed.
- Agent proposal: Freeze `INTENT.md`, `DECISIONS.md`, `SPEC.md`,
  `ARCHITECTURE.md`, and `ROADMAP.md` until the T+120 artifact exists, and
  remove duplicated text without changing any requirement: `SPEC.md`
  Section 18 becomes a table mapping each `EVAL-*` identifier to its D-008
  clause; `ROADMAP.md` Section 3 points to the invariants and decisions
  instead of restating them; the Section 24 interview findings move to
  `docs/archive/`; `ARCHITECTURE.md` Section 26 stops repeating approvals;
  `DEMO.md` merges into `HACKATHON.md` as its demo contract; the README
  repository table becomes a pointer to `AGENTS.md`; and the two journal
  templates are replaced by the field list in `HACKATHON.md`.
- Human disposition and rationale: **Accepted.** Every new paragraph is a
  drift liability with no test behind it; the next input to these documents
  should be evidence from the build.
- Evidence or result: The commit containing this entry; `EVAL-*` identifiers
  and Section 23 traceability are preserved, and no `MUST` obligation is
  removed. `CURRENT_GATE.md` records the freeze.
- Errors, friction, or cuts: Historical journal entries still name `DEMO.md`;
  they are not rewritten.
- Remaining uncertainty / reopen when: The T+120 artifact exists, or a
  demonstrated defect in an authority document blocks the event.
- Revision and references: commit containing this entry

### J-20260907-05 — Generate the product repository from the template at T+0

- Gate or slice: Hackathon T+0 / repository readiness
- Actors: Product owner (human), repository agent
- Context: `brandyn-s/minerva` was renamed to `brandyn-s/minerva-template` and
  marked as a GitHub template. The owner directed that the first action at
  clock start is to create a new `brandyn-s/minerva` repository from it.
- Agent proposal: Create an empty repository and push the template's history
  instead of using template generation, so the intent-before-code commit
  sequence and every revision cited in this journal stay reachable in the
  product repository. Either way, export the `main` ruleset to
  `.github/rulesets/main.json` and script the settings re-application,
  because template generation copies files and not settings.
- Human disposition and rationale: **Modified.** The owner accepted not
  inheriting the commit history; template generation is the chosen path. The
  ruleset export and settings block are accepted.
- Evidence or result: `HACKATHON.md` clock-start sequence now begins with
  generating the product repository and re-applying its controls; the T+0–10
  execution row and the pre-clock check reflect it. `CURRENT_GATE.md` records
  the product repository as not yet created and treats an early
  `brandyn-s/minerva` as a pre-clock falsifier. `.github/rulesets/main.json`
  is the live `main` ruleset exported on September 7, 2026.
- Errors, friction, or cuts: Revision references in entries `J-20260906-01`
  through `J-20260907-05` point at commits in `brandyn-s/minerva-template`,
  not the product repository. Once `brandyn-s/minerva` exists, the redirect
  from the old name ends and the template's own README badge, security
  advisory link, issue-template contact, and package metadata resolve to the
  product repository. The settings block has not been exercised against a
  live repository; its flags were verified against `gh` help and the
  template's current settings, and the clock-start operator reads the result
  back before the first push.
- Remaining uncertainty / reopen when: A settings command fails at T+0, or
  the owner changes the product repository name or visibility.
- Revision and references: commit containing this entry

### J-20260907-06 — Record the owner's design brief for the slice

- Gate or slice: Hackathon preparation
- Actors: Product owner (human), repository agent
- Context: In a two-hour build, every visual and interaction default not
  chosen in advance is chosen by the model at T+30 to T+75. `CAN-005`,
  R2A.6, and R5.5 all turn on the owner's judgment that the surface feels
  like a thinking instrument, and the only visual decision in the repository
  was the shell palette.
- Agent proposal: Do not add a fourth authority document; record a one-page
  disposable brief inside `HACKATHON.md` in the owner's own words, with the
  approved-contract constraints that bound it and the choices still open.
- Human disposition and rationale: **Accepted.** The owner authored the nine
  brief bullets; the constraints and open items were derived from `SPEC.md`
  and are labelled as such. The brief does not select the renderer or alter
  product semantics.
- Evidence or result: `HACKATHON.md` section "Design brief for the slice".
- Errors, friction, or cuts: The cartographic texture and web fonts are the
  only items with build-time cost; both are marked as the first cuts.
- Remaining uncertainty / reopen when: Focus field placement, membership
  marker, Simulated label placement, and light-only versus dark remain open
  and should be settled before T+0 or at T+0–10 by the owner.
- Revision and references: commit containing this entry

### J-20260907-07 — Proposal: prove the provider envelope with Branch only in R2B

- Gate or slice: ROADMAP R2B (proposal; roadmap frozen)
- Actors: Product owner (human), repository agent, external reviewer (Codex)
- Context: R2B.1 defines and contract-tests schemas for all seven provider
  stages and R2B.6 runs every stage against the provider before R3 builds the
  first Branch. Five of those stages belong to capabilities R4 and R6 build
  later, which sits badly with `SCOPE-003` and the roadmap's "proof stays
  smaller than product work" constraint.
- Agent proposal: Keep the closed discriminated stage contract, but implement
  and exercise only `branch` in R2B while rejecting every other stage value.
  R2B still proves the stage-agnostic properties it exists for: admission,
  hard envelope, replay, cancellation, and late-result rejection. Add
  `compare`, `recombine`, and `harvest` schemas and real calls in R4, and the
  three Searchlight stages in R6, under the same contract-test harness. R6
  already reopens R2B if Searchlight exceeds the server maximum.
- Human disposition and rationale: **Pending.** `ROADMAP.md` is frozen; this
  entry records the proposal for the owner to accept, modify, or reject.
- Evidence or result: `ROADMAP.md` R2B.1, R2B.6, and `SPEC.md` `SCOPE-003`.
- Errors, friction, or cuts: Deferring stage schemas risks discovering at R6
  that a Searchlight stage does not fit the envelope; the existing R6 reopen
  rule bounds that risk.
- Remaining uncertainty / reopen when: Owner decision; R1 exit at the latest.
- Revision and references: commit containing this entry

### J-20260907-08 — Proposal: split the R5 pass condition and move the discovery veto

- Gate or slice: ROADMAP R5, R6, R6V, R7 (proposal; roadmap frozen)
- Actors: Product owner (human), repository agent, external reviewer (Codex)
- Context: Interview finding 1 (archived) deliberately made `none` unable to
  pass R5 so that Searchlight and Voice would not be built on an instrument
  that changed no thinking. The counterargument is that Branch is one
  directed expansion and cannot address the convergence problem `INTENT.md`
  names; Searchlight is the mechanism aimed at it. A Branch-only rehearsal
  that yields `none` is therefore a likely false negative and would stop the
  build before its distinctive mechanism exists.
- Agent proposal: Split R5. Usability, context predictability, and canvas
  burden remain a hard gate for R6. The provisional consequential shift is
  recorded, but `none` alone does not block R6. Add an owner rehearsal with
  Searchlight at R6 closeout where `none` does stop the build. Gate R6V and
  R7 (Voice) on that post-Searchlight rehearsal rather than on R5, which also
  resolves the critical-path tradeoff in `J-20260907-03`.
- Human disposition and rationale: **Pending.** This reverses an approved
  interview resolution and `ROADMAP.md` is frozen; the owner decides.
- Evidence or result: `ROADMAP.md` R5 exit decision and smallest decisive
  evidence; `docs/archive/roadmap-interview-findings-2026-09-06.md` item 1;
  `INTENT.md` problem statement.
- Errors, friction, or cuts: Accepting spends R6's four-day budget on
  Searchlight before any thinking-change evidence exists; rejecting accepts
  the false-negative risk. Neither is free.
- Remaining uncertainty / reopen when: Owner decision; R4 exit at the latest.
- Revision and references: commit containing this entry

### J-20260907-09 — Correct the Vercel record, repair the bootstrap, and add the execution matrix

- Gate or slice: Repository readiness / hackathon preparation
- Actors: Product owner (human), repository agent, external reviewer (Codex)
- Context: An external review reported that the `thalient/minerva` Vercel
  project no longer exists. An independent live read confirmed it: the team's
  project list is empty and `prj_JqzTIJqpZZZomnXhqMVnEPSNNzFe` returns 404,
  so `CURRENT_GATE.md` was asserting a false current state. The same review
  found that `gh repo create --clone` run inside the template checkout would
  nest the product repository, that the hackathon packet had no lane
  ownership map or shared-contract freeze, and that the scope ladder read as
  if the floor were the goal.
- Agent proposal: Correct the operating record; create and link the Vercel
  project at T+0 as content-free infrastructure with a pre-clock
  authentication check; move the bootstrap to the template checkout's parent
  directory; add a three-lane execution matrix (mission control, canvas/state,
  inference) with a T+30 contract freeze, one issue per lane, and a
  mission-control-only deployment lane; state that T+120 aims at the target.
  Decline the reviewer's per-lane JSONL ledgers because the repository retired
  an equivalent receipt system on September 6 for growing larger than the
  decisions it served. Decline, pending a separate owner decision, the
  reviewer's proposals to add Expedition, terrain/basins/attractors, an
  Oblique Strategies deck, and Voice to the event, because each is a named
  exclusion in `INTENT.md`, `SPEC.md` Section 21, or D-005, or reverses the
  owner's earlier cut in `J-20260906-04` and `J-20260906-07`.
- Human disposition and rationale: **Accepted** for the four gate-internal
  changes. The product-scope expansions remain **pending** an explicit owner
  decision because they change approved authority, not the hackathon packet.
- Evidence or result: Live Vercel readback on September 7, 2026 (team
  `thalient`: zero projects; recorded project ID: 404). Vercel CLI 59.11.7
  flags for `project add`, `link --yes --team --project`, `deploy --yes`, and
  `inspect --wait --timeout` verified against the CLI's own help.
  `HACKATHON.md` and `CURRENT_GATE.md` updated; frozen authority documents
  untouched.
- Errors, friction, or cuts: Who deleted the Vercel project and when is not
  recorded anywhere reachable; the R0 receipt in Git history and pull request
  3's readback remain accurate for their own dates. The Vercel commands in the
  clock-start block are unexercised until T+0, like the GitHub settings block.
- Remaining uncertainty / reopen when: The owner decides on the scope
  expansions; a T+0 Vercel command fails; or the project is created before the
  clock-start declaration.
- Revision and references: commit containing this entry

### J-20260907-10 — Approve three disposable hackathon experiments outside the prototype boundary

- Gate or slice: Authority documents / hackathon T+120–480
- Actors: Product owner (human), repository agent, external reviewer (Codex)
- Context: The external review argued that the hackathon packet did not
  express the owner's ambition and proposed adding Voice, an Oblique
  Strategies-seeded Searchlight, and bounded Expedition with descriptive
  terrain. Each is a named exclusion in `INTENT.md`, `SPEC.md` Section 21, or
  D-005, or reverses the owner's earlier hackathon cut.
- Agent proposal: Approve none of them and keep the Branch-first packet with
  three-arm Searchlight as the target, because each changes approved authority
  or skips a spike the roadmap requires. If any were approved, record them as
  labelled disposable experiments under the `ROADMAP.md` Section 1 and
  `SPEC.md` Section 1 experiment clauses rather than amending the
  first-prototype contract.
- Human disposition and rationale: **Rejected in favour of approving all
  three.** The owner selected Voice at T+480, the Oblique Strategies
  experiment, and Expedition plus terrain at T+480. The agent's fallback shape
  was accepted: they are recorded as D-012, D-013, and D-014, eligible only in
  the T+120–480 window as the single primary improvement, disposable, and
  unable to close a gate or claim the conformance they depart from.
  `INTENT.md`, `SPEC.md`, D-005, and D-007 are unchanged.
- Evidence or result: `DECISIONS.md` gains the three decisions and a section
  explaining their boundary; `HACKATHON.md` target, exclusions, refinement
  priorities, execution matrix, implementation constraints, unmakeable claims,
  and T+480 record are updated; `CURRENT_GATE.md` lists the authorized
  experiments and the one owner-approved exception to the freeze.
- Errors, friction, or cuts: D-012 skips the EXP-004 real-browser spike, so
  media and credential risks are discovered live. D-014 gathers horizon
  evidence before D-008, the reverse of `ROADMAP.md` Section 23's order; the
  roadmap text is not changed because Section 1 already permits a disposable
  owner-authorized experiment. D-009 through D-011 remain reserved for the
  pending proposal branch. The pending proposals `J-20260907-03`, `-07`, and
  `-08` are unaffected.
- Remaining uncertainty / reopen when: The T+120 decision entry names which
  experiment, if any, runs; a falsifier in D-012, D-013, or D-014 fires; or
  the owner decides after the event whether any experiment becomes a product
  decision.
- Revision and references: commit containing this entry

### J-20260907-11 — Accept J-20260907-08: split R5 and move the discovery veto to R6.9

- Gate or slice: ROADMAP amendment 1.2 (R5, R6, R7)
- Actors: Product owner (human), repository agent
- Context: The owner accepted the pending proposal `J-20260907-08`.
- Agent proposal: Implement it as recorded, with one visible deviation: keep
  the R6V transport spike parallel to R6 rather than gating it on R6.9,
  because R6V is a disposable feasibility lane that retains no product code,
  and serializing it would lengthen the critical path by about two days
  without protecting anything the proposal exists to protect. Gate R7 (Voice
  integration) on R6.9 as proposed.
- Human disposition and rationale: **Accepted** for the proposal; the R6V
  deviation is the agent's implementation choice and is reversible with one
  dependency edit if the owner prefers the literal reading.
- Evidence or result: `ROADMAP.md` is now Approved 1.2. R5 passes on
  usability, context predictability, and canvas burden; a Branch-only
  provisional shift or explicit `none` is recorded, not gating. New task R6.9
  repeats the owner rehearsal on the Searchlight build and holds the
  consequential-discovery veto; an explicit `none` there stops capability
  expansion and R7 does not start. R7 depends on R6 including R6.9. The
  dependency summary, D-008 and AC-018 traceability rows, the non-delegable
  question, the critical-path estimate (22 to 23 days), the falsifier
  provenance rows, the Section 24 pointer, and Section 25 are updated.
  `DECISIONS.md` D-008 and `SPEC.md` are unchanged: Stage 1's "simplify
  before recruiting" still holds because recruitment is R9.
- Errors, friction, or cuts: `J-20260907-08` claimed that accepting it would
  resolve `J-20260907-03`. That was an overstatement: gating R7 on evidence
  does not remove Voice from the critical path, because R8 still depends on
  R7. `J-20260907-03` remains pending and the Section 20 tradeoff paragraph
  now says so.
- Remaining uncertainty / reopen when: R5 or R6.9 closeout; the owner
  decides `J-20260907-03`; or the owner reverses the R6V deviation.
- Revision and references: commit containing this entry

### J-20260907-12 — Accept the four remaining design-brief defaults

- Gate or slice: Hackathon preparation
- Actors: Product owner (human), repository agent
- Context: The design brief left four first-screen choices open: Focus field
  placement, the membership marker, the Simulated label, and light-only
  versus dark.
- Agent proposal: A pinned top-left mono Focus strip with per-card `IN FOCUS`
  tags; a mono `MEMBER OF` header tag plus structure border tone with a
  dashed drop preview; a mono ink `SIMULATED` header tag repeated in the
  receipt and Focus strip, never a lineage accent; light-only for the slice.
- Human disposition and rationale: **Accepted "for now".** The choices are
  presentation inside the disposable slice and may be revised at T+0–10 by
  the owner without a further entry.
- Evidence or result: `HACKATHON.md` design brief section "Decided September
  7, 2026" replaces "Still open before T+0". Each default cites the
  `SPEC.md` requirement it serves; none changes context, Focus, membership,
  or History semantics.
- Errors, friction, or cuts: These defaults were proposed by the agent, not
  authored by the owner, unlike the nine brief bullets; the section says so.
- Remaining uncertainty / reopen when: The owner revises any of them at
  T+0–10, or the T+120 rehearsal shows one of them costs legibility.
- Revision and references: commit containing this entry

### J-20260907-13 — Align pre-clock preparation with deployed creative iteration

- Gate or slice: Hackathon preparation; PRE-CLOCK remains inactive
- Actors: Product owner (human), repository agent
- Context: The launch packet treated deployment as stretch, allowed D-013
  before its authorized refinement window, and retained a blanket Voice
  prohibition inside the D-012 window. Template-facing metadata still named
  the future product repository.
- Agent proposal: Make a reviewer-accessible deployed interaction and a
  meaningful second iteration core acceptance. Prepare a concrete library
  example and an unassisted first action; reconcile experiment timing and
  template identity. Preserve independent-arm Searchlight, with iterative
  Branch as the fallback rather than introducing batch exploration.
- Human disposition and rationale: The owner authorized implementation of
  the recommendations after their evaluation against the current repository.
  This authorizes the pre-clock corrections and preparation, not clock start,
  product implementation, provider spend, or deployment. Exact example copy,
  arrangement, and revised time allocations are agent-authored choices
  submitted for review, not separately owner-approved product decisions.
- Evidence or result: `HACKATHON.md` now carries required delivery and access
  evidence, a prepared five-card example, a second-iteration journey, revised
  scope and cut rules, and matching checkpoint fields. `README.md` and
  `CURRENT_GATE.md` reflect that planned outcome without claiming product
  progress. Template badge, package metadata, and private-reporting links
  identify `minerva-template`; the bootstrap checklist scopes their
  substitutions in the generated product.
- Errors, friction, or cuts: The earlier optional-deployment and
  floor-as-automatic-shortfall execution advice is superseded for this slice.
  D-013 remains T+120–480 only; D-012 remains a conditional refinement choice.
  Batch exploration, public anonymous provider access, and long-form roadmap
  changes are not adopted. ESLint peer compatibility remains maintenance
  debt; no dependency change is justified by this preparation work.
- Remaining uncertainty / reopen when: The owner reviews the editorial
  choices; T+0 measurements expose timing friction; provider/admission or
  reviewer access cannot meet the delivery boundary; or the deployed
  rehearsal fails to support meaningful refinement. A simulated interaction
  does not establish consequential discovery.
- Revision and references: commit containing this entry; proposal issue #15.
  `INTENT.md`, `DECISIONS.md`, `SPEC.md`, `ARCHITECTURE.md`, and `ROADMAP.md`
  remain unchanged. No product code, application fixtures, provider calls,
  project creation, or deployment is part of this change.

### J-20260907-14 — Approve executable walking-skeleton delivery improvements

- Gate or slice: Repository process maintenance; ROADMAP amendment 1.3
- Actors: Product owner (human), repository agent
- Context: Reusable delivery needed earlier visible integration, platform
  preflight, reliable worker control, and less duplicate progress bookkeeping.
  The owner further clarified: default to one implementer, use resumable
  content-free operational tooling, check early comprehension, review blocked
  work after five minutes, and do not import product or compiler shortcuts
  from a different implementation.
- Agent proposal: Parameterized private-by-default launch, Vercel/Gateway-first
  preflight, one permission decision with distinct external boundaries,
  editable-durable-card-first sequencing, short acknowledged worker units,
  one machine-timestamped event source, portable adversarial contract fixtures,
  frozen integration batches, and separate implementation/live/human states.
- Human disposition and rationale: **Accepted for implementation.** This
  authorizes process/tooling and delivery-order improvements in the template,
  not product activation, deployment, provider spend, participant contact, or
  weaker semantic and human-evaluation gates. Exact tooling interfaces are
  engineering choices, not separately human-accepted product outcomes.
- Evidence or result: Launch/control tools and fixture-harness self-tests are
  reusable without a product implementation. README and the working agreement
  route to one delivery procedure; HACKATHON uses a parameterized launch and
  early visible milestones; ROADMAP 1.3 distinguishes thin implementation order
  from acceptance dependencies. Vercel build configuration retains exact pins.
- Errors, friction, or cuts: Manual duplicate status narratives, hardcoded
  public product creation, long unacknowledged worker turns, and repeated
  full-suite checks on intermediate snapshots are superseded. T+10/T+20 are
  intervention thresholds, not measured savings or completion guarantees.
  Guarded local commands do not intercept arbitrary external agent tools.
- Remaining uncertainty / reopen when: A product adapter fails conformance;
  platform entitlement or privacy readback differs; live admission or access
  remains unproved; or the delivery cadence fails to expose a blocked path.
  Template self-tests do not close product, live-provider, or human gates.
- Revision and references: Commit containing this entry; proposal issue #17;
  `docs/delivery-workflow.md`. No private product source or incident logs are
  included; the template remains PRE-CLOCK.

### J-20260907-15 - Simplify the mandatory build path

- Scope: Template process maintenance, superseding the coordination requirements
  in J-20260907-14 and ROADMAP amendment 1.3, not the product behavior contract.
- Human disposition: The owner authorized removing complexity that does not
  earn its cost and requested demonstrated efficiency rather than more machinery.
- Decision: Remove the process controller/event protocol and generic adapter
  conformance framework, including their dedicated tests and manuals. One
  implementer, one branch, existing native tools, targeted product regressions,
  and an ordinary PR are the default. Separate agent review is risk-dependent,
  not mandatory. Keep historical authority documents as references.
- Retained: The pinned shell, private-by-default resumable launch, identity and
  permission readbacks, Next.js deployment helper, CI, secret scanning, and
  product safety/human-evidence boundaries. Narrow executable npm detection and
  sanitized API error fixes address concrete failures without another protocol.
- Evidence: Compare the shipped baseline with this candidate using the same
  pinned check command on the same machine, plus reading-surface counts and
  retained helper/shell smokes. Actual measurements and limitations belong on
  this PR; fewer harness checks are not proof of a faster full product build.
- Remaining uncertainty: End-to-end product delivery improvement still needs
  an equal-scope build. No deployment, spend, product implementation, or human
  acceptance is authorized by this simplification.
