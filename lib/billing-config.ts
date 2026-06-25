function parseCommaSeparatedSlugs(raw: string | undefined, envName: string): string[] {
  if (!raw?.trim()) {
    throw new Error(`${envName} is required`);
  }

  const slugs = raw
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean);

  if (slugs.length === 0) {
    throw new Error(`${envName} must contain at least one plan slug`);
  }

  return slugs;
}

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} is required`);
  }
  return value;
}

export const orgPlanSlugs = parseCommaSeparatedSlugs(
  process.env.NEXT_PUBLIC_CLERK_ORG_PLAN_SLUGS,
  "NEXT_PUBLIC_CLERK_ORG_PLAN_SLUGS",
);

export const billingUrl = requireEnv("NEXT_PUBLIC_BILLING_URL");

type HasPlanFn = (params: { plan: string }) => boolean;

export function hasAnyOrgPlan(
  has: HasPlanFn | undefined,
  slugs: string[] = orgPlanSlugs,
): boolean {
  if (!has) return false;
  return slugs.some((slug) => has({ plan: slug }));
}
