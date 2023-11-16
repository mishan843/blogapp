"use client"

import React, { useEffect, useState } from 'react';
import styles from './menuPosts.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MenuPosts = ({ withImage }) => {
  const [data, setData] = useState([]);
  const router = useRouter()

  const getColors = (name) => {
    switch (name) {
      case 'Finance':
        return styles.finance
        break;
      case 'Coding':
        return styles.coding
        break;
      case 'Travel':
        return styles.travel
        break;
      case 'Food':
        return styles.food
        break;
      case 'Fashion':
        return styles.fashion
        break;
      default:
        return styles.style
        break;
    }
  }

  useEffect(() => {
    // Fetch data from the API
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/getallblogs?isPopularpost=true&page=1&limit=5`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [router.query]);



  return (
    <div className={styles.items}>
      {data.map((obj) => {
        const categoryColor = getColors(obj.category[0]);

        return (<Link key={obj._id} href={`/blog/getblogbyid?id=${obj._id}`} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <img src={obj.coverImage} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${categoryColor}`}>{obj.category}</span>
            <h3 className={styles.posttitle}>{obj.title}</h3>
            <div className={styles.detail}>
              <span className={styles.date}>{obj.createdAt}</span>
            </div>
          </div>
        </Link>)
      })}
    </div >
  );
};

export default MenuPosts;
