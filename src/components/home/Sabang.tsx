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
  console.log(text);
  return (
    <section className="px-28 pt-16 min-h-[60vh] max-lg:px-4">
      <div className="h-full w-3/5 max-lg:w-full flex flex-col">
        <h1 className="uppercase font-bold text-7xl text-sky-600 dark:text-slate-100">
          Sabang
        </h1>
        <p className="text-lg">{text}</p>
        <Link
          href={`/${lang}/tour-package`}
          className="px-6 py-3 w-fit text-slate-100 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center gap-2 group"
        >
          {cta}
          <ArrowRight
            className="group-hover:translate-x-2 transition-all"
            weight="bold"
            size={18}
          />
        </Link>
      </div>
    </section>
  );
}
