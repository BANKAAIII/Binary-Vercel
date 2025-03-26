"use client"

import React from "react";
import inputBoxProps from "../types/componentTypes/inputBoxProps";



const Inputbox = ({label,type,name,onChange,value}:inputBoxProps)=>{
  
    return(
        <div>
            <label className="text-sm w-full text-gray-200 font-medium text-left p-3">{label}</label>
            <input 
            type={type} 
            placeholder={name} 
            onChange={onChange}
            value={value}
            
            className="w-50 px-2 p-2 border rounded-full  border-gray-500"></input>
        </div>
    )
}

export default Inputbox