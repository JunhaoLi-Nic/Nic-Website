import './App.css'
import { Header } from '@components/Header/header'
import MainPage from '@components/main_page.tsx';
import AboutMe from './AboutMe.tsx'
import Project from './Project.tsx'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <MainPage />
     
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
                How can I help?
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
        <Route path="/Projects" element={<Project/>} />
      </Routes>
    </Router>
  );
};

export default App;