# Contributing to Minerva

Minerva is pre-alpha. Contributions are welcome, but the repository may be in
a deliberately constrained build phase. Begin with
[CURRENT_GATE.md](./CURRENT_GATE.md): it states what is currently authorized
and what must wait.

## Before you start

- Read [AGENTS.md](./AGENTS.md), whether you are working manually or with a
  coding agent. It is the shared working agreement, not an AI-only policy.
- Read only the product or architecture sections relevant to your change.
- Open a proposal issue before changing product intent, scope, architecture,
  persistence, safety, spend, or a public claim.
- Never include credentials, private workspace content, raw transcripts, or
  participant data in an issue, commit, pull request, or evidence file.

For the current shell you need Node.js `24.20.0`, npm `12.0.2`, and
`gitleaks` `8.30.1` on `PATH`. The secret-scan tests inside `npm run check`
call gitleaks and fail fast with an install hint when it is absent.

```sh
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm ci
npx --yes --package=node@24.20.0 --package=npm@12.0.2 npm run dev
```

Or install the exact versions once with `npm install --global npm@12.0.2`; the
README shows both paths. CI performs the same explicit bootstrap.

No Vercel account or provider key is required. Before submitting a change, run:

```sh
npm run check
npm run security:audit
npm run secrets:scan
```

CI runs all three. `secrets:scan` matters most when your change touches
configuration, dependencies, workflows, fixtures, or environment boundaries.

## Make a focused change

1. Work on a branch; do not push directly to `main`.
2. Name the user-visible outcome and the first condition that would make the
   claim false.
3. Prefer the smallest complete vertical slice over speculative scaffolding.
4. Add or change tests at the boundary that owns the behavior.
5. Update documentation when behavior, authority, setup, or a public claim
   changes.
6. Open a pull request using the repository template.

Commits do not need a special prefix. Use a short imperative subject and keep
unrelated changes separate. By contributing, you agree that your contribution
is licensed under this repository's [MIT License](./LICENSE).

## AI-assisted contributions

AI assistance is welcome. The contributor—not the model—remains accountable
for correctness, security, licensing, and the claims in the pull request.

For a material AI-assisted change, record one consequential proposal you
evaluated and whether you accepted, modified, or rejected it. Explain the
tradeoff in your own words. Do not attach raw prompts, hidden reasoning,
conversation transcripts, or activity-volume metrics. The useful evidence is
the decision, correction, cut, and resulting artifact.

Add a [JOURNAL.md](./JOURNAL.md) entry only when the work changes consequential
product judgment, a falsifier, or gate state. Routine implementation choices
belong in the pull request, not the permanent journal.

## Pull-request standard

A reviewable pull request:

- states the outcome and the limits of the claim;
- keeps simulated, planned, local, preview, and deployed behavior distinct;
- identifies the decisive check and its result;
- names important tradeoffs, failures, and cuts;
- contains no secrets or private participant material; and
- leaves the repository usable by a fresh contributor.

Security vulnerabilities follow [SECURITY.md](./SECURITY.md), not the public
issue tracker.
