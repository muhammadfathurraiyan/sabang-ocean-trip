import type { Metadata, ResolvingMetadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";
import Providers from "./providers";
import { UseTranslation } from "../i18n";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = params.lang;

  // fetch data]
  const { t } = await UseTranslation(lang, "metadata");

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: {
      default: t("default.title"),
      template: `%s - ${t("default.title")}`,
    },
    description: t("default.description"),
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

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
    <html lang={lang} dir={dir(lang)} suppressHydrationWarning>
      <body
        className={`${poppins.className} bg-slate-50 dark:bg-slate-900 text-slate-950 dark:text-slate-100`}
      >
        <Providers>
          <Header lang={lang} />
          {children}
          <Footer lang={lang} />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
