# Vercel facts and deployment boundaries

Checked against official documentation on September 7, 2026. Reconfirm
version/plan-dependent behavior before provisioning. These are platform facts,
not claims that this template has deployed services or configured a budget.

The prototype defaults to local access with no sign-in. These facts apply only
when optional hosting is authorized behind an existing suitable private boundary;
they do not require a deployment, login system or new access infrastructure.

## Access and environments

| Fact | Consequence | Official source |
|---|---|---|
| Git integration can create deployments from pushes, including production-branch pushes | Authorize deployment separately from local development; inspect project settings before linking Git | [Git deployments](https://vercel.com/docs/deployments/git) |
| Public/private source visibility is separate from application access; deployment protection varies by plan | Use only a verified existing private boundary that preserves no-sign-in use; otherwise stay local | [Deployment protection](https://vercel.com/docs/deployment-protection) |
| Project Root Directory determines which app/configuration is built | Keep a single clear app root; do not rely on configuration above the selected root | [Build configuration](https://vercel.com/docs/deployments/configure-a-build) |
| Environment variables are scoped by environment, with optional branch overrides | Configure development, preview and production deliberately; keep their data separate | [Environment variables](https://vercel.com/docs/environment-variables) |
| AI Gateway OIDC authenticates a deployment's requests | Use the supported runtime credential mechanism; do not capture a build-time token as a permanent runtime secret | [Gateway OIDC](https://vercel.com/docs/ai-gateway/authentication-and-byok/oidc) |
| A successful deployment build does not demonstrate protected application behavior | Exercise no-sign-in access inside the boundary and denial outside it | [Deployments](https://vercel.com/docs/deployments) |

## Spending is not one universal project cap

According to [AI Gateway budgets](https://vercel.com/docs/ai-gateway/observability-and-spend/budgets):

- A project budget applies to OIDC traffic from that project's deployments.
- API-key spend is not attributed to a project, even when the key is used
  inside that project. Budget the actual key separately.
- Budgets are soft caps checked before requests; admitted work can exceed
  the limit. BYOK provider charges bypass Gateway budget accounting.
- A refresh period of `none` is cumulative and does not reset.

According to [Spend Management](https://vercel.com/docs/spend-management):

- Hosting spend management is team-level and covers specified metered resources,
  not all seats, integrations, add-ons or external-service charges.
- Alerts/pause actions depend on configuration and delayed usage checks.
- Changing a shared team's limits or pause policy can affect other projects.

The product's provisional $100 allowance is one cumulative application envelope,
pending confirmation of included charges and reset policy. Allocate text, voice,
workflow/hosting and database costs within it; do not independently assign
$100 to each credential. Use bounded admission and headroom for delayed/in-flight
costs, with no automatic top-up or budget reset. An application ledger helps
control authorized work but cannot guarantee final vendor billing.

## Voice and durable work

Realtime authentication, supported models and billing vary by provider/protocol.
Verify the chosen voice path in its current official documentation. If it uses
a Gateway API key, the project OIDC budget does not cover that traffic. Use
server-mediated ephemeral client credentials and bounded sessions; never send
a long-lived provider key to the browser. Unsupported or unbounded live
configuration must remain unavailable rather than silently switch routes.

Use [Vercel Workflow](https://useworkflow.dev/docs) for durable orchestration,
checking the installed version's integration instructions. Keep model/database
I/O in steps and product state in the canonical store. A durable workflow is
not an exactly-once billing guarantee; reconcile dispatch and bound retries.
