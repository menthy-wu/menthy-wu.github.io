import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  const animation = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section
      id="landing"
      className="h-[70vh] md:h-screen items-start justify-center flex flex-col w-11/12 md:w-7/12"
    >
      <div className="flex items-end gap-2">
        <motion.div
          initial="hidden"
          animate="show"
          className="flex flex-col items-end"
        >
          <motion.p
            variants={animation}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 1,
              delay: 0,
            }}
            className="m-0 text-custom-white font-montserrat font-regular text-xs md:text-base"
          >
            SOFTWARE ENGINEER
          </motion.p>
          <motion.p
            variants={animation}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 1,
              delay: 0.3,
            }}
            className="m-0 text-custom-white font-montserrat font-thin text-xs md:text-base"
          >
            UI/UX DESIGNER
          </motion.p>
          <motion.p
            variants={animation}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 1,
              delay: 0.6,
            }}
            className="m-0 text-custom-white font-anticDidone text-3xl md:text-5xl translate-x-6"
          >
            MENTHY WU
          </motion.p>
        </motion.div>
        <div className="bg-custom-theme h-32 w-8" />
        <motion.div initial="hidden" animate="show">
          <motion.p
            variants={animation}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 1,
              delay: 0.6,
            }}
            className="m-0 text-custom-white/60 font-montserrat font-thin text-sm md:text-lg"
          >
            CAT
          </motion.p>
          <motion.p
            variants={animation}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 1,
              delay: 0.9,
            }}
            className="m-0 text-custom-white/50 font-montserrat font-thin text-xs md:text-base"
          >
            FOOD
          </motion.p>
          <motion.p
            variants={animation}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 1,
              delay: 1.2,
            }}
            className="m-0 text-custom-white/40 font-montserrat font-thin text-xs md:text-sm"
          >
            DIGITAL ART
          </motion.p>
        </motion.div>
      </div>
      <div className="flex mx-12 my-4">
        <div className="bg-custom-white h-32 w-[0.1px]" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={animation}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 1,
            delay: 1.2,
          }}
          className="bg-custom-white h-6 w-2 mt-7"
        />
        <motion.p
          initial="hidden"
          animate="show"
          variants={animation}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 1,
            delay: 1.2,
          }}
          className="m-0 text-custom-white font-montserrat font-thin text-xs md:text-base mx-3 mt-8"
        >
          My name is Menthy Wu. I am studying computer science at University of
          California right now. It is really nice to meet you here!
        </motion.p>
      </div>
    </section>
  );
};

export default Landing;
