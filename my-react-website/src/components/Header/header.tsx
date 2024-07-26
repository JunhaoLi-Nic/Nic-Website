import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@css/header.css';
import {Donut} from '@components/spline/grass-donuts';
import { HashLink } from 'react-router-hash-link';


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <div className="logo-1">
                    <Donut/>
                </div>
                <Link to ="/" className="personal-1">Nic.</Link>
            </div>
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
            <div className={`taskbaar ${isOpen ? 'open' : ''}`}>
                <Link to="/aboutme" className="link">About Me</Link>
                <Link to="/Resume" className="link">Resume</Link>
                <Link to="/projects" className="link">Project</Link>
                <HashLink to="/#contact" className="link">Contact Me</HashLink>
                <div className="button-8 inside-menu"> {/* New class to style differently if needed */}
                    <span className="resume-1">Resume</span>
                    <div className="download">
                        <img className="icon" src="src/assets/vectors/Icon24_x2.svg" alt="Download" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;