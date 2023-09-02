import React from "react";
import { Button, Title } from "..";
import Image from "../../assets/slide1.png";
import styles from "./.module.scss";

const SlideOne = () => {
  return (
    <div className={styles.slide}>
      <div className={styles.text__content}>
        <div className={styles.hero__title}>
          <Title>
            <div className={styles.title}>
              <span>
                Pay-as-you-earn pricing
                <br />
              </span>
              for projects of
              <span> any size.</span>
            </div>
          </Title>
          <p className={styles.subtitle}>
            Automate the product upload process to turbocharge
            <br />
            your latest project.
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

export default SlideOne;
