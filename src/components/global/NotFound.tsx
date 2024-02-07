"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react";

export default function NotFound({
  title,
  text,
  back,
}: {
  title: string;
  text: string;
  back: string;
}) {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="uppercase font-bold text-5xl max-lg:text-4xl text-center text-sky-600 dark:text-slate-100">
        {title}
      </h1>
      <p className="text-lg max-lg:text-base">{text}</p>
      <button
        onClick={() => router.back()}
        className="px-6 py-3 w-fit mt-4 text-slate-100 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center gap-2 group"
      >
        <ArrowLeft
          className="group-hover:-translate-x-2 duration-300"
          weight="bold"
          size={18}
        />
        {back}
      </button>
    </section>
  );
}
