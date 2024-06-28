import '@css/main_page.css';
import React from 'react';

const MainPage: React.FC = () => {
    return (
<div className="hero-section">
        <div className="frame-42">
          <a href="https://www.linkedin.com/in/nicholas-li168336" className="button-1"target="_blank" rel="noopener noreferrer">
          <img src="src/assets/vectors/Vector82_x2.svg" alt="Descriptive Alt Text" className="vector-68" />
          </a>
          <a href="https://github.com/JunhaoLi-Nic" className="button-2" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/vectors/Vector26_x2.svg" alt="GitHub Profile" className="vector-69" />
          </a>
        </div>
        <div className="container">
          <div className="banner">
            <div className="frame-46">
              <div className="frame-43">
                <span className="hello-iam">
                  Hello I’am
                </span>
                <span className="nicholas-li">
                  Nicholas Li.
                </span>
              </div>
              <div className="frame-44">
                <span className="software">
                  Software
                </span>
                <span className="engineer">
                  Engineer
                </span>
              </div>
              <div className="frame-45">
                <span className="based-in">
                  Based In
                </span>
                <span className="melbourne">
                  Melbourne.
                </span>
              </div>
            </div>
            <p className="im-nicholas-li-who-is-simply-dummy-text-of-the-printing-and-typesetting-industry-lorem-ipsum-has-been-the-industrys-standard-dummy-text-ever-since-the-1500-swhen-an-unknown-printer-took-agalley-of-type-and-scrambled-it-to-specimen-book">
              I&#39;m Nicholas Li who is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
            </p>
          </div>
          <div className="frame-20">
            <img className="group-1000015839" src="src/assets/vectors/Group10000158391_x2.svg" />
          </div>
        </div>
      </div>
    );
};

export default MainPage;