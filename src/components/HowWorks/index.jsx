import React from "react";
import Title from "../Title";
import styles from "./.module.scss";
import { WorksData } from "../../utils/data";
import HTMLString from "react-html-string";
import Button from "../Button";

const HowWorks = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`${styles.section__content} container`}>
        <Title align={"center"}>How it Works</Title>
        <div className={styles.works__box}>
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
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
