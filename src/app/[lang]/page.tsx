import Link from "next/link";
import { useTranslation } from "../i18n";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang);
  return (
    <div className="px-28 max-lg:px-4">
      <main>
        <h1>{t("title")}</h1>
        <Link href={`/${lang}/second-page`}>{t("to-second-page")}</Link>
      </main>
    </div>
  );
}
