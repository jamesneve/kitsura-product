import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "アカウント削除の手順 | Kitsura",
  description:
    "Kitsura（提供：Aisara (JP)）のアカウント（Firebase 匿名ログイン含む）削除依頼の手順。削除対象データ・保管期間の説明と連絡先。",
  alternates: {
    canonical: "https://kitsura.dev/delete-account",
    languages: {
      ja: "https://kitsura.dev/delete-account",
      en: "https://kitsura.dev/en/delete-account",
      "x-default": "https://kitsura.dev/delete-account",
    },
  },
};

export default function DeleteAccountPage() {
  const updated = "2025-12-16"; // 必要に応じて更新
  const developer = "Aisara (JP)";
  const appName = "Kitsura";

  return (
    <>
    <PageHeader />
    <main className="mx-auto max-w-3xl px-6 py-12 text-slate-800">
      <h1 className="text-3xl font-semibold">アカウント削除の手順</h1>
      <p className="mt-2 text-sm text-slate-500">最終更新日：{updated}</p>

      {/* App / Developer reference for store compliance */}
      <p className="mt-6 text-slate-700">
        本ページは Google Play ストアの「アカウント削除」要件に対応するための
        サポートURLです。対象アプリ：<span className="font-medium">{appName}</span>{" "}
        （開発元：<span className="font-medium">{developer}</span>）
      </p>

      {/* How to request deletion */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">削除依頼の方法（所要 2–3 分）</h2>
        <ol className="mt-3 list-decimal pl-6 space-y-2 text-slate-700">
          <li>
            アプリを開き、{" "}
            <span className="font-medium">設定 &gt; アカウント</span>{" "}
            へ進みます。
          </li>
          <li>
            <span className="font-medium">
              匿名ログインID（Firebase UID）
            </span>{" "}
            を表示し、<span className="font-medium">コピー</span>します。
            <br />
            <span className="text-sm text-slate-500">
              ※見つからない場合：<span className="font-medium">設定 &gt; サポート</span>
              に「匿名ログインID（UID）」の表示/コピー項目があります。古いバージョンで表示されない場合は、画面右上の「…」
              メニュー &gt; サポート からお試しください。
            </span>
          </li>
          <li>
            下記テンプレートで{" "}
            <a href="mailto:support@aisara.jp" className="underline">
              support@aisara.jp
            </a>{" "}
            へメールを送信します。
          </li>
        </ol>

        {/* Mail template */}
        <div className="mt-4 rounded-xl bg-slate-50 p-4">
          <p className="text-sm font-medium">メール宛先：</p>
          <p>
            <a
              className="underline"
              href={`mailto:support@aisara.jp?subject=${encodeURIComponent(
                "【Kitsura】アカウント削除希望（匿名ログインID記載）"
              )}&body=${encodeURIComponent(
                [
                  "以下の内容を記入して送信してください：",
                  "",
                  "・匿名ログインID（Firebase UID）：",
                  "・ご利用端末（例：iPhone 14 / Pixel 8 等）：",
                  "・OS / アプリのバージョン：",
                  "・削除したいデータの範囲（すべて／期間指定 など）：",
                  "・その他（データエクスポート希望の有無 など）：",
                ].join("\n")
              )}`}
            >
              support@aisara.jp（テンプレートで開く）
            </a>
          </p>
          <p className="mt-3 text-xs text-slate-500">
            原則として 2 営業日以内に受付確認を返信します（繁忙期を除く）。
            ご本人確認のため、必要最小限の追加情報の提供をお願いする場合があります。
          </p>
        </div>
      </section>

      {/* What we delete / keep */}
      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">削除されるデータ</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
            <li>アカウント識別子（Firebase 匿名ログイン UID）</li>
            <li>お子さまのプロフィール・名前等（アプリ内で登録したもの）</li>
            <li>日次記録・学習メモ・スライダー設定などの利用データ</li>
            <li>当社サーバー（Cloud SQL 等）上のアプリ関連レコード</li>
            <li>（該当する場合）ユーザーがアップロードした添付情報</li>
          </ul>
          <p className="mt-2 text-xs text-slate-500">
            依頼確定後、通常数営業日以内に削除処理を実施します。
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
          <h2 className="text-lg font-semibold">保持される／遅延削除となるデータ</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
            <li>
              セキュリティ・運用目的の{" "}
              <span className="font-medium">サーバーアクセスログ</span>（最長{" "}
              <span className="font-medium">12 か月</span>）
            </li>
            <li>
              システムの定期{" "}
              <span className="font-medium">バックアップ</span>（最長{" "}
              <span className="font-medium">30 日</span>でローテーション）
            </li>
            <li>
              サポート対応記録（メール等）：案件クローズ後{" "}
              <span className="font-medium">最長 3 年</span>
            </li>
          </ul>
          <p className="mt-2 text-xs text-slate-500">
            法令に基づく保存義務がある場合を除き、上記期間経過後に自動的に削除されます。
          </p>
        </div>
      </section>

      {/* Confirmation flow */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">削除の進行と確認</h2>
        <ol className="mt-3 list-decimal pl-6 space-y-2 text-slate-700">
          <li>ご依頼メール受領後、受付確認を返信します。</li>
          <li>対象範囲と本人確認が完了次第、削除を実行します。</li>
          <li>完了後、削除完了通知（証跡ID含む）をメールでお送りします。</li>
        </ol>
        <p className="mt-3 text-sm text-slate-500">
          データエクスポートをご希望の場合は、削除実行前にご連絡ください。
        </p>
      </section>

      {/* Troubleshooting for UID */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">匿名ログインID（UID）が見つからない場合</h2>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
          <li>
            アプリを最新バージョンに更新し、{" "}
            <span className="font-medium">設定 &gt; アカウント</span> を再確認。
          </li>
          <li>
            それでも表示されない場合は、以下を添えてメールください：
            <ul className="mt-2 list-[circle] pl-6 space-y-1">
              <li>利用端末名 / OS バージョン / アプリバージョン</li>
              <li>おおよその初回利用日（匿名サインインした日）</li>
              <li>発生している事象のスクリーンショット（可能なら）</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Legal links */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">関連ポリシー</h2>
        <ul className="mt-2 list-disc pl-6 text-slate-700">
          <li>
            <Link href="/privacy" className="underline">
              プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link href="/terms" className="underline">
              利用規約
            </Link>
          </li>
          <li>
            <Link href="/support" className="underline">
              サポートページ（FAQ / 連絡先）
            </Link>
          </li>
        </ul>
      </section>
    </main>
    <SiteFooter />
    </>
  );
}
