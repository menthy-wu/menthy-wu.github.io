import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Cursor = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hover: {
      height: 50,
      width: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
    },
    onMovingButton: {
      height: 0,
      width: 0,
      x: mousePosition.x,
      y: mousePosition.y,
    },
    view: {
      height: 70,
      width: 70,
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
    },
    back: {
      height: 70,
      width: 70,
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
    },
    more: {
      height: 70,
      width: 70,
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
    },
  };

  return (
    <motion.div
      className="cursor z-100 flex justify-center items-center"
      variants={variants}
      animate={cursorVariant}
    >
      {cursorVariant == "view" ? (
        <div className="font-poiret text-black text-xl text-center w-full rounded-full bg-gray h-full justify-center items-center flex">
          VIEW
        </div>
      ) : cursorVariant == "back" ? (
        <div className="font-poiret text-black text-xl text-center w-full rounded-full bg-gray h-full justify-center items-center flex">
          BACK
        </div>
      ) : cursorVariant == "more" ? (
        <div className="font-poiret text-black text-xl text-center w-full rounded-full bg-gray h-full justify-center items-center flex">
          MORE
        </div>
      ) : (
        <></>
      )}
    </motion.div>
  );
};

export default Cursor;
