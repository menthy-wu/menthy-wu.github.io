import React from "react";
import { Controller, Scene } from "react-scrollmagic";

const Landing = ({ pictureList, picNum }) => {
  return (
    <div className="w-full">
      <div className="bg-black">
        <Controller>
          <Scene triggerHook="onLeave" duration={5000} pin>
            {(progress) => {
              console.log(Math.floor(picNum * progress + 1));
              return (
                <img
                  src={`\\backGroundVideo1\\backgroundVideo-${Math.floor(
                    picNum * progress + 3
                  )}.png`}
                  alt="bg pic"
                  layout="fill"
                  className="bg-cover"
                />
              );
            }}
          </Scene>
        </Controller>
      </div>
      <div className="w-full inset-x-0 inset-y-1/3 absolute ">
        <p className=" font-ops text-6xl font-bold drop-shadow-pink text-black">This is </p>
        <p className=" font-ops text-white text-6xl font-bold drop-shadow-white">
          Menthy Wu
        </p>
        <p className="font-ops font-montserrat text-5xl font-bold drop-shadow-pink text-black">
          Computer Science at UCR
        </p>
      </div>
    </div>
  );
};
export default Landing;
