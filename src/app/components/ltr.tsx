import React from "react";
import ltrProps from "../types/componentTypes/ltr";

const Ltr= ({label,hovered}:ltrProps)=>{
    return(
        <div dir="ltr">
  <div className={`flex items-center justify-center rounded-s-full w-20 h-20 border-4 bg-gradient-to-t from-amber-400 to-amber-700 ${hovered? 'border-green-500':`border-[#1A1A1D]`} `}>{label}</div>
        </div>
    )
}



export default Ltr;
