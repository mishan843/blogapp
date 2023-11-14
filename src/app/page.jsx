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
  openGraph: {
    title: "bloggersGround",
    description:
      "Bloggers Ground - A platform designed specifically for bloggers. Connect with us, access helpful services, and grow your blog",
    url: "bloggersground.com",
    siteName: "bloggersGround",
    images: [
      {
        url: "https://drive.google.com/uc?id=1ctCe5W1DBcxfsRrSdjUp6avfwCZ6lUBd",
        width: 1200,
        height: 600,
      },
    ],
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
