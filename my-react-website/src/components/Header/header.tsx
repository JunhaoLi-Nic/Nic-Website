import React, { JSX } from 'react';
import '@css/header.css'; 

export const Header: React.FC = (): JSX.Element => {
    return (
        <div className="header">
            <div className="logo">
                <div className="logo-1">
                    <img className="group-26" src="src/assets/vectors/Group1_x2.svg" />
                </div>
                <div className="personal-1">
                    Nic.
                </div>
            </div>
            <div className="taskbaar">
                <div className="about-me-1">
                    <span className="about-me-5">
                        About Me
                    </span>
                </div>
                <div className="about-me-2">
                    <span className="about-me-6">
                        Skills
                    </span>
                </div>
                <div className="about-me-3">
                    <span className="about-me-7">
                        Project
                    </span>
                </div>
                <div className="about-me-4">
                    <span className="about-me-8">
                        Contact me
                    </span>
                </div>
            </div>
            <div className="button-8">
                <span className="resume-1">
                    Resume
                </span>
                <div className="download">
                    <img className="icon" src="src/assets/vectors/Icon24_x2.svg" />
                </div>
            </div>
        </div>
    );
};