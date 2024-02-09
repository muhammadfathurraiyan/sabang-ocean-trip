import Background from "@/components/destination/destinationSlug/Background";
import Navigation from "@/components/destination/destinationSlug/Navigation";
import { useTranslationHook } from "@/app/i18n";
import { redirect } from "next/navigation";
import Body from "@/components/destination/destinationSlug/Body";
import Package from "@/components/home/Package";

export default async function Destination({
  params: { lang, destination },
}: {
  params: { lang: string; destination: string };
}) {
  const slug = [
    "dolphin-trip",
    "diving",
    "snorkeling",
    "0-kilometer-indonesia",
    "sarang-cave",
    "gapang-beach",
    "sumur-tiga-beach",
    "anoi-itam-fortress",
  ];

  const { t } = await useTranslationHook(lang, "destinationSlug");

  if (slug.some((i) => i.includes(destination))) {
    return (
      <>
        <Background image={destination} />
        <section className="px-28 py-16 flex flex-col gap-16 max-lg:px-4 relative">
          <Navigation
            lang={lang}
            home={t("home")}
            destination={t("destination")}
            dolphin={t("link.dolphin-trip")}
            diving={t("link.diving")}
            snorkeling={t("link.snorkeling")}
            kilometer={t("link.kilometer-0")}
            gua={t("link.gua-sarang")}
            gapang={t("link.gapang")}
            sumur={t("link.sumur")}
            benteng={t("link.benteng")}
            link={destination}
          />
          <Body title={t(`${destination}.title`)} text={t(`${destination}.text`)} />
          <Package
            title={t("package.title")}
            text={t("package.text")}
            cta={t("package.cta")}
            lang={lang}
          />
        </section>
      </>
    );
  } else {
    return redirect(`/${lang}/not-found`);
  }
}
