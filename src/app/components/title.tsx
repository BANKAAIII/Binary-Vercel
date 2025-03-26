"use client"
import titleProp from "../types/componentTypes/titleProp";

import React from "react";
const Title = ({label}:titleProp) => {
    
    return <>
            <div  className="text-9xl text-yellow-400  mt-10 pt-40 mb-10 ml-5 mr-5 font-bold italic">{label} </div>   
       
    </>
}

export default Title