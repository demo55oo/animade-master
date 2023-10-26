/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoCaretForwardOutline } from "react-icons/io5";
import styles from "./.module.scss";

const PlanCard = ({
  title,
  subtitle,
  price,
  extra,
  designs,
  image,
  Professional,
  free,
  link,
}) => {
  return (
    <div className={styles.plan}>
      <div className={`${styles.card}`}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.price}>
          {free ? "" : "£"}
          {price}
        </span>
        <span className={styles.per}>per month</span>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <div className={styles.de}>{subtitle}</div>
        <p className={styles.subtitle}>What’s included:</p>
        <div className={styles.iconContainer}>
          <div className={styles.ico}></div>
          <div className={styles.toto}>{extra} Extra designs</div>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.ico}></div>
          <div className={styles.toto}>{designs} Designs Monthly</div>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.ico}></div>
          <div className={styles.toto}>24/7 Customer Support</div>
        </div>
        {/* {Professional && (
          <h5 className={styles.pro__designs}>
            Unlimited <br />
            <span>Designs</span>
          </h5>
        )}
        {!Professional && <h5 className={styles.designs}>{designs} Designs</h5>}
        {!Professional && <span className={styles.monthly}>Monthly</span>}
        {!Professional && <span className={styles.extra}>({extra} Extra)</span>} */}
       
      </div>
      {free ? (
        <a
          href="#"
          target="_blank"
          style={{ opacity: 0, pointerEvents: "none" }}
          className={`${styles.choose__btn} ${Professional ? styles.pro : ""}`}
        >
          Choose Plan <IoCaretForwardOutline />
        </a>
      ) : (
        <a
          href={link}
          target="_blank"
          className={`${styles.choose__btn}`}
          rel="noreferrer"
        >
          Choose Plan <IoCaretForwardOutline />
        </a>
      )}
    </div>
  );
};

export default PlanCard;
