// Footer display element

import "./Header.css";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <div className="header">
      <div className="burger-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 18L20 18"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <img
        src="/Images/logo.png"
        alt="Sensure Logo"
        width="200px"
        height="auto"
      />
      <div className="header-sections">
        <div className="current-section">Home</div>
        <Link to="/product">Product</Link>
        <a href="">News</a>
        <a href="">Contact</a>
        <a href="">About Us</a>
      </div>
    </div>
  );
};

export default Header;
