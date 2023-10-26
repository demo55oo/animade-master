import React from "react";
import styles from "./.module.scss";

const SwitchButton = ({ state, setState }) => {
  return (
    <button
      className={`${styles.button} ${state ? "" : styles.active}`}
      onClick={() => setState((prev) => !prev)}
    >
      <span className={`${styles.bullet}`}></span>
    </button>
  );
};

export default SwitchButton;
