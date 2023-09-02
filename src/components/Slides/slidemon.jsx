import React from "react";
import { Button, Title } from "..";
import Video from "../../assets/slide1.mp4";  // Import the video file instead of the image file
import styles from "./.module.scss";

const SlideOnee = () => {
  return (
    <div className={styles.slide}>
      <div className={styles.text__content}>
        <div className={styles.hero__title}>
          <Title>
            <div className={styles.title}>
              <span>
              Learn how to make AI Products 
              <br />
              </span>
              which power your Print-on-demand
              <span>  business or NFT Project.  </span>
            </div>
          </Title>
          <p className={styles.subtitle}>
            Automate the product upload process to turbocharge
            <br />
            your latest project.
          </p>
        </div>
        <Button  to="/single-input">Try with 30 FREE designs monthly </Button>
      </div>
      <div className={styles.image__content}>
        <video src={Video} autoPlay muted loop className={styles.image__content}>  {/* Use the video element instead of the img element */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SlideOnee;
