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
      <div className={styles.social}>
        <img src="/github.png" alt="github" width={24} height={24} />
        <img src="/facebook.png" alt="facebook" width={24} height={24} />
        <img src="/youtube.png" alt="youtube" width={24} height={24} />
        <img src="/linkedin.png" alt="linkedin" width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <h2>LFB</h2>
        <p>Learn From Blog</p>
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
