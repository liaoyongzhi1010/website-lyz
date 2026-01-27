import type { Project } from "@/content/projects";

type ProjectHeroProps = {
  title: string;
  role: Project["role"];
  period: Project["period"];
  stack: Project["stack"];
};

export default function ProjectHero({
  title,
  role,
  period,
  stack,
}: ProjectHeroProps) {
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
          <span className="rounded-full border border-neutral-200 px-3 py-1">
            {role}
          </span>
          <span>{period}</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          {title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
