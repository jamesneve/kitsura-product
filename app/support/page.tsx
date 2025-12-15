import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "サポート | Manabii",
  description: "Manabii のサポート情報、FAQ、お問い合わせ、データ削除依頼の手順。",
  alternates: {
    canonical: "https://manabii.app/support",
    languages: {
      ja: "https://manabii.app/support",
      en: "https://manabii.app/en/support",
      "x-default": "https://manabii.app/support",
    },
  },
};

export default function SupportPage() {
  const updated = "2025-10-11"; // 更新日に合わせて編集
  return (
    <>
    <PageHeader />
    <main className="mx-auto max-w-3xl px-6 py-12 text-slate-800">
      <h1 className="text-3xl font-semibold">Manabii サポート</h1>
      <p className="mt-2 text-sm text-slate-500">最終更新日：{updated}</p>

      <section className="mt-6 space-y-6 leading-relaxed">
        <p>
          本ページでは、よくある質問、トラブルシューティング、お問い合わせ方法、
          およびデータ削除・エクスポートの手順をご案内します。
          App Store の「サポートURL」として公開利用できます。
        </p>

        {/* 連絡先 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">連絡先</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
            <li>
              メール：{" "}
              <a href="mailto:support@aisara.jp" className="underline">
                support@aisara.jp
              </a>
            </li>
            <li>対応時間：平日 10:00–17:00（JST）</li>
            <li>対応言語：日本語 / 英語</li>
          </ul>
          <p className="mt-3 text-sm text-slate-500">
            48時間以内の返信を目安としています（繁忙期を除く）。
          </p>
        </div>

        {/* アプリ情報 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">アプリ情報</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
            <li>アプリ名：Manabii — 英語×日本語 露出バランス</li>
            <li>対象OS：iOS 15 以上（今後変更の可能性あり）</li>
            <li>
              バージョン確認：
              App Store の「バージョン履歴」またはアプリ内「設定」からご確認ください。
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">よくある質問（FAQ）</h2>

          <details className="mt-3">
            <summary className="cursor-pointer font-medium">
              サインインできません（匿名サインイン含む）
            </summary>
            <div className="mt-2 text-sm text-slate-700">
              <ol className="list-decimal pl-6 space-y-1">
                <li>通信状況（Wi-Fi / モバイル）を確認し、再試行。</li>
                <li>機内モードや VPN をオフにして再試行。</li>
                <li>アプリを一度終了→再起動。改善しない場合は再インストール。</li>
              </ol>
              <p className="mt-2">
                解決しない場合は、端末名・iOS バージョン・アプリバージョンを添えてご連絡ください。
              </p>
            </div>
          </details>

          <details className="mt-3">
            <summary className="cursor-pointer font-medium">
              英語・日本語スライダーが反応しない / 保存されない
            </summary>
            <div className="mt-2 text-sm text-slate-700">
              <p>
                最新バージョンかご確認のうえ、アプリ再起動をお試しください。
                事象が継続する場合、発生手順（どの画面で、どの操作をしたか）を添えてご連絡ください。
              </p>
            </div>
          </details>

          <details className="mt-3">
            <summary className="cursor-pointer font-medium">データの保存場所は？</summary>
            <div className="mt-2 text-sm text-slate-700">
              <p>
                記録データは暗号化通信でサーバーに送信・保存されます。詳細は{" "}
                <Link href="/privacy" className="underline">
                  プライバシーポリシー
                </Link>{" "}
                をご確認ください。
              </p>
            </div>
          </details>
        </div>

        {/* トラブルシューティング */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">トラブルシューティング</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
            <li>
              まずは端末の再起動、アプリの再起動、ネットワーク切替（Wi-Fi⇄4G/5G）をお試しください。
            </li>
            <li>
              iOS の設定 → Manabii → モバイルデータ通信 が有効かをご確認ください。
            </li>
            <li>
              それでも解決しない場合は、再現手順・発生日時・画面のスクリーンショットをご提供ください。
            </li>
          </ul>
        </div>

        {/* データの削除・エクスポート */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">データの削除・エクスポート</h2>
          <p className="mt-2 text-slate-700">
            データの削除またはエクスポートをご希望の方は、以下のテンプレートをご利用ください。
            ご本人確認のため、必要最小限の情報のご提供をお願いする場合があります。
          </p>
          <div className="mt-3 rounded-xl bg-slate-50 p-4 text-sm">
            <p className="font-medium">メール宛先：</p>
            <p>
              <a href="mailto:support@aisara.jp" className="underline">
                support@aisara.jp
              </a>
            </p>
            <p className="mt-3 font-medium">件名：</p>
            <p>【Manabii】データ削除（またはエクスポート）希望</p>
            <p className="mt-3 font-medium">本文（必要事項）：</p>
            <ul className="list-disc pl-6">
              <li>ご利用のメールアドレス（登録がある場合）</li>
              <li>端末名 / iOS バージョン / アプリバージョン</li>
              <li>対象範囲（すべて / 期間指定 / 特定の記録 など）</li>
              <li>その他ご要望</li>
            </ul>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            法令上の保存義務等がある場合を除き、合理的な範囲で速やかに対応します。
          </p>
        </div>
      </section>
    </main>
    <SiteFooter />
    </>
  );
}
