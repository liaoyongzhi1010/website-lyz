type FooterProps = {
  lang: "zh" | "en";
};

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-6 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Liao Yongzhi</span>
        <span>
          {lang === "zh"
            ? "专注 LLM 工程化与推理优化"
            : "Focused on LLM engineering and inference optimization"}
        </span>
      </div>
    </footer>
  );
}
