"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CSSProperties } from "react";
import BG1 from "../../../public/bg1.jpg";
import BG5 from "../../../public/bg5.jpg";
import BG6 from "../../../public/bg6.jpg";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export default function HeroSection({
  text1,
  text2,
  text3,
  cta,
  lang,
}: {
  text1: string;
  text2: string;
  text3: string;
  cta: string;
  lang: string;
}) {
  return (
    <main>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        style={{ "--swiper-pagination-color": "#F8FAFC" } as CSSProperties}
      >
        <SwiperSlide>
          <div className="relative flex justify-center items-center min-h-screen">
            <Image
              src={BG1}
              alt="Iboih"
              className="w-full h-full absolute -z-10 object-cover"
            />
            <div className="w-2/3 max-lg:w-full flex flex-col items-center justify-center gap-4">
              <h1 className="font-bold text-5xl max-lg:text-4xl text-slate-100 text-center [text-shadow:0px_3px_10px_rgb(0_0_0_/_50%)]">
                {text1}
              </h1>
              <Link
                href={`/${lang}/tour-package`}
                className="px-6 py-3 text-slate-100 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center gap-2 group"
              >
                {cta}
                <ArrowRight
                  className="group-hover:translate-x-2 duration-300"
                  weight="bold"
                  size={18}
                />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center items-center min-h-screen">
            <Image
              src={BG5}
              alt="Dolphins"
              className="w-full h-full absolute -z-10 object-cover"
            />
            <div className="w-2/3 max-lg:w-full flex flex-col items-center justify-center gap-4">
              <h1 className="font-bold text-5xl max-lg:text-4xl text-slate-100 text-center [text-shadow:0px_3px_10px_rgb(0_0_0_/_50%)]">
                {text2}
              </h1>
              <Link
                href={`/${lang}/dolphin-trip`}
                className="px-6 py-3 text-slate-100 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center gap-2 group"
              >
                {cta}
                <ArrowRight
                  className="group-hover:translate-x-2 duration-300"
                  weight="bold"
                  size={18}
                />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center items-center min-h-screen">
            <Image
              src={BG6}
              alt="Underwater"
              className="w-full h-full absolute -z-10 object-cover"
            />
            <div className="w-2/3 max-lg:w-full flex flex-col items-center justify-center gap-4">
              <h1 className="font-bold text-5xl max-lg:text-4xl text-slate-100 text-center [text-shadow:0px_3px_10px_rgb(0_0_0_/_50%)]">
                {text3}
              </h1>
              <Link
                href={`/${lang}/snorkeling`}
                className="px-6 py-3 text-slate-100 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 bg-size-200 hover:bg-pos-0 bg-pos-100 duration-500 rounded-lg drop-shadow-lg flex items-center gap-2 group"
              >
                {cta}
                <ArrowRight
                  className="group-hover:translate-x-2 duration-300"
                  weight="bold"
                  size={18}
                />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
