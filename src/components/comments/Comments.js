import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const Comments = ({ singleBlog }) => {
  const status = localStorage.getItem("user");
  const userData = JSON.parse(status)
  const searchParams = useSearchParams()
  const search = searchParams.get('id')
  console.log('singleBlog :>> ', singleBlog);
  const [text, setText] = useState('')

  const handleComment = async (e) => {
    e.preventDefault();
    // useEffect(async() => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/addComment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          blogId: search,
          userId: userData.data._id
        }),
      });

      if (response.ok) {
        alert("comment successful")
      } else {
        console.error('Error signing up:', response.statusText);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
    // }, [router.query])
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status ? (
        <div className={styles.write}>
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a comment..." className={styles.input} />
          <button onClick={handleComment} className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      {singleBlog.map((item) => {
        return (
          <div key={item.id} className={styles.comments}>
            {item.userComment.map((item, index) => {
              if (item.name) {
                return (

                  <div className={styles.comment} key={index}>
                    <div className={styles.user}>
                      <img
                        src="/p1.jpeg"
                        alt=""
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
                )
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
