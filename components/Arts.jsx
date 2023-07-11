import React, { useState } from "react";
import { div, Col } from "react-bootstrap";
import RollingText from "./RollingText";
import { motion } from "framer-motion";
import Art from "./Art";

const imgLists = [
  "arts/img (1).jpg",
  "arts/img (1).png",
  "arts/img (2).jpg",
  "arts/img (2).png",
  "arts/img (3).jpg",
  "arts/img (3).png",
  "arts/img (4).jpg",
  "arts/img (5).jpg",
  "arts/img (6).jpg",
  "arts/img (7).jpg",
  "arts/img (8).jpg",
  "arts/img (9).jpg",
  "arts/img (10).jpg",
  "arts/img (11).jpg",
  "arts/img (12).jpg",
  "arts/img (13).jpg",
  "arts/img (14).jpg",
  "arts/img (15).jpg",
  "arts/img (16).jpg",
];
const Arts = ({ setCursorVariant }) => {
  const [showPic, setShowPic] = useState(false);
  const [currPic, setPic] = useState("");
  const toggle = (link) => {
    if (showPic) {
      setShowPic(false);
    } else {
      setPic(link);
      setShowPic(true);
    }
  };
  return (
    <div
      id="arts"
      className="z-30 w-full flex flex-row justify-center items-start bg-black pb-32"
    >
      {showPic && (
        <img
          src={currPic}
          className="absolute z-40 w-7/12"
          onClick={() => {
            toggle("");
          }}
        />
      )}
      <div className="w-9/12 columns-4 gap-4">
        {imgLists.map((img, index) => {
          return (
            <Art
              key={index}
              link={img}
              toggle={toggle}
              setCursorVariant={setCursorVariant}
            />
          );
        })}
      </div>
      <div className="h-screen w-[105px] flex justify-center items-center overflow-hidden">
        <div className="rotate-270 whitespace-nowrap  ">
          <RollingText
            wrapper=" w-full md:h-[105px]"
            font="text-left font-anton text-10xl text-white"
            baseVelocity={5}
          >
            Arts •
          </RollingText>
        </div>
      </div>
    </div>
  );
};
export default Arts;
