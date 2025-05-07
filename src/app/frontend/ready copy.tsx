"use client"

import { AppleIcon } from 'lucide-react'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Ready = () => {

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
    <div className='relative bg-black text-white rounded-sm'>
        <div>
            <h1>Ready To Get Started?</h1>
            <p>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
            <button><p>Download</p><AppleIcon /></button>
        </div>
        {/* <div> */}
            <div className='w-full'>
                {/* Images Section */}
                <div className="h-[15vh] mt-20 row-span-2">
                {/* Circle 1 */}
                    <div
                    ref={circle1Ref}
                    className="absolute top-0 left-0 right-0 h-[60%] w-[40%] !z-0"
                    style={{
                        borderRadius: '36% 64% 35% 65% / 34% 68% 32% 66%',
                        border: '1px solid gray'
                    }}
                    ></div>
        
                    {/* Circle 2 */}
                    <div
                    ref={circle2Ref}
                    className="absolute top-10 left-0 right-0 h-[60%] w-[40%] !z-0"
                    style={{
                        borderRadius: '36% 64% 35% 65% / 34% 68% 32% 66%',
                        border: '1px solid gray'
                    }}
                    ></div>
        
                    {/* Circle 3 */}
                    <div
                    ref={circle3Ref}
                    className="absolute top-20 left-0 right-0 h-[60%] w-[40%] !z-0"
                    style={{
                        borderRadius: '36% 64% 35% 65% / 34% 68% 32% 66%',
                        border: '1px solid gray'
                    }}
                    ></div>
                        
                    
                        {/* First Image */}
                        <Image
                        id="iphone1"
                        src="/1.svg"
                        alt="iphone"
                        height={50}
                        width={50}
                        // className="w-full h-[200%] absolute top-0 right-56 opacity-0 !z-20"
                        className="w-full h-[200%] absolute top-0 right-0 opacity-0 !z-20"
                        />
                
                        {/* Second Image */}
                        <Image
                        id="iphone2"
                        src="/2.svg"
                        alt="iphone1"
                        height={50}
                        width={50}
                        // className="w-full h-[200%] absolute top-0 right-20 opacity-0 !z-10"
                        className="w-full h-[200%] absolute top-0 right-0 opacity-0 !z-10"
                        />
                
                        {/* Third Image */}
                        <Image
                        id="iphone3"
                        src="/3.svg"
                        alt="iphone2"
                        height={50}
                        width={50}
                        // className="w-full h-[200%] absolute top-0 right-10 opacity-0 !z-1"
                        className="w-full h-[200%] absolute top-0 right-0 opacity-0 !z-1"
                        />
                </div>
                </div>
        </div>
    // </div>
  )
}

export default Ready