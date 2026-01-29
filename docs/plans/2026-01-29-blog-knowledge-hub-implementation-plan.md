# Blog Knowledge Hub Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refresh `/[lang]/blog` into a product-style knowledge hub with a hero, directory navigation, and three category sections (LLM / 算法 / 开发), while showing Chinese-only content with an `/en/blog` notice.

**Architecture:** Keep content static inside the blog page component; update the blog layout to render a product-style hero and the English notice. Use existing Tailwind utilities plus the global `panel`/`panel-soft` classes for consistent visual language. No tag chips, no new data layer.

**Tech Stack:** Next.js App Router (React), TypeScript, Tailwind CSS v4.

**Testing Note:** TDD exception approved by user (UI-only change). No new tests added; rely on `npm run lint` and `npm run build` for verification.

### Task 1: Rebuild blog hero layout (product positioning + English notice)

**Files:**
- Modify: `src/app/(site)/[lang]/blog/layout.tsx`

**Step 1: Replace the layout with the product-style hero**

```tsx
import type { ReactNode } from "react";

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
                  <a
                    className="ml-1 font-semibold underline decoration-amber-400"
                    href="/zh/blog"
                  >
                    Go to Chinese version
                  </a>
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
```

**Step 2: Verify lint**

Run: `npm run lint`  
Expected: no lint errors.

**Step 3: Commit**

```bash
git add src/app/(site)/[lang]/blog/layout.tsx
git commit -m "feat: refresh blog hero layout"
```

### Task 2: Add directory navigation + category sections (no tags)

**Files:**
- Modify: `src/app/(site)/[lang]/blog/page.tsx`

**Step 1: Replace the page with category navigation and sections**

```tsx
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
```

**Step 2: Verify build**

Run: `npm run build`  
Expected: build succeeds.

**Step 3: Commit**

```bash
git add src/app/(site)/[lang]/blog/page.tsx
git commit -m "feat: add blog knowledge hub navigation"
```

### Task 3: Final verification (optional but recommended)

Run: `npm test`  
Expected: lint + build both succeed.
