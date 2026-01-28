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
    <article className="group flex h-full flex-col gap-4 rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_24px_60px_-45px_rgba(37,99,235,0.55)] transition hover:-translate-y-1 hover:border-blue-200/70 hover:shadow-[0_30px_70px_-40px_rgba(37,99,235,0.65)]">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm leading-6 text-slate-600">{summary}</p>
      </div>
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
      <ul className="grid gap-2 text-sm text-slate-600">
        {metrics.map((metric) => (
          <li key={metric} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
            <span>{metric}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex items-center gap-1 rounded-full border border-slate-200/80 px-3 py-1 transition hover:border-blue-200/70 hover:text-blue-700"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
