# Minerva capability evidence

Requirements live in [SPEC.md](./SPEC.md); this file records implementation
evidence, not another specification. Status values are `not started`, `partial`,
`implemented`, `exercised`, and `accepted`. A seed shell is not product evidence.

Use the existing evidence column and handoff to distinguish delivery facts;
do not introduce a second tracking system or treat these as seven mandatory
sequential gates. Written code may still be unintegrated. Implemented behavior
has a connected path through the applicable UI/application/persistence/provider
layers. Exercised behavior states whether it was demonstrated locally with
fixtures or against live services. Reviewed identifies the candidate and
review disposition; accepted identifies the user's decision and its scope.
Deployed identifies the actual serving revision/URL, not merely a merged commit.

For example: "Typed reply integrated and demonstrated locally in fixture mode;
live transport unverified; review pending; not deployed." M1's live-service facts
are not applicable to its prepared proof, not evidence that those services work.
Keep a whole capability partial when only one increment is complete.

| ID | Capability | Status | Evidence / owning surface |
|---|---|---|---|
| C01 | Workspaces and durable state | not started | No application implementation |
| C02 | Spatial canvas and view controls | not started | No application implementation |
| C03 | Visible relationships | not started | No application implementation |
| C04 | History, inheritance and genome | not started | No application implementation |
| C05 | Branch development and reusable intent | not started | No application implementation |
| C06 | Comparison and Weave | not started | No application implementation |
| C07 | Three perspectives | not started | No application implementation |
| C08 | Contextual creative moves | not started | No application implementation |
| C09 | Creative instruments | not started | No application implementation |
| C10 | Wander | not started | No application implementation |
| C11 | Navigable interpretation and feedback | not started | No application implementation |
| C12 | Agent Drive | not started | No application implementation |
| C13 | Typed and spoken collaboration | not started | No application implementation |
| C14 | Outputs and reusable results | not started | No application implementation |
| C16 | Living-atlas experience | not started | Seed identity is not an interactive atlas |

C15 is retired from prototype scope; the remaining IDs stay stable. External
REST/MCP APIs and sign-in are not pending work. Internal browser/voice endpoints,
local access protections and paid-work admission remain part of the owning capabilities.

## Current milestone

M1 has not started. The seed contains a runnable landing page, documentation
and CI. There are no live providers, configured spending, workspaces or deployment.
The generated application begins with packages 1-3 and records its seed revision.

## Review and acceptance

No milestone is accepted. Record each material review finding with its capability,
evidence, disposition and affected revision here; do not maintain parallel model
diaries. Fable's judgment and the user's experience acceptance are distinct.
The M2 interim review follows package 10; M6 reviews the candidate and confirms
local operation. Hosted confirmation applies only if private hosting is authorized;
no hosted deployment is required for prototype completion.

## Next outcome

Generate the public `minerva` repository from the corrected seed, set identity
using [setup](../setup.md), and build M1's original populated interactive proof.
