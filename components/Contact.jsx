import React from "react";

const Contact = ({ setCursorVariant }) => {
  return (
    <section
      id="contacts"
      className="bg-black w-full h-[700px] flex flex-Col min-h-screen justify-between  sticky top-0"
    >
      <div className="w-1/2 flex justify-evenly items-center md:text-10xl text-4xl">
        <div className="ml-3 w-[1px] h-full bg-white"></div>
        <div className="h-full w-[130px] flex justify-center items-center overflow-hidden">
          <a
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/wmx_owo/"
            className="rotate-270 whitespace-nowrap font-anton link hover:no-underline"
          >
            Instagram
          </a>
        </div>
        <div className="w-[1px] h-full bg-white"></div>
        <div className="h-full w-[130px] flex justify-center items-center overflow-hidden">
          <a
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mengxuan-wu/"
            className="rotate-270 whitespace-nowrap font-anton link hover:no-underline"
          >
            LinkedIn
          </a>
        </div>
        <div className="w-[1px] h-full bg-white"></div>
        <div className="h-full w-[130px] flex justify-center items-center overflow-hidden">
          <a
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/menthy-wu"
            className="rotate-270 whitespace-nowrap font-anton link hover:no-underline"
          >
            GitHub
          </a>
        </div>
        <div className="w-[1px] h-full bg-white"></div>
        <div className="h-full w-[130px] flex justify-center items-center overflow-hidden">
          <a
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            target="_blank"
            rel="noreferrer"
            href="mailto:wumengxuan0728@gmail.com"
            className="rotate-270 whitespace-nowrap font-anton link hover:no-underline"
          >
            Email
          </a>
        </div>
      </div>
      <div className="whitespace-nowrap font-abril w-1/2 flex flex-col justify-center items-center overflow-hidden text-6xl md:text-12xl">
        <div className="h-[105px]">
          <div className="font-anton white-stroke">CONTACT</div>
        </div>
        <div className="h-2"></div>
        <div className="h-[105px]">
          <div className="font-anton text-white">CONTACT</div>
        </div>
        <div className="h-[105px]">
          <div className="font-anton white-stroke">CONTACT</div>
        </div>
        <div className="h-2"></div>
        <div className="h-[105px]">
          <div className="font-anton text-white">CONTACT</div>
        </div>
        <div className="h-[105px]">
          <div className="font-anton white-stroke">CONTACT</div>
        </div>
        <div className="h-2"></div>
        <div className="h-[105px]">
          <div className="font-anton text-white">CONTACT</div>
        </div>
        <div className="h-[105px]">
          <div className="font-anton white-stroke">CONTACT</div>
        </div>
        <div className="h-2"></div>
        <div className="h-[105px]">
          <div className="font-anton text-white">CONTACT</div>
        </div>
        <div className="h-[105px]">
          <div className="font-anton white-stroke">CONTACT</div>
        </div>
        <div className="h-2"></div>
        <div className="h-[105px]">
          <div className="font-anton text-white">CONTACT</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
