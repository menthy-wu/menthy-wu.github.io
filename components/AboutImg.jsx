import React from "react";
import { motion } from "framer-motion";

const AboutImg = ({ imgSrc }) => {
  const variants = {
    animation: {
      d: [
        "M193.8 -118.1C231.8 -46.2 229.8 42.7 190.8 109.3C151.8 176 75.9 220.5 -3 222.3C-82 224 -164 183 -185.6 126.3C-207.3 69.7 -168.6 -2.7 -127.6 -76.3C-86.6 -150 -43.3 -225 17.3 -235C77.9 -245 155.9 -190 193.8 -118.1",
        "M127.3 -94.8C149 -36 139.4 19.5 113 79.1C86.6 138.7 43.3 202.3 -15.9 211.5C-75.1 220.7 -150.1 175.3 -193.4 106C-236.7 36.7 -248.3 -56.7 -210.7 -124.7C-173.2 -192.7 -86.6 -235.3 -16.9 -225.6C52.8 -215.8 105.7 -153.7 127.3 -94.8",
        "M185.3 -103.5C220.5 -46 215.9 38 178.4 109.7C140.9 181.3 70.4 240.7 10.1 234.8C-50.2 229 -100.5 158 -122.1 95.5C-143.8 33 -136.8 -21 -111.7 -72.7C-86.6 -124.3 -43.3 -173.7 15.9 -182.8C75.1 -192 150.1 -161 185.3 -103.5",
        "M153.3 -98.2C179.6 -43 168.6 24 136.8 92.3C105.1 160.7 52.5 230.3 -1.3 231.1C-55.1 231.8 -110.3 163.7 -131.9 101.2C-153.6 38.7 -141.7 -18.2 -114.2 -74.1C-86.6 -130 -43.3 -185 10.1 -190.8C63.5 -196.7 127 -153.3 153.3 -98.2",
        "M153.6 -98C187.1 -30.7 194 42.7 164 104.7C133.9 166.7 67 217.3 -9.8 223C-86.6 228.7 -173.2 189.3 -194.9 132.2C-216.5 75 -173.2 0 -129.9 -73C-86.6 -146 -43.3 -217 8.4 -221.8C60 -226.7 120.1 -165.3 153.6 -98",
        "M193.8 -118.1C231.8 -46.2 229.8 42.7 190.8 109.3C151.8 176 75.9 220.5 -3 222.3C-82 224 -164 183 -185.6 126.3C-207.3 69.7 -168.6 -2.7 -127.6 -76.3C-86.6 -150 -43.3 -225 17.3 -235C77.9 -245 155.9 -190 193.8 -118.1",
      ],
      transition: {
        type: "Tween",
        mass: 0.6,
        repeat: Infinity,
        duration: 10,
      },
    },
  };
  return (
    <div className="w-full flex justify-center">
      <svg
        className="w-1/3 md:w-full flex"
        preserveAspectRatio="xMidYMid meet"
        x="0"
        y="0"
        id="visual"
        viewBox="0 0 900 600"
        version="1.1"
        transform="scale(1)"
      >
        <defs>
          <mask id="shape">
            <motion.path
              variants={variants}
              animate="animation"
              d="M127.3 -94.8C149 -36 139.4 19.5 113 79.1C86.6 138.7 43.3 202.3 -15.9 211.5C-75.1 220.7 -150.1 175.3 -193.4 106C-236.7 36.7 -248.3 -56.7 -210.7 -124.7C-173.2 -192.7 -86.6 -235.3 -16.9 -225.6C52.8 -215.8 105.7 -153.7 127.3 -94.8"
              fill="#FFFFFF"
              transform="scale(1 1.2) translate(460 260)"
            />
          </mask>
        </defs>
        <image
          mask="url(#shape)"
          preserveAspectRatio="xMidYMid meet"
          x="0"
          y="0"
          href={imgSrc}
          width="100%"
          height="100%"
          transform="scale(2) translate(-230 -150)"
        />
      </svg>
    </div>
  );
};

export default AboutImg;
