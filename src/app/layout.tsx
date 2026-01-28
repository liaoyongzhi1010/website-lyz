import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_SC, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liao Yongzhi | LLM Engineering Portfolio",
  description:
    "LLM engineering portfolio featuring inference optimization, serving systems, and performance benchmarks.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}>) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang ?? "zh";

  return (
    <html lang={lang} className="scroll-smooth">
      <body
        className={`${sora.variable} ${notoSansSC.variable} ${geistMono.variable} min-h-screen text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
