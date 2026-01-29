# LLM Portfolio Content Refresh Design

Date: 2026-01-29
Status: Approved

## Context
The site already has a product-style visual system. The user is applying for LLM algorithm/applied engineer roles and wants content-only updates: hero positioning, project narratives, and blog posts. No layout or style changes.

## Goals
- Reposition the homepage and project narratives toward LLM algorithm + applied engineering.
- Replace existing project content with four new projects.
- Remove all “metrics” from project pages and data (no KPI blocks).
- Replace blog content with new topics (fine-tuning, RAG, agent, MCP), keeping structure intact.
- Update both Chinese and English content (English concise but aligned).

## Non-Goals
- Any layout/visual changes.
- New components, animations, or design system changes.
- Tags, filters, or search on the blog.

## Hero Content
**ZH:** “大模型算法/应用工程师”  
**EN:** “LLM Algorithm & Applied Engineer”

Subhead focuses on: fine-tuning, RAG systems, agent reliability, MCP integration, and production delivery.

## Project Content (4 Projects)
1) 基于 RAG 的面试官系统  
2) 可信计算 Agent 的 VSCode 插件  
3) 密码大模型微调  
4) AI MCP 网关

Each project keeps the existing detail structure (summary/problem/solution/impact/tech sections), but removes metrics entirely. Period and role will be estimated initially and can be edited later.

## Blog Content (Chinese Only)
Keep categories: `llm`, `algo`, `dev`. Homepage shows latest 3 posts per category with “view all”.

Planned post titles:
- **LLM**
  - 指令微调配方：SFT/RLHF 的工程化取舍
  - RAG 召回策略：多路检索与重排实践
  - Agent 可靠性：工具调用失败的容错设计
- **算法**
  - RAG 评测框架：离线集与线上回归
  - Prompt 结构化：复杂任务的分步思维
  - 对齐与安全：高风险场景的护栏设计
- **开发**
  - MCP 网关工程：工具编排与权限隔离
  - VSCode Agent 插件：上下文采集与缓存
  - 向量库实践：索引构建与热更新策略

Frontmatter remains minimal: `title` + `date`. Dates will be set to preserve ordering.

## File-Level Changes (Planned)
- `src/components/site/Hero.tsx`: update zh/en headline + subhead.
- `src/content/projects.ts`: replace project content, remove metrics data.
- `src/app/(site)/[lang]/projects/[slug]/page.tsx`: remove ProjectMetrics usage.
- `src/components/projects/ProjectMetrics.tsx`: remove file or leave unused (prefer removal).
- `src/content/blog/*/*.mdx`: replace with new posts.
- `src/app/(site)/[lang]/blog/page.tsx`: no structural changes; ensure latest 3 per category show new content.

## Verification
- `npm run lint`
- `npm run build`
