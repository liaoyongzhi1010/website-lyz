# LLM Content Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refresh all site content (hero, projects, blog) to align with LLM algorithm/applied engineer roles while keeping the existing layout and styling unchanged.

**Architecture:** Content-only changes. Update hero copy, replace project data (remove metrics entirely), and overwrite blog MDX posts with new titles/content. Keep routing and components intact; only remove the metrics component usage and data types.

**Tech Stack:** Next.js App Router, React, TypeScript, MDX, Tailwind CSS.

**Testing Note:** Request TDD exception (content-only changes). Verify with `npm run lint` and `npm run build`.

### Task 1: Update homepage hero copy (ZH + EN)

**Files:**
- Modify: `src/components/site/Hero.tsx`

**Step 1: Replace headline + subhead**

```ts
const content = {
  zh: {
    headline: "大模型算法/应用工程师",
    subhead:
      "专注微调、RAG、Agent 与 MCP 工程化落地，打造可靠可控的智能系统。",
    ctaPrimary: "查看项目",
    ctaSecondary: "联系我",
  },
  en: {
    headline: "LLM Algorithm & Applied Engineer",
    subhead:
      "Focused on finetuning, RAG systems, agent reliability, and MCP integration in production.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact",
  },
};
```

**Step 2: Commit**

```bash
git add src/components/site/Hero.tsx
git commit -m "feat: refresh hero copy for LLM roles"
```

### Task 2: Replace projects and remove metrics module

**Files:**
- Modify: `src/content/projects.ts`
- Modify: `src/app/(site)/[lang]/projects/[slug]/page.tsx`
- Delete: `src/components/projects/ProjectMetrics.tsx`

**Step 1: Remove metrics types and data**

In `src/content/projects.ts`:
- Delete `ProjectMetric` type and `metrics` field from `Project`.
- Remove `metrics` blocks from all projects.
- Replace project list with four new projects (RAG 面试官系统、可信计算 Agent VSCode 插件、密码大模型微调、AI MCP 网关).

**Step 2: Remove ProjectMetrics usage**

In `src/app/(site)/[lang]/projects/[slug]/page.tsx`:
- Remove `ProjectMetrics` import and the `<ProjectMetrics ... />` block.

**Step 3: Delete unused component**

Remove `src/components/projects/ProjectMetrics.tsx`.

**Step 4: Commit**

```bash
git add src/content/projects.ts src/app/(site)/[lang]/projects/[slug]/page.tsx src/components/projects/ProjectMetrics.tsx
git commit -m "feat: refresh projects and drop metrics section"
```

### Task 3: Update blog hero + category copy

**Files:**
- Modify: `src/app/(site)/[lang]/blog/page.tsx`
- Modify: `src/lib/blog.ts`

**Step 1: Update blog hero copy**

Replace title/subhead to align with LLM algorithm/applied engineer positioning. Example:

```tsx
<h1 className="text-3xl ...">大模型算法/应用知识库</h1>
<p className="...">
  聚焦微调、RAG、Agent 与 MCP 工程化落地的实践与方法论。
</p>
```

Optionally change the card label text (e.g. "LLM Applied Notes").

**Step 2: Update category descriptions**

In `src/lib/blog.ts`, update `categoryMeta` descriptions to match:
- llm: 微调 / RAG / Agent
- algo: 评测 / 对齐 / 可靠性
- dev: MCP / 插件 / 工程化落地

**Step 3: Commit**

```bash
git add src/app/(site)/[lang]/blog/page.tsx src/lib/blog.ts
git commit -m "feat: refresh blog hero and category copy"
```

### Task 4: Replace blog MDX posts (9 total)

**Files:**
- Replace all MDX under `src/content/blog/llm`
- Replace all MDX under `src/content/blog/algo`
- Replace all MDX under `src/content/blog/dev`

**Step 1: Delete existing MDX files**

Remove previous placeholder posts.

**Step 2: Add new MDX posts**

Create 3 per category with `title` + `date` only. Example file names:
- `llm/finetune-recipe.mdx`
- `llm/rag-retrieval-routing.mdx`
- `llm/agent-reliability.mdx`
- `algo/rag-eval-framework.mdx`
- `algo/prompt-structured-thinking.mdx`
- `algo/alignment-guardrails.mdx`
- `dev/mcp-gateway.mdx`
- `dev/vscode-agent-plugin.mdx`
- `dev/vector-index-refresh.mdx`

Each file should include brief sections (背景/要点/清单).

**Step 3: Commit**

```bash
git add src/content/blog
git commit -m "feat: replace blog posts for LLM focus"
```

### Task 5: Verification

**Step 1: Lint**

Run: `npm run lint`  
Expected: no lint errors.

**Step 2: Build**

Run: `npm run build`  
Expected: build succeeds.
