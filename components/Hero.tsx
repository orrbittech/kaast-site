import { SLIDES } from "@/lib/onboarding";

/** Hero section - headline and sub-headline from onboarding slides. */
export function Hero() {
  return (
    <section id="home" className="relative bg-base pt-36 pb-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Control every screen{" "}
          <span className="inline-block rounded-md bg-primary px-2 py-0.5 text-white">
            from your fingertips
          </span>
          . Keep your brand{" "}
          <span className="inline-block rounded-md bg-primary px-2 py-0.5 text-white">
            locked in
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-zinc-300 md:text-xl">
          Run promotions, playlists, and updates on every screen right from your
          phone. KAAST gives small businesses fast, simple control that scales.
        </p>

        <p className="mt-5 text-base font-semibold text-primary">
          {SLIDES[0].highlight} - {SLIDES[0].title}
        </p>
      </div>
    </section>
  );
}
