import styles from '../styles/sass/Projects.module.scss';
import Card from './Card';
import projects from '../constants/projetcs';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div>
        <h2 className={styles.heading__primary}>Projects</h2>
      </div>
      <div className={styles.card__grid}>
        {projects.map((project, key) => {
          return (
            <Card
              key={key}
              title={project.title}
              description={project.description}
              frontend={project.frontend}
              backend={project.backend}
              database={project.database}
              deployment={project.deployment}
              image={project.image}
              color1={project.color1}
              color2={project.color2}
              production={project.production}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
