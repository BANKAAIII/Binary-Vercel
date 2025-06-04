"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import titleProp from "../types/componentTypes/titleProp";



const Title: React.FC<titleProp> = ({ label }) => {
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (titleRef.current) {
            const letters = titleRef.current.querySelectorAll("span");

            gsap.fromTo(
                letters,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
            );
        }
    }, []);

    return (
        <div className="text-8xl text-yellow-400 mt-10 pt-40 mb-10 ml-5 mr-5 font-bold italic">
            <div ref={titleRef}>
                {label.split("").map((letter, index) => (
                    <span key={index} className="inline-block">{letter}</span>
                ))}
            </div>
        </div>
    );
};

export default Title;
