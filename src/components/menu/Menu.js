import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPost/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Most Popular</h2>
      <MenuPosts withImage={true} />
      <h2 className={styles.title}>Categories</h2>
      <MenuCategories />
      <h2 className={styles.title}>Editors Pick</h2>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
