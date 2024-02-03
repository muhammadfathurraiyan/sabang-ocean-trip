"use client";
import Image from "next/image";
import BG1 from "../../../public/bg2.jpg";
import { DownloadSimple } from "@phosphor-icons/react";
import Link from "next/link";

export default function Card({ text }: { text: string }) {
  return (
    <div className="w-full h-[35vh] group relative flex items-center justify-end px-24 max-lg:px-4">
      <div className="group overflow-hidden rounded-xl -z-10 absolute top-0 left-0 h-full w-full">
        <Image
          src={BG1}
          alt="card"
          className="h-full w-full object-cover group-hover:scale-105 duration-300"
        />
      </div>
      <div className="flex flex-col gap-4 w-2/3 max-lg:w-full">
        <h1 className="font-bold text-4xl max-lg:text-3xl text-slate-100 [text-shadow:0px_3px_10px_rgb(0_0_0_/_50%)]">
          {text}
        </h1>
        <Link
          href={`/`}
          target="_blank"
          className="px-6 py-3 w-fit text-slate-100 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center gap-2"
        >
          Download
          <DownloadSimple weight="bold" size={18} />
        </Link>
      </div>
    </div>
  );
}
