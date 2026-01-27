type Metric = {
  label: string;
  value: string;
  note?: string;
};

type MetricBarProps = {
  metrics: Metric[];
};

export default function MetricBar({ metrics }: MetricBarProps) {
  return (
    <section className="grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 md:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex flex-col gap-2 rounded-2xl border border-neutral-100 bg-neutral-50 p-4"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            {metric.label}
          </span>
          <span className="text-2xl font-semibold text-neutral-900">
            {metric.value}
          </span>
          {metric.note ? (
            <span className="text-xs text-neutral-500">{metric.note}</span>
          ) : null}
        </div>
      ))}
    </section>
  );
}
