import Link from "next/link";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";
import { ROUTES, TRIAL_DAYS } from "@/lib/routes";

export function AppStoreButtons() {
  return (
    <section className="bg-base py-6">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Link
          href={ROUTES.signUp}
          className="mb-5 inline-block text-lg font-semibold text-zinc-200 transition-colors hover:text-white md:text-xl"
        >
          Start a {TRIAL_DAYS} day free trial
        </Link>
        <StoreDownloadButtons
          googlePlayHref={ROUTES.signUp}
          appStoreHref={ROUTES.signUp}
        />
      </div>
    </section>
  );
}
