"use client";

import { MoveRight, PlayCircle } from "lucide-react";
import React, { useEffect, useRef } from "react";
import RibbonAnimation from "./ribbonAnimation";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const readyRef = useRef<HTMLDivElement>(null); // Ref for the entire Ready section
  const iphone1Ref = useRef<HTMLImageElement>(null);
  const iphone2Ref = useRef<HTMLImageElement>(null);
  const iphone3Ref = useRef<HTMLImageElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const circle3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    // Ensure the Ready section is rendered before setting up animations
    if (!readyRef.current) return;
    
    // Animate the first iPhone
    gsap.to(iphone1Ref.current, {
      x: -100, // Move left as you scroll down
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#iphone1",
        start: "top center",
        end: "bottom center",
        scrub: true, // Smoothly follow the scroll
      },
    });

    // Animate the second iPhone
    gsap.to(iphone2Ref.current, {
      x: 0, // Stay centered
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#iphone2",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Animate the third iPhone
    gsap.to(iphone3Ref.current, {
      x: 100, // Move right as you scroll down
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: "#iphone3",
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
        trigger: circle1Ref.current,
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
        trigger: circle2Ref.current,
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
        trigger: circle3Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
    ref={readyRef} // Assign ref to the entire Ready section
    // className="container m-auto grid grid-cols-2">
    className="container grid grid-cols-2">
      {/* Text Section */}
      <div className="absolute top-28 left-96">
            <div className="dimCircle blur-2xl -space-y-20 -z-10">
                <div className="w-60 h-52 rounded-full bg-red-600"></div>
                <div className="w-60 h-32 rounded-full bg-yellow-200"></div>
            </div>
        </div>
      <div className="space-y-6 z-10">
        <h1 className="font-bold text-7xl">Make The Best Financial Decisions</h1>
        <p className="text-gray-500">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <span className="flex items-center space-x-10">
          <button className="flex items-center space-x-2 bg-black text-white p-4 !font-light rounded-md">
            <p>Get Started</p>
            <MoveRight size={15} />
          </button>
          <span className="flex space-x-4">
            <PlayCircle />
            {/* <p className="font-bold">Watch Video</p> */}
            <p className="">Watch Video</p>
          </span>
        </span>
      </div>

      {/* Images Section */}
      <div className="relative h-[80vh] mt-20 row-span-2">
      <div className="absolute top-20 left-48">
            <div className="dimCircle blur-3xl -space-y-20">
                <div className="w-80 h-60 rounded-full "></div>
                <div className="w-80 h-60 rounded-full bg-red-600"></div>
            </div>
        </div>
        {/* Circle 1 */}
        <div
          ref={circle1Ref}
          className="absolute -top-24 left-10 right-0 h-[50%] w-[80%] !z-0"
          style={{
            borderRadius: "36% 64% 35% 65% / 34% 68% 32% 66%",
            border: "1px solid gray",
            transformStyle: "preserve-3d",
          }}
        ></div>

        {/* Circle 2 */}
        <div
          ref={circle2Ref}
          className="absolute -top-48 left-10 right-0 h-[50%] w-[80%] !z-0"
          style={{
            borderRadius: "36% 64% 35% 65% / 34% 68% 32% 66%",
            border: "1px solid gray",
            transformStyle: "preserve-3d",
          }}
        ></div>

        {/* Circle 3 */}
        <div
          ref={circle3Ref}
          className="absolute -top-64 left-10 right-0 h-[50%] w-[80%] !z-0"
          style={{
            borderRadius: "36% 64% 35% 65% / 34% 68% 32% 66%",
            border: "1px solid gray",
            transformStyle: "preserve-3d",
          }}
        ></div>

        {/* First Image */}
        <Image
          ref={iphone1Ref}
          id="iphone1"
          src="/images/iphone.svg"
          alt="iphone"
          height={100}
          width={100}
        //   className="w-full h-full absolute top-2 -right-16 opacity-0 !z-1"
          className="w-full h-full absolute -top-32 left-28 opacity-0 !z-1"
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Second Image */}
        <Image
          ref={iphone2Ref}
          id="iphone2"
          src="/images/iphone1.svg"
          alt="iphone1"
          height={100}
          width={100}
        //   className="w-full h-full absolute top-4 right-2 opacity-0 !z-1"
          className="w-full h-full absolute -top-40 right-2 opacity-0 !z-1"
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Third Image */}
        <Image
          ref={iphone3Ref}
          id="iphone3"
          src="/images/iphone2.svg"
          alt="iphone2"
          height={100}
          width={100}
        //   className="w-full h-full absolute top-0 -right-36 opacity-0 !z-1"
          className="w-full h-full absolute -top-60 -left-60 opacity-0 !z-1"
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>

      {/* Ribbon Animation */}
      <div className="">
        <RibbonAnimation />
      </div>
    </div>
  );
};

export default Hero;



















// "use client";

// import { MoveRight, PlayCircle } from "lucide-react";
// import React, { useEffect, useRef } from "react";
// import RibbonAnimation from "../frontend/ribbonAnimation";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const iphone1Ref = useRef<HTMLImageElement>(null);
//   const iphone2Ref = useRef<HTMLImageElement>(null);
//   const iphone3Ref = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     // Animate the first iPhone
//     gsap.to(iphone1Ref.current, {
//       x: -100, // Move left as you scroll down
//       opacity: 1,
//       duration: 1,
//       scrollTrigger: {
//         trigger: "#iphone1",
//         start: "top center",
//         end: "bottom center",
//         scrub: true, // Smoothly follow the scroll
//       },
//     });

//     // Animate the second iPhone
//     gsap.to(iphone2Ref.current, {
//       x: 0, // Stay centered
//       opacity: 1,
//       duration: 1.5,
//       scrollTrigger: {
//         trigger: "#iphone2",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

//     // Animate the third iPhone
//     gsap.to(iphone3Ref.current, {
//       x: 100, // Move right as you scroll down
//       opacity: 1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#iphone3",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <div className="container m-auto grid grid-cols-2">
//       {/* Text Section */}
//       <div className="space-y-6">
//         <h1 className="font-bold text-7xl">Make The Best Financial Decisions</h1>
//         <p>
//           Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
//         </p>
//         <span className="flex items-center space-x-10">
//           <button className="flex items-center space-x-2 bg-black text-white px-4 py-2">
//             <p>Get Started</p>
//             <MoveRight size={15} />
//           </button>
//           <PlayCircle />
//           <p className="font-bold">Watch Video</p>
//         </span>
//       </div>

//       {/* Images Section */}
//       <div className="relative h-[80vh] mt-20 row-span-2">
//         {/* First Image */}
//         <Image
//           ref={iphone1Ref}
//           id="iphone1"
//           src="/iphone.svg"
//           alt="iphone"
//           height={100}
//           width={100}
//           className="w-full h-full absolute top-2 -right-16 opacity-0 !z-1"
//           style={{ transformStyle: "preserve-3d" }}
//         />

//         {/* Second Image */}
//         <Image
//           ref={iphone2Ref}
//           id="iphone2"
//           src="/iphone1.svg"
//           alt="iphone1"
//           height={100}
//           width={100}
//           className="w-full h-full absolute top-4 right-2 opacity-0 !z-1"
//           style={{ transformStyle: "preserve-3d" }}
//         />

//         {/* Third Image */}
//         <Image
//           ref={iphone3Ref}
//           id="iphone3"
//           src="/iphone2.svg"
//           alt="iphone2"
//           height={100}
//           width={100}
//           className="w-full h-full absolute top-0 right-36 opacity-0 !z-1"
//           style={{ transformStyle: "preserve-3d" }}
//         />
//       </div>

//       {/* Ribbon Animation */}
//       <div className="">
//         <RibbonAnimation />
//       </div>
//     </div>
//   );
// };

// export default Hero;