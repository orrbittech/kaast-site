/**
 * Onboarding content - mirrored from apk/lib/onboarding.ts.
 * Keep in sync when slides change.
 */
export interface OnboardingSlide {
  title: string;
  /** Optional text to render in primary (red) color, e.g. brand name */
  highlight?: string;
}

/** Onboarding slides - meaningful statements for the landing page. */
export const SLIDES: OnboardingSlide[] = [
  { title: "Take full control of every business screen", highlight: "KAAST" },
  { title: "Install KAAST on your phone to control TV Player apps" },
  { title: "Use smart or compatible TVs running KAAST TV Player" },
  { title: "Stop content chaos and move faster" },
  { title: "Launch in minutes and scale with confidence" },
];
