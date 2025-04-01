// Footer display element

import "./Header.css";
import { Link } from "@tanstack/react-router";

const Header = function () {
  return (
    <div className="header">
      <img
        src="/Images/logo.png"
        alt="Sensure Logo"
        width="200px"
        height="auto"
      />
      <div className="header-sections">
        <div className="current-section">Home</div>
        <Link to="/Directories/product.html">Product</Link>
        <a href="">News</a>
        <a href="">Contact</a>
        <a href="">About Us</a>
      </div>
    </div>
  );
};

export default Header;
