# KAAST Web

Marketing site, organization signup, and Clerk Billing checkout for **KAAST** — digital media management for South African SMEs.

Built by **Brandon Nkawu** for [Orrbit Systems](https://www.orrbit.co.za/). Proprietary product — see [LICENSE](./LICENSE).

## Stack

- Next.js 16 (App Router)
- Clerk (auth, organizations, billing)
- Tailwind CSS + shadcn/ui

## Setup

```bash
yarn install
cp .env.example .env.local
yarn dev
```

## Key routes

| Route | Purpose |
|-------|---------|
| `/` | Marketing home |
| `/sign-up` | Trial signup + org plan selection |
| `/billing` | Manage subscription |
| `/privacy` | Privacy policy (store URL) |
| `/terms` | Terms of use (store URL) |

## Legal

- Privacy: https://kaast.app/privacy
- Terms: https://kaast.app/terms

## Clerk Billing

See [../server/config/CLERK_BILLING_SETUP.md](../server/config/CLERK_BILLING_SETUP.md) for plan and webhook configuration.
