import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/global/Header";
import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html className="dark" lang={lang} dir={dir(lang)}>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-slate-900 text-slate-950 dark:text-slate-100`}
      >
        <Header lang={lang} />
        {children}
      </body>
    </html>
  );
}
