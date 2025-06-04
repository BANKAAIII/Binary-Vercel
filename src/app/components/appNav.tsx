"use client"

import { useRouter } from 'next/navigation'

import React from 'react'

const AppNav = () => {

  const router = useRouter();
  return (
    <div className="flex flex-row justify-between bg-[#1A1A1D] w-screen h-15 ">
      <div className ="text-lg p-4 pl-8 text-yellow-200 font-bold  ">Binary Search</div>
     
      <div className="flex flex-row justify-between items-center  pt-1 pr-8 pl-8 ">
        <div></div>
      <button className =" w-7 h-7 hover:bg-amber-300  bg-yellow-100/10 shadow-2xl font rounded-4xl" onClick={()=>{router.push("/profilepage")}} >A</button>
      <button className="group relative w-20 h-7 rounded-full text-yellow-400 hover:text-yellow-300 font-bold shadow-2xl "onClick={()=>{router.push("/signup")}}>
            Logout
             <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
      </button>

      </div>

      </div>
      
  )
}

export default AppNav;
