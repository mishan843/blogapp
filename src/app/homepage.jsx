import { container, content, welcomeText } from "./homepage.module.css";

import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import Search from "@/components/search/Search";
import HomePageInfo from "@/components/homepageInfo/page";

export default function Page({ data }) {
  return (
    <div className={container}>
      <div className={welcomeText}>
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
      <div className={content}>
        <CardList />
      </div>
      <HomePageInfo />
      <Menu />
    </div>
  );
}

export async function getServerSideProps() {
  const data = {
    description:
      "Explore the world of knowledge and inspiration at Bloggers Ground, a platform dedicated to providing valuable insights across various topics. Whether you&apos;re interested in finance, fashion, coding, travel, or technology, we&apos;ve got you covered.",
  };

  // Pass data to the page via props
  return { props: { data } };
}
