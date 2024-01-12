"use client"
import React, { useState, useEffect } from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoryList = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [visibleCategories, setVisibleCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/getBlogCategories`);
        const data = await response.json();
        setAllCategories(data.categories);
        setVisibleCategories(data.categories.slice(0, 6));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = 200;

    if (direction === "left") {
      setVisibleCategories((prevVisibleCategories) => {
        const startIndex = Math.max(prevVisibleCategories.length - 6, 0);
        return allCategories.slice(startIndex, startIndex + 6);
      });
    } else if (direction === "right") {
      setVisibleCategories((prevVisibleCategories) => {
        const endIndex = Math.min(prevVisibleCategories.length + 6, allCategories.length);
        return allCategories.slice(endIndex - 6, endIndex);
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.scrollContainer} id="categoryContainer">
        <div className={styles.categories}>
          {allCategories.length > 6 ? <div className={styles.scrollArrows}>
            <FaChevronLeft onClick={() => handleScroll("left")} className={styles.arrow} />
          </div> : <></>}

          {visibleCategories.map((category, index) => (
            <Link
              key={index}
              href={`/blog/getallblogs?categoryFilter=${category}`}
              className={`${styles.category} ${styles[`${category.toLowerCase()}`]}`}
            >
              <img
                loading="eager"
                src={`${category.toLowerCase()}.webp`}
                width={32}
                height={32}
                alt={category}
                title={category}
                className={styles.image}
              />
              {category}
            </Link>
          ))}

          {allCategories.length > 6 ? <div className={styles.scrollArrows}>
            <FaChevronRight onClick={() => handleScroll("right")} className={styles.arrow} />
          </div> : <></>}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;