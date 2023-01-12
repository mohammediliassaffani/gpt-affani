import React from "react";
import { useState } from "react";
import { RiMenu3line, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const navbar = ([menu, setMenu] = useState(false));
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
        <div className="gpt__navbar-menu"></div>
      </div>
    </div>
  );
}

export default Navbar;
