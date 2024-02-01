"use client"
import { useState, useEffect } from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoryList = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [visibleCategories, setVisibleCategories] = useState([]);
  const images = {
    coding: 'https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059456/kdswyqlhb1sjs1rqy2fr.webp',
    fashion: 'https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059651/jx6o733wboovfdb31yvn.webp',
    travel: 'https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059705/brmah3wo9z7hurs1nar5.webp',
    technology: 'https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059760/odglkp7priunwgevs7np.webp',
    food: 'https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059798/qqyim4amihwb21r8hpcb.webp',
    finance: 'https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059799/idkm7qrs1v2brhwndztc.webp',
    sport: 'https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059879/tzc8tipplqsqfshz5lxx.webp',
    "digital marketing": "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705559983/iebdpyuozasaf7xbuear.webp",
    "life hacks": "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1706694426/hnnw1fv9rvsjo8j0yhra.webp",
    "health": "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1706787502/xo0lwd6yj2a5yyqhahha.webp"

  }
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
              className={`${styles.category} ${styles[`${category.toLowerCase().replaceAll(" ", "-")}`]}`}
            >
              <img
                loading="eager"
                src={images[`${category.toLowerCase()}`]}
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