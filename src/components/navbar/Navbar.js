"use client"
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={`${styles.container} `}>

      <div className={styles.logo}>
        <Link href="/">
          <img loading="lazy" title="bloggersGround logo" src="https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705581808/dyicko2aqcdigghxianj.webp" alt="bloggersGround logo" fill />
        </Link>
      </div>
      <div className={`${styles.links} `}>
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
