import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";
import styles from "./CheckBox.module.scss";

const CheckBox = ({ label, value, selectedScene, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
    onChange(value);
  };

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={value}
        value={value}
        checked={value === selectedScene} // Set the checkbox's checked state based on the selected scene
        onChange={handleCheckBoxChange}
      />
      <label htmlFor={value} className={styles.checkbox__label}>
        {/* <BsCheck className={styles.icon} /> */}
       </label>
      <label htmlFor={value} className={styles.label__text}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
