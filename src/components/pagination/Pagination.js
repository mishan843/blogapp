import styles from './pagination.module.css';

const Pagination = ({ onPageChange, currentPage, totalPages }) => {
  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className={styles.pageInfo}>Page {currentPage} of {totalPages}</span>
      <button
        className={styles.button}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
