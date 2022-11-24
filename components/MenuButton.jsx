import React from "react";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuPage from "../components/MenuPage";
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton = ({ setCursorVariant }) => {
  const [isOpen, setOpen] = useState(false);
  const [menuButtonAnimation, setMenuButtonAnimation] = useState("closed");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const toggleOpen = () => {
    setOpen(!isOpen);
    if (!isOpen) {
      setMenuButtonAnimation("open");
    } else {
      setMenuButtonAnimation("closed");
    }
  };
  const mouseLeave = () => {
    setCursorVariant("default");
    setMousePosition({
      x: 0,
      y: 0,
    });
  };
  const mouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - 27,
      y: e.clientY - 48,
    });
  };
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 300px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 300px 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div>
      <motion.div
        variants={sidebar}
        animate={isOpen ? "open" : "closed"}
        className="z-40 fixed right-0 top-0 w-1/2"
      >
        <MenuPage toggleOpen={toggleOpen} setCursorVariant={setCursorVariant} />
      </motion.div>
      <motion.div
        onClick={() => toggleOpen()}
        onMouseLeave={mouseLeave}
        onMouseMove={mouseMove}
        className="fixed top-5 right-10 z-50 rounded-full h-15 w-15 items-center justify-center flex "
      >
        <motion.div
          onMouseEnter={() => setCursorVariant("onMovingButton")}
          onMouseLeave={() => setCursorVariant("default")}
          className="bg-nav rounded-full h-12 w-12 items-center justify-center flex font-abril p-2 text-xl"
          variants={variants}
          animate="default"
        >
          <svg width="23" height="23" viewBox="0 0 23 23" className="z-50">
            <Path
              d="M 2 2.5 L 20 2.5"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 9.423 L 10 2.5" },
              }}
              animate={menuButtonAnimation}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 1 },
              }}
              transition={{ duration: 0.1 }}
              animate={menuButtonAnimation}
            />
            <Path
              d="M 2 16.346 L 20 16.346"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 9.423 L 10 16.346" },
              }}
              animate={menuButtonAnimation}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default MenuButton;
