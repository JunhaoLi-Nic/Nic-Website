import './Project.css'; // Ensure this CSS file is correctly linked and loaded
import { Header } from '@components/Header/header';
import Footer from '@components/footer';

const projects = [
  {
    id: '01',
    title: 'Crypto Screener Application',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    imageUrl: 'path/to/crypto-screener-image.jpg',
    readMoreLink: '#'
  },
  {
    id: '02',
    title: 'Euphoria - Ecommerce (Apparels) Website Template',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    imageUrl: 'path/to/euphoria-image.jpg',
    readMoreLink: '#'
  },
  {
    id: '03',
    title: 'Blog Website Template',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    imageUrl: 'path/to/blog-website-image.jpg',
    readMoreLink: '#'
  }
];

const Project = () => (
  <div className="app">
    <Header />
    <div className="project-container">
      <h1 className="project-header">My Projects</h1>
      {projects.map((project, index) => (
        <div key={project.id} className={`project-item ${index % 2 === 0 ? 'normal' : 'reversed'}`}>
          <div className="project-image" style={{ backgroundImage: `url(${project.imageUrl})` }}></div>
          <div className="project-content">
            <div className="project-id">{project.id}</div>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.readMoreLink} className="read-more-link">Read More</a>
          </div>
        </div>
      ))}
    </div>
    <Footer />
  </div>
);

export default Project;
