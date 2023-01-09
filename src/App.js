import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Header,
  WhatGPT,
} from "./containers";

import { Brand, Cta, Navbar } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
