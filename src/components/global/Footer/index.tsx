import { UseTranslation } from "@/app/i18n";
import FooterClient from "./FooterClient";

export default async function index({ lang }: { lang: string }) {
  const { t } = await UseTranslation(lang, "footer");
  return (
    <FooterClient
      lang={lang}
      bahasa={t("bahasa")}
      situs={t("situs")}
      terhubung={t("terhubung")}
      beranda={t("beranda")}
      kontak={t("kontak")}
      tentang={t("tentang")}
      paket={t("paket")}
    />
  );
}
