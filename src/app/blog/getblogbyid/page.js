"use client"

import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {

  const searchParams = useSearchParams()
  const search = searchParams.get('id')

  const [singleBlog, setSingleBlog] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/getBlogById?id=${search}`);

        if (response.ok) {
          let result = await response.json();

          setSingleBlog(result);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {singleBlog[0]?.title}
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John doe</span>
              <span className={styles.date}>24.10.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={singleBlog[0]?.coverImage} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              {singleBlog[0]?.description}
            </p>
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
              ipsa.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              eius vel velit rem dolores. Minus, vero dolores. Assumenda alias
              sit architecto corrupti sunt placeat corporis! Quae pariatur qui
              exercitationem amet!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              eius vel velit rem dolores. Minus, vero dolores. Assumenda alias
              sit architecto corrupti sunt placeat corporis! Quae pariatur qui
              exercitationem amet!
            </p>
            <div>
              <Comments singleBlog={singleBlog} />
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Page;

