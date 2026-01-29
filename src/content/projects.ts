export type ProjectI18n = {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
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
    slug: "rag-interviewer",
    cover: "/assets/projects/llm-serving-platform/cover.png",
    role: "LLM Applied Engineer",
    period: "2024 - 2025",
    stack: ["PyTorch", "LangChain", "FAISS", "FastAPI", "PostgreSQL"],
    links: [{ label: "Demo", href: "#" }],
    i18n: {
      zh: {
        title: "基于 RAG 的面试官系统",
        summary:
          "构建面向结构化面试场景的 RAG 系统，支持岗位知识检索、追问策略与可解释反馈。",
        problem:
          "面试题库更新频繁，泛化能力弱，难以保证答案准确性与追问深度。",
        solution:
          "引入多路检索 + 重排与问题分解链路，结合岗位画像生成结构化提问与评分要点。",
        impact: [
          "面试问题覆盖率显著提升，知识更新成本降低。",
          "评估一致性提升，输出可解释的面试报告。",
        ],
      },
      en: {
        title: "RAG-powered Interviewer System",
        summary:
          "Built a structured interview system with RAG for role-specific retrieval, follow-up reasoning, and explainable feedback.",
        problem:
          "Interview knowledge changes quickly and responses lacked depth and consistency.",
        solution:
          "Designed multi-source retrieval with re-ranking and question decomposition, plus role profiles for scoring rubrics.",
        impact: [
          "Improved question coverage and reduced content maintenance cost.",
          "Delivered consistent evaluations with explainable reports.",
        ],
      },
    },
    sections: {
      zh: [
        {
          title: "架构",
          body: "检索层 + 重排层 + 追问策略层，支持题库与公司知识库的混合召回。",
        },
        {
          title: "关键技术",
          body: "多路检索、向量/关键词混合召回、问题分解与评分要点生成。",
        },
      ],
      en: [
        {
          title: "Architecture",
          body: "Retrieval + re-ranking + follow-up planning, combining question bank and company knowledge base.",
        },
        {
          title: "Key Techniques",
          body: "Hybrid retrieval, multi-source re-ranking, question decomposition, and scoring rubric generation.",
        },
      ],
    },
  },
  {
    slug: "trusted-agent-vscode",
    cover: "/assets/projects/inference-quantization/cover.png",
    role: "LLM Engineer",
    period: "2024",
    stack: ["VSCode API", "Node.js", "OpenAI API", "OpenTelemetry"],
    links: [{ label: "Demo", href: "#" }],
    i18n: {
      zh: {
        title: "可信计算 Agent 的 VSCode 插件",
        summary:
          "面向研发场景的可信 Agent 插件，支持最小权限工具调用与可审计链路。",
        problem:
          "开发工具链中 Agent 权限过大、执行不可追踪，存在安全与合规风险。",
        solution:
          "构建最小权限工具调用与审计日志体系，支持运行前意图确认与风险提示。",
        impact: [
          "显著降低误调用风险，提升可追踪性与可控性。",
          "为企业内网环境提供可落地的 Agent 方案。",
        ],
      },
      en: {
        title: "Trusted Agent VSCode Extension",
        summary:
          "Built a trusted agent extension with least-privilege tools and auditable execution for developer workflows.",
        problem:
          "Agents in dev tools had excessive privileges and low traceability, causing security concerns.",
        solution:
          "Designed permission-scoped tools with audit logging, intent confirmation, and risk prompts.",
        impact: [
          "Reduced mis-execution risk and improved observability.",
          "Enabled enterprise-friendly agent adoption in secure environments.",
        ],
      },
    },
    sections: {
      zh: [
        {
          title: "架构",
          body: "插件侧上下文采集 + MCP 调用层 + 审计与风控模块。",
        },
        {
          title: "关键技术",
          body: "最小权限工具封装、执行审计、可回放的操作记录。",
        },
      ],
      en: [
        {
          title: "Architecture",
          body: "Context capture + MCP invocation layer + audit & risk control modules.",
        },
        {
          title: "Key Techniques",
          body: "Least-privilege tools, execution audit, and replayable action logs.",
        },
      ],
    },
  },
  {
    slug: "crypto-llm-finetune",
    cover: "/assets/projects/evaluation-observability/cover.png",
    role: "LLM Algorithm Engineer",
    period: "2023 - 2024",
    stack: ["PyTorch", "LoRA", "Deepspeed", "Transformers"],
    links: [{ label: "Report", href: "#" }],
    i18n: {
      zh: {
        title: "密码大模型微调",
        summary:
          "构建密码学领域专用语料与指令集，完成高质量微调与评测基线。",
        problem:
          "通用大模型在密码学场景理解薄弱，专业术语与推理错误率高。",
        solution:
          "建立领域语料与指令集，采用 LoRA 进行高效微调，并搭建评测基线。",
        impact: [
          "显著提升密码学任务的准确性与一致性。",
          "形成可复用的领域微调流程与评测标准。",
        ],
      },
      en: {
        title: "Cryptography LLM Finetuning",
        summary:
          "Built domain corpora and instruction sets for cryptography, delivering finetuning and evaluation baselines.",
        problem:
          "General LLMs were weak in cryptography, with high error rates on specialized reasoning.",
        solution:
          "Curated domain data and instructions, applied LoRA finetuning, and built evaluation benchmarks.",
        impact: [
          "Improved accuracy and consistency in crypto tasks.",
          "Established reusable finetuning and evaluation workflows.",
        ],
      },
    },
    sections: {
      zh: [
        {
          title: "流程",
          body: "语料构建 -> 指令设计 -> LoRA 微调 -> 评测回归。",
        },
        {
          title: "关键技术",
          body: "领域语料清洗、指令模板、对齐评测与误差分析。",
        },
      ],
      en: [
        {
          title: "Pipeline",
          body: "Data curation -> instruction design -> LoRA finetune -> evaluation regressions.",
        },
        {
          title: "Key Techniques",
          body: "Domain data cleaning, instruction templates, alignment evaluation, error analysis.",
        },
      ],
    },
  },
  {
    slug: "mcp-gateway",
    cover: "/assets/projects/llm-serving-platform/cover.png",
    role: "Applied Engineer",
    period: "2025",
    stack: ["MCP", "FastAPI", "Redis", "PostgreSQL", "K8s"],
    links: [{ label: "Spec", href: "#" }],
    i18n: {
      zh: {
        title: "AI MCP 网关",
        summary:
          "面向多 Agent 场景的 MCP 网关，提供统一工具编排、权限隔离与审计。",
        problem:
          "多 Agent 工具调用缺乏统一入口，权限与审计难以管理。",
        solution:
          "设计 MCP 网关层，统一工具注册、权限策略与调用链路追踪。",
        impact: [
          "提升工具调用可控性与合规性。",
          "显著降低跨团队集成成本。",
        ],
      },
      en: {
        title: "AI MCP Gateway",
        summary:
          "Built an MCP gateway for multi-agent tool orchestration, permission isolation, and audit logging.",
        problem:
          "Tool invocation across agents lacked a unified entry point and governance.",
        solution:
          "Designed a gateway layer for tool registration, access policies, and tracing.",
        impact: [
          "Improved controllability and compliance for tool calls.",
          "Reduced cross-team integration cost.",
        ],
      },
    },
    sections: {
      zh: [
        {
          title: "架构",
          body: "网关层统一接入，支持权限策略、速率限制与审计。",
        },
        {
          title: "关键技术",
          body: "MCP 协议适配、权限隔离、调用链路追踪与回放。",
        },
      ],
      en: [
        {
          title: "Architecture",
          body: "Gateway layer for unified access with policy control, rate limits, and auditing.",
        },
        {
          title: "Key Techniques",
          body: "MCP protocol adaptation, permission isolation, tracing and replay.",
        },
      ],
    },
  },
];
