"use client";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { CaretDown } from "@phosphor-icons/react";
import LangSwitcher from "./LangSwitcher";

const Header = () => {
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
          Dolphin Trip
        </Link>
        <Link
          href={"/dolphin-trip"}
          className="hover:text-sky-600 transition-all"
        >
          Diving
        </Link>
        <Link
          href={"/dolphin-trip"}
          className="hover:text-sky-600 transition-all"
        >
          Snorkeling
        </Link>
        <Link
          href={"/dolphin-trip"}
          className="hover:text-sky-600 transition-all"
        >
          Kilometer 0 Indonesia
        </Link>
        <Link
          href={"/dolphin-trip"}
          className="flex items-center gap-1 hover:text-sky-600 transition-all"
        >
          Destinasi Wisata <CaretDown size={14} />
        </Link>
        <Link
          href={"/paket-wisata"}
          className="flex items-center gap-1 hover:text-sky-600 transition-all"
        >
          Paket Wisata <CaretDown size={14} />
        </Link>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
export default Header;
