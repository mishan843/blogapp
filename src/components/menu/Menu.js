import styles from "./menu.module.css";
import MenuPosts from "../menuPost/MenuPosts";
import RandomPost from "../menuPost/randomPost";

import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* Most Popular Section */}
      <h2 className={styles.title}>Most Popular</h2>
      <MenuPosts withImage={true} />

      {/* Categories Section */}
      <h2 className={styles.title}>Categories</h2>
      <MenuCategories />

      {/* Editors Pick Section */}
      <h2 className={styles.title}>Editors Pick</h2>
      <RandomPost withImage={true} />
    </div>
  );
};

export default Menu;
