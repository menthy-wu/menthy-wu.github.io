import React from "react";
import {
  FaRegEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = ({ setToHover, setToDefault }) => {
  return (
    <footer className="bg-gray flex h-24 w-full items-center justify-evenly border-t">
      <a
        onMouseEnter={setToHover}
        onMouseLeave={setToDefault}
        target="_blank"
        rel="noreferrer"
        href="mailto:wumengxuan0728@gmail.com"
        className="text-black hover:scale-105 hover:text-black"
      >
        <FaRegEnvelope className="text-6xl" />
      </a>
      <a
        onMouseEnter={setToHover}
        onMouseLeave={setToDefault}
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/wmx_owo/"
        className="text-black hover:scale-105 hover:text-black"
      >
        <FaInstagram className="text-6xl" />
      </a>
      <a
        onMouseEnter={setToHover}
        onMouseLeave={setToDefault}
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/mengxuan-wu/"
        className="text-black hover:scale-105 hover:text-black"
      >
        <FaLinkedin className="text-6xl" />
      </a>
      <a
        onMouseEnter={setToHover}
        onMouseLeave={setToDefault}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/menthy-wu"
        className="text-black hover:scale-105 hover:text-black"
      >
        <FaGithub className="text-6xl" />
      </a>
    </footer>
  );
};
export default Footer;
