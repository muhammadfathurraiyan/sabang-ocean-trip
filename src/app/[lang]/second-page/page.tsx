import { useTranslation } from "@/app/i18n";
import Link from "next/link";

export default async function About({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "second-page");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lang}`}>{t("back-to-home")}</Link>
    </>
  );
}
