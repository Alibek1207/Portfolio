import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import hero from "../../assets/hero/heroImage.png"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Salom, men Ali</h1>
        <p className={styles.description}>
          Men kreativ dasturchiman. Men HTML, CSS, Javascript, React va Viteda ishlay olaman. 
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Men bilan bog'laning
        </a>
      </div>
      <img
        src={hero}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};