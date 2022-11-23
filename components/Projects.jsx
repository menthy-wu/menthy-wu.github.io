import React from "react";
import { FaCircle } from "react-icons/fa";
import { Col, Row, Container } from "react-bootstrap";
import Project from "./Project";
import AnimatedText from "./AnimatedText";
import MoreDots from "./MoreDots";

const Projects = ({ setCursorVariant }) => {
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
          <Row className="items-center justify-start mt-16">
            <Project
              setCursorVariant={setCursorVariant}
              title="Jungle Defense"
              i={1}
            />
            <Project
              setCursorVariant={setCursorVariant}
              title="Jungle Defense"
              i={2}
            />
            <Project
              setCursorVariant={setCursorVariant}
              title="Jungle Defense"
              i={3}
            />

            <Project
              setCursorVariant={setCursorVariant}
              title="Jungle Defense"
              i={4}
            />
            <Project
              setCursorVariant={setCursorVariant}
              title="Jungle Defense"
              i={5}
            />
            <Project
              setCursorVariant={setCursorVariant}
              title="Jungle Defense"
              i={6}
            />
          </Row>
        </div>
        <MoreDots />
      </div>
    </section>
  );
};
export default Projects;
