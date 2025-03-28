"use client";
import { useState, useEffect } from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoryList = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const images = {
    coding:
      "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059456/kdswyqlhb1sjs1rqy2fr.webp",
    fashion:
      "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059651/jx6o733wboovfdb31yvn.webp",
    travel:
      "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059705/brmah3wo9z7hurs1nar5.webp",
    technology:
      "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059760/odglkp7priunwgevs7np.webp",
    food: "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059798/qqyim4amihwb21r8hpcb.webp",
    finance:
      "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059799/idkm7qrs1v2brhwndztc.webp",
    sport:
      "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059879/tzc8tipplqsqfshz5lxx.webp",
    "digital marketing":
      "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705559983/iebdpyuozasaf7xbuear.webp",
    "life hacks":
      "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1706694426/hnnw1fv9rvsjo8j0yhra.webp",
    health:
      "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1706787502/xo0lwd6yj2a5yyqhahha.webp",
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/getBlogCategories`
        );
        const data = await response.json();
        setAllCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleScroll = (direction) => {
    const container = document.querySelector(`.${styles.categories}`);
    if (container) {
      const scrollAmount = isMobile ? 130 : 180;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>

      <div className={styles.scrollContainer}>
        <div className={styles.categories}>
          {allCategories.map((category, index) => (
            <Link
              key={index}
              href={`/blog/getallblogs?categoryFilter=${category}`}
              className={`${styles.category} ${
                styles[category.toLowerCase().replaceAll(" ", "-")]
              }`}
            >
              <div className={styles.imageWrapper}>
                <img
                  loading="lazy"
                  src={images[category.toLowerCase()]}
                  alt={category}
                  className={styles.image}
                  width={isMobile ? 48 : 64}
                  height={isMobile ? 48 : 64}
                />
              </div>
              <span className={styles.categoryName}>{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
