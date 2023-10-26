import React from "react";
import { Button, Title } from "..";
import Image from "../../assets/imdr.png";
import styles from "./.module.scss";
import Image1 from "../../assets/imdg.png";

const Slidpr = () => {
  return (
    <div className={styles.slide}>
      <div className={styles.text__content}>
        <div className={styles.hero__title}>
          <Title>
            <div className={styles.title}>
                Meet The Animade Team
            </div>
          </Title>
          {/* <p className={styles.subtitle}>
          Creating and selling digital art, providing artists with the tools and resources they need to thrive in a rapidly-evolving digital landscape.
          </p> */}
        </div>
      </div>
      <div className={styles.last}>
      <div className={styles.image__content}>
       <img src={Image1} alt="slide__image" />
       <p className={styles.title}>Luca Bertuzzi</p>
       <p className={styles.subtitle}>
       Founder & Technical Director
          </p>
      </div> 
      <div className={styles.image__content}>
       <img src={Image} alt="slide__image" />
       <p className={styles.title}>Benjamin Ellis</p>
       <p className={styles.subtitle}>
       Founder & Managing Director
       </p>
      </div> 
     
      </div>
    </div>
  );
};

export default Slidpr;
