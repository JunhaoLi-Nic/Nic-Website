import './Project.css'; // Ensure this CSS file is correctly linked and loaded
import Header from '@components/Header/header';
import Footer from '@components/footer';
import AMSLImage from './assets/images/AMSL_airplane.jpg';
import SuperMarioImage from './assets/images/SuperMario.jpg';
import ARImage from './assets/images/AR_Glasses.jpg';

const projects = [
  {
    id: '01  (Industrial Project)',
    title: ' Utilization of Large Language Models (LLMs) in Aerospace Software Testing',
    description: 'Developed a prototype application integrating advanced LLM to automate the generation of test scenarios from aerospace software requirements. This project aims to improve testing efficiency and accuracy in compliance with safety and regulatory standards like DO-178C.',
    imageUrl:{AMSLImage} ,
    readMoreLink: 'https://github.com/JunhaoLi-Nic'
  },
  {
    id: '02 (Object oriented programming)',
    title: 'Super Mario Game Simulator',
    description: ' A Mario-inspired roguelike game was developed, adhering to SOLID design principles for robustness and maintainability. The project involved detailed planning using UML and sequential diagrams, followed by the creation of a game engine that allowed for smooth control of the Mario character. Various game scenes and functionalities were also designed and implemented to enhance gameplay and optimize performance. This development showcased advanced skills in game design and software engineering, focusing on delivering an engaging and well-organized gaming experience.',
    imageUrl: {SuperMarioImage},
    readMoreLink: 'https://github.com/JunhaoLi-Nic/Mario-Game-2D'
  },
  {
    id: '03 (Augmented Reality Glass)',
    title: 'AR Shopping List glasses',
    description: 'It is built on Unity with integration from Android Studio and the XReal (Nreal) SDK, enables AR Shopping List organization by detecting objects dynamically. We designed a user friendly interface that lets users engage with a virtual shopping list shown on AR glasses. The system uses a CSV file to efficiently store and update the shopping list, which users can manage through a simple UI in the AR setting. Key features include real time item detection and validation, supported by the app\'s ability to identify items from the shopping list in the store\'s environment and confirm selections directly through the glasses.',
    imageUrl: {ARImage},
    readMoreLink: 'https://github.com/YapSengKuang/AR-Glasses'
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
            <a href={project.readMoreLink} className="read-more-link">
                <img src="src/assets/vectors/link_icon.svg" alt="Link Icon" />
            </a>
          </div>
        </div>
      ))}
    </div>
    <Footer />
  </div>
);

export default Project;
