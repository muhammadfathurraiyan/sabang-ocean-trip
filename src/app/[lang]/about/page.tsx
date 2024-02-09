import { useTranslation } from "@/app/i18n";
import Contact from "@/components/about/Contact";
import HeroSection from "@/components/about/HeroSection";
import Navigation from "@/components/global/Navigation";

export default async function page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "about");
  return (
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
  );
}
