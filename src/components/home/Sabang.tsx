"use client";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function Sabang({
  text,
  cta,
  lang,
}: {
  text: string;
  cta: string;
  lang: string;
}) {
  return (
    <div className="my-12 w-3/5 max-lg:w-full">
      <h1 className="uppercase font-bold text-7xl max-lg:text-6xl text-sky-600 dark:text-slate-100">
        Sabang
      </h1>
      <p className="text-lg max-lg:text-base">{text}</p>
      <Link
        href={`/${lang}/tour-package`}
        className="px-6 py-3 w-fit mt-4 text-slate-100 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center gap-2 group"
      >
        {cta}
        <ArrowRight
          className="group-hover:translate-x-2 duration-300"
          weight="bold"
          size={18}
        />
      </Link>
    </div>
  );
}
