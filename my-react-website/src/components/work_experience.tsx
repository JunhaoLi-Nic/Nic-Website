import React from 'react';
import '@css/work_experience.css';

const WorkExperience: React.FC = () => {
    return (
        <div className="work-experience">
            <div className="title">
                <span>My Work Experience</span>
            </div>
            <div className="experience-entry">
                <div className="experience-details">
                    <img src="src/assets/vectors/Google6_x2.svg" alt="Company Logo" />
                    <div className="position">Software Engineer at SIL3 PTY LTD</div>
                </div>
                <div className="dates">July 2023 - Present</div>
                <div className="description">
                    At SIL3 Pty Ltd, I have been contributing to the development of a flight control system for AMSL Aero Pty Ltd using the Arcadia methodology. My role involves generating test cases based on specifications, standards, or concepts in C#, ensuring any failing tests are identified and corrected. Additionally, I manage the integration of test cases with Jenkins for continuous integration and deployment, making sure that changes in the code base are reflected in the test cases.
                </div>
            </div>
            <div className="experience-entry">
                <div className="experience-details">
                    <img src="src/assets/vectors/Google6_x2.svg" alt="Company Logo" />
                    <div className="position">Software Engineer Intern at SIL3 PTY LTD</div>
                </div>
                <div className="dates">Nov 2022 - Feb 2023</div>
                <div className="description">
                    effectively contributed to the debugging and verification of embedded firmware in C on Texas Instruments RM57 safety CPUs, ensuring robust performance on hardware targets. I also performed comprehensive software verification and validation using Microsoft Visual Studio. Additionally, I undertook development and investigative initiatives on Jetson Nano development hardware, leveraging my skills in Linux, Python, and C# to enhance project outcomes.
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
