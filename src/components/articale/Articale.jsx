import React from "react";
import "./articale.css";

const Articale = ({ imgUrl, date, title }) => (
  <div className="gpt__blog-container_articale">
    <div className="gpt__blog-container_articale-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt__blog-container_articale-content">
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Articale;
