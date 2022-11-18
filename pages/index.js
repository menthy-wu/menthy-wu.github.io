import Head from 'next/head'
import React from 'react'
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import About from "../components/About"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Menthy Wu</title>
        <meta name="description" content="Menthy Wu's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <Landing picNum={44}/>
        <About/>
      </main>

      <Footer/>
    </div>
  )
}
