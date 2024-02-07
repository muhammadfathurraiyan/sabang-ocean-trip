import { useTranslation } from "@/app/i18n";
import NotFound from "@/components/global/NotFound";

export default async function page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "not-found");
  return(
    <NotFound back={t("back")} text={t("text")} title={t("title")} />
  )
}