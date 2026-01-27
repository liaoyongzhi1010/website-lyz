import ProjectCard from "@/components/site/ProjectCard";
import { projects } from "@/content/projects";

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

  const copy =
    lang === "zh"
      ? {
          title: "项目展示",
          intro: "聚焦推理优化、Serving 架构与评测体系。",
          details: "详情",
        }
      : {
          title: "Projects",
          intro: "Focused on inference optimization, serving systems, and evaluation.",
          details: "Details",
        };

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-neutral-900">
          {copy.title}
        </h1>
        <p className="text-sm text-neutral-600">{copy.intro}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.i18n[lang].title}
            summary={project.i18n[lang].summary}
            stack={project.stack}
            metrics={project.metrics[lang].map((metric) =>
              metric.note
                ? `${metric.label} ${metric.value} · ${metric.note}`
                : `${metric.label} ${metric.value}`,
            )}
            links={[
              { label: copy.details, href: `/${lang}/projects/${project.slug}` },
              ...(project.links[0] ? [project.links[0]] : []),
            ]}
          />
        ))}
      </div>
    </div>
  );
}
