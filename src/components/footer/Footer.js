import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <img className={styles.logo} src="/logo2.png" alt="" />
          </div>
          <p className={styles.desc}>
            Discover a world of inspiration, explore creativity, and connect with
            like-minded individuals. Unleash your passions with our versatile
            blogging platform. Join our community today.
          </p>
          <div className={styles.icons}>
            <img src="/github.png" alt="github" width={24} height={24} />
            <img src="/facebook.png" alt="facebook" width={24} height={24} />
            <img src="/youtube.png" alt="youtube" width={24} height={24} />
            <img src="/linkedin.png" alt="linkedin" width={24} height={24} />
          </div>
        </div>
        <div className={styles.link_contaner}>
          <div className={styles.links}>
            <div className={styles.list}>
              <span className={styles.listTitle}>Links</span>
              <Link href="/">Home</Link>
              <Link href="/">Blog</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact us</Link>
              <Link href="/privacypolicy">Privacy Policy</Link>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.list}>
              <span className={styles.listTitle}>Tags</span>
              <Link href="/blog/getallblogs?categoryFilter=Style&searchFilter=blog">
                Style
              </Link>
              <Link href="/blog/getallblogs?categoryFilter=Fashion&searchFilter=blog">
                Fashion
              </Link>
              <Link href="/blog/getallblogs?categoryFilter=Coding&searchFilter=blog">
                Coding
              </Link>
              <Link href="/blog/getallblogs?categoryFilter=Travel&searchFilter=blog">
                Travel
              </Link>
              <Link href="/blog/getallblogs?categoryFilter=Finance&searchFilter=blog">
                Finance
              </Link>
              <Link href="/blog/getallblogs?categoryFilter=Food&searchFilter=blog">
                Food
              </Link>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.list}>
              <span className={styles.listTitle}>Social</span>
              <Link href="/">Facebook</Link>
              <Link href="/">Github</Link>
              <Link href="/">Linkedin</Link>
              <Link href="/">Youtube</Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
