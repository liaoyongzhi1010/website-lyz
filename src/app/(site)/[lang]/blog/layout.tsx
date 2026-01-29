import type { ReactNode } from "react";
import Link from "next/link";

export default async function BlogLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang?: string }>;
}) {
  const resolvedParams = await params;
  const lang =
    resolvedParams?.lang === "en" || resolvedParams?.lang === "zh"
      ? resolvedParams.lang
      : "zh";
  const showEnglishNotice = lang === "en";

  return (
    <div className="flex flex-col gap-10">
      {showEnglishNotice ? (
        <div className="rounded-2xl border border-amber-200/70 bg-amber-50/80 p-4 text-xs text-amber-900">
          <p className="font-semibold">Notice</p>
          <p className="mt-1 text-amber-800">
            This blog is written in Chinese.
            <Link
              className="ml-1 font-semibold underline decoration-amber-400"
              href="/zh/blog"
            >
              Go to Chinese version
            </Link>
          </p>
        </div>
      ) : null}
      {children}
    </div>
  );
}
