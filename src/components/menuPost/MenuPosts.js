"use client"
import React, { useEffect, useState } from 'react';
import styles from './menuPosts.module.css';
import Link from 'next/link';
import Image from 'next/image';

const MenuPosts = ({ withImage }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/getAllBlogs?isPopularpost=true&page=1&limit=5`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts.

  return (
    <div className={styles.items}>
      {data.map((obj) => (
        <Link key={obj._id} href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={obj.coverImage} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>{obj.category}</span>
            <h3 className={styles.posttitle}>{obj.title}</h3>
            <div className={styles.detail}>
              <span className={styles.date}>{obj.createdAt}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
