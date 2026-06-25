"use client";

import { PricingTable, useAuth, useOrganization } from "@clerk/nextjs";
import { useSubscription } from "@clerk/nextjs/experimental";
import { AuthShell } from "@/components/AuthShell";
import { clerkAppearance } from "@/lib/clerk-appearance";
import { hasAnyOrgPlan } from "@/lib/billing-config";
import { ROUTES } from "@/lib/routes";

const highlightedPlan = process.env.NEXT_PUBLIC_CLERK_HIGHLIGHTED_PLAN;

export default function BillingPage() {
  const { orgId, has, isLoaded } = useAuth();
  const { membership } = useOrganization();
  const { data: subscription } = useSubscription();

  if (!isLoaded) {
    return (
      <AuthShell title="Billing" subtitle="Loading...">
        <p className="text-center text-muted-foreground">Loading...</p>
      </AuthShell>
    );
  }

  const isAdmin = membership?.role === "org:admin";
  const hasActivePlan = hasAnyOrgPlan(has);

  return (
    <AuthShell
      title="Billing"
      subtitle={
        subscription?.status === "active"
          ? "Your organization subscription is active."
          : "Choose a plan to start or continue your trial."
      }
    >
      {!orgId ? (
        <p className="text-center text-muted-foreground">
          Select an organization to manage billing.
        </p>
      ) : !isAdmin ? (
        <p className="text-center text-muted-foreground">
          Only organization admins can manage billing. Contact your admin.
        </p>
      ) : (
        <>
          {subscription ? (
            <p className="mb-4 text-center text-sm text-zinc-400">
              Status: {subscription.status}
              {subscription.nextPayment
                ? ` · Next payment: ${subscription.nextPayment.date.toLocaleDateString()}`
                : null}
            </p>
          ) : null}
          <PricingTable
            for="organization"
            appearance={clerkAppearance}
            newSubscriptionRedirectUrl={ROUTES.welcome}
            {...(highlightedPlan ? { highlightedPlan } : {})}
          />
          {!hasActivePlan ? (
            <p className="mt-4 text-center text-xs text-zinc-500">
              Trials are managed by Clerk. Your card is charged automatically
              when the trial ends unless you cancel.
            </p>
          ) : null}
        </>
      )}
    </AuthShell>
  );
}
