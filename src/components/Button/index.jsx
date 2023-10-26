import React from "react";
import { Link } from "react-router-dom";
import styles from "./.module.scss";

const Button = ({ children, to, href, color, type, onClick, loading, disabled }) => {
  if (type === "button" || type === "submit") {
    return (
      <button
        type={type || ""}
        onClick={onClick ? () => onClick() : () => {}}
        disabled={loading || disabled || false}
        className={`${styles.button} ${
          color === "purple" ? styles.purple : color === "gray" ? styles.gray : ""
        }`}
      >
        {loading ? <span className="spinner"></span> : children}
      </button>
    );
  } else if (to) {
    return (
      <Link
        to={to}
        className={`${styles.button} ${
          color === "purple" ? styles.purple : color === "gray" ? styles.gray : ""
        }`}
      >
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={`${styles.button} ${
        color === "purple" ? styles.purple : color === "gray" ? styles.gray : ""
      }`}>
        {children}
      </a>
    );
  }
};

export default Button;
