import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, font, animation }) => {
  const flyIn = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "Tween",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
      y: 10,
      transition: {
        type: "Tween",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      variants={flyIn}
      initial="hidden"
      whileInView="visible"
      className={`${font}`}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;
