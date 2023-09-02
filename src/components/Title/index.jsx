import React from "react";
import styles from "./.module.scss";

const Title = ({ children, align }) => {
  return (
    <h2
      className={`${styles.title} ${align === "center" ? styles.center : ""}`}
    >
      {children}
    </h2>
  );
};

export default Title;
