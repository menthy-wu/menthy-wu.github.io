import React from "react";
import Image from "next/image";
import { LuGraduationCap } from "react-icons/lu";
import Title from "../Title";
import { techStacks, techIcons } from "@/data/techStack";
import me from "../../../public/about/me.jpg";
import evan from "../../../public/about/evan.jpg";
import circles from "../../../public/about/circles.svg";

const About = () => {
  return (
    <section id="about" className="justify-center flex flex-col w-6/12 my-10">
      <div className="flex w-full flex-col z-10">
        <div className="w-2/3 self-end px-4 py-6">
          <p className="text-custom-white font-montserrats font-thin">
            IF YOU WANT TO KNOW MORE
          </p>
          <Title text="ABOUT ME">
            <div className="h-12 w-20 absolute bg-custom-theme -right-2 top-0 z-10" />
          </Title>
        </div>
        <div className="relative grid grid-cols-3">
          <Image
            src={circles}
            className="absolute top-0 -translate-x-1/4 -translate-y-1/2 z-0"
          />
          <Image src={me} alt="me" className="col-span-1 -translate-y-16" />
          <div className="flex flex-col -translate-x-8  h-full justify-between col-span-2 gap-3">
            <div className="glass text-custom-white font-montserrats font-thin text-lg p-11 h-full">
              My name is Menthy Wu. I am studying
              <span className="font-normal">&nbsp;computer science&nbsp;</span>
              at University of California right now. It is really nice to meet
              you here!
            </div>
            <div className="glass mb-4 p-3">
              <div className="flex items-center">
                <LuGraduationCap className="text-custom-white text-2xl mr-2" />
                <p className="text-custom-white font-montserrats font-thin text-xl">
                  EDUCATION
                </p>
              </div>
              <p className="text-custom-white font-montserrats font-thin text-base">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-custom-white font-montserrats font-thin text-base">
                at University of California, Riverside
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex z-0">
        <div className="glass w-full overflow-x-hidden h-fit ml-16 mt-7">
          <div className="animate-rolling flex hover:pause">
            {Object.values(techStacks).map((techStackList, index) =>
              techStackList.map((techStack, index) => (
                <div
                  key={index}
                  className="text-custom-white text-4xl mx-1 my-2"
                >
                  {techIcons[techStack]}
                </div>
              )),
            )}
            {Object.values(techStacks).map((techStackList, index) =>
              techStackList.map((techStack, index) => (
                <div
                  key={index}
                  className="text-custom-white text-4xl mx-1 my-2"
                >
                  {techIcons[techStack]}
                </div>
              )),
            )}
          </div>
        </div>
        <Image
          src={evan}
          alt="evan"
          className="w-1/5 translate-x-8 -translate-y-10"
        />
      </div>
    </section>
  );
};

export default About;
