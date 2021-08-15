import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

import styles from '../styles/sass/Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={`${styles.social} ${styles.social__github}`}>
        <a href="https://github.com/kenoseni/" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className={`${styles.social} ${styles.social__github}`}>
        <a
          href="https://www.linkedin.com/in/olusola-oseni-3a6055100"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className={`${styles.social} ${styles.social__github}`}>
        <a href="https://www.twitter.com/kenolusola/" target="_blank">
          <FaTwitter />
        </a>
      </div>
      <div className={`${styles.social} ${styles.social__github}`}>
        <a href="https://www.instagram.com/kenoseni/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </>
  );
};

export default Footer;
