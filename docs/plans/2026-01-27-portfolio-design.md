# Portfolio Site Design (LLM Backend/Engineering)

Date: 2026-01-27

## Goals
- Let interviewers understand my engineering value in under 5 minutes.
- Highlight 3 flagship projects with clear impact, metrics, and evidence.
- Provide a lightweight blog for engineering write-ups.
- Ship fast with minimal ops; maintain content in-repo.

## Audience
- Recruiters, hiring managers, and technical interviewers for LLM engineering roles.

## Scope
- Multi-page, content-first website.
- Bilingual (zh/en) with separate routes.
- Static export and Nginx hosting on my server.
- Content stored as MDX/Markdown in the repo.

## Non-goals
- No login, comments, dynamic APIs, or real-time data.
- No CMS integration in v1.

## Information Architecture
- Home: positioning, hero, 3 projects, key metrics, tech stack.
- Projects: list + detail pages.
- Blog: list + detail pages, tags/categories.
- About: background, values, contact details.
- Resume: downloadable PDF.
- Contact: email/WeChat/links.
- Language switcher: /zh and /en.

## Content Model (frontmatter)
- title
- summary
- tags
- stack
- metrics (latency/throughput/cost/accuracy)
- repo
- demo
- highlights

## Tech Stack
- Next.js with static export.
- MDX/Markdown for content.
- Nginx for static hosting.
- Optional build-time lint/type checks.

## Data Flow
- Edit MDX/Markdown -> build -> static output -> Nginx serve.
- No runtime data fetching.

## Error Handling
- Build-time validation for frontmatter fields.
- Link checks for repo/demo/asset URLs.
- 404 page and empty-state components for missing content.

## SEO + Performance
- Structured metadata per page.
- Optimized images, preloaded fonts, and minimal JS.
- Lighthouse checks on Home and Project pages.

## Accessibility
- Semantic headings, good contrast, keyboard nav.
- Alt text for visuals.

## Deployment Plan
- Build locally or on CI.
- Upload static output to server.
- Nginx serves over HTTP during testing.
- Switch to HTTPS and domain when ready.

## Testing/Verification
- Lint + type check.
- Build succeeds.
- Link check.
- Lighthouse baseline.

## Milestones
1. Scaffold Next.js + content structure.
2. Implement layouts and templates.
3. Populate 3 projects and initial blog posts.
4. Deploy to server and verify performance.
