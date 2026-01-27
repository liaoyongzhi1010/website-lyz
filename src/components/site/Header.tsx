import Link from "next/link";

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
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link
            href={basePath}
            className="text-base font-semibold tracking-tight"
          >
            Liao Yongzhi
          </Link>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-neutral-500 sm:inline">
            LLM Engineering
          </span>
        </div>
        <nav className="hidden items-center gap-5 text-sm text-neutral-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`${basePath}/${item.key}`}
              className="transition-colors hover:text-neutral-900"
            >
              {lang === "zh" ? item.zh : item.en}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLang}`}
            className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-900"
          >
            {otherLang}
          </Link>
        </div>
      </div>
    </header>
  );
}
