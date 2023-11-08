"use client"
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.container} ${menuOpen ? styles.mobileMenuOpen : ""}`}>

      <div className={styles.logo}>
        <h2>LFB</h2>
      </div>
      <div className={styles.mobileMenuButton} onClick={toggleMenu}>
        <div className={`${styles.bar} ${menuOpen ? styles.close : ""}`}></div>
      </div>
      <div className={`${styles.links} ${menuOpen ? styles.mobileLinks : ""}`}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
