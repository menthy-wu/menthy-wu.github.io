import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

const MovingButton = ({ text, setToHover, setToDefault }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(200);


    const handleMouse = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - 2 * rect.left) / 1000;
        y.set(event.clientY - 2 * rect.top) / 1000 - rect.bottom / 2;

        console.log(x.get());
    }
    const exitMouse = (e) => {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div onMouseMove={handleMouse}
            onMouseLeave={exitMouse}
            className=" bg-red-300" style={{
                width: 190,
                height: 90,
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                borderRadius: 30,
                perspective: 400
            }}>
            <motion.div className="bg-nav rounded-full w-9/12 text-center font-abril p-2 text-xlk"
                style={{ x: x, y: y }}
                transition={{ type: "spring", stiffness: 100, mass: 0.6 }}>
                <Link
                    onMouseEnter={setToHover}
                    onMouseLeave={setToDefault}
                    href="/"
                    className="text-center font-abril p-2 text-xl hover:no-underline hover:text-black"
                >
                    {text}
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default MovingButton;