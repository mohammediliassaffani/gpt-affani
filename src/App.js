import React from "react";
import { Articale, Brand, Cta, Navbar, Feature } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cta />
      <Articale />
      <Feature />
      <Brand />
    </div>
  );
}

export default App;
