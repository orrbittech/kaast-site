import type { Metadata } from "next";
import { TRIAL_DAYS } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Start your free trial",
  description: `Sign up for KAAST and start your ${TRIAL_DAYS}-day free trial. Manage digital media across all your store locations.`,
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
