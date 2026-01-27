type TechStackProps = {
  title: string;
  items: string[];
};

export default function TechStack({ title, items }: TechStackProps) {
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6">
      <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
