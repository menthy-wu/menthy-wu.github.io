import React from "react";
import Image from "next/image";
import { LuGraduationCap } from "react-icons/lu";
import Title from "../Title";
import { techStacks, techIcons } from "@/data/techStack";
import me from "../../../public/about/me.jpg";
import evan from "../../../public/about/evan.webp";
import circles from "../../../public/about/circles.svg";
import { motion } from "framer-motion";

const About = () => {
  const animation = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section
      id="about"
      className="justify-center flex flex-col w-11/12 md:w-6/12 my-4 md:my-10"
    >
      <div className="flex w-full flex-col z-10">
        <div className="w-2/3 self-end px-4 py-6">
          <motion.p
            initial="hidden"
            whileInView="show"
            variants={animation}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 1,
              delay: 0,
            }}
            className="m-0 text-custom-white font-montserrats font-thin"
          >
            IF YOU WANT TO KNOW MORE
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={animation}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 1,
              delay: 0.3,
            }}
          >
            <Title text="ABOUT ME">
              <div className="h-8 md:h-12 w-14 md:w-20 absolute bg-custom-theme -right-2 top-0 z-10" />
            </Title>
          </motion.div>
        </div>
        <div className="relative grid grid-cols-3">
          <Image
            src={circles}
            className="absolute top-0 -translate-x-1/4 -translate-y-1/2 z-0"
          />
          <Image src={me} alt="me" className="col-span-1 -translate-y-16" />
          <div className="flex flex-col -translate-x-8 justify-between col-span-2 gap-3">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 1,
                delay: 0.6,
              }}
              className="glass text-custom-white font-montserrats font-thin text-sm md:text-lg p-8 md:p-11 h-full"
            >
              My name is Menthy Wu. I am studying
              <span className="font-normal">&nbsp;computer science&nbsp;</span>
              at University of California right now. It is really nice to meet
              you here!
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 1,
                delay: 0.6,
              }}
              className="glass mb-4 p-3 h-fit"
            >
              <div className="flex items-center">
                <LuGraduationCap className="text-custom-white text-2xl mr-2" />
                <p className="m-0 text-custom-white font-montserrats font-thin text-base md:text-xl">
                  EDUCATION
                </p>
              </div>
              <p className="m-0 text-custom-white font-montserrats font-thin text-xs md:text-base">
                Bachelor of Science in Computer Science
              </p>
              <p className="m-0 text-custom-white font-montserrats font-thin text-xs md:text-base">
                at University of California, Riverside
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex z-0">
        <div className="glass w-full overflow-x-hidden h-fit ml-16 mt-3 md:mt-7 mr-4 md:mr-0">
          <div className="animate-rolling flex hover:pause">
            {Object.values(techStacks).map((techStackList, index) =>
              techStackList.map((techStack, index) => (
                <div
                  key={index}
                  className="text-custom-white text-3xl md:text-4xl mx-1 my-2"
                >
                  {techIcons[techStack]}
                </div>
              )),
            )}
            {Object.values(techStacks).map((techStackList, index) =>
              techStackList.map((techStack, index) => (
                <div
                  key={index}
                  className="text-custom-white text-3xl md:text-4xl mx-1 my-2"
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
          className="w-1/5 md:translate-x-8 -translate-y-5 md:-translate-y-10"
        />
      </div>
    </section>
  );
};

export default About;
