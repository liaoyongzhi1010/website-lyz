import type { ProjectLink } from "@/content/projects";

type ProjectLinksProps = {
  title: string;
  links: ProjectLink[];
};

export default function ProjectLinks({ title, links }: ProjectLinksProps) {
  return (
    <section className="rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_-45px_rgba(37,99,235,0.5)]">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200/70 hover:text-blue-700"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
