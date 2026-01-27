type ProjectLink = {
  label: string;
  href: string;
};

type ProjectCardProps = {
  title: string;
  summary: string;
  stack: string[];
  metrics: string[];
  links: ProjectLink[];
};

export default function ProjectCard({
  title,
  summary,
  stack,
  metrics,
  links,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <p className="text-sm leading-6 text-neutral-600">{summary}</p>
      </div>
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
      <ul className="grid gap-2 text-sm text-neutral-600">
        {metrics.map((metric) => (
          <li key={metric} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
            <span>{metric}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-3 text-sm font-semibold text-neutral-700">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-3 py-1 transition hover:border-neutral-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
