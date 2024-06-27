import React from 'react';
import './AboutMe.css'; // Ensure the path to your CSS file is correct
import { Header } from '@components/Header/header';
import EmbededGraph from '@components/github/record';

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
                        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                    </p>
                    <p className="about-me-history">
                        I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                    </p>
                    <p className="about-me-activities">
                        When I'm not in full-on developer mode, you can find me hovering around on Twitter or on Indie Hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                    </p>
                </div>
            </div>
            <div className="calendar-github">
                    <h1 className='calendar-header'>Day I Code</h1>
                <div className='calendar'>
                    <EmbededGraph />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
