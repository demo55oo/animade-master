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
              Turn your dreams into                 <br />
              </span>
              tangible products
              <span>  using AI</span>
            </div>
          </Title>
          <p className={styles.subtitle}>
          Our innovative platform seamlessly integrates the latest AI image generation directly to your E-Commerce channels.

Harness the power of AI to generate high-quality images quickly and easily, configure your listing, and upload to your store - All in one place, with no upfront costs
            <br />
          </p>
        </div>
        <Button  to="/single-input">Start Creating for Free</Button>
      </div>
      <div className={styles.image__content}>
      {window.innerWidth <= 990 ? (  
  <img
  src={Image}
  alt="slide__image"
  style={{
    paddingTop: "51px", marginBottom: "-92px", width: "341px"
    // Add more styles here if needed
  }}
/>
        ) : (
          <img src={Image} alt="slide__image" />
          )}  
      </div>
    </div>
  );
};

export default SlideOne;
