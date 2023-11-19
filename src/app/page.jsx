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
    "Bloggers Ground - A platform designed specifically for bloggers. Connect with us, access helpful services, and grow your blog",
  keywords: ["Fashion blogs", "travel blogs", "finance blog", "blogging"],
  openGraph: {
    title: "bloggersGround",
    description:
      "Bloggers Ground - A platform designed specifically for bloggers. Connect with us, access helpful services, and grow your blog",
    url: process.env.DOMAIN,
    siteName: "bloggersGround",
    images: [
      {
        url: "https://drive.google.com/uc?id=1ctCe5W1DBcxfsRrSdjUp6avfwCZ6lUBd",
        width: 1200,
        height: 600,
      },
      {
        url: "https://drive.google.com/uc?id=1ctCe5W1DBcxfsRrSdjUp6avfwCZ6lUBd",
        width: 1080,
        height: 1080, // Instagram square image size
      },
      {
        url: "https://drive.google.com/uc?id=1ctCe5W1DBcxfsRrSdjUp6avfwCZ6lUBd",
        width: 600,
        height: 315, // Twitter share image size
      },
      {
        url: "https://drive.google.com/uc?id=1ctCe5W1DBcxfsRrSdjUp6avfwCZ6lUBd",
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
      `https://drive.google.com/uc?id=1ctCe5W1DBcxfsRrSdjUp6avfwCZ6lUBd`,
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
