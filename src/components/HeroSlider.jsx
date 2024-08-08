import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  bag_brickred,
  bag_brown,
  bag_cream,
  bag_flowerbag,
  bag_girlie,
  bag_louis,
  bag_white,
} from "../assets/images";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        slidesPerview={1}
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
            alt="bag_flowerbag"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <img
            src={bag_cream}
            alt="bag_cream"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <img
            src={bag_white}
            alt="bag_white"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-ful">
          <img
            src={bag_louis}
            alt="bag_louis"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <img
            src={bag_brickred}
            alt="bag_brickred"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
