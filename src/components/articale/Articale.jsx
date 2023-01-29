import React from "react";
import { Articale } from "../../components";
import "./articale.css";

function articale() {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupA">
          <Articale />
        </div>
      </div>
    </div>
  );
}

export default articale;
