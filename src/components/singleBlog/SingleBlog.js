"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./singleBlog.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
import { useRouter, useSearchParams } from "next/navigation";
import Image from 'next/image';
import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Error fetching data');
  }

  return response.json();
};

const SingleBlog = () => {
  const [singleBlog, setSingleBlog] = useState({});
  const contentRef = useRef();
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  const router = useRouter();

  const { data: singleBlogData, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/blog/getblogbyid/?id=${search}`,
    fetcher
  );

  useEffect(() => {
    if (singleBlogData) {
      setSingleBlog(singleBlogData);
    }
  }, [singleBlogData]);

  useEffect(() => {
    let newScript = document.createElement('script');
    newScript.text = `
        function copyToClipboard(elementId) {
            const element = document.getElementById(elementId);
            const range = document.createRange();
            range.selectNode(element);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

            try {
                document.execCommand('copy');
                window.getSelection().removeAllRanges();

                // Update the copy button text
                const copyButton = element.parentElement.querySelector('.copy-button');
                copyButton.innerText = 'Copied!';
                setTimeout(() => {
                    copyButton.innerText = 'Copy';
                }, 1000);
            } catch (error) {
                console.error('Copy to clipboard failed:', error);
            }
        }
    `;
    document.head.appendChild(newScript);

    return () => {
      document.head.removeChild(newScript);
    };
  }, [singleBlog.content]);

  if (error) return <div>Error fetching data</div>;
  if (!singleBlog) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <a
            href={`${singleBlog.title && singleBlog.title
              .toLowerCase()
              .replace(/[^\w\s]/gi, '')
              .replace(/\s+/g, '-')}?id=${singleBlog._id}`}
          >
            <h1 className={styles.title}>{singleBlog.title}</h1>
          </a>
        </div>
        <a href={process.env.DOMAIN}>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <img
                width="100%"
                height="auto"
                loading="eager"
                title="bloggersGround logo"
                src="https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059271/orunbmkvtnv7kswnh1tz.webp"
                alt="bloggersGround logo"
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <b><span className={styles.username}>Blogger Ground</span></b>
              <span className={styles.date}>written by</span>
            </div>
          </div>
        </a>
        <div className={styles.imageContainer}>
          <Image
            src={singleBlog.coverImage}
            alt={singleBlog.title}
            width={900}
            height={0}
            sizes="100vw"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p
              className={styles.blog_content}
              dangerouslySetInnerHTML={{ __html: singleBlog.content }}
            ></p>
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
                    href={`${relatedBlog.title
                      .toLowerCase()
                      .replace(/[^\w\s]/gi, '')
                      .replace(/\s+/g, '-')}?id=${relatedBlog._id}`}
                  >
                    <Image
                      src={relatedBlog.coverImage}
                      alt={relatedBlog.title}
                      width={900}
                      height={0}
                      sizes="100vw"
                      className={styles.thumbnail}
                    />
                  </a>
                  <a
                    href={`${relatedBlog.title
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
    </div>
  );
};

export default SingleBlog;
