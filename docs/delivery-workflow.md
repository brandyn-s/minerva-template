# Build and deliver

Start with one implementer, one branch, and one working interaction. No worker
registry, event protocol, adapter certification, or extra planning document is
required. Add a tool only when a concrete task is cheaper or safer with it.

## Start

Read [CURRENT_GATE.md](../CURRENT_GATE.md) for permission and the relevant
product requirements. In the product repository, state the intended outcome,
what would make it fail, and any external permission still missing. Do not
restart approved planning or ask again for unchanged permissions.

The [launch helper](./launch-cli.md) replaces repository provisioning steps.
Use its private default, explicit inputs, and resume/readbacks. Keep source and
product identity separate. Install once with the pinned toolchain; do not
reinstall without a dependency or environment reason.

## Build

Make the smallest complete loop work before adding breadth: editable cards,
explicit Focus, Branch, a changed constraint, and a child with unchanged source
lineage. This is an early proof, not completion of the full product.

Use the library example to explain the interaction, not as a script everyone
must follow. Observe comprehension when a human is available; otherwise say
not evaluated. Keep simulations labelled and live routes off until permission,
durable landing, atomic admission, and the hard spend bound are established.

Use existing tests and real browser behavior. Exercise the changed failure
boundary, not a generic adapter harness. In particular, acknowledged state must
survive reload, newer drafts must survive older saves, failed edits must remain
visible, and discard must not save. These are product outcomes, not prebuilt
template components.

If blocked, say what is blocked and why; stop unrelated polish. Use an existing
command timeout where available. An agent prompt is not an enforced deadline.
Parallelize only independent work with an observable benefit.

## Deliver

Run targeted checks during repairs, then `npm run check` on the complete
candidate. Review proportionately to the risk; a separate agent is not a
required gate. Keep branch/PR controls and exact-head CI.

Use the [deployment helper](./deploy-cli.md) only when deployment is authorized.
Verify the real reviewer path and stable origin; a protected Preview or an
HTTP response alone is not proof of a working product.

Put outcome, limitations, and decisive evidence in the PR. When timing is
requested, record start, first working loop, finish, and significant delays
there; ordinary timestamps and command timings suffice. Do not add concurrent
durations together. Use `JOURNAL.md` only for consequential product decisions.
