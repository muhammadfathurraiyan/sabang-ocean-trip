import { UseTranslation } from "@/app/i18n";
import Background from "@/components/global/Background";
import HeroSection from "@/components/destination/HeroSection";
import Navigation from "@/components/global/Navigation";
import Destination from "@/components/home/Destination";
import Package from "@/components/home/Package";
import { Metadata, ResolvingMetadata } from "next";

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
    title: t("destination.title"),
    description: t("destination.description"),
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default async function page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await UseTranslation(lang, "destination");
  return (
    <>
      <Background />
      <section className="px-28 py-16 flex flex-col gap-16 max-lg:px-4 relative">
        <Navigation lang={lang} link={t("link")} path="destination" />
        <HeroSection text={t("text")} title={t("title")} />
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
