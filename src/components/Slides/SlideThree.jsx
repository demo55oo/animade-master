import React from "react";
import { Button, Title } from "..";
import Image from "../../assets/slide2.png";
import styles from "./.module.scss";

const SlideThree = () => {
  return (
    <div className={styles.sliderk}>
      <div className={styles.text__content}>
        <div className={styles.hero__title}>
          <Title>
            <div className={styles.title}>
               Our platform is <span>Designed</span><br /> to simplify the <span>process</span>

            </div>
          </Title>
          <p className={styles.subtitle}>
          Creating and selling digital art, providing artists with the tools and resources they need to thrive in a rapidly-evolving digital landscape.
          </p>
        </div>
      </div>
      <div className={styles.image__content}>
        <img src={Image} alt="slide__image" />
      </div>
    </div>
  );
};

export default SlideThree;
