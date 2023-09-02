import React from "react";
import Input from "../Input";
import HTMLString from "react-html-string";
import styles from "./.module.scss";
import Button from "../Button";

const BaseForm = ({ fields, text, extraField }) => {
  return (
    <div className={styles.form}>
      {fields.map((input, i) => (
        <div key={i} className={styles.input}>
          <label>{input.label}</label>
          <Input type={input.type} placeholder={input.placeholder} />
        </div>
      ))}
      <div className={styles.submit}>
        <p className={styles.text}>{<HTMLString html={text} />}</p>
        <Button type="button" color="purple">
          Generate Content
        </Button>
      </div>
      <div className={styles.input}>
        <label>{extraField.label}</label>
        <Input type={extraField.type} placeholder={extraField.placeholder} />
      </div>
    </div>
  );
};

export default BaseForm;
