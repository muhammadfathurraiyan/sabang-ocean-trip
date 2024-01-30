"use client";
import { CaretDown, List, X, XCircle } from "@phosphor-icons/react";
import Link from "next/link";
import LangSwitcher from "../LangSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";
import { useState } from "react";

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
  return (
    <>
      <header className="flex fixed inset-x-0 z-10 backdrop-blur items-center justify-between py-2 px-28 max-lg:px-4">
        <div className="flex items-center gap-4">
          <div
            onClick={() => setToggle(!toggle)}
            className="lg:hidden hover:text-sky-600 transition-all cursor-pointer rounded flex items-center justify-center w-9 h-9 bg-slate-100 border border-slate-300 dark:border-slate-600 dark:bg-slate-800"
          >
            <List size={22} />
          </div>
          <Link href={"/"}>
            <h1 className="flex flex-col text-2xl font-bold uppercase">
              Sabang
              <span className="font-bold text-sm -mt-2">Ocean Trip</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-6 max-lg:gap-4 text-sm font-medium">
          <Link
            href={"/dolphin-trip"}
            className="hover:text-sky-600 transition-all max-lg:hidden"
          >
            {dolphinTrip}
          </Link>
          <Link
            href={"/dolphin-trip"}
            className="hover:text-sky-600 transition-all max-lg:hidden"
          >
            {diving}
          </Link>
          <Link
            href={"/dolphin-trip"}
            className="hover:text-sky-600 transition-all max-lg:hidden"
          >
            {snorkeling}
          </Link>
          <Link
            href={"/dolphin-trip"}
            className="hover:text-sky-600 transition-all max-lg:hidden"
          >
            {kilometer0}
          </Link>
          <Link
            href={"/dolphin-trip"}
            className="flex items-center gap-1 hover:text-sky-600 transition-all max-lg:hidden"
          >
            {destinasiWisata} <CaretDown size={14} />
          </Link>
          <Link
            href={"/paket-wisata"}
            className="flex items-center gap-1 hover:text-sky-600 transition-all max-lg:hidden"
          >
            {paketWisata} <CaretDown size={14} />
          </Link>
          <LangSwitcher bahasa={bahasa} lang={lang} />
          <ThemeSwitcher />
        </div>
      </header>
      <aside
        className={`fixed inset-0 z-20 flex-col gap-8 transition-all flex px-4 py-2 bg-slate-100 dark:bg-slate-800 ${
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
          <div onClick={() => setToggle(!toggle)} className="cursor-pointer hover:text-sky-600 transition-all">
            <XCircle size={28} />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 font-medium">
          <Link
            href={"/dolphin-trip"}
            className="hover:text-sky-600 transition-all"
          >
            {dolphinTrip}
          </Link>
          <Link
            href={"/dolphin-trip"}
            className="hover:text-sky-600 transition-all"
          >
            {diving}
          </Link>
          <Link
            href={"/dolphin-trip"}
            className="hover:text-sky-600 transition-all"
          >
            {snorkeling}
          </Link>
          <Link
            href={"/dolphin-trip"}
            className="hover:text-sky-600 transition-all"
          >
            {kilometer0}
          </Link>
          <Link
            href={"/dolphin-trip"}
            className="flex items-center gap-1 hover:text-sky-600 transition-all"
          >
            {destinasiWisata} <CaretDown size={14} />
          </Link>
          <Link
            href={"/paket-wisata"}
            className="flex items-center gap-1 hover:text-sky-600 transition-all"
          >
            {paketWisata} <CaretDown size={14} />
          </Link>
        </div>
      </aside>
    </>
  );
}
