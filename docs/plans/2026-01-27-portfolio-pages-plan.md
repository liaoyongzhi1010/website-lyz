# Portfolio Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the main portfolio pages (Home/Projects/Blog/About/Resume/Contact) with a modern, content-first layout and bilingual routing.

**Architecture:** Next.js App Router with static pages and MDX blog. Shared layout components live under `src/components` with `app/(site)` route group for site pages and `app/(site)/[lang]` for zh/en routing.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind, MDX.

> **TDD Exception Approved:** This is mostly UI/content scaffolding. Use lint + build for verification.

### Task 1: Set up route groups and base layout

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `src/app/(site)/layout.tsx`
- Create: `src/components/site/Header.tsx`
- Create: `src/components/site/Footer.tsx`
- Create: `src/components/site/Container.tsx`

**Step 1: Implement shared site layout**

Create `src/app/(site)/layout.tsx` to wrap pages with Header/Footer/Container.

**Step 2: Update root layout**

Update `src/app/layout.tsx` metadata and global body class.

**Step 3: Commit**

```bash
git add src/app/layout.tsx src/app/(site)/layout.tsx src/components/site/Header.tsx src/components/site/Footer.tsx src/components/site/Container.tsx
git commit -m "feat: add site layout and shell"
```

**Verify:**

```bash
npm run lint
npm run build
```

---

### Task 2: Add bilingual routing and home pages

**Files:**
- Create: `src/app/(site)/[lang]/page.tsx`
- Create: `src/app/(site)/[lang]/projects/page.tsx`
- Create: `src/app/(site)/[lang]/blog/page.tsx`
- Create: `src/app/(site)/[lang]/about/page.tsx`
- Create: `src/app/(site)/[lang]/resume/page.tsx`
- Create: `src/app/(site)/[lang]/contact/page.tsx`
- Create: `src/components/site/Hero.tsx`
- Create: `src/components/site/ProjectCard.tsx`
- Create: `src/components/site/MetricBar.tsx`
- Create: `src/components/site/TechStack.tsx`

**Step 1: Add language-aware routes**

Create `/[lang]` pages with basic content placeholders for zh/en.

**Step 2: Build home sections**

Hero + metrics + 3 project cards + tech stack.

**Step 3: Commit**

```bash
git add src/app/(site)/[lang] src/components/site
git commit -m "feat: add bilingual pages and home sections"
```

**Verify:**

```bash
npm run lint
npm run build
```

---

### Task 3: Enhance blog page and MDX integration

**Files:**
- Modify: `src/app/blog/page.mdx`
- Create: `src/app/(site)/[lang]/blog/layout.tsx`

**Step 1: Update blog index page copy**

Align content with LLM engineering topics.

**Step 2: Add blog layout**

Add a simple layout for blog list pages.

**Step 3: Commit**

```bash
git add src/app/blog/page.mdx src/app/(site)/[lang]/blog/layout.tsx
git commit -m "feat: refine blog layout and copy"
```

**Verify:**

```bash
npm run lint
npm run build
```

---

### Task 4: Add Resume download and Contact details

**Files:**
- Create: `public/resume.pdf` (placeholder)
- Modify: `src/app/(site)/[lang]/resume/page.tsx`
- Modify: `src/app/(site)/[lang]/contact/page.tsx`

**Step 1: Add placeholder resume file**

Place a placeholder PDF for now.

**Step 2: Update resume and contact pages**

Link to PDF and add email/WeChat placeholders.

**Step 3: Commit**

```bash
git add public/resume.pdf src/app/(site)/[lang]/resume/page.tsx src/app/(site)/[lang]/contact/page.tsx
git commit -m "feat: add resume download and contact info"
```

**Verify:**

```bash
npm run lint
npm run build
```

---

Plan complete and saved to `docs/plans/2026-01-27-portfolio-pages-plan.md`. Two execution options:

1. Subagent-Driven (this session) — I dispatch fresh subagent per task, review between tasks, fast iteration.
2. Parallel Session (separate) — Open new session with executing-plans for batch execution.

Which approach?
