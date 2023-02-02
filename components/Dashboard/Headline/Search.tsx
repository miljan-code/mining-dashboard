import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.search}>
      <h2>Search</h2>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Enter Search Term" />
        <button type="button">
          <img src="/search.svg" alt="Search" />
        </button>
      </div>
    </div>
  );
};

export default Search;
