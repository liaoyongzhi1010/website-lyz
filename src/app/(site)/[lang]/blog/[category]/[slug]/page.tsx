import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import { categories, getAllPosts, getPostBySlug, type Category } from "@/lib/blog";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.flatMap((post) => [
    { lang: "zh", category: post.category, slug: post.slug },
    { lang: "en", category: post.category, slug: post.slug },
  ]);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang?: string; category?: string; slug?: string }>;
}) {
  const resolvedParams = await params;
  const lang =
    resolvedParams?.lang === "en" || resolvedParams?.lang === "zh"
      ? resolvedParams.lang
      : "zh";
  const category = resolvedParams?.category as Category | undefined;
  const slug = resolvedParams?.slug;

  if (!category || !slug || !categories.includes(category)) {
    notFound();
  }

  let post;
  try {
    post = await getPostBySlug(category, slug);
  } catch {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components: getMDXComponents({}),
  });

  return (
    <article className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            {category.toUpperCase()}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            {post.meta.title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">{post.meta.date}</p>
        </div>
        <Link
          href={`/${lang}/blog/${category}`}
          className="text-xs font-semibold text-slate-600 hover:text-slate-800"
        >
          返回分类页 →
        </Link>
      </div>
      <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_45px_-40px_rgba(37,99,235,0.35)]">
        <div className="text-slate-700">{content}</div>
      </div>
    </article>
  );
}
