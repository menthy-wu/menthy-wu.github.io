import React from "react";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";
import { motion } from "framer-motion";

const MenuButton = ({ setCursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const mouseLeave = () => {
    setCursorVariant("default");
    setMousePosition({
      x: 0,
      y: 0,
    });
  };
  const mouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - 27,
      y: e.clientY - 48,
    });
  };
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };

  return (
    <motion.div
      onMouseLeave={mouseLeave}
      onMouseMove={mouseMove}
      className="fixed top-5 right-10 z-50 rounded-full h-15 w-15 items-center justify-center flex font-abril p-2 text-xl"
    >
      <motion.div
        onMouseEnter={() => setCursorVariant("onMovingButton")}
        onMouseLeave={() => setCursorVariant("default")}
        className="bg-nav rounded-full h-12 w-12 items-center justify-center flex font-abril p-2 text-xl"
        variants={variants}
        animate="default"
      >
        <RiMenuFill />
      </motion.div>
    </motion.div>)
}
export default MenuButton;