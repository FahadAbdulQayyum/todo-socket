"use client";

import { RiAppleFill } from "react-icons/ri";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StarsBackground from "./starsBackground";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Ready = () => {
  const readyRef = useRef<HTMLDivElement>(null); // Ref for the entire Ready section
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const circle3Ref = useRef<HTMLDivElement>(null);
  const iphone1Ref = useRef<HTMLImageElement>(null);
  const iphone2Ref = useRef<HTMLImageElement>(null);
  const iphone3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Debugging: Check if refs are assigned correctly
    console.log("Refs:", readyRef.current, iphone1Ref.current, iphone2Ref.current, iphone3Ref.current);

    // Ensure the Ready section is rendered before setting up animations
    if (!readyRef.current) return;

    // Animate the first iPhone (move left)
    gsap.to(iphone1Ref.current, {
      x: -150, // Move farther left as you scroll down
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: readyRef.current, // Trigger animations based on the Ready section
        start: "top center", // Animation starts when the top of the section hits the center of the viewport
        end: "bottom center", // Animation ends when the bottom of the section hits the center of the viewport
        scrub: true, // Smoothly follow the scroll
      },
    });

    // Animate the second iPhone (stay centered)
    gsap.to(iphone2Ref.current, {
      x: 0, // Stay centered
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: readyRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Animate the third iPhone (move right)
    gsap.to(iphone3Ref.current, {
      x: 150, // Move farther right as you scroll down
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: readyRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Circular motion for the first circle
    gsap.to(circle1Ref.current, {
      x: (index) => Math.sin(index * 0.1) * 50, // Horizontal motion
      y: (index) => Math.cos(index * 0.1) * 50, // Vertical motion
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: readyRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Circular motion for the second circle
    gsap.to(circle2Ref.current, {
      x: (index) => Math.sin(index * 0.15) * 80, // Larger radius
      y: (index) => Math.cos(index * 0.15) * 80, // Larger radius
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: readyRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Circular motion for the third circle
    gsap.to(circle3Ref.current, {
      x: (index) => Math.sin(index * 0.2) * 100, // Largest radius
      y: (index) => Math.cos(index * 0.2) * 100, // Largest radius
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: readyRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative pt-32">
        <div className="absolute top-10 -left-20 right-0">
            <div className="dimCircle blur-3xl -space-y-20">
                <div className="w-80 h-60 rounded-full bg-red-600"></div>
                <div className="w-80 h-60 rounded-full bg-yellow-200"></div>
            </div>
        </div>
    <div
      ref={readyRef} // Assign ref to the entire Ready section
      className="relative bg-black text-white rounded-sm grid grid-cols-2 py-40 overflow-hidden"
    >
        <StarsBackground imgSrc={'/images/starw.svg'} />
      {/* Text Section */}
      <div className="flex flex-col justify-center space-y-4 ps-28">
        <h1 className="font-bold text-6xl">Ready To Get Started?</h1>
        <p>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
        <button className="bg-white text-black flex justify-center items-center px-4 py-3 space-x-2 rounded-sm w-[27%]">
          <p className="text-base">Download App</p>
          <RiAppleFill size={30} />
        </button>

        {/* Circle 1 */}
        <div
          ref={circle1Ref}
          className="absolute top-96 -left-96 h-[130%] w-[30%] !z-0"
          style={{
            borderRadius: "50%",
            border: "1px solid white",
          }}
        ></div>

        {/* Circle 2 */}
        <div
          ref={circle2Ref}
          className="absolute top-96 -left-80 h-[130%] w-[30%] !z-0"
          style={{
            borderRadius: "50%",
            border: "1px solid white",
          }}
        ></div>

        {/* Circle 3 */}
        <div
          ref={circle3Ref}
          className="absolute top-[350px] -left-60 h-[130%] w-[30%] !z-0"
          style={{
            borderRadius: "50%",
            border: "1px solid white",
          }}
        ></div>
      </div>

      {/* Images Section */}
      <div className="relative">
      <div className="absolute top-0 right-0">
            <div className="dimCircle blur-3xl -space-y-20">
                <div className="w-80 h-60 rounded-full bg-yellow-200"></div>
                <div className="w-80 h-60 rounded-full bg-red-600"></div>
            </div>
        </div>
        <div className="w-full">
          <div className="h-[15vh] mt-20">
          
            {/* Circle 1 */}
             <div
               ref={circle1Ref}
               className="absolute -top-72 -right-24 h-[130%] w-[30%] !z-0"
               style={{
                 borderRadius: "50%",
                 border: "1px solid white",
               }}
             ></div>

             {/* Circle 2 */}
             <div
               ref={circle2Ref}
               className="absolute -top-80 -right-16 h-[130%] w-[30%] !z-0"
               style={{
                 borderRadius: "50%",
                 border: "1px solid white",
               }}
             ></div>

             {/* Circle 3 */}
             <div
               ref={circle3Ref}
               className="absolute -top-96 -right-4 h-[130%] w-[30%] !z-0"
               style={{
                 borderRadius: "50%",
                 border: "1px solid white",
               }}
             ></div>
            {/* First Image */}
            <Image
              ref={iphone1Ref}
              id="iphone1"
              src="/images/1.svg"
              alt="iphone"
              height={50}
              width={50}
              className="w-full h-[170%] absolute -top-0 -right-72 !z-20"
            />

            {/* Second Image */}
            <Image
              ref={iphone2Ref}
              id="iphone2"
              src="/images/2.svg"
              alt="iphone1"
              height={50}
              width={50}
              className="w-full h-[200%] absolute -top-20 -right-80 !z-10"
            />

            {/* Third Image */}
            <Image
              ref={iphone3Ref}
              id="iphone3"
              src="/images/3.svg"
              alt="iphone2"
              height={50}
              width={50}
              className="w-full h-[200%] absolute -top-24 -right-64 !z-1"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Ready;