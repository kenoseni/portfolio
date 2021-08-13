import styles from '../styles/sass/Projects.module.scss';
import Card from './Card';
import cert from '../images/certauto2.png';
import beats from '../images/beats3.png';
import ranker from '../images/cvranker2.png'

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div>
        <h2 className={styles.heading__primary}>Projects</h2>
      </div>
      <div className={styles.card__grid}>
        <Card
          title={'Certificate AutoVerification'}
          description={'Auto Verifies Valid Certificates Issued'}
          frontend={'React, Hooks'}
          backend={'NodeJs, ORM(Mongoose) Docker(Multistage build)'}
          database={'Database: MongoDB'}
          deployment={'Heroku(API), Netlify(Frontend)'}
          image={cert}
          color1={'#053a31'}
          color2={'#438b44'}
        />
        <Card
          title={'Beats'}
          description={'Enjoy streams of audio music'}
          frontend={'React, Hooks'}
          backend={'None'}
          database={'Storage: Cloudunary'}
          deployment={'Netlify(Frontend)'}
          image={beats}
          color1={'#061f30'}
          color2={'#031b2b'}
        />
        <Card
          title={'CV Filter'}
          description={'Find the best CV that matches a job'}
          frontend={'Jinja2, CSS3'}
          backend={'Python3(Flask), SQLALchemy, Docker(Multistage build)'}
          database={'Database: Postgres'}
          deployment={'Heroku(API), Netlify(Frontend)'}
          image={ranker}
          color1={'#061f30'}
          color2={'#031b2b'}
        />
      </div>
    </section>
  );
};

export default Projects;
