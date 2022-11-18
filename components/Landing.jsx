import React from "react";
import Nav from "./Nav";
// import { Controller, Scene } from "react-scrollmagic";

const Landing = () => {
  return (
    <div className="w-full bg-gray flex flex-col items-center h-[700px]">
      <Nav />
      <div className="relative w-full">
        <div className="top-0 left-[100px] text-left absolute font-anton text-10xl black-stroke whitespace-nowrap text-clip overflow-hidden">
          - THIS IS MENTHY WU -
        </div>
        <div className="text-left top-[120px] left-[-350px] absolute font-abril text-xs text-black whitespace-nowrap text-clip overflow-hidden">
          This is jsut some random text. I just feel like it looks better if
          there is something. You can read it if you want, but it is just non
          sense. Also, if you read it in insector, you are a loser.
        </div>
        <div className="top-[110px] left-[700px] absolute font-anton text-10xl text-black whitespace-nowrap text-clip overflow-hidden">
          - MENTHY WU -
        </div>
        <div className="top-[220px] left-[-120px] absolute font-anton text-10xl text-black whitespace-nowrap text-clip overflow-hidden">
          Computer Science at UCR
        </div>
        <div className="top-[330px] left-[360px] absolute font-anton text-10xl black-stroke whitespace-nowrap text-clip overflow-hidden w-full">
          Computer Science at UCR
        </div>
        <div className="text-left top-[450px] left-[400px] absolute font-abril text-sm text-black whitespace-nowrap text-clip overflow-hidden w-full">
          This is jsut some random text. I just feel like it looks better if
          there is something. You can read it if you want, but it is just non
          sense. Also, if you read it in insector, you are a loser.
        </div>
        <div className="top-[490px] left-[900px] relative font-abril text-sm text-black w-1/6 text-right">
          This is jsut some random text. I just feel like it looks better if
          there is something. You can read it if you want, but it is just non
          sense. Also, if you read it in insector, you are a loser.
          <div className= "w-[300px] h-[1px] bg-black absolute top-0 left-[-30px]"></div>
          <div className= "w-[1px] h-[150px] bg-black absolute top-[-20px] left-[220px]"></div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
