import React from "react";
import Nav from "./nav";
// import { Controller, Scene } from "react-scrollmagic";

const Landing = ({ pictureList, picNum }) => {
    return (
        <div className="w-full bg-gray">
            <Nav />
            <div className="font-anton text-15xl black-stroke">- THIS IS MENTHY WU -</div>
            <div className="font-anton text-15xl text-black">- THIS IS MENTHY WU -</div>
        </div>
    );
};
export default Landing;
