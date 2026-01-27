import type { ProjectSection } from "@/content/projects";

type ProjectTechProps = {
  title: string;
  sections: ProjectSection[];
};

export default function ProjectTech({ title, sections }: ProjectTechProps) {
  if (!sections.length) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6">
      <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4"
          >
            <h3 className="text-sm font-semibold text-neutral-900">
              {section.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600">{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
