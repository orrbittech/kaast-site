export function Footer() {
  return (
    <footer id="download" className="bg-base py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <a
          href="#download"
          className="font-display inline-block cursor-pointer rounded-full bg-primary px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-muted"
        >
          Start running screens from your phone
        </a>
        <p className="font-display mt-6 text-sm text-zinc-400">
          If you can download apps, you can run KAAST.
        </p>
        <p className="font-display mt-3 text-xs text-zinc-500">
          KAAST is a sub-division of Orrbit Systems.{" "}
          <a
            href="https://www.orrbit.co.za/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-primary hover:underline"
          >
            Visit Orrbit
          </a>
        </p>
      </div>
    </footer>
  );
}
