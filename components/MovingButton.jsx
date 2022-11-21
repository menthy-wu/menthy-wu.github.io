import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

const MovingButton = ({ text, setToHover, setToDefault }) => {
    const tx = 0;
    const ty = 0;
    return (
        <motion.div className=" bg-red-300" style={{
            width: 190,
            height: 90,
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            borderRadius: 30,
            perspective: 400
        }}>
            <Link
                onMouseEnter={setToHover}
                onMouseLeave={setToDefault}
                href="/"
                className="bg-nav rounded-full w-9/12 text-center font-abril p-2 text-xl hover:no-underline hover:text-black"
            >
                {text}
            </Link>
        </motion.div>
    )
}

export default MovingButton;