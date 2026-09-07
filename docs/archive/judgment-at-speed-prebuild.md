# Minerva against *Judgment at Speed* — pre-build findings

> **Historical snapshot — not current project guidance.** This review was
> prepared on September 6, 2026 before the Git repository and its present
> README, agent guide, journal, evidence policy, and scaffold existed. There is
> no source revision for that pre-repository state. Statements below about
> missing artifacts are preserved as historical evidence; use
> [`CURRENT_GATE.md`](../../CURRENT_GATE.md) and
> [`JOURNAL.md`](../../JOURNAL.md) for current status.

Prepared September 6, 2026 from the pre-repository planning directory. Two
files were present: `INTENT.md` (128 lines, 1,616 words) and `DECISIONS.md` (334
lines, 6,250 words). There was no Git repository, code, `JOURNAL.md`, `PLAN.md`,
`CLAUDE.md`/`AGENTS.md`, `evidence/`, transcript, or README.

**How to read this.** The rubric in Part II of the guide scores a finished build from four evidence sources: transcript, repo history, demo, and Q&A. None of those exist yet, so this is the pre-reader pass the guide describes in Part III: evidence for and against each gate and dimension, cited to file and line, plus a list of what cannot be checked. The guide also says an AI pre-reader should cite and not score. The body of this memo follows that rule; §9 adds a clearly labelled provisional reading for you to accept or overrule, because you asked for an evaluation rather than a findings list.

**The short version.** As framing, Minerva is well above the bar the guide sets. It clears G1 with room to spare, and the decision register is an unusually complete record of planning decisions kept human, each with a reason, a reversibility rating, a revisit trigger, and a falsifier. What is missing is everything that makes judgment visible and checkable once generation starts: version control, a journal, an instruction file, a check the model can run, and a definition of done a stranger could verify at a checkpoint. And the first-prototype boundary was never narrowed to the thesis: it carries a read-only voice companion that the project's own evaluation protocol switches off when it tests the thesis.

## 1. Timeline

There is no history to read. Nothing in the folder is under version control, so the only ordering evidence is file modification time: `INTENT.md` at 17:10, `DECISIONS.md` fifty minutes later at 18:00, and no code anywhere in the folder. That satisfies "intent before code" trivially and proves nothing durable, since a modification time changes on the next save. The guide's first submission requirement is `INTENT.md` committed before the first generated code, and the judge protocol's first act is `git log --follow INTENT.md`. Right now that command has nothing to show. `DECISIONS.md:334` names `SPEC.md` as the next artifact, which is a natural moment to start the history before it is written.

The intent and all eight decisions carry an approval dated September 6 (`INTENT.md:3`, `DECISIONS.md:3`, and the *Status* row of every decision). Nine approvals in one afternoon is consistent with a long-running project being written down in one sitting, or with a single drafting session alongside a model. The files cannot tell me which; see §8.

## 2. Gates

| Gate | Reading | Evidence |
|---|---|---|
| G1 · No visible judgment | Pass on the evidence available | Human framing exists before any code: a problem statement, a named user, a thesis, nine non-goals (`INTENT.md:104–114`), a definition of success (`:116–122`) and a falsifier (`:124–128`); eight approved decisions, each with *Why*, *Reversibility*, *Latest responsible point* and *Falsifier* rows; 55 items explicitly deferred or left undecided. Caveat: none of this is yet attributable to a person (no `who: human`, no commit author, no transcript), so a judge applying the rubric's rule that a model-written ledger is a claim, not evidence, would ask you to prove authorship before crediting it. |
| G2 · Misrepresentation | Nothing to misrepresent yet; internally consistent | I cross-checked the intent against the register on voice authority (`INTENT.md:75` ↔ D-007), the one-layer three-arm sweep (`:67` ↔ D-005), hosting without server-owned state (`:93` ↔ `DECISIONS.md:24`), the reserved relationship vocabulary (`:41` ↔ D-003), and results becoming durable and landing outside Focus (`:71` ↔ `DECISIONS.md:78`). They agree. Forward risk: the register has dozens of contract rows, most carrying several testable claims. Every one the prototype does not honor becomes a G2 exposure the moment a README repeats it. |
| G3 · Unsafe shipping | Not testable | No code, no secrets, no commands. Two forward risks the register leaves open: the AI provider and key custody are undecided (`DECISIONS.md:40`, `:334`), and a browser-local single-user app on Vercel that talks to a model will either proxy through a server route or ship a key in the bundle, which is the guide's "anon keys in the bundle" pitfall. There is also no sandbox or permission configuration for the build itself. The privacy side is handled well: provider-boundary disclosure appears in D-001 and D-004 (`:24`, `:106`), and D-007 forbids durable audio storage (`:220`). |

## 3. Direction (weight 15)

Level 5 on this dimension is intent in the team's words before generation, with non-goals and a checkable done; prompts shaped like issues; a short instruction file that grew; and a named list of what was not delegated.

Against the guide's own `INTENT.md` template, Minerva has the problem (`INTENT.md:5–9`), who it is for (`:11–13`), the non-obvious angle (`:21–27`: a canvas rather than a transcript, with proximity carrying no meaning at `:39`), non-goals (nine, where the template asks for three), and a taste line ("a responsive thinking instrument, not a graph editor or dashboard", `:27`). It does not have done at the first checkpoint or the second, a riskiest assumption named as the thing to test first, or a "what we will not delegate" section. The falsifier at `:124–128` is the closest thing to a riskiest assumption and it is well written, but nothing in either file says when or how cheaply it gets tested. D-008 defers the first real test to "as soon as one complete central loop works" (`DECISIONS.md:249`), which means after Branch, Compare, Recombine, Harvest, rewind and Searchlight all exist. The guide's order is the reverse: name the riskiest assumption in the first fifteen minutes and build toward testing it.

The definition of success (`:118–122`) is half checkable. Its second paragraph is close to a test: usable as it arrives, survives reload, partial work legible, canvas never blocked. Its first paragraph ("a consequential direction... they likely would not have reached through linear chat") can only be checked by running D-008's six-person matched study with a 24-hour follow-up. That is the right long-run test and the wrong checkpoint test; a stranger with the demo path cannot check it in two hours or eight.

Length matters here for a specific reason the guide gives: `INTENT.md` is the file re-read at session start and after every `/clear`, and it is meant to be fifteen lines so that it is actually read. This one is 128 lines, with another 334 in the register. The material is good; the problem is that there is no short form for the model to hold, and no way to tell which lines are the owner's own words. On delegation, the register draws the what/how line explicitly ("Implementation mechanisms remain open unless a decision explicitly closes them", `DECISIONS.md:10`; the open architecture list at `:334`), which is the guide's 70/30 split in writing. What it never says is which parts of the *what* the human intends to build or write by hand. The D-003 context rule, the seed content of the library example, and the product copy are the obvious candidates.

No instruction file, prompts, or plan exist, so the delegation half of this dimension is unobservable.

## 4. Evaluation (weight 20)

Nothing has been verified because nothing has been built, so there are no corrections, evidence files, reviews, or unhappy paths to read. What the documents do show is the design of verification, and it is strong. Every decision ends in a falsifier (8 of 8), and several are phrased precisely enough to become automated tests as written: an arm sees sibling context, a late result commits after cancellation, hidden model work exceeds the envelope, completion is claimed without durable visible results (`DECISIONS.md:150`); Redo regenerates content or incurs spend, history does not survive reload (`:186`); displayed voice state disagrees with actual media behavior (`:223`). D-005's arm states (`:141`) and D-007's five state dimensions (`:218`) are unhappy-path specifications waiting for test names. D-008 is an evaluation harness with countermetrics, invalidity rules, and a list of things deliberately not accepted as proof (`:291–328`), which is the "eval harness of real cases" the guide asks for at hour eight, designed before hour one.

What is missing is the bridge from falsifier to check. Nothing says which of these become tests the model runs after every slice, which are manual, where evidence lands, or what the smoke check for the demo path is. The register already refuses to count a recommendation as a decision (`:8`); the build needs the same refusal to count an assertion as a verification, and nothing yet encodes it.

## 5. Tradeoffs (weight 15)

This is the strongest dimension on paper. Decisions are explicit with reasons; alternatives are named in most *Why* rows (turn-scoped voice versus an always-on observer, `:207`; more arms versus fewer, `:137`; self-use versus a matched comparison, `:246`) and implied in the rest by the deferred lists. Cuts are named and counted: nine non-goals plus 55 deferred or undecided items, each attached to the decision that deferred it, so a later reader knows what was cut and from where. Reversibility and latest-responsible-point rows on every decision supply a stopping rule the guide does not even ask for. And there is evidence of learning from the predecessors rather than carrying them forward: "Searchlight's output flood" is named as the thing to avoid (`:137`), "runs sized by historical 25-, 100-, or 250-action targets" is explicitly deferred (`:162`), and reuse of a predecessor's shell, state model, or deployment is a non-goal (`INTENT.md:114`). That is Hashimoto's rule applied at the product level.

The gap is that the cutting stopped at the roadmap and did not reach the first prototype. The boundary at `INTENT.md:91–100` still contains a persistent canvas, a first-run example and a blank start, cards with structures and lineage, Branch, Compare, Recombine, harvest, semantic undo/redo with preserved Paths, a three-arm Searchlight with pause, resume, cancel and retry, and a concurrent voice companion with its own state machine. The clearest signal that this was not narrowed to the thesis is in the register itself: D-008 switches voice off when it tests the thesis ("the primary matched test isolates the spatial core, so voice remains off in both conditions", `DECISIONS.md:263`), yet D-007 is the longest of the capability decisions and voice is in the first-prototype list. By the guide's rule that anything not on the demo path is a CUT entry rather than a task, voice belongs after the Stage 1 rehearsal, not before it. The same question applies more gently to preserved Paths in D-006: rewind is on the thesis; "Continue from here" with preserved futures may not need to be in the first cut.

Nothing addresses the build's own tradeoffs: model and effort routing, quota, sandboxing, what runs in parallel. The register is careful about the product's spend ceilings (`:140`, `:220`) and silent about the build's.

## 6. Vision (weight 20)

The intent is unmistakably a point of view rather than a default: "the canvas, not a transcript, is the primary surface" (`INTENT.md:25`), "action is authorization" (`:85`), "durable truth" (`:86`), "difference does not equal quality" (`:87`), "mere proximity never changes AI behavior invisibly" (`:39`). The vocabulary is consistent and cross-referenced across both files (Focus versus targets, Branch versus Path, Moments, Harvest); the register guards against its own sprawl ("recorded separately so later ambitions do not expand the first prototype by accident", `DECISIONS.md:9`); and the deferred lists are, in effect, dozens of pre-emptive refusals of things a model would otherwise add: ranking, winner selection, proximity semantics, confirmation dialogs, AI-created durable groups, automatic pinning.

Two cautions. First, the register is thorough at the edges and thin at the center. Persistence, the example, context, intake, Searchlight, undo, and voice each have a contract; Branch, Compare, and Recombine, the operations the thesis rides on, have none beyond the intent's one-line definitions (`INTENT.md:49–57`) and the shared context rule, and the decision set is declared closed (`DECISIONS.md:332`). Leaving the center open to be discovered in the build is defensible under the guide, which warns against design documents written before code, but it is exactly where "model defaults masquerading as your design" will enter: Compare becomes a diff view and Recombine a merge unless someone says otherwise. Second, the register is uniform in voice: formal, parallel, and leaning on a small set of intensifiers ("truthful" appears eleven times across the two files, "genuine" seven). That is not a fault in a product document, but the guide wants the human's own words identifiable in `INTENT.md`, and nothing marks which sentences those are.

## 7. Prototype (weight 30)

Not assessable; there is no build. The register does supply the judge's unhappy-path script for later: cancel a sweep mid-arm and reload (`DECISIONS.md:141–147`), deny the microphone permission (`:219`), undo a partial Searchlight that has dependents (`:180`), import a file and confirm it did not enter Focus (`:104`).

## 8. Unverifiable

Who wrote the two files, and how much of the text a person read before approving it. Whether any Minerva code exists elsewhere (the folder is code-free; the predecessors Searchlight, Gestures, and Atlas are referenced at `INTENT.md:102`). Whether a drafting transcript exists. Whether "approved" meant a review with alternatives on the table or a read-through. Everything under Evaluation and Prototype. I have not inferred in either direction on any of these.

## 9. Provisional reading (yours to overrule)

The guide's rule is that humans score, and that a missing transcript caps Direction and Evaluation at 3. With that stated:

| Dimension | Weight | Reading | One sentence of evidence |
|---|---|---|---|
| Direction | 15 | 4 on the documents; 3 under the missing-transcript cap | Intent before code with nine non-goals and a falsifier; no checkpoint done, no not-delegated list, no instruction file. |
| Evaluation | 20 | Not yet scoreable (cap of 3 applies once there is anything to score) | Eight falsifiers and D-008 are an unusually good verification design; nothing has run. |
| Tradeoffs | 15 | 4 | 55 named deferrals with reversibility and revisit triggers; the first prototype was not narrowed to the thesis (voice is in scope while `:263` turns it off to test the thesis). |
| Vision | 20 | 4 | A distinct, internally consistent point of view with pre-emptive refusals; the loop's central operations are unspecified and authorship is unmarked. |
| Prototype | 30 | — | No build. |

No total, because a total with the 30-point dimension empty would mislead.

## 10. Before the first generated line

In the order the guide's kit prescribes. Start a repository and commit `INTENT.md` and `DECISIONS.md` as they stand, so the intent's precedence stops depending on a modification time. Add a fifteen-line block at the top of `INTENT.md`, or a separate short file the model reads every session, with the template's missing fields: done at checkpoint one, done at checkpoint two, riskiest assumption, what you will not delegate. A checkpoint-one sentence is already latent in D-003, something like: on the library example, a stranger can add a card to Focus, Branch, see the result land outside Focus with a receipt naming the N cards the model saw, and find it again after reload.

Cut the first prototype to the thesis test: sequence D-007 after the Stage 1 rehearsal, and ask the same question of preserved Paths. Turn the falsifiers into a check list (`make check` or equivalent) and decide now which are automated. Write a `CLAUDE.md` under sixty lines that points at the register for contracts and carries the gotchas and the working agreement: fix the code not the test, evidence in `evidence/`, a journal entry on every correction. Start `JOURNAL.md` with the eight decisions as its first DECISION entries marked `who: human`, which also closes the authorship gap retroactively.

Decide key custody before choosing the provider: a server route on Vercel, not a key in the client. Commit `.claude/settings.json` deny rules. Give Branch, Compare, and Recombine the same contract treatment as the periphery, or record a deliberate DECISION that they are to be discovered in the build, so their shape is a choice and not a default.

## 11. Questions worth asking

Direction: which of the eight decisions did a model first propose, and which did you change before approving?

Direction: what in Minerva will you write by hand, and why those parts?

Evaluation: which falsifiers in D-003, D-005, and D-006 become tests the model runs after every slice, and when does the first one run?

Tradeoffs: D-008 turns voice off to test the thesis. Why is D-007 in the first prototype rather than after Stage 1?

Vision: without the documents, why must proximity never change what the model sees, and what breaks if it does?

Prototype, for later: a Searchlight arm times out, you press cancel, and the page reloads. What does the judge see?
