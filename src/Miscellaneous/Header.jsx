// Footer display element
import { Link } from "@tanstack/react-router";
import "./Header.css";

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
        <Link to="/product">Product</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
};

export default Header;
