import React from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const MoreDots = () => {
    const flyIn = {
        first: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                duration: .3,
                delay:0.1,
            },
        },
        second: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                duration: .6,
                delay:0.2,
            },
        },
        third: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                duration: .9,
                delay:0.3,
            },
        },
        fourth: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                duration: 1.2,
                delay:0.4,
            },
        },
        fifth: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                duration: 1.2,
                delay:0.5,
            },
        },
        hidden: {
            opacity: 0,
            x: 0,
            y: -50
        },
    };
    return (
        <div className="mt-8">
            <motion.div variants={flyIn} initial="hidden" whileInView="first">
                <FaCircle className="text-white mt-4" />
            </motion.div>
            <motion.div variants={flyIn} initial="hidden" whileInView="second">
                <FaCircle className="text-white mt-4 opacity-80" />
            </motion.div>
            <motion.div variants={flyIn} initial="hidden" whileInView="third">
                <FaCircle className="text-white mt-4 opacity-60" />
            </motion.div>
            <motion.div variants={flyIn} initial="hidden" whileInView="fourth">
                <FaCircle className="text-white mt-4 opacity-40" />
            </motion.div>
            <motion.div variants={flyIn} initial="hidden" whileInView="fifth">
                <FaCircle className="text-white mt-4 opacity-20" />
            </motion.div>
        </div>
    );
};
export default MoreDots;
