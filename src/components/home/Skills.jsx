import React from "react";
import Title from "../Title";
import { techIcons, techStacks } from "@/data/techStack";

const Skills = () => {
  return (
    <section id="skills" className="justify-center flex flex-col w-7/12 my-10">
      <Title text="SKILLS">
        <div className="h-8 w-24 absolute bg-custom-theme -right-4 -bottom-1 z-10" />
      </Title>
      <div className="text-custom-white flex w-full justify-evenly gap-4 my-10">
        {Object.entries(techStacks).map(([type, techStackList], index) => (
          <div key={index}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
