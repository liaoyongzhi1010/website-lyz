import type { ProjectLink } from "@/content/projects";

type ProjectLinksProps = {
  title: string;
  links: ProjectLink[];
};

export default function ProjectLinks({ title, links }: ProjectLinksProps) {
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6">
      <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
