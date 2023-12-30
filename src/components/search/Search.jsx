import React from "react";
import styles from "./search.module.css";
const Search = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.searchinput}
        placeholder="search..."
      />
      <button className={styles.searchbtn}>Search</button>
    </div>
  );
};

export default Search;
