"use client"
import React, { useState, useEffect } from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";

// Define the CategoryList component
const CategoryList = () => {
  // State to store the fetched categories
  const [categories, setCategories] = useState([]);
  // State to track whether to show additional categories
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  // Effect to fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Replace the URL with the actual endpoint to fetch categories
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/getBlogCategories`);
        const data = await response.json();
        setCategories(data.categories.slice(0, 6)); // Initially show only the first 6 categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  // Function to toggle the visibility of more categories
  const toggleMoreCategories = () => {
    setShowMoreCategories(!showMoreCategories);
  };

  // Function to close the dropdown
  const closeDropdown = () => {
    setShowMoreCategories(false);
  };

  // Render the component with the fetched categories
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/blog/getallblogs?categoryFilter=${category}`}
            className={`${styles.category} ${styles[`${category.toLowerCase()}`]}`}
          >
            <img
              loading="eager"
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



      </div>
    </div>
  );
};

export default CategoryList;
