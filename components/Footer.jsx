import React from "react";
import {
  FaRegEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
      <a href="">
        <FaRegEnvelope className="text-6xl" />
      </a>
      <a href="https://www.instagram.com/wmx_owo/">
        <FaInstagram className="text-6xl"/>
      </a>
      <a href="https://www.linkedin.com/in/mengxuan-wu/">
        <FaLinkedin className="text-6xl" />
      </a>
      <a href="https://github.com/menthy-wu">
        <FaGithub className="text-6xl" />
      </a>
    </footer>
  );
};
export default Footer;