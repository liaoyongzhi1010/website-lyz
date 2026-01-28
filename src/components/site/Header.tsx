import Link from "next/link";
import { Suspense } from "react";
import LanguageSwitch from "@/components/site/LanguageSwitch";

type HeaderProps = {
  lang: "zh" | "en";
};

const navItems = [
  { key: "projects", zh: "项目", en: "Projects" },
  { key: "blog", zh: "博客", en: "Blog" },
  { key: "about", zh: "关于", en: "About" },
  { key: "resume", zh: "简历", en: "Resume" },
  { key: "contact", zh: "联系", en: "Contact" },
];

export default function Header({ lang }: HeaderProps) {
  const basePath = `/${lang}`;
  const otherLang = lang === "zh" ? "en" : "zh";

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto w-full max-w-5xl px-6 pt-6">
        <div className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-5 py-3 shadow-[0_18px_45px_-40px_rgba(37,99,235,0.4)] backdrop-blur">
          <div className="flex items-center gap-4">
            <Link
              href={basePath}
              className="text-base font-semibold tracking-tight text-slate-900"
            >
              Liao Yongzhi
            </Link>
            <span className="hidden rounded-full border border-slate-200/70 bg-slate-50/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 sm:inline">
              LLM Engineering
            </span>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-slate-600 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`${basePath}/${item.key}`}
                className="transition-colors hover:text-blue-700"
              >
                {lang === "zh" ? item.zh : item.en}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Suspense
              fallback={
                <Link
                  href={`/${otherLang}`}
                  className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600 transition hover:border-blue-200/80 hover:text-blue-700"
                >
                  {otherLang}
                </Link>
              }
            >
              <LanguageSwitch currentLang={lang} />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
