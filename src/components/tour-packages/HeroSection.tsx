"use client";
import { Check, DotOutline, Package } from "@phosphor-icons/react";
import Link from "next/link";

export default function HeroSection({
  title,
  orang,
  mobil,
  tiket,
  jemput,
  pemandu,
  dokumentasi,
  keliling,
  snorkeling,
  kamar,
  harga,
  dekor,
  anak,
  maksimal,
  pilih,
  total,
  get,
  dolphin,
  title1,
  title2,
  title3,
  title4,
  pesan1,
  pesan2,
  pesan3,
  pesan4,
  apasaja,
  wa,
}: {
  title: string;
  mobil: string;
  tiket: string;
  total: string;
  pemandu: string;
  dekor: string;
  dokumentasi: string;
  anak: string;
  maksimal: string;
  keliling: string;
  orang: string;
  snorkeling: string;
  jemput: string;
  kamar: string;
  harga: string;
  pilih: string;
  get: string;
  apasaja: string;
  wa: string;
  dolphin: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  pesan1: string;
  pesan2: string;
  pesan3: string;
  pesan4: string;
  text4: string;
}) {
  const link = "https://sabangoceantrip.vercel.app";
  return (
    <div className="w-full flex my-12 flex-col gap-6">
      <h1 className="font-bold text-center text-6xl max-lg:text-5xl text-sky-600 dark:text-slate-100">
        {title}
      </h1>
      <div className="grid grid-cols-4 max max-lg:grid-cols-1 gap-4">
        <div className="flex flex-col items-center justify-start p-4 gap-4 border border-slate-900 dark:border-slate-100 hover:border-sky-600 dark:hover:border-sky-600 duration-300 rounded-xl hover:scale-105">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-3xl text-sky-600 dark:text-slate-100">
              {title1}
            </h2>
          </div>
          <div className="flex flex-col w-full gap-1">
            <p className="text-xs">{harga}</p>
            <h3 className="text-3xl font-bold text-sky-600 dark:text-slate-100">
              Rp. 1.100.000
              <span className="text-xs font-normal">/{orang}</span>
            </h3>
          </div>
          <Link
            href={`https://wa.me/6282361564525?text=${link}%0A%0A${pesan1}`}
            target="_blank"
            className="px-4 py-2 w-full  text-slate-100 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center justify-center gap-2"
          >
            {pilih}
            <Package weight="bold" size={18} />
          </Link>
          <div className="w-full flex flex-col gap-1">
            <h3 className="font-bold text-sky-600 dark:text-slate-100">
              {get}
            </h3>
            <ul className="text-sm list-decimal">
              <li className="flex items-start gap-2">
                <Check size={18} />
                {jemput}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {kamar}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                Dolphin trip
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {snorkeling}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {pemandu}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {dokumentasi}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {keliling}
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-1">
            <h3 className="font-bold text-sky-600 dark:text-slate-100">
              Note :
            </h3>
            <ul className="text-sm list-decimal">
              <li className="flex items-start gap-2">
                <DotOutline weight="bold" size={18} />
                {maksimal}
              </li>
              <li className="flex items-start gap-2">
                <DotOutline weight="bold" size={18} />
                {anak}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start p-4 gap-4 border border-slate-900 dark:border-slate-100 hover:border-sky-600 dark:hover:border-sky-600 duration-300 rounded-xl hover:scale-105">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-3xl text-sky-600 dark:text-slate-100">
              {title2}
            </h2>
          </div>
          <div className="flex flex-col w-full gap-1">
            <p className="text-xs">{harga}</p>
            <h3 className="text-3xl font-bold text-sky-600 dark:text-slate-100">
              Rp. 3.000.000
            </h3>
          </div>
          <Link
            href={`https://wa.me/6282361564525?text=${link}%0A%0A${pesan2}`}
            target="_blank"
            className="px-4 py-2 w-full  text-slate-100 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center justify-center gap-2"
          >
            {pilih}
            <Package weight="bold" size={18} />
          </Link>
          <div className="w-full flex flex-col gap-1">
            <h3 className="font-bold text-sky-600 dark:text-slate-100">
              {get}
            </h3>
            <ul className="text-sm list-decimal">
              <li className="flex items-start gap-2">
                <Check size={18} />
                {jemput}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {dekor}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                Dolphin trip
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {snorkeling}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {pemandu}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {dokumentasi}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {keliling}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start p-4 gap-4 border border-slate-900 dark:border-slate-100 hover:border-sky-600 dark:hover:border-sky-600 duration-300 rounded-xl hover:scale-105">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-3xl text-sky-600 dark:text-slate-100">
              {title3}
            </h2>
          </div>
          <div className="flex flex-col w-full gap-1">
            <p className="text-xs">{harga}</p>
            <h3 className="text-3xl font-bold text-sky-600 dark:text-slate-100">
              Rp. 1.300.000
              <span className="text-xs font-normal">/{orang}</span>
            </h3>
          </div>
          <Link
            href={`https://wa.me/6282361564525?text=${link}%0A%0A${pesan3}`}
            target="_blank"
            className="px-4 py-2 w-full  text-slate-100 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center justify-center gap-2"
          >
            {pilih}
            <Package weight="bold" size={18} />
          </Link>
          <div className="w-full flex flex-col gap-1">
            <h3 className="font-bold text-sky-600 dark:text-slate-100">
              {get}
            </h3>
            <ul className="text-sm list-decimal">
              <li className="flex items-start gap-2">
                <Check size={18} />
                {mobil}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {tiket}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {kamar}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {snorkeling}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {pemandu}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {keliling}
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} />
                {total}
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-1">
            <h3 className="font-bold text-sky-600 dark:text-slate-100">
              Note :
            </h3>
            <ul className="text-sm list-decimal">
              <li className="flex items-start gap-2">
                <DotOutline weight="bold" size={18} />
                {maksimal}
              </li>
              <li className="flex items-start gap-2">
                <DotOutline weight="bold" size={18} />
                {anak}
              </li>{" "}
              <li className="flex items-start gap-2">
                <DotOutline weight="bold" size={18} />
                {dolphin}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start p-4 gap-4 border border-slate-900 dark:border-slate-100 hover:border-sky-600 dark:hover:border-sky-600 duration-300 rounded-xl hover:scale-105">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-3xl text-sky-600 dark:text-slate-100">
              {title4}
            </h2>
          </div>
          <div className="flex flex-col w-full gap-1">
            <p className="text-xs">{harga}</p>
            <h3 className="text-3xl font-bold text-sky-600 dark:text-slate-100">
              Custom
              <span className="text-xs font-normal">/{orang}</span>
            </h3>
          </div>
          <Link
            href={`https://wa.me/6282361564525?text=${link}%0A%0A${pesan4}`}
            target="_blank"
            className="px-4 py-2 w-full  text-slate-100 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center justify-center gap-2"
          >
            {pilih}
            <Package weight="bold" size={18} />
          </Link>
          <div className="w-full flex flex-col gap-1">
            <h3 className="font-bold text-sky-600 dark:text-slate-100">
              {get}
            </h3>
            <ul className="text-sm list-decimal">
              <li className="flex items-start gap-2">
                <Check size={18} />
                {apasaja}
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-1">
            <h3 className="font-bold text-sky-600 dark:text-slate-100">
              Note :
            </h3>
            <ul className="text-sm list-decimal">
              <li className="flex items-start gap-2">
                <DotOutline weight="bold" size={18} />
                {wa}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
