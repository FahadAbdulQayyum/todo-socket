// "use client";

// import { PlayCircle } from "lucide-react";
// import React, { useEffect, useRef } from "react";
// import RibbonAnimation from "./ribbonAnimation";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const circle1Ref = useRef<HTMLDivElement>(null);
//   const circle2Ref = useRef<HTMLDivElement>(null);
//   const circle3Ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Animate the first image
//     gsap.to("#iphone1", {
//       y: -50,
//       opacity: 1,
//       duration: 1,
//       scrollTrigger: {
//         trigger: "#iphone1",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

//     // Animate the second image
//     gsap.to("#iphone2", {
//       y: -100,
//       rotation: -5, // Slight tilt for fanned effect
//       opacity: 1,
//       duration: 1.5,
//       scrollTrigger: {
//         trigger: "#iphone2",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

//     // Animate the third image
//     gsap.to("#iphone3", {
//       y: -150,
//       rotation: 5, // Opposite tilt for fanned effect
//       opacity: 1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#iphone3",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

//     // Hover animations for circles
//     const circles = [circle1Ref.current, circle2Ref.current, circle3Ref.current];
//     circles.forEach((circle, index) => {
//       if (circle) {
//         const handleMouseEnter = () => {
//           gsap.to(circle, {
//             rotation: 360,
//             x: index * 20 - 20,
//             y: index * 15 - 15,
//             duration: 1,
//             ease: "power2.out",
//           });
//         };

//         const handleMouseLeave = () => {
//           gsap.to(circle, {
//             rotation: 0,
//             x: 0,
//             y: 0,
//             duration: 1,
//             ease: "power2.out",
//           });
//         };

//         circle.addEventListener("mouseenter", handleMouseEnter);
//         circle.addEventListener("mouseleave", handleMouseLeave);

//         return () => {
//           circle.removeEventListener("mouseenter", handleMouseEnter);
//           circle.removeEventListener("mouseleave", handleMouseLeave);
//         };
//       }
//     });

//     return () => {
//       circles.forEach((circle) => {
//         if (circle) {
//           circle.removeEventListener("mouseenter", () => {});
//           circle.removeEventListener("mouseleave", () => {});
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className="container m-auto grid grid-cols-2">
//       {/* Text Section */}
//       <div className="space-y-6">
//         <h1 className="font-bold text-7xl">
//           Make The Best Financial Decisions
//         </h1>
//         <p>
//           Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
//           faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
//         </p>
//         <span className="flex items-center space-x-10">
//           <button className="bg-black text-white px-4 py-2">Get Started</button>
//           <PlayCircle />
//           <p className="font-bold">Watch Video</p>
//         </span>
//       </div>

//       {/* Images Section */}
//       <div className="relative h-[80vh] mt-20 row-span-2">
//         {/* Circle 1 */}
//         <div
//           ref={circle1Ref}
//           className="absolute w-24 h-24 bg-blue-300 rounded-full opacity-50 top-10 right-32 !z-0 hover:scale-105"
//         ></div>

//         {/* Circle 2 */}
//         <div
//           ref={circle2Ref}
//           className="absolute w-32 h-32 bg-purple-300 rounded-full opacity-50 top-20 right-8 !z-0 hover:scale-105"
//         ></div>

//         {/* Circle 3 */}
//         <div
//           ref={circle3Ref}
//           className="absolute w-28 h-28 bg-pink-300 rounded-full opacity-50 top-40 right-20 !z-0 hover:scale-105"
//         ></div>

//         {/* First Image */}
//         <Image
//           id="iphone1"
//           src="/iphone.svg"
//           alt="iphone"
//           height={400}
//           width={200}
//           className="absolute top-10 right-20 opacity-0 !z-10"
//         />

//         {/* Second Image */}
//         <Image
//           id="iphone2"
//           src="/iphone1.svg"
//           alt="iphone1"
//           height={400}
//           width={200}
//           className="absolute top-20 right-10 opacity-0 !z-10"
//           style={{ transform: "rotate(-5deg)" }}
//         />

//         {/* Third Image */}
//         <Image
//           id="iphone3"
//           src="/iphone2.svg"
//           alt="iphone2"
//           height={400}
//           width={200}
//           className="absolute top-30 right-0 opacity-0 !z-10"
//           style={{ transform: "rotate(5deg)" }}
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











"use client";

import {MoveRight, PlayCircle } from "lucide-react";
import React, { useEffect, useRef } from "react";
import RibbonAnimation from "./ribbonAnimation";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const circle1Ref = useRef<HTMLDivElement>(null);
    const circle2Ref = useRef<HTMLDivElement>(null);
    const circle3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the first image
    gsap.to("#iphone1", {
      y: -50, // Move up slightly
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#iphone1",
        start: "top center", // Start animation when the top of the image hits the center of the viewport
        end: "bottom center",
        scrub: true, // Smoothly follow the scroll
      },
    });

    // Animate the second image
    gsap.to("#iphone2", {
      y: -100, // Move up more
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#iphone2",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Animate the third image
    gsap.to("#iphone3", {
      y: -150, // Move up even more
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: "#iphone3",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
        // Hover animations for circles
        const circles = [circle1Ref.current, circle2Ref.current, circle3Ref.current];
        circles.forEach((circle, index) => {
          if (circle) {
            // Define the hover event handler
            const handleMouseEnter = () => {
              gsap.to(circle, {
                rotation: 360,
                x: index * 20 - 20,
                y: index * 15 - 15,
                duration: 1,
                ease: "power2.out",
              });
            };
    
            // Define the hover out event handler
            const handleMouseLeave = () => {
              gsap.to(circle, {
                rotation: 0,
                x: 0,
                y: 0,
                duration: 1,
                ease: "power2.out",
              });
            };
    
            // Add event listeners
            circle.addEventListener("mouseenter", handleMouseEnter);
            circle.addEventListener("mouseleave", handleMouseLeave);
    
            // Cleanup event listeners on unmount
            return () => {
              circle.removeEventListener("mouseenter", handleMouseEnter);
              circle.removeEventListener("mouseleave", handleMouseLeave);
            };
          }
        });
    
        // Cleanup for circles (optional, as inner returns handle cleanup)
        return () => {
          circles.forEach((circle) => {
            if (circle) {
              circle.removeEventListener("mouseenter", () => {});
              circle.removeEventListener("mouseleave", () => {});
            }
          });
        };
  }, []);

  return (
    <div className="container m-auto grid grid-cols-2">
      {/* Text Section */}
      <div className="space-y-6">
        <h1 className="font-bold text-7xl">
          Make The Best Financial Decisions
        </h1>
        <p>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <span className="flex items-center space-x-10">
          <button className="flex items-center space-x-2 bg-black text-white px-4 py-2"><p>Get Started</p><MoveRight size={15} /></button>
          <PlayCircle />
          <p className="font-bold">Watch Video</p>
        </span>
      </div>

      {/* Images Section */}
      <div className="relative h-[80vh] mt-20 row-span-2">
        {/* Circle 1 */}
         <div
           ref={circle1Ref}
        //    className="absolute w-24 h-24 bg-blue-300 rounded-full opacity-50 top-10 right-32 !z-0 hover:scale-105"
        className="absolute top-0 left-10 right-0 h-[50%] w-[80%] !z-0"
        style={{
            borderRadius: '36% 64% 35% 65% / 34% 68% 32% 66%',
            border: '1px solid gray'
        }}
         ></div>

         {/* Circle 2 */}
         <div
           ref={circle2Ref}
        //    className="absolute w-32 h-32 bg-purple-300 rounded-full opacity-50 top-20 right-8 !z-0 hover:scale-105"
        className="absolute top-10 left-10 right-0 h-[50%] w-[80%] !z-0"
        style={{
            // borderRadius: '29% 71% 25% 75% / 30% 76% 24% 70%',
            // borderRadius: '24% 76% 21% 79% / 34% 68% 32% 66% ',
            borderRadius: '36% 64% 35% 65% / 34% 68% 32% 66%',
            // borderRadius: '77% 23% 84% 16% / 67% 30% 70% 33%',
            // borderRadius: '60% 40% 66% 34% / 67% 25% 75% 33% ',
            border: '1px solid gray'
        }}
         ></div>

         {/* Circle 3 */}
         <div
           ref={circle3Ref}
        //    className="absolute w-28 h-28 bg-pink-300 rounded-full opacity-50 top-40 right-20 !z-0 hover:scale-105"
        className="absolute top-20 left-10 right-0 h-[50%] w-[80%] !z-0"
        style={{
            // borderRadius: '29% 71% 25% 75% / 30% 76% 24% 70%',
            // borderRadius: '24% 76% 21% 79% / 34% 68% 32% 66% ',
            borderRadius: '36% 64% 35% 65% / 34% 68% 32% 66%',
            // borderRadius: '77% 23% 84% 16% / 67% 30% 70% 33%',
            // borderRadius: '60% 40% 66% 34% / 67% 25% 75% 33% ',
            border: '1px solid gray'
        }}
         ></div>
        
        {/* First Image */}
        <Image
          id="iphone1"
          src="/iphone.svg"
          alt="iphone"
          height={100}
          width={100}
          className="w-full h-full absolute top-2 -right-16 opacity-0 !z-1"
        />

        {/* Second Image */}
        <Image
          id="iphone2"
          src="/iphone1.svg"
          alt="iphone1"
          height={100}
          width={100}
          className="w-full h-full absolute top-4 right-2 opacity-0 !z-1"
        />

        {/* Third Image */}
        <Image
          id="iphone3"
          src="/iphone2.svg"
          alt="iphone2"
          height={100}
          width={100}
          className="w-full h-full absolute top-0 right-36 opacity-0 !z-1"
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
















// // // "use client";

// // // import { PlayCircle } from "lucide-react";
// // // import React, { useEffect, useRef } from "react";
// // // import RibbonAnimation from "./ribbonAnimation";
// // // import Image from "next/image";
// // // import { gsap } from "gsap";
// // // import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// // // // Register ScrollTrigger plugin
// // // gsap.registerPlugin(ScrollTrigger);

// // // const Hero = () => {
// // //   const circle1Ref = useRef<HTMLDivElement>(null);
// // //   const circle2Ref = useRef<HTMLDivElement>(null);
// // //   const circle3Ref = useRef<HTMLDivElement>(null);

// // //   useEffect(() => {
// // //     // Animate the first image
// // //     gsap.to("#iphone1", {
// // //       y: -50,
// // //       opacity: 1,
// // //       duration: 1,
// // //       scrollTrigger: {
// // //         trigger: "#iphone1",
// // //         start: "top center",
// // //         end: "bottom center",
// // //         scrub: true,
// // //       },
// // //     });

// // //     // Animate the second image
// // //     gsap.to("#iphone2", {
// // //       y: -100,
// // //       opacity: 1,
// // //       duration: 1.5,
// // //       scrollTrigger: {
// // //         trigger: "#iphone2",
// // //         start: "top center",
// // //         end: "bottom center",
// // //         scrub: true,
// // //       },
// // //     });

// // //     // Animate the third image
// // //     gsap.to("#iphone3", {
// // //       y: -150,
// // //       opacity: 1,
// // //       duration: 2,
// // //       scrollTrigger: {
// // //         trigger: "#iphone3",
// // //         start: "top center",
// // //         end: "bottom center",
// // //         scrub: true,
// // //       },
// // //     });

// // //     // Hover animations for circles
// // //     const circles = [circle1Ref.current, circle2Ref.current, circle3Ref.current];
// // //     circles.forEach((circle, index) => {
// // //       if (circle) {
// // //         // Define the hover event handler
// // //         const handleMouseEnter = () => {
// // //           gsap.to(circle, {
// // //             rotation: 360,
// // //             x: index * 20 - 20,
// // //             y: index * 15 - 15,
// // //             duration: 1,
// // //             ease: "power2.out",
// // //           });
// // //         };

// // //         // Define the hover out event handler
// // //         const handleMouseLeave = () => {
// // //           gsap.to(circle, {
// // //             rotation: 0,
// // //             x: 0,
// // //             y: 0,
// // //             duration: 1,
// // //             ease: "power2.out",
// // //           });
// // //         };

// // //         // Add event listeners
// // //         circle.addEventListener("mouseenter", handleMouseEnter);
// // //         circle.addEventListener("mouseleave", handleMouseLeave);

// // //         // Cleanup event listeners on unmount
// // //         return () => {
// // //           circle.removeEventListener("mouseenter", handleMouseEnter);
// // //           circle.removeEventListener("mouseleave", handleMouseLeave);
// // //         };
// // //       }
// // //     });

// // //     // Cleanup for circles (optional, as inner returns handle cleanup)
// // //     return () => {
// // //       circles.forEach((circle) => {
// // //         if (circle) {
// // //           circle.removeEventListener("mouseenter", () => {});
// // //           circle.removeEventListener("mouseleave", () => {});
// // //         }
// // //       });
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="container m-auto grid grid-cols-2">
// // //       {/* Text Section */}
// // //       <div>
// // //         <h1 className="font-bold text-4xl">
// // //           Make The Best Financial Decisions
// // //         </h1>
// // //         <p>
// // //           Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
// // //           faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
// // //         </p>
// // //         <span className="flex items-center space-x-10">
// // //           <button className="bg-black text-white px-4 py-2">Get Started</button>
// // //           <PlayCircle />
// // //           <p className="font-bold">Watch Video</p>
// // //         </span>
// // //       </div>

// // //       {/* Images Section */}
// // //       <div className="relative h-[80vh] mt-20 overflow-hidden">
// // //         {/* Circle 1 */}
// // //         <div
// // //           ref={circle1Ref}
// // //           className="absolute w-24 h-24 bg-blue-300 rounded-full opacity-50 top-10 right-32 z-0"
// // //         ></div>

// // //         {/* Circle 2 */}
// // //         <div
// // //           ref={circle2Ref}
// // //           className="absolute w-32 h-32 bg-purple-300 rounded-full opacity-50 top-20 right-8 z-0"
// // //         ></div>

// // //         {/* Circle 3 */}
// // //         <div
// // //           ref={circle3Ref}
// // //           className="absolute w-28 h-28 bg-pink-300 rounded-full opacity-50 top-40 right-20 z-0"
// // //         ></div>

// // //         {/* First Image */}
// // //         <Image
// // //           id="iphone1"
// // //           src="/iphone.svg"
// // //           alt="iphone"
// // //           height={300}
// // //           width={150}
// // //           className="absolute top-0 right-20 opacity-0 z-10"
// // //         />

// // //         {/* Second Image */}
// // //         <Image
// // //           id="iphone2"
// // //           src="/iphone1.svg"
// // //           alt="iphone1"
// // //           height={300}
// // //           width={150}
// // //           className="absolute top-5 right-10 opacity-0 z-10"
// // //         />

// // //         {/* Third Image */}
// // //         <Image
// // //           id="iphone3"
// // //           src="/iphone2.svg"
// // //           alt="iphone2"
// // //           height={300}
// // //           width={150}
// // //           className="absolute top-15 right-10 opacity-0 z-10"
// // //         />
// // //       </div>

// // //       {/* Ribbon Animation */}
// // //       <div>
// // //         <RibbonAnimation />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Hero;



















// // // // // "use client";

// // // // // import { PlayCircle } from "lucide-react";
// // // // // import React, { useEffect } from "react";
// // // // // import RibbonAnimation from "./ribbonAnimation";
// // // // // import Image from "next/image";
// // // // // import { gsap } from "gsap";
// // // // // import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// // // // // // Register ScrollTrigger plugin
// // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // const Hero = () => {
// // // // //   useEffect(() => {
// // // // //     // Animate the first image
// // // // //     gsap.to("#iphone1", {
// // // // //       y: -20, // Slight upward movement
// // // // //       opacity: 1,
// // // // //       duration: 1,
// // // // //       scrollTrigger: {
// // // // //         trigger: "#iphone1",
// // // // //         start: "top 80%", // Start when image is near viewport
// // // // //         end: "bottom center",
// // // // //         scrub: true, // Smoothly follow the scroll
// // // // //       },
// // // // //     });

// // // // //     // Animate the second image
// // // // //     gsap.to("#iphone2", {
// // // // //       y: -80, // Moderate upward movement to create gap
// // // // //       opacity: 1,
// // // // //       duration: 1.5,
// // // // //       scrollTrigger: {
// // // // //         trigger: "#iphone2",
// // // // //         start: "top 80%",
// // // // //         end: "bottom center",
// // // // //         scrub: true,
// // // // //       },
// // // // //     });

// // // // //     // Animate the third image
// // // // //     gsap.to("#iphone3", {
// // // // //       y: -160, // Larger upward movement for bigger gap
// // // // //       opacity: 1,
// // // // //       duration: 2,
// // // // //       scrollTrigger: {
// // // // //         trigger: "#iphone3",
// // // // //         start: "top 80%",
// // // // //         end: "bottom center",
// // // // //         scrub: true,
// // // // //       },
// // // // //     });
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="container m-auto grid grid-cols-2">
// // // // //       {/* Text Section */}
// // // // //       <div>
// // // // //         <h1 className="font-bold text-4xl">
// // // // //           Make The Best Financial Decisions
// // // // //         </h1>
// // // // //         <p>
// // // // //           Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
// // // // //           faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
// // // // //         </p>
// // // // //         <span className="flex items-center space-x-10">
// // // // //           <button className="bg-black text-white px-4 py-2">Get Started</button>
// // // // //           <PlayCircle />
// // // // //           <p className="font-bold">Watch Video</p>
// // // // //         </span>
// // // // //       </div>

// // // // //       {/* Images Section */}
// // // // //       <div className="relative h-[80vh] overflow-hidden">
// // // // //         {/* First Image */}
// // // // //         <Image
// // // // //           id="iphone1"
// // // // //           src="/iphone.svg"
// // // // //           alt="iphone"
// // // // //           height={300}
// // // // //           width={150}
// // // // //           className="absolute top-20 right-20 opacity-0"
// // // // //         />

// // // // //         {/* Second Image */}
// // // // //         <Image
// // // // //           id="iphone2"
// // // // //           src="/iphone1.svg"
// // // // //           alt="iphone1"
// // // // //           height={300}
// // // // //           width={150}
// // // // //           className="absolute top-24 right-10 opacity-0"
// // // // //         />

// // // // //         {/* Third Image */}
// // // // //         <Image
// // // // //           id="iphone3"
// // // // //           src="/iphone2.svg"
// // // // //           alt="iphone2"
// // // // //           height={300}
// // // // //           width={150}
// // // // //           className="absolute top-28 right-0 opacity-0"
// // // // //         />
// // // // //       </div>

// // // // //       {/* Ribbon Animation */}
// // // // //       <div>
// // // // //         <RibbonAnimation />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Hero;





































// // // // // // "use client"

// // // // // // import { PlayCircle } from 'lucide-react'
// // // // // // import React from 'react'
// // // // // // import RibbonAnimation from './ribbonAnimation'
// // // // // // import Image from 'next/image'

// // // // // // const Hero = () => {
// // // // // //   return (
// // // // // //     <div className='container m-auto grid grid-cols-2'>
// // // // // //         <div className=''>
// // // // // //             <h1 className='font-bold text-4xl'>Make The Best Financial Decisions</h1>
// // // // // //             <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
// // // // // //             <span className='flex items-center space-x-10'>
// // // // // //                 <button className='bg-black text-white px-4 py-2'>Get Started</button>
// // // // // //                 {/* <button className='border-black border-2 rounded-full text-black px-4 py-2'><PlayCircle/></button> */}
// // // // // //                 <PlayCircle/>
// // // // // //                 <p className='font-bold'>Watch Video</p>
// // // // // //             </span>
// // // // // //         </div>
// // // // // //         <div className='row-span-2'>
// // // // // //             <Image 
// // // // // //                 src={"/iphone.svg"}
// // // // // //                 alt="iphone"
// // // // // //                 height={100}
// // // // // //                 width={100}
// // // // // //                 className='w-full h-full absolute top-0 right-20'
// // // // // //             />
// // // // // //             <Image 
// // // // // //                 src={"/iphone1.svg"}
// // // // // //                 alt="iphone1"
// // // // // //                 height={100}
// // // // // //                 width={100}
// // // // // //                 className='w-full h-full absolute top-5 right-10'
// // // // // //             />
// // // // // //             <Image 
// // // // // //                 src={"/iphone2.svg"}
// // // // // //                 alt="iphone2"
// // // // // //                 height={100}
// // // // // //                 width={100}
// // // // // //                 className='w-full h-full absolute top-15 right-10'
// // // // // //             />
// // // // // //         </div>
// // // // // //         <div className=''>
// // // // // //             <RibbonAnimation />
// // // // // //         </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default Hero