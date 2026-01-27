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
    <section className="grid gap-6 rounded-3xl border border-neutral-200 bg-white p-6 lg:grid-cols-2">
      <div className="space-y-3">
        <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
      <div className="flex items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-6 text-xs text-neutral-500">
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
