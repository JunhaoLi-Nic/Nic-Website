import React from 'react';
import './AboutMe.css'; // Ensure the path to your CSS file is correct
import { Header } from '@components/Header/header'
import EmbededGraph from '@components/github/record'

const AboutMe: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <div className="about-me">
                <img className="group-1000015845" src="src/assets/vectors/Group1000015845_x2.svg" alt="About Me" />
                <div className="frame-1000015860">
                    <div className="frame-1000015861">
                        <span className="my-1">
                            About
                        </span>
                        <span className="me">
                            Me
                        </span>
                    </div>
                    <div className="frame-1000015875">
                        <p className="im-apassionate-self-proclaimed-designer">
                            I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                        </p>
                        <p className="ibegan-my-journey-as-a-web-developer">
                            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                        </p>
                        <span className="when-im-not-in-full-on-developer-mode">
                            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                        </span>
                    </div>
                </div>
            </div>
            <div className='calendar'>
                <EmbededGraph />
            </div>
        </div>
    );
}

export default AboutMe;
