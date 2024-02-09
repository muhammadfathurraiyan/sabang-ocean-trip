"use client";
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function Navigation({
  lang,
  link,
  path,
}: {
  lang: string;
  link: string;
  path: string;
}) {
  return (
    <nav className="flex items-center gap-6 border-b border-slate-900 dark:border-slate-100 py-2">
      <Link
        href={`/${lang}`}
        className="hover:text-sky-400 text-sm duration-300"
      >
        Home
      </Link>
      <CaretRight weight="fill" size={10} />
      <Link
        href={`/${lang}/${path}`}
        className="hover:text-sky-400 text-sm duration-300 capitalize"
      >
        {link}
      </Link>
    </nav>
  );
}
