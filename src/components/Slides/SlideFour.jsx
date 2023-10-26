import React from "react";
import { Button, Title } from "..";
import Image from "../../assets/slide1.png";
import styles from "./.module.scss";

const SlideFour = () => {
  return (
    
    <div className={styles.slide}>
      <div className={styles.text__content}>
        <div className={styles.hero__title}>
          <div  >
          <button className={styles.button}>  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" style={{ marginRight: '10px' }}>
  <g clip-path="url(#clip0_151_4095)">
    <rect x="30" y="30" width="30" height="30" rx="15" transform="rotate(180 30 30)" fill="white"/>
    <path d="M20.25 15L9.75 15" stroke="#213851" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.25 15L15.75 10.5" stroke="#213851" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.25 15L15.75 19.5" stroke="#213851" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_151_4095">
      <rect x="30" y="30" width="30" height="30" rx="15" transform="rotate(180 30 30)" fill="white"/>
    </clipPath>
  </defs>
</svg>Learn how to make AI generated designs for your store</button>
         
</div>
          <Title>
            <div className={styles.title}>
            <p>
              Products which power your  <span>
              E-Commerce Business              </span>
                <br />
              </p>
            
            </div>
          </Title>
          <p className={styles.subtitle}>
          Learn how to make money from AI designs in this step-by-step guide to setting up your account and design creation.
            <br />
          </p>
        </div>
        <Button  to="/single-input">Try with 30 FREE designs monthly</Button>
      </div>
      <div className={styles.image__content}>
        {/* <img src={Image} alt="slide__image" /> */}
      </div>
    </div>
  );
};

export default SlideFour;
