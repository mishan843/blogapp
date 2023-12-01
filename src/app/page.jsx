import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export const metadata = {
  title: {
    default:
      "bloggersGround - Your Finance, Fashion, Coding, Technology and Travel Companion",
    template: "%s - bloggersGround",
  },
  description:
    "Get expert insights on finance, style inspiration, coding techniques, technology and travel tips from bloggersGround. Explore endless possibilities with us.",
  keywords: ["Fashion blogs", "travel blogs", "finance blog", "blogging"],
  openGraph: {
    title:
      "bloggersGround - Your Finance, Fashion, Coding, Technology and Travel Companion",
    description:
      "Get expert insights on finance, style inspiration, coding techniques, technology and travel tips from bloggersGround. Explore endless possibilities with us.",
    url: process.env.DOMAIN,
    siteName: "bloggersGround",
    locale: "en_US",
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
    title: `bloggersGround - Your Finance, Fashion, Coding, Technology and Travel Companion `,
    description: `Get expert insights on finance, style inspiration, coding techniques, technology and travel tips from bloggersGround. Explore endless possibilities with us.`,
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
