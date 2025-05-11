import React from "react";
import { Link } from "react-router-dom";
import "./owner.css";

function Header() {
  return (
    <header className="owner-header-container">
      <div className="owner-header-logo">AutoMates</div>
      <nav className="owner-header-nav">
        <Link to="/owner/dashboard" className="owner-header-link">Home</Link>
        <Link to="/owner/vehicle-management" className="owner-header-link">Vehicle Management</Link>
        <Link to="/owner/booking-management" className="owner-header-link">Booking Management</Link>
        <Link to="/owner/profile" className="owner-header-link">Profile</Link>
      </nav>
    </header>
  );
}

export default Header;
