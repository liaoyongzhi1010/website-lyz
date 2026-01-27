# Project Detail Template Design

Date: 2026-01-27

## Goals
- Provide a consistent, engineering-focused project detail page.
- Use a single data source with bilingual fields (zh/en).
- Keep pages fully static with build-time validation.

## Information Architecture
- Routes:
  - List: `/[lang]/projects`
  - Detail: `/[lang]/projects/[slug]`
- Detail flow: Problem -> Solution -> Architecture -> Key Tech -> Metrics -> Evidence links.

## Data Model (Single Source with i18n fields)
- File: `src/content/projects.ts`
- Shape:
  - `slug`, `cover`, `role`, `period`, `stack[]`
  - `metrics[]` (label/value/note)
  - `links[]` (label/href)
  - `i18n: { zh: { title, summary, problem, solution, impact }, en: { ... } }`
  - `sections[]` for ordered narrative blocks

## Component Structure
- `ProjectHero`: title, role, tags, period, primary metrics
- `ProjectOverview`: summary + impact bullets
- `ProjectArchitecture`: image + description
- `ProjectTech`: key techniques list
- `ProjectMetrics`: metrics grid
- `ProjectLinks`: repo/demo/benchmark/report

## Data Flow
- Build-time load from `src/content/projects.ts`
- `generateStaticParams` for `[slug]` pages
- No runtime APIs

## Error Handling
- Build-time validation (missing fields or duplicate slug -> fail build)
- 404 for unknown slug

## Assets
- Project images in `public/assets/projects/<slug>/`

## Testing/Verification
- Lint + build
- Basic data validation script (if needed later)
