import ProjectCard from "@/components/site/ProjectCard";

const projects = {
  zh: [
    {
      title: "高并发 LLM Serving 平台",
      summary:
        "多模型多租户服务、动态批处理、请求路由与全链路观测。",
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
        "INT8/FP8 量化与 TensorRT-LLM 部署，自动化评测与回归。",
      stack: ["TensorRT-LLM", "CUDA", "Triton"],
      metrics: ["显存占用下降 45%", "吞吐提升 2.6x", "质量损失 < 1%"],
      links: [
        { label: "Benchmark", href: "#" },
        { label: "Repo", href: "#" },
      ],
    },
    {
      title: "评测与可观测体系",
      summary: "离线评测 + 在线监控，统一指标与报警策略。",
      stack: ["Prometheus", "Grafana", "OpenTelemetry"],
      metrics: ["异常发现时间缩短 60%", "指标覆盖 90%+"],
      links: [
        { label: "Dashboard", href: "#" },
        { label: "Report", href: "#" },
      ],
    },
  ],
  en: [
    {
      title: "High-Throughput LLM Serving",
      summary:
        "Multi-tenant serving with dynamic batching, routing, and observability.",
      stack: ["vLLM", "Ray", "K8s"],
      metrics: ["P99 latency -35%", "Throughput +3.8x", "Cost -40%"],
      links: [
        { label: "Repo", href: "#" },
        { label: "Demo", href: "#" },
      ],
    },
    {
      title: "Inference Optimization & Quantization",
      summary: "INT8/FP8 deployment with TensorRT-LLM and benchmark pipeline.",
      stack: ["TensorRT-LLM", "CUDA", "Triton"],
      metrics: ["VRAM -45%", "Throughput +2.6x", "Quality loss <1%"],
      links: [
        { label: "Benchmark", href: "#" },
        { label: "Repo", href: "#" },
      ],
    },
    {
      title: "Evaluation & Observability",
      summary: "Unified offline evaluation with online monitoring and alerts.",
      stack: ["Prometheus", "Grafana", "OpenTelemetry"],
      metrics: ["Incident detection -60%", "90%+ metric coverage"],
      links: [
        { label: "Dashboard", href: "#" },
        { label: "Report", href: "#" },
      ],
    },
  ],
};

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  const resolvedParams = await params;
  const lang =
    resolvedParams?.lang === "en" || resolvedParams?.lang === "zh"
      ? resolvedParams.lang
      : "zh";

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-neutral-900">
          {lang === "zh" ? "项目展示" : "Projects"}
        </h1>
        <p className="text-sm text-neutral-600">
          {lang === "zh"
            ? "聚焦推理优化、Serving 架构与评测体系。"
            : "Focused on inference optimization, serving systems, and evaluation."}
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects[lang].map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
