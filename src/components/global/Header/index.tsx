import { UseTranslation } from "@/app/i18n";
import HeaderClient from "./HeaderClient";

export default async function index({ lang }: { lang: string }) {
  const { t } = await UseTranslation(lang, "header");
  return (
    <HeaderClient
      dolphinTrip={t("dolphin-trip")}
      diving={t("diving")}
      bahasa={t("bahasa")}
      kilometer0={t("kilometer-0")}
      destinasiWisata={t("destinasi-wisata")}
      paketWisata={t("paket-wisata")}
      snorkeling={t("snorkeling")}
      lang={lang}
    />
  );
}
