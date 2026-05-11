import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--surface-soft)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-display text-2xl font-extrabold tracking-tight text-foreground">
              RobWorks
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Robloxを通じて、子どもたちが「遊ぶ」から「つくる」へ進むための学びの場を提供しています。
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <FooterCol
              title="プログラム"
              links={[
                { label: "RobWorksとは", to: "/about" },
                { label: "ワークショップ", to: "/workshops" },
                { label: "学習コンテンツ", to: "/learning" },
              ]}
            />
            <FooterCol
              title="挑戦"
              links={[
                { label: "ゲームデザインコンテスト", to: "/contest" },
                { label: "Road to RCS", to: "/rcs" },
              ]}
            />
            <FooterCol
              title="その他"
              links={[
                { label: "パートナー", to: "/partners" },
                { label: "お問い合わせ", to: "/contact" },
              ]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RobWorks. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Play. Create. Grow.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div>
      <p className="font-display text-sm font-bold tracking-tight text-foreground">{title}</p>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to as any}
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
