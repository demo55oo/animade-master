import React, { useState } from "react";
import Image from "../../assets/Rectangle 4.png";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Accordion, Button, Cell, Modal } from "../../components";
import { BsChevronDown } from "react-icons/bs";
import titleClasses from "../Settings/.module.scss";
import styles from "./.module.scss";

const SingleDrop = () => {
  const navigate = useNavigate();
  const [rempveAll, setRemoveAll] = useState(false);
  const [rempve, setRemove] = useState(false);
  const [uploadAll, setUploadAll] = useState(false);
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
    <>
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
              <Cell flex="3">
                <div className={styles.base__info}>
                  <img src={Image} alt="" className={styles.image} />
                  <span className={styles.name}>{drop?.name}</span>
                </div>
              </Cell>
              <Cell flex="1">
                {drop?.products?.length} <span> Products</span>
              </Cell>
              <Cell flex="1">
                <button
                  onClick={() => setRemoveAll(true)}
                  className={styles.gray}
                >
                  Remove All
                </button>
              </Cell>
              <Cell flex="1">
                <button className={styles.purple}>Edit All</button>
              </Cell>
              <Cell flex="1">
                <button
                  className={styles.red}
                  onClick={() => setUploadAll(true)}
                >
                  Upload All
                </button>
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
                    <Cell flex="3">
                      <div className={styles.base__info}>
                        <img src={Image} alt="" className={styles.image} />
                        <span className={styles.name}>{product?.name}</span>
                      </div>
                    </Cell>
                    <Cell flex="1">
                      {product.brand.map((b, i) => (
                        <span key={i} className={styles.barnd}>
                          {b}
                        </span>
                      ))}
                    </Cell>
                    <Cell flex="1">
                      <button
                        className={styles.gray}
                        onClick={() => setRemove(true)}
                      >
                        Remove
                      </button>
                    </Cell>
                    <Cell flex="1">
                      <button className={styles.purple}>Edit</button>
                    </Cell>
                    <Cell flex="1">
                      <button className={styles.red}>Upload</button>
                    </Cell>
                    <span className={`${styles.drop__icon}`}></span>
                  </div>
                ))}
              </div>
            )}
          </Accordion>
        </div>
      </div>
      {rempveAll && (
        <Modal
          setState={setRemoveAll}
          title="Confirm Remove All"
          buttons={
            <div className={styles.btns}>
              <Button type="button">Go Back</Button>
              <Button type="button">Remove Products</Button>
            </div>
          }
        >
          <div className={styles.desc}>
            <p>
              Are you sure you want to remove these 8 Products from your{" "}
              <span>World of Giants</span> drop?
            </p>
            <p>
              You can always re-create products with these designs when you are
              ready from <span>your profile</span>.
            </p>
          </div>
        </Modal>
      )}
      {rempve && (
        <Modal
          setState={setRemove}
          title="Confirm Delete"
          buttons={
            <div className={styles.btns}>
              <Button type="button">Go Back</Button>
              <Button type="button">Yes - Delete Drop</Button>
            </div>
          }
        >
          <div className={styles.desc}>
            <p>
              Are you sure you want to delete your <span>World of Giants </span>
              Drop?
            </p>
          </div>
        </Modal>
      )}
      {uploadAll && (
        <Modal
          setState={setUploadAll}
          title="Confirm Upload"
          buttons={
            <div className={styles.btns}>
              <Button type="button">Go Back</Button>
              <Button type="button">Start Upload</Button>
            </div>
          }
        >
          <div className={styles.desc}>
            <p>
              Are you ready to upload <span>135 Products</span> from
              <span> World Of Giants</span>?
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SingleDrop;
