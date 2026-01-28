import type { ReactNode } from "react";
import Container from "@/components/site/Container";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "en" }];
}

type LangLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang?: string }>;
};

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const resolvedParams = await params;
  const lang =
    resolvedParams?.lang === "en" || resolvedParams?.lang === "zh"
      ? resolvedParams.lang
      : "zh";

  return (
    <div className="flex min-h-screen flex-col">
      <Header lang={lang} />
      <main className="flex-1">
        <Container className="py-12">{children}</Container>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
