import Link from 'next/link';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import styles from '../styles/sass/Navigation.module.scss';
const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <input
        id="navi-toggle"
        type="checkbox"
        className={styles.navigation__checkbox}
      />
      <label htmlFor="navi-toggle" className={styles.navigation__button__back}>
        <span className={styles.navigation__icon__back}>
          <IoCloseOutline />
        </span>
      </label>
      <label htmlFor="navi-toggle" className={styles.navigation__button}>
        <span className={styles.navigation__icon}>
          <IoMenuOutline />
        </span>
      </label>
      <div className={styles.navigation__background}>&nbsp;</div>
      <nav className={styles.navigation__nav}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <Link href="/">
              <a className={styles.navigation__link}>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li className={styles.navigation__item}>
            <Link href="/projects">
              <a className={styles.navigation__link}>
                <span>Projects</span>
              </a>
            </Link>
          </li>
          <li className={styles.navigation__item}>
            <a href="/blog" className={styles.navigation__link}>
              <span>Blog</span>
            </a>
          </li>
          <li className={styles.navigation__item}>
            <Link href="/resume">
              <a className={styles.navigation__link}>
                <span>Resume</span>
              </a>
            </Link>
          </li>
          <li className={styles.navigation__item}>
            <Link href="/contact">
              <a className={styles.navigation__link}>
                <span>Contact</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
