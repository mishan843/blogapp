"use client"
import { useEffect, useState } from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";

const MenuCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/blog/getBlogCategories`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {





        setCategories(data.categories);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className={styles.categoryList}>
      {categories.map((category) => (
        <Link
          key={category}
          href={`/blog/getallblogs?categoryFilter=${encodeURIComponent(category)}`}
          className={`${styles.categoryItem} ${styles[category.toLowerCase().replaceAll(" ", "-")]}`}>
          {category}

        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
