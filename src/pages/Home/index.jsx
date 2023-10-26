import React from "react";
import {
  Banner,
  ContactUs,
  Fees,
  Hero,
  HowWorks,
  Mission,
  Potential,
  Fees2
} from "../../components";

const Home = () => (
  <>
    <Hero />
    {/* <Banner /> */}
    <Fees2 />
    <HowWorks />
    <Potential />
    <Fees />
    <Mission />
    <ContactUs />
  </>
);

export default Home;
