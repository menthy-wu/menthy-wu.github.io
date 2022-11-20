import React from "react";
import Nav from "./Nav";
// import { Controller, Scene } from "react-scrollmagic";

const Landing = ({setToHover,setToDefault}) => {
  return (
    <section
      id="landing"
      className="w-full bg-gray flex flex-col items-center h-[700px] min-h-screen"
    >
      <Nav setToHover={setToHover} setToDefault={setToDefault}/>
      <div className="mt-6 w-full h-[105px] flex items-center overflow-hidden">
        <div className="top-0 translate-x-[150px] text-left font-anton text-10xl black-stroke whitespace-nowrap text-clip">
          - THIS IS MENTHY WU -
        </div>
      </div>
      <div className="m-0 w-full h-[10px] flex items-center overflow-hidden">
        <div className="text-left translate-x-[-60px] font-abril text-xs text-black whitespace-nowrap text-clip">
          This is jsut some random text. I just feel like it looks better if
          there is something. You can read it if you want, but it is just non
          sense. Also, if you read it in insector, you are a loser.
        </div>
      </div>
      <div className="w-full h-[105px] flex items-center overflow-hidden">
        <div className="font-anton translate-x-[700px] text-10xl text-black whitespace-nowrap text-clip overflow-hidden">
          - MENTHY WU -
        </div>
      </div>

      <div className="m-0 w-full h-[105px] flex items-center overflow-hidden">
        <div className="font-anton translate-x-[-70px] text-10xl text-black whitespace-nowrap text-clip">
          Computer Science at UCR
        </div>
      </div>
      <div className="m-0 w-full h-[105px] flex items-center overflow-hidden">
        <div className="font-anton translate-x-[300px] text-10xl black-stroke whitespace-nowrap text-clip overflow-hidden w-full">
          Computer Science at UCR
        </div>
      </div>
      <div className="m-0 w-full h-[10px] flex items-center overflow-hidden">
        <div className="text-left translate-x-[700px] font-abril text-xs text-black whitespace-nowrap text-clip">
          This is jsut some random text. I just feel like it looks better if
          there is something. You can read it if you want, but it is just non
          sense. Also, if you read it in insector, you are a loser.
        </div>
      </div>
      <div className="m-0 mt-3 w-full flex justify-end items-end flex-col">
        <div className="h-[1px] w-[300px] bg-black m-0 mr-5"/>
        <div className="relative mx-24 font-abril text-sm text-black w-1/6 text-right">
          This is jsut some random text. I just feel like it looks better if
          there is something. You can read it if you want, but it is just non
          sense. Also, if you read it in insector, you are a loser.
          <div className="absolute h-[150px] w-[2px] bg-black top-[-12px] right-[-20px]"/>
        </div>
      </div>
    </section>
  );
};
export default Landing;
