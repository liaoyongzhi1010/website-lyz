type TechStackProps = {
  title: string;
  items: string[];
};

export default function TechStack({ title, items }: TechStackProps) {
  return (
    <section className="fade-up fade-up-delay-2 rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_-45px_rgba(37,99,235,0.5)]">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-blue-200/70 hover:text-blue-700"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
