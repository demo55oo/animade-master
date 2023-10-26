import React from "react";
import {
  Banner,
  ContactUs,
  Fees,
  Hero,
  HowWorks,
  Mission,
  Potential,
  Fees2,Notmain,Slidpr
} from "../../components";
import styles from "./.module.scss";

const Aboutus = () => (
  <>
      <section className={styles.hero__section}>

   <Notmain/>
</section>
<Mission />
<Slidpr></Slidpr>
    {/* <Banner /> */}
    <Fees2 />
    <HowWorks />
    {/* <Potential />
    <Fees /> */}
    <ContactUs />
  </>
);

export default Aboutus;
