import React from "react";
import styles from "./.module.scss";

const Accordion = ({ children, noborderTop }) => {
  return (
    <div
      className={`${styles.accordion} ${
        noborderTop ? styles.no__border__top : ""
      }`}
    >
      <div className={styles.accordion__header}>{children}</div>
    </div>
  );
};

export default Accordion;
