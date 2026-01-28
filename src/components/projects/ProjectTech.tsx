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
    <section className="rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_-45px_rgba(37,99,235,0.5)]">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-slate-100/80 bg-slate-50/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
          >
            <h3 className="text-sm font-semibold text-slate-900">
              {section.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
