"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  /** If your English pages live under /en, pass basePath="/en" (default). */
  basePath?: string;
};

function useLangPaths(basePath = "/en") {
  const pathname = usePathname() || "/";
  const isEN = pathname.startsWith(basePath);
  const jpPath = isEN
    ? pathname.replace(new RegExp(`^${basePath}(\\/|$)`), "/")
    : pathname || "/";
  const enPath = isEN
    ? pathname
    : pathname === "/"
    ? basePath
    : `${basePath}${pathname}`;
  return { isEN, jpPath, enPath };
}

export default function PageHeaderEN({ basePath = "/en" }: Props) {
  const { isEN, jpPath, enPath } = useLangPaths(basePath);

  const to = (p: string) => `${basePath}${p === "/" ? "" : p}`;

  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href={to("/")} className="flex items-center gap-2 hover:opacity-90">
          <Image
            src="/manabii/app_icon.png"
            alt="Manabii icon"
            width={28}
            height={28}
            className="rounded-lg"
            priority
          />
          <span className="text-sm font-semibold text-slate-800">Manabii</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex items-center gap-4 text-xs text-slate-600">
            <Link href={to("/")} className="hover:underline">Home</Link>
            <Link href={to("/support")} className="hover:underline">Support</Link>
            <Link href={to("/privacy")} className="hover:underline">Privacy</Link>
            <Link href={to("/terms")} className="hover:underline">Terms</Link>
            <Link href={to("/delete-account")} className="hover:underline">Delete account</Link>
          </nav>

          {/* Language switcher */}
          <div className="flex items-center gap-1 text-xs">
            <Link
              href={jpPath}
              lang="ja"
              aria-current={!isEN ? "page" : undefined}
              className={`rounded-md px-2 py-1 ${
                !isEN
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              JP
            </Link>
            <span className="text-slate-300">/</span>
            <Link
              href={enPath}
              aria-current={isEN ? "page" : undefined}
              className={`rounded-md px-2 py-1 ${
                isEN
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
