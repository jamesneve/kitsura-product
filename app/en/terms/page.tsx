import Link from "next/link";

import PageHeaderEN from "@/components/PageHeaderEN";
import SiteFooterEN from "@/components/SiteFooterEN";

export const metadata = {
  title: "Terms of Use | Kitsura",
  description: "Terms of Use for the Kitsura app and website.",
  alternates: {
    canonical: "https://kitsura.dev/en/terms",
    languages: {
      ja: "https://kitsura.dev/terms",
      en: "https://kitsura.dev/en/terms",
      "x-default": "https://kitsura.dev/terms",
    },
  },
};

export default function TermsPageEN() {
  const updated = "2025-12-16"; // Update as needed
  return (
    <>
      <PageHeaderEN />
      <main className="mx-auto max-w-3xl px-6 py-12 text-slate-800">
        <h1 className="text-3xl font-semibold">Terms of Use</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

        {/* 0. Introduction */}
        <section className="mt-6 space-y-4 leading-relaxed">
          <p>
            These Terms of Use (the “Terms”) set forth the conditions for using
            the “Kitsura” service (the iOS app and website, collectively the “Service”)
            provided by Aisara (“we,” “our,” or “us”). Users of the Service (“Users”)
            agree to these Terms before using the Service.
          </p>
          <p className="text-sm text-slate-600">
            ※ This is a template. Please adjust to your actual operations (e.g., fees/subscriptions,
            contact details, your registered company name).
          </p>
        </section>

        {/* 1. Scope and Changes */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">1. Scope and Changes</h2>
          <p className="mt-2">
            These Terms apply to all uses of the Service by Users. We may change
            these Terms as necessary. When making material changes, we will notify
            Users by posting on this site or through other appropriate means.
            By continuing to use the Service after changes take effect, Users are
            deemed to have agreed to the changes.
          </p>
        </section>

        {/* 2. Definitions */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">2. Definitions</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              “App”: The Kitsura mobile application provided for iOS.
            </li>
            <li>
              “User Content”: Data input or transmitted by Users (e.g., English–Japanese
              balance logs, word memos, notes).
            </li>
            <li>
              “Account”: An identifier issued for authentication (e.g., UID from
              anonymous sign-in).
            </li>
          </ul>
        </section>

        {/* 3. Accounts and Authentication */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">3. Accounts and Authentication</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              The Service may use anonymous sign-in or similar methods. Users are
              responsible for managing their devices and authentication information.
            </li>
            <li>
              We are not liable for any loss arising from lending, transferring,
              or losing a device.
            </li>
          </ul>
        </section>

        {/* 4. Fees, Billing, and Cancellation */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">4. Fees, Billing, and Cancellation</h2>
          <p className="mt-2">
            Some features of the Service may be offered under paid plans in the future
            (the Service may currently be provided free/in beta). Purchases, cancellations,
            and refunds for paid plans are governed by Apple’s App Store.
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1 text-sm">
            <li>
              Charges are billed to the User’s Apple ID. For auto-renewing subscriptions,
              the plan renews automatically unless turned off at least 24 hours before
              the end of the current period.
            </li>
            <li>
              You can manage auto-renewal and cancel via your device:
              “Settings” → “Apple ID” → “Subscriptions.”
            </li>
            <li>
              Partial (pro-rata) refunds are generally not provided for cancellations
              during a billing period. Refund policies follow Apple’s rules.
            </li>
          </ul>
          <p className="mt-2 text-xs text-slate-500">
            ※ When introducing paid offerings, clearly disclose details on a separate page
            (e.g., “Legal Notice / Act on Specified Commercial Transactions”).
          </p>
        </section>

        {/* 5. Handling of User Content */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">5. Handling of User Content</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              Users represent and warrant that they have lawful rights to their
              User Content and that it does not infringe third-party rights.
            </li>
            <li>
              We may handle User Content within a reasonable scope to provide the
              Service, improve quality, and analyze issues.
            </li>
            <li>
              We do not guarantee backups of User Content. Please use export features
              as needed.
            </li>
          </ul>
        </section>

        {/* 6. Prohibited Conduct */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">6. Prohibited Conduct</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Acts that violate laws or public order and morals</li>
            <li>
              Infringing our or third parties’ rights/interests (e.g., IP rights, privacy)
            </li>
            <li>
              Misuse of the Service, reverse engineering, or imposing excessive load
            </li>
            <li>Submitting false information or impersonation</li>
          </ul>
        </section>

        {/* 7. Intellectual Property */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">7. Intellectual Property</h2>
          <p className="mt-2">
            All rights to the Service (programs, designs, logos, documents, etc.)
            belong to us or rightful owners. Users do not acquire any intellectual
            property rights by using the Service.
          </p>
        </section>

        {/* 8. Third-Party Services and Links */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">8. Third-Party Services and Links</h2>
          <p className="mt-2">
            The Service may use third-party services such as Google Cloud, Firebase,
            and Vercel. Use of such services is subject to their respective terms
            and policies.
          </p>
        </section>

        {/* 9. Disclaimers and No Warranties */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">9. Disclaimers and No Warranties</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              We do not warrant that the Service will always be available or free
              from errors.
            </li>
            <li>
              The Service is a supplemental tool for education and family communication
              and does not provide medical or professional advice.
            </li>
            <li>
              We are not liable for damages arising from a User’s use or inability
              to use the Service, except in cases of our willful misconduct or gross
              negligence.
            </li>
          </ul>
        </section>

        {/* 10. Limitation of Liability */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">10. Limitation of Liability</h2>
          <p className="mt-2">
            Even if we are liable, our liability is limited to direct and ordinary
            damages and shall not exceed the amount actually paid by the User to us
            in the past 12 months (or 10,000 JPY if the Service is free). This does
            not apply in cases of our willful misconduct or gross negligence.
          </p>
        </section>

        {/* 11. Termination and Suspension */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">11. Termination and Suspension</h2>
          <p className="mt-2">
            If a User violates these Terms, we may suspend the User’s access to the
            Service or delete the Account without prior notice.
          </p>
        </section>

        {/* 12. Special Terms for iOS (Apple EULA) */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">12. Special Terms for iOS (Apple EULA)</h2>
          <p className="mt-2">
            The iOS app is licensed under Apple’s “Standard EULA.”
            See:
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noreferrer"
              className="underline ml-1"
            >
              Apple Standard EULA
            </a>
            . If these Terms conflict with the EULA, the EULA shall prevail to the
            extent permitted by applicable law.
          </p>
        </section>

        {/* 13. Personal Data Handling */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">13. Personal Data Handling</h2>
          <p className="mt-2">
            Handling of personal data is governed by our{" "}
            <Link href="/en/privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* 14. Use by Minors */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">14. Use by Minors</h2>
          <p className="mt-2">
            The Service is intended for guardians/parents and is not designed to
            directly collect personal information from children. Guardians use the
            Service at their own responsibility.
          </p>
        </section>

        {/* 15. Governing Law and Jurisdiction */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">15. Governing Law and Jurisdiction</h2>
          <p className="mt-2">
            These Terms are governed by the laws of Japan. The Tokyo District Court
            shall have exclusive jurisdiction as the court of first instance.
          </p>
        </section>

        {/* 16. Contact */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">16. Contact</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              Business name: Aisara (JP)
              {/* TODO: Replace with your registered legal name if different */}
            </li>
            <li>
              Contact email:{" "}
              <a href="mailto:support@aisara.jp" className="underline">
                support@aisara.jp
              </a>
              {/* TODO: Change if using a different address */}
            </li>
          </ul>
        </section>

        {/* 17. Language */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">17. Language</h2>
          <p className="mt-2">
            These Terms are prepared in Japanese. If any translation differs from
            the Japanese version, the Japanese version shall prevail.
          </p>
        </section>
      </main>
      <SiteFooterEN />
    </>
  );
}
