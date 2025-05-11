import React from "react";
import "./leaser.css";

function Footer() {
  return (
    <footer className="leaser-footer">
      &copy; {new Date().getFullYear()} AutoMates Admin Dashboard. All rights reserved.
    </footer>
  );
}

export default Footer;
