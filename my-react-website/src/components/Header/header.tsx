import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '@css/header.css';
import { Donut } from '@components/spline/grass-donuts';
import HamburgerButton from '@components/Tool/HamburgerButton';
import DownloadIcon from "../../assets/vectors/Download_icon.svg";
import ResumePdf from "../../assets/Resume.pdf"

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="header">
            <div className="logo">
                <div className="logo-1">
                    <Donut/>
                </div>
                <Link to="/" className="personal-1">Nic.</Link>
            </div>
            <HamburgerButton onClick={toggleMenu} />
            <div className={`taskbaar ${isOpen ? 'open' : ''}`}>
                <Link to="/aboutme" className="link">About Me</Link>
                <Link to="/Resume" className="link">Resume</Link>
                <Link to="/projects" className="link">Project</Link>
                <HashLink to="/#contact" className="link">Contact Me</HashLink>
                <div className="button-8 inside-menu">
                    <a href={ResumePdf} download="JunhaoLi_Resume.pdf">
                        <span className="resume-1">Resume</span>
                        <div className="download">
                            <img className="icon" src={DownloadIcon} alt="Download" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
