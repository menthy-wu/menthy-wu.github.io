import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const MovingButton = ({ text, setCursorVariant, link }) => {
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
      x: e.clientX - rect.left - 90,
      y: e.clientY - 45,
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
      className="0"
      style={{
        width: 180,
        height: 70,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        borderRadius: 30,
        perspective: 400,
      }}
    >
      <motion.div
        className="bg-nav rounded-full w-11/12 text-center font-abril p-2"
        variants={variants}
        animate="default"
      >
        <Link
          onMouseEnter={() => setCursorVariant("onMovingButton")}
          onMouseLeave={() => setCursorVariant("default")}
          onClick={() => {
            setCursorVariant("default");
          }}
          href={link}
          className="text-center font-abril p-2 text-xl hover:no-underline hover:text-black"
        >
          {text}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default MovingButton;
