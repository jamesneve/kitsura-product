import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "プライバシーポリシー | Kitsura",
  description: "Kitsura アプリおよび Web サイトのプライバシーポリシー。",
  alternates: {
    canonical: "https://kitsura.dev/privacy",
    languages: {
      ja: "https://kitsura.dev/privacy",
      en: "https://kitsura.dev/en/privacy",
      "x-default": "https://kitsura.dev/privacy",
    },
  },
};

export default function PrivacyPage() {
  const updated = "2025-12-16"; // ← 最終更新日を更新
  return ( 
    <>
    <PageHeader />
    <main className="mx-auto max-w-3xl px-6 py-12 text-slate-800">
      <h1 className="text-3xl font-semibold">プライバシーポリシー</h1>
      <p className="mt-2 text-sm text-slate-500">最終更新日：{updated}</p>

      {/* 適用範囲 */}
      <section className="mt-6 space-y-4 leading-relaxed">
        <p>
          本プライバシーポリシー（以下「本ポリシー」）は、Aisara（以下「当社」）が提供する
          「Kitsura」<span className="whitespace-nowrap">（iOSアプリおよび Web サイト）</span>に適用されます。
          本ポリシーでは、収集する情報、利用目的、保存期間、第三者提供、安全管理措置、
          お客様の権利、問い合わせ方法等について説明します。
        </p>
      </section>

      {/* 1. 収集する情報 */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">1. 収集する情報</h2>
        <h3 className="mt-3 font-medium">（A）アプリ内</h3>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
          <li>
            認証情報：匿名サインイン等により発行される識別子（例：Firebase Authentication の UID）
          </li>
          <li>
            利用者が入力する内容：英語・日本語バランス等の記録、単語メモ、日付などの学習ログ
          </li>
          <li>
            技術情報：端末モデル、OSバージョン、アプリバージョン、IPアドレス、クラッシュ/エラーログ
            {/* TODO: Crashlytics を使わない場合は「クラッシュ/エラーログ」の記載を削る */}
          </li>
        </ul>

        <h3 className="mt-5 font-medium">（B）Web サイト</h3>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
          <li>任意のメールアドレス（ベータ案内・お問い合わせ対応）</li>
          <li>キャンペーン計測用の UTM パラメータ</li>
          <li>アクセスログ（IP アドレス、ユーザーエージェント等）</li>
          <li>
            アクセス解析イベント（個人を直接特定しない範囲）
            {/* TODO: Plausible を使う場合はその旨を保持 */}
          </li>
        </ul>
      </section>

      {/* 2. 利用目的 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">2. 利用目的</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
          <li>サービスの提供・維持（認証、データ保存、同期、バックアップ）</li>
          <li>機能改善・品質向上（不具合調査、パフォーマンス測定）</li>
          <li>お知らせ・重要通知の送付（障害・仕様変更等）</li>
          <li>不正利用の防止、セキュリティ確保</li>
          <li>法令遵守および紛争解決</li>
        </ul>
      </section>

      {/* 3. 保存期間 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">3. 保存期間</h2>
        <p className="mt-2 text-slate-700">
          収集した情報は、利用目的の達成に必要な範囲で保存します。
          アカウント/データ削除のご依頼があった場合、合理的な期間内に削除します（法令により保存が必要な場合を除く）。
          {/* TODO: 具体的な期間がある場合は記載（例：最終アクセスから 24 か月 等） */}
        </p>
      </section>

      {/* 4. 第三者提供・委託 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">4. 第三者提供・委託</h2>
        <p className="mt-2 text-slate-700">
          当社は、サービス運営に必要な範囲で業務を委託し、個人情報の取扱いを委託先に行わせる場合があります。
          委託に際しては、適切な契約・監督を行います。法令に基づく場合を除き、本人の同意なく第三者に販売・共有しません。
        </p>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
          <li>
            インフラ：Google Cloud（Cloud Run / Cloud SQL 等）
            {/* TODO: 利用リージョン（例：asia-northeast1 等）を記載 */}
          </li>
          <li>
            認証：Firebase Authentication（Google LLC）
          </li>
          <li>
            クラッシュ解析：Firebase Crashlytics（Google LLC）
            {/* TODO: 未使用なら削除 */}
          </li>
          <li>
            ホスティング（Web）：Vercel
          </li>
          <li>
            解析（Web）：Plausible（PII を送信しません）
            {/* TODO: 未使用なら削除 */}
          </li>
        </ul>
        <p className="mt-2 text-xs text-slate-500">
          上記の提供先は国外に所在する場合があり、所在国の法令が適用されます。
        </p>
      </section>

      {/* 5. 安全管理措置 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">5. 安全管理措置</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
          <li>通信の暗号化（HTTPS/TLS）</li>
          <li>アクセス制御・ログ管理</li>
          <li>最小権限の原則に基づく運用</li>
        </ul>
      </section>

      {/* 6. お客様の権利 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">6. お客様の権利</h2>
        <p className="mt-2 text-slate-700">
          お客様は、保有個人データの開示・訂正・追加・削除・利用停止等を求めることができます。
          法令に基づき、合理的な範囲で対応します。
        </p>
      </section>

      {/* 7. データの削除・エクスポート */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">7. データの削除・エクスポート</h2>
        {/* TODO: アプリ内で自己削除機能がある場合はその手順を先に明記 */}
        <p className="mt-2 text-slate-700">
          データの削除またはエクスポートをご希望の方は、以下のテンプレートをご利用ください。
          ご本人確認のため、必要最小限の情報のご提供をお願いする場合があります。
        </p>
        <div className="mt-3 rounded-xl bg-slate-50 p-4 text-sm">
          <p className="font-medium">メール宛先：</p>
          <p>
            <a href="mailto:support@aisara.jp" className="underline">support@aisara.jp</a>
          </p>
          <p className="mt-3 font-medium">件名：</p>
          <p>【Kitsura】データ削除（またはエクスポート）希望</p>
          <p className="mt-3 font-medium">本文（必要事項）：</p>
          <ul className="list-disc pl-6">
            <li>ご利用のメールアドレス（登録がある場合）</li>
            <li>端末名 / iOS バージョン / アプリバージョン</li>
            <li>対象範囲（すべて / 期間指定 / 特定の記録 など）</li>
            <li>その他ご要望</li>
          </ul>
        </div>
      </section>

      {/* 8. 未成年の利用 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">8. 未成年の利用</h2>
        <p className="mt-2 text-slate-700">
          本サービスは保護者向けであり、児童から直接個人情報を収集することを意図していません。
        </p>
      </section>

      {/* 9. 連絡先（管理者） */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">9. 連絡先</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-700">
          <li>事業者名：Aisara（JP）{/* TODO: 登記上の正式名称に合わせて編集 */}</li>
          <li>メール：<a className="underline" href="mailto:support@aisara.jp">support@aisara.jp</a></li>
          {/* TODO: 住所等の記載ポリシーに応じて追記 */}
        </ul>
      </section>

      {/* 10. 改定 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">10. 改定</h2>
        <p className="mt-2 text-slate-700">
          本ポリシーは必要に応じて更新します。重要な変更は本ページにて告知します。
        </p>
      </section>
    </main>
    <SiteFooter />
    </>
  );
}
