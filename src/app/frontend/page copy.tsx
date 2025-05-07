"use client"

import Head from "next/head";
import FloatingStars from "./star";
import CircleBackground from "./circleBackground";
import MobileDevice from "./mobileDevice";
import Ribbon from "./ribbon";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Uifry - Make The Best Financial Decisions</title>
      </Head>
      <div className="relative min-h-screen overflow-hidden">
        {/* Floating Stars */}
        <FloatingStars />

        {/* Circle Background */}
        <CircleBackground />

        {/* Header */}
        <header className="bg-white p-8">
          <nav className="flex justify-between items-center">
            <div>
              <img src="/logo.png" alt="Logo" className="h-8" />
            </div>
            <div className="space-x-4">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#pricing">Pricing</a>
              <a href="#features">Features</a>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded">
              Download
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center p-8 space-y-8 md:space-y-0">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">Make The Best Financial Decisions</h1>
            <p className="mt-4">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sodales Arcu Lorem Partitio.
            </p>
            <div className="flex space-x-4 mt-4">
              <button className="bg-black text-white px-4 py-2 rounded">
                Get Started →
              </button>
              <button className="bg-transparent border border-gray-300 px-4 py-2 rounded">
                Watch Video
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <MobileDevice />
          </div>
        </section>

        {/* Ribbon Section */}
        <section className="p-8">
          <Ribbon />
        </section>

        {/* Features Section */}
        <section className="p-8">
          <h2 className="text-2xl font-bold">Uifry Premium</h2>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Budgeting Intervals</h3>
            <p>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sodales Arcu Lorem Partitio.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white p-8 text-center">
          <p>Ready To Get Started?</p>
          <p>Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.</p>
          <button className="bg-white text-black px-4 py-2 rounded">
            Download App
          </button>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;










// import React from 'react'

// const Frontend = () => {
//   return (
//     <div>Frontend</div>
//   )
// }

// export default Frontend