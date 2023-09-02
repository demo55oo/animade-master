import React from "react";
import { Button, FooterBtns } from "../../components";
import ProductCard from "../../components/ProductCard";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "../ChoosePlatform/.module.scss";
import productStyles from "./.module.scss";

const ChooseProdutcs = () => {
  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title page__title">
          Which products would you like to print on?
        </h3>
        <div
          className={`${productStyles.products__section} ${styles.platform__section}`}
        >
          <div className={styles.platform__header}>
            <h5 className={styles.platform__title}>
              Choose from your Printful Templates
            </h5>
            <Link to="/" className={styles.add__new}>
              <IoIosAdd className={styles.icon} />
              New Template
            </Link>
          </div>
          <div className={styles.platform__list}>
            {new Array(3).fill("").map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </div>
      <FooterBtns>
        <div>
          <Button to="/add-product-info">Add Product Information</Button>
        </div>
      </FooterBtns>
    </>
  );
};

export default ChooseProdutcs;
