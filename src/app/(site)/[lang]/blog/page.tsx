const categories = [
  {
    id: "llm",
    title: "大模型知识",
    description: "推理链路、系统吞吐与成本/性能权衡。",
    posts: [
      {
        title: "LLM 推理延迟优化：KV Cache 与批处理策略",
        summary: "从算子融合、缓存复用到批处理调度的工程实践。",
        date: "2026-01-16",
      },
      {
        title: "多卡并行推理的实践与踩坑",
        summary: "张量并行与流水并行的工程取舍与问题定位。",
        date: "2026-01-08",
      },
    ],
  },
  {
    id: "algo",
    title: "算法知识",
    description: "核心算法机制、评测方法与可靠性。",
    posts: [
      {
        title: "评测体系：离线指标 + 在线观察",
        summary: "如何建立稳定的回归与线上质量监控。",
        date: "2025-12-22",
      },
    ],
  },
  {
    id: "dev",
    title: "开发知识",
    description: "工程落地、工具链与团队协作实践。",
    posts: [
      {
        title: "线上服务的可观测性设计清单",
        summary: "从日志、指标到链路追踪的全链路设计方法。",
        date: "2025-12-10",
      },
    ],
  },
];

const getLatestDate = (dates: string[]) =>
  dates.reduce((latest, current) => (current > latest ? current : latest), "");

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-12">
      <section id="category-nav" className="fade-up scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Directory
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              知识目录
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              以产品架构的视角组织内容，快速定位你想要的知识域。
            </p>
          </div>
          <span className="text-xs text-slate-500">
            共 {categories.reduce((sum, item) => sum + item.posts.length, 0)} 篇
          </span>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {categories.map((category) => {
            const latest = getLatestDate(category.posts.map((post) => post.date));
            return (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="group rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-[0_18px_45px_-40px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:border-blue-200/70 hover:shadow-[0_22px_50px_-40px_rgba(37,99,235,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-400">#{category.id}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{category.posts.length} 篇</span>
                  <span>更新 {latest || "-"}</span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {categories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-24 ${index === 0 ? "fade-up" : ""}`}
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                {category.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {category.description}
              </p>
            </div>
            <span className="text-xs text-slate-500">
              {category.posts.length} 篇内容
            </span>
          </div>
          <div className="mt-6 grid gap-4">
            {category.posts.map((post) => (
              <article
                key={post.title}
                className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-[0_16px_40px_-35px_rgba(37,99,235,0.4)] transition hover:-translate-y-0.5 hover:border-blue-200/70"
              >
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span>Product Architecture Notes</span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{post.summary}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
