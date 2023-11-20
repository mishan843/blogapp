import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export const metadata = {
  title: {
    default: "bloggersGround",
    template: "%s - bloggersGround",
  },
  description:
    "Navigate the dynamic world of finance, embrace the latest trends in style and fashion, master the art of coding, explore the wonders of technology, and embark on captivating adventures around the globe – our blog is your one-stop destination for knowledge, inspiration, and endless possibilities. Whether you're a finance enthusiast seeking expert insights, a fashionista seeking style inspiration, a tech-savvy individual eager to learn new coding techniques, or an adventurous traveler yearning to explore new horizons, our blog is your ideal companion.",
  keywords: ["Fashion blogs", "travel blogs", "finance blog", "blogging"],
  openGraph: {
    title: "bloggersGround",
    description:
      "Navigate the dynamic world of finance, embrace the latest trends in style and fashion, master the art of coding, explore the wonders of technology, and embark on captivating adventures around the globe – our blog is your one-stop destination for knowledge, inspiration, and endless possibilities. Whether you're a finance enthusiast seeking expert insights, a fashionista seeking style inspiration, a tech-savvy individual eager to learn new coding techniques, or an adventurous traveler yearning to explore new horizons, our blog is your ideal companion.",
    url: process.env.DOMAIN,
    siteName: "bloggersGround",
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
    title: `bloggersGround`,
    description: `bloggersGround`,
    creator: "bloggersGround",
    images: [
      `https://drive.google.com/uc?id=1mFTAHt1IRc4OSqKRMbqIsRzO93kYJ5LB`,
    ],
  },
  alternates: {
    canonical: `${process.env.DOMAIN}`,
  },
};
export default function Home() {
  return (
    <div className={styles.container}>
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
