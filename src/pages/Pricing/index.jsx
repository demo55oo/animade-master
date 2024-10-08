import React from "react";
import { PlanCard, Title } from "../../components";
import { useNavigate } from "react-router-dom";
import { plansImage } from "../../assets";
import styles from "./.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { plans } from "../../utils/data";

const Pricing = () => {
  const navigate = useNavigate();

  // const plans = [
  //   {
  //     title: "Booster",
  //     subtitle: "Take your business off the ground",
  //     designs: 100,
  //     extra: 50,
  //     price: 1.99,
  //   },
  //   {
  //     title: "Accelerate",
  //     subtitle: "Reach new heights",
  //     designs: 850,
  //     extra: 800,
  //     price: 5.99,
  //   },
  //   {
  //     title: "Turbocharge",
  //     subtitle: "Some serious power",
  //     designs: 3050,
  //     extra: 300,
  //     price: 15.99,
  //   },
  //   {
  //     title: "Professional",
  //     subtitle: "Unlimited potential",
  //     price: 26.99,
  //     Professional: true,
  //   },
  // ];

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.header}>
            <button className={styles.back__btn} onClick={() => navigate(-1)}>
              <IoIosArrowBack />
            </button>
            <div className={styles.ot} align="center">
                Launch your business into the Stratosphere & scale up with AI-Powered Products.
            </div>
          </div>
          <div className={styles.list}>
            {plans.map((plan, i) => (
              <PlanCard
                key={i}
                title={plan?.title}
                subtitle={plan?.subtitle}
                price={plan?.price}
                extra={plan?.extra}
                designs={plan?.designs}
                image={plansImage[i]}
                Professional={plan?.Professional}
                free={plan?.free}
                link={plan?.href}
              />
            ))}
          </div>
          <div  className ={styles.tity} align="center">
            Additionally, we take payment as 3% of your sales on Printful - So you only pay us as you earn and scale
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
