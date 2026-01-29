import Hero from "@/components/site/Hero";
import ProjectCard from "@/components/site/ProjectCard";
import TechStack from "@/components/site/TechStack";

const content = {
  zh: {
    sectionProjects: "代表项目",
    sectionStack: "核心技术栈",
    stack: [
      "PyTorch",
      "Transformers",
      "LoRA",
      "LangChain",
      "FAISS",
      "FastAPI",
      "MCP",
      "Redis",
      "PostgreSQL",
      "Docker",
      "K8s",
    ],
    projects: [
      {
        title: "基于 RAG 的面试官系统",
        summary:
          "面向结构化面试场景的 RAG 系统，支持岗位知识检索与追问评分。",
        stack: ["LangChain", "FAISS", "FastAPI"],
        links: [
          { label: "Demo", href: "#" },
          { label: "Docs", href: "#" },
        ],
      },
      {
        title: "可信计算 Agent 的 VSCode 插件",
        summary:
          "最小权限工具调用与审计链路，保障企业内网环境的可控 Agent 使用。",
        stack: ["VSCode", "Node.js", "OpenTelemetry"],
        links: [
          { label: "Demo", href: "#" },
          { label: "Spec", href: "#" },
        ],
      },
      {
        title: "AI MCP 网关",
        summary:
          "统一工具编排、权限隔离与审计的多 Agent 网关层。",
        stack: ["MCP", "FastAPI", "Redis"],
        links: [
          { label: "Spec", href: "#" },
          { label: "Docs", href: "#" },
        ],
      },
    ],
  },
  en: {
    sectionProjects: "Featured Projects",
    sectionStack: "Core Stack",
    stack: [
      "PyTorch",
      "Transformers",
      "LoRA",
      "LangChain",
      "FAISS",
      "FastAPI",
      "MCP",
      "Redis",
      "PostgreSQL",
      "Docker",
      "K8s",
    ],
    projects: [
      {
        title: "RAG Interviewer System",
        summary:
          "RAG system for structured interviews with role knowledge retrieval and scoring.",
        stack: ["LangChain", "FAISS", "FastAPI"],
        links: [
          { label: "Demo", href: "#" },
          { label: "Docs", href: "#" },
        ],
      },
      {
        title: "Trusted Agent VSCode Extension",
        summary:
          "Least-privilege agent tools with audit trails for enterprise workflows.",
        stack: ["VSCode", "Node.js", "OpenTelemetry"],
        links: [
          { label: "Demo", href: "#" },
          { label: "Spec", href: "#" },
        ],
      },
      {
        title: "AI MCP Gateway",
        summary:
          "Unified orchestration, permission isolation, and audit for multi-agent tools.",
        stack: ["MCP", "FastAPI", "Redis"],
        links: [
          { label: "Spec", href: "#" },
          { label: "Docs", href: "#" },
        ],
      },
    ],
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  const resolvedParams = await params;
  const lang =
    resolvedParams?.lang === "en" || resolvedParams?.lang === "zh"
      ? resolvedParams.lang
      : "zh";
  const copy = content[lang];

  return (
    <div className="flex flex-col gap-10">
      <Hero lang={lang} />
      <section className="fade-up fade-up-delay-2 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            {copy.sectionProjects}
          </h2>
          <a
            href={`/${lang}/projects`}
            className="text-sm font-semibold text-slate-600 transition hover:text-blue-700"
          >
            {lang === "zh" ? "查看全部" : "View all"}
          </a>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {copy.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
      <TechStack title={copy.sectionStack} items={copy.stack} />
    </div>
  );
}
