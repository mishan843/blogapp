import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPost/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's New"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={true} />
      <h2 className={styles.subtitle}>Discover by Category</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the Editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
