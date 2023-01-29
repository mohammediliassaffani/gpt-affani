import React from "react";
import PossibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt__possibility section__padding" id="possibility">
      <div className="gpt__possibility-image">
        <img src={PossibilityImage} alt="possibility" />
      </div>
    </div>
  );
};

export default Possibility;
