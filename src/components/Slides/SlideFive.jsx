import React from "react";
import { Button, Title } from "..";
import Image from "../../assets/slide2.png";
import styles from "./.module.scss";

const SlideFive = () => {
  return (
    <div className={`${styles.slide} ${styles.slide__5}`}>
      <div className={styles.text__content}>
        <div className={styles.hero__title}>
          <Title>
            <div className={styles.title}>
              <span>Streamline AI Images</span> to your
              <br /> <span>E-Commerce</span> and <span>NFT Platforms</span>
            </div>
          </Title>
          <p className={styles.subtitle}>
            Our innovative platform seamlessly integrates state-of-the-art AI
            image generation to your NFT and print on demand channels.
          </p>
          <p className={styles.subtitle}>
            Harness the power of AI to generate high-quality images quickly and
            easily, configure your listing, and upload - all in one place!
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

export default SlideFive;
