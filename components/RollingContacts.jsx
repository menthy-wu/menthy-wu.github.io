import React from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { useRef } from "react";
import { wrap } from "@motionone/utils";

const RollingContacts = ({ baseVelocity, font, wrapper }) => {
    const basY = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        basY.set(basY.get() + moveBy);
    });
    const y = useTransform(basY, (v) => `${wrap(-0, -20, v)}%`);
    return (<div className={`${wrapper} flex items-center overflow-hidden`}><motion.div className={`${font} whitespace-nowrap text-clip`} style={{ y }}>
        <div className="white-stroke">Contacts </div>
        <div>Contacts </div>
        <div className="white-stroke">Contacts </div>
        <div>Contacts </div>
        <div className="white-stroke">Contacts </div>
        <div>Contacts </div>
        <div className="white-stroke">Contacts </div>
        <div>Contacts </div>
        <div className="white-stroke">Contacts </div>
        <div>Contacts </div>
        
    </motion.div></div>)
}

export default RollingContacts;