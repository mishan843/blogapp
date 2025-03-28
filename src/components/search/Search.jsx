import styles from "./search.module.css";

const Search = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.searchinput}
        placeholder="Search articles..."
      />
      <button className={styles.searchbtn} aria-label="Search" />
    </div>
  );
};

export default Search;