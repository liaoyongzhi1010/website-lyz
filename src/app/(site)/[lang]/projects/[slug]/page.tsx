import { notFound } from "next/navigation";
import ProjectArchitecture from "@/components/projects/ProjectArchitecture";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectLinks from "@/components/projects/ProjectLinks";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectTech from "@/components/projects/ProjectTech";
import { projects } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.flatMap((project) => [
    { lang: "zh", slug: project.slug },
    { lang: "en", slug: project.slug },
  ]);
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang?: string; slug?: string }>;
}) {
  const resolvedParams = await params;
  const lang =
    resolvedParams?.lang === "en" || resolvedParams?.lang === "zh"
      ? resolvedParams.lang
      : "zh";
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
  }

  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    notFound();
  }

  const copy = project.i18n[lang];
  const sections = project.sections[lang];
  const architectureSection = sections[0];
  const techSections = sections.slice(1);

  const labels =
    lang === "zh"
      ? {
          summary: "概述",
          problem: "问题",
          solution: "方案",
          impact: "影响",
          architecture: "架构",
          tech: "关键技术",
          links: "证据链接",
        }
      : {
          summary: "Summary",
          problem: "Problem",
          solution: "Solution",
          impact: "Impact",
          architecture: "Architecture",
          tech: "Key Techniques",
          links: "Evidence",
        };

  return (
    <div className="flex flex-col gap-8">
      <ProjectHero
        title={copy.title}
        role={project.role}
        period={project.period}
        stack={project.stack}
      />
      <ProjectOverview
        summary={copy.summary}
        problem={copy.problem}
        solution={copy.solution}
        impact={copy.impact}
        labels={labels}
      />
      <ProjectArchitecture
        title={architectureSection?.title ?? labels.architecture}
        description={architectureSection?.body ?? ""}
        image={project.cover}
      />
      <ProjectTech title={labels.tech} sections={techSections} />
      <ProjectLinks title={labels.links} links={project.links} />
    </div>
  );
}
