import React from "react";
import "./articale.css";

function articale({ imgUrl }) {
  return (
    <div className="gpt__blog-container_articale">
      <div className="gpt__blog-container_articale-image">
        <img src={imgUrl} alt="blogPic" />
      </div>
    </div>
  );
}

export default articale;
