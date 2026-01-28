# Blog Redesign Design (Chinese-Only Content)

Date: 2026-01-28
Status: Approved

## Context
The site supports a bilingual UI (zh/en), but the blog content will be authored in Chinese only. The blog page should present a clear knowledge architecture for a product-architecture audience, with three categories and in-site detail pages (no external redirects).

## Goals
- Provide a structured blog landing page with category navigation and in-page anchors.
- Enable click-through to in-site post detail pages.
- Keep authoring simple: add a new MDX file with frontmatter.
- Ensure `/en/blog` is usable without duplicate content maintenance.

## Non-Goals
- Full bilingual blog content.
- External CMS integration.
- Tag-based search or filtering (out of scope for now).

## Assumptions
- Posts are stored in `src/content/blog/*.mdx`.
- The blog is rendered statically/SSR via Next.js App Router.

## Information Architecture
1. **Hero / Positioning**
   - Short description of the blog focus (LLM, algorithms, development).
   - A language notice banner when visiting `/en/blog` (Chinese-only content) with a quick link to `/zh/blog`.

2. **Category Navigation (TOC)**
   - Three category cards with count and last-updated date.
   - Each card links to an in-page anchor section.

3. **Category Sections**
   - One section per category, showing ordered post lists.
   - Each post card shows title, summary, date, and tags.
   - Clicking a post opens the in-site detail page.

## Content Model
Frontmatter fields per post:
- `title` (string, required)
- `date` (YYYY-MM-DD, required)
- `category` (enum, required): `llm` | `algo` | `dev`
- `summary` (string, required)
- `tags` (string[], optional)

Category labels (Chinese UI):
- `llm` -> `大模型知识`
- `algo` -> `算法知识`
- `dev` -> `开发知识`

Slug: derived from filename (e.g. `kv-cache-batching.mdx` -> `kv-cache-batching`).

## Routing
- Blog index: `/[lang]/blog`
- Post detail: `/[lang]/blog/[slug]`
- `/en/blog` and `/en/blog/[slug]` render the same Chinese content with a language notice banner.

## Components (Proposed)
- `BlogHero`: page title, positioning text, language notice.
- `BlogCategoryNav`: three category cards + counts + last updated.
- `BlogCategorySection`: section title + list of `BlogPostCard`.
- `BlogPostCard`: title, summary, date, tags, link.
- `BlogPostLayout`: detail view wrapper, includes back/prev/next links.

## Data Flow
- `getAllPosts()` reads MDX files, parses frontmatter, derives slug, validates fields.
- Posts sorted by date desc.
- Grouped by `category` for index page and TOC metadata (count, last updated).
- `getPostBySlug(slug)` loads a single post for detail page.

## Error Handling
- Missing required frontmatter or invalid `category` -> build-time error with filename.
- Invalid `date` -> build-time error.
- Unknown slug -> 404.
- Empty category -> show “0 posts” state on the card and section.

## Testing / Verification
- `npm run lint` and `npm run build` to validate MDX parsing and routes.
- Optional unit tests for sorting, grouping, and category mapping (future work).
