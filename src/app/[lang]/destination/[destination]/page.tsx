import Background from "@/components/destination/destinationSlug/Background";
import BG1 from "../../../../../public/bg3.jpg";
import Navigation from "@/components/destination/destinationSlug/Navigation";
import { useTranslation } from "@/app/i18n";
import { notFound, redirect } from "next/navigation";

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
    "rubiah-island",
    "sarang-cave",
    "gapang-beach",
    "sumur-tiga-beach",
    "anoi-itam-fortress",
  ];

  const { t } = await useTranslation(lang, "destinationSlug");

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
            rubiah={t("link.pulau-rubiah")}
            gua={t("link.gua-sarang")}
            gapang={t("link.gapang")}
            sumur={t("link.sumur")}
            benteng={t("link.benteng")}
            link={destination}
          />
        </section>
      </>
    );
  } else {
    return redirect(`/${lang}/not-found`);
  }
}
