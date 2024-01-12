"use client"
import React, { useState, useEffect, useCallback } from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoryList = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [visibleCategories, setVisibleCategories] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

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

  const handleScroll = useCallback(
    (direction) => {
      const scrollAmount = 200;

      if (direction === "left") {
        setStartIndex((prevStartIndex) => Math.max(prevStartIndex - 6, 0));
      } else if (direction === "right") {
        setStartIndex((prevStartIndex) =>
          Math.min(prevStartIndex + 6, allCategories.length - 6)
        );
      }
    },
    [allCategories]
  );

  const getCategoryStyles = useCallback(
    (category) => ({
      [styles.category]: true,
      [styles[category.toLowerCase()]]: true,
    }),
    []
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.scrollContainer} id="categoryContainer">
        <div className={styles.categories}>
          {allCategories.length > 6 ? (
            <div className={styles.scrollArrows}>
              <FaChevronLeft onClick={() => handleScroll("left")} className={styles.arrow} />
            </div>
          ) : (
            <></>
          )}

          {visibleCategories.map((category, index) => (
            <Link
              key={index}
              href={`/blog/getallblogs?categoryFilter=${category}`}
              className={`${styles.category} ${styles[`${category.toLowerCase()}`]}`}
            >
              <img
                loading="lazy"
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

          {allCategories.length > 6 ? (
            <div className={styles.scrollArrows}>
              <FaChevronRight onClick={() => handleScroll("right")} className={styles.arrow} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
