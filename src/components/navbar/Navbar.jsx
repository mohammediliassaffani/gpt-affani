import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

function Navbar() {
  const LinksMenu = () => (
    <>
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
    </>
  );
  const [menu, setMenu] = useState(false);
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt__navbar-links_container">
          <LinksMenu />
        </div>
      </div>

      <div className="gpt__navbar-sing">
        <p>Sing in</p>
        <button type="button">Sing Up</button>
      </div>
      <div className="gpt__navbar-menu">
        {menu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setMenu(true)} />
        )}{" "}
        {menu && (
          <div className="gpt__navbar-menu_container scale-yp-centere">
            <div className="gpt__navbar-menu_links">
              <LinksMenu />
              <div className="gpt__navbar-menu_container-links-sing">
                <p>Sing in</p>
                <button type="button">Sing Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
