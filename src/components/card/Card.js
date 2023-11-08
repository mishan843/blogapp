"use client";

import styles from "./card.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'



const Card = () => {
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

  const searchParams = useSearchParams()
  const search = searchParams.get('categoryFilter')

  const [blogByCat, setBlogByCat] = useState([]);
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint;
        if (search) {
          endpoint = `${process.env.NEXT_PUBLIC_API_URL}/blog/getAllBlogs?categoryFilter=${search}&searchFilter=blog&page=1&limit=10`;
        } else {
          endpoint = `${process.env.NEXT_PUBLIC_API_URL}/blog/getAllBlogs?page=1&limit=10`;
        }

        let response = await fetch(endpoint);
        let data = await response.json();
        let blogsData = data.data;

        if (search) {
          setBlogByCat(blogsData);
          setBlogs([]);
        } else {
          setBlogs(blogsData);
          setBlogByCat([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [search]);
  return (
    <>


      {search ? blogByCat.map((item) => {
        const categoryColor = getColors(item.category[0]);

        return (
          <div key={item.id} className={styles.container}>
            <div key={item.id} clFinanceassName={styles.imageContainer}>
              <img src={item.coverImage} alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt} - </span>
                <span className={`${categoryColor} ${styles.category} `}>{item.category}</span>
              </div>
              <Link href={`/blog/getblogbyid?id=${item._id}`}>
                <h1>{item.title}</h1>
              </Link>
              <p className={styles.desc}>
                {item.content}
              </p>
              <Link href={`/blog/getblogbyid?id=${item._id}`} className={`${styles.link} ${categoryColor}`}>
                Read More
              </Link>
            </div>
          </div>

        );
      }) :
        blogs.map((item) => {
          const categoryColor = getColors(item.category[0]);

          return (
            <div key={item.id} className={styles.container}>
              <div key={item.id} className={styles.imageContainer}>
                <img src={item.coverImage} alt="" fill className={styles.image} />
              </div>
              <div className={styles.textContainer}>
                <div className={styles.detail}>
                  <span className={`${categoryColor} ${styles.category}`}>{item.category}</span>
                  <span className={styles.date}>{item.createdAt}</span>
                </div>
                <Link href={`/blog/getblogbyid?id=${item._id}`}>
                  <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc}>
                  {item.description}
                </p>
                <Link href={`/blog/getblogbyid?id=${item._id}`} className={styles.link}>
                  Read More
                </Link>
              </div>
            </div>
          );
        })
      }
    </>
  );
};

export default Card;


