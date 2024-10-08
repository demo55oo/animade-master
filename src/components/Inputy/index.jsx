import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import AreaCode from "../AreaCode";
import styles from "./.module.scss";

const Inputy = ({
  type,
  placeholder,
  name,
  onChange,
  error,
  required,
  value,
  validation,
  errorMsg,
  data,
  setData,
}) => {
  const [hide, setHide] = useState(true);
  const [inputBlur, setInputBlur] = useState(false);
  const enteredValueIsValid = validation && validation(value);
  const errorInput = !enteredValueIsValid && inputBlur;

  if (type === "textarea")
    return (
  <div>
      <div className={styles.co}>{name}</div>
      <div className={styles.textarea}>
        <textarea
          className={styles.textareaInput} // Apply your textarea styles here
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          onBlur={() => {
            setInputBlur(true);
          }}
          required={required}
          value={value || ""}
        />
        {error && <p className={styles.error__message}>{error}</p>}
        {!error && errorInput && errorMsg && (
          <p className={`${styles.error__input}`}>{errorMsg}</p>
        )}
      </div>
      </div>
    );
  return (
    <div>
    <div className={styles.co}>{name}</div>
    <div className={`${styles.input} ${error ? styles.error : ""}`}>
      {type === "number" && placeholder.includes("Phone") && (
        <AreaCode setData={setData} data={data} />
      )}
      <input
        className={styles.inputField} // Apply your input styles here
        type={
          type === "password" ? (hide ? "password" : "text") : type || "text"
        }
        placeholder={required ? placeholder + "*" : placeholder}
        onChange={(e) => onChange(e)}
        onBlur={() => {
          setInputBlur(true);
        }}
        required={required}
        value={value || ""}
      />
      {error && <p className={styles.error__message}>{error}</p>}
      {!error && errorInput && errorMsg && (
        <p className={`${styles.error__input}`}>{errorMsg}</p>
      )}
      {type === "password" && (
        <button
          className={styles.show__pass}
          onClick={() => setHide((prev) => !prev)}
          type="button"
        >
          {hide ? <BiShow /> : <BiHide />}
        </button>
      )}
    </div>
    </div>
  );
};

export default Inputy;
