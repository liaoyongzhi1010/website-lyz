const content = {
  zh: {
    title: "关于我",
    summary:
      "专注大模型工程化与推理优化，擅长将研究成果落地为稳定、高效的生产系统。",
    bullets: [
      "LLM Serving 平台架构与性能优化",
      "推理量化、算子优化与成本控制",
      "评测体系与可观测性建设",
    ],
    timeline: [
      { year: "2024", item: "主导多模型 Serving 平台落地" },
      { year: "2023", item: "完成推理优化与量化部署实践" },
      { year: "2022", item: "搭建线上评测与监控体系" },
    ],
  },
  en: {
    title: "About",
    summary:
      "Focused on LLM engineering and inference optimization, turning research into production-grade systems.",
    bullets: [
      "Serving platform architecture and performance tuning",
      "Quantization, kernel optimization, and cost control",
      "Evaluation systems and observability",
    ],
    timeline: [
      { year: "2024", item: "Led multi-model serving platform delivery" },
      { year: "2023", item: "Implemented inference optimization & quantization" },
      { year: "2022", item: "Built evaluation and monitoring pipelines" },
    ],
  },
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  const resolvedParams = await params;
  const lang =
    resolvedParams?.lang === "en" || resolvedParams?.lang === "zh"
      ? resolvedParams.lang
      : "zh";
  const copy = content[lang];

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          {copy.title}
        </h1>
        <p className="text-sm text-slate-600">{copy.summary}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_16px_40px_-35px_rgba(37,99,235,0.45)]">
          <h2 className="text-base font-semibold text-slate-900">
            {lang === "zh" ? "能力重点" : "Focus Areas"}
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-600">
            {copy.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_16px_40px_-35px_rgba(37,99,235,0.45)]">
          <h2 className="text-base font-semibold text-slate-900">
            {lang === "zh" ? "里程碑" : "Milestones"}
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            {copy.timeline.map((row) => (
              <div key={row.year} className="flex items-start gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {row.year}
                </span>
                <span>{row.item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
