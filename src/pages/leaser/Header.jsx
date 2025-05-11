import React from "react";
import { Link } from "react-router-dom";
import "./leaser.css";

function Header() {
  return (
    <header className="leaser-header-container">
      <div className="leaser-header-logo">AutoMates</div>
      <nav className="leaser-header-nav">
        <Link to="/leaser/dashboard" className="leaser-header-link">Home</Link>
        <Link to="/leaser/search" className="leaser-header-link">Search</Link>
        <Link to="/leaser/bookings" className="leaser-header-link">My Bookings</Link>
        <Link to="/leaser/profile" className="leaser-header-link">Profile</Link>
      </nav>
    </header>
  );
}

export default Header;
