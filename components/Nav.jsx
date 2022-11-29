import React from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";
import MovingButton from "./MovingButton";

const Nav = ({ setCursorVariant }) => {
  return (
    <div className="flex justify-between my-2 w-full">
      <MovingButton text="Home" setCursorVariant={setCursorVariant} link="/" />
      <MovingButton
        text="About"
        setCursorVariant={setCursorVariant}
        link="/#about"
      />
      <MovingButton
        text="Projects"
        setCursorVariant={setCursorVariant}
        link="/#projects"
      />
      <MovingButton
        text="Contacts"
        setCursorVariant={setCursorVariant}
        link="/#contacts"
      />
      <MovingButton
        text="Arts"
        setCursorVariant={setCursorVariant}
        link="/#arts"
      />
      <div className="" />
    </div>
  );
};
export default Nav;
