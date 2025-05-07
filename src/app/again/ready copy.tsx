"use client";

import { RiAppleFill } from "react-icons/ri";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Ready = () => {
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const circle3Ref = useRef<HTMLDivElement>(null);
  const iphone1Ref = useRef<HTMLImageElement>(null);
  const iphone2Ref = useRef<HTMLImageElement>(null);
  const iphone3Ref = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     // Animate the first iPhone (move left)
//     gsap.to(iphone1Ref.current, {
//       x: -150, // Move farther left as you scroll down
//       opacity: 1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#iphone1",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });
//     // Animate the first iPhone (move left)
//     gsap.to(iphone1Ref.current, {
//       x: -350, // Move farther left as you scroll down
//       opacity: 1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#iphone1",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

//     // Animate the second iPhone (stay centered)
//     gsap.to(iphone2Ref.current, {
//       x: 0, // Stay centered
//       opacity: 1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#iphone2",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

//     // Animate the third iPhone (move right)
//     gsap.to(iphone3Ref.current, {
//       x: 150, // Move farther right as you scroll down
//       opacity: 1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#iphone3",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

//     // Circular motion for the first circle
//     gsap.to(circle1Ref.current, {
//       x: (index) => Math.sin(index * 0.1) * 50, // Horizontal motion
//       y: (index) => Math.cos(index * 0.1) * 50, // Vertical motion
//       duration: 2,
//       ease: "none",
//       scrollTrigger: {
//         trigger: circle1Ref.current,
//         start: "top center",
//         end: "bottom bottom",
//         scrub: true,
//       },
//     });

//     // Circular motion for the second circle
//     gsap.to(circle2Ref.current, {
//       x: (index) => Math.sin(index * 0.15) * 80, // Larger radius
//       y: (index) => Math.cos(index * 0.15) * 80, // Larger radius
//       duration: 2,
//       ease: "none",
//       scrollTrigger: {
//         trigger: circle2Ref.current,
//         start: "top center",
//         end: "bottom bottom",
//         scrub: true,
//       },
//     });

//     // Circular motion for the third circle
//     gsap.to(circle3Ref.current, {
//       x: (index) => Math.sin(index * 0.2) * 100, // Largest radius
//       y: (index) => Math.cos(index * 0.2) * 100, // Largest radius
//       duration: 2,
//       ease: "none",
//       scrollTrigger: {
//         trigger: circle3Ref.current,
//         start: "top center",
//         end: "bottom bottom",
//         scrub: true,
//       },
//     });

//     // Hover animations for circles
//     const circles = [circle1Ref.current, circle2Ref.current, circle3Ref.current];
//     circles.forEach((circle, index) => {
//       if (circle) {
//         const handleMouseEnter = () => {
//           gsap.to(circle, {
//             scale: 1.1, // Slightly enlarge on hover
//             duration: 0.5,
//             ease: "power2.out",
//           });
//         };

//         const handleMouseLeave = () => {
//           gsap.to(circle, {
//             scale: 1, // Reset scale
//             duration: 0.5,
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
//   }, []);

  useEffect(() => {
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
    <div className="relative bg-black text-white rounded-sm grid grid-cols-2 py-40 overflow-hidden">
      {/* Text Section */}
      <div className="flex flex-col justify-center space-y-4 ps-10">
        <h1 className="font-bold text-6xl">Ready To Get Started?</h1>
        <p>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
        <button className="bg-white text-black flex justify-center items-center p-2 space-x-2 rounded-sm w-[20%]">
          <p>Download App</p>
          <RiAppleFill size={25} />
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
        <div className="w-full">
          <div className="h-[15vh] mt-20">
            {/* Circle 1 */}
            <div
              ref={circle1Ref}
              className="absolute -top-56 -right-24 h-[130%] w-[30%] !z-0"
              style={{
                borderRadius: "50%",
                border: "1px solid white",
              }}
            ></div>

            {/* Circle 2 */}
            <div
              ref={circle2Ref}
              className="absolute -top-56 -right-16 h-[130%] w-[30%] !z-0"
              style={{
                borderRadius: "50%",
                border: "1px solid white",
              }}
            ></div>

            {/* Circle 3 */}
            <div
              ref={circle3Ref}
              className="absolute -top-56 -right-4 h-[130%] w-[30%] !z-0"
              style={{
                borderRadius: "50%",
                border: "1px solid white",
              }}
            ></div>

            {/* First Image */}
            <Image
              ref={iphone1Ref}
              id="iphone1"
              src="/1.svg"
              alt="iphone"
              height={50}
              width={50}
              className="w-full h-[170%] absolute -top-5 -right-24 opacity-0 !z-20"
            />

            {/* Second Image */}
            <Image
              ref={iphone2Ref}
              id="iphone2"
              src="/2.svg"
              alt="iphone1"
              height={50}
              width={50}
              className="w-full h-[200%] absolute -top-10 -right-72 opacity-0 !z-10"
            />

            {/* Third Image */}
            <Image
              ref={iphone3Ref}
              id="iphone3"
              src="/3.svg"
              alt="iphone2"
              height={50}
              width={50}
              className="w-full h-[200%] absolute top-0 -right-96 opacity-0 !z-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
























// "use client";

// import { RiAppleFill } from "react-icons/ri";
// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const Ready = () => {
//   const circle1Ref = useRef<HTMLDivElement>(null);
//   const circle2Ref = useRef<HTMLDivElement>(null);
//   const circle3Ref = useRef<HTMLDivElement>(null);
//   const iphone1Ref = useRef<HTMLImageElement>(null);
//   const iphone2Ref = useRef<HTMLImageElement>(null);
//   const iphone3Ref = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     // Animate the first iPhone (move left)
//     gsap.to(iphone1Ref.current, {
//       x: -150, // Move farther left as you scroll down
//       opacity: 1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#iphone1",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

//     // Animate the second iPhone (stay centered)
//     gsap.to(iphone2Ref.current, {
//       x: 0, // Stay centered
//       opacity: 1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#iphone2",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

//     // Animate the third iPhone (move right)
//     gsap.to(iphone3Ref.current, {
//       x: 150, // Move farther right as you scroll down
//       opacity: 1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#iphone3",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

//     // Circular motion for the first circle
//     gsap.to(circle1Ref.current, {
//       x: (index) => Math.sin(index * 0.1) * 50, // Horizontal motion
//       y: (index) => Math.cos(index * 0.1) * 50, // Vertical motion
//       duration: 2,
//       ease: "none",
//       scrollTrigger: {
//         trigger: circle1Ref.current,
//         start: "top center",
//         end: "bottom bottom",
//         scrub: true,
//       },
//     });

//     // Circular motion for the second circle
//     gsap.to(circle2Ref.current, {
//       x: (index) => Math.sin(index * 0.15) * 80, // Larger radius
//       y: (index) => Math.cos(index * 0.15) * 80, // Larger radius
//       duration: 2,
//       ease: "none",
//       scrollTrigger: {
//         trigger: circle2Ref.current,
//         start: "top center",
//         end: "bottom bottom",
//         scrub: true,
//       },
//     });

//     // Circular motion for the third circle
//     gsap.to(circle3Ref.current, {
//       x: (index) => Math.sin(index * 0.2) * 100, // Largest radius
//       y: (index) => Math.cos(index * 0.2) * 100, // Largest radius
//       duration: 2,
//       ease: "none",
//       scrollTrigger: {
//         trigger: circle3Ref.current,
//         start: "top center",
//         end: "bottom bottom",
//         scrub: true,
//       },
//     });

//     // Hover animations for circles
//     const circles = [circle1Ref.current, circle2Ref.current, circle3Ref.current];
//     circles.forEach((circle, index) => {
//       if (circle) {
//         const handleMouseEnter = () => {
//           gsap.to(circle, {
//             scale: 1.1, // Slightly enlarge on hover
//             duration: 0.5,
//             ease: "power2.out",
//           });
//         };

//         const handleMouseLeave = () => {
//           gsap.to(circle, {
//             scale: 1, // Reset scale
//             duration: 0.5,
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
//   }, []);

//   return (
//     <div className="relative bg-black text-white rounded-sm grid grid-cols-2 py-40 overflow-hidden">
//       {/* Text Section */}
//       <div className="flex flex-col justify-center space-y-4 ps-10">
//         <h1 className="font-bold text-6xl">Ready To Get Started?</h1>
//         <p>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
//         <button className="bg-white text-black flex justify-center items-center p-2 space-x-2 rounded-sm w-[20%]">
//           <p>Download App</p>
//           <RiAppleFill size={25} />
//         </button>

//         {/* Circle 1 */}
//         <div
//           ref={circle1Ref}
//           className="absolute top-96 -left-96 h-[130%] w-[30%] !z-0"
//           style={{
//             borderRadius: "50%",
//             border: "1px solid white",
//           }}
//         ></div>

//         {/* Circle 2 */}
//         <div
//           ref={circle2Ref}
//           className="absolute top-96 -left-80 h-[130%] w-[30%] !z-0"
//           style={{
//             borderRadius: "50%",
//             border: "1px solid white",
//           }}
//         ></div>

//         {/* Circle 3 */}
//         <div
//           ref={circle3Ref}
//           className="absolute top-[350px] -left-60 h-[130%] w-[30%] !z-0"
//           style={{
//             borderRadius: "50%",
//             border: "1px solid white",
//           }}
//         ></div>
//       </div>

//       {/* Images Section */}
//       <div className="relative">
//         <div className="w-full">
//           <div className="h-[15vh] mt-20">
//             {/* Circle 1 */}
//             <div
//               ref={circle1Ref}
//               className="absolute -top-56 -right-24 h-[130%] w-[30%] !z-0"
//               style={{
//                 borderRadius: "50%",
//                 border: "1px solid white",
//               }}
//             ></div>

//             {/* Circle 2 */}
//             <div
//               ref={circle2Ref}
//               className="absolute -top-56 -right-16 h-[130%] w-[30%] !z-0"
//               style={{
//                 borderRadius: "50%",
//                 border: "1px solid white",
//               }}
//             ></div>

//             {/* Circle 3 */}
//             <div
//               ref={circle3Ref}
//               className="absolute -top-56 -right-4 h-[130%] w-[30%] !z-0"
//               style={{
//                 borderRadius: "50%",
//                 border: "1px solid white",
//               }}
//             ></div>

//             {/* First Image */}
//             <Image
//               ref={iphone1Ref}
//               id="iphone1"
//               src="/1.svg"
//               alt="iphone"
//               height={50}
//               width={50}
//               className="w-full h-[170%] absolute -top-5 -right-24 opacity-0 !z-20"
//             />

//             {/* Second Image */}
//             <Image
//               ref={iphone2Ref}
//               id="iphone2"
//               src="/2.svg"
//               alt="iphone1"
//               height={50}
//               width={50}
//               className="w-full h-[200%] absolute -top-10 -right-72 opacity-0 !z-10"
//             />

//             {/* Third Image */}
//             <Image
//               ref={iphone3Ref}
//               id="iphone3"
//               src="/3.svg"
//               alt="iphone2"
//               height={50}
//               width={50}
//               className="w-full h-[200%] absolute top-0 -right-96 opacity-0 !z-1"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ready;



















// // "use client";

// // import { RiAppleFill } from "react-icons/ri";
// // import Image from "next/image";
// // import React, { useEffect, useRef } from "react";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// // // Register ScrollTrigger plugin
// // gsap.registerPlugin(ScrollTrigger);

// // const Ready = () => {
// //   const circle1Ref = useRef<HTMLDivElement>(null);
// //   const circle2Ref = useRef<HTMLDivElement>(null);
// //   const circle3Ref = useRef<HTMLDivElement>(null);
// //   const iphone1Ref = useRef<HTMLImageElement>(null);
// //   const iphone2Ref = useRef<HTMLImageElement>(null);
// //   const iphone3Ref = useRef<HTMLImageElement>(null);

// //   useEffect(() => {
// //     // Animate the first iPhone
// //     gsap.to(iphone1Ref.current, {
// //       x: -100, // Move left as you scroll down
// //       opacity: 1,
// //       duration: 1,
// //       scrollTrigger: {
// //         trigger: "#iphone1",
// //         start: "top center",
// //         end: "bottom center",
// //         scrub: true,
// //       },
// //     });

// //     // Animate the second iPhone
// //     gsap.to(iphone2Ref.current, {
// //       x: 0, // Stay centered
// //       opacity: 1,
// //       duration: 1.5,
// //       scrollTrigger: {
// //         trigger: "#iphone2",
// //         start: "top center",
// //         end: "bottom center",
// //         scrub: true,
// //       },
// //     });

// //     // Animate the third iPhone
// //     gsap.to(iphone3Ref.current, {
// //       x: 100, // Move right as you scroll down
// //       opacity: 1,
// //       duration: 2,
// //       scrollTrigger: {
// //         trigger: "#iphone3",
// //         start: "top center",
// //         end: "bottom center",
// //         scrub: true,
// //       },
// //     });

// //     // Circular motion for the first circle
// //     gsap.to(circle1Ref.current, {
// //       x: (index) => Math.sin(index * 0.1) * 50, // Horizontal motion
// //       y: (index) => Math.cos(index * 0.1) * 50, // Vertical motion
// //       duration: 2,
// //       ease: "none",
// //       scrollTrigger: {
// //         trigger: circle1Ref.current,
// //         start: "top center",
// //         end: "bottom bottom",
// //         scrub: true,
// //       },
// //     });

// //     // Circular motion for the second circle
// //     gsap.to(circle2Ref.current, {
// //       x: (index) => Math.sin(index * 0.15) * 80, // Larger radius
// //       y: (index) => Math.cos(index * 0.15) * 80, // Larger radius
// //       duration: 2,
// //       ease: "none",
// //       scrollTrigger: {
// //         trigger: circle2Ref.current,
// //         start: "top center",
// //         end: "bottom bottom",
// //         scrub: true,
// //       },
// //     });

// //     // Circular motion for the third circle
// //     gsap.to(circle3Ref.current, {
// //       x: (index) => Math.sin(index * 0.2) * 100, // Largest radius
// //       y: (index) => Math.cos(index * 0.2) * 100, // Largest radius
// //       duration: 2,
// //       ease: "none",
// //       scrollTrigger: {
// //         trigger: circle3Ref.current,
// //         start: "top center",
// //         end: "bottom bottom",
// //         scrub: true,
// //       },
// //     });

// //     // Hover animations for circles
// //     const circles = [circle1Ref.current, circle2Ref.current, circle3Ref.current];
// //     circles.forEach((circle, index) => {
// //       if (circle) {
// //         const handleMouseEnter = () => {
// //           gsap.to(circle, {
// //             scale: 1.1, // Slightly enlarge on hover
// //             duration: 0.5,
// //             ease: "power2.out",
// //           });
// //         };

// //         const handleMouseLeave = () => {
// //           gsap.to(circle, {
// //             scale: 1, // Reset scale
// //             duration: 0.5,
// //             ease: "power2.out",
// //           });
// //         };

// //         circle.addEventListener("mouseenter", handleMouseEnter);
// //         circle.addEventListener("mouseleave", handleMouseLeave);

// //         return () => {
// //           circle.removeEventListener("mouseenter", handleMouseEnter);
// //           circle.removeEventListener("mouseleave", handleMouseLeave);
// //         };
// //       }
// //     });
// //   }, []);

// //   return (
// //     <div className="relative bg-black text-white rounded-sm grid grid-cols-2 py-40 overflow-hidden">
// //       {/* Text Section */}
// //       <div className="flex flex-col justify-center space-y-4 ps-10">
// //         <h1 className="font-bold text-6xl">Ready To Get Started?</h1>
// //         <p>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
// //         <button className="bg-white text-black flex justify-center items-center p-2 space-x-2 rounded-sm w-[20%]">
// //           <p>Download App</p>
// //           <RiAppleFill size={25} />
// //         </button>

// //         {/* Circle 1 */}
// //         <div
// //           ref={circle1Ref}
// //           className="absolute top-96 -left-96 h-[130%] w-[30%] !z-0"
// //           style={{
// //             borderRadius: "50%",
// //             border: "1px solid white",
// //           }}
// //         ></div>

// //         {/* Circle 2 */}
// //         <div
// //           ref={circle2Ref}
// //           className="absolute top-96 -left-80 h-[130%] w-[30%] !z-0"
// //           style={{
// //             borderRadius: "50%",
// //             border: "1px solid white",
// //           }}
// //         ></div>

// //         {/* Circle 3 */}
// //         <div
// //           ref={circle3Ref}
// //           className="absolute top-[350px] -left-60 h-[130%] w-[30%] !z-0"
// //           style={{
// //             borderRadius: "50%",
// //             border: "1px solid white",
// //           }}
// //         ></div>
// //       </div>

// //       {/* Images Section */}
// //       <div className="relative">
// //         <div className="w-full">
// //           <div className="h-[15vh] mt-20">
// //             {/* Circle 1 */}
// //             <div
// //               ref={circle1Ref}
// //               className="absolute -top-56 -right-24 h-[130%] w-[30%] !z-0"
// //               style={{
// //                 borderRadius: "50%",
// //                 border: "1px solid white",
// //               }}
// //             ></div>

// //             {/* Circle 2 */}
// //             <div
// //               ref={circle2Ref}
// //               className="absolute -top-56 -right-16 h-[130%] w-[30%] !z-0"
// //               style={{
// //                 borderRadius: "50%",
// //                 border: "1px solid white",
// //               }}
// //             ></div>

// //             {/* Circle 3 */}
// //             <div
// //               ref={circle3Ref}
// //               className="absolute -top-56 -right-4 h-[130%] w-[30%] !z-0"
// //               style={{
// //                 borderRadius: "50%",
// //                 border: "1px solid white",
// //               }}
// //             ></div>

// //             {/* First Image */}
// //             <Image
// //               ref={iphone1Ref}
// //               id="iphone1"
// //               src="/1.svg"
// //               alt="iphone"
// //               height={50}
// //               width={50}
// //               className="w-full h-[170%] absolute -top-5 -right-24 opacity-0 !z-20"
// //             />

// //             {/* Second Image */}
// //             <Image
// //               ref={iphone2Ref}
// //               id="iphone2"
// //               src="/2.svg"
// //               alt="iphone1"
// //               height={50}
// //               width={50}
// //               className="w-full h-[200%] absolute -top-10 -right-72 opacity-0 !z-10"
// //             />

// //             {/* Third Image */}
// //             <Image
// //               ref={iphone3Ref}
// //               id="iphone3"
// //               src="/3.svg"
// //               alt="iphone2"
// //               height={50}
// //               width={50}
// //               className="w-full h-[200%] absolute top-0 -right-96 opacity-0 !z-1"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Ready;