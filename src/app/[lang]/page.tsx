import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import { useTranslation } from "../i18n";
import Sabang from "@/components/home/Sabang";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang);
  return (
    <>
      <HeroSection
        text1={t("main.satu")}
        text2={t("main.dua")}
        text3={t("main.tiga")}
        cta={t("main.cta")}
        lang={lang}
      />
      <Sabang text={t("sabang.text")} cta={t("sabang.cta")} lang={lang} />
      <div className="px-28 max-lg:px-4 min-h-screen">
        <main>
          <h1>{t("title")}</h1>
          <Link href={`/${lang}/second-page`}>{t("to-second-page")}</Link>
        </main>
      </div>
    </>
  );
}
