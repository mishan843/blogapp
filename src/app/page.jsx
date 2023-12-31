import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import Search from "@/components/search/Search";
import HomePageInfo from "@/components/homepageInfo/page";

export const metadata = {
  title: {
    default: "BloggersGround: Finance, Fashion, Coding, Tech, Travel Guide",
    template: "%s - bloggersGround",
  },
  description:
    "Get expert insights on finance, style inspiration, coding techniques, technology and travel tips from bloggersGround. Explore endless possibilities with us.",
  keywords: ["Fashion blogs", "travel blogs", "finance blog", "blogging"],
  openGraph: {
    title: "BloggersGround: Finance, Fashion, Coding, Tech, Travel Guide",
    description:
      "Get expert insights on finance, style inspiration, coding techniques, technology and travel tips from bloggersGround. Explore endless possibilities with us.",
    url: process.env.DOMAIN,
    siteName: "bloggersGround",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://drive.google.com/uc?id=1mFTAHt1IRc4OSqKRMbqIsRzO93kYJ5LB",
        width: 1200,
        height: 600,
      },
      {
        url: "https://drive.google.com/uc?id=1mFTAHt1IRc4OSqKRMbqIsRzO93kYJ5LB",
        width: 1080,
        height: 1080, // Instagram square image size
      },
      {
        url: "https://drive.google.com/uc?id=1mFTAHt1IRc4OSqKRMbqIsRzO93kYJ5LB",
        width: 600,
        height: 315, // Twitter share image size
      },
      {
        url: "https://drive.google.com/uc?id=1mFTAHt1IRc4OSqKRMbqIsRzO93kYJ5LB",
        width: 540,
        height: 540, // WhatsApp share image size
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `BloggersGround: Finance, Fashion, Coding, Tech, Travel Guide `,
    description: `Get expert insights on finance, style inspiration, coding techniques, technology and travel tips from bloggersGround. Explore endless possibilities with us.`,
    creator: "bloggersGround",
    images: [
      `https://drive.google.com/uc?id=1mFTAHt1IRc4OSqKRMbqIsRzO93kYJ5LB`,
    ],
  },
  alternates: {
    canonical: `${process.env.DOMAIN}`,
  },
  appleTouchIcon: "https://www.bloggersground.com/favicon.ico",
  appleTouchIconPrecomposed: "https://www.bloggersground.com/favicon.ico",
  themeColor: "#ffffff", // Add the desired theme color
};
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles["welcome-text"]}>
        <h1>Welcome to Bloggers Ground</h1>
        <p>
          Explore the world of knowledge and inspiration at Bloggers Ground, a
          platform dedicated to providing valuable insights across various
          topics. Whether you&apos;re interested in finance, fashion, coding,
          travel, or technology, we&apos;ve got you covered.
        </p>
      </div>

      <CategoryList />
      <Search />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
      <HomePageInfo />
    </div>
  );
}
