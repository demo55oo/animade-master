import React from "react";
import Title from "../Title";
import styles from "./.module.scss";
import { WorksData } from "../../utils/data";
import HTMLString from "react-html-string";
import Button from "../Button";
import gred from "../../assets/woks.png";
import mainstuff from "../../assets/workshowstuff.png";
import many from "../../assets/WEL.png";


const HowWorks = () => {
  return (
    <div>
    {/* <img src={gred}></img> */}
    <section className={`section ${styles.section}`}>
      <div className={`${styles.section__content} container`}>
        <Title align={"center"}>What We <span>Do</span></Title>
        {window.innerWidth <= 990 ? (  
            <img src={many} alt="Mobile Image" className={styles.fitImage} />
          ) : (
            <img src={mainstuff} alt="Desktop Image" className={styles.fitImage} />
          )}      
            <a className={styles.button2} href="/register">
            Signup for free Now
          </a>
        <a className={styles.button3} href="/How-it-works">
            How it works
          </a>
          <a className={styles.button4} to="/How-it-works">
          How does Printful Work?
          </a>
                  {/* <div className={styles.works__box}>
          <ul className={styles.list}>
            {WorksData.map((work) => (
              <li className={styles.single__li} key={work.id}>
                <span>{work.icon}</span>
                <p className="main__text black">
                  <HTMLString html={work.text} />
                </p>
              </li>
            ))}
          </ul>
          <div className={styles.btn}>
            <Button to={'/How-it-works'}>View More</Button>
          </div>
        </div> */}
      </div>
    </section>
    </div>
  );
};

export default HowWorks;
