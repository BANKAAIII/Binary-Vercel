"use client";

import { Button } from "../components/Button";
import NavBar from "../components/NavBar";
import { useRouter } from "next/navigation"; // Change to "next/navigation" if using App Router

export default function LandingPage() {

 

   const router = useRouter();
  
  
  return (
    <div>
      
    <div className="relative w-screen h-screen bg-[#1A1A1D] overflow-hidden">
    <NavBar />
      
      {/* Blurry semi-circle glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-100
                      bg-yellow-500 rounded-t-full blur-3xl opacity-20 pointer-events-none" />
      
      {/* Main content */}
      <div className="flex flex-col items-center justify-end pb-30 w-full h-full">
        <div className="text-yellow-400 text-7xl font-extrabold italic pt-5 pb-15">
          Binary Search
        </div>
        <Button label="Play" onClick={() => router.push("/signin")} />
      </div>
    </div>
    </div>
  );
}
