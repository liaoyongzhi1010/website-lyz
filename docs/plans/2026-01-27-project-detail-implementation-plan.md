# Project Detail Template Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a structured, bilingual project detail template with a single data source and `/[lang]/projects/[slug]` routes.

**Architecture:** Data lives in `src/content/projects.ts` with `i18n` fields; list and detail pages read the same data. Static params are generated at build time. No runtime API.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind.

> **TDD Exception Request:** This is UI/data scaffolding; use lint + build for verification.

### Task 1: Add project data source

**Files:**
- Create: `src/content/projects.ts`

**Step 1: Create data file**

Add a typed `projects` array with 3 items, each containing `slug`, `cover`, `role`, `period`, `stack`, `metrics`, `links`, `i18n`, `sections`.

**Step 2: Commit**

```bash
git add src/content/projects.ts
git commit -m "feat: add project data source"
```

**Verify:**

```bash
npm run lint
npm run build
```

---

### Task 2: Add project detail components

**Files:**
- Create: `src/components/projects/ProjectHero.tsx`
- Create: `src/components/projects/ProjectOverview.tsx`
- Create: `src/components/projects/ProjectArchitecture.tsx`
- Create: `src/components/projects/ProjectMetrics.tsx`
- Create: `src/components/projects/ProjectTech.tsx`
- Create: `src/components/projects/ProjectLinks.tsx`

**Step 1: Build components**

Add lightweight components matching the design: hero, overview, architecture, metrics, tech, links.

**Step 2: Commit**

```bash
git add src/components/projects
git commit -m "feat: add project detail components"
```

**Verify:**

```bash
npm run lint
npm run build
```

---

### Task 3: Add project detail route

**Files:**
- Create: `src/app/(site)/[lang]/projects/[slug]/page.tsx`

**Step 1: Generate static params**

Use `projects` data to generate `[slug]` for `zh/en`.

**Step 2: Render detail page**

Load project by slug, pick language content, render components.

**Step 3: Commit**

```bash
git add src/app/(site)/[lang]/projects/[slug]/page.tsx
git commit -m "feat: add project detail page"
```

**Verify:**

```bash
npm run lint
npm run build
```

---

### Task 4: Update project list page to be data-driven

**Files:**
- Modify: `src/app/(site)/[lang]/projects/page.tsx`

**Step 1: Replace hardcoded list**

Read `projects` data and map to cards, link to detail pages.

**Step 2: Commit**

```bash
git add src/app/(site)/[lang]/projects/page.tsx
git commit -m "feat: make projects list data-driven"
```

**Verify:**

```bash
npm run lint
npm run build
```

---

Plan complete and saved to `docs/plans/2026-01-27-project-detail-implementation-plan.md`. Two execution options:

1. Subagent-Driven (this session) — I dispatch fresh subagent per task, review between tasks, fast iteration.
2. Parallel Session (separate) — Open new session with executing-plans for batch execution.

Which approach?
