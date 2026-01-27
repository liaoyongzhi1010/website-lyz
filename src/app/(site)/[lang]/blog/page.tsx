const posts = {
  zh: [
    {
      title: "LLM 推理延迟优化：KV Cache 与批处理策略",
      summary: "从算子融合、缓存复用到批处理调度的工程实践。",
      tags: ["推理优化", "性能"],
    },
    {
      title: "多卡并行推理的实践与踩坑",
      summary: "张量并行与流水并行的工程取舍与问题定位。",
      tags: ["并行", "Serving"],
    },
    {
      title: "评测体系：离线指标 + 在线观察",
      summary: "如何建立稳定的回归与线上质量监控。",
      tags: ["评测", "可观测"],
    },
  ],
  en: [
    {
      title: "Inference Latency Optimization: KV Cache & Batching",
      summary: "Operator fusion, cache reuse, and batching strategies in practice.",
      tags: ["Performance", "Inference"],
    },
    {
      title: "Parallel Inference on Multi-GPU: Lessons Learned",
      summary: "Trade-offs across tensor and pipeline parallelism in production.",
      tags: ["Parallelism", "Serving"],
    },
    {
      title: "Evaluation System: Offline Metrics + Online Monitoring",
      summary: "Building reliable regression checks and online quality alerts.",
      tags: ["Evaluation", "Observability"],
    },
  ],
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  const resolvedParams = await params;
  const lang =
    resolvedParams?.lang === "en" || resolvedParams?.lang === "zh"
      ? resolvedParams.lang
      : "zh";

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-neutral-900">
          {lang === "zh" ? "博客" : "Blog"}
        </h1>
        <p className="text-sm text-neutral-600">
          {lang === "zh"
            ? "记录工程实践、系统优化与评测方法。"
            : "Notes on engineering practices, system optimization, and evaluation."}
        </p>
      </div>
      <div className="grid gap-4">
        {posts[lang].map((post) => (
          <article
            key={post.title}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <h2 className="text-base font-semibold text-neutral-900">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-600">{post.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
