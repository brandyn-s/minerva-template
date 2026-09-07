## Outcome

What user-visible or repository outcome does this change achieve?

## Scope and truthful claims

What is included, excluded, simulated, partial, local-only, or not yet proven?

| State | Evidence or explicit blocker |
|---|---|
| Implemented | |
| Integrated end to end | |
| Live activation | |
| Human accepted | |

For tracked builds, reference the generated status/event sequence rather than
maintaining another progress log. Tests and silence are not human acceptance.

## Judgment and tradeoffs

- Agent proposal:
- Human disposition: pending | accepted | modified | rejected
- Rationale:

Authorization of an outcome is not acceptance of every implementation choice.
Leave the disposition `pending` until a person explicitly decides. Do not
include raw prompts, transcripts, or private reasoning.

## Evidence

- Smallest decisive check:
- First material falsifier:
- Commands or native readback and results:
- Frozen integration handoff: revision, port/schema version, UI/adapter/durable
  landing path, and known limitations.
- Independent correctness review: exact head reviewed and material findings
  resolved (or explicit reason not applicable).

## Failures, cuts, and uncertainty

What failed, created friction, was deliberately cut, or remains uncertain?

## Checklist

- [ ] The change is inside `CURRENT_GATE.md` or has explicit owner authorization.
- [ ] Tests and documentation cover the changed contract.
- [ ] Planned, simulated, preview, deployed, and production claims are distinct.
- [ ] No secret, private workspace content, transcript, or participant data is included.
- [ ] I reviewed and take responsibility for AI-assisted output, if any.
