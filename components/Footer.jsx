import React from "react";
import { motion } from "framer-motion";

import {
  FaRegEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = ({ setCursorVariant }) => {
  return (
    <footer className="bg-gray flex h-24 w-full items-center justify-evenly border-t">
      <motion.a
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500 }}
        target="_blank"
        rel="noreferrer"
        href="mailto:wumengxuan0728@gmail.com"
        className="text-black hover:text-black"
      >
        <FaRegEnvelope className="text-6xl" />
      </motion.a>
      <motion.a
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500 }}
        target="_blank"
        rel="noreferrer"
        href="mailto:wumengxuan0728@gmail.com"
        className="text-black hover:text-black"
      >
        <FaInstagram className="text-6xl" />
      </motion.a>
      <motion.a
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500 }}
        target="_blank"
        rel="noreferrer"
        href="mailto:wumengxuan0728@gmail.com"
        className="text-black hover:text-black"
      >
        <FaLinkedin className="text-6xl" />
      </motion.a>
      <motion.a
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500 }}
        target="_blank"
        rel="noreferrer"
        href="mailto:wumengxuan0728@gmail.com"
        className="text-black hover:text-black"
      >
        <FaGithub className="text-6xl" />
      </motion.a>
    </footer>
  );
};
export default Footer;
