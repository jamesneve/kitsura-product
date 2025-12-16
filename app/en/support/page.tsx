import Link from "next/link";

import PageHeaderEN from "@/components/PageHeaderEN";
import SiteFooterEN from "@/components/SiteFooterEN";

export const metadata = {
  title: "Support | Kitsura",
  description:
    "Support information, FAQ, contact details, and data deletion/export procedures for Kitsura.",
  alternates: {
    canonical: "https://kitsura.dev/en/support",
    languages: {
      ja: "https://kitsura.dev/support",
      en: "https://kitsura.dev/en/support",
      "x-default": "https://kitsura.dev/support",
    },
  },
};

export default function SupportPageEN() {
  const updated = "2025-12-16"; // Update as needed
  return (
    <>
      <PageHeaderEN />
      <main className="mx-auto max-w-3xl px-6 py-12 text-slate-800">
        <h1 className="text-3xl font-semibold">Kitsura Support</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

        <section className="mt-6 space-y-6 leading-relaxed">
          <p>
            This page provides answers to common questions, troubleshooting tips,
            contact information, and instructions for requesting data deletion or export.
            It also serves as the public “Support URL” for the App Store.
          </p>

          {/* Contact */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Contact</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
              <li>
                Email:{" "}
                <a href="mailto:support@aisara.jp" className="underline">
                  support@aisara.jp
                </a>
              </li>
              <li>Support hours: Weekdays 10:00–17:00 (JST)</li>
              <li>Supported languages: Japanese / English</li>
            </ul>
            <p className="mt-3 text-sm text-slate-500">
              We aim to reply within 48 hours (excluding busy periods).
            </p>
          </div>

          {/* App info */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">App Information</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
              <li>App name: Kitsura — English–Japanese Exposure Balance</li>
              <li>Supported OS: iOS 15 or later (subject to change)</li>
              <li>
                To check your app version:
                see the “Version History” on the App Store or “Settings” within the app.
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Frequently Asked Questions (FAQ)</h2>

            <details className="mt-3">
              <summary className="cursor-pointer font-medium">
                I can’t sign in (including anonymous sign-in)
              </summary>
              <div className="mt-2 text-sm text-slate-700">
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Check your internet connection (Wi-Fi / mobile) and try again.</li>
                  <li>Disable Airplane Mode or VPN, then retry.</li>
                  <li>Close and restart the app. If the issue persists, reinstall it.</li>
                </ol>
                <p className="mt-2">
                  If the problem continues, please contact us with your device model,
                  iOS version, and app version.
                </p>
              </div>
            </details>

            <details className="mt-3">
              <summary className="cursor-pointer font-medium">
                The English–Japanese slider doesn’t respond or save
              </summary>
              <div className="mt-2 text-sm text-slate-700">
                <p>
                  Please ensure you’re using the latest app version, then restart the app.
                  If the issue continues, include the reproduction steps (which screen and actions)
                  when contacting us.
                </p>
              </div>
            </details>

            <details className="mt-3">
              <summary className="cursor-pointer font-medium">
                Where is my data stored?
              </summary>
              <div className="mt-2 text-sm text-slate-700">
                <p>
                  Your records are transmitted and stored securely on our servers via
                  encrypted communication. For details, see the{" "}
                  <Link href="/en/privacy" className="underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </details>
          </div>

          {/* Troubleshooting */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Troubleshooting</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
              <li>
                Try restarting your device, restarting the app,
                or switching networks (Wi-Fi ⇄ 4G/5G).
              </li>
              <li>
                On iOS, go to Settings → Kitsura → Mobile Data, and make sure it’s enabled.
              </li>
              <li>
                If the issue persists, please provide the reproduction steps,
                date/time of occurrence, and a screenshot if possible.
              </li>
            </ul>
          </div>

          {/* Data deletion/export */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Data Deletion / Export</h2>
            <p className="mt-2 text-slate-700">
              To request deletion or export of your data, please use the template below.
              For identity verification, we may ask you to provide minimal additional information.
            </p>
            <div className="mt-3 rounded-xl bg-slate-50 p-4 text-sm">
              <p className="font-medium">Email address:</p>
              <p>
                <a href="mailto:support@aisara.jp" className="underline">
                  support@aisara.jp
                </a>
              </p>
              <p className="mt-3 font-medium">Subject:</p>
              <p>[Kitsura] Data Deletion (or Export) Request</p>
              <p className="mt-3 font-medium">Message body (required info):</p>
              <ul className="list-disc pl-6">
                <li>Your email address (if registered)</li>
                <li>Device name / iOS version / App version</li>
                <li>Scope of data (All / Date range / Specific records)</li>
                <li>Other requests</li>
              </ul>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Unless required by law, we will respond promptly and within a reasonable time.
            </p>
          </div>
        </section>
      </main>
      <SiteFooterEN />
    </>
  );
}
