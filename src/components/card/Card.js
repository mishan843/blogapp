"use client";

import styles from "./card.module.css";
import Link from "next/link";




const Card = (body) => {
  let { blogs, blogByCat, search } = body
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


  return (
    <>
      {search ? blogByCat.map((item) => {
        const categoryColor = getColors(item.category[0]);
        const title = item.title.toLowerCase().replace(/\s+/g, "-")
        return (
          <div key={item.id} className={styles.container}>
            <div key={item.id} clFinanceassName={styles.imageContainer}>
              <img src={item.coverImage} alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt}</span>
                <span className={`${categoryColor} ${styles.category} `}>{item.category}</span>
              </div>
              <Link href={`/blog/${title}/getblogbyid?id=${item._id}`}>
                <h1>{item.title}</h1>
              </Link>
              <p className={styles.desc}>
                {item.description}
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
                <Link href={`/blog/${item.title.toLowerCase().replace(/\s+/g, "-")}/getblogbyid?id=${item._id}`}>
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


