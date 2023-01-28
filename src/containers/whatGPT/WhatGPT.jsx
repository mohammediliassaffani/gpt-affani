import React from "react";
import "./whatGPT.css";
import Feature from "../../components/feature/Feature";

const WhatGPT = () => {
  return (
    <div className="gpt__whatgpt section__margin" id="wgpt">
      <div className="gpt__whatgpt-feature">
        <Feature />
      </div>
      <div className="gpt3__whatgpt-heading">
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt__whatgpt-container"></div>
    </div>
  );
};

export default WhatGPT;
