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

  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          LLM Engineering
          <span className="h-1 w-1 rounded-full bg-emerald-500" />
          2026
        </div>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
          {copy.headline}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-neutral-600">
          {copy.subhead}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`/${lang}/projects`}
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            {copy.ctaPrimary}
          </a>
          <a
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400"
          >
            {copy.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
