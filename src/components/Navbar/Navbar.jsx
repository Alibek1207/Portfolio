import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import logo from "../../assets/Logo/logo.png"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">Men haqimda</a>
          </li>
          <li>
            <a href="#experience">Tajriba</a>
          </li>
          <li>
            <a href="#projects">Loyihalar</a>
          </li>
          <li>
            <a href="#contact">Aloqa</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};