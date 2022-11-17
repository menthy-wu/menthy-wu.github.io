import React from "react";
import Nav from "./Nav";
// import { Controller, Scene } from "react-scrollmagic";

const Landing = () => {
  return (
    <div className="w-full bg-gray flex flex-col items-center h-screen">
      <Nav />
      <div className="relative w-full">
        <div className="top-0 absolute font-anton text-12xl black-stroke whitespace-nowrap text-clip overflow-hidden w-full">
          - THIS IS MENTHY WU -
        </div>
        <div className="top-[120px] left-[250px] absolute font-anton text-12xl text-black whitespace-nowrap text-clip overflow-hidden w-full">
          - MENTHY WU -
        </div>
        <div className="top-[240px] left-[-120px] absolute font-anton text-12xl text-black whitespace-nowrap text-clip overflow-hidden w-full">
          Computer Science at UCR
        </div>
        <div className="top-[360px] left-[360px] absolute font-anton text-12xl black-stroke whitespace-nowrap text-clip overflow-hidden w-full">
          Computer Science at UCR
        </div>
      </div>
    </div>
  );
};
export default Landing;