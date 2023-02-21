import React, { useState } from "react";
import "./SideNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const navHandler = (e) => {
    setNav(!nav);
  };
  return (
    <div>
      <GiHamburgerMenu className="hamburger" onClick={navHandler} />
      {nav ? (
        <div className="small-nav">
          <a href="#main" onClick={navHandler}>
            <AiOutlineHome size={20} />
            <span>Home</span>
          </a>
          <a href="#projects" onClick={navHandler}>
            <AiOutlineProject size={20} />
            <span>Projects</span>
          </a>
          <a href="#work" onClick={navHandler}>
            <GrDocumentText size={20} />
            <span>Work</span>
          </a>
          <a href="#contact" onClick={navHandler}>
            <AiOutlineMail size={20} />
            <span>Contact</span>
          </a>
          <a
            href="https://github.com/SeanSchmidt89?tab=overview&from=2023-02-01&to=2023-02-19"
            onClick={navHandler}
          >
            <AiFillGithub size={20} />
            <span>GitHub</span>
          </a>
        </div>
      ) : null}
      <div className="large-nav">
        <div className="large-nav-container">
          <a href="#main" onClick={navHandler}>
            <AiOutlineHome size={20} />
          </a>
          <a href="#projects" onClick={navHandler}>
            <AiOutlineProject size={20} />
          </a>
          <a href="#work" onClick={navHandler}>
            <GrDocumentText size={20} />
          </a>
          <a href="#contact" onClick={navHandler}>
            <AiOutlineMail size={20} />
          </a>
          <a
            href="https://github.com/SeanSchmidt89?tab=overview&from=2023-02-01&to=2023-02-19"
            onClick={navHandler}
          >
            <AiFillGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
