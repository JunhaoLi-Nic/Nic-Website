import "@css/footer.css";
import React from "react";
import { Link } from 'react-router-dom';
import { Donut } from "@components/spline/grass-donuts";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="frame-16">
        <div className="personal-2">
          <Donut />
        </div>
        <Link to="/" className="nic">Nic.</Link>
      </div>
      <div className="frame-1000015869">
        <div className="personal">
          @ 2019-2025
        </div>
        <span className="made-in-figma">
          Made by Nicholas Li
        </span>
      </div>
    </div>
  );
}
export default Footer;
