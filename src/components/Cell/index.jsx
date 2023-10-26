import React from "react";
import styles from "./.module.scss";

const Cell = ({ children, flex, noborder, size, finicial, type }) => {
  return (
    <div
      style={{ flex: flex }}
      className={`${styles.cell} ${noborder ? styles.noborder : ""} ${
        size === "small" ? styles.small : ""
      } ${finicial ? styles.finicial : ""} ${
        type === "head" ? styles.head : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Cell;
