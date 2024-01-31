"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CSSProperties } from "react";

export default function HeroSection() {
  return (
    <main>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        style={{ "--swiper-pagination-color": "#F8FAFC" } as CSSProperties}
      >
        <SwiperSlide>
          <div className="relative flex justify-center items-center min-h-screen">
            <div />
            <div>
              <h1>Hello</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
