import styles from '../styles/sass/NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h1>
        Oh Crap!!! <span>:(</span>
      </h1>
      <p>Sorry, this page is going through a revamp, please check back later.</p>
    </div>
  );
};

export default NotFound;
