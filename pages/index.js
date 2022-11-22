import Head from "next/head";
import React, { useEffect } from "react";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Cursor from "../components/Cursor";
import { useState } from "react";
import WaveDivider from "../components/WaveDivider";
import MenuButton from "../components/MenuButton";

export default function Home() {
  const [cursorVariant, setCursorVariant] = useState("default");
  useEffect(() => {
    console.log(cursorVariant);
  }, [cursorVariant]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 w-full">
      <Head>
        <title>Menthy Wu</title>
        <meta name="description" content="Menthy Wu's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center text-center">

        <MenuButton setCursorVariant={setCursorVariant} />
        <Landing setCursorVariant={setCursorVariant} />
        <div className="w-full z-10">
          <WaveDivider />
          <About />
        </div>
        <Projects />
        <Contact setCursorVariant={setCursorVariant} />
      </main>

      <Footer setCursorVariant={setCursorVariant} />
      <Cursor cursorVariant={cursorVariant} />
    </div>
  );
}
