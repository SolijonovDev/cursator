import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./tests.module.scss";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

import { Navigation } from "swiper";
import { Item } from "./Item";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const SwiperCom = () => {

  return (
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {arr.map((v) => (
          <SwiperSlide key={v}>
            <Item  />
          </SwiperSlide>
        ))}
      </Swiper>
  );
};
