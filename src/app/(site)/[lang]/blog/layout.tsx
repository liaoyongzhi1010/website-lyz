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
      <div className="rounded-2xl border border-neutral-200 bg-white p-6">
        <h1 className="text-2xl font-semibold text-neutral-900">
          {lang === "zh" ? "博客" : "Blog"}
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          {lang === "zh"
            ? "记录 LLM 工程化、推理优化与评测体系的实践。"
            : "Notes on LLM engineering, inference optimization, and evaluation."}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">
            {lang === "zh" ? "推理优化" : "Inference"}
          </span>
          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">
            {lang === "zh" ? "Serving" : "Serving"}
          </span>
          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">
            {lang === "zh" ? "评测体系" : "Evaluation"}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}
