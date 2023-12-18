"use client"

import React from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";

const CategoryList = () => {

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        <Link
          href="/blog/getallblogs?categoryFilter=Finance"
          className={`${styles.category} ${styles.finance}`}
        >
          <img
            loading="eager"
            src="/finance.webp"
            width={32}
            height={32}
            alt="finance"
            title="finance"
            className={styles.image}
          />
          Finance
        </Link>
        <Link
          href="/blog/getallblogs?categoryFilter=Coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <img
            loading="eager"
            title="coding"
            src="/coding.webp"
            width={32}
            height={32}
            alt="coding logo"
            className={styles.image}
          />
          Coding
        </Link>
        <Link
          href="/blog/getallblogs?categoryFilter=Travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <img
            loading="eager"
            title="travel"
            src="/travel.webp"
            width={32}
            height={32}
            alt="travel logo"
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          href="/blog/getallblogs?categoryFilter=Food"
          className={`${styles.category} ${styles.food}`}
        >
          <img
            loading="eager"
            title="food"
            src="/food.webp"
            width={32}
            height={32}
            alt="food logo"
            className={styles.image}
          />
          Food
        </Link>
        <Link
          href="/blog/getallblogs?categoryFilter=Fashion"
          className={`${styles.category} ${styles.fashion}`}
        >
          <img
            loading="eager"
            title="fashion"
            src="/fashion.webp"
            width={32}
            height={32}
            alt="fashion logo"
            className={styles.image}
          />
          Fashion
        </Link>
        <Link
          href="/blog/getallblogs?categoryFilter=Technology"
          className={`${styles.category} ${styles.technology}`}
        >
          <img
            loading="eager"
            title="technology"
            src="/technology.webp"
            width={32}
            height={32}
            alt="technology"
            className={styles.image}
          />
          Technology
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
