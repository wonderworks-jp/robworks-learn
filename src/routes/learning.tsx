import { createFileRoute } from "@tanstack/react-router";
import iconR from "@/assets/robworks-icon.png";
import heroVideoThumb from "@/assets/robworks-hero-video.jpg";
import video01Thumb from "@/assets/robworks-video-01.jpg";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckSquare,
  ExternalLink,
  FileText,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/learning")({
  head: () => ({
    meta: [
      { title: "学習コンテンツ｜RobWorks" },
      {
        name: "description",
        content:
          "RobWorksが公開するRoblox学習動画、教材、保護者向け資料、安全性に関する公式情報をまとめた学習コンテンツページです。",
      },
      { property: "og:title", content: "学習コンテンツ｜RobWorks" },
      {
        property: "og:description",
        content:
          "Robloxで「遊ぶ」から「つくる」へ。RobWorksの動画教材、ワークショップ資料、保護者向け情報をまとめて確認できます。",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LearningPage,
});

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// ---------- Data ----------

type Video = {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  thumbnail?: string;
};

const videos: Video[] = [
  { id: "v01", title: "ロブロックスでゲームをつくろう", category: "入門", description: "ROBLOX STUDIOって何だろう？普段、ロブロックスで遊びはするけど、ゲームを自分で作った事のある人は少ないんじゃないかな？実は、普段遊んでいるゲームも、誰かが作ったゲームなんだ。キミも自分だけのゲームを作ってみたいでしょ？そんな人にお勧めの動画だよ！", url: "#", thumbnail: video01Thumb },
  { id: "v02", title: "アカウント登録と基本設定", category: "入門", description: "はじめてのアカウント作成と、安全に始めるための基本設定を確認します。", url: "#" },
  { id: "v03", title: "Robloxの画面の見方", category: "入門", description: "ホーム、検索、フレンド、設定など、画面の構成をやさしく解説します。", url: "#" },
  { id: "v04", title: "Roblox Studioのインストール", category: "Studio", description: "制作の入口となるRoblox Studioのインストール手順を紹介します。", url: "#" },
  { id: "v05", title: "Roblox Studioの基本操作", category: "Studio", description: "視点の動かし方や基本的なツールの使い方を確認します。", url: "#" },
  { id: "v06", title: "パーツを置いてみよう", category: "Studio", description: "最初の一歩として、パーツの配置と編集を体験します。", url: "#" },
  { id: "v07", title: "はじめての作品づくり", category: "制作", description: "シンプルな作品を通じて、制作の流れ全体をつかみます。", url: "#" },
  { id: "v08", title: "作品を公開する方法", category: "制作", description: "つくった作品を公開し、家族や友だちに見せる手順を紹介します。", url: "#" },
  { id: "v09", title: "保護者向け設定の基本", category: "保護者", description: "保護者の方が確認しておきたい基本的な設定をまとめます。", url: "#" },
  { id: "v10", title: "オンラインで安全に楽しむために", category: "安全性", description: "オンラインでの基本的なマナーと、注意したいポイントを学びます。", url: "#" },
  { id: "v11", title: "Civility：気持ちよく参加するために", category: "安全性", description: "他のプレイヤーと気持ちよく関わるための考え方を紹介します。", url: "#" },
  { id: "v12", title: "次のステップ：ワークショップとコンテスト", category: "次の一歩", description: "学びをさらに深めるための、ワークショップとコンテスト情報です。", url: "#" },
];

const steps = [
  { n: "01", title: "Robloxを知る", body: "Robloxの基本的な考え方や、アカウント作成、画面の見方を学びます。" },
  { n: "02", title: "Roblox Studioに触れる", body: "インストール方法や基本操作を確認し、制作の入口に立ちます。" },
  { n: "03", title: "小さな作品をつくる", body: "シンプルな制作体験を通じて、自分のアイデアを形にします。" },
  { n: "04", title: "安全に参加する", body: "ペアレンタルコントロール、年齢設定、オンラインでのマナーを学びます。" },
  { n: "05", title: "発表と挑戦へ進む", body: "作品を発表し、ワークショップ、コンテスト、Road to RCSへつなげます。" },
];

type Material = {
  title: string;
  description: string;
  buttonLabel: string;
  href?: string;
  comingSoon?: boolean;
  icon: typeof FileText;
};

const materials: Material[] = [
  { title: "ワークショップ資料", description: "当日使用したスライドや制作手順を確認できます。", buttonLabel: "PDFを見る", href: "#", icon: FileText },
  { title: "保護者向け資料", description: "Robloxの安全な利用や、家庭でのサポート方法をまとめた資料です。", buttonLabel: "資料を見る", href: "#", icon: BookOpen },
  { title: "復習用チェックリスト", description: "ワークショップ後に、自宅で確認したいポイントを整理します。", buttonLabel: "準備中", comingSoon: true, icon: CheckSquare },
];

const parentLinks = [
  { title: "安全性について", description: "Robloxの安全性に関する基本的な考え方や取り組みを確認できます。", url: "https://about.roblox.com/ja/%E5%AE%89%E5%85%A8%E6%80%A7" },
  { title: "Civility & Well-being", description: "Roblox上での前向きなコミュニケーションやウェルビーイングに関する情報です。", url: "https://about.roblox.com/ja/ja-civility-and-well-being" },
  { title: "ペアレンタルコントロール", description: "保護者が利用できる管理機能や設定について確認できます。", url: "https://about.roblox.com/ja/parental-controls" },
  { title: "年齢に応じた安全性", description: "年齢に合わせた安全性への考え方や設定を確認できます。", url: "https://about.roblox.com/ja/safety-by-age" },
  { title: "年齢推奨", description: "Roblox上の体験に関する年齢推奨の仕組みについて確認できます。", url: "https://about.roblox.com/ja/%E5%B9%B4%E9%BD%A2%E6%8E%A8%E5%AE%9A" },
  { title: "安全性ツール", description: "ユーザーを守るための安全性ツールや機能について確認できます。", url: "https://about.roblox.com/ja/ja-safety-tools" },
];

const recommendations = [
  { icon: ShieldCheck, label: "Robloxを安全に始めたい保護者の方" },
  { icon: Users, label: "ワークショップ後に復習したい参加者" },
  { icon: PlayCircle, label: "Roblox Studioをこれから学びたい方" },
  { icon: Sparkles, label: "教育現場でRoblox活用を検討している方" },
];

const upcoming = [
  "Roblox Studio基礎チュートリアル",
  "ゲームデザインの考え方",
  "保護者向け安全設定ガイド",
  "コンテスト応募ガイド",
  "作品発表のヒント",
  "Road to RCS関連コンテンツ",
];

// ---------- UI primitives ----------

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{children}</p>
  );
}

function PrimaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
    >
      {children}
      <ArrowRight className="size-4" />
    </a>
  );
}

function SecondaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
    >
      {children}
    </a>
  );
}

// ---------- Page ----------

function LearningPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <Eyebrow>LEARNING CONTENTS</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              学習コンテンツ
            </h1>
            <p className="mt-6 font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              Robloxで「遊ぶ」から、<br />
              「つくる」へ進むために。
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              RobWorksでは、子どもたちがRobloxを通じて創作に取り組めるよう、動画教材、ワークショップ資料、保護者向け情報を順次公開しています。はじめてRobloxに触れる方も、ワークショップ後に復習したい方も、自分のペースで学びを続けることができます。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA href="#youtube">YouTube動画を見る</PrimaryCTA>
              <SecondaryCTA href="#parent-guide">保護者向け情報を見る</SecondaryCTA>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* Learning Path */}
      <section className="bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>LEARNING PATH</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              はじめてでも進めやすい、<br className="hidden sm:block" />学びのステップ。
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              RobWorksのコンテンツは、Robloxに触れるところから、Roblox Studioで作品をつくり、発表するところまでを段階的に学べるように設計しています。
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <li
                key={s.n}
                className="rounded-3xl border border-border bg-card p-6 lg:p-7"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <span className="font-display text-xs font-bold tracking-[0.2em] text-accent">
                  STEP {s.n}
                </span>
                <h3 className="mt-3 font-display text-lg font-extrabold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* YouTube Videos */}
      <section id="youtube">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>YOUTUBE VIDEOS</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              RobWorksの動画教材
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              RobWorksでは、Robloxをはじめて学ぶ方に向けて、動画教材を公開しています。基本操作から安全性、シビリティ、制作の入口まで、短い動画で段階的に学べる構成です。
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <article
                key={v.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-[var(--shadow-elevated)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative aspect-video w-full bg-[var(--surface-soft)]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="size-12 text-muted-foreground/60 transition-colors group-hover:text-accent" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                    {v.category}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-extrabold tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    動画を見る <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Materials */}
      <section className="bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>WORKSHOP MATERIALS</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              ワークショップ教材・配布資料
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              ワークショップで使用した資料や、家庭で復習するための教材、保護者向けのガイドを順次公開していきます。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {materials.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className={`flex flex-col rounded-3xl border border-border p-6 lg:p-8 ${
                    m.comingSoon ? "bg-card/60" : "bg-card"
                  }`}
                  style={{ boxShadow: m.comingSoon ? undefined : "var(--shadow-card)" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                      <Icon className="size-6" strokeWidth={1.75} />
                    </div>
                    {m.comingSoon && (
                      <span className="rounded-full border border-border bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight">
                    {m.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {m.description}
                  </p>
                  {m.comingSoon ? (
                    <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-muted-foreground">
                      {m.buttonLabel}
                    </span>
                  ) : (
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    >
                      {m.buttonLabel} <ArrowRight className="size-4" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parent Guide */}
      <section id="parent-guide">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>PARENT GUIDE</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              保護者の方に確認いただきたい情報
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Robloxでは、安全性、ウェルビーイング、ペアレンタルコントロール、年齢に応じた設定などに関する情報が公開されています。RobWorksでは、保護者の方が必要な情報にアクセスしやすいよう、関連ページへのリンクを整理しています。
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              以下は Roblox Corporation が運営する公式サイト（about.roblox.com）への外部リンクです。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {parentLinks.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-[var(--shadow-elevated)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative flex aspect-[16/9] items-center justify-center bg-[var(--surface-soft)]">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Roblox Official
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-extrabold tracking-tight">
                      {l.title}
                    </h3>
                    <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {l.description}
                  </p>
                  <span className="mt-4 truncate text-xs text-muted-foreground/80">
                    about.roblox.com
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended For */}
      <section className="bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>RECOMMENDED FOR</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              このページは、こんな方におすすめです。
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recommendations.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.label}
                  className="rounded-3xl border border-border bg-card p-6 lg:p-7"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 text-sm font-medium leading-relaxed text-foreground">
                    {r.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Contents */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>COMING SOON</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              今後追加予定のコンテンツ
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              RobWorksでは、動画教材、PDF教材、ワークショップ資料、コンテスト関連コンテンツを順次追加していく予定です。
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-dashed border-border bg-card/60 px-5 py-4"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Sparkles className="size-4" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-28">
          <div
            className="overflow-hidden rounded-3xl border border-border bg-primary px-6 py-16 text-primary-foreground sm:px-12 lg:px-16 lg:py-20"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                動画で学び、ワークショップで体験する。
              </h2>
              <p className="mt-6 text-base leading-relaxed text-primary-foreground/80">
                RobWorksの学習コンテンツは、はじめての一歩を支えるための入口です。実際に手を動かして学びたい方は、ワークショップへの参加もご検討ください。
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to={"/workshops" as any}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
                >
                  ワークショップに参加する <ArrowRight className="size-4" />
                </Link>
                <Link
                  to={"/contact" as any}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ---------- Hero Visual ----------

function HeroVisual() {
  return (
    <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[540px]">
      {/* Soft background panel */}
      <div className="absolute inset-0 rounded-[2rem] bg-[var(--surface-soft)]" />
      <div className="absolute -right-6 top-10 h-40 w-40 rounded-full bg-accent-soft blur-2xl" aria-hidden />

      {/* Brand mark badge */}
      <img
        src={iconR}
        alt="RobWorks"
        className="absolute -top-12 -right-6 z-10 h-32 w-32 object-contain drop-shadow-xl sm:h-40 sm:w-40 lg:h-48 lg:w-48"
      />

      {/* YouTube Learning card */}
      <div
        className="absolute left-4 top-6 w-[78%] rounded-3xl border border-border bg-card p-5 sm:left-8"
        style={{ boxShadow: "var(--shadow-elevated)" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            YouTube Learning
          </span>
          <PlayCircle className="size-5 text-accent" strokeWidth={1.75} />
        </div>
        <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl bg-[var(--surface-soft)]">
          <img
            src={heroVideoThumb}
            alt="第11回 Robloxでの生活② デジタル・シビリティ"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-4 font-display text-sm font-extrabold tracking-tight text-foreground">
          Roblox Studioの基本操作
        </p>
        <p className="mt-1 text-xs text-muted-foreground">入門 / 約6分</p>
      </div>

      {/* Parent Guide card */}
      <div
        className="absolute right-2 top-44 w-[62%] rounded-3xl border border-border bg-card p-5 sm:right-4 sm:top-52"
        style={{ boxShadow: "var(--shadow-elevated)" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            Parent Guide
          </span>
          <ShieldCheck className="size-5 text-accent" strokeWidth={1.75} />
        </div>
        <p className="mt-4 font-display text-sm font-extrabold tracking-tight text-foreground">
          保護者向け安全設定
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          ペアレンタルコントロールと年齢設定をやさしく解説。
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-accent">
          資料を見る <ArrowUpRight className="size-3.5" />
        </div>
      </div>

      {/* Workshop PDF card */}
      <div
        className="absolute bottom-4 left-2 w-[58%] rounded-3xl border border-border bg-card p-5 sm:left-6"
        style={{ boxShadow: "var(--shadow-elevated)" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            Workshop PDF
          </span>
          <FileText className="size-5 text-accent" strokeWidth={1.75} />
        </div>
        <p className="mt-4 font-display text-sm font-extrabold tracking-tight text-foreground">
          ワークショップ復習資料
        </p>
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-[var(--surface-soft)]" />
          <div className="h-1.5 w-4/5 rounded-full bg-[var(--surface-soft)]" />
          <div className="h-1.5 w-2/3 rounded-full bg-[var(--surface-soft)]" />
        </div>
      </div>
    </div>
  );
}
