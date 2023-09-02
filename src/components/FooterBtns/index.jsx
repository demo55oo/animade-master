import React from "react";
import styles from "./.module.scss";

const FooterBtns = ({ children }) => {
  return <footer className={styles.footer}>{children}</footer>;
};

export default FooterBtns;
