import React, { useState, useEffect } from "react";
import { Title } from "../";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { storage } from "../../firebase.js";
import { ref, listAll, getDownloadURL } from "firebase/storage";

import "swiper/css";
import "swiper/css/free-mode";
import styles from "./.module.scss";

const Potential = () => {
  const [nfts, setNfts] = useState([]);
  const [prints, setPrints] = useState([]);

  useEffect(() => {
    const fetchImages = async (folderName) => {
      const imageRef = ref(storage, folderName);
      let result = await listAll(imageRef);
      let urlPromises = result.items.map(imageItem => getDownloadURL(ref(storage, `${folderName}/${imageItem.name}`)));
      return Promise.all(urlPromises);
    }

    fetchImages('recentlyupdated').then(setNfts);
    fetchImages('recentlynft').then(setPrints);
  }, []);

  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <Title align="center">
          <span>Explore the Potential </span>
        </Title>
        <h4 className={styles.slider__title}>Recently Uploaded NFTs</h4>
      </div>
      <Swiper
        breakpoints={{
          450: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        spaceBetween={24}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode]}
        className={styles.slider}
      >
        {nfts.map((url, i) => (
          <SwiperSlide key={i}>
            <div className={styles.box}>
              <img src={url} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container">
        <h4 className={`${styles.slider__title} ${styles.slider__title__2}`}>
          Recently Uploaded Prints
        </h4>
      </div>
      <Swiper
        spaceBetween={24}
        freeMode={true}
        pagination={{ clickable: true }}
        breakpoints={{
          450: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        modules={[FreeMode]}
        className={styles.slider}
      >
        {prints.map((url, i) => (
          <SwiperSlide key={i}>
            <div className={styles.box}>
              <img src={url} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Potential;
