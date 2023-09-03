import React from "react";
import Title from "../Title";
import { techIcons, techStacks } from "@/data/techStack";
import { Col, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <section
      id="skills"
      className="justify-center flex flex-col w-11/12 md:w-7/12 my-10 gap-4"
    >
      <Title text="SKILLS">
        <div className="h-8 w-24 absolute bg-custom-theme -right-4 -bottom-0 z-10" />
      </Title>
      <Row className="text-custom-white flex w-full justify-evenly">
        {Object.entries(techStacks).map(([type, techStackList], index) => (
          <Col xs={6} md={3} key={index}>
            <p className="text-lg font-thin">{type.toUpperCase()}</p>
            <div>
              {techStackList.map((techStack, index) => (
                <p
                  className="flex items-center gap-1 font-anticDidone"
                  key={index}
                >
                  {techIcons[techStack]}
                  {techStack}
                </p>
              ))}
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Skills;
