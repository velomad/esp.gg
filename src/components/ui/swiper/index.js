"use client";
import React from "react";
import Image from "next/image";

import { Swiper as SwiperCore, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";

const Swiper = ({ slides, handleSlideChange }) => {
  return (
    <div className="w-full">
      <SwiperCore
        onSlideChange={handleSlideChange}
        className="h-28 w-full"
        direction="vertical"
        loop={true}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: [0, "-120%", -500], // Move previous slide up
          },
          next: {
            translate: [0, "120%", -500], // Move next slide down
          },
        }}
        autoplay={{
          delay: 2000,
          reverseDirection: false,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, EffectCreative]}
      >
        {slides.map((slide, idx) => {
          return (
            <SwiperSlide key={idx} className="flex items-center justify-center">
              <div className="flex items-center justify-center h-full">
                <Image
                  src={slide.imageUrl}
                  height={100}
                  width={100}
                  alt="slide image"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </SwiperCore>
    </div>
  );
};

export default Swiper;
