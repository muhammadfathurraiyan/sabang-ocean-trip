import Image from "next/image";
import BG3 from "../../../public/bg3.jpg";
import BG4 from "../../../public/bg4.jpg";
import BG7 from "../../../public/bg7.jpg";
import BG8 from "../../../public/bg8.jpg";
import BG9 from "../../../public/bg9.jpg";
import BG10 from "../../../public/bg10.jpg";
import BG11 from "../../../public/bg11.jpg";
import BG12 from "../../../public/bg12.jpg";
import BG13 from "../../../public/bg13.jpg";
import Link from "next/link";

export default function Destination({
  title,
  dolphin,
  diving,
  snorkeling,
  kilometer,
  gua,
  gapang,
  sumur,
  benteng,
  lang,
}: {
  title: string;
  dolphin: string;
  diving: string;
  snorkeling: string;
  kilometer: string;
  gua: string;
  gapang: string;
  sumur: string;
  benteng: string;
  lang: string;
}) {
  return (
    <div className="flex my-12 flex-col gap-4">
      <h1 className="text-4xl max-lg:text-3xl font-bold text-sky-600 dark:text-slate-100 uppercase">
        {title}
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 gap-4">
        <Link
          href={`/${lang}/destination/dolphin-trip`}
          className="group col-span-2 relative h-[28vh]"
        >
          <div className="bg-slate-950/30 rounded-xl w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300 px-2">
            <h2 className="text-center text-slate-100 [text-shadow:0px_3px_10px_rgb(0_0_0_/_50%)] text-lg max-lg:text-base font-medium">
              {dolphin}
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl absolute -z-10 top-0 left-0 w-full h-full">
            <Image
              src={BG3}
              alt="dolphin trip site"
              className="object-cover h-full w-full rounded-xl group-hover:scale-105 duration-300"
            />
          </div>
        </Link>
        <Link
          href={`/${lang}/destination/diving`}
          className="group relative h-[28vh]"
        >
          <div className="bg-slate-950/30 rounded-xl w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300 px-2">
            <h2 className="text-center text-slate-100 [text-shadow:0px_3px_10px_rgb(0_0_0_/_50%)] text-lg max-lg:text-base font-medium">
              {diving}
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl absolute -z-10 top-0 left-0 w-full h-full">
            <Image
              src={BG4}
              alt="diving site"
              className="object-cover h-full w-full rounded-xl group-hover:scale-105 duration-300"
            />
          </div>
        </Link>
        <Link
          href={`/${lang}/destination/0-kilometer-indonesia`}
          className="group relative h-[28vh]"
        >
          <div className="bg-slate-950/30 rounded-xl w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300 px-2">
            <h2 className="text-center text-slate-100 [text-shadow:0px_3px_10px_rgb(0_0_0_/_50%)] text-lg max-lg:text-base font-medium">
              {kilometer}
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl absolute -z-10 top-0 left-0 w-full h-full">
            <Image
              src={BG7}
              alt="km0"
              className="object-cover h-full w-full rounded-xl group-hover:scale-105 duration-300"
            />
          </div>
        </Link>
        <Link
          href={`/${lang}/destination/snorkeling`}
          className="group max-lg:col-span-2 relative h-[28vh]"
        >
          <div className="bg-slate-950/30 rounded-xl w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300 px-2">
            <h2 className="text-center text-slate-100 [text-shadow:0px_3px_10px_rgb(0_0_0_/_50%)] text-lg max-lg:text-base font-medium">
              {snorkeling}
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl absolute -z-10 top-0 left-0 w-full h-full">
            <Image
              src={BG8}
              alt="snorkeling site"
              className="object-cover h-full w-full rounded-xl group-hover:scale-105 duration-300"
            />
          </div>
        </Link>
        <Link
          href={`/${lang}/destination/sarang-cave`}
          className="group col-span-2 relative h-[28vh]"
        >
          <div className="bg-slate-950/30 rounded-xl w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300 px-2">
            <h2 className="text-center text-slate-100 [text-shadow:0px_3px_10px_rgb(0_0_0_/_50%)] text-lg max-lg:text-base font-medium">
              {gua}
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl absolute -z-10 top-0 left-0 w-full h-full">
            <Image
              src={BG10}
              alt="gua sarang"
              className="object-cover h-full w-full rounded-xl group-hover:scale-105 duration-300"
            />
          </div>
        </Link>
        <Link
          href={`/${lang}/destination/gapang-beach`}
          className="group relative h-[28vh]"
        >
          <div className="bg-slate-950/30 rounded-xl w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300 px-2">
            <h2 className="text-center text-slate-100 [text-shadow:0px_3px_10px_rgb(0_0_0_/_50%)] text-lg max-lg:text-base font-medium">
              {gapang}
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl absolute -z-10 top-0 left-0 w-full h-full">
            <Image
              src={BG13}
              alt="gapang"
              className="object-cover h-full w-full rounded-xl group-hover:scale-105 duration-300"
            />
          </div>
        </Link>
        <Link
          href={`/${lang}/destination/anoi-itam-fortress`}
          className="group lg:col-span-2 relative h-[28vh]"
        >
          <div className="bg-slate-950/30 rounded-xl w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300 px-2">
            <h2 className="text-center text-slate-100 [text-shadow:0px_3px_10px_rgb(0_0_0_/_50%)] text-lg max-lg:text-base font-medium">
              {benteng}
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl absolute -z-10 top-0 left-0 w-full h-full">
            <Image
              src={BG12}
              alt="benteng"
              className="object-cover h-full w-full rounded-xl group-hover:scale-105 duration-300"
            />
          </div>
        </Link>
        <Link
          href={`/${lang}/destination/sumur-tiga-beach`}
          className="group col-span-2 relative h-[28vh]"
        >
          <div className="bg-slate-950/30 rounded-xl w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300 px-2">
            <h2 className="text-center text-slate-100 [text-shadow:0px_3px_10px_rgb(0_0_0_/_50%)] text-lg max-lg:text-base font-medium">
              {sumur}
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl absolute -z-10 top-0 left-0 w-full h-full">
            <Image
              src={BG11}
              alt="sumur"
              className="object-cover h-full w-full rounded-xl group-hover:scale-105 duration-300"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
