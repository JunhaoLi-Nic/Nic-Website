import './App.css'
import { Header } from '@components/Header/header'
import MainPage from '@components/main_page.tsx';
import AboutMe from './AboutMe.tsx'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <MainPage />
      <div className="skills">
        <div className="row">
          <span className="my">
            My
          </span>
          <span className="skills-1">
            Skills
          </span>
        </div>
        <div className="row-1">
          <div className="column">
            <div className="skills-2">
              <div className="icon-git">
                <img className="vector-41" src="src/assets/vectors/Vector26_x2.svg" />
              </div>
              <span className="javascript">
                Git
              </span>
            </div>
            <div className="skills-3">
              <div className="icon-javscript">
                <img className="vector-43" src="src/assets/vectors/Vector4_x2.svg" />
              </div>
              <span className="javascript-1">
                javascript
              </span>
            </div>
            <div className="skills-4">
              <img className="icon-react" src="src/assets/vectors/IconReact1_x2.svg" />
              <span className="javascript-2">
                React
              </span>
            </div>
            <div className="skills-5">
              <div className="logosnodejs">
                <img className="group-24" src="src/assets/vectors/Group7_x2.svg" />
              </div>
              <span className="javascript-3">
                Node.Js
              </span>
            </div>
            <div className="skills-6">
              <div className="icon-docker">
                <img className="vector-52" src="src/assets/vectors/Vector84_x2.svg" />
              </div>
              <span className="javascript-4">
                Docker
              </span>
            </div>
          </div>
          <div className="column-1">
            <div className="skills-10">
              <div className="icon-nest">
                <img className="vector-56" src="src/assets/vectors/Vector57_x2.svg" />
              </div>
              <span className="javascript-8">
                Jenkins
              </span>
            </div>
            <div className="skills-7">
              <div className="icon-git-1">
                <img className="vector-53" src="src/assets/vectors/Vector19_x2.svg" />
              </div>
              <span className="javascript-5">
                AWS
              </span>
            </div>
            <div className="skills-11">
              <img className="icon-storybook" src="src/assets/vectors/IconStorybook_x2.svg" />
              <span className="javascript-9">
                Kubernetes
              </span>
            </div>
            <div className="skills-8">
              <div className="icon-socket">
                <img className="vector-54" src="src/assets/vectors/Vector49_x2.svg" />
              </div>
              <span className="javascript-6">
                MySQL
              </span>
            </div>
            <div className="skills-9">
              <div className="icon-sass">
                <img className="vector-55" src="src/assets/vectors/Vector27_x2.svg" />
              </div>
              <span className="javascript-7">
                Python
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-5">
        <div className="row-4">
          <span className="my-4">
            My
          </span>
          <span className="experience">
           Work Experience
          </span>
        </div>
        <div className="row-5">
          <div className="experience-1">
            <div className="frame-1000015887">
              <div className="frame-1000015886">
                <img className="sil3" src="src/assets/vectors/Google6_x2.svg" />
                <div className="lead-software-engineer-at-google">
                  Software Engineer at SIL3 PTY LTD
                </div>
              </div>
              <div className="nov-2019-present">
                July 2023 - Present
              </div>
            </div>
            <span className="as-asenior-software-engineer-at-google-iplayed-apivotal-role-in-developing-innovative-solutions-for-googles-core-search-algorithms-collaborating-with-adynamic-team-of-engineers-icontributed-to-the-enhancement-of-search-accuracy-and-efficiency-optimizing-user-experiences-for-millions-of-users-worldwide">
            At SIL3 Pty Ltd, I have been contributing to the development of a flight control system for AMSL Aero Pty Ltd using the Arcadia methodology. My role involves generating test cases based on specifications, standards, or concepts in C#, ensuring any failing tests are identified and corrected. Additionally, I manage the integration of test cases with Jenkins for continuous integration and deployment, making sure that changes in the code base are reflected in the test cases.
            </span>
          </div>
          <div className="experience-2">
            <div className="frame-10000158871">
              <div className="frame-10000158861">
                <img className="sil3" src="src/assets/vectors/Google6_x2.svg" />
                <div className="lead-software-engineer-at-google-1">
                  Software Engineer Intern at SIL3 PTY LTD
                </div>
              </div>
              <div className="nov-2019-present-1">
                Nov 2022 - Feb 2023
              </div>
            </div>
            <span className="as-asenior-software-engineer-at-google-iplayed-apivotal-role-in-developing-innovative-solutions-for-googles-core-search-algorithms-collaborating-with-adynamic-team-of-engineers-icontributed-to-the-enhancement-of-search-accuracy-and-efficiency-optimizing-user-experiences-for-millions-of-users-worldwide-1">
            effectively contributed to the debugging and verification of embedded firmware in C on Texas Instruments RM57 safety CPUs, ensuring robust performance on hardware targets. I also performed comprehensive software verification and validation using Microsoft Visual Studio. Additionally, I undertook development and investigative initiatives on Jetson Nano development hardware, leveraging my skills in Linux, Python, and C# to enhance project outcomes.
            </span>
          </div>
        </div>
      </div>
      
      <div className="project">
        <div className="heading">
          <span className="my-2">
            My
          </span>
          <span className="projects">
            Projects
          </span>
        </div>
        <div className="project-1">
          <div className="image">
            <div className="image-771">
            </div>
          </div>
          <div className="details">
            <div className="container">
              01
            </div>
            <div className="crypto-screener-application">
              Crypto Screener Application
            </div>
            <div className="im-evren-shah-lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-lorem-ipsum-has-been-the-industrys-standard-dummy-text-ever-since-the-1500-swhen-an-unknown-printer-took-agalley-of-type-and-scrambled-it-to-specimen-book">
              I&#39;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
            </div>
            <div className="read-more">
              <img className="export" src="src/assets/vectors/Export5_x2.svg" />
            </div>
          </div>
        </div>
        <div className="project-2">
          <div className="details-1">
            <div className="container-1">
              02
            </div>
            <div className="euphoria-ecommerce-apparels-website-template">
              Euphoria - Ecommerce (Apparels) Website Template
            </div>
            <div className="im-evren-shah-lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-lorem-ipsum-has-been-the-industrys-standard-dummy-text-ever-since-the-1500-swhen-an-unknown-printer-took-agalley-of-type-and-scrambled-it-to-specimen-book-when-an-unknown-printer-took-agalley-of-type-and-scrambled-it-to-specimen-book">
              I&#39;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.<br />
              when an unknown printer took a galley of type and scrambled it to specimen book.
            </div>
            <div className="read-more-1">
              <img className="export-1" src="src/assets/vectors/Export9_x2.svg" />
            </div>
          </div>
          <div className="image-1">
            <div className="image-770">
            </div>
          </div>
        </div>
        <div className="project-3">
          <div className="image-2">
            <div className="image-7701">
            </div>
          </div>
          <div className="details-2">
            <div className="container-2">
              03
            </div>
            <div className="blog-website-template">
              Blog Website Template
            </div>
            <div className="im-evren-shah-lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-lorem-ipsum-has-been-the-industrys-standard-dummy-text-ever-since-the-1500-swhen-an-unknown-printer-took-agalley-of-type-and-scrambled-it-to-specimen-book-1">
              I&#39;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
            </div>
            <div className="read-more-2">
              <img className="export-2" src="src/assets/vectors/Export13_x2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="column-2">
          <div className="component-1">
            <div className="frame-1000015865">
              <span className="your-name">
                Your name
              </span>
            </div>
          </div>
          <div className="component-2">
            <div className="frame-10000158651">
              <span className="your-name-1">
                Email
              </span>
            </div>
          </div>
          <div className="component-3">
            <div className="frame-10000158652">
              <span className="your-name-2">
                Your website (If exists)
              </span>
            </div>
          </div>
          <div className="component-4">
            <div className="frame-10000158653">
              <span className="how-can-ihelp">
                How can I help?*
              </span>
            </div>
          </div>
          <div className="button">
            <div className="button-3">
              <span className="resume">
                Get In Touch
              </span>
            </div>
            <div className="button-4">
              <img className="vector-70" src="src/assets/vectors/Vector20_x2.svg" />
            </div>
            <div className="button-5">
              <img className="subtract" src="src/assets/vectors/Subtract5_x2.svg" />
            </div>
            <div className="button-6">
              <img className="vector-71" src="src/assets/vectors/Vector45_x2.svg" />
            </div>
            <div className="button-7">
              <img className="group-1" src="src/assets/vectors/Group11_x2.svg" />
            </div>
          </div>
        </div>
        <div className="column-3">
          <div className="frame-1000015867">
            <div className="frame-1000015874">
              <div className="frame-1000015866">
                <span className="lets">
                  Let’s
                </span>
                <span className="talk">
                  talk
                </span>
                <span className="for">
                  for
                </span>
              </div>
              <span className="something-special">
                Something special
              </span>
            </div>
            <span className="iseek-to-push-the-limits-of-creativity-to-create-high-engaging-user-friendly-and-memorable-interactive-experiences">
              I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
            </span>
          </div>
          <div className="frame-1000015868">
            <div className="youremailgmail-com">
              Youremail@gmail.com
            </div>
            <span className="container-3">
              1234567890
            </span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="frame-16">
          <div className="logo-11">
            <img className="group-27" src="src/assets/vectors/Group4_x2.svg" />
          </div>
          <div className="personal-2">
            Personal
          </div>
        </div>
        <div className="frame-1000015869">
          <div className="personal">
            @ 2019-2024 
          </div>
          <span className="made-in-figma">
            Made In Figma
          </span>
        </div>
      </div>

    </div>
  )
}

const App: React.FC = () => {
  // Session storage
  const [token, setToken] = useState(false);

  if(token){
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  useEffect(()=>{
    var storage = sessionStorage.getItem('token');
    if(storage){
      let data = JSON.parse(storage);
      setToken(data);
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/AboutMe" element={<AboutMe/>} />
      </Routes>
    </Router>
  );
};

export default App;