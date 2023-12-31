"use client";

import styles from "./singleBlog.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const SingleBlog = () => {

  const searchParams = useSearchParams();
  const search = searchParams.get("id")
  const router = useRouter();

  const [singleBlog, setSingleBlog] = useState([]);
  localStorage.setItem("blog", JSON.stringify(singleBlog))

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
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <a
            href={`${process.env.DOMAIN}blog/${singleBlog.title && singleBlog.title
              .toLowerCase()
              .replace(/[^\w\s]/gi, '')
              .replace(/\s+/g, '-')}?id=${singleBlog._id}`}
          >            <h1 className={styles.title}>{singleBlog.title}</h1>
          </a>
        </div>
        <a href={process.env.DOMAIN}>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <img loading="lazy" title="bloggersGround logo" src="/bloggersGroundLogo.webp" alt="bloggersGround logo" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <b><span className={styles.username}>Blogger Ground</span></b>
              <span className={styles.date}>written by</span>
            </div>
          </div>
        </a>
        <div className={styles.imageContainer}>
          <img loading="lazy" title={singleBlog.title} src={singleBlog.coverImage} alt={singleBlog.title} fill className={styles.image} />
        </div>

      </div >
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p className={styles.blog_content} dangerouslySetInnerHTML={{ __html: singleBlog.content }}></p>
            <div>
              <Comments singleBlog={singleBlog} setSingleBlog={setSingleBlog} />
            </div>
          </div>
        </div>
        {singleBlog.relatedArticles && singleBlog.relatedArticles.length > 0 && (
          <div className={styles.relatedBlogs}>
            <h2>Related Blogs</h2>
            <div className={styles.relatedBlogList}>
              {singleBlog.relatedArticles.map((relatedBlog) => (
                <div key={relatedBlog._id} className={styles.relatedBlogItem}>
                  <a
                    href={`${process.env.DOMAIN}blog/${relatedBlog.title
                      .toLowerCase()
                      .replace(/[^\w\s]/gi, '')
                      .replace(/\s+/g, '-')}?id=${relatedBlog._id}`}
                  >
                    <img
                      src={relatedBlog.coverImage}
                      alt={relatedBlog.title}
                      className={styles.thumbnail}
                    />
                  </a>
                  <a
                    href={`${process.env.DOMAIN}blog/${relatedBlog.title
                      .toLowerCase()
                      .replace(/[^\w\s]/gi, '')
                      .replace(/\s+/g, '-')}?id=${relatedBlog._id}`}
                  >
                    <h3>{relatedBlog.title}</h3>
                  </a>

                </div>
              ))}
            </div>
          </div>
        )}

        <Menu />
      </div>
    </div >
  );
};

export default SingleBlog;
