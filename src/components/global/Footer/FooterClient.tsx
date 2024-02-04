"use client";
import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";
import LangSwitcher from "../LangSwitcher";

export default function FooterClient({
  lang,
  bahasa,
  situs,
  beranda,
  kontak,
  tentang,
  paket,
  terhubung,
}: {
  lang: string;
  bahasa: string;
  situs: string;
  beranda: string;
  kontak: string;
  tentang: string;
  paket: string;
  terhubung: string;
}) {
  return (
    <footer className="bg-sky-600 dark:bg-slate-950 py-12 gap-6 px-28 max-lg:px-4 text-slate-100 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-2">
          <Link href={"/"}>
            <h1 className="flex flex-col text-4xl font-bold uppercase">
              Sabang
              <span className="font-bold text-xl -mt-2">Ocean Trip</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-6 max-lg:gap-4 text-sm font-medium">
          <LangSwitcher lang={lang} bahasa={bahasa} />
          <ThemeSwitcher />
        </div>
      </div>
      <div className="w-ful h-px bg-slate-100" />
      <div className="flex flex-col items-center justify-center gap-2">
        <p>{terhubung}</p>
        <div className="flex items-center gap-2">
          <Link href={`/${lang}`} className="hover:text-sky-400 duration-300">
            <InstagramLogo size={28} />
          </Link>
          <Link href={`/${lang}`} className="hover:text-sky-400 duration-300">
            <TiktokLogo size={28} />
          </Link>
          <Link href={`/${lang}`} className="hover:text-sky-400 duration-300">
            <FacebookLogo size={28} />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href={`/${lang}`} className="hover:text-sky-400 duration-300">
            {beranda}
          </Link>
          |
          <Link href={`/${lang}/tour-packages`} className="hover:text-sky-400 duration-300">
            {paket}
          </Link>
          |
          <Link href={`/${lang}/about`} className="hover:text-sky-400 duration-300">
            {tentang}
          </Link>
          |
          <Link href={`/${lang}/contact`} className="hover:text-sky-400 duration-300">
            {kontak}
          </Link>
        </div>
        <p className="text-center text-sm font-light">
          Copyright &copy; 2024 Sabang Ocean Trip. <br />
          {situs}
          <Link
            href={`/${lang}`}
            className="font-bold hover:text-sky-400 duration-300"
          >
            Raiyan.
          </Link>
        </p>
      </div>
    </footer>
  );
}
