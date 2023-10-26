import React, { useState } from "react";
import Image from "../../assets/Rectangle 4.png";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Accordion, Cell } from "../../components";
import { BsChevronDown } from "react-icons/bs";
import titleClasses from "../Settings/.module.scss";
import styles from "../SingleDrop/.module.scss";

const SingleComplete = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const drop = {
    id: 1,
    name: "Giant Design",
    products: [
      {
        id: 1,
        name: "NFT Listing Name",
        brand: ["Opensea"],
      },
      {
        id: 2,
        name: "Product Listing Name",
        brand: ["Shopify"],
      },
      {
        id: 3,
        name: "Product Listing Name",
        brand: ["Opensea", "Etsy"],
      },
    ],
  };
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <button className={styles.back__btn} onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </button>
        <h2 className={titleClasses.title__header}>
          <Link to="/drops">Drops</Link> <IoIosArrowBack />
          <span>World of Giants</span>
        </h2>
      </div>
      <div className={styles.content}>
        <Accordion>
          <div className={styles.accordion__row}>
            <Cell flex="2">
              <div className={styles.base__info}>
                <img src={Image} alt="" className={styles.image} />
                <span className={styles.name}>{drop?.name}</span>
              </div>
            </Cell>
            <Cell flex="1.2">
              {drop?.products?.length} <span> Marketplaces</span>
            </Cell>
            <Cell flex="1">
              {drop?.products?.length} <span> Products</span>
            </Cell>
            <Cell flex="1.2">
              <Link to="/financial" className={styles.green}>
                Design Finances
              </Link>
            </Cell>
            <span
              className={`${styles.drop__icon} ${open ? styles.open : ""}`}
              onClick={() => setOpen((prev) => !prev)}
            >
              <BsChevronDown />
            </span>
          </div>
          {open && (
            <div className={styles.accordion__body}>
              {drop?.products.map((product, i) => (
                <div className={styles.accordion__row} key={i}>
                  <Cell flex="2">
                    <div className={styles.base__info}>
                      <img src={Image} alt="" className={styles.image} />
                      <span className={styles.name}>{product?.name}</span>
                    </div>
                  </Cell>
                  <Cell flex="1.1" noborder={true}>
                    {product.brand.map((b, i) => (
                      <span
                        key={i}
                        className={`${styles.barnd} ${styles.box__barnd}`}
                      >
                        {b}
                      </span>
                    ))}
                  </Cell>
                  <Cell flex="1.1">
                    <button className={styles.purple}>View</button>
                  </Cell>
                  <Cell flex="1.2">
                    <button className={styles.green}>Product Finances</button>
                  </Cell>
                  <span className={`${styles.drop__icon}`}></span>
                </div>
              ))}
            </div>
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default SingleComplete;
