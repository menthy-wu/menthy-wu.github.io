"use client";
import About from "@/components/home/About";
import Contacts from "@/components/home/Contacts";
import Landing from "@/components/home/Landing";
import Projects from "@/components/home/Projects";
import Arts from "@/components/home/Arts";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Landing />
      <About />
      <Projects />
      <Arts />
      <Contacts />
    </div>
  );
}
