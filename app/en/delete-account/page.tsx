import Link from "next/link";

import PageHeaderEN from "@/components/PageHeaderEN";
import SiteFooterEN from "@/components/SiteFooterEN";

export const metadata = {
  title: "How to Delete Your Account | Kitsura",
  description:
    "Instructions for requesting account deletion (including Firebase anonymous login) for Kitsura by Aisara (JP). Includes details on data subject to deletion, retention periods, and contact information.",
  alternates: {
    canonical: "https://kitsura.dev/en/delete-account",
    languages: {
      ja: "https://kitsura.dev/delete-account",
      en: "https://kitsura.dev/en/delete-account",
      "x-default": "https://kitsura.dev/delete-account",
    },
  },
};

export default function DeleteAccountPageEN() {
  const updated = "2025-10-15"; // Update if necessary
  const developer = "Aisara (JP)";
  const appName = "Kitsura — English–Japanese Exposure Balance";

  return (
    <>
      <PageHeaderEN />
      <main className="mx-auto max-w-3xl px-6 py-12 text-slate-800">
        <h1 className="text-3xl font-semibold">Account Deletion Procedure</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

        {/* App / Developer reference for store compliance */}
        <p className="mt-6 text-slate-700">
          This page serves as the Support URL required by Google Play’s{" "}
          <span className="font-medium">“Account Deletion”</span> policy.  
          Target app: <span className="font-medium">{appName}</span>{" "}
          (Developer: <span className="font-medium">{developer}</span>)
        </p>

        {/* How to request deletion */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">How to Request Deletion (Takes 2–3 minutes)</h2>
          <ol className="mt-3 list-decimal pl-6 space-y-2 text-slate-700">
            <li>
              Open the app and go to{" "}
              <span className="font-medium">Settings &gt; Account</span>.
            </li>
            <li>
              Find and copy your{" "}
              <span className="font-medium">Anonymous Login ID (Firebase UID)</span>.
              <br />
              <span className="text-sm text-slate-500">
                ※ If you can’t find it: go to{" "}
                <span className="font-medium">Settings &gt; Support</span> and look
                for the “Anonymous Login ID (UID)” section.  
                In older versions, try opening the “…” menu (top right) → Support.
              </span>
            </li>
            <li>
              Send an email using the template below to{" "}
              <a href="mailto:support@aisara.jp" className="underline">
                support@aisara.jp
              </a>.
            </li>
          </ol>

          {/* Mail template */}
          <div className="mt-4 rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-medium">Email address:</p>
            <p>
              <a
                className="underline"
                href={`mailto:support@aisara.jp?subject=${encodeURIComponent(
                  "[Kitsura] Account Deletion Request (with Anonymous Login ID)"
                )}&body=${encodeURIComponent(
                  [
                    "Please fill in the following information and send:",
                    "",
                    "• Anonymous Login ID (Firebase UID):",
                    "• Your device (e.g. iPhone 14 / Pixel 8):",
                    "• OS / App version:",
                    "• Data scope to delete (All / Specific period, etc.):",
                    "• Other requests (e.g. data export):",
                  ].join("\n")
                )}`}
              >
                support@aisara.jp (Open email template)
              </a>
            </p>
            <p className="mt-3 text-xs text-slate-500">
              We normally reply with confirmation within 2 business days (except during busy periods).  
              For verification, we may ask for minimal additional information.
            </p>
          </div>
        </section>

        {/* What we delete / keep */}
        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Data That Will Be Deleted</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
              <li>Account identifier (Firebase anonymous login UID)</li>
              <li>Child profiles and names registered in the app</li>
              <li>Daily records, word memos, slider settings, and usage data</li>
              <li>App-related records stored on our servers (Cloud SQL, etc.)</li>
              <li>(If applicable) Any files or attachments uploaded by the user</li>
            </ul>
            <p className="mt-2 text-xs text-slate-500">
              After your request is confirmed, deletion is usually completed within a few business days.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">
              Data Retained or Deleted After a Delay
            </h2>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
              <li>
                <span className="font-medium">Server access logs</span> kept for security and
                operational purposes (up to <span className="font-medium">12 months</span>)
              </li>
              <li>
                <span className="font-medium">System backups</span> rotated within{" "}
                <span className="font-medium">30 days</span>
              </li>
              <li>
                Support correspondence (emails, etc.): retained for up to{" "}
                <span className="font-medium">3 years</span> after the case is closed
              </li>
            </ul>
            <p className="mt-2 text-xs text-slate-500">
              Unless required by law, these records are automatically purged once the retention period ends.
            </p>
          </div>
        </section>

        {/* Confirmation flow */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Process and Confirmation</h2>
          <ol className="mt-3 list-decimal pl-6 space-y-2 text-slate-700">
            <li>We reply to confirm receipt of your email request.</li>
            <li>
              Once the scope and identity verification are complete, the deletion will be executed.
            </li>
            <li>
              After completion, we send a confirmation email including a reference ID.
            </li>
          </ol>
          <p className="mt-3 text-sm text-slate-500">
            If you would like your data exported before deletion, please let us know in advance.
          </p>
        </section>

        {/* Troubleshooting for UID */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">
            If You Can’t Find Your Anonymous Login ID (UID)
          </h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
            <li>
              Update the app to the latest version and recheck{" "}
              <span className="font-medium">Settings &gt; Account</span>.
            </li>
            <li>
              If it still doesn’t appear, please email us with the following details:
              <ul className="mt-2 list-[circle] pl-6 space-y-1">
                <li>Device name / OS version / App version</li>
                <li>Approximate first use date (when anonymous sign-in occurred)</li>
                <li>Screenshot of the issue (if possible)</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Legal links */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Related Policies</h2>
          <ul className="mt-2 list-disc pl-6 text-slate-700">
            <li>
              <Link href="/en/privacy" className="underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/en/terms" className="underline">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/en/support" className="underline">
                Support Page (FAQ / Contact)
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooterEN />
    </>
  );
}
