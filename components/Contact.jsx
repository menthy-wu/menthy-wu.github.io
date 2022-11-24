import React from "react";
import { motion } from "framer-motion";
import RollingContacts from "./RollingContacts";

const Contact = ({ setCursorVariant }) => {
  const flyIn = {
    first: {
      rotate: 270,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 0.3,
        delay: 0.1,
      },
    },
    second: {
      rotate: 270,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 0.6,
        delay: 0.2,
      },
    },
    third: {
      rotate: 270,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 0.9,
        delay: 0.3,
      },
    },
    fourth: {
      rotate: 270,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 1.2,
        delay: 0.4,
      },
    },
    hidden: {
      rotate: 270,
      opacity: 0,
      x: -100,
      y: 0,
    },
  };
  return (
    <section
      id="contacts"
      className="bg-black w-full h-[700px] flex flex-Col min-h-screen justify-between  sticky top-0"
    >
      <div className="ml-10 w-1/2 flex justify-start items-center md:text-10xl text-4xl">
        <div className="ml-3 mr-0 w-[1px] h-full bg-white p-0"></div>
        <div className="h-full w-[130px] flex justify-center items-center overflow-hidden m-0 p-0">
          <motion.a
            whileHover={{ scale: 1.2 }}
            variants={flyIn}
            whileInView="first"
            initial="hidden"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/wmx_owo/"
            className="whitespace-nowrap font-anton link hover:no-underline m-0"
          >
            Instagram
          </motion.a>
        </div>
        <div className="w-[1px] h-full bg-white"></div>
        <div className="h-full w-[130px] flex justify-center items-center overflow-hidden">
          <motion.a
            whileHover={{ scale: 1.2 }}
            variants={flyIn}
            whileInView="second"
            initial="hidden"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mengxuan-wu/"
            className="rotate-270 whitespace-nowrap font-anton link hover:no-underline"
          >
            LinkedIn
          </motion.a>
        </div>
        <div className="w-[1px] h-full bg-white"></div>
        <div className="h-full w-[130px] flex justify-center items-center overflow-hidden">
          <motion.a
            whileHover={{ scale: 1.2 }}
            variants={flyIn}
            whileInView="third"
            initial="hidden"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/menthy-wu"
            className="rotate-270 whitespace-nowrap font-anton link hover:no-underline"
          >
            GitHub
          </motion.a>
        </div>
        <div className="w-[1px] h-full bg-white"></div>
        <div className="h-full w-[130px] flex justify-center items-center overflow-hidden">
          <motion.a
            whileHover={{ scale: 1.2 }}
            variants={flyIn}
            whileInView="fourth"
            initial="hidden"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            target="_blank"
            rel="noreferrer"
            href="mailto:wumengxuan0728@gmail.com"
            className="rotate-270 whitespace-nowrap font-anton link hover:no-underline"
          >
            Email
          </motion.a>
        </div>
      </div>
      <RollingContacts
        baseVelocity={10}
        font="text-6xl md:text-12xl font-anton text-white"
        wrapper=" w-1/2 flex flex-col justify-center items-center"
      />
      {/* <div className="whitespace-nowrap font-abril w-1/2 flex flex-col justify-center items-center overflow-hidden text-6xl md:text-12xl">
        <div className="h-[105px]">
          <div className="font-anton white-stroke">CONTACT</div>
        </div>
        <div className="h-2"></div>
        <div className="h-[105px]">
          <div className="font-anton text-white">CONTACT</div>
        </div>
        <div className="h-[105px]">
          <div className="font-anton white-stroke">CONTACT</div>
        </div>
        <div className="h-2"></div>
        <div className="h-[105px]">
          <div className="font-anton text-white">CONTACT</div>
        </div>
        <div className="h-[105px]">
          <div className="font-anton white-stroke">CONTACT</div>
        </div>
        <div className="h-2"></div>
        <div className="h-[105px]">
          <div className="font-anton text-white">CONTACT</div>
        </div>
        <div className="h-[105px]">
          <div className="font-anton white-stroke">CONTACT</div>
        </div>
        <div className="h-2"></div>
        <div className="h-[105px]">
          <div className="font-anton text-white">CONTACT</div>
        </div>
        <div className="h-[105px]">
          <div className="font-anton white-stroke">CONTACT</div>
        </div>
        <div className="h-2"></div>
        <div className="h-[105px]">
          <div className="font-anton text-white">CONTACT</div>
        </div>
      </div> */}
    </section>
  );
};

export default Contact;
