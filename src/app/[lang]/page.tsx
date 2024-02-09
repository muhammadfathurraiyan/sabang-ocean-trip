import HeroSection from "@/components/home/HeroSection";
import { UseTranslation } from "../i18n";
import Sabang from "@/components/home/Sabang";
import Card from "@/components/home/Card";
import Destination from "@/components/home/Destination";
import Package from "@/components/home/Package";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await UseTranslation(lang);
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
        <Destination
          title={t("destination.title")}
          dolphin={t("destination.dolphin-trip")}
          diving={t("destination.diving")}
          snorkeling={t("destination.snorkeling")}
          kilometer={t("destination.kilometer-0")}
          gua={t("destination.gua-sarang")}
          gapang={t("destination.gapang")}
          sumur={t("destination.sumur")}
          benteng={t("destination.benteng")}
          lang={lang}
        />
        <Package
          title={t("package.title")}
          text={t("package.text")}
          cta={t("package.cta")}
          lang={lang}
        />
      </section>
    </>
  );
}
