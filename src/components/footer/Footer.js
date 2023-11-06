import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="" width={50} height={50} />
          <h1 className={styles.logoText}>{process.env.APP_NAME}</h1>
          <p>Learn From Blog</p>
        </div>
        <p className={styles.desc}>
          Dive into the world of fashion, coding, style, travel, food, and more! Explore diverse passions with our all-in-one blogging app.
          Follow us on
        </p>
        <div className={styles.icons}>
          <img src="/facebook.png" alt="facebook" width={18} height={18} />
          <img src="/youtube.png" alt="youtube" width={18} height={18} />
          <img src="/tiktok.png" alt="tiktik" width={18} height={18} />
          <img src="/instagram.png" alt="instagram" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Youtube</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Instagram</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
