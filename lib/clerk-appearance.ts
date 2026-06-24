import { shadcn } from "@clerk/ui/themes";
import {
  authButtonClass,
  authErrorClass,
  authFieldClass,
  authSocialButtonClass,
} from "./auth-form-styles";

export const clerkAppearance = {
  theme: shadcn,
  variables: {
    colorPrimary: "hsl(0 72% 52%)",
    borderRadius: "0.5rem",
    fontFamily: "var(--font-urbanist), Urbanist, system-ui, sans-serif",
  },
  elements: {
    formFieldInput: authFieldClass,
    formFieldErrorText: authErrorClass,
    formButtonPrimary: authButtonClass,
    formButtonReset: authButtonClass,
    socialButtonsBlockButton: authSocialButtonClass,
    socialButtonsProviderIcon__apple: "text-foreground [&_svg]:fill-current",
    alternativeMethodsBlockButton: authSocialButtonClass,
    footerActionLink: "text-primary hover:text-primary-muted",
  },
};
