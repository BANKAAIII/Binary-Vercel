"use client"

import Ltr from "./components/ltr";
import MiddleElement from "./components/middleElement";
import Rtl from "./components/rtr";
import { Button } from "./components/Button";
import Title from "./components/title";
import NavBar from "./components/NavBar";
 
 
 export default function TestPage  () {
    return (
      <div className="flex flex-col w-screen h-screen justify-center items-center bg-[#1A1A1D]">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-100
                      bg-yellow-500 rounded-t-full blur-3xl opacity-20 pointer-events-none" />
         <NavBar/>             
        <Title label={"Choose"} />
        <div className="flex flex-row justify-center items-center  " >
        <Ltr label={"1"} hovered={false}/>
          <MiddleElement label={"2"} hovered={false} />
          <MiddleElement label={"2"} hovered={false} />
          <MiddleElement label={"2"} hovered={false} />
          <MiddleElement label={"2"} hovered={false} />
          <MiddleElement label={"2"} hovered={false} />
          <MiddleElement label={"2"} hovered={false} />
          <Rtl label={"3"} hovered={false} />
        </div>
        
        <div className="flex flex-row justify-center items center ">
          <Button  label={"Left"}  onClick={()=>{console.log("left")}} />
          <Button label={"Right"} onClick={()=>{console.log("right")}} />
        </div>

      </div>     
    );
}