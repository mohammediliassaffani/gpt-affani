import React from "react";
import gptLogo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => (
  <div className="gpt__footer section__padding">
    <div className="gpt__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future</h1>
    </div>

    <div className="gpt__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt__footer-links">
      <div className="gpt__footer-links_logo">
        <img src={gptLogo} alt="gpt_logo" />
        <p>
          Morooco,tanger <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt__footer-links_div">
        <h4>Get in touch</h4>
        <p>oujda H14 N 24</p>
        <p>0685-132567</p>
        <p>info@iliass.net</p>
      </div>
    </div>

    <div className="gpt__footer-copyright">
      <p>@2021 GPT. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
