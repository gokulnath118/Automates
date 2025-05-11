import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./admin.css";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <>
    <header className="admin-header">
      <h1 className="admin-logo">AutoMates</h1>
      <nav className="admin-nav">
        <Link to="/admin/dashboard" className="admin-nav-link">Home</Link>
        <Link to="/admin/vehicles" className="admin-nav-link">Vehicle Management</Link>
        <Link to="/admin/users" className="admin-nav-link">User Management</Link>
        <Link to="/admin/booking-management" className="admin-nav-link">Booking Management</Link>
        <Link to="/admin/analytics" className="admin-nav-link">Analytics</Link>
        <button onClick={handleLogout} className="admin-logout-button">Logout</button>
      </nav>
    </header>
    </>
  );
}

export default Header;
