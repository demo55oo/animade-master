import React from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { useSwiper } from "swiper/react";
import styles from "./.module.scss";

const SliderBtns = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.slider__btns}>
      <button className={styles.btn} onClick={() => swiper.slidePrev()}>
        <BsArrowLeftShort />
      </button>
      <button className={styles.btn} onClick={() => swiper.slideNext()}>
        <BsArrowRightShort />
        {/* <MdOutlineNavigateNext /> */}
      </button>
    </div>
  );
};

export default SliderBtns;
