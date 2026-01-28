type HeroProps = {
  lang: "zh" | "en";
};

const content = {
  zh: {
    headline: "大模型工程化与推理优化工程师",
    subhead:
      "专注 LLM Serving、推理性能优化与成本控制，落地高并发、可观测的模型服务系统。",
    ctaPrimary: "查看项目",
    ctaSecondary: "联系我",
  },
  en: {
    headline: "LLM Engineering & Inference Optimization",
    subhead:
      "Focused on LLM serving, inference performance, and cost efficiency with production-grade systems.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact",
  },
};

export default function Hero({ lang }: HeroProps) {
  const copy = content[lang];
  const portraitSrc = "/lyz.jpg";

  return (
    <section className="fade-up relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/80 p-10 shadow-[0_30px_70px_-50px_rgba(37,99,235,0.6)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_0%_0%,rgba(37,99,235,0.18),transparent_60%),radial-gradient(500px_circle_at_100%_10%,rgba(34,211,238,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-blue-500/70 via-cyan-400/60 to-transparent" />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex flex-1 flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/80 bg-blue-50/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
            LLM Engineering
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
            2026
          </div>
          <div className="relative">
            <span className="absolute -left-4 top-2 hidden h-14 w-1 rounded-full bg-gradient-to-b from-blue-500 to-cyan-400 sm:block" />
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {copy.headline}
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            {copy.subhead}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`/${lang}/projects`}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_-24px_rgba(37,99,235,0.85)] transition hover:from-blue-500 hover:to-cyan-400"
            >
              {copy.ctaPrimary}
            </a>
            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-white/70 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200/70 hover:text-slate-900"
            >
              {copy.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="relative w-full max-w-sm lg:w-[300px]">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-100/80 shadow-[0_20px_50px_-35px_rgba(37,99,235,0.45)]"
            role="img"
            aria-label={lang === "zh" ? "个人照片" : "Portrait"}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${portraitSrc})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/15" />
          </div>
          <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-blue-400/30 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
