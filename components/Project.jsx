import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Col } from "react-bootstrap";

const Project = ({ title, i, setCursorVariant }) => {
  const [width, setWidth] = useState(4);
  const [extended, setExtended] = useState(false);
  const toggle = () => {
    if (!extended) {
      setExtended(true);
      setWidth(12);
    } else {
      setExtended(false);
      setWidth(4);
    }
  };
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
        delay: i * 0.2,
      },
    },
    hidden: {
      opacity: 0,
      x: 50,
      y: -50,
    },
  };
  return (
    <Col onClick={toggle} className="flex flex-col" md={width}>
      <motion.div
        onMouseEnter={() => {
          extended ? setCursorVariant("back") : setCursorVariant("view");
        }}
        onMouseLeave={() => {
          setCursorVariant("default");
        }}
        variants={flyIn}
        initial="hidden"
        whileInView="visible"
        className="w-full flex flex-col justify-center items-end"
      >
        <div className="flex items-center w-full">
          <FaCircle className="text-white" />
          <hr className="ml-[-3px] bg-white h-[2px] w-full" />
        </div>
        <div className="flex flex-rol">
          <div className="flex flex-col justify-center items-end">
            <div className="text-white font-poiret text-3xl text-right">
              {title}
            </div>
            <div className="text-white font-anton text-sm text-right mt-4">
              Unity, C#, Photoshop
            </div>
            <div className="text-white text-base text-right w-10/12 font-quicksand">
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do
              eiusmo d tempor incididunt ut labore et dolore magna laborum.
            </div>
          </div>
          {extended && (
            <div className="flex flex-row">
              <img className="h-full w-1/3" src="JungleDefense1.jpg"></img>
              <img className="h-full w-1/3" src="JungleDefense2.png"></img>
              <img className="h-full w-1/3" src="JungleDefense3.png"></img>
            </div>
          )}
        </div>
      </motion.div>
    </Col>
  );
};
export default Project;
