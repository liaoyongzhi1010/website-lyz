export default async function ResumePage({
  params,
}: {
  params: Promise<{ lang?: string }>;
}) {
  const resolvedParams = await params;
  const lang =
    resolvedParams?.lang === "en" || resolvedParams?.lang === "zh"
      ? resolvedParams.lang
      : "zh";

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          {lang === "zh" ? "简历" : "Resume"}
        </h1>
        <p className="text-sm text-slate-600">
          {lang === "zh"
            ? "下载 PDF 版本，或联系我获取最新版本。"
            : "Download the PDF version or contact me for the latest update."}
        </p>
      </div>
      <a
        href="/resume.pdf"
        className="w-fit rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_-24px_rgba(37,99,235,0.85)] transition hover:from-blue-500 hover:to-cyan-400"
      >
        {lang === "zh" ? "下载简历 PDF" : "Download Resume PDF"}
      </a>
    </div>
  );
}
