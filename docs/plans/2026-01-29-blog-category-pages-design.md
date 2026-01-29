# Blog Category Pages Design

Date: 2026-01-29
Status: Approved

## Context
The blog should scale beyond a few posts per category. The homepage should remain concise,
while category pages provide full listings and a product-like browsing experience.
Content is Chinese-only. `/en/blog/*` should render the same Chinese content with a notice
and a jump link to the `/zh` version.

## Goals
- Homepage shows latest 3 posts per category plus a "view all" link.
- Add category listing pages with left directory + right card list.
- Add real post detail pages (MDX) with title and date.
- Keep authoring light: only `title` and `date` in frontmatter.
- Categorize by folder path (no category field in frontmatter).

## Non-Goals
- Tags, search, filtering, or pagination.
- English content.
- CMS integration.

## Information Architecture
1. **Blog Home** `/[lang]/blog`
   - Product hero + directory overview.
   - Three category sections: 大模型知识 / 算法知识 / 开发知识.
   - Each section shows latest 3 posts and a "查看全部" link.

2. **Category Page** `/[lang]/blog/[category]`
   - Left directory: all posts in the category (title + date),
     each linking to the detail page.
   - Right content: card list of all posts (title + date),
     each linking to the detail page.
   - Top mini-hero with category title, description, and count.

3. **Post Detail** `/[lang]/blog/[category]/[slug]`
   - Title + date + MDX body.
   - Back link to the category page.

## Content Model
Directory structure:
- `src/content/blog/llm/*.mdx`
- `src/content/blog/algo/*.mdx`
- `src/content/blog/dev/*.mdx`

Frontmatter fields:
- `title` (string, required)
- `date` (YYYY-MM-DD, required)

Slug: derived from filename.

Category mapping:
- `llm` -> 大模型知识
- `algo` -> 算法知识
- `dev` -> 开发知识

## Routing
- Home: `/[lang]/blog`
- Category: `/[lang]/blog/[category]`
- Detail: `/[lang]/blog/[category]/[slug]`
- `/en/blog/*` renders Chinese content with a notice and link to `/zh`.

## Components (Planned)
- `BlogCategoryHeader`: category title + description + count + back link.
- `BlogCategorySidebar`: left directory list (links to detail pages).
- `BlogPostList`: right card list (title + date).
- `BlogPostLayout`: detail page wrapper (title + date + content).

## Data Flow
- `getPostsByCategory(category)` reads MDX files under category folder,
  parses frontmatter via `gray-matter`, sorts by date desc.
- `getAllPosts()` used by home page to select latest 3 per category.
- `getPostBySlug(category, slug)` loads a single MDX file.
- `generateStaticParams` for categories and posts.

## Error Handling
- Invalid category -> 404.
- Missing frontmatter or invalid date -> build-time error.
- Unknown slug -> 404.

## Testing / Verification
- `npm run lint`
- `npm run build`
