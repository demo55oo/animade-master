import React from "react";
import { Button, Title } from "..";
import Image from "../../assets/slide4.png";
import styles from "./.module.scss";

const SlideFour = () => {
  return (
    <div className={`${styles.slide} ${styles.slide__}`}>
      <div className={styles.text__content}>
        <div className={styles.hero__title}>
          <Title>
            <div className={styles.title}>
              <span>Unleash the power</span> of
              <br />
              product <span> automation</span>
            </div>
          </Title>
          <p className={styles.subtitle}>
            Automate the product upload process to turbocharge your e-commerce
            business, getting your products in front of buyers{" "}
            <span>faster</span>.
          </p>
          <p className={styles.subtitle}>
            Configure your products, and we will handle uploads directly to
            <span> Printful</span>, who fulfil orders and shipping, supporting a
            wide range of<span> e-commerce</span>
            <span> platforms</span>.
          </p>
        </div>
        <Button  to="/single-input">Get Started for Free</Button>
      </div>
      <div className={styles.image__content}>
        <img src={Image} alt="slide__image" />
      </div>
    </div>
  );
};

export default SlideFour;
