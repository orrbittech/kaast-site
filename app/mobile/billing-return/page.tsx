"use client";

import { useEffect } from "react";

const MOBILE_BILLING_CALLBACK = "apk://billing-callback";

export default function MobileBillingReturnPage() {
  useEffect(() => {
    window.location.href = MOBILE_BILLING_CALLBACK;
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
      <p className="text-center text-zinc-400">
        Returning to KAAST app...
      </p>
    </main>
  );
}
