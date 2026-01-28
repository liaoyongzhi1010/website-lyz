import type { ProjectMetric } from "@/content/projects";

type ProjectMetricsProps = {
  title: string;
  metrics: ProjectMetric[];
};

export default function ProjectMetrics({ title, metrics }: ProjectMetricsProps) {
  return (
    <section className="rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_-45px_rgba(37,99,235,0.5)]">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={`${metric.label}-${metric.value}`}
            className="rounded-2xl border border-slate-100/80 bg-slate-50/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
          >
            <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
              {metric.label}
            </span>
            <div className="mt-2 text-2xl font-semibold text-slate-900">
              {metric.value}
            </div>
            {metric.note ? (
              <p className="mt-1 text-xs text-slate-500">{metric.note}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
