import Image from "next/image";

type ProjectArchitectureProps = {
  title: string;
  description: string;
  image?: string;
};

export default function ProjectArchitecture({
  title,
  description,
  image,
}: ProjectArchitectureProps) {
  return (
    <section className="grid gap-6 rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_-45px_rgba(37,99,235,0.5)] lg:grid-cols-2">
      <div className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
      <div className="flex items-center justify-center rounded-2xl border border-dashed border-slate-200/80 bg-slate-50/80 p-6 text-xs text-slate-500">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={800}
            height={480}
            className="max-h-56 w-full object-contain"
          />
        ) : (
          <span>Architecture placeholder</span>
        )}
      </div>
    </section>
  );
}
