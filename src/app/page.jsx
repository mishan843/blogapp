import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export const metadata = {
  title: "bloggerGround - A Platform for Bloggers | bloggerGround",
  description:
    "Join bloggerGround, a platform designed specifically for bloggers. Connect with us, access helpful services, and grow your blog.",
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
