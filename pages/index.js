import Head from 'next/head'
import React from 'react'
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import About from "../components/About"
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 w-full">
      <Head>
        <title>Menthy Wu</title>
        <meta name="description" content="Menthy Wu's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center text-center">
        <Landing/>
        <About/>
        <Projects/>
      </main>

      <Footer/>
    </div>
  )
}
