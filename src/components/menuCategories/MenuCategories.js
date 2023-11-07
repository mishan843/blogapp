import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog/getallblogs?categoryFilter=Style&searchFilter=blog"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        href="/blog/getallblogs?categoryFilter=Fashion&searchFilter=blog"
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        Fashion
      </Link>
      <Link
        href="/blog/getallblogs?categoryFilter=Food&searchFilter=blog"
        className={`${styles.categoryItem} ${styles.food}`}
      >
        Food
      </Link>
      <Link
        href="/blog/getallblogs?categoryFilter=Travel&searchFilter=blog"
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Travel
      </Link>
      <Link
        href="/blog/getallblogs?categoryFilter=Finance&searchFilter=blog"
        className={`${styles.categoryItem} ${styles.finance}`}
      >
        Finance
      </Link>
      <Link
        href="/blog/getallblogs?categoryFilter=Coding&searchFilter=blog"
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
