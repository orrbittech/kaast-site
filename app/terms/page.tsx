import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LEGAL_URLS, ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "KAAST terms of use — rules and conditions for using the Orrbit Systems platform.",
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms of Use">
      <p>
        <strong>Last updated:</strong> June 2026
      </p>
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your access to and use of
        KAAST, a proprietary digital media management platform owned and
        operated by{" "}
        <a href="https://www.orrbit.co.za/" target="_blank" rel="noreferrer">
          Orrbit Systems
        </a>{" "}
        and built by Brandon Nkawu.
      </p>

      <h2>Acceptance</h2>
      <p>
        By creating an account, starting a free trial, or using any KAAST
        application (web, mobile, or TV), you agree to these Terms and our{" "}
        <a href={ROUTES.privacy}>Privacy Policy</a>.
      </p>

      <h2>Service description</h2>
      <p>
        KAAST enables organizations to manage digital media, playlists, and
        playback across multiple store locations and TV devices. Features
        depend on your subscription plan.
      </p>

      <h2>Accounts and organizations</h2>
      <ul>
        <li>You must provide accurate registration information</li>
        <li>Organization admins are responsible for team member access</li>
        <li>You are responsible for activity under your account</li>
        <li>You must not share credentials or circumvent access controls</li>
      </ul>

      <h2>Free trials and billing</h2>
      <p>
        Free trials are managed through Clerk Billing. Trial length (7, 14, or
        30 days) depends on the plan you select at signup. At the end of a
        trial, your subscription converts to a paid plan unless you cancel
        before the trial ends. Billing is handled by our payment processor
        (Stripe via Clerk).
      </p>
      <p>
        Manage billing at{" "}
        <a href={ROUTES.billing}>kaast.app/billing</a> or through your
        organization profile in the app.
      </p>

      <h2>Your content</h2>
      <p>
        You retain ownership of media you upload. You grant Orrbit Systems a
        limited license to store, transmit, and display your content solely to
        provide the KAAST service to your organization.
      </p>
      <p>You must not upload content that:</p>
      <ul>
        <li>Infringes third-party intellectual property rights</li>
        <li>Is unlawful, harmful, or violates applicable regulations</li>
        <li>Contains malware or attempts to compromise our systems</li>
      </ul>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or copy the KAAST software</li>
        <li>Use the service to compete with or replicate KAAST</li>
        <li>Overload or disrupt our infrastructure</li>
        <li>Access data belonging to other organizations</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        KAAST, including all software, designs, and documentation, is a
        proprietary product of Orrbit Systems. All rights reserved. Unauthorized
        copying, modification, or distribution is prohibited.
      </p>

      <h2>Data and account termination</h2>
      <p>
        You may download your data and delete your account at any time from
        Settings in the mobile app. We may suspend or terminate accounts that
        violate these Terms. Upon termination, your right to use KAAST ends
        immediately.
      </p>

      <h2>Disclaimer</h2>
      <p>
        KAAST is provided &quot;as is&quot; without warranties of any kind. We do
        not guarantee uninterrupted service. To the maximum extent permitted by
        law, Orrbit Systems is not liable for indirect, incidental, or
        consequential damages.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the Republic of South Africa.
        Disputes are subject to the jurisdiction of South African courts.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href={LEGAL_URLS.support}>support@kaast.app</a>
      </p>
    </LegalPageShell>
  );
}
