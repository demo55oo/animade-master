import React from "react";
import { Button, HeaderSettings } from "../../components";
import { PaymentIcon } from "../../icons";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import titleClasses from "../Settings/.module.scss";
import styles from "./.module.scss";

const Payment = () => {
  const title = (
    <h5 className={titleClasses.title__header}>
      <span>
        <Link to="/settings">Settings </Link>
      </span>
      <IoIosArrowBack /> Payment & Billing
    </h5>
  );

  const accounts = [
    {
      id: "1",
      date: "14/05/23",
      price: 20.84,
    },
    {
      id: "2",
      date: "14/05/23",
      price: 20.84,
    },
    {
      id: "3",
      date: "14/05/23",
      price: 20.84,
    },
    {
      id: "4",
      date: "14/05/23",
      price: 20.84,
    },
    {
      id: "5",
      date: "14/05/23",
      price: 20.84,
    },
    {
      id: "6",
      date: "14/05/23",
      price: 20.84,
    },
    {
      id: "7",
      date: "14/05/23",
      price: 20.84,
    },
    {
      id: "8",
      date: "14/05/23",
      price: 20.84,
    },
  ];

  return (
    <div className={styles.page}>
      <HeaderSettings title={title} />
      <div className={styles.content}>
        <h5 className={styles.title}>Payment Information</h5>
        <div className={styles.information}>
          <div className={styles.card}>
            <PaymentIcon />
            <div>
              <span>**** **** **** 0932</span>
              <span>07/23</span>
            </div>
          </div>
          <ul className={styles.list}>
            <li>34 West Bromptom Av.,</li>
            <li>West District,</li>
            <li>Newcastle,</li>
            <li>KT53 YH2</li>
          </ul>
          <Button to="information">Update</Button>
        </div>
        <h5 className={styles.title}>Recent Billing</h5>
        <div className={styles.accounts__list}>
          {accounts.map((account) => (
            <div className={styles.account__box} key={account.id}>
              <span>{account.date}</span>
              <span>${account.price}</span>
              <span>
                <Button color="purple" to={account.id}>
                  View Receipt
                </Button>
              </span>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <p>All receipts have been sent to your email</p>
          <a href="#" target="_blank">
            Show More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Payment;
