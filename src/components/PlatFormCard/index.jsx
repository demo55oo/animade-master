import React from "react";
import styles from "./.module.scss";

const PlatFormCard = ({ type }) => {
  return (
    <div
      className={`${styles.card} ${
        type === "Printful" ? styles.Printful : ""
      } `}
    >
      <span className={styles.name}>Profile Name</span>
      {type === "Printful" && <span className={styles.type}>Etsy</span>}
      <span className={styles.items__num}>12 Items Created</span>
    </div>
  );
};

export default PlatFormCard;
