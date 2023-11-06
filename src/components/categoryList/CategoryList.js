"use client"

import React from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link 
          href="/blog/getallblogs?categoryFilter=Finance&searchFilter=blog"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            width={32}
            height={32}
            alt=""
            className={styles.image}
          />
          Finance
        </Link>
        <Link
          href="/blog/getallblogs?categoryFilter=Coding&searchFilter=blog"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.png"
            width={32}
            height={32}
            alt=""
            className={styles.image}
          />
          Coding
        </Link>
        <Link
          href="/blog/getallblogs?categoryFilter=Travel&searchFilter=blog"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.png"
            width={32}
            height={32}
            alt=""
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          href="/blog/getallblogs?categoryFilter=Food&searchFilter=blog"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            width={32}
            height={32}
            alt=""
            className={styles.image}
          />
          Food
        </Link>
        <Link
          href="/blog/getallblogs?categoryFilter=Fashion&searchFilter=blog"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            width={32}
            height={32}
            alt=""
            className={styles.image}
          />
          Fashion
        </Link>
        <Link
          href="/blog/getallblogs?categoryFilter=Style&searchFilter=blog"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            width={32}
            height={32}
            alt=""
            className={styles.image}
          />
          Style
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
