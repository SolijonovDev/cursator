import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Item } from "./Item";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const SwiperCom=()=> {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        slidesPerView={1.2}
        navigation={true}
        spaceBetween={53}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {arr.map((v) => (
          <SwiperSlide key={v}>
            <Item />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
