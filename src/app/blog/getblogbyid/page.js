"use client";

import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {

  const searchParams = useSearchParams();
  const search = searchParams.get("id")
  const router = useRouter();

  const [singleBlog, setSingleBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/getblogbyid?id=${search}`
        );

        if (response.ok) {
          let result = await response.json();

          setSingleBlog(result);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [router.query]);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{singleBlog[0]?.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <img src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>LFB</span>
              <span className={styles.date}>written by</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={singleBlog[0]?.coverImage} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p className={styles.blog_content} dangerouslySetInnerHTML={{ __html: singleBlog.content }}></p>
            <div>
              <Comments singleBlog={singleBlog} setSingleBlog={setSingleBlog} />
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Page;
