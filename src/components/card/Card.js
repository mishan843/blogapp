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
      case 'Technology':
        return styles.technology
        break;
      default:
        return styles.fashion
        break;
    }
  }

  // const getBlogByCat = (name) => {
  //   switch (name) {
  //     case 'Finance':
  //       return (
  //         <h2>finance</h2>
  //       )
  //       break;
  //     case 'Coding':
  //       return (
  //         <h2>coding</h2>
  //       )
  //       break;
  //     case 'Travel':
  //       return (
  //         <h2>travel</h2>
  //       )
  //       break;
  //     case 'Food':
  //       return (
  //         <h2>food</h2>
  //       )
  //       break;
  //     case 'Fashion':
  //       return (
  //         <h2>fashion</h2>
  //       )
  //       break;
  //     default:
  //       return (
  //         <h2>Technology</h2>
  //       )
  //       break;
  //   }
  // }

  // const blogCategory = getBlogByCat(search);


  return (
    <>
      {search ? blogByCat.map((item) => {
        const categoryColor = getColors(item.category[0]);
        const title = item.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')
        return (
          <div key={item.id} className={styles.container}>
            <div key={item.id} className={styles.imageContainer}>
              <a href={`/blog/${item.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')}?id=${item._id}`} className={`${styles.link} ${categoryColor}`}>
                <img loading="eager" title={item.title} src={item.coverImage} alt={item.title} fill className={styles.image} />
              </a>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt}</span>
                <span className={`${categoryColor} ${styles.category} `}>{item.category}</span>
              </div>
              <Link href={`/blog/${item.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')}?id=${item._id}`}>
                <h2>{item.title}</h2>
              </Link>
              <p className={styles.desc}>
                {item.description}
              </p>
              <Link href={`/blog/${item.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')}?id=${item._id}`} className={`${styles.link} ${categoryColor}`}>
                READ FULL BLOG
              </Link>
            </div>
          </div>

        );
      }) :
        blogs.map((item) => {
          const categoryColor = getColors(item.category[0]);
          const title = item.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')

          return (
            <div key={item.id} className={styles.container}>
              <div key={item.id} className={styles.imageContainer}>
                <img loading="eager" title={item.title} src={item.coverImage} alt={item.title} fill className={styles.image} />
              </div>
              <div className={styles.textContainer}>
                <div className={styles.detail}>
                  <span className={`${categoryColor} ${styles.category}`}>{item.category}</span>
                  <span className={styles.date}>{item.createdAt}</span>
                </div>
                <Link href={`/blog/${item.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')}?id=${item._id}`}>
                  <h2>{item.title}</h2>
                </Link>
                <p className={styles.desc}>
                  {item.description}
                </p>
                <Link href={`/blog/${item.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')}?id=${item._id}`} className={styles.link}>
                  READ FULL BLOG
                </Link>
              </div>
            </div >
          );
        })
      }
      {/* {search ? <div>
      {blogCategory}
      </div> : ""} */}
    </>
  );
};

export default Card;


