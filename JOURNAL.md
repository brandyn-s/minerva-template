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
