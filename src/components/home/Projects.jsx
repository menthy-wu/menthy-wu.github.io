"use client";
import React from "react";
import Project from "./Project";
import { projects } from "@/data/projects";
import Title from "../Title";

const Projects = () => {
  return (
    <section id="projects" className="justify-center flex flex-col w-6/12">
      <Title text="PROJECTS">
        <div className="h-6 w-24 absolute bg-custom-theme -left-4 -bottom-1 z-10" />
      </Title>
      <div className="my-8 flex flex-col gap-5">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
