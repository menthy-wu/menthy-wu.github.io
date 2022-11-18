import React from "react";

const About = () => {
  return (
    <div className="bg-black w-full h-[700px] flex flex-row">
      <div className="ml-10 w-[105px] h-full overflow-hidden justify-center items-center flex">
        <div className="rotate-270 text-white font-abril text-10xl whitespace-nowrap text-clip ">About •About•About •</div>
      </div>
      <div className=" mx-[-20px] w-[105px] h-full overflow-hidden justify-center items-center flex">
        <div className="rotate-90 white-stroke font-abril text-10xl whitespace-nowrap text-clip ">About •About•About •</div>
      </div>
    </div>
  );
};
export default About;
