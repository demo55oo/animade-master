import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Title } from "../../components";
import styles from "./.module.scss";

const VerifyNumber = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.page__content}>
          <Title align="center">
            <div className={styles.main__title}>
              <span>One last step</span>
            </div>
            <span>Verify your Phone Number</span>
          </Title>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <p className={styles.text}>
              We sent a code to a phone number ending in 7765
            </p>
            <div className={styles.code__container}>
              <div className={styles.code__inputs}>
                <input type="text" pattern="\d*" maxLength="1" />
                <input type="text" pattern="\d*" maxLength="1" />
                <input type="text" pattern="\d*" maxLength="1" />
              </div>
              <div className={styles.code__inputs}>
                <input type="text" pattern="\d*" maxLength="1" />
                <input type="text" pattern="\d*" maxLength="1" />
                <input type="text" pattern="\d*" maxLength="1" />
              </div>
            </div>
            <button className={styles.text__}>
              Not working?
              <span className={styles.red}>Request a new code (34)</span>
            </button>
            <button
              type="button"
              className={`${styles.login__btn} ${styles.trouble__btn}`}
            >
              I’m having trouble
            </button>
            <button type="submit" className={styles.login__btn}>
              Submit
              <AiOutlineLogin className={styles.login__icon} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyNumber;
