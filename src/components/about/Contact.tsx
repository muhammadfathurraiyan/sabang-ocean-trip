"use client";
import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function Contact({
  title,
  text,
  cta,
}: {
  title: string;
  text: string;
  cta: string;
}) {
  return (
    <div id="contact" className="mb-12">
      <h1 className="font-bold text-6xl max-lg:text-5xl text-sky-600 dark:text-slate-100">
        {title}
      </h1>
      <p className="w-2/3 max-lg:w-full text-lg">{text}</p>
      <Link
        href="https://wa.me/6282361564525"
        className="px-6 py-3 text-lg w-fit mt-6 text-slate-100 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center gap-2 group"
      >
        {cta}
        <WhatsappLogo size={32} />
      </Link>
    </div>
  );
}
