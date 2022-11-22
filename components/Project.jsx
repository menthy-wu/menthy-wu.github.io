import React from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = ({ title, i }) => {
  const flyIn = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 1,
        delay:i*0.2
      },
    },
    hidden: {
      opacity: 0,
      x: 50,
      y: -50
    },
  };
  return (
    <motion.div 
    variants={flyIn}
    initial = "hidden"
    whileInView = "visible"
    className="w-full flex flex-col justify-center items-end">
      <div className="flex items-center w-full">
        <FaCircle className="text-white" />
        <hr className="ml-[-3px] bg-white h-[2px] w-full" />
      </div>
      <div className="text-white font-poiret text-3xl text-right">{title}</div>
      <div className="text-white font-anton text-sm text-right mt-4">
        Unity, C#, Photoshop
      </div>
      <div className="text-white text-base text-right w-10/12 font-quicksand">
        Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmo
        d tempor incididunt ut labore et dolore magna laborum.
      </div>
    </motion.div>
  );
};
export default Project;
