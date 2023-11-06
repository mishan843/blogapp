"use client";

import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'


const Card = () => {
    
  const searchParams = useSearchParams()
  const search = searchParams.get('categoryFilter')
  
  const [blogByCat, setBlogByCat] = useState([]);
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint;
        if (search) {
          endpoint = `https://blogapp-q8b0.onrender.com/blog/getAllBlogs?categoryFilter=${search}&searchFilter=blog`;
        } else {
          endpoint = "https://blogapp-q8b0.onrender.com/blog/getAllBlogs";
        }

        let response = await fetch(endpoint);
        let data = await response.json();
        let blogsData = data.data;

        if (search) {
          setBlogByCat(blogsData);
          setBlogs([]); // Clear blogs state when searching by category
        } else {
          setBlogs(blogsData);
          setBlogByCat([]); // Clear blogByCat state when not searching by category
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
        return (
          <div className={styles.container}>
            <div key={item.id} className={styles.imageContainer}>
              <Image src={item.coverImage} alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt} - </span>
                <span className={styles.category}>{item.category}</span>
              </div>
              <Link href={`/blog/getblogbyid?id=${item._id}`}>
                <h1>{item.title}</h1>
              </Link>
              <p className={styles.desc}>
                {item.content}
              </p>
              <Link href={`/blog/getblogbyid?id=${item._id}`} className={styles.link}>
                Read More
              </Link>
            </div>
            </div>

        );
      }) : 
      blogs.map((item) => {
        return (
          <div className={styles.container}>
            <div key={item.id} className={styles.imageContainer}>
              <Image src={item.coverImage} alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt} - </span>
                <span className={styles.category}>{item.category}</span>
              </div>
              <Link href={`/blog/getblogbyid?id=${item._id}`}>
                <h1>{item.title}</h1>
              </Link>
              <p className={styles.desc}>
                {item.content}
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


