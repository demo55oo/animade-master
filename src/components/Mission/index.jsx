import React from "react";
import Title from "../Title";
import styles from "./.module.scss";
import Button from "../Button";

const Mission = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <Title align="center">Our <span>Mission</span></Title>
        <h1 className={styles.sub}>Empowering artists and entrepreneurs to create a fairer, more accessible art world.</h1>
        <div className={styles.mission__box}>
          <h4 className={styles.title}>
            <span>At our core</span>
           
          </h4>
          <div className={styles.dot}>
          <div className={styles.box__content}>
            <p>
              At our core, we are driven by the mission of empowering AI artists
              and entrepreneurs to interact with cutting-edge technology and
              drive sales through a simple, user-friendly monetization platform.
              We believe that by leveraging the power of AI, we can democratize
              access to the world of digital art and enable a new generation of
              creators to realize their full potential.{" "}
            </p>
            <p>
              Our platform is designed to simplify the process of creating and
              selling digital art, providing artists with the tools and
              resources they need to thrive in a rapidly-evolving digital
              landscape. We are committed to driving innovation and pushing the
              boundaries of what is possible in the world of AI-powered digital
              art, and we invite you to join us on this exciting journey!
            </p>
            <Button  to="/single-input">More About Us</Button>

             </div>
          <div className={styles.fr}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
