import './App.css'
import { Header } from '@components/Header/header'
import MainPage from '@components/main_page.tsx';
import WorkExperience from '@components/work_experience.tsx';
import Footer from '@components/footer.tsx'
import AboutMe from './AboutMe.tsx'
import Project from './Project.tsx'
import Contact from '@components/contact.tsx'
import Resume from './resume.tsx'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <MainPage />
      <WorkExperience />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
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
        <Route path="/Resume" element={<Resume/>} />
      </Routes>
    </Router>
  );
};

export default App;