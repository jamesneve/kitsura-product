"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeaderEN from "@/components/PageHeaderEN";
import SiteFooterEN from "@/components/SiteFooterEN";

const VERSION = "lp-download-v1";
const IOS_APP_URL = "https://apps.apple.com/app/id6753667549";
const ANDROID_PLAY_URL = "https://play.google.com/store/apps/details?id=jp.aisara.kitsura&hl=en";
const ANDROID_APK_URL = "";
const CONTACT_EMAIL = "support@aisara.jp";

export default function EnglishBalanceLandingEN() {
  const [utm, setUtm] = React.useState<Record<string, string>>({});
  const [flash, setFlash] = React.useState<{ open: boolean; kind: "success" | "error"; text: string }>({
    open: false,
    kind: "success",
    text: "",
  });
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const ua = navigator.userAgent || "";
    const mobile = /iPhone|iPad|iPod|Android/i.test(ua);
    setIsMobile(mobile);
  }, []);

  const iosUrlWithUtm = React.useMemo(() => {
    if (!IOS_APP_URL) return "";
    const search = typeof window !== "undefined" ? window.location.search : "";
    try {
      const u = new URL(IOS_APP_URL);
      const current = new URLSearchParams(search);
      current.forEach((v, k) => u.searchParams.set(k, v));
      return u.toString();
    } catch {
      return IOS_APP_URL + (search || "");
    }
  }, []);

  const androidUrlWithUtm = React.useMemo(() => {
    if (!ANDROID_PLAY_URL) return "";
    const search = typeof window !== "undefined" ? window.location.search : "";
    try {
      const u = new URL(ANDROID_PLAY_URL);
      const current = new URLSearchParams(search);
      current.forEach((v, k) => u.searchParams.set(k, v));
      return u.toString();
    } catch {
      return ANDROID_PLAY_URL + (search || "");
    }
  }, []);

  const onCopyIosLink = async () => {
    try {
      await navigator.clipboard.writeText(iosUrlWithUtm);
      track("qr_copy_click", { ...utm, store: "ios", version: VERSION });
      setFlash({ open: true, kind: "success", text: "リンクをコピーしました" });
    } catch {
      setFlash({ open: true, kind: "error", text: "コピーに失敗しました" });
    }
  };

  const onCopyAndroidLink = async () => {
    try {
      await navigator.clipboard.writeText(androidUrlWithUtm);
      track("qr_copy_click", { ...utm, store: "android", version: VERSION });
      setFlash({ open: true, kind: "success", text: "リンクをコピーしました" });
    } catch {
      setFlash({ open: true, kind: "error", text: "コピーに失敗しました" });
    }
  };

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const entries: Record<string, string> = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((k) => {
      const v = params.get(k);
      if (v) entries[k] = v;
    });
    setUtm(entries);
  }, []);

  function track(name: string, props: Record<string, string | number | boolean | null> = {}) {
    try {
      (window as typeof window & { plausible?: (name: string, options: { props: Record<string, string | number | boolean | null> }) => void }).plausible?.(
        name,
        { props }
      );
    } catch {}
  }

  const onClickStore = (store: "ios" | "android" | "testflight" | "apk") => {
    track("store_click", { ...utm, store, version: VERSION });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <PageHeaderEN />
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-8">
        <div className="flex items-start gap-4">
          <Image
            src="/kitsura/app_icon.png"
            alt="Kitsura アイコン"
            width={72}
            height={72}
            className="rounded-2xl shadow-sm"
            priority
          />
          <div>
            <Badge>新登場</Badge>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
              語学学習を{" "}
              <span className="underline decoration-amber-400 decoration-4">続けやすくする</span>
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-slate-700">
              その日に勉強した内容を数秒で記録。シンプルなグラフで進捗を確認し、学習計画とストリーク機能でモチベーションを保てます。
            </p>
          </div>
        </div>

        {/* <div className="mt-8 grid gap-3 sm:grid-cols-[auto_auto]">
          {IOS_APP_URL && isMobile !== null && (isMobile ? (
            <a
              href={iosUrlWithUtm}
              onClick={() => onClickStore("ios")}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-sm hover:opacity-90"
            >
              <StoreIcon /> App Store でダウンロード
            </a>
          ) : (
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(iosUrlWithUtm)}`}
                alt="iPhone のカメラで QR コードを読み取ってダウンロード"
                width={200}
                height={200}
                className="rounded-lg border border-slate-200"
                onLoad={() => track("qr_shown", { ...utm, store: "ios", version: VERSION })}
              />
              <div className="min-w-0">
                <div className="text-sm font-medium text-slate-800">
                  iPhone のカメラで QR コードを読み取ってダウンロード
                </div>
                <div className="mt-1 text-xs text-slate-600 break-all">{iosUrlWithUtm}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={onCopyIosLink}
                    className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs shadow-sm hover:border-slate-400"
                  >
                    リンクをコピー
                  </button>
                  <a
                    href={iosUrlWithUtm}
                    onClick={() => track("ios_fallback_click", { ...utm, version: VERSION })}
                    className="rounded-xl bg-slate-900 px-3 py-2 text-xs text-white shadow-sm hover:opacity-90"
                  >
                    App Store を開く（PC）
                  </a>
                </div>
              </div>
            </div>
          ))}

          {ANDROID_PLAY_URL && isMobile !== null ? (
            isMobile ? (
              <a
                href={androidUrlWithUtm}
                onClick={() => onClickStore("android")}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 shadow-sm hover:border-slate-400"
              >
                <AndroidIcon /> Google Play で入手
              </a>
            ) : (
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(androidUrlWithUtm)}`}
                  alt="Android 端末で QR コードを読み取って Google Play を開く"
                  width={200}
                  height={200}
                  className="rounded-lg border border-slate-200"
                  onLoad={() => track("qr_shown", { ...utm, store: "android", version: VERSION })}
                />
                <div className="min-w-0">
                  <div className="text-sm font-medium text-slate-800">
                    Android 端末で QR コードを読み取ってダウンロード
                  </div>
                  <div className="mt-1 text-xs text-slate-600 break-all">{androidUrlWithUtm}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={onCopyAndroidLink}
                      className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs shadow-sm hover:border-slate-400"
                    >
                      リンクをコピー
                    </button>
                    <a
                      href={androidUrlWithUtm}
                      onClick={() => track("android_fallback_click", { ...utm, version: VERSION })}
                      className="rounded-xl bg-slate-900 px-3 py-2 text-xs text-white shadow-sm hover:opacity-90"
                    >
                      Google Play を開く（PC）
                    </a>
                  </div>
                </div>
              </div>
            )
          ) : ANDROID_APK_URL ? (
            <a
              href={ANDROID_APK_URL}
              onClick={() => onClickStore("apk")}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 shadow-sm hover:border-slate-400"
            >
              <AndroidIcon /> APK をダウンロード
            </a>
          ) : (
            <div className="self-center text-sm text-slate-500">Android 版は近日公開予定です</div>
          )}
        </div> */}

        <div className="mt-3 text-xs text-slate-500">
          リリース初期は、混雑時にダウンロードや初回ログインに時間がかかる場合があります。
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-10">
        <h2 className="text-2xl font-semibold">スクリーンショット</h2>
        <p className="mt-2 text-sm text-slate-700">実際のアプリ画面です。</p>
        <div className="mt-5 grid gap-6 sm:grid-cols-3">
          <Shot src="/kitsura/iphone_1_en.png" alt="毎日の学習記録とストリークの画面" />
          <Shot src="/kitsura/iphone_2_en.png" alt="学習時間の推移を確認できる週間グラフ" />
          <Shot src="/kitsura/iphone_3_en.png" alt="学習計画とアクティビティ詳細の画面" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <Feature title="すぐ書ける学習ログ">
            その日勉強した内容と時間を、数タップで素早く記録できます。学習の邪魔にならない、シンプルな入力体験です。
          </Feature>
          <Feature title="進捗をひと目で把握">
            日別・週別のグラフで、どれくらい勉強できているかがひと目で分かります。学習量の偏りにも気付きやすくなります。
          </Feature>
          <Feature title="ストリークとバランス">
            ストリークで毎日の継続を見える化。4技能のバランスも確認できるので、どのスキルを強化すべきかが分かります。
          </Feature>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">よくある質問</h2>
        <div className="mt-4 grid gap-4">
          <Faq q="アプリは無料で使えますか？">
            現在のバージョンでは、主要な機能を無料でお使いいただけます。今後、一部の追加機能については有料オプションやサブスクリプションを検討しています。
          </Faq>
          <Faq q="データの安全性は大丈夫ですか？">
            プライバシーを大切にしています。サインインはシンプルに保ちつつ、学習データはアプリの機能提供のためだけに利用します。詳しくは{" "}
            <Link href="/privacy" className="underline hover:opacity-80">
              プライバシーポリシー
            </Link>
            をご確認ください。
          </Faq>
          <Faq q="サポートや不具合報告の連絡先はどこですか？">
            サポートや不具合のご連絡は、メール{" "}
            <a className="underline hover:opacity-80" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            が一番スムーズです。
          </Faq>
        </div>
      </section>

      <SiteFooterEN />

      <Flash
        open={flash.open}
        kind={flash.kind}
        text={flash.text}
        onClose={() => setFlash((s) => ({ ...s, open: false }))}
      />
    </main>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900">
      {children}
    </span>
  );
}

function Feature({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-base font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="font-medium">{q}</div>
      <div className="mt-1 text-sm text-slate-700">{children}</div>
    </div>
  );
}

function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <Image src={src} alt={alt} width={800} height={1600} className="w-full h-auto" />
    </div>
  );
}

function StoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="opacity-90">
      <path d="M12 2l4 4H8l4-4zm7 6v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8h14z" fill="currentColor" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="opacity-90">
      <path
        d="M17.6 9.48l1.84-3.2-.88-.48-1.9 3.3a7.47 7.47 0 0 0-7.32 0L6.44 5.8l-.88.48 1.84 3.2A6.98 6.98 0 0 0 5 15h14a6.98 6.98 0 0 0-1.4-5.52zM7 16v3a1 1 0 1 0 2 0v-3H7zm8 0v3a1 1 0 1 0 2 0v-3h-2z"
        fill="currentColor"
      />
    </svg>
  );
}

function Flash({
  open,
  kind,
  text,
  onClose,
}: {
  open: boolean;
  kind: "success" | "error";
  text: string;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (!open) return;
    const id = setTimeout(onClose, 2200);
    return () => clearTimeout(id);
  }, [open, onClose]);

  const bg = kind === "success" ? "bg-emerald-600" : "bg-rose-600";

  return (
    <div
      className={`fixed left-1/2 top-6 z-[60] -translate-x-1/2 transition-all duration-300 ${
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className={`rounded-xl ${bg} text-white px-4 py-2 shadow-lg`}>{text}</div>
    </div>
  );
}
