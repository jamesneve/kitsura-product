import Link from "next/link";

import PageHeaderEN from "@/components/PageHeaderEN";
import SiteFooterEN from "@/components/SiteFooterEN";

export const metadata = {
  title: "Privacy Policy | Kitsura",
  description: "Privacy Policy for the Kitsura app and website.",
  alternates: {
    canonical: "https://kitsura.dev/en/privacy",
    languages: {
      ja: "https://kitsura.dev/privacy",
      en: "https://kitsura.dev/en/privacy",
      "x-default": "https://kitsura.dev/privacy",
    },
  },
};

export default function PrivacyPage() {
  const updated = "2025-12-16"; // ← Update when last revised
  return (
    <>
    <PageHeaderEN />
    <main className="mx-auto max-w-3xl px-6 py-12 text-slate-800">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

      {/* Scope */}
      <section className="mt-6 space-y-4 leading-relaxed">
        <p>
          This Privacy Policy (“Policy”) applies to the “Kitsura” iOS
          application and website provided by Aisara (“we,” “our,” or “us”).
          This Policy explains what information we collect, how we use it, how
          long we retain it, when it may be shared, how it is protected, and
          your rights and contact methods.
        </p>
      </section>

      {/* 1. Information We Collect */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <h3 className="mt-3 font-medium">(A) In the App</h3>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
          <li>
            Authentication data: identifiers issued by anonymous sign-in or
            similar mechanisms (e.g., Firebase Authentication UID)
          </li>
          <li>
            User input: learning logs such as English/Japanese balance records,
            word notes, and dates
          </li>
          <li>
            Technical data: device model, OS version, app version, IP address,
            and crash/error logs
          </li>
        </ul>

        <h3 className="mt-5 font-medium">(B) On the Website</h3>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
          <li>
            Optional email addresses (for beta invitations or inquiry support)
          </li>
          <li>UTM parameters for campaign tracking</li>
          <li>Access logs (IP address, user agent, etc.)</li>
          <li>
            Analytics events (non–personally identifiable; e.g., Plausible
            Analytics)
          </li>
        </ul>
      </section>

      {/* 2. Purpose of Use */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">2. Purpose of Use</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
          <li>
            To provide and maintain the service (authentication, data storage,
            synchronization, backups)
          </li>
          <li>
            To improve functionality and quality (bug investigation, performance
            measurement)
          </li>
          <li>
            To send notifications and important announcements (e.g., outages or
            specification changes)
          </li>
          <li>To prevent misuse and ensure security</li>
          <li>To comply with laws and resolve disputes</li>
        </ul>
      </section>

      {/* 3. Retention Period */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">3. Retention Period</h2>
        <p className="mt-2 text-slate-700">
          Collected information is retained only as long as necessary to fulfill
          the purposes described above. When a user requests deletion of their
          account or data, it will be deleted within a reasonable time unless
          retention is required by law.
        </p>
      </section>

      {/* 4. Third-Party Sharing and Delegation */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">
          4. Third-Party Sharing and Delegation
        </h2>
        <p className="mt-2 text-slate-700">
          We may outsource certain operations necessary for service operation
          and allow the contractor to handle personal data. Appropriate
          agreements and supervision are implemented. Except as required by law,
          we do not sell or share personal information with third parties
          without user consent.
        </p>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
          <li>
            Infrastructure: Google Cloud (Cloud Run / Cloud SQL, etc.)
          </li>
          <li>Authentication: Firebase Authentication (Google LLC)</li>
          <li>Crash analytics: Firebase Crashlytics (Google LLC)</li>
          <li>Web hosting: Vercel</li>
          <li>Web analytics: Plausible (no PII transmitted)</li>
        </ul>
        <p className="mt-2 text-xs text-slate-500">
          Some service providers are located outside Japan and subject to their
          local laws.
        </p>
      </section>

      {/* 5. Security Measures */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">5. Security Measures</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
          <li>Encrypted communication (HTTPS/TLS)</li>
          <li>Access control and log management</li>
          <li>Operations based on the principle of least privilege</li>
        </ul>
      </section>

      {/* 6. Your Rights */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">6. Your Rights</h2>
        <p className="mt-2 text-slate-700">
          You may request disclosure, correction, addition, deletion, or
          suspension of use of your personal data. We will respond within a
          reasonable scope in accordance with applicable laws.
        </p>
      </section>

      {/* 7. Data Deletion and Export */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">7. Data Deletion and Export</h2>
        <p className="mt-2 text-slate-700">
          To request deletion or export of your data, please use the following
          template. For identity verification, we may request minimal
          information as needed.
        </p>
        <div className="mt-3 rounded-xl bg-slate-50 p-4 text-sm">
          <p className="font-medium">Email address:</p>
          <p>
            <a href="mailto:support@aisara.jp" className="underline">
              support@aisara.jp
            </a>
          </p>
          <p className="mt-3 font-medium">Subject:</p>
          <p>[Kitsura] Request for Data Deletion (or Export)</p>
          <p className="mt-3 font-medium">Body (required details):</p>
          <ul className="list-disc pl-6">
            <li>Your email address (if registered)</li>
            <li>Device name / iOS version / App version</li>
            <li>Scope (all / specified period / specific records, etc.)</li>
            <li>Other requests</li>
          </ul>
        </div>
      </section>

      {/* 8. Use by Minors */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">8. Use by Minors</h2>
        <p className="mt-2 text-slate-700">
          This service is intended for adults and is not designed to collect
          personal information from minors.
        </p>
      </section>

      {/* 9. Contact */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">9. Contact</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
          <li>
            Business name: Aisara (JP)
          </li>
          <li>
            Email:{" "}
            <a className="underline" href="mailto:support@aisara.jp">
              support@aisara.jp
            </a>
          </li>
        </ul>
      </section>

      {/* 10. Revisions */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">10. Revisions</h2>
        <p className="mt-2 text-slate-700">
          This Policy may be updated as necessary. Significant changes will be
          announced on this page.
        </p>
      </section>
    </main>
    <SiteFooterEN />
    </>
  );
}
