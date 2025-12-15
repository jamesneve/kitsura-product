"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function useLangPaths() {
  const pathname = usePathname() || "/";
  const isEN = pathname.startsWith("/en");
  const jpPath = isEN ? pathname.replace(/^\/en(\/|$)/, "/") : pathname || "/";
  const enPath =
    isEN ? pathname : pathname === "/" ? "/en" : `/en${pathname}`;
  return { isEN, jpPath, enPath };
}

export default function PageHeader() {
  const { isEN, jpPath, enPath } = useLangPaths();

  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90">
          <Image
            src="/kitsura/app_icon.png"
            alt="Kitsura アイコン"
            width={28}
            height={28}
            className="rounded-lg"
            priority
          />
          <span className="text-sm font-semibold text-slate-800">Kitsura</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex items-center gap-4 text-xs text-slate-600">
            <Link href="/" className="hover:underline">ホーム</Link>
            <Link href="/support" className="hover:underline">サポート</Link>
            <Link href="/privacy" className="hover:underline">プライバシー</Link>
            <Link href="/terms" className="hover:underline">利用規約</Link>
            <Link href="/delete-account" className="hover:underline">アカウント削除</Link>
          </nav>

          {/* Language switcher */}
          <div className="flex items-center gap-1 text-xs">
            <Link
              href={jpPath}
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
              lang="en"
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
