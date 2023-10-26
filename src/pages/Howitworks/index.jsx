import React from "react";
import { MantineProvider } from '@mantine/core';

import {
  Banner,
  ContactUs,
  Hero,
  Header,
  Faq,
Mano,
  SlideOnee,
  Footer,
  Appy,
  
} from "../../components";
import styles from "./.module.scss";
import Singo from '../singo'; // Adjust the relative path based on your project structure
import Asko from "../Asko";
const Howitworks = () => (
  <>
  <Header/>
 <section className={styles.hero__section}>
  <Mano />
    </section> 
    <Appy/>
     {/* <SlideOnee /> */}
         
  {/* <Banner/> */}
    {/* <HowWorks /> */}
    {/* <Asko></Asko> */}
    <Singo/>

<MantineProvider>
    <Faq/>
    </MantineProvider>
<Footer/>
  </>
);

export default Howitworks;
