import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LEGAL_URLS } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "KAAST privacy policy — how Orrbit Systems collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> June 2026
      </p>
      <p>
        KAAST is operated by{" "}
        <a href="https://www.orrbit.co.za/" target="_blank" rel="noreferrer">
          Orrbit Systems
        </a>{" "}
        and was built by Brandon Nkawu. This Privacy Policy explains how we
        collect, use, store, and protect personal information when you use
        KAAST (web, mobile, and TV applications).
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Account data:</strong> name, email address, profile image, and
          authentication credentials (via Clerk).
        </li>
        <li>
          <strong>Organization data:</strong> business name, team members,
          roles, and subscription status.
        </li>
        <li>
          <strong>Operational data:</strong> locations, devices, playlists,
          media metadata, playback sessions, and pairing codes.
        </li>
        <li>
          <strong>Uploaded content:</strong> images, audio, and video files you
          upload to your media library (stored in Google Cloud Storage).
        </li>
        <li>
          <strong>Device data:</strong> push notification tokens, app version,
          and device identifiers for TV pairing.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <p>We use your data to:</p>
      <ul>
        <li>Provide digital signage and media management across your locations</li>
        <li>Authenticate users and enforce organization access controls</li>
        <li>Process subscriptions and free trials via Clerk Billing</li>
        <li>Send service emails (trial reminders, account notifications)</li>
        <li>Improve reliability, security, and product performance</li>
      </ul>

      <h2>Third-party services</h2>
      <ul>
        <li>
          <strong>Clerk</strong> — authentication, organizations, and billing
        </li>
        <li>
          <strong>Google Cloud Storage</strong> — media file storage
        </li>
        <li>
          <strong>Hosting providers</strong> — application and API hosting
        </li>
        <li>
          <strong>Resend</strong> — transactional email delivery
        </li>
      </ul>

      <h2>Your rights</h2>
      <p>Under POPIA and applicable privacy laws, you may:</p>
      <ul>
        <li>
          <strong>Download your data</strong> — from Settings in the mobile app
          or via our export API
        </li>
        <li>
          <strong>Delete your account</strong> — from Settings; this permanently
          removes your profile and org data you own
        </li>
        <li>
          <strong>Request correction</strong> — contact us to update inaccurate
          information
        </li>
      </ul>
      <p>
        For privacy requests contact:{" "}
        <a href={LEGAL_URLS.support}>support@kaast.app</a>
      </p>

      <h2>Data retention</h2>
      <p>
        We retain your data while your account is active. After account deletion,
        personal and organization data is removed from our systems within 30
        days. Uploaded media files in cloud storage are deleted as part of this
        process.
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard encryption, access controls, and secure
        authentication. Media uploads use signed URLs so files transfer
        directly to cloud storage without passing through our API servers.
      </p>

      <h2>Children</h2>
      <p>
        KAAST is a business application not intended for users under 16 years
        of age.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy. Material changes will be posted on this page
        with an updated date.
      </p>
    </LegalPageShell>
  );
}
