"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CSSProperties } from "react";
import BG1 from "../../../public/bg1.jpg";

export default function HeroSection() {
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
            <div
              className="absolute inset-0 -z-10 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${BG1.src})` }}
            />
            <div className="">
              <h1>Hello</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center items-center min-h-screen">
            <div
              className="absolute inset-0 -z-10 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${BG1.src})` }}
            />
            <div className="">
              <h1>Hello</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center items-center min-h-screen">
            <div
              className="absolute inset-0 -z-10 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${BG1.src})` }}
            />
            <div className="">
              <h1>Hello</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center items-center min-h-screen">
            <div
              className="absolute inset-0 -z-10 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${BG1.src})` }}
            />
            <div className="">
              <h1>Hello</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
