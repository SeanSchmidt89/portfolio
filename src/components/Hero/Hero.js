import React from "react";
import One from "../../assets/one.jpg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={One} alt="/" />
      <div className="overlay" />
      <div className="hero-text">
        <h1>Sean Schmidt</h1>
        <p>Front-End Developer</p>
        <p>Navy Veteran</p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/sean-schmidt-018459239/">
            <AiFillLinkedin size={25} />
          </a>
          <a href="https://github.com/SeanSchmidt89">
            <AiFillGithub size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
