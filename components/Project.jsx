import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Col } from "react-bootstrap";
import Carousel from "framer-motion-carousel";
import { FaGithub, FaPlayCircle } from "react-icons/fa";

const Project = ({ item, i, setCursorVariant }) => {
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
    <Col className="flex flex-col" md={width}>
      <motion.div
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
          <div
            className="flex flex-col justify-center items-end"
            onClick={toggle}
            onMouseLeave={() => {
              setCursorVariant("default");
            }}
            onMouseEnter={() => {
              extended ? setCursorVariant("back") : setCursorVariant("view");
            }}
          >
            <div className="text-white font-poiret text-3xl text-right">
              {item.title}
            </div>
            <div className="text-white font-anton text-sm text-right mt-4">
              {item.tools}
            </div>
            <div className="text-white text-base text-right w-10/12 font-quicksand">
              {item.discription}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mx-10">
            {extended &&
              item.links.map((link, index) => {
                return (
                  <motion.a
                    key={index}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      delay: index * 0.2,
                    }}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                    target="_blank"
                    rel="noreferrer"
                    href={link.link}
                    className="mb-2"
                  >
                    {link.type == "github" && (
                      <FaGithub className="text-6xl text-gray" />
                    )}
                    {link.type == "play" && (
                      <FaPlayCircle className="text-6xl text-gray mt-2" />
                    )}
                  </motion.a>
                );
              })}
          </div>
          {extended && (
            <div className="flex flex-row justify-center items-center w-full">
              <Carousel className="justify-center items-center">
                {item.pictures.map((picture, index) => {
                  return <img key={index} src={picture} />;
                })}
              </Carousel>
            </div>
          )}
        </div>
      </motion.div>
    </Col>
  );
};
export default Project;
