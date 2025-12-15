import Link from "next/link";

type Props = {
  /** If your English pages live under /en, pass basePath="/en" */
  basePath?: string;
};

export default function SiteFooterEN({ basePath = "" }: Props) {
  const to = (p: string) => `${basePath}${p}`;
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} Aisara (JP). All rights reserved.
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
          <Link href={to("/en/privacy")} className="hover:underline">Privacy</Link>
          <Link href={to("/en/terms")} className="hover:underline">Terms</Link>
          <Link href={to("/en/support")} className="hover:underline">Support</Link>
          <Link href={to("/en/delete-account")} className="hover:underline">Delete account</Link>
          <span className="hidden sm:inline">
            | Keywords: bilingual parenting / exposure balance / word log
          </span>
        </div>
      </div>
    </footer>
  );
}
