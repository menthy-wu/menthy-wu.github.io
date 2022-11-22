import React from "react";
import { FaCircle } from "react-icons/fa";


const About = () => {
  return (
    <section id="about" className=" w-full flex flex-col min-h-screen mb-[400px] items-start justify-start">
      <div className="bg-black w-full m-0 p-0 flex flex-row min-h-screen">
        <div className="w-1/4 justify-center items-center flex ">
          <div className="flex flex-row h-full">
            <div className="h-full w-[105px] flex justify-center items-center overflow-hidden">
              <div className="rotate-270 whitespace-nowrap font-abril text-10xl text-white ">About •About•About •</div>
            </div>
            <div className="ml-[-20px] h-full w-[105px] flex justify-center items-center overflow-hidden">
              <div className="rotate-90 whitespace-nowrap font-abril text-10xl white-stroke ">About •About•About •</div>
            </div>
          </div>
        </div>
        <div className="w-3/4 justify-center items-center flex">
          <div className="w-2/3">
            <div className="flex flex-col items-start">
              <div className="flex items-center w-full">
                <FaCircle className="text-white" />
                <hr className="ml-[-3px] bg-white h-[2px] w-full" />
              </div>
              <div className="font-quicksand text-white md:text-3xl w-2/3 text-right">
                Lorem ipsum dolor sit amet, conse
                ctetur adipiscing elit, sed do eiusmo
                d tempor incididunt ut labore et dolore magna  laborum.
              </div>
            </div>
            <div className="flex flex-col items-end mt-6">
              <div className="font-quicksand text-white md:text-3xl w-2/3 text-left">
                Lorem ipsum dolor sit amet, conse
                ctetur adipiscing elit, sed do eiusmo
                d tempor incididunt ut labore et dolore magna  laborum.
              </div>
            </div>
          </div>
        </div></div>
    </section>
  );
};
export default About;
