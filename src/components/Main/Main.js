import React from "react";
import MainPic from "../../assets/one.jpg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "./Main.css";

const Main = () => {
  return (
    <div id="main">
      <img src={MainPic} alt="/" />
      <div className="overlay"></div>
      <div className="text-container">
        <h1>Sean Schmidt</h1>
        <p>Frontend Developer</p>
        <p>Navy Veteran</p>

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/sean-schmidt-018459239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={22} />
          </a>
          <a
            href="https://github.com/SeanSchmidt89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={22} />
          </a>
          <div className="name-top" />
          <div className="name-bottom" />
          <div className="name-left" />
          <div className="name-right" />
        </div>
      </div>
    </div>
  );
};

export default Main;
