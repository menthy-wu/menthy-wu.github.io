import React from "react";
import { Controller, Scene } from "react-scrollmagic";


const Landing = ({pictureList,picNum}) => {
    return (
        <div className="w-full">
            <div className="bg-black">
                <Controller><Scene triggerHook="onLeave" duration={5000} pin>{(progress) => {
                    console.log(Math.floor( picNum*progress+1))
                    return (<img src={`\\backGroundVideo1\\backgroundVideo-${Math.floor( picNum*progress+1)}.png`}
                        alt="bg pic"
                        layout="fill"
                        className="bg-cover"
                    />)
                }}</Scene></Controller>
            </div>
            <div className="w-full inset-x-0 inset-y-1/3 absolute">
                <p className=" font-ops text-6xl font-bold text-white">
                    This is{' '}
                </p>
                <p className=" font-ops text-[#fff373] text-6xl font-bold ">
                    Menthy Wu
                </p>
                <p className="font-montserrat text-5xl font-bold text-white">Computer Science at UCR</p></div>
        </div>
    )
}
export default Landing;