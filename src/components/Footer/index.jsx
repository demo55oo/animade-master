import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import styles from "./.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.footer__logo}>
        <img src={Logo} alt="logo" />
      </Link>
      <Link to="/privacy">Legal</Link>
    </footer>
  );
};

export default Footer;
