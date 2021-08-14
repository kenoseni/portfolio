import cert from '../images/certauto2.png';
import beats from '../images/beats3.png';
import ranker from '../images/cvranker2.png';
import eko360 from '../images/eko360_1.png';
import eko360Portal from '../images/eko360_portal_2.png';
import weather from '../images/weather2.png';
import eko360mobile from '../images/eko360_mobile.jpeg';
import emanager from '../images/emanager.png';

const projects = [
  {
    title: 'EKO360 Admin Interface',
    description: 'A data collection tool admin interface to impact governance',
    frontend: 'React(hooks)',
    backend: 'NodeJS, Express, Sequelize',
    database: 'Database: Postgres',
    deployment: 'Azure',
    image: eko360,
    color1: '#077e86',
    color2: '#000a0a',
    production: 'Production',
  },
  {
    title: 'Certificate AutoVerification',
    description: 'Auto Verifies Valid Certificates Issued',
    frontend: 'React(hooks)',
    backend: 'NodeJS, Express, Mongoose Docker(Multistage build)',
    database: 'Database: MongoDB',
    deployment: 'Heroku(API), Netlify(Frontend)',
    image: cert,
    color1: '#053a31',
    color2: '#438b44',
    production: 'Staging',
  },
  {
    title: 'Beats',
    description: 'Enjoy streams of audio music',
    frontend: 'React(hooks)',
    backend: 'NodeJS, Static Data',
    database: 'Storage: Cloudunary',
    deployment: 'Netlify(Frontend)',
    image: beats,
    color1: '#051e2e',
    color2: '#199ff1',
    production: 'Production',
  },
  {
    title: 'Eko360 Portal and CMS',
    description:
      'User portal for data analysis and visualization of Lagos Data',
    frontend: 'React(hooks)',
    backend: 'NodeJS, Express, Sequelize',
    database: 'Database: MySQL',
    deployment: 'Azure',
    image: eko360Portal,
    color1: '#6f8586',
    color2: '#021f1f',
    production: 'Production',
  },
  {
    title: 'CV Filter',
    description: 'Find the best CV that matches a job description',
    frontend: 'Jinja2, CSS3',
    backend: 'Python3(Flask), SQLALchemy, Docker(Multistage build)',
    database: 'Database: Postgres',
    deployment: 'Heroku(API), Netlify(Frontend)',
    image: ranker,
    color1: '#6f8da7',
    color2: '#031b2b',
    production: 'Staging',
  },
  {
    title: 'Weather app',
    description: 'Get the latest weather information for your location',
    frontend: 'Handlebars',
    backend: 'NodeJS, WeatherStack, MapBox',
    database: 'None',
    deployment: 'Heroku',
    image: weather,
    color1: '#061f30',
    color2: '#12ac78',
    production: 'Production',
  },
  {
    title: 'EKO360 Mobile Application',
    description: 'A mobile application for data collection',
    frontend: 'React Native',
    backend: 'NodeJS, Express, Sequelize',
    database: 'Database: Postgres',
    deployment: 'PlayStore, App Store',
    image: eko360mobile,
    color1: '#a5c7dd',
    color2: '#031b2b',
    production: 'Production',
  },
  {
    title: 'Event Manager',
    description: 'A mobile application for data collection',
    frontend: 'React(class-based)',
    backend: 'NodeJS, Express, Sequelize',
    database: 'Database: Postgres',
    deployment: 'Heroku',
    image: emanager,
    color1: '#1d89d1',
    color2: '#031b2b',
    production: 'Deprecated',
  },
];

export default projects;
