import React from "react";
import Title from "../Title";
import styles from "./.module.scss";

const Modal = ({ children, title, setState, buttons }) => {
  return (
    <div className="popup">
      <div className="overlay" onClick={() => setState(false)}></div>
      <div className="card">
        <div className={`${styles.popup__card} popup__card`}>
          <Title align="center">
            <span>{title}</span>
          </Title>
          <div className={styles.child__body}>{children}</div>
          {buttons}
        </div>
      </div>
    </div>
  );
};

export default Modal;
