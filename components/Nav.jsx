import React from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";

const Nav = ({ setToHover, setToDefault }) => {
  return (
    <div className="flex justify-between mx-8 my-2 w-10/12">
      <Link
        onMouseEnter={setToHover}
        onMouseLeave={setToDefault}
        href="/"
        className="bg-nav rounded-full w-32 text-center font-abril p-2 text-xl hover:no-underline hover:text-black"
      >
        Menthy Wu
      </Link>
      <Link
        onMouseEnter={setToHover}
        onMouseLeave={setToDefault}
        href="/#about"
        className="bg-nav rounded-full w-32 text-center font-abril p-2 text-xl hover:no-underline hover:text-black"
      >
        About
      </Link>
      <Link
        onMouseEnter={setToHover}
        onMouseLeave={setToDefault}
        href="/#projects"
        className="bg-nav rounded-full w-32 text-center font-abril p-2 text-xl hover:no-underline hover:text-black"
      >
        Projects
      </Link>
      <Link
        onMouseEnter={setToHover}
        onMouseLeave={setToDefault}
        href="/#contacts"
        className="bg-nav rounded-full w-32 text-center font-abril p-2 text-xl hover:no-underline hover:text-black"
      >
        Contacts
      </Link>
      <MenuButton />
    </div>
  );
};
export default Nav;
