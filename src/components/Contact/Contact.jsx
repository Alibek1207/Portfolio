import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import email from "../../assets/contact/emailIcon.png"
import github from "../../assets/contact/githubIcon.png"
import linked from "../../assets/contact/linkedinIcon.png"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Aloqa</h2>
        <p>Bemalol murojaat qiling!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:myemail@email.com">alibek20071277@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linked}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/Yo'ldoshev Alibek</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/Alibek1207</a>
        </li>
      </ul>
    </footer>
  );
};