import React from "react";
import Image from "next/image";
import { LuGraduationCap } from "react-icons/lu";
import me from "../../../public/about/me.png";
import evan from "../../../public/about/evan.png";
import Title from "../Title";
import { techStacks, techIcons } from "@/data/techStack";

const About = () => {
  return (
    <div>
      <div className="flex">
        <Image src={me.src} alt="me" width={100} height={100} />
        <div className="flex flex-col">
          <p className="text-custom-white font-montserrats font-thin">
            IF YOU WANT TO KNOW MORE
          </p>
          <Title text="ABOUT ME" />

          <div className="glass text-custom-white font-montserrats font-thin">
            My name is Menthy Wu. I am studying computer science at University
            of California right now. It is really nice to meet you here!
          </div>
          <div className="glass">
            <div className="flex items-center">
              <LuGraduationCap className="text-custom-white" />
              <p className="text-custom-white font-montserrats font-thin">
                EDUCATION
              </p>
            </div>
            <p className="text-custom-white font-montserrats font-thin">
              Bachelor of Science in Computer Science at University of
              California, Riverside
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="glass flex">
          {techStacks.map((techStack, index) => (
            <div key={index} className="text-custom-white text-lg">
              {techIcons[techStack]}
            </div>
          ))}
        </div>
        <Image src={evan.src} alt="evan" width={100} height={100} />
      </div>
    </div>
  );
};

export default About;
