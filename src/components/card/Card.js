import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>24.10.2023 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
            odit.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          repellat dolore voluptatibus aperiam repudiandae exercitationem
          possimus, fugit, praesentium odio, asperiores fugiat libero quod error
          modi alias reprehenderit ipsum nesciunt quasi?
        </p>
        <Link href="/"  className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
