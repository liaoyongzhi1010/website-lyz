import Hero from "@/components/site/Hero";
import MetricBar from "@/components/site/MetricBar";
import ProjectCard from "@/components/site/ProjectCard";
import TechStack from "@/components/site/TechStack";

const content = {
  zh: {
    sectionProjects: "代表项目",
    sectionStack: "核心技术栈",
    metrics: [
      { label: "吞吐", value: "4.2x", note: "批处理 + KV Cache" },
      { label: "延迟", value: "-38%", note: "推理路径优化" },
      { label: "成本", value: "-42%", note: "量化与资源调度" },
    ],
    stack: [
      "PyTorch",
      "TensorRT-LLM",
      "vLLM",
      "Triton",
      "CUDA",
      "FastAPI",
      "Ray",
      "K8s",
      "Prometheus",
      "Grafana",
    ],
    projects: [
      {
        title: "高并发 LLM Serving 平台",
        summary:
          "构建支持多模型、多租户的推理平台，提供动态批处理、路由与观测能力。",
        stack: ["vLLM", "Ray", "K8s"],
        metrics: ["P99 延迟降低 35%", "单机吞吐提升 3.8x", "成本下降 40%"],
        links: [
          { label: "Repo", href: "#" },
          { label: "Demo", href: "#" },
        ],
      },
      {
        title: "推理优化与量化部署",
        summary:
          "完成 INT8/FP8 量化与 TensorRT-LLM 部署，构建自动化评测与回归流程。",
        stack: ["TensorRT-LLM", "CUDA", "Triton"],
        metrics: ["显存占用下降 45%", "吞吐提升 2.6x", "质量损失 < 1%"],
        links: [
          { label: "Benchmark", href: "#" },
          { label: "Repo", href: "#" },
        ],
      },
      {
        title: "评测与可观测体系",
        summary:
          "搭建离线评测 + 在线监控体系，形成统一指标与报警策略。",
        stack: ["Prometheus", "Grafana", "OpenTelemetry"],
        metrics: ["线上异常发现时间缩短 60%", "指标覆盖 90%+"],
        links: [
          { label: "Dashboard", href: "#" },
          { label: "Report", href: "#" },
        ],
      },
    ],
  },
  en: {
    sectionProjects: "Featured Projects",
    sectionStack: "Core Stack",
    metrics: [
      { label: "Throughput", value: "4.2x", note: "Batching + KV Cache" },
      { label: "Latency", value: "-38%", note: "Inference path tuning" },
      { label: "Cost", value: "-42%", note: "Quantization + scheduling" },
    ],
    stack: [
      "PyTorch",
      "TensorRT-LLM",
      "vLLM",
      "Triton",
      "CUDA",
      "FastAPI",
      "Ray",
      "K8s",
      "Prometheus",
      "Grafana",
    ],
    projects: [
      {
        title: "High-Throughput LLM Serving",
        summary:
          "Built a multi-tenant serving platform with dynamic batching, routing, and observability.",
        stack: ["vLLM", "Ray", "K8s"],
        metrics: ["P99 latency -35%", "Throughput +3.8x", "Cost -40%"],
        links: [
          { label: "Repo", href: "#" },
          { label: "Demo", href: "#" },
        ],
      },
      {
        title: "Inference Optimization & Quantization",
        summary:
          "INT8/FP8 deployment with TensorRT-LLM and automated benchmark pipeline.",
        stack: ["TensorRT-LLM", "CUDA", "Triton"],
        metrics: ["VRAM -45%", "Throughput +2.6x", "Quality loss <1%"],
        links: [
          { label: "Benchmark", href: "#" },
          { label: "Repo", href: "#" },
        ],
      },
      {
        title: "Evaluation & Observability",
        summary:
          "Unified offline evaluation with online monitoring, alerts, and dashboarding.",
        stack: ["Prometheus", "Grafana", "OpenTelemetry"],
        metrics: ["Incident detection -60%", "90%+ metric coverage"],
        links: [
          { label: "Dashboard", href: "#" },
          { label: "Report", href: "#" },
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
      <MetricBar metrics={copy.metrics} />
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
