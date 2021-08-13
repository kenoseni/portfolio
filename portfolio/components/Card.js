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
}) => {
  console.log(color1);
  return (
    <div className={styles.card}>
      <div className={styles.card__side}>
        <div
          className={styles.card__picture}
          style={{
            backgroundImage: `linear-gradient(to right, ${color1}, ${color2}), url(${image.src})`,
          }}
        >
          &nbsp;
        </div>
        <h4 className={styles.card__heading}>
          <span
            style={{
            color: `${color1}`,
              backgroundImage: `linear-gradient(to right bottom, rgba(${color1}, 0.85), rgba(${color2}, 0.85)))`,
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
            <li>Staging Deployment: {deployment}</li>
          </ul>
        </div>
      </div>
      <div className="card__side card__side__back card__side__back__1">
        <Link href="/projects">
          <a>View more</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
