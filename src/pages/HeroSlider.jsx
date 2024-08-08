import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { bag_brickred, bag_cream, bag_flowerbag, bag_louis, bag_paperbag, bag_white } from "../assets/images";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        direction="horizontal"
        modules={[Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide className="relative w-full h-full">
          <img
            src={bag_flowerbag}
            alt="bag_flowebag"
            className="absolute top-0 left-0 w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <img
            src={bag_paperbag}
            alt="bag_flowebag"
            className="absolute top-0 left-0 w-full object-cover"
          />
        </SwiperSlide>
        alt="bag_flowebag"
        <SwiperSlide className="relative w-full h-full">
          <img
            src={bag_brickred}
            alt="bag_flowebag"
            className="absolute top-0 left-0 w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <img
            src={bag_white}
            alt="bag_flowebag"
            className="absolute top-0 left-0 w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
