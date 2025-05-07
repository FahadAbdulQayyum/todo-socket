"use client"

import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Features = () => {

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
                rotation: 0,
                // x: index * 20 - 20,
                // y: index * 15 - 15,
                x: index * 20,
                y: index * 15,
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
    <div className='grid grid-cols-2'>
      <div className=''>
              {/* Images Section */}
              <div className="relative h-[80vh] mt-20 row-span-2">
                {/* Circle 1 */}
                 <div
                   ref={circle1Ref}
                //    className="absolute w-24 h-24 bg-blue-300 rounded-full opacity-50 top-10 right-32 !z-0 hover:scale-105"
                // className="absolute top-0 left-0 right-0 h-[50%] !z-0"
                className="absolute top-0 left-0 right-0 h-[60%] w-[70%] !z-0"
                style={{
                    borderRadius: '36% 64% 35% 65% / 34% 68% 32% 66%',
                    border: '1px solid gray'
                }}
                 ></div>
        
                 {/* Circle 2 */}
                 <div
                   ref={circle2Ref}
                //    className="absolute w-32 h-32 bg-purple-300 rounded-full opacity-50 top-20 right-8 !z-0 hover:scale-105"
                // className="absolute top-10 left-0 right-0 h-[50%] !z-0"
                className="absolute top-10 left-0 right-0 h-[60%] w-[70%] !z-0"
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
                // className="absolute top-20 left-0 right-0 h-[50%] !z-0"
                // className="absolute top-20 left-0 right-0 h-[50%] w-[50%] !z-0"
                className="absolute top-20 left-0 right-0 h-[60%] w-[70%] !z-0"
                style={{
                    // borderRadius: '29% 71% 25% 75% / 30% 76% 24% 70%',
                    // borderRadius: '24% 76% 21% 79% / 34% 68% 32% 66% ',
                    borderRadius: '36% 64% 35% 65% / 34% 68% 32% 66%',
                    // borderRadius: '77% 23% 84% 16% / 67% 30% 70% 33%',
                    // borderRadius: '60% 40% 66% 34% / 67% 25% 75% 33% ',
                    border: '1px solid gray'
                }}
                 ></div>
                        
                {/* Third Image */}
                <Image
                  id="iphone3"
                  src="/iphone3.svg"
                  alt="iphone2"
                  height={100}
                  width={100}
                  className="w-full h-full absolute top-24 right-16 opacity-0 !z-1"
                />
              </div>
      </div>
      <div className='bg-pink-400'>
        <small>FEATURES</small>
        <h1 className="font-bold text-5xl">Uifry Premium</h1>
        <div className='flex flex-col space-y-4 mt-5'>
          <span>
            <p className="font-bold text-base">icon - Budgeting Intervals</p>
            <small>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</small>
          </span>
          <span>
            <p className="font-bold text-base">icon - Budgeting Intervals</p>
            <small>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</small>
          </span>
          <span>
            <p className="font-bold text-base">icon - Budgeting Intervals</p>
            <small>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</small>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Features