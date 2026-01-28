import type { ReactNode } from "react";

export default async function BlogLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang?: string }>;
}) {
  const resolvedParams = await params;
  const lang =
    resolvedParams?.lang === "en" || resolvedParams?.lang === "zh"
      ? resolvedParams.lang
      : "zh";

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_45px_-40px_rgba(37,99,235,0.45)]">
        <h1 className="text-2xl font-semibold text-slate-900">
          {lang === "zh" ? "博客" : "Blog"}
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          {lang === "zh"
            ? "记录 LLM 工程化、推理优化与评测体系的实践。"
            : "Notes on LLM engineering, inference optimization, and evaluation."}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
          <span className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1">
            {lang === "zh" ? "推理优化" : "Inference"}
          </span>
          <span className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1">
            {lang === "zh" ? "Serving" : "Serving"}
          </span>
          <span className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1">
            {lang === "zh" ? "评测体系" : "Evaluation"}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}
