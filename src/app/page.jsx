import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export const metadata = {
  title: "bloggerGround",
  description: "bloggerGround",
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
