# Portfolio Scaffold + MDX Setup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Scaffold a Next.js app with basic MDX support and a content directory structure for a portfolio site.

**Architecture:** Static Next.js (App Router) with MDX pages, local content folders, and no runtime APIs. Blog content initially lives in MDX pages; content folders are prepared for future loaders.

**Tech Stack:** Next.js, TypeScript, Tailwind, MDX (@next/mdx).

> **TDD Exception Request:** Steps here are primarily scaffold/config/content (generated or configuration). Ask the user for explicit approval to skip TDD for these steps.

### Task 1: Generate the Next.js scaffold

**Files:**
- Create: `package.json` (via generator)
- Create: `src/` (via generator)
- Modify: `README.md` (via generator)

**Step 1: Run the scaffold generator**

```bash
npx create-next-app@latest . --ts --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm --skip-git
```

Expected: project files generated in repo root. If the CLI refuses because the directory is not empty, rerun in a temp folder then copy:

```bash
npx create-next-app@latest _tmp_next --ts --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm --skip-git
rsync -a _tmp_next/ .
rm -rf _tmp_next
```

**Step 2: Install deps (if not already)**

```bash
npm install
```

Expected: npm completes without errors.

**Step 3: Verify baseline lint/build**

```bash
npm run lint
npm run build
```

Expected: both commands succeed.

**Step 4: Commit scaffold**

```bash
git add package.json package-lock.json src public next.config.mjs tsconfig.json README.md .eslintrc* .gitignore
git commit -m "feat: scaffold next app"
```

### Task 2: Add MDX support

**Files:**
- Modify: `next.config.mjs`
- Create: `src/mdx-components.tsx`
- Create: `src/app/blog/page.mdx`

**Step 1: Add MDX dependencies**

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

Expected: dependencies added to package.json.

**Step 2: Enable MDX in Next config**

Update `next.config.mjs` to include MDX plugin and `pageExtensions: ['ts','tsx','mdx']`.

**Step 3: Add MDX components**

Create `src/mdx-components.tsx` with basic component mappings (headings, links, code blocks).

**Step 4: Add a sample MDX page**

Create `src/app/blog/page.mdx` with a short placeholder article.

**Step 5: Verify lint/build**

```bash
npm run lint
npm run build
```

Expected: both commands succeed.

**Step 6: Commit MDX setup**

```bash
git add next.config.mjs src/mdx-components.tsx src/app/blog/page.mdx package.json package-lock.json
git commit -m "feat: add mdx support"
```

### Task 3: Prepare content structure

**Files:**
- Create: `src/content/projects/.gitkeep`
- Create: `src/content/blog/.gitkeep`
- Create: `public/assets/projects/.gitkeep`

**Step 1: Create folders**

```bash
mkdir -p src/content/projects src/content/blog public/assets/projects
touch src/content/projects/.gitkeep src/content/blog/.gitkeep public/assets/projects/.gitkeep
```

**Step 2: Commit structure**

```bash
git add src/content public/assets
git commit -m "chore: add content directories"
```

---

Plan complete and saved to `docs/plans/2026-01-27-portfolio-scaffold-plan.md`. Two execution options:

1. Subagent-Driven (this session) — I dispatch a fresh subagent per task, review between tasks.
2. Parallel Session (separate) — Open new session with executing-plans for batch execution.

Which approach?
