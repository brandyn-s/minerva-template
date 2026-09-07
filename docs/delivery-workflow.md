# Build, exercise, repair, deliver

One implementer, one branch, one working interaction. No worker registry,
event protocol, adapter certification, or extra planning document is required.
Add a tool only when the current task is cheaper or safer with it.

## Start with the decision already made

Read [CURRENT_GATE.md](../CURRENT_GATE.md) and only the relevant requirements.
State the outcome, what would make it fail, and missing external permissions.
For approved work, start implementing rather than reopening design or asking
again. Locate the exact file/API contract; stop research when it is answered.

The [launch helper](./launch-cli.md) replaces provisioning steps. Use its
private default and explicit resume/readbacks, preserving source/product
identity. Install dependencies once. Investigate hosting or provider access
early if the current outcome requires it, not for a browser-local slice.

## Build and exercise together

Make the smallest complete loop work before breadth: editable cards, Focus,
Branch, a changed constraint, and a child with unchanged source lineage.
The example explains the interaction; it is not a prescribed development script.

Exercise the riskiest behavior as soon as its implementation exists, not in a
late hardening phase. For an editor: reload acknowledged work, type during a
pending save, fail a save, and discard using keyboard and pointer. Keep failed
drafts visible and distinct from stored context. Use existing tests/browser
tools directly, not a generic harness or prebuilt template product component.

Reproduce one failure, repair it, and rerun that case. Reload after runtime
interface changes. Stop unrelated polish while blocked and report the cause.
Delegate only when the handoff saves work; an agent prompt is not a timeout.
Observe human comprehension when available, otherwise record not evaluated.
Simulations remain labelled; live work requires permission, durable landing,
atomic admission, and a proven hard spend bound.

## Close once, not repeatedly

Run `npm run check` on the complete candidate. Review routine changes directly;
use independent scrutiny when risk or the product contract requires it. After
a narrow repair, revisit that boundary rather than restarting a broad review.
Preserve branch/PR controls and exact-head CI.

Push the finished change; write the PR explanation while CI runs, not more code.
Put outcome, limits, and evidence there once. Put delivery timestamps in the PR,
not another source commit. Journal only consequential product decisions.
When timing is requested, record request, first working loop, finish, and major
repair/wait causes; do not add overlapping intervals as total elapsed time.

Use the [deployment helper](./deploy-cli.md) only with authorization. Verify
the stable origin and real reviewer path, not just a protected preview or HTTP
response. Missing deployment or human evidence remains missing, not complete.
