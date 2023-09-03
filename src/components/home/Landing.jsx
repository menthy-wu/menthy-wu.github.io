import React from "react";

const Landing = () => {
  return (
    <section
      id="landing"
      className="h-[70vh] md:h-screen items-start justify-center flex flex-col w-11/12 md:w-7/12"
    >
      <div className="flex items-end gap-2">
        <div className="flex flex-col items-end">
          <p className="m-0 text-custom-white font-montserrat font-regular text-xs md:text-base">
            SOFTWARE ENGINEER
          </p>
          <p className="m-0 text-custom-white font-montserrat font-thin text-xs md:text-base">
            UI/UX DESIGNER
          </p>
          <p className="m-0 text-custom-white font-anticDidone text-3xl md:text-5xl translate-x-6">
            MENTHY WU
          </p>
        </div>
        <div className="bg-custom-theme h-32 w-8" />
        <div>
          <p className="m-0 text-custom-white/60 font-montserrat font-thin text-sm md:text-lg">
            CAT
          </p>
          <p className="m-0 text-custom-white/50 font-montserrat font-thin text-xs md:text-base">
            FOOD
          </p>
          <p className="m-0 text-custom-white/40 font-montserrat font-thin text-xs md:text-sm">
            DIGITAL ART
          </p>
        </div>
      </div>
      <div className="flex mx-12 my-4">
        <div className="bg-custom-white h-32 w-[0.1px]" />
        <div className="bg-custom-white h-6 w-2 mt-7" />
        <p className="m-0 text-custom-white font-montserrat font-thin text-xs md:text-base mx-3 mt-8">
          My name is Menthy Wu. I am studying computer science at University of
          California right now. It is really nice to meet you here!
        </p>
      </div>
    </section>
  );
};

export default Landing;
