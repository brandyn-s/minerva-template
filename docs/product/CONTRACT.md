# Minerva contract index

This seed builds the public `minerva` repository for a single-user, browser-only
prototype with no sign-in. Workspaces and paid operations stay local by default;
optional hosting requires an existing suitable private boundary.
The approved seed shell, configuration and owl
are starting material; no earlier Minerva application's code or data is reused.

This file is an index, not a duplicate specification.

| Concern | Authoritative source |
|---|---|
| Purpose and product hypothesis | [INTENT.md](./INTENT.md) |
| Required observable capabilities C01-C14 and C16 (C15 retired) | [SPEC.md](./SPEC.md) |
| Visual and interaction contract | [DESIGN.md](./DESIGN.md) |
| Module and infrastructure ownership | [ARCHITECTURE.md](./ARCHITECTURE.md) |
| Decisions and explicit supersession | [DECISIONS.md](./DECISIONS.md) |
| Implementation evidence and milestone state | [CAPABILITIES.md](./CAPABILITIES.md) |
| Six milestones and standard Astra/Fable prompts | [Build prompts](../build-prompts.md) |
| Repository identity and operator setup | [Setup](../setup.md) |

Use the standard edition for this build. Alternate phrasing experiments and
review proposals are not simultaneous authoritative instructions. Update source
Markdown in one branch with one writer; HTML and Downloads copies are exports.
Product instructions may elaborate SPEC but cannot silently remove a required
capability. Changes of scope require an explicit owner decision.

Seed CI establishes scaffold/document consistency, not a finished product.
The generated application begins with M1's original interactive fixture.
