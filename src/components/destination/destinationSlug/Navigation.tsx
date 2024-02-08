"use client";
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
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
    } else if (link === "0-kilometer-indonesia") {
      setTitle(kilometer);
    } else if (link === "sarang-cave") {
      setTitle(gua);
    } else if (link === "gapang-beach") {
      setTitle(gapang);
    } else if (link === "sumur-tiga-beach") {
      setTitle(sumur);
    } else if (link === "anoi-itam-fortress") {
      setTitle(benteng);
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
