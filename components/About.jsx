import { motion, useScroll } from "framer-motion";
import React from "react";
import { FaCircle } from "react-icons/fa";
import RollingText from "./RollingText";
import AboutImg from "./AboutImg";
import { Row, Col } from "react-bootstrap";

const About = () => {
  const { scrollPos } = useScroll();
  return (
    <section
      id="about"
      className=" w-full flex flex-col min-h-screen items-start justify-start"
    >
      <div className="bg-black w-full m-0 p-0 flex flex-row min-h-screen">
        <div className="w-1/4 justify-center items-center flex ">
          <div className="flex flex-row h-full">
            <div className="h-full w-[105px] flex justify-center items-center overflow-hidden">
              <div className="rotate-270 whitespace-nowrap  ">
                <RollingText
                  wrapper=" w-full md:h-[105px]"
                  font="text-left font-abril text-10xl text-white"
                  baseVelocity={5}
                >
                  About •
                </RollingText>
              </div>
            </div>
            <div className="ml-[-20px] h-full w-[105px] flex justify-center items-center overflow-hidden">
              <div className="rotate-90 whitespace-nowrap  ">
                <RollingText
                  wrapper=" w-full md:h-[105px]"
                  font="text-left font-abril text-10xl white-stroke"
                  baseVelocity={5}
                >
                  About •
                </RollingText>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 justify-center items-center flex mt-32">
          <div className="w-2/3">
            <div className="flex flex-col items-start">
              <div className="flex items-center w-full">
                <FaCircle className="text-white" />
                <hr className="ml-[-3px] bg-white h-[2px] w-full" />
              </div>
              <Row className="flex flex-row-reverse sm:flex-row justify-center items-center">
                <Col
                  md={8}
                  className="font-quicksand text-white md:text-3xl text-right"
                >
                  Good morning, my name is Menthy Wu. I am currently a
                  first-year student at the University of California, Riverside,
                  majoring in computer science.
                </Col>
                <Col md={4} className="flex h-[120px] md:h-[250px]">
                  <AboutImg imgSrc="about4.JPG" />
                </Col>
              </Row>
            </div>
            <div className="flex flex-col items-end mt-6">
              <Row className="flex flex-row">
                <Col md={4} className="flex h-[120px] md:h-[250px]">
                  <AboutImg imgSrc="about1.jpg" />
                </Col>
                <Col
                  md={8}
                  className="font-quicksand text-white md:text-3xl text-left"
                >
                  I am interested in game development, software engineering, and
                  web development. I also love cats. My cat{"'"}s name is Evan,
                  and he is the cutest cat ever.
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
