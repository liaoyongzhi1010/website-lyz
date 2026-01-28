"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type LanguageSwitchProps = {
  currentLang: "zh" | "en";
};

export default function LanguageSwitch({ currentLang }: LanguageSwitchProps) {
  const nextLang = currentLang === "zh" ? "en" : "zh";
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const nextPath = (() => {
    if (!pathname) {
      return `/${nextLang}`;
    }
    const segments = pathname.split("/");
    if (segments.length > 1 && (segments[1] === "zh" || segments[1] === "en")) {
      segments[1] = nextLang;
      const rebuilt = segments.join("/");
      return rebuilt.startsWith("/") ? rebuilt : `/${rebuilt}`;
    }
    return `/${nextLang}`;
  })();

  const query = searchParams.toString();
  const hash =
    typeof window !== "undefined" ? window.location.hash || "" : "";
  const href = `${nextPath}${query ? `?${query}` : ""}${hash}`;

  return (
    <Link
      href={href}
      className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600 transition hover:border-blue-200/80 hover:text-blue-700"
      aria-label={currentLang === "zh" ? "Switch to English" : "切换到中文"}
    >
      {nextLang}
    </Link>
  );
}
