import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../globals.css"; // note the path (we're in /en)

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kitsura – Make English parenting visible with simple daily tracking",
  description:
    "Log the balance of English and Japanese with a single slider. See weekly trends and track words to feel daily progress.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: "https://kitsura.dev/en",
    languages: {
      ja: "https://kitsura.dev/",
      en: "https://kitsura.dev/en",
      "x-default": "https://kitsura.dev/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "kitsura.dev";
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head>
        {isProd && (
          <Script
            defer
            data-domain={domain}
            data-api="/api/event"
            src="/js/script.outbound-links.tagged-events.js"
          />
        )}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17513662719" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17513662719');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
