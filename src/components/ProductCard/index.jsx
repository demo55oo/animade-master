import React from "react";
import { Link } from "react-router-dom";
import styles from "./.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.box}>mockup</div>
      <div className={`${styles.box} ${styles.box__info}`}>
        <div className={styles.template__name}>Product Template Name</div>
        <div className={styles.product__name}>Product Name </div>
        <div className={styles.product__details}>
          <span>3 Colours</span>
          <span>3 Colours4 Sizes</span>
        </div>
      </div>
      <div className={styles.box}>
        <Link to="/">View</Link>
      </div>
    </div>
  );
};

export default ProductCard;
