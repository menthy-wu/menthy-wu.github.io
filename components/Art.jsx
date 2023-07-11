import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import RollingText from "./RollingText";
import { motion } from "framer-motion";

const Art = ({ setCursorVariant, toggle, link }) => {
  return (
    <div className="m-4">
      <motion.img
        onClick={() => {
          toggle(link);
        }}
        src={link}
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500 }}
      />
    </div>
  );
};
export default Art;
