"use client";

import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "next/head";

const Page = () => {

  const searchParams = useSearchParams();
  const search = searchParams.get("id")
  const title = searchParams.get("title")
  console.log(title);
  const router = useRouter();

  const [singleBlog, setSingleBlog] = useState([]);
  const pageTitle = singleBlog.title

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/getblogbyid/?id=${search}`
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
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{singleBlog.title}</h1>
        </div>
        <a href="/"> <div className={styles.user}>
          <div className={styles.userImageContainer}>
            <img src="/profile_logo.jpg" alt="" fill className={styles.avatar} />
          </div>
          <div className={styles.userTextContainer}>
            <img src="/logo.png" alt="" fill className={styles.avtar_logo} />

            <span className={styles.date}>written by</span>
          </div>
        </div>
        </a>
        <div className={styles.imageContainer}>
          <img src={singleBlog.coverImage} alt="" fill className={styles.image} />
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
