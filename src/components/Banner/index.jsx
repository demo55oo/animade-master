import React from "react";
import { Icon6, Icon7 } from "../../icons";
import styles from "./.module.scss";

const Banner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__content}>
        <div className={styles.box}>
          <Icon6 />
          <p className={`main__text ${styles.text}`}>
            <span className={styles.bold}>Design, upload</span> and
            <span className={styles.bold}> Mint 100s of NFTs </span>
            in minutes to <span>Opensea</span> using AI.
          </p>
        </div>
        <div className={styles.box}>
          <Icon7 />
          <p className={`main__text ${styles.text}`}>
            <span className={styles.bold}>
              Design, upload, print and fulfil orders
            </span>{" "}
            to your online <span className={styles.bold}> stores</span> using
            <span className={styles.bold}> our AI with</span>{" "}
            <span>Printful</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
