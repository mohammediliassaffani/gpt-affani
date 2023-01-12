import React from "react";
import "./navbar.css";

function LinksMenu() {
  return (
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
  );
}

export default LinksMenu;
