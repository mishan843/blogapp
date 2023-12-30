"use client";

import React, { useEffect, useState } from 'react';
import styles from './cardlist.module.css';
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';
import { useSearchParams } from 'next/navigation';

const CardList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('categoryFilter');
  const [blogByCat, setBlogByCat] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        window.scrollTo({ top: 0 });

        const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/blog/getAllBlogs?categoryFilter=${search || ''}&page=${currentPage}&limit=10`;

        const response = await fetch(endpoint);
        const data = await response.json();
        const blogsData = data.data;
        const totalPageCount = data.totalPages;

        if (search) {
          setBlogByCat(blogsData);
          setBlogs([]);
        } else {
          setBlogs(blogsData);
          setBlogByCat([]);
        }

        setTotalPages(totalPageCount);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [search, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Posts</h2>
      {isLoading ? (
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
          <Pagination
            onPageChange={handlePageChange}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
};

export default CardList;
