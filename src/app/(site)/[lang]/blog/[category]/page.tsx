import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  categoryMeta,
  getPostsByCategory,
  type Category,
} from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.flatMap((category) => [
    { lang: "zh", category },
    { lang: "en", category },
  ]);
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ lang?: string; category?: string }>;
}) {
  const resolvedParams = await params;
  const lang =
    resolvedParams?.lang === "en" || resolvedParams?.lang === "zh"
      ? resolvedParams.lang
      : "zh";
  const category = resolvedParams?.category as Category | undefined;

  if (!category || !categories.includes(category)) {
    notFound();
  }

  const meta = categoryMeta[category];
  const posts = await getPostsByCategory(category);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Category
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            {meta.title}
          </h1>
          <p className="mt-2 text-sm text-slate-600">{meta.description}</p>
        </div>
        <div className="text-xs text-slate-500">
          {posts.length} 篇 ·{" "}
          <Link className="font-semibold text-slate-600" href={`/${lang}/blog`}>
            返回博客首页
          </Link>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            目录
          </p>
          <div className="space-y-2 rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${lang}/blog/${category}/${post.slug}`}
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                <p className="font-semibold text-slate-900">{post.title}</p>
                <span className="text-xs text-slate-400">{post.date}</span>
              </Link>
            ))}
          </div>
        </aside>

        <section className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${lang}/blog/${category}/${post.slug}`}
              className="block rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-[0_16px_40px_-35px_rgba(37,99,235,0.4)] transition hover:-translate-y-0.5 hover:border-blue-200/70"
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{post.date}</span>
                <span>Product Architecture Notes</span>
              </div>
              <h2 className="mt-3 text-base font-semibold text-slate-900">
                {post.title}
              </h2>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
