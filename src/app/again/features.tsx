"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ComponentIcon } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const readyRef = useRef<HTMLDivElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const circle3Ref = useRef<HTMLDivElement>(null);
  const iphoneRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    
    // Ensure the Ready section is rendered before setting up animations
    if (!readyRef.current) return;
    
    // Animate the third iPhone (move right)
    gsap.to(iphoneRef.current, {
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

    // Circular motion for the circles (unchanged)
    gsap.to(circle1Ref.current, {
      x: (index) => Math.sin(index * 0.1) * 50,
      y: (index) => Math.cos(index * 0.1) * 50,
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: circle1Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.to(circle2Ref.current, {
      x: (index) => Math.sin(index * 0.15) * 80,
      y: (index) => Math.cos(index * 0.15) * 80,
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: circle2Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.to(circle3Ref.current, {
      x: (index) => Math.sin(index * 0.2) * 100,
      y: (index) => Math.cos(index * 0.2) * 100,
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: circle3Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={readyRef} className="grid grid-cols-2">
      {/* Left Section */}
      <div className="relative">
        <div className="absolute top-28 left-10 right-0">
          <div className="dimCircle blur-3xl -space-y-20">
            <div className="w-80 h-60 rounded-full bg-yellow-200"></div>
            <div className="w-80 h-60 rounded-full bg-red-600"></div>
          </div>
        </div>
        {/* Images Section */}
        <div className="relative h-[80vh] row-span-2">
          {/* Circles */}
          <div
            ref={circle1Ref}
            className="absolute top-16 left-0 right-0 h-[60%] w-[70%] !z-0"
            style={{
              borderRadius: "36% 64% 35% 65% / 34% 68% 32% 66%",
              border: "1px solid black",
            }}
          ></div>
          <div
            ref={circle2Ref}
            className="absolute top-28 left-0 right-0 h-[60%] w-[70%] !z-0"
            style={{
              borderRadius: "36% 64% 35% 65% / 34% 68% 32% 66%",
              border: "1px solid black",
            }}
          ></div>
          <div
            ref={circle3Ref}
            className="absolute top-40 left-0 right-0 h-[60%] w-[70%] !z-0"
            style={{
              borderRadius: "36% 64% 35% 65% / 34% 68% 32% 66%",
              border: "1px solid black",
            }}
          ></div>
                {/* Iphone Image */}
                <Image
                  ref={iphoneRef}
                  id="iphone3"
                  src="/images/iphone3.svg"
                  alt="iphone3"
                  height={50}
                  width={50}
                  // className="w-full h-[200%] absolute -top-24 -right-64 opacity-0 !z-1"
                  className="w-full h-full absolute top-10 right-28 !z-1"
                />
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex flex-col justify-center">
        <div className="absolute top-40 -right-40">
          <div className="dimCircle blur-2xl -space-y-20">
            <div className="w-40 h-40 rounded-full bg-red-600 !z-10"></div>
            <div className="w-40 h-40 rounded-full bg-yellow-200 !z-1"></div>
          </div>
        </div>
        <small className="text-fiftiary">FEATURES</small>
        <h1 className="font-bold text-5xl">Uifry Premium</h1>
        <div className="flex flex-col space-y-4 mt-5">
          {/* Feature Items */}
          <span>
            <p className="flex items-center space-x-2 font-bold text-base">
              <small>
                <ComponentIcon className="text-fiftiary" />
              </small>{" "}
              <p>Budgeting Intervals</p>
            </p>
            <p className="text-lg text-gray-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </span>
          <span>
            <p className="flex items-center space-x-2 font-bold text-base">
              <small>
                <ComponentIcon className="text-fiftiary" />
              </small>{" "}
              <p>Budgeting Intervals</p>
            </p>
            <p className="text-lg text-gray-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </span>
          <span>
            <p className="flex items-center space-x-2 font-bold text-base">
              <small>
                <ComponentIcon className="text-fiftiary" />
              </small>{" "}
              <p>Budgeting Intervals</p>
            </p>
            <p className="text-lg text-gray-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Features;