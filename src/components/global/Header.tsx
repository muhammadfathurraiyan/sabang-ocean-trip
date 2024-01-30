import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import LangSwitcher from "./LangSwitcher";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { useTranslation } from "@/app/i18n";

const Header = async ({ lang }: { lang: string }) => {
  const { t } = await useTranslation(lang, "header");
  return (
    <header className="flex items-center justify-between py-2 px-28">
      <Link href={"/"}>
        <h1 className="flex flex-col text-2xl font-bold uppercase">
          Sabang
          <span className="font-bold text-sm -mt-2">Ocean Trip</span>
        </h1>
      </Link>
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link
          href={"/dolphin-trip"}
          className="hover:text-sky-600 transition-all"
        >
          {t("dolphin-trip")}
        </Link>
        <Link
          href={"/dolphin-trip"}
          className="hover:text-sky-600 transition-all"
        >
          {t("diving")}
        </Link>
        <Link
          href={"/dolphin-trip"}
          className="hover:text-sky-600 transition-all"
        >
          {t("snorkeling")}
        </Link>
        <Link
          href={"/dolphin-trip"}
          className="hover:text-sky-600 transition-all"
        >
          {t("kilometer-0")}
        </Link>
        <Link
          href={"/dolphin-trip"}
          className="flex items-center gap-1 hover:text-sky-600 transition-all"
        >
          {t("destinasi-wisata")} <CaretDown size={14} />
        </Link>
        <Link
          href={"/paket-wisata"}
          className="flex items-center gap-1 hover:text-sky-600 transition-all"
        >
          {t("paket-wisata")} <CaretDown size={14} />
        </Link>
        <LangSwitcher lang={lang} />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
export default Header;
