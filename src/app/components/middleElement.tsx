import React from "react";

import middleEleProps from "../types/componentTypes/middleElement";
const MiddleElement = ({ hovered , label }:middleEleProps) => {
    return (
        <div className={`flex justify-center items-center w-20 h-20 border-4 bg-gradient-to-t from-amber-400 to-amber-700  transition-colors duration-300 ${hovered ? 'border-green-500' : 'border-[#1A1A1D]'}`}>
           {label}
        </div>
    );
};

export default MiddleElement;
