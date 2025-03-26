"use client"

import React from "react";
import ButtonProps from "../types/componentTypes/buttonProps";

export function Button({ label, onClick, onMouseEnter, onMouseLeave }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            type="button"
            className="text-xl font-semibold h-15 w-30 bg-yellow-600 hover:bg-yellow-400 text-black rounded-full mt-5 mb-5 ml-5 mr-5"
        >
            {label}
        </button>
    );
}
