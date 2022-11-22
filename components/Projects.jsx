import React from "react";
import { FaCircle } from "react-icons/fa";
import { Col, Row, Container } from "react-bootstrap";
import Project from "./Project";
import AnimatedText from "./AnimatedText";
import MoreDots from "./MoreDots";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black w-full justify-center flex min-h-screen z-10 pb-32"
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
              <Project title="Jungle Defense" i={1} />
            </Col>
            <Col md={4}>
              <Project title="Jungle Defense" i={2} />
            </Col>
            <Col md={4}>
              <Project title="Jungle Defense" i={3} />
            </Col>
          </Row>
          <Row className="items-center justify-between mt-16">
            <Col md={4}>
              <Project title="Jungle Defense" i={4} />
            </Col>
            <Col md={4}>
              <Project title="Jungle Defense" i={5} />
            </Col>
            <Col md={4}>
              <Project title="Jungle Defense" i={6} />
            </Col>
          </Row>
        </div>
        <MoreDots />

      </div>
    </section>
  );
};
export default Projects;
