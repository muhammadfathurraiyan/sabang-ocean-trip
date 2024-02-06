"use client";
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation({
  home,
  destination,
  lang,
  link,
  dolphin,
  diving,
  snorkeling,
  kilometer,
  rubiah,
  gua,
  gapang,
  sumur,
  benteng,
}: {
  home: string;
  destination: string;
  lang: string;
  link: string;
  dolphin: string;
  diving: string;
  snorkeling: string;
  kilometer: string;
  rubiah: string;
  gua: string;
  gapang: string;
  sumur: string;
  benteng: string;
}) {
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (link === "dolphin-trip") {
      setTitle(dolphin);
    } else if (link === "diving") {
      setTitle(diving);
    } else if (link === "snorkeling") {
      setTitle(snorkeling);
    } else if (link === "kilometer-0-indonesia") {
      setTitle(kilometer);
    } else if (link === "pulau-rubiah") {
      setTitle(rubiah);
    } else if (link === "gua-sarang") {
      setTitle(gua);
    } else if (link === "pantai-gapang") {
      setTitle(gapang);
    } else if (link === "pantai-sumur-tiga") {
      setTitle(sumur);
    } else if (link === "benteng-anoi-itam") {
      setTitle(benteng);
    } else {
      return notFound();
    }
  }, []);

  return (
    <nav className="flex items-center gap-6  border-b border-slate-900 dark:border-slate-100 py-2">
      <Link
        href={`/${lang}`}
        className="hover:text-sky-400 text-sm duration-300"
      >
        {home}
      </Link>
      <CaretRight weight="fill" size={10} />
      <Link
        href={`/${lang}/destination`}
        className="hover:text-sky-400 text-sm duration-300"
      >
        {destination}
      </Link>
      <CaretRight weight="fill" size={10} />
      <Link
        href={`/${lang}/destination/${link}`}
        className="hover:text-sky-400 text-sm duration-300 capitalize"
      >
        {title}
      </Link>
    </nav>
  );
}
