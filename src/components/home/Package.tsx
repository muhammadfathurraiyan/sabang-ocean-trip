"use client";
import { Package as Icon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import BG14 from "../../../public/bg14.jpg";

export default function Package({
  title,
  text,
  cta,
  lang,
}: {
  title: string;
  text: string;
  cta: string;
  lang: string;
}) {
  return (
    <div className="flex mb-12 max-lg:flex-col gap-4 items-start justify-between">
      <div className="w-1/2 max-lg:w-full">
        <Image src={BG14} className="rounded-xl" alt="map" />
      </div>
      <div className="w-1/2 max-lg:w-full">
        <h1 className="text-4xl max-lg:text-3xl font-bold text-sky-600 dark:text-slate-100 uppercase">
          {title}
        </h1>
        <p className="text-lg max-lg:text-base">{text}</p>
        <Link
          href={`/${lang}/tour-packages`}
          className="px-6 py-3 w-fit mt-4 text-slate-100 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center gap-2 group"
        >
          {cta}
          <Icon weight="bold" size={18} />
        </Link>
      </div>
    </div>
  );
}
