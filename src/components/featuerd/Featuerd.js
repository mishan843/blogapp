import React from "react";
import styles from "./featuerd.module.css";
import Image from "next/image";

const Featuerd = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Mishan is here, </b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo unde
            asperiores impedit quia earum itaque.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab
            dolore, praesentium a reprehenderit, sint sed voluptatem,
            repudiandae dolores necessitatibus itaque quisquam sapiente cumque.
            Est ipsa quasi distinctio eveniet maxime.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featuerd;
