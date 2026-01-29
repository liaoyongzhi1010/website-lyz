# Blog Product Knowledge Hub Design

Date: 2026-01-29
Status: Approved

## Context
The blog should look and feel like a product knowledge hub from a product-architect perspective.
Content is Chinese-only. `/en/blog` renders the same Chinese content with a short notice and a
link to the Chinese entry.

## Goals
- Present a product-like landing experience (clear positioning, strong hierarchy).
- Provide a directory-style category navigation (no tags).
- Keep authoring simple and expandable (future posts added without layout changes).
- Ensure `/en/blog` is usable without duplicating content.

## Non-Goals
- Tag filtering, search, or faceted navigation.
- Full bilingual content.
- CMS integration.

## Information Architecture
1. **Hero (Product Positioning)**
   - Title: "产品架构师的知识库" (or similar).
   - One-line positioning: LLM + algorithms + engineering as a system.
   - Primary action: "查看目录" (scrolls to category navigation).
   - Language notice on `/en/blog`, linking to `/zh/blog`.

2. **Category Navigation (Directory)**
   - Three cards, each linking to an in-page anchor.
   - Category list (Chinese UI):
     - 大模型知识 (LLM)
     - 算法知识 (Algorithm)
     - 开发知识 (Development)
   - Optional small metadata per card (count, last updated). If no data, hide metadata.

3. **Category Sections**
   - One section per category, ordered by importance.
   - Post cards only show title, summary, date (optional), and link.
   - No tags.

## Visual Direction
- Product documentation vibe: clean, structured, confident.
- Palette: neutral grays + one strong primary (deep blue/ink green) for headings and accents.
- Background: subtle gradient or soft texture to avoid a flat page.
- Typography: assertive title face + readable body face (match existing system if fixed).
- Motion: gentle stagger on section load and subtle hover elevation on cards.

## Components (Planned)
- `BlogHero`: title, positioning, action, language notice.
- `BlogCategoryNav`: three linked cards, optional metadata.
- `BlogCategorySection`: section title + post list.
- `BlogPostCard`: title, summary, date, link.

## Content Model
Frontmatter fields per post:
- `title` (string, required)
- `date` (YYYY-MM-DD, required)
- `category` (enum, required): `llm` | `algo` | `dev`
- `summary` (string, required)

Category labels:
- `llm` -> `大模型知识`
- `algo` -> `算法知识`
- `dev` -> `开发知识`

## Routing
- Blog index: `/[lang]/blog`
- Detail: `/[lang]/blog/[slug]`
- `/en/blog` and `/en/blog/[slug]` render Chinese content with a notice.

## Data Flow
- `getAllPosts()` loads MDX, validates frontmatter, derives slug.
- Posts sorted by date desc.
- Grouped by `category` for navigation and sections.

## Error Handling
- Invalid frontmatter or category -> build-time error.
- Unknown slug -> 404.
- Empty category -> show zero-state message.

## Verification
- `npm run lint`
- `npm run build`
