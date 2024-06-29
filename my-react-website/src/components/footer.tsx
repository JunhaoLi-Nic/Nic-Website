import "@css/footer.css";
import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="footer">
        <div className="frame-16">
          <div className="logo-11">
            <img className="group-27" src="src/assets/vectors/Group4_x2.svg" />
          </div>
          <div className="personal-2">
            Personal
          </div>
        </div>
        <div className="frame-1000015869">
          <div className="personal">
            @ 2019-2024 
          </div>
          <span className="made-in-figma">
            Made In Figma
          </span>
        </div>
      </div>
    );
}
export default Footer;