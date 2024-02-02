import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import { useTranslation } from "../i18n";
import Sabang from "@/components/home/Sabang";
import Card from "@/components/home/Card";

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
      <section className="px-28 py-16 flex flex-col gap-16 max-lg:px-4">
        <Sabang text={t("sabang.text")} cta={t("sabang.cta")} lang={lang} />
        <Card text={t("card.text")} />
      </section>
    </>
  );
}
