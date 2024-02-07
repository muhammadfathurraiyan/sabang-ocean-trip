"use client";
import { List, XCircle } from "@phosphor-icons/react";
import Link from "next/link";
import LangSwitcher from "../LangSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";
import { useEffect, useState } from "react";

export default function HeaderClient({
  dolphinTrip,
  diving,
  snorkeling,
  kilometer0,
  bahasa,
  destinasiWisata,
  paketWisata,
  lang,
}: {
  dolphinTrip: string;
  diving: string;
  snorkeling: string;
  kilometer0: string;
  bahasa: string;
  destinasiWisata: string;
  paketWisata: string;
  lang: string;
}) {
  const [toggle, setToggle] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleIsScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 1) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleIsScroll);

    return () => {
      window.removeEventListener("scroll", handleIsScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`flex fixed inset-x-0 z-10 top-0 items-center justify-between py-2 px-28 max-lg:px-4 ${
          isScroll ? "bg-slate-900/50 backdrop-blur-sm" : "bg-slate-900/0"
        } text-slate-100 duration-300`}
      >
        <div className="flex items-center gap-4">
          <div
            onClick={() => setToggle(!toggle)}
            className="lg:hidden hover:text-sky-400 duration-300 cursor-pointer rounded flex items-center justify-center w-9 h-9 border border-slate-300"
          >
            <List size={22} />
          </div>
          <Link href={`/${lang}`}>
            <h1 className="flex flex-col text-2xl font-bold uppercase">
              Sabang
              <span className="font-bold text-sm -mt-2">Ocean Trip</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-6 max-lg:gap-4 text-sm font-medium">
          <Link
            href={`/${lang}/destination/dolphin-trip`}
            className="hover:text-sky-400 duration-300 max-lg:hidden"
          >
            {dolphinTrip}
          </Link>
          <Link
            href={`/${lang}/destination/diving`}
            className="hover:text-sky-400 duration-300 max-lg:hidden"
          >
            {diving}
          </Link>
          <Link
            href={`/${lang}/destination/snorkeling`}
            className="hover:text-sky-400 duration-300 max-lg:hidden"
          >
            {snorkeling}
          </Link>
          <Link
            href={`/${lang}/destination/0-kilometer-indonesia`}
            className="hover:text-sky-400 duration-300 max-lg:hidden"
          >
            {kilometer0}
          </Link>
          <Link
            href={`/${lang}/destination`}
            className="flex items-center gap-1 hover:text-sky-400 duration-300 max-lg:hidden"
          >
            {destinasiWisata}
          </Link>
          <Link
            href={`/${lang}/tour-packages`}
            className="flex items-center gap-1 hover:text-sky-400 duration-300 max-lg:hidden"
          >
            {paketWisata}
          </Link>
          <LangSwitcher bahasa={bahasa} lang={lang} />
          <ThemeSwitcher />
        </div>
      </header>
      <aside
        className={`fixed inset-0 z-20 flex-col gap-8 duration-300 flex px-4 py-2 bg-slate-100 dark:bg-slate-800 ${
          toggle ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <h1 className="flex flex-col text-2xl font-bold uppercase">
              Sabang
              <span className="font-bold text-sm -mt-2">Ocean Trip</span>
            </h1>
          </Link>
          <div
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer hover:text-sky-400 duration-300"
          >
            <XCircle size={28} />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 font-medium">
          <Link
            href={`/${lang}/destination/dolphin-trip`}
            className="hover:text-sky-400 duration-300"
          >
            {dolphinTrip}
          </Link>
          <Link
            href={`/${lang}/destination/diving`}
            className="hover:text-sky-400 duration-300"
          >
            {diving}
          </Link>
          <Link
            href={`/${lang}/destination/snorkeling`}
            className="hover:text-sky-400 duration-300"
          >
            {snorkeling}
          </Link>
          <Link
            href={`/${lang}/destination/0-kilometer-indonesia`}
            className="hover:text-sky-400 duration-300"
          >
            {kilometer0}
          </Link>
          <Link
            href={`/${lang}/destination`}
            className="flex items-center gap-1 hover:text-sky-400 duration-300"
          >
            {destinasiWisata}
          </Link>
          <Link
            href={`/${lang}/tour-packages`}
            className="flex items-center gap-1 hover:text-sky-400 duration-300"
          >
            {paketWisata}
          </Link>
        </div>
      </aside>
    </>
  );
}
