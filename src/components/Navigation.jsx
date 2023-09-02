import React from "react";
import { navigations } from "@/data/navigations";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex justify-center bg-gradient-to-b from-custom-white/20 to-custom-white/10 backdrop-blur-md fixed top-0 w-full">
      {navigations.map((navigation, index) => (
        <Link
          key={index}
          className="font-montserrat text-white text-lg no-underline mx-3 my-3 p-0 font-thin"
          href={navigation.link}
        >
          {navigation.text}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
