import '@css/main_page.css';
import React from 'react';

const MainPage: React.FC = () => {
    return (
<div className="hero-section">
        <div className="container">
                <div className="banner">
                    <div className="text-section">
                        <div className="frame-43">
                            <span className="hello-iam">Hello I'm</span>
                            <span className="nicholas-li">Nicholas Li.</span>
                        </div>
                        <div className="frame-44">
                            <span className="software">Software</span>
                            <span className="engineer">Engineer</span>
                        </div>
                        <div className="frame-45">
                            <span className="based-in">Based In</span>
                            <span className="melbourne">Melbourne.</span>
                        </div>
                        <div className="about-text">
                            I'm Nichola Li, a full stack software engineer dedicated to optimizing software efficiency. I'm interested in DevOps principles further streamlines the development lifecycle
                        </div>
                        <div className="frame-42">
                            <a href="https://www.linkedin.com/in/nicholas-li168336" className="button-1"target="_blank" rel="noopener noreferrer">
                            <img src="src/assets/vectors/Vector82_x2.svg" alt="Descriptive Alt Text" className="vector-68" />
                            </a>
                            <a href="https://github.com/JunhaoLi-Nic" className="button-2" target="_blank" rel="noopener noreferrer">
                            <img src="src/assets/vectors/Vector26_x2.svg" alt="GitHub Profile" className="vector-69" />
                            </a>
                        </div>
                    </div>
                    <div className="image-section">
                        <img className="profile-image" src="src/assets/vectors/Group10000158391_x2.svg" alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;