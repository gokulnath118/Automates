import React from "react";
import "./admin.css";

function Footer() {
  return (
    <footer className="admin-footer">
      &copy; {new Date().getFullYear()} AutoMates Admin Dashboard. All rights reserved.
    </footer>
  );
}

export default Footer;
