import type { ReactNode } from "react";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "en" }];
}

export default function LangLayout({ children }: { children: ReactNode }) {
  return children;
}
