import React from "react";
import { MainSlider } from "../";
import styles from "./.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero__section}>
      <MainSlider />
    </section>
  );
};

export default Hero;
