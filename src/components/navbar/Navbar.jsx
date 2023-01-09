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
          <p>
            <a href="#home"> Home </a>
          </p>
          <p>
            <a href="#wgpt"> What is gpt </a>
          </p>
          <p>
            <a href="#possibility"> OpenIA </a>
          </p>
          <p>
            <a href="#features"> Case Studies </a>
          </p>
          <p>
            <a href="#blog"> Library </a>
          </p>
        </div>
        <div className="gpt__navbar-sing">
          <p>Sing in</p>
          <button type="button">Sing Up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
