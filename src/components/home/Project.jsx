import React, { useMemo } from "react";
import Link from "next/link";
import { techIcons } from "@/data/techStack";

import Image from "next/image";
const Project = ({ project }) => {
  const imgList = useMemo(() =>
    project.imagePath.keys().map((image) => project.imagePath(image)),
  );

  return (
    <div className="relative group">
      <div className="w-full h-full">
        <Image
          src={imgList[0]}
          width={100}
          height={100}
          alt="img"
          className="w-4/5 z-0 absolute top-0 opacity-30 h-full group-even:right-0 group-odd:left-0"
        />
      </div>
      <div className="glass w-full text-custom-white font-montserrat flex group-even:flex-row-reverse p-4 rounded-md relative justify-between">
        <Image
          src={imgList[0]}
          width={100}
          height={100}
          alt="img"
          className="w-[40%] group-odd:-ml-10 group-even:-mr-10"
        />
        <div className="w-[60%] ml-5 flex flex-col">
          <div className="h-full flex flex-col justify-center">
            <p className="text-base font-light my-3">
              {project.title.toUpperCase()}
            </p>
            <p className="text-sm font-thin">{project.description}</p>
          </div>
          <div className="w-full flex justify-between items-end">
            <div className="font-anticDidone flex items-center text-sm gap-2">
              <p>Tech Stack: </p>
              {project.techStack.map((techStack, index) => (
                <p key={index}>{techStack}</p>
              ))}
            </div>
            <div className="text-4xl flex gap-2">
              {project.links.map((link, index) => (
                <Link href={Object.values(link)[0]} key={index}>
                  <div className="hover:cursor-pointer hover:opacity-60 hover:scale-110 duration-300">
                    {techIcons[Object.keys(link)[0]]}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
