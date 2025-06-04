"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { BouncingWordsProps, BouncingRef } from "../types/componentTypes/bouncingWordProps";

const BouncingWords: React.FC<BouncingWordsProps> = ({ word1, word2 }) => {
    const word1Ref: BouncingRef = useRef(null);
    const word2Ref: BouncingRef = useRef(null);
    const lineRef: BouncingRef = useRef(null);

    useEffect(() => {
        // Animate the center line appearing
        gsap.fromTo(lineRef.current, 
            { height: 0 }, 
            { height: 2, duration: 1, ease: "power2.inOut" }
        );

        // Timeline for bouncing words
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

        tl.to(word1Ref.current, {
            x: 100,  // Move right
            scaleX: 1.2,
            scaleY: 0.8,
            duration: 0.5,
            ease: "power2.in",
        })
        .to(word1Ref.current, {
            x: 0,  // Move back
            scaleX: 0.8,
            scaleY: 1.2,
            duration: 0.4,
            ease: "bounce.out",
        })
        .to(word1Ref.current, {
            scaleX: 1,
            scaleY: 1,
            duration: 0.2,
        });

        tl.to(word2Ref.current, {
            x: -100,  // Move left
            scaleX: 1.2,
            scaleY: 0.8,
            duration: 0.5,
            ease: "power2.in",
        }, "-=1") // Start before the first word finishes
        .to(word2Ref.current, {
            x: 0,  // Move back
            scaleX: 0.8,
            scaleY: 1.2,
            duration: 0.5,
            ease: "bounce.out",
        })
        .to(word2Ref.current, {
            scaleX: 1,
            scaleY: 1,
            duration: 0.2,
        });

    }, []);

    return (
      
            <div className="relative flex items-center">
                {/* Word 1 */}
                <div
                    ref={word1Ref}
                    className="text-6xl text-yellow-400 font-bold mr-4"
                >
                    {word1}
                </div>

                {/* Line in the center */}
                <div 
                    ref={lineRef} 
                    className="h-1 bg-white absolute w-[250px]"
                ></div>

                {/* Word 2 */}
                <div
                    ref={word2Ref}
                    className="text-6xl text-yellow-400 font-bold ml-4"
                >
                    {word2}
                </div>
            </div>
       
    );
};

export default BouncingWords;
