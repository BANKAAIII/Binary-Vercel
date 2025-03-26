"use client"

import SignupComponent from "../components/SignupComponent";

export default function TestPage  () {
    return (
      <div className="flex flex-col w-screen h-screen justify-center bg-[#1A1A1D] items-center ">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-100
                      bg-yellow-500 rounded-t-full blur-3xl opacity-20 pointer-events-none" />
        <SignupComponent/>
      </div>     
    );
}