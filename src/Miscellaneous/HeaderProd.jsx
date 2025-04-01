// Footer display element

import "./Header.css";
import { Link } from "react-router-dom";

const HeaderProd = function () {
  return (
    <div className="header">
      <img
        src="/Images/logo.png"
        alt="Sensure Logo"
        width="200px"
        height="auto"
      />
      <div className="header-sections">
        <Link to="/">Home</Link>
        <div className="current-section">Product</div>
        <a href="">News</a>
        <a href="">Contact</a>
        <a href="">About Us</a>
      </div>
    </div>
  );
};

export default HeaderProd;
