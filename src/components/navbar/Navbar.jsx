import React from "react";
import { RiMenu3line, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

function Navbar() {
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt__navbar-links-container">
          <a href="#home"> Home </a>
          <a href="#wgpt"> What is gpt </a>
          <a href="#home"> Home </a>
          <a href="#home"> Home </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
