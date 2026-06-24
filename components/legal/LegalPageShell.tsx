import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ROUTES } from "@/lib/routes";

interface LegalPageShellProps {
  title: string;
  children: React.ReactNode;
}

export function LegalPageShell({ title, children }: LegalPageShellProps) {
  return (
    <div className="min-h-screen bg-base font-sans">
      <Header />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-28">
        <Link
          href={ROUTES.home}
          className="mb-8 inline-block text-sm text-zinc-400 hover:text-primary"
        >
          ← Back to home
        </Link>
        <h1 className="mb-8 font-sans text-3xl font-semibold text-white">
          {title}
        </h1>
        <article className="prose prose-invert max-w-none space-y-6 text-zinc-300 prose-headings:text-white prose-a:text-primary">
          {children}
        </article>
      </main>
      <Footer />
    </div>
  );
}
