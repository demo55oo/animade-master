import React, { useState } from "react";
import { RocketIcon } from "../../icons";
import { BsPlusLg } from "react-icons/bs";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import styles from "./.module.scss";

const Drops = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const drops = [
    {
      id: "1",
      name: "Crypto Monkeys in space",
      products: 324,
    },
    {
      id: "2",
      name: "Crypto Monkeys in space",
      products: 324,
    },
    {
      id: "3",
      name: "Crypto Monkeys in space",
      upload: true,
    },
    {
      id: "4",
      name: "Crypto Monkeys in space",
      products: 324,
    },
    {
      id: "5",
      name: "Crypto Monkeys in space",
      attention: true,
    },
    {
      id: "6",
      name: "Crypto Monkeys in space",
      products: 324,
    },
    {
      id: "7",
      name: "Crypto Monkeys in space",
      products: 324,
    },
    {
      id: "8",
      name: "Crypto Monkeys in space",
      products: 324,
    },
    {
      id: "9",
      name: "Crypto Monkeys in space",
      products: 324,
    },
  ];

  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <h4 className={styles.title}>Drop</h4>
          <div className={styles.rigth}>
            <span>Free</span>
            <span>
              30 designs <RocketIcon />
            </span>
          </div>
        </div>
        <div className={styles.content}>
          {drops.map((drop) => (
            <Link to={drop.id} className={styles.box}>
              <div className={styles.image}></div>
              <h4 className={styles.name}>{drop.name}</h4>
              {drop.products && (
                <span className={styles.products}>
                  {drop.products} Products
                </span>
              )}
              {drop.upload && (
                <span className={styles.upload}>
                  1 upload <span>178 Queued</span>
                </span>
              )}
              {drop.attention && (
                <span className={styles.attention}>
                  Requires Your Attention
                </span>
              )}
            </Link>
          ))}
          <div
            className={styles.add__block}
            onClick={() => {
              setOpenPopup(true);
            }}
          >
            <BsPlusLg className={styles.icon} />
          </div>
        </div>
        <div className={styles.header}>
          <h4 className={`${styles.title} ${styles.complete}`}>Complete</h4>
        </div>
        <div className={styles.content}>
          {drops.map((drop) => (
            <Link to={`complete/${drop.id}`} className={styles.box}>
              <div className={styles.image}></div>
              <h4 className={styles.name}>{drop.name}</h4>
              {drop.products && (
                <span className={styles.products}>
                  {drop.products} Products
                </span>
              )}
              {drop.upload && (
                <span className={styles.upload}>
                  1 upload <span>178 Queued</span>
                </span>
              )}
              {drop.attention && (
                <span className={styles.attention}>
                  Requires Your Attention
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
      {openPopup && (
        <Modal
          setState={setOpenPopup}
          title="Name your Drop"
          buttons={
            <div className="same-line">
              <Button type="button">Create Drop</Button>

              <Button
                onClick={() => setOpenPopup(false)}
                type="button"
                color="gray"
              >
                Cancel
              </Button>
            </div>
          }
        >
          <div className={styles.input}>
            <label>Drop Name</label>
            <Input type="text" placeholder="Your Drop" />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Drops;
