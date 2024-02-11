import { UseTranslation } from "@/app/i18n";
import Background from "@/components/global/Background";
import Navigation from "@/components/global/Navigation";
import HeroSection from "@/components/tour-packages/HeroSection";
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
    title: t("packages.title"),
    description: t("packages.description"),
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
  const { t } = await UseTranslation(lang, "tour-packages");
  return (
    <>
      <Background />
      <section className="px-12 py-16 flex flex-col gap-16 max-lg:px-4 ">
        <div className="px-16 max-lg:px-4">
          <Navigation lang={lang} link={t("link")} path="tour-packages" />
        </div>
        <HeroSection
          title={t("title")}
          orang={t("card.orang")}
          harga={t("card.harga")}
          pilih={t("card.pilih")}
          get={t("card.get")}
          jemput={t("card.jemput")}
          snorkeling={t("card.snorkeling")}
          anak={t("card.anak")}
          maksimal={t("card.maksimal")}
          pemandu={t("card.pemandu")}
          dekor={t("card.dekor")}
          dokumentasi={t("card.dokumentasi")}
          keliling={t("card.keliling")}
          kamar={t("card.kamar")}
          title1={t("card.title1")}
          title2={t("card.title2")}
          title3={t("card.title3")}
          title4={t("card.title4")}
          text4={t("card.text4")}
          total={t("card.total")}
          mobil={t("card.mobil")}
          tiket={t("card.tiket")}
          dolphin={t("card.dolphin")}
          apasaja={t("card.apasaja")}
          wa={t("card.wa")}
          pesan1={t("card.pesan1")}
          pesan2={t("card.pesan2")}
          pesan3={t("card.pesan3")}
          pesan4={t("card.pesan4")}
        />
      </section>
    </>
  );
}
