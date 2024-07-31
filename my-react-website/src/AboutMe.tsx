import React from 'react';
import './AboutMe.css'; // Ensure the path to your CSS file is correct
import Header from '@components/Header/header';
import EmbededGraph from '@components/github/record';
import Skills from '@components/Skills';
import Footer from '@components/footer';

const AboutMe: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <div className="about-me">
                <img className="about-me-image" src="src/assets/vectors/Group1000015845_x2.svg" alt="About Me" />
                <div className="about-me-text">
                    <header className="about-me-header">
                        <h1>About Me</h1>
                    </header>
                    <p className="about-me-description">
                        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performance code matters to me.
                    </p>
                    <p className="about-me-history">
                        I began my journey in Monash university in 2020, and since then, 
                        I've continued to grow and evolve as a softwware engineer, taking on new challenges 
                        and learning the latest technologies along the way. Now, in my early twenties, 
                        almost 5 years after studying my software engineering journey, 
                        I'm building cutting-edge web applications using modern technologies such as Node.js, 
                        TypeScript, Vite, Supabase and much more.
                    </p>
                    <p className="about-me-activities">
                    Besides my work in software development and DevOps, I also enjoy vlogging. 
                    This hobby lets me share my daily life and insights with a wider audience. 
                    Vlogging is a great way for me to express myself outside of my technical work. 
                    Whether I'm exploring new places, playing sports, or just updating about my day, 
                    my vlogs give a unique view that connects with people.
                     It’s a fun way to diversify my activities and improve my storytelling skills.
                    </p>
                </div>
            </div>
            <div className="calendar-github">
                    <h1 className='calendar-header'>Day I Code</h1>
                <div className='calendar'>
                    <EmbededGraph />
                </div>
            </div>
            <Skills />
            <Footer />
        </div>
    );
}

export default AboutMe;
