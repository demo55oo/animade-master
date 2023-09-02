import React, { useState } from "react";
import Image from "../../assets/Rectangle 4.png";
import { Modal, Button } from "../";
import { BsChevronDown } from "react-icons/bs";
import styles from "./.module.scss";
import { Link } from "react-router-dom";

const Accordions = ({ item, type }) => {
  const [open, setOpen] = useState(false);
  const [rempveAll, setRemoveAll] = useState(false);
  const [rempve, setRemove] = useState(false);
  const [upload, setUpload] = useState(false);

  return (
    <>
      <div className={styles.accordion}>
        <div className={styles.accordion__header}>
          <div className={`${styles.base__info} ${styles.cell}`}>
            <img src={Image} alt="" className={styles.image} />
            <span className={styles.name}>{item?.name}</span>
          </div>
          <span className={styles.cell}>
            {item?.products?.length} <span> Products</span>
          </span>
          {type === "complete" && (
            <>
              <span className={styles.cell}>
                {item?.products?.length} <span> Marketplaces</span>
              </span>
              <span className={`${styles.cell} ${styles.green}`}>
                <button>Design Finances</button>
              </span>
            </>
          )}
          {type !== "complete" && (
            <>
              <span className={`${styles.cell} ${styles.gray}`}>
                <button onClick={() => setRemoveAll(true)}>Remove All</button>
              </span>
              <span className={`${styles.cell} ${styles.purple}`}>
                <button>Edit All</button>
              </span>
              <span className={`${styles.cell} ${styles.red}`}>
                <button>Upload All</button>
              </span>
            </>
          )}
          <span
            className={`${styles.drop__icon} ${open ? styles.open : ""}`}
            onClick={() => setOpen((prev) => !prev)}
          >
            <BsChevronDown />
          </span>
        </div>
        {open && (
          <div className={styles.acc__list}>
            {item?.products.map((product, i) => (
              <div className={styles.accordion__header} key={i}>
                <div className={`${styles.base__info} ${styles.cell}`}>
                  <img src={Image} alt="" className={styles.image} />
                  <span className={styles.name}>{product?.name}</span>
                </div>
                {type !== "complete" && (
                  <>
                    <span className={styles.cell}>
                      {product.brand.map((b, i) => (
                        <span key={i}>{b}</span>
                      ))}
                    </span>
                    <span className={`${styles.cell} ${styles.gray}`}>
                      <button onClick={() => setRemove(true)}>Remove</button>
                    </span>
                    <span className={`${styles.cell} ${styles.purple}`}>
                      <button>Edit</button>
                    </span>
                    <span className={`${styles.cell} ${styles.red}`}>
                      <button onClick={() => setUpload(true)}>Upload</button>
                    </span>
                  </>
                )}
                {type === "complete" && (
                  <>
                    <span className={`${styles.cell} ${styles.complete}`}>
                      <span className={styles.barns}>
                        {product.brand.map((b, i) => (
                          <span key={i}>{b}</span>
                        ))}
                      </span>
                      <Link to="/">View</Link>
                    </span>
                    <span className={`${styles.cell} ${styles.green}`}>
                      <button>Product Finances</button>
                    </span>
                  </>
                )}
                <span className={`${styles.drop__icon}`}></span>
              </div>
            ))}
          </div>
        )}
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
      {upload && (
        <Modal
          setState={setUpload}
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

export default Accordions;
