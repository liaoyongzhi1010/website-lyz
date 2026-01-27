export default async function ContactPage({
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
        <h1 className="text-2xl font-semibold text-neutral-900">
          {lang === "zh" ? "联系我" : "Contact"}
        </h1>
        <p className="text-sm text-neutral-600">
          {lang === "zh"
            ? "欢迎交流合作与机会，请通过下方方式联系。"
            : "Happy to connect on collaboration or opportunities."}
        </p>
      </div>
      <div className="grid gap-4 rounded-2xl border border-neutral-200 bg-white p-6 text-sm text-neutral-600">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            Email
          </span>
          <span>yourname@example.com</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            WeChat
          </span>
          <span>your_wechat_id</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            GitHub
          </span>
          <span>github.com/yourname</span>
        </div>
      </div>
    </div>
  );
}
