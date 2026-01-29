import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export const categories = ["llm", "algo", "dev"] as const;
export type Category = (typeof categories)[number];

export const categoryMeta: Record<
  Category,
  { title: string; description: string }
> = {
  llm: {
    title: "大模型知识",
    description: "微调、RAG 与 Agent 体系的系统化实践。",
  },
  algo: {
    title: "算法知识",
    description: "评测、对齐与可靠性的工程化方法论。",
  },
  dev: {
    title: "开发知识",
    description: "MCP、插件与工程化落地实践。",
  },
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: Category;
};

const BLOG_ROOT = path.join(process.cwd(), "src", "content", "blog");

const isValidDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value);

const sortByDateDesc = (posts: BlogPost[]) =>
  [...posts].sort((a, b) => (a.date > b.date ? -1 : 1));

export async function getPostsByCategory(
  category: Category
): Promise<BlogPost[]> {
  const categoryDir = path.join(BLOG_ROOT, category);
  const entries = await fs.readdir(categoryDir, { withFileTypes: true });
  const mdxFiles = entries.filter(
    (entry) => entry.isFile() && entry.name.endsWith(".mdx")
  );

  const posts = await Promise.all(
    mdxFiles.map(async (entry) => {
      const slug = entry.name.replace(/\.mdx$/, "");
      const source = await fs.readFile(path.join(categoryDir, entry.name), "utf8");
      const { data } = matter(source);
      const title = String(data.title ?? "");
      const date = String(data.date ?? "");

      if (!title || !date || !isValidDate(date)) {
        throw new Error(`Invalid frontmatter in ${category}/${entry.name}`);
      }

      return { slug, title, date, category };
    })
  );

  return sortByDateDesc(posts);
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await Promise.all(
    categories.map((category) => getPostsByCategory(category))
  );
  return posts.flat();
}

export async function getLatestPostsByCategory(
  limit = 3
): Promise<Record<Category, BlogPost[]>> {
  const results = await Promise.all(
    categories.map((category) => getPostsByCategory(category))
  );
  return categories.reduce((acc, category, index) => {
    acc[category] = results[index].slice(0, limit);
    return acc;
  }, {} as Record<Category, BlogPost[]>);
}

export async function getPostBySlug(category: Category, slug: string) {
  const filePath = path.join(BLOG_ROOT, category, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);
  const title = String(data.title ?? "");
  const date = String(data.date ?? "");

  if (!title || !date || !isValidDate(date)) {
    throw new Error(`Invalid frontmatter in ${category}/${slug}.mdx`);
  }

  return { meta: { slug, title, date, category }, content };
}
