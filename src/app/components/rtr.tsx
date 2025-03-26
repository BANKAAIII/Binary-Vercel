import React from "react";

import rtrProps from "../types/componentTypes/rtr";

const Rtl= ({label,hovered}:rtrProps)=>{
    return(
        <div dir="rtl">
        <div className={`flex items-center justify-center  rounded-s-full border-4 bg-gradient-to-t from-amber-400 to-amber-700 w-20 h-20 ${hovered? `border-green-500`:`border-[#1A1A1D]`}`}>{label}</div>
      </div>
    )
}



export default Rtl;
