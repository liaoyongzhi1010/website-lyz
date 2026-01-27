import type { ProjectMetric } from "@/content/projects";

type ProjectMetricsProps = {
  title: string;
  metrics: ProjectMetric[];
};

export default function ProjectMetrics({ title, metrics }: ProjectMetricsProps) {
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6">
      <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={`${metric.label}-${metric.value}`}
            className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {metric.label}
            </span>
            <div className="mt-2 text-2xl font-semibold text-neutral-900">
              {metric.value}
            </div>
            {metric.note ? (
              <p className="mt-1 text-xs text-neutral-500">{metric.note}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
