import React from "react";
import { Link } from "react-router-dom";
import { Button, FooterBtns, PlatFormCard } from "../../components";
import { IoIosAdd } from "react-icons/io";
import styles from "./.module.scss";

const ChoosePlatform = () => {
  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title page__title">
          Where would you like to upload these designs?
        </h3>
        <div className={styles.platform__section}>
          <div className={styles.platform__header}>
            <h5 className={styles.platform__title}>OpenSea - NFT</h5>
            <Link to="/" className={styles.add__new}>
              <IoIosAdd className={styles.icon} />
              Link New Account
            </Link>
          </div>
          <div className={styles.platform__list}>
            {new Array(3).fill("").map((_, i) => (
              <PlatFormCard key={i} type="OpenSea" />
            ))}
          </div>
        </div>
        <div className={styles.platform__section}>
          <div className={styles.platform__header}>
            <h5 className={styles.platform__title}>
              Printful Store - Print On Demand
            </h5>
            <Link to="/" className={styles.add__new}>
              <IoIosAdd className={styles.icon} />
              Link New Account
            </Link>
          </div>
          <div className={styles.platform__list}>
            {new Array(3).fill("").map((_, i) => (
              <PlatFormCard key={i} type="Printful" />
            ))}
          </div>
        </div>
      </div>
      <FooterBtns>
        <div>
          <Button to="/choose-products">Choose Products</Button>
        </div>
      </FooterBtns>
    </>
  );
};

export default ChoosePlatform;
