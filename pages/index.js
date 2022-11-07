import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import { FaGithub, FaRegEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Menthy Wu</title>
        <meta name="description" content="Menthy Wu's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <p className="z-30 font-montserrat text-6xl font-bold text-white">
          This is{' '}
        </p>
        <p className="z-30 font-montserrat text-[#fff373] text-6xl font-bold ">
          Menthy Wu
        </p>
        <p className="z-30 font-montserrat text-5xl font-bold text-white">Computer Science at UCR</p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        {/* <a><FaRegEnvelope className="text-6xl" /></a>
        <a><FaInstagram className="text-6xl" /></a>
        <a><FaLinkedin className="text-6xl" /></a>
        <a><FaGithub className="text-6xl" /></a> */}
      </footer>
    </div>
  )
}
