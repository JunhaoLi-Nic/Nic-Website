import React from 'react';
import './resume.css'; // Ensure this CSS file is correctly linked and loaded
import Header from '@components/Header/header';
import Footer from '@components/footer';

const Resume: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <div className="resume-container">
            </div>
            <Footer />
        </div>
    );
}

export default Resume;
