import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "利用規約 | Kitsura",
  description: "Kitsura アプリおよび Web サイトの利用規約。",
  alternates: {
    canonical: "https://kitsura.dev/terms",
    languages: {
      ja: "https://kitsura.dev/terms",
      en: "https://kitsura.dev/en/terms",
      "x-default": "https://kitsura.dev/terms",
    },
  },
};

export default function TermsPage() {
  const updated = "2025-12-16"; // ← 更新日に合わせて編集
  return (
    <>
    <PageHeader />
    <main className="mx-auto max-w-3xl px-6 py-12 text-slate-800">
      <h1 className="text-3xl font-semibold">利用規約</h1>
      <p className="mt-2 text-sm text-slate-500">最終更新日：{updated}</p>

      {/* 0. はじめに */}
      <section className="mt-6 space-y-4 leading-relaxed">
        <p>
          本利用規約（以下「本規約」）は、Aisara（以下「当社」）が提供する
          「Kitsura」（iOSアプリおよび Web サイト、以下総称して「本サービス」）の利用条件を定めるものです。
          本サービスの利用者（以下「ユーザー」）は、本規約に同意のうえ本サービスを利用するものとします。
        </p>
        <p className="text-sm text-slate-600">
          ※ 本規約はテンプレートです。実態に合わせて調整してください（料金・課金の有無、連絡先、事業者の正式名称 等）。
        </p>
      </section>

      {/* 1. 適用範囲・変更 */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">1. 適用範囲・変更</h2>
        <p className="mt-2">
          本規約は、ユーザーによる本サービスの一切の利用に適用されます。当社は、必要に応じて本規約を変更することがあります。
          重要な変更を行う場合は、本サイト上での掲示その他適切な方法により通知します。変更後にユーザーが本サービスを利用した場合、
          当該変更に同意したものとみなします。
        </p>
      </section>

      {/* 2. 定義 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">2. 定義</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>
            「アプリ」：iOS 向けに提供される Kitsura のモバイルアプリケーション。
          </li>
          <li>
            「ユーザーコンテンツ」：ユーザーが入力または送信するデータ（英語・日本語バランスの記録、単語メモ、メモ等）。
          </li>
          <li>
            「アカウント」：認証のために発行される識別子（例：匿名サインインによる UID 等）。
          </li>
        </ul>
      </section>

      {/* 3. アカウント・認証 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">3. アカウント・認証</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>本サービスは匿名サインイン等を用いる場合があります。ユーザーは自己の責任において端末・認証情報を管理してください。</li>
          <li>端末の貸与・譲渡・紛失等により生じた不利益について、当社は責任を負いません。</li>
        </ul>
      </section>

      {/* 4. 料金・課金・解約（必要に応じて調整） */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">4. 料金・課金・解約</h2>
        <p className="mt-2">
          本サービスの一部機能は将来的に有料プランを提供する場合があります（現時点では無料/β版として提供されることがあります）。
          有料プランの購入・解約・返金は Apple の App Store による管理に従います。
        </p>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-sm">
          <li>課金はユーザーの Apple ID に請求されます。自動更新型サブスクリプションの場合、期間終了の24時間前までに自動更新をオフにしない限り自動的に更新されます。</li>
          <li>自動更新の設定変更・解約は、端末の「設定」→「Apple ID」→「サブスクリプション」から行えます。</li>
          <li>課金期間中のキャンセルによる日割り返金は原則として行われません。返金ポリシーは Apple の規定に従います。</li>
        </ul>
        <p className="mt-2 text-xs text-slate-500">
          ※ 料金や提供内容を導入する際は、別途ページ（例：特定商取引法に基づく表示）で詳細を明記してください。
        </p>
      </section>

      {/* 5. ユーザーコンテンツの取扱い */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">5. ユーザーコンテンツの取扱い</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>ユーザーは、自己のユーザーコンテンツについて適法な権利を有するものとし、第三者の権利を侵害しないものとします。</li>
          <li>当社は、本サービスの提供・品質向上・不具合解析のために合理的な範囲でユーザーコンテンツを取り扱います。</li>
          <li>当社は、ユーザーコンテンツのバックアップを保証しません。必要に応じてエクスポート機能等をご利用ください。</li>
        </ul>
      </section>

      {/* 6. 禁止事項 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">6. 禁止事項</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>法令または公序良俗に反する行為</li>
          <li>当社または第三者の権利・利益を侵害する行為（知的財産権・プライバシー等）</li>
          <li>本サービスの不正利用、リバースエンジニアリング、過度な負荷を与える行為</li>
          <li>虚偽の情報の提供、なりすまし</li>
        </ul>
      </section>

      {/* 7. 知的財産権 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">7. 知的財産権</h2>
        <p className="mt-2">
          本サービスに関する一切の権利（プログラム、デザイン、ロゴ、文書等）は当社または正当な権利者に帰属します。ユーザーは、本サービスの利用により、当社または第三者の知的財産権を取得するものではありません。
        </p>
      </section>

      {/* 8. 第三者サービス・リンク */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">8. 第三者サービス・リンク</h2>
        <p className="mt-2">
          本サービスは、Google Cloud、Firebase、Vercel 等の第三者サービスを利用する場合があります。これら第三者のサービス利用に伴い適用される規約・ポリシーに従います。
        </p>
      </section>

      {/* 9. 免責・非保証 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">9. 免責・非保証</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>当社は、本サービスが常時利用可能であること、エラーがないことを保証しません。</li>
          <li>本サービスは教育・家族コミュニケーションの補助ツールであり、医療・専門的助言を提供するものではありません。</li>
          <li>ユーザーが本サービスを利用したこと又は利用できなかったことにより生じた損害について、当社は、当社の故意または重大な過失がある場合を除き、責任を負いません。</li>
        </ul>
      </section>

      {/* 10. 責任の制限 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">10. 責任の制限</h2>
        <p className="mt-2">
          当社が責任を負う場合であっても、その責任は、直接かつ通常の損害に限定され、かつ過去12か月間にユーザーが当社に実際に支払った対価の額（無償の場合は1万円）を上限とします。ただし、当社の故意または重大な過失による場合はこの限りではありません。
        </p>
      </section>

      {/* 11. 契約の終了・利用停止 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">11. 契約の終了・利用停止</h2>
        <p className="mt-2">
          当社は、ユーザーが本規約に違反した場合、事前の通知なく当該ユーザーの本サービス利用を停止又はアカウントを削除することができます。
        </p>
      </section>

      {/* 12. Apple EULA（iOS） */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">12. iOS 版に関する特則（Apple EULA）</h2>
        <p className="mt-2">
          iOS 版アプリのライセンスは、Apple が定める「Standard EULA」に従います。
          参照：
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noreferrer" className="underline ml-1">
            Apple Standard EULA
          </a>
          。本規約と当該 EULA が抵触する場合、適用法令に反しない限りで EULA が優先されます。
        </p>
      </section>

      {/* 13. 個人情報の取扱い */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">13. 個人情報の取扱い</h2>
        <p className="mt-2">
          個人情報の取扱いについては、
          <Link href="/privacy" className="underline">プライバシーポリシー</Link>
          に従います。
        </p>
      </section>

      {/* 14. 未成年の利用 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">14. 未成年の利用</h2>
        <p className="mt-2">
          本サービスは成人向けであり、未成年者から直接個人情報を収集することを意図していません。成人は自己の責任において本サービスを利用してください。
        </p>
      </section>

      {/* 15. 準拠法・管轄 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">15. 準拠法・管轄</h2>
        <p className="mt-2">
          本規約は日本法に準拠し、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      </section>

      {/* 16. お問い合わせ */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">16. お問い合わせ</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>事業者名：Aisara（JP）{/* TODO: 登記上の正式名称に合わせて編集 */}</li>
          <li>連絡先メール：<a href="mailto:support@aisara.jp" className="underline">support@aisara.jp</a> {/* TODO: 別アドレスにする場合は変更 */}</li>
        </ul>
      </section>

      {/* 17. 言語 */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">17. 言語</h2>
        <p className="mt-2">
          本規約は日本語で作成されています。翻訳版が存在し内容に相違がある場合、日本語版が優先します。
        </p>
      </section>
    </main>
    <SiteFooter />
    </>
  );
}
