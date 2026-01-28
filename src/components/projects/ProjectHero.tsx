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
    <section className="relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/80 p-8 shadow-[0_24px_60px_-50px_rgba(37,99,235,0.5)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(37,99,235,0.12),transparent_60%),radial-gradient(420px_circle_at_100%_0%,rgba(34,211,238,0.12),transparent_55%)]" />
      <div className="relative flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {role}
          </span>
          <span>{period}</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          {title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-blue-100/80 bg-blue-50/70 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
