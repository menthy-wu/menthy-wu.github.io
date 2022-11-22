import React from "react";
import Nav from "./Nav";
import RollingText from "./RollingText";
// import { Controller, Scene } from "react-scrollmagic";

const Landing = ({ setCursorVariant }) => {
  return (
    <section
      id="landing"
      className="w-full bg-gray flex flex-col items-center h-[700px] min-h-screen sticky top-0"
    >
      <Nav setCursorVariant={setCursorVariant} />
      <div className="h-12" />
      <RollingText
        wrapper="mt-6 w-full md:h-[105px]"
        font="text-left font-anton text-5xl md:text-10xl black-stroke"
        baseVelocity={3}
      >
        {" "}
        - THIS IS MENTHY WU{" "}
      </RollingText>
      <RollingText
        wrapper="m-0 w-full md:h-[10px]"
        font="font-abril text-xs text-black"
        baseVelocity={1}
      >
        {" "}
        This is jsut some random text. I just feel like it looks better if there
        is something. You can read it if you want, but it is just nonsense.
        Also, if you read it in inspector, you are a loser.{" "}
      </RollingText>
      <RollingText
        wrapper="w-full md:h-[105px]"
        font="text-left font-anton text-5xl md:text-10xl text-black"
        baseVelocity={-3}
      >
        {" "}
        - MENTHY WU{" "}
      </RollingText>
      <div className="m-0 w-full md:h-[105px] flex items-center overflow-hidden">
        <div className="font-anton translate-x-[20px] md:translate-x-[300px] text-5xl md:text-10xl text-black whitespace-nowrap text-clip overflow-hidden w-full">
          • ASPIRING BILLIONAIRE
        </div>
      </div>
      <RollingText
        wrapper=" w-full md:h-[105px]"
        font="text-left font-anton text-5xl md:text-10xl black-stroke"
        baseVelocity={1}
      >
        {" "}
        Computer Science at UCR{" "}
      </RollingText>
      <div className="m-0 w-full h-[10px] flex items-center overflow-hidden">
        <div className="text-left translate-x-[700px] font-abril text-xs text-black whitespace-nowrap text-clip">
          This is jsut some random text. I just feel like it looks better if
          there is something. You can read it if you want, but it is just non
          sense. Also, if you read it in insector, you are a loser.
        </div>
      </div>
      <div className="m-0 mt-3 w-full flex justify-end items-end flex-col">
        <div className="h-[1px] w-[300px] bg-black m-0 mr-5" />
        <div className="relative mr-10 md:mx-24 font-abril text-sm text-black w-1/2 md:w-1/6 text-right">
          This is jsut some random text. I just feel like it looks better if
          there is something. You can read it if you want, but it is just non
          sense. Also, if you read it in insector, you are a loser.
          <div className="absolute h-[150px] w-[2px] bg-black top-[-12px] right-[-20px]" />
        </div>
      </div>
    </section>
  );
};
export default Landing;
