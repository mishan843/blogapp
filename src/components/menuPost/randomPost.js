"use client";

import { useEffect, useState } from "react";
import styles from './menuPosts.module.css';
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const RandomPost = ({ withImage }) => {
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();

  const categoryColors = {
    Finance: styles.finance,
    Coding: styles.coding,
    Travel: styles.travel,
    Food: styles.food,
    "Digital Marketing": styles["digital-marketing"],
    Technology: styles.technology,
    Sport: styles.sport,
    default: styles.fashion,
  };

  const getColors = (name) => categoryColors[name] || categoryColors.default;

  useEffect(() => {
    const categoryFilter = searchParams.get("categoryFilter");
    let apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/blog/getallblogs?isPopularpost=true&page=2&limit=15`;

    if (categoryFilter) {
      apiUrl += `&categoryFilter=${categoryFilter}`;
    }

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchParams]);

  return (
    <div className={styles.items}>
      {data.map((obj) => {
        const categoryColor = getColors(obj.category[0]);
        return (
          <Link
            key={obj._id}
            href={`/blog/${obj.title
              .toLowerCase()
              .replace(/[^\w\s]/gi, "")
              .replace(/\s+/g, "-")}?id=${obj._id}`}
            className={styles.item}
          >
            {withImage && (
              <div className={styles.imageContainer}>
                <img
                  width={70} height={70}
                  loading="eager"
                  title={obj.title}
                  src={obj.coverImage}
                  alt={obj.title}
                  className={styles.image}
                />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${categoryColor}`}>
                {obj.category}
              </span>
              <h3 className={styles.posttitle}>{obj.title}</h3>
              <div className={styles.detail}>
                <span className={styles.date}>{obj.createdAt}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RandomPost;
