import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPost/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={true} />
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
