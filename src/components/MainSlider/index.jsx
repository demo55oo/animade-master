import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  SlideFive,
  SlideFour,
  SlideOne,
  SliderBtns,
  SlideThree,
  SlideTwo,
} from "../";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./.module.scss";

const MainSlider = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      spaceBetween={80}
      speed={600}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      // navigation={true}
      modules={[Pagination, Autoplay, Navigation]}
      className={`${styles.hero__slider} hero__slider`}
    >
      <SliderBtns />
      <SwiperSlide>
        <div className={`${styles.slide__container}`}>
          <SlideOne />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.slide__container}`}>
          <SlideTwo />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.slide__container}`}>
          <SlideThree />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.slide__container}`}>
          <SlideFour />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.slide__container}`}>
          <SlideFive />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
