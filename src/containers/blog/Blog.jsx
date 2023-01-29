import React from "react";
import { Articale } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupA">
          <Articale
            imgUrl={blog01}
            date="oct 30,2022"
            title=" and Open  AI is the future Let us exlore how it is?"
          />
        </div>
        <div className="gpt__blog-container_groupB">
          <Articale
            imgUrl={blog02}
            date="sep 15, 2022"
            title="GPT and Open  AI is the future Let us exlore how it is?"
          />
          <Articale
            imgUrl={blog03}
            date="sep 26,2022"
            title="GPT and Open  AI is the future Let us exlore how it is?"
          />
          <Articale
            imgUrl={blog04}
            date="oct 30, 2022"
            title="GPT and Open  AI is the future Let us exlore how it is?"
          />
          <Articale
            imgUrl={blog05}
            date="jav 05,2023"
            title="GPT and Open  AI is the future Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
