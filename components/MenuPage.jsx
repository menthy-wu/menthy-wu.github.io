import React from "react";
import { motion } from "framer-motion";

const MenuPage = ({ toggleOpen, setCursorVariant }) => {
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
                delay: 0.1,
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
                delay: 0.2,
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
                delay: 0.3,
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
                delay: 0.4,
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
                delay: 0.5,
            },
        },
        hover:
        {
            opacity: 1,
            x: 0,
            y: 0,
            height: 5,
            width: 5,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                duration: 1.2,
            },

        },
        hidden: {
            opacity: 0,
            x: 60,
            y: 0
        },
    };
    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 500px 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: "circle(30px at 500px 40px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (<motion.div variants={sidebar} initial="closed" animate="open" className="fixed right-0 top-0 w-1/3 bg-nav z-40 h-screen flex flex-col justify-center items-center">
        <motion.a
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")} onClick={() => toggleOpen()} href="/" variants={flyIn} initial="hidden" animate="first" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 500 }} className="text-left font-abril text-5xl text-black w-full ml-8 mt-3 hover:no-underline hover:text-black">- MENTHY WU</motion.a>
        <motion.a
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")} onClick={() => toggleOpen()} href="/#about" variants={flyIn} initial="hidden" animate="second" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 500 }} className="text-left font-abril text-5xl text-black w-full ml-8 mt-3 hover:no-underline hover:text-black">- ABOUT</motion.a>
        <motion.a
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")} onClick={() => toggleOpen()} href="/#projects" variants={flyIn} initial="hidden" animate="third" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 500 }} className="text-left font-abril text-5xl text-black w-full ml-8 mt-3 hover:no-underline hover:text-black">- PROJECTS</motion.a>
        <motion.a
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")} onClick={() => toggleOpen()} href="/#contacts" variants={flyIn} initial="hidden" animate="fourth" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 500 }} className="text-left font-abril text-5xl text-black w-full ml-8 mt-3 hover:no-underline hover:text-black">- CONTACTS</motion.a>
    </motion.div>)
}

export default MenuPage;