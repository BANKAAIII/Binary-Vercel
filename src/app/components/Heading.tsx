"use client"
import React from "react";
import headingProps from "../types/componentTypes/headingProps";
 export function Heading  ({Heading,SubHeading}: headingProps)   {
    return(
        <>
        <div className="font-bold text-yellow-400 text-4xl pt-6">
            {Heading}
        </div>
        <div className="text-yellow-600 text-md pt-1 px-4 pb-4">
            {SubHeading}
        </div>
        </>
    )
}
