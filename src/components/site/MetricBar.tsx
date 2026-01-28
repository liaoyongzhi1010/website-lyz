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
    <section className="fade-up fade-up-delay-1 grid gap-4 rounded-[28px] border border-slate-200/70 bg-white/80 p-6 md:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex flex-col gap-2 rounded-2xl border border-slate-100/80 bg-slate-50/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
        >
          <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
            {metric.label}
          </span>
          <span className="text-2xl font-semibold text-slate-900">
            {metric.value}
          </span>
          {metric.note ? (
            <span className="text-xs text-slate-500">{metric.note}</span>
          ) : null}
        </div>
      ))}
    </section>
  );
}
