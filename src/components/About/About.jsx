import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import aboutimg from "../../assets/about/aboutimg.png"
import cursor from "../../assets/about/cursorIcon.png"
import server from "../../assets/about/serverIcon.png"
import ui from "../../assets/about/uiIcon.png"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Men haqimda</h2>
      <div className={styles.content}>
        <img
          src={aboutimg}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Dasturchi</h3>
              <p>
                Men saytlarimni kreativ va boshqalarga o'xshamaydigan tarzda yarataman.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={server} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Dasturchi</h3>
              <p>
              Tez va optimallashtirilgan backend tizimlarni ishlab chiqishda tajribam bor.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={ui} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Dizayner</h3>
              <p>
                Men birnechta dizaynlar va animatsiyalar yaratdim.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};