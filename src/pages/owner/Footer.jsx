import React from "react";
import "./owner.css";

function Footer() {
  return (
    <footer className="owner-footer">
      &copy; {new Date().getFullYear()} AutoMates Admin Dashboard. All rights reserved.
    </footer>
  );
}

export default Footer;
