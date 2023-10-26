import React from "react";
import { Button, Title } from "..";
import Image from "../../assets/slide2.png";
import styles from "./.module.scss";

const SlideTwo = () => {
  return (
    
    <div className={styles.slide}>
      <div className={styles.text__content}>
        <div className={styles.hero__title}>
          <Title>
            <div className={styles.title}>
              Become a <span> pioneer </span> of the
              <br />
              <span>AI Art Community</span>
            </div>
          </Title>
          <p className={styles.subtitle}>
            Join the AI art revolution with Animade - harness cutting-edge
            technology to create stunning, unique works of art and establish
            yourself as a leader in the emerging AI art community!
          </p>
        </div>
        <Button to="/single-input">Get Started for Free</Button>
      </div>
      <div className={styles.image__content}>
        <img src={Image} alt="slide__image" />
      </div>
    </div>
  );
};

export default SlideTwo;
