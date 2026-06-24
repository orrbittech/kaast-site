export const ROUTES = {
  home: "/",
  signUp: "/sign-up",
  signIn: "/sign-in",
  welcome: "/welcome",
  billing: "/billing",
  privacy: "/privacy",
  terms: "/terms",
} as const;

/** Canonical URLs for App Store / Play Console */
export const LEGAL_URLS = {
  privacy: "https://kaast.app/privacy",
  terms: "https://kaast.app/terms",
  support: "mailto:support@kaast.app",
} as const;

export const TRIAL_DAYS =
  process.env.NEXT_PUBLIC_TRIAL_DAYS?.trim() || "30";
