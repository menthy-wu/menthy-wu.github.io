import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { Col, Row, Container } from "react-bootstrap";
import Project from "./Project";
import AnimatedText from "./AnimatedText";
import MoreDots from "./MoreDots";
import ProjectsList from "./ProjectsData";
import MoreProjectsList from "./MoreProjectsData";

const Projects = ({ setCursorVariant }) => {
  const [moreProjects, setMoreProjects] = useState(false);
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
            {ProjectsList.map((item, index) => {
              return (
                <Project
                  setCursorVariant={setCursorVariant}
                  item={item}
                  key={index}
                  i={index}
                />
              );
            })}
            {moreProjects &&
              MoreProjectsList.map((item, index) => {
                return (
                  <Project
                    setCursorVariant={setCursorVariant}
                    item={item}
                    key={index}
                    i={index}
                  />
                );
              })}
          </Row>
        </div>
        {!moreProjects && (
          <MoreDots
            setCursorVariant={setCursorVariant}
            setMoreProjects={setMoreProjects}
          />
        )}
      </div>
    </section>
  );
};
export default Projects;
