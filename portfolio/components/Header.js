import styles from '../styles/sass/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__text}>
        <h1 className={styles.header__about}>
          <span className={styles.header__about__intro}>
            Hello, I'm{' '}
            <span className={styles.header__about__name}>Olusola Oseni.</span>
          </span>
          <span className={styles.header__about__stack}>
            I am a full-stack software engineer who specializes in JavaScript
            and Python.
          </span>
          <span className={styles.header__about__morestack}>
            I also build mobile applications with React Native
          </span>
          <span className={styles.header__about__others}>
            Feel free to look at all the projects that I have worked on
          </span>
          <span className={styles.header__about__avaliability}>
            Remotely available UTC-1 to UTC+8 and connect at
            <span className={styles.header__about__name}>
              &nbsp;kenolusola@gmail.com
            </span>
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
