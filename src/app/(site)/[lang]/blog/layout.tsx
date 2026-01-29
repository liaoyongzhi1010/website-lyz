import type { ReactNode } from "react";
import Link from "next/link";

const catalogPreview = [
  {
    title: "大模型知识",
    description: "推理链路、系统吞吐与成本/性能权衡。",
  },
  {
    title: "算法知识",
    description: "核心算法机制、评测方法与可靠性。",
  },
  {
    title: "开发知识",
    description: "工程落地、工具链与团队协作实践。",
  },
];

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
  const showEnglishNotice = lang === "en";

  return (
    <div className="flex flex-col gap-10">
      <section className="fade-up panel relative overflow-hidden rounded-[32px] p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_0%_-10%,rgba(37,99,235,0.2),transparent_60%),radial-gradient(600px_circle_at_100%_0%,rgba(34,211,238,0.18),transparent_55%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100/80 bg-blue-50/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
              Product Knowledge Hub
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
              2026
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              产品架构师的知识库
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              以产品视角拆解大模型系统、算法机制与工程落地，沉淀可复用的架构方法论。
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#category-nav"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_-24px_rgba(37,99,235,0.85)] transition hover:from-blue-500 hover:to-cyan-400"
              >
                查看目录
              </a>
              <span className="text-xs text-slate-500">
                三大知识域 · 持续更新
              </span>
            </div>
            {showEnglishNotice ? (
              <div className="rounded-2xl border border-amber-200/70 bg-amber-50/80 p-4 text-xs text-amber-900">
                <p className="font-semibold">Notice</p>
                <p className="mt-1 text-amber-800">
                  This blog is written in Chinese.
                  <Link
                    className="ml-1 font-semibold underline decoration-amber-400"
                    href="/zh/blog"
                  >
                    Go to Chinese version
                  </Link>
                </p>
              </div>
            ) : null}
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
      {children}
    </div>
  );
}
