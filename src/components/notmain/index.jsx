import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  SlideFive,
  SlideFour,
  SlideOne,
  SliderBtns,
  SlideThree,
  SlideTwo,Slidp
} from "..";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./.module.scss";

const Notmain = () => {
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
      {/* <SliderBtns /> */}
      <SwiperSlide>
        <div className={`${styles.slide__container}`}>
          <Slidp />
        </div>
    {window.innerWidth > 990 ? (
      <ul className={styles.hdr}>

        <li className={styles.hdritem}>

              <a href="/pricing">
            Pricing
              </a>
            </li>
            <li className={styles.hdritem}>
              <a href="/How-it-works">
            How it works
              </a>
            </li>
        {/* <li className={styles.hdritem}>
              <a href="google.com">
            About us
              </a>
            </li> */}
            <li className={styles.hdritem}>
            <a href="/login">
            login
              </a>
            </li>
            <li className={styles.hdritembtn}> 
              <a href="/register">
            Signup
              </a>
            </li>
            </ul>
        ) : ( <p></p>
                    )}      

      </SwiperSlide>
      {/* <SwiperSlide>
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
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Notmain;
