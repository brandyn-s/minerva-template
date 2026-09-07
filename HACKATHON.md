# Minerva hackathon launch plan

Status: **pre-clock launch packet**. This document makes the repository ready
to reach a working checkpoint in two hours and, when useful, refine it for up
to eight. It does not authorize or claim completion of any ROADMAP gate, and it
does not replace the approved authority chain.

## Clock boundary

Before the clock starts, the repository may contain only approved product
documents, locked tooling, content-free infrastructure configuration, evidence,
and planning. Product domain code, workspace persistence, canvas behavior, AI
routes, Voice, and deployable product behavior begin only after the clock starts.

The pre-clock baseline is intentionally uneventful:

| Ready before the clock | Deliberately starts at T+0 |
|---|---|
| Greenfield repository and clean `main` | Product-owned domain records and commands |
| Vercel team `thalient` reachable; the project is created at T+0 | Browser-local workspace repository |
| Exact Node/npm lock and reproducible install | Editable spatial canvas and Focus behavior |
| Minimal Next.js shell and one bounded `npm run check` | Branch/Searchlight operation adapters |
| Reserved environment and storage names; provider routes disabled | Provider selection, route implementation, or credentials |
| Approved intent, decisions, specification, architecture, and roadmap | Any demo deployment |

Do not add speculative directories, empty abstractions, SDKs, sample product
state, or hidden feature flags merely to make the repository look busier.

## Two-hour outcome

At T+120, Minerva should make one narrow claim:

> On a real ambiguous problem, a user can arrange durable cards, explicitly
> choose what the AI sees, receive a visibly derived alternative as an ordinary
> card, and use the spatial result to name a consequential direction they did
> not begin with.

The canvas remains the primary surface. A transcript, prompt form, settings
panel, or generic chat must not become the product.

This is a hackathon experience slice, not the approved first prototype. It
borrows the smallest useful vertical slice from R3 and, only if the floor is
stable, the targeted divergence behavior from R6. It does not pass R1, R2, R3,
or R6 and must not be used to close their evidence gates.

## Scope ladder

T+120 aims at the target. The floor is the cut line that keeps the demo
truthful, not the goal; reaching only the floor is recorded as a shortfall,
not as success.

### Floor — protect this first

- Editable cards on a pan-and-drag spatial surface.
- The canonical example and an equally visible blank start.
- Browser-local durability using an adapter behind the product-owned workspace
  boundary.
- Explicit Focus with a visible **AI sees N cards** count. Geometry alone never
  changes AI context.
- One Branch action whose result lands as an ordinary editable card with a
  visible `derived from` relationship and a compact context receipt.
- Reload restores the last acknowledged cards, positions, Focus, and lineage.

### Target — the best two-hour demo

- A targeted Searchlight sweep selects three context-appropriate, deliberately
  different approaches before generation.
- The three arms stay neutral and land independently as ordinary cards; failed
  work remains visible.
- The user can arrange the alternatives, write an ordinary synthesis card, and
  explain one consequential connection, tension, or direction.

### Stretch — only after the target is frozen

- Neutral Compare for two selected cards.
- One contribution-level Recombine action.
- A protected Vercel Preview of the exact frozen revision.

Voice, touch, semantic History/Paths, multi-generation agentic expeditions,
cloud workspaces, ingestion beyond paste, authentication, analytics, and visual
polish beyond legibility are outside this two-hour build.

## Pre-clock toolchain check

The host default may not match the locked toolchain. Before the event, cache and
exercise the exact versions without changing repository dependencies:

```sh
gitleaks version
npx --yes --package=node@24.20.0 --package=npm@12.0.2 node --version
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm --version
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run security:audit
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run check
npx --yes vercel@59.11.7 whoami
npx --yes vercel@59.11.7 project ls --scope thalient
```

The first three commands must report `8.30.1`, `v24.20.0`, and `12.0.2`; the
last two must show an authenticated user and an empty `thalient` project list.
The pre-clock operator then leaves the template's `main` clean and
synchronized. Neither the product repository nor the Vercel project exists
before the clock starts; the template checkout's own `.vercel/project.json`,
if present, points at the project deleted before September 7, 2026 and must
not be reused.

## Clock-start sequence

`brandyn-s/minerva-template` is the frozen launch packet, not the build
repository. When the event clock starts, the first action is to generate the
product repository `brandyn-s/minerva` from the template and work only there.
The product owner accepted on September 7, 2026 that the generated repository
does not inherit commit history: the intent-before-code sequence and every
revision cited in `JOURNAL.md` before clock start remain reachable in the
template repository, and the clock-start journal entry names the template
revision the product repository was generated from.

Template generation copies files, not settings. The block below re-applies the
same controls the template carries (`.github/rulesets/main.json` is the
exported `main` ruleset), then creates and links the isolated Vercel project
as content-free infrastructure with nothing deployed. Run it from the
directory that should contain the product clone: `gh repo create --clone`
clones into the current directory, so running it inside the template checkout
would nest one repository in another.

```sh
cd "$(dirname "$(git rev-parse --show-toplevel)")"   # parent of the template checkout
gh repo create brandyn-s/minerva --public --template brandyn-s/minerva-template \
  --description "A spatial thinking workspace for directing AI with explicit context, durable lineage, and human judgment." \
  --clone
cd minerva
gh api -X POST repos/brandyn-s/minerva/rulesets --input .github/rulesets/main.json
gh repo edit brandyn-s/minerva --enable-issues --enable-wiki=false --enable-projects=false \
  --enable-squash-merge --enable-merge-commit=false --enable-rebase-merge=false \
  --delete-branch-on-merge
gh api -X PUT repos/brandyn-s/minerva/actions/permissions \
  -F enabled=true -f allowed_actions=selected -F sha_pinning_required=true
gh api -X PUT repos/brandyn-s/minerva/actions/permissions/selected-actions \
  -F github_owned_allowed=true -F verified_allowed=false
gh api -X PUT repos/brandyn-s/minerva/actions/permissions/workflow \
  -f default_workflow_permissions=read -F can_approve_pull_request_reviews=false
gh api -X PUT repos/brandyn-s/minerva/private-vulnerability-reporting
gh api -X PUT repos/brandyn-s/minerva/automated-security-fixes
printf '%s' '{"security_and_analysis":{"secret_scanning_push_protection":{"status":"enabled"}}}' \
  | gh api -X PATCH repos/brandyn-s/minerva --input -
gh api -X PATCH repos/brandyn-s/minerva/code-scanning/default-setup \
  -f state=configured -f query_suite=default
npx --yes vercel@59.11.7 project add minerva --scope thalient
npx --yes vercel@59.11.7 link --yes --team thalient --project minerva
npx --yes vercel@59.11.7 env ls
git switch -c codex/hackathon-slice
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
```

Read the controls back with `gh api repos/brandyn-s/minerva/rulesets`,
`gh repo view brandyn-s/minerva --json isTemplate,defaultBranchRef`, and
`npx --yes vercel@59.11.7 project ls --scope thalient` before the first push.
`vercel env ls` must list no provider credential; provider routes stay
disabled. The `.vercel/` link directory is gitignored and never committed. The fresh clone needs one `npm ci`; with the npm cache warm from
the pre-clock check it takes seconds. Do not otherwise spend clock time
reinstalling or re-running the readiness suite unless the machine or lockfile
changed after the pre-clock check.

Append one `JOURNAL.md` entry using the standard entry contract with: the ISO
8601 start time; the template revision the product repository was generated
from; the build branch; the operator and,
when useful, the tool/model family; and whether the T+120 floor, target, cut
lines, and demo claim are accepted or modified. After the frozen T+120 artifact
is demonstrated, append a second entry recording the stop/continue decision,
the zero-or-one primary improvement, and the zero-or-one distinct reliability
improvement, each with its rationale.

## Execution matrix

The slice runs as three lanes with one integration owner. Lanes fan out only
after mission control freezes the shared contracts at the end of T+10–30;
until then everyone works in one lane. Each lane has its own worktree and
branch off the integration branch `codex/hackathon-slice`, opens one pull
request per integration unit into that branch, and never edits another lane's
paths. Only mission control edits shared contracts, `package.json`, the
lockfile, CI, and integration files. A worker that needs a shared change asks
for it in its lane issue and keeps working against the frozen contract until
the change lands. Mission control merges into the integration branch after
`npm run check` passes and opens the single pull request to `main` that
freezes the T+120 revision.

| Lane | Owns | Does not touch | Acceptance evidence |
|---|---|---|---|
| Mission control | Shared record and command contracts, ports, `package.json` and lockfile, CI, the integration branch and its merges, the Vercel project and any deployment | Lane implementations | Contracts frozen by T+30 and posted in each lane issue; every merge green; T+120 revision tagged; deployment readback if reached |
| Canvas/state | Card, Focus, relationship, and operation records behind the frozen contracts; the browser-local repository adapter; the canvas surface, drag, pan, select, Focus controls, receipts, and lineage marks | Provider adapters, route handlers | Create, edit, move, and Focus survive reload; moving an unrelated card leaves the manifest unchanged; **AI sees N cards** is correct |
| Inference | The closed generation port, the labelled deterministic fixture adapter, the bounded route handler when a safe provider path exists, Branch, and the three-arm Searchlight scheduler | Renderer, persistence internals | Branch lands one derived card outside Focus with lineage and a receipt; failed work stays visible; **Simulated** is shown whenever the fixture is in use |
| Voice (only if separately authorized after T+120) | Page-scoped Voice session, exact context receipt, read-only authority, interruption and failure states | Workspace commands | Not part of the T+120 slice |

The exact owned paths are fixed at the T+30 contract freeze and written into
each lane's issue. This table names responsibilities, not a directory layout,
so the slice is not forced into the long-form module map before EXP-002.

Open one issue per lane in the product repository at T+0 and record
shared-contract requests, cuts, and friction as comments there:

```sh
for lane in mission-control canvas-state inference; do
  gh issue create --repo brandyn-s/minerva --title "Lane: $lane" --body "$(printf '%s\n' \
    'Owned paths (fixed at T+30): ...' \
    'Does not touch: ...' \
    'Acceptance evidence: ...' \
    'Shared-contract requests, cuts, and friction are recorded as comments here.')"
done
```

### Deployment lane (stretch)

Only mission control deploys, and only a frozen, safe revision with no secret
in the bundle and provider routes disabled or bounded:

```sh
npx --yes vercel@59.11.7 deploy --yes
npx --yes vercel@59.11.7 inspect <deployment-url> --wait --timeout 90s
curl -sSI <deployment-url> | head -1
```

Record the immutable deployment URL, the READY state, the HTTP status, and a
browser walkthrough of the demo contract on that URL. A local truthful
artifact outranks a rushed or ambiguous deployment.

## 120-minute execution map

| Time | Outcome | Cut line |
|---|---|---|
| T+0–10 | Generate `brandyn-s/minerva` from the template, apply its controls, clone, create the build branch, install, start the locked shell, open the canonical example, and keep the current placeholder available as a known baseline. | If the shell does not start, repair only the first material failure. |
| T+10–30 | Establish the smallest product-owned records and command seam for Card, Focus, relationship, and operation state. | No full History engine, migrations framework, or generalized command bus. |
| T+30–55 | Implement acknowledged browser-local card creation/edit/move, Focus, example/blank start, and reload. | Use one bounded native IndexedDB adapter; do not add a second store or renderer-owned truth. |
| T+55–75 | Make the spatial surface direct and legible: drag cards, pan, select, add/remove/clear Focus, and show lineage/context receipts where they act. | Prefer plain DOM/CSS for this disposable slice; do not turn that into an R2 renderer decision. |
| T+75–95 | Land one Branch through a closed generation port. Keep the source unchanged and the result outside Focus. | If a safe real provider path is not working by T+90, use a visibly labeled deterministic fixture; never expose a secret or imply live AI. |
| T+95–105 | Add the three-approach Searchlight only if the floor is durable and the Branch path is truthful. | At the first instability, cut Searchlight and strengthen the Branch demo. |
| T+105–115 | Freeze features, run the demo contract, repair only material failures, and preserve truthful degraded states. | No new capability after T+105. |
| T+115–120 | Rehearse the four-minute narrative, commit the exact demo revision, and record what is real, simulated, partial, or cut. | Deploy only a frozen, safe build; otherwise demo locally. |

## Optional refinement window: T+120–480

T+120 is a mandatory working-prototype checkpoint, not a soft milestone.
Refinement is not authorized by the T+0 declaration. Commit and demo the exact
T+120 revision, then record a separate product-owner go/no-go in `JOURNAL.md`.
Stopping is a valid outcome. If continuing, the owner may choose zero or one
primary improvement—either repair the floor or deepen creative leverage—and,
only when distinct and safe, zero or one reliability improvement. An agent may
propose the options; it may not choose them or quietly turn every option into
scope.

**Chat self-baseline (T+120–150).** Immediately after the demo, open a plain
capable chat on the same problem and spend at most five minutes reconstructing
the same context the Focus field held: paste or retype the focused cards and
ask for the same Branch. Record wall time and the count of actions for both
paths (Focus: add, remove, arrange, invoke; chat: paste, type, send). This is
one owner on one problem and is readiness evidence only; it does not count
toward D-008 and is never reported as a matched result. Its purpose is to make
the third checkpoint question answerable with a number instead of an
impression.

If the T+120 floor passed, default priority for a leverage improvement is:

1. replace a simulated Branch with one safe, bounded, visibly attributed live
   provider path;
2. if Branch is already live and stable, deepen the intended thinking loop with
   the neutral three-arm Searchlight;
3. if Searchlight is already stable, add Compare or contribution-level
   Recombine based on the product owner's real-problem rehearsal—not both by
   default.

The reliability improvement addresses the first observed material weakness in
durability, failure truth, keyboard/structured access, responsive interaction,
or secret/spend containment. Visual polish is eligible only when it makes
context, lineage, actions, or state easier to understand.

| Time | Decision and outcome | Cut line |
|---|---|---|
| T+120–150 | Run the exact demo on a real problem, inspect failure/reload behavior, run the five-minute chat self-baseline below, answer the three checkpoint questions, and record the stop/continue choice, selected primary improvement, and any distinct reliability improvement. | If the floor is not reliable, choose repair as the primary improvement; do not expand scope. |
| T+150–300 | Implement the selected primary improvement: repair the floor or deepen one source of leverage through the existing product-owned seams. | No new platform, generalized framework, Voice, auth, ingestion, or History system. |
| T+300–390 | If separately chosen and still safe, resolve one distinct reliability/accessibility weakness and exercise its unhappy path; otherwise rehearse and simplify the primary loop. | If the primary work destabilizes a passing T+120 loop, revert or isolate it rather than repairing indefinitely. |
| T+390–435 | Repeat the real-problem rehearsal; make only evidence-driven interaction or explanation fixes. | No checklist-driven features and no redesign detached from observed friction. |
| T+435–465 | Freeze, run the demo and native checks, and deploy a protected preview only if the exact build is safe. | A local truthful artifact outranks a rushed or ambiguous deployment. |
| T+465–480 | Record accepted, modified, and rejected model proposals; exact evidence; cuts; unsupported claims; and the final human judgment. | Stop feature work. Preserve both T+120 and T+480 revisions. |

The optional window does not promise that every item above will ship. Its proof
of maturity is selective depth, explicit rejection, preserved checkpoints, and
a more truthful experience—not eight hours of generated surface area.

## Design brief for the slice

The product owner wrote this brief on September 7, 2026 so that the visual
and interaction defaults of the T+120 slice are a human choice rather than a
model default. It applies only to the hackathon slice and is disposable with
it; it does not select the renderer (EXP-002), decide product semantics
(`SPEC.md`), or define a long-form visual system. It costs one token block in
`app/globals.css` at T+0–10; only the texture and the web fonts carry any
further cost, and they are cut first.

### Owner's brief (verbatim)

- Warm parchment surface with subdued cartographic texture.
- Ivory paper cards.
- Dark green ink and deep teal primary actions.
- Restrained amber, coral, teal, and violet lineage accents.
- Newsreader/Georgia for ideas and artifacts.
- IBM Plex Mono for controls, state, provenance, and receipts.
- Thin square borders, quiet shadows, limited rounding.
- Compact cards that expand in place.
- Thin functional edges; decorative marks never compete with lineage.

### Constraints from the approved contract

- Serif carries ideas; mono carries operation records, state, and receipts.
  This is the `SPEC.md` card-versus-record distinction (`PROV-004`,
  `HIS-014`) made visible; keep the two families from mixing on one surface.
- A lineage accent color is never the only carrier of lineage or state
  (`ACC-003`) and never changes context (`INV-002`). Every accent is paired
  with the mono `derived from` label or the receipt. Teal is also the
  primary-action color, so a teal lineage accent must not read as an action.
- The texture sits behind cards only and never under text (`ACC-005`). It
  is the first cut at T+45.
- Web fonts load through `next/font` with Georgia and a system monospace
  stack as real fallbacks; a font failure is not a floor failure.
- Expanding a card in place is presentation only. It changes no AI context,
  creates no History Moment, and is not a move (`CAN-002`).
- Edges exist only for structural facts: `derived from`, `member of`, and
  free-form labels. No ports, handles, node palette, or minimap by default
  (`CAN-005`).
- Explicit structure membership must look different from mere placement
  (`STR-003`); ivory on parchment alone does not carry that difference.

### Still open before T+0

- Where the Focus field lives and how **AI sees N cards** reads at a glance.
- The visible marker for explicit membership versus placement.
- Where the **Simulated** label sits and how loud it is. Default proposal:
  mono, ink-colored, on the card and in the narration, and not a lineage
  accent color.
- Light-only for the slice, or a parchment dark counterpart. The current
  shell CSS has a dark mode with no parchment equivalent; light-only is the
  smaller choice.

## Implementation constraints

- The workspace kernel, not React, the renderer, IndexedDB callbacks, or the
  provider, decides semantic truth.
- Geometry affects presentation only. Focus and operation targets are explicit.
- A provider result is untrusted proposal data until it lands through the same
  durable workspace path as a local mutation.
- Provider requests use one closed operation contract. No browser secret,
  arbitrary prompt endpoint, hidden retry, tool call, or fail-open route is
  acceptable for the demo.
- If a deterministic adapter substitutes for a provider, label it **Simulated**
  in the interface and in the demo narration.
- Generated material is immediately editable and durable; it does not require a
  second permission dialog.
- Do not edit approved authority documents to rationalize a shortcut. Record
  hackathon compromises in the journal or final demo record.

## Stop rules

- At T+45 without durable editable cards, remove renderer ambition and use the
  smallest direct DOM surface.
- At T+75 without explicit Focus and reload, stop AI work and finish the local
  loop.
- At T+90 without a safe real provider response, switch to the labeled fixture
  adapter and preserve the generation port.
- At T+105, freeze capability. Remaining time belongs to the demo contract, not
  feature expansion.
- A false durability claim, hidden context, exposed secret, or unlabeled
  simulation stops the affected path immediately.

## Checkpoint and final handoff

At T+120, record the exact commit and complete the T+120 checkpoint record in
the demo contract below. If refinement continues, preserve that record and add
the T+480 delta rather than rewriting history. Separate observed behavior from
planned behavior and list every cut. The hackathon artifact then enters the
approved roadmap as evidence or a disposable experiment; it does not silently
become the production architecture.

## Demo contract

This is the acceptance script for the two-hour experience slice. It is written
before product implementation so the build optimizes for a checkable user
outcome rather than implementation volume.

### Four-minute narrative

1. **Begin with ambiguity.** Open the editable example or blank start and state
   the real problem being explored.
2. **Externalize the problem.** Create or edit cards, move them into a useful
   arrangement, and establish Focus using visible Add, Remove, and Clear actions.
3. **Inspect the boundary.** Show **AI sees N cards** and the compact inclusion
   receipt. Move an unrelated card and demonstrate that proximity does not
   silently change context.
4. **Create difference.** Invoke Branch. If the target scope landed, invoke the
   targeted three-approach Searchlight and show the approaches before results.
5. **Keep thinking.** Continue arranging or editing while work runs. Show each
   result arriving as an ordinary card outside Focus with visible lineage and an
   honest live, simulated, partial, or failed state.
6. **Make judgment.** Arrange the alternatives, write an ordinary synthesis
   card, and name one consequential direction, connection, or tension that was
   not present at the beginning. Minerva must not declare a winner.
7. **Prove durability.** Reload and show that acknowledged cards, placement,
   Focus, the useful result, and lineage remain.

### Pass conditions

- The canvas, not a transcript, is visibly the primary work surface.
- The user can start blank or from the editable example without signing in.
- Cards are editable before and after generation.
- Focus is explicit and inspectable; geometry never changes it invisibly.
- Branch leaves its source unchanged and lands a separate derived card.
- The useful result remains after reload with enough lineage to explain where it
  came from.
- The user can state the consequential discovery and how the spatial arrangement
  or divergent operation helped expose it.
- Every simulated, partial, degraded, or failed capability is named truthfully.

### Honest fallback demo

If real provider work is unavailable, use the same interaction with the
deterministic adapter and keep **Simulated** visible throughout. Demonstrate the
interaction thesis and persistence, not a fake inference claim. If durability
is unavailable, do not perform the reload step or call the state durable.

### Claims this demo cannot make

- Completion of the approved first prototype or any ROADMAP gate.
- Production-ready persistence, security, accessibility, performance, provider
  admission, cancellation, or spend control.
- Validated Searchlight generation isolation if its three arms are simulated.
- Voice, semantic Undo/Redo with preserved Paths, anonymous cloud sharing,
  multi-user collaboration, or matched product-evaluation results.

### T+120 checkpoint record

Fill this in against the exact demo commit. The three question rows are the
minimum the demo must answer; an honest *not evaluable* is a valid answer and
is preferred to narration.

| Field | Observation |
|---|---|
| Commit | Not yet built |
| Demo surface | Not yet built |
| Provider mode | Not yet built |
| Floor | Not run |
| Target | Not run |
| Stretch | Not run |
| Consequential discovery | Not evaluated |
| Q1 — Could the user predict exactly what the AI saw? | Not evaluated — cite the receipt and the unrelated-card move |
| Q2 — Did the spatial interaction expose a consequential direction or tension? | Not evaluated — state live or simulated; if simulated, record *not evaluable* |
| Q3 — Did operating the canvas cost less than reconstructing context in chat? | Not evaluated — record both self-baseline times and action counts |
| Material failures or cuts | Not evaluated |
| Deployment, if any | None |

### Optional T+480 delta record

Do not overwrite the T+120 record. Re-run the same four-minute narrative, then
record only the consequential delta:

| Field | Observation |
|---|---|
| T+120 commit | Not yet built |
| T+480 commit | Not yet built |
| Human stop/continue decision and primary improvement, if any | Not evaluated |
| Distinct reliability improvement, if any | Not evaluated |
| Material model proposals modified or rejected | Not evaluated |
| User friction removed or introduced | Not evaluated |
| Consequential discovery changed | Not evaluated |
| Remaining unsupported claims | Not evaluated |
| Deployment, if any | None |
