import React from "react";
import MenuButton from "./MenuButton";

const Nav = () => {
  return (
    <div className="flex justify-between mx-8 my-2 w-10/12">
      <div className="bg-nav rounded-full w-32 text-center font-abril p-2 text-xl">
        Menthy Wu
      </div>
      <div className="bg-nav rounded-full w-32 text-center font-abril p-2 text-xl">
        About
      </div>
      <div className="bg-nav rounded-full w-32 text-center font-abril p-2 text-xl">
        Projects
      </div>
      <div className="bg-nav rounded-full w-32 text-center font-abril p-2 text-xl">
        Contacts
      </div>
      <MenuButton/>
    </div>
  );
};
export default Nav;
