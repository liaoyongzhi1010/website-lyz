import Link from "next/link";
import { categories, categoryMeta, getLatestPostsByCategory } from "@/lib/blog";

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
  const latestByCategory = await getLatestPostsByCategory(3);
  const catalogPreview = categories.map((category) => categoryMeta[category]);

  return (
    <div className="flex flex-col gap-12">
      <section className="fade-up panel relative overflow-hidden rounded-[32px] p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_0%_-10%,rgba(37,99,235,0.2),transparent_60%),radial-gradient(600px_circle_at_100%_0%,rgba(34,211,238,0.18),transparent_55%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/80 bg-blue-50/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
              LLM Applied Hub
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
              2026
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              大模型算法/应用知识库
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              聚焦微调、RAG、Agent 与 MCP 工程化落地的实践与方法论。
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#category-nav"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_-24px_rgba(37,99,235,0.85)] transition hover:from-blue-500 hover:to-cyan-400"
              >
                查看目录
              </a>
              <span className="text-xs text-slate-500">三大知识域 · 持续更新</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-[0_20px_50px_-40px_rgba(37,99,235,0.35)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                目录速览
              </p>
              <div className="mt-5 space-y-4">
                {catalogPreview.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
              以大模型算法/应用视角组织内容，快速定位你需要的方向。
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {categories.map((category) => {
            const meta = categoryMeta[category];
            return (
              <Link
                key={category}
                href={`/${lang}/blog/${category}`}
                className="group rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-[0_18px_45px_-40px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:border-blue-200/70 hover:shadow-[0_22px_50px_-40px_rgba(37,99,235,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {meta.title}
                  </h3>
                  <span className="text-xs text-slate-400">#{category}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{meta.description}</p>
                <div className="mt-4 text-xs text-slate-500">查看全部 →</div>
              </Link>
            );
          })}
        </div>
      </section>

      {categories.map((category) => {
        const meta = categoryMeta[category];
        const posts = latestByCategory[category];
        return (
          <section key={category} className="scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  {meta.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600">{meta.description}</p>
              </div>
              <Link
                href={`/${lang}/blog/${category}`}
                className="text-xs font-semibold text-slate-500 hover:text-slate-700"
              >
                查看全部 →
              </Link>
            </div>
            <div className="mt-6 grid gap-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${lang}/blog/${post.category}/${post.slug}`}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-[0_16px_40px_-35px_rgba(37,99,235,0.4)] transition hover:-translate-y-0.5 hover:border-blue-200/70"
                >
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span>LLM Applied Notes</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
