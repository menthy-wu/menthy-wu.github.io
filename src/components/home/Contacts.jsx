import React from "react";
import Title from "../Title";
import { contacts } from "@/data/contacts";
import { techIcons } from "@/data/techStack";
import Link from "next/link";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="justify-center flex flex-col w-7/12 my-10"
    >
      <Title text="CONTACTS">
        <div className="h-8 w-24 absolute bg-custom-theme -right-4 -bottom-1 z-10" />
      </Title>
      <div className="text-custom-white flex text-7xl w-full justify-evenly gap-4 my-10">
        {Object.entries(contacts).map(([type, link], index) => (
          <Link
            href={link}
            key={index}
            className="hover:cursor-pointer hover:opacity-60 hover:scale-110 duration-300"
          >
            {techIcons[type]}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
