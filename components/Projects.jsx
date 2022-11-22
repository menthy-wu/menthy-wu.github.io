import React from "react";
import { FaCircle } from "react-icons/fa";
import { Col, Row, Container } from "react-bootstrap";
import Project from "./Project";
import AnimatedText from "./AnimatedText";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black w-full justify-center flex min-h-screen z-10"
    >
      <div className=" w-10/12 flex flex-col items-center">
        <AnimatedText
          text="Projects •"
          font="my-[200px] text-left font-anton text-6xl md:text-10xl text-white w-full"
          animation="flyIn"
        />
        <div className="w-11/12 flex flex-col justify-center">
          <Row className="items-center justify-between mt-16">
            <Col md={4}>
              <Project title="Jungle Defense" />
            </Col>
            <Col md={4}>
              <Project title="Jungle Defense" />
            </Col>
            <Col md={4}>
              <Project title="Jungle Defense" />
            </Col>
          </Row>
          <Row className="items-center justify-between mt-16">
            <Col md={4}>
              <Project title="Jungle Defense" />
            </Col>
            <Col md={4}>
              <Project title="Jungle Defense" />
            </Col>
            <Col md={4}>
              <Project title="Jungle Defense" />
            </Col>
          </Row>
        </div>

        <div className="mt-8">
          <FaCircle className="text-white mt-4" />
          <FaCircle className="text-white mt-4 opacity-80" />
          <FaCircle className="text-white mt-4 opacity-60" />
          <FaCircle className="text-white mt-4 opacity-40" />
          <FaCircle className="text-white mt-4 opacity-20" />
        </div>
      </div>
    </section>
  );
};
export default Projects;
