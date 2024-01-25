"use client"

import styles from "./comments.module.css";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const Comments = ({ singleBlog, setSingleBlog }) => {
  const status = localStorage.getItem("user");
  const userData = JSON.parse(status);
  const searchParams = useSearchParams();
  const search = searchParams.get('id');
  const [text, setText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;
  const allcomment = [...singleBlog[0]?.userComment || []]

  // Calculate the index range for comments to display on the current page
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  allcomment.reverse()
  const currentComments = allcomment.slice(indexOfFirstComment, indexOfLastComment) || [];

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      setText('');
      setCurrentPage(1)
      singleBlog[0]?.userComment.push({
        name: userData.name,
        text: text,
        userId: userData._id
      })
      setSingleBlog(singleBlog)

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/addComment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          blogId: search,
          userId: userData.data._id,
        }),
      });

      if (response.ok) {

      } else {
      }
    } catch (error) {
      console.error('Error adding a comment:', error);
    }
  };

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      <div className={styles.write}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a comment..." className={styles.input} />
        <button onClick={status ? handleComment : () => { window.location.href = '/login'; }} className={styles.button}>
          Send
        </button>      </div>
      {currentComments.map((item, index) => {
        item.name = "User"

        if (item.name) {
          return (
            <div className={styles.comment} key={index}>
              <div className={styles.user}>
                <img
                  loading="eager"
                  title="BloggersGround logo"
                  src="https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705059271/orunbmkvtnv7kswnh1tz.webp"
                  alt="BloggersGround logo"
                  width={50}
                  height={50}
                  className={styles.image}
                />
                <div className={styles.userInfo}>
                  <span className={styles.username}>{item.name}</span>
                  <span className={styles.date}>26.10.2023</span>
                </div>
              </div>
              <p className={styles.desc}>{item.text}</p>
            </div>
          );
        }
      })}
      <div className={styles.pagination}>
        {
          Array.from({ length: Math.ceil(singleBlog[0]?.userComment.length / commentsPerPage) }, (_, i) => {

            return (<button className={i + 1 == currentPage ? styles.active_page : styles.pagination_button} key={i} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>)
          })}
      </div>
    </div>
  );
};

export default Comments;
