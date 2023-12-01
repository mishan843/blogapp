import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog/getallblogs?categoryFilter=Technology"
        className={`${styles.categoryItem} ${styles.technology}`}
      >
        Technology
      </Link>
      <Link
        href="/blog/getallblogs?categoryFilter=Fashion"
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        Fashion
      </Link>
      <Link
        href="/blog/getallblogs?categoryFilter=Food"
        className={`${styles.categoryItem} ${styles.food}`}
      >
        Food
      </Link>
      <Link
        href="/blog/getallblogs?categoryFilter=Travel"
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Travel
      </Link>
      <Link
        href="/blog/getallblogs?categoryFilter=Finance"
        className={`${styles.categoryItem} ${styles.finance}`}
      >
        Finance
      </Link>
      <Link
        href="/blog/getallblogs?categoryFilter=Coding"
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
