import React from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";
import MovingButton from "./MovingButton";
import { motion } from "framer-motion";

const Nav = ({ setCursorVariant }) => {
  return (
    <div className="flex justify-between my-2 w-full">
      <motion.a
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500 }}
        href="/"
        className="bg-nav rounded-full w-1/12 text-center font-abril md:p-2 text-black hover:text-black hover:no-underline"
      >
        Home
      </motion.a>
      <motion.a
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500 }}
        href="/#about"
        className="bg-nav rounded-full w-1/12 text-center font-abril md:p-2 text-black hover:text-black hover:no-underline"
      >
        About
      </motion.a>
      <motion.a
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500 }}
        href="/#projects"
        className="bg-nav rounded-full w-1/12 text-center font-abril md:p-2 text-black hover:text-black hover:no-underline"
      >
        Projects
      </motion.a>
      <motion.a
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500 }}
        href="/#arts"
        className="bg-nav rounded-full w-1/12 text-center font-abril md:p-2 text-black hover:text-black hover:no-underline"
      >
        Arts
      </motion.a>
      <motion.a
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500 }}
        href="/#contacts"
        className="bg-nav rounded-full w-1/12 text-center font-abril md:p-2 text-black hover:text-black hover:no-underline"
      >
        Contacts
      </motion.a>
      {/* <MovingButton text="Home" setCursorVariant={setCursorVariant} link="/" />
      <MovingButton
        text="About"
        setCursorVariant={setCursorVariant}
        link="/#about"
      />
      <MovingButton
        text="Projects"
        setCursorVariant={setCursorVariant}
        link="/#projects"
      />
      <MovingButton
        text="Contacts"
        setCursorVariant={setCursorVariant}
        link="/#contacts"
      />
      <MovingButton
        text="Arts"
        setCursorVariant={setCursorVariant}
        link="/#arts"
      /> */}
      <div className="" />
    </div>
  );
};
export default Nav;
