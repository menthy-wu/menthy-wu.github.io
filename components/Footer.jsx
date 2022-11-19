import React from "react";
import {
  FaRegEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray flex h-24 w-full items-center justify-evenly border-t">
      <a target="_blank" rel="noreferrer" href="mailto:wumengxuan0728@gmail.com">
        <FaRegEnvelope className="text-6xl" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/wmx_owo/"
      >
        <FaInstagram className="text-6xl" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/mengxuan-wu/"
      >
        <FaLinkedin className="text-6xl" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/menthy-wu">
        <FaGithub className="text-6xl" />
      </a>
    </footer>
  );
};
export default Footer;
