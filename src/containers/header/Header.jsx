import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">
          tesssssssssssssssssssssssssssssssssssssssssssssssst
          tessssssssssssssssssssssst
        </h1>
        <p>
          iliass affani mohammed love ya had l bata zwina fnikicha kanbghik ana
          haha mal9it mandir gol naktab cha3r okda haha
        </p>
        <div className="gpt__header-content__input">
          <input type="email" placeholder="your email adress" />
          <button type="button"> get started</button>
        </div>
        <div className="gpt__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt__header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  );
}

export default Header;
