import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            optio!
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
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              eius vel velit rem dolores. Minus, vero dolores. Assumenda alias
              sit architecto corrupti sunt placeat corporis! Quae pariatur qui
              exercitationem amet!
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
              <Comments />
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Page;
