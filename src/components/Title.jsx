import React from "react";

const Title = ({ text, children }) => {
  return (
    <div className="relative w-fit">
      <p className="m-0 text-custom-white font-anticDidone text-3xl md:text-5xl w-fit relative z-50 drop-shadow-[0_0px_1px_rgba(0,0,0,1)]">
        {text}
      </p>
      {children}
    </div>
  );
};

export default Title;
