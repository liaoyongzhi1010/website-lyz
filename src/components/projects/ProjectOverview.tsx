type ProjectOverviewProps = {
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  labels: {
    summary: string;
    problem: string;
    solution: string;
    impact: string;
  };
};

export default function ProjectOverview({
  summary,
  problem,
  solution,
  impact,
  labels,
}: ProjectOverviewProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-neutral-900">
          {labels.summary}
        </h2>
        <p className="mt-3 text-sm text-neutral-600">{summary}</p>
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-neutral-900">
          {labels.problem}
        </h2>
        <p className="mt-3 text-sm text-neutral-600">{problem}</p>
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-neutral-900">
          {labels.solution}
        </h2>
        <p className="mt-3 text-sm text-neutral-600">{solution}</p>
      </div>
      <div className="lg:col-span-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-sm font-semibold text-neutral-900">
          {labels.impact}
        </h2>
        <ul className="mt-3 grid gap-2 text-sm text-neutral-600">
          {impact.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
