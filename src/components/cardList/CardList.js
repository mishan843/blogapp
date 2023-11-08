"use client";

import React from 'react'
import styles from './cardlist.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'


const CardList = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('categoryFilter');
  const [blogByCat, setBlogByCat] = useState([]);
  const [blogs, setBlogs] = useState([]);
  let [isLoading, setIsLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint;
        if (search) {
          endpoint = `${process.env.NEXT_PUBLIC_API_URL}/blog/getAllBlogs?categoryFilter=${search}&page=1&limit=10`;
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

        setIsLoading(false); // Set loading state to false when data is successfully fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [search]);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      {isLoading ? ( // Conditional rendering for loading animation
        <div className={styles.loadingContainer}>
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <div className={styles.text}></div>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.posts}>
            <Card blogs={blogs} blogByCat={blogByCat} search={search} />
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
}

export default CardList;
