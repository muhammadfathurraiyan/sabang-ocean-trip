import { UseTranslation } from "@/app/i18n";
import Contact from "@/components/about/Contact";
import HeroSection from "@/components/about/HeroSection";
import Background from "@/components/global/Background";
import Navigation from "@/components/global/Navigation";
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
    title: t("about.title"),
    description: t("about.description"),
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
  const { t } = await UseTranslation(lang, "about");
  return (
    <>
      <Background />
      <section className="px-28 py-16 flex flex-col gap-16 max-lg:px-4 relative">
        <Navigation lang={lang} link={t("title")} path="about" />
        <HeroSection
          lang={lang}
          text={t("about.text")}
          connect={t("about.connect")}
        />
        <Contact
          cta={t("contact.cta")}
          text={t("contact.text")}
          title={t("contact.title")}
        />
      </section>
    </>
  );
}
