import React from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex justify-between mx-8 my-2 w-10/12">
      <Link
        href="/"
        className="bg-nav rounded-full w-32 text-center font-abril p-2 text-xl hover:no-underline hover:text-black"
      >
        Menthy Wu
      </Link>
      <Link
        href="/#about"
        className="bg-nav rounded-full w-32 text-center font-abril p-2 text-xl hover:no-underline hover:text-black"
      >
        About
      </Link>
      <Link
        href="/#projects"
        className="bg-nav rounded-full w-32 text-center font-abril p-2 text-xl hover:no-underline hover:text-black"
      >
        Projects
      </Link>
      <Link
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
