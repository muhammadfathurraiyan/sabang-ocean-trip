"use client";
import { FacebookLogo, InstagramLogo, TiktokLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function HeroSection({
  lang,
  text,
  connect,
}: {
  lang: string;
  text: string;
  connect: string;
}) {
  return (
    <main className="my-12 flex flex-col items-star justify-center">
      <h1 className="flex flex-col text-9xl max-lg:text-7xl font-bold uppercase text-sky-600 dark:text-slate-100">
        Sabang
        <span className="font-bold text-7xl max-lg:text-4xl -mt-2">
          Ocean Trip
        </span>
      </h1>
      <p className="w-2/3 max-lg:w-full text-lg">{text}</p>
      <p className="text-lg mt-6">{connect}</p>
      <div className="flex gap-2 items-center">
        <Link
          href={""}
          target="_blank"
          className="p-2 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg text-slate-100"
        >
          <InstagramLogo size={32} />
        </Link>
        <Link
          href={""}
          target="_blank"
          className="p-2 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg text-slate-100"
        >
          <TiktokLogo size={32} />
        </Link>
        <Link
          href={""}
          target="_blank"
          className="p-2 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg text-slate-100"
        >
          <FacebookLogo size={32} />
        </Link>
      </div>
    </main>
  );
}
