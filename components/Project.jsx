import React from "react";
import { FaCircle } from "react-icons/fa";

const Project = ({ title }) => {
  return (
    <div className="w-full flex flex-col justify-center items-end">
      <div className="flex items-center w-full">
        <FaCircle className="text-white" />
        <hr className="ml-[-3px] bg-white h-[2px] w-full" />
      </div>
      <div className="text-white font-poiret text-3xl text-right">{title}</div>
      <div className="text-white font-anton text-sm text-right mt-4">
        Unity, C#, Photoshop
      </div>
      <div className="text-white text-base text-right w-10/12 font-quicksand">
        Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmo
        d tempor incididunt ut labore et dolore magna laborum.
      </div>
    </div>
  );
};
export default Project;
