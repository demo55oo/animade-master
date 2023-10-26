import React from "react";
import { Button, Title } from "..";
import yourImage from "../../assets/howwork.png";
import { Offers } from "../../utils/data";
import { BsArrowUpSquare } from "react-icons/bs";
import { IoCaretForwardOutline } from "react-icons/io5";
import HTMLString from "react-html-string";
import styles from "./.module.scss";
import what from "../../assets/vericalo.png";

const Fees2 = () => {

  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <Title align="center">
          {/* <div className={styles.title}>No Hidden Fees</div> */}
          What We<span> Offer</span>
        </Title>
        {window.innerWidth <= 990 ? (  
          <img src={what} alt="Description" style={{ width: '341px' }} />
        ) : (
          <img src={yourImage} alt="Description" />
          )}      

        <a className={styles.button2} href="/How-it-works">
            How it works! <IoCaretForwardOutline />
          </a>
        {/* <div className={styles.offers__boxs}>
          {Offers.map((offer, i) => (
            <div key={i} className={styles.box}>
              <div>
                <h5 className={styles.box__title}>{offer.title}</h5>
                <div className={styles.offer__desc}>
                  {offer.text.map((offerTxt, index) => (
                    <p key={index} className={styles.desc}>
                      <HTMLString html={offerTxt} />
                    </p>
                  ))}
                </div>
              </div>
              <div className={styles.percentage}>
                {offer.percentage.map((pre, indexOfindex) => (
                  <div className={styles.percentage__box} key={indexOfindex}>
                    <div>{pre.num}%</div>
                    <span>{pre.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.free__content}>
          <div className={styles.free__box}> */}
            {/* <p>
              <span className={styles.red}>50</span> Free Monthly
              <span className={styles.yellow}> designs.</span>
            </p>
            <div>
              Scale <BsArrowUpSquare className={styles.icon} /> Anytime.
            </div> */}
          {/* </div>
 
        </div> */}

      </div>
    </section>
  );
};

export default Fees2;
