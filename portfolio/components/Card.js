import Link from 'next/link';
import styles from '../styles/sass/Card.module.scss';

const Card = ({
  title,
  description,
  frontend,
  backend,
  database,
  deployment,
  image,
  color1,
  color2,
  production,
}) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.card__side} ${styles.card__side__front}`}>
        <div
          className={styles.card__picture}
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        >
          &nbsp;
        </div>
        <h4 className={styles.card__heading}>
          <span
            style={{
              backgroundImage: `linear-gradient(to right bottom, ${color1}, ${color2})`,
            }}
          >
            {title}
          </span>
        </h4>
        <div className={styles.card__details}>
          <ul>
            <li>{description}</li>
            <li>Frontend: {frontend}</li>
            <li>Backend: {backend}</li>
            <li>{database}</li>
            <li>Deployment: {deployment}</li>
            <li>Production Status: {production}</li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles.card__side} ${styles.card__side__back}`}
        style={{
          backgroundImage: `linear-gradient(to right bottom, ${color1}, ${color2})`,
        }}
      >
        <Link href="/projects">
          <a>View more</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
