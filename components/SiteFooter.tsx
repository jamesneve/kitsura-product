import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} Aisara (JP). All rights reserved.
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
          <Link href="/privacy" className="hover:underline">プライバシー</Link>
          <Link href="/terms" className="hover:underline">利用規約</Link>
          <Link href="/support" className="hover:underline">サポート</Link>
          <Link href="/delete-account" className="hover:underline">アカウント削除</Link>
          <span className="hidden sm:inline">
            ｜キーワード: 語学学習 / 学習記録 / ストリーク / 進捗管理 / 4技能バランス
          </span>
        </div>
      </div>
    </footer>
  );
}
