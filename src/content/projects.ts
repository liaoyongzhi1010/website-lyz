export type ProjectI18n = {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
};

export type ProjectMetric = {
  label: string;
  value: string;
  note?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectSection = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  cover: string;
  role: string;
  period: string;
  stack: string[];
  metrics: {
    zh: ProjectMetric[];
    en: ProjectMetric[];
  };
  links: ProjectLink[];
  i18n: {
    zh: ProjectI18n;
    en: ProjectI18n;
  };
  sections: {
    zh: ProjectSection[];
    en: ProjectSection[];
  };
};

export const projects: Project[] = [
  {
    slug: "llm-serving-platform",
    cover: "/assets/projects/llm-serving-platform/cover.png",
    role: "Tech Lead / Backend",
    period: "2024 - 2025",
    stack: ["vLLM", "Ray", "K8s", "FastAPI", "Prometheus"],
    metrics: {
      zh: [
        { label: "P99 延迟", value: "-35%" },
        { label: "吞吐提升", value: "3.8x" },
        { label: "成本下降", value: "40%" },
      ],
      en: [
        { label: "P99 Latency", value: "-35%" },
        { label: "Throughput", value: "3.8x" },
        { label: "Cost", value: "-40%" },
      ],
    },
    links: [
      { label: "Repo", href: "#" },
      { label: "Demo", href: "#" },
      { label: "Benchmark", href: "#" },
    ],
    i18n: {
      zh: {
        title: "高并发 LLM Serving 平台",
        summary:
          "面向多模型、多租户的推理平台，支持动态批处理、路由与全链路可观测。",
        problem:
          "生产环境存在高并发推理需求，但延迟、成本与稳定性难以兼顾，缺少统一的路由与监控能力。",
        solution:
          "构建多层服务架构，引入动态批处理与智能路由，配套可观测体系与自动回滚。",
        impact: [
          "P99 延迟降低 35%，峰值吞吐提升 3.8x。",
          "GPU 成本下降 40%，服务稳定性显著提高。",
        ],
      },
      en: {
        title: "High-Throughput LLM Serving Platform",
        summary:
          "A multi-model, multi-tenant serving platform with dynamic batching, routing, and observability.",
        problem:
          "Production traffic required low latency and high throughput, but cost and stability were hard to balance.",
        solution:
          "Designed a layered serving stack with dynamic batching, intelligent routing, and end-to-end observability.",
        impact: [
          "P99 latency -35% and peak throughput +3.8x.",
          "GPU cost -40% with improved stability.",
        ],
      },
    },
    sections: {
      zh: [
        {
          title: "架构",
          body: "采用接入层 + 路由层 + 推理层的三层结构，支持多模型调度与灰度发布。",
        },
        {
          title: "关键技术",
          body: "动态批处理、KV Cache 管理、冷热模型路由、SLO 驱动的扩缩容。",
        },
      ],
      en: [
        {
          title: "Architecture",
          body: "Three-layer design: ingress, routing, and inference, supporting multi-model scheduling and canary releases.",
        },
        {
          title: "Key Techniques",
          body: "Dynamic batching, KV cache management, hot/cold routing, SLO-driven autoscaling.",
        },
      ],
    },
  },
  {
    slug: "inference-quantization",
    cover: "/assets/projects/inference-quantization/cover.png",
    role: "ML Engineer",
    period: "2023 - 2024",
    stack: ["TensorRT-LLM", "CUDA", "Triton", "PyTorch"],
    metrics: {
      zh: [
        { label: "显存占用", value: "-45%" },
        { label: "吞吐提升", value: "2.6x" },
        { label: "质量损失", value: "<1%" },
      ],
      en: [
        { label: "VRAM", value: "-45%" },
        { label: "Throughput", value: "2.6x" },
        { label: "Quality Loss", value: "<1%" },
      ],
    },
    links: [
      { label: "Repo", href: "#" },
      { label: "Report", href: "#" },
    ],
    i18n: {
      zh: {
        title: "推理优化与量化部署",
        summary: "完成 INT8/FP8 量化与 TensorRT-LLM 部署流程，建立自动评测。",
        problem: "大模型推理成本高，显存受限，在线吞吐不足。",
        solution: "使用量化与算子优化结合，构建自动化评测与回归验证。",
        impact: [
          "显存占用降低 45%，吞吐提升 2.6x。",
          "线上质量损失控制在 1% 以内。",
        ],
      },
      en: {
        title: "Inference Optimization & Quantization",
        summary:
          "Implemented INT8/FP8 quantization with TensorRT-LLM and automated evaluation pipelines.",
        problem:
          "LLM inference cost was high, memory footprint large, and throughput insufficient.",
        solution:
          "Applied quantization with kernel optimizations and built automated evaluation for regressions.",
        impact: [
          "VRAM usage -45% and throughput +2.6x.",
          "Quality loss kept under 1%.",
        ],
      },
    },
    sections: {
      zh: [
        {
          title: "流程",
          body: "量化策略选择 -> TensorRT-LLM 构建 -> 自动评测 -> 线上灰度。",
        },
        {
          title: "关键技术",
          body: "INT8/FP8 量化、算子融合、离线-在线一致性校验。",
        },
      ],
      en: [
        {
          title: "Pipeline",
          body: "Quantization strategy -> TensorRT-LLM build -> automated eval -> staged rollout.",
        },
        {
          title: "Key Techniques",
          body: "INT8/FP8 quantization, kernel fusion, offline-online consistency checks.",
        },
      ],
    },
  },
  {
    slug: "evaluation-observability",
    cover: "/assets/projects/evaluation-observability/cover.png",
    role: "Backend Engineer",
    period: "2022 - 2023",
    stack: ["Prometheus", "Grafana", "OpenTelemetry", "Kafka"],
    metrics: {
      zh: [
        { label: "异常发现", value: "-60%" },
        { label: "指标覆盖", value: "90%+" },
      ],
      en: [
        { label: "Incident Detection", value: "-60%" },
        { label: "Metric Coverage", value: "90%+" },
      ],
    },
    links: [
      { label: "Dashboard", href: "#" },
      { label: "Report", href: "#" },
    ],
    i18n: {
      zh: {
        title: "评测与可观测体系",
        summary: "建立离线评测与线上监控体系，形成统一指标口径。",
        problem: "质量回归难以及时发现，缺少统一监控与报警。",
        solution: "构建评测基线与线上观测指标，结合报警与复盘机制。",
        impact: ["异常发现时间缩短 60%。", "指标覆盖超过 90%。"],
      },
      en: {
        title: "Evaluation & Observability System",
        summary:
          "Built offline evaluation and online monitoring with unified metric definitions.",
        problem:
          "Quality regressions were hard to detect, and monitoring was fragmented.",
        solution:
          "Established evaluation baselines, online metrics, alerts, and review workflows.",
        impact: [
          "Incident detection time reduced by 60%.",
          "Metric coverage exceeded 90%.",
        ],
      },
    },
    sections: {
      zh: [
        {
          title: "体系",
          body: "离线评测 + 在线指标 + 报警 + 复盘闭环。",
        },
        {
          title: "关键技术",
          body: "统一指标口径、Trace 采样、异常检测与自动告警。",
        },
      ],
      en: [
        {
          title: "System",
          body: "Offline evaluation + online metrics + alerts + postmortem loop.",
        },
        {
          title: "Key Techniques",
          body: "Unified metrics, trace sampling, anomaly detection, and automated alerts.",
        },
      ],
    },
  },
];
