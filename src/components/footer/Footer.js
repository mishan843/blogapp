import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.imageContainer}>
          <img width={200} height="auto" loading="eager" title="bloggersGround" className={styles.logo} src="https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705581808/dyicko2aqcdigghxianj.webp" alt="bloggersGround" />
        </div>
        <p className={styles.desc}>
          Discover a world of inspiration, explore creativity, and connect with
          like-minded individuals. Unleash your passions with our versatile
          blogging platform. Join our community today.
        </p>
        <div className={styles.icons}>
          <Link href="https://x.com/Bloggers_Ground?t=-nndOfYb4HzPvHxBi-YJwg&s=09"><img loading="eager" title="github" src="/twitter.webp" alt="bloggersGround twitter" width={24} height={24} /></Link>
          <Link href="https://instagram.com/bloggers_ground?igshid=MmVlMjlkMTBhMg=="><img loading="eager" title="instagram" src="/instagram.webp" alt="bloggersGround instagram" width={24} height={24} /></Link>
          <Link href="https://www.facebook.com/profile.php?id=61553443388186&mibextid=ZbWKwL"><img loading="eager" title="facebook" src="/facebook.webp" alt="bloggersGround facebook" width={24} height={24} /></Link>
        </div>
      </div>
      <div className={styles.link_contaner}>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">Home</Link>
            <Link href="/">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact us</Link>
            <Link href="/privacypolicy">Privacy Policy</Link>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/blog/getallblogs?categoryFilter=Technology">
              Technology
            </Link>
            <Link href="/blog/getallblogs?categoryFilter=Fashion">
              Fashion
            </Link>
            <Link href="/blog/getallblogs?categoryFilter=Coding">
              Coding
            </Link>
            <Link href="/blog/getallblogs?categoryFilter=Travel">
              Travel
            </Link>
            <Link href="/blog/getallblogs?categoryFilter=Finance">
              Finance
            </Link>
            <Link href="/blog/getallblogs?categoryFilter=Food">
              Food
            </Link>
            <Link href="/blog/getallblogs?categoryFilter=Digital Marketing">
              Digital Marketing
            </Link>
            <Link href="/blog/getallblogs?categoryFilter=Life Hacks">
              Life Hacks
            </Link>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href="https://instagram.com/bloggers_ground?igshid=MmVlMjlkMTBhMg==">Instagram</Link>
            <Link href="https://x.com/Bloggers_Ground?t=-nndOfYb4HzPvHxBi-YJwg&s=09">Twitter</Link>
            <Link href="https://www.facebook.com/profile.php?id=61553443388186&mibextid=ZbWKwL">Facebook</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
