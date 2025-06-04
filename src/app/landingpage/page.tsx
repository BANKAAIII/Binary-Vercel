"use client";

import { Button } from "../components/Button";
import NavBar from "../components/NavBar";
import { useRouter } from "next/navigation"; 
import Title from "../components/title";

export default function LandingPage() {

 

   const router = useRouter();
  
  
  return (
    <div>
      
    <div className="relative w-screen h-screen bg-[#1A1A1D] overflow-hidden">
    <NavBar />
      
    
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-100
                      bg-yellow-500 rounded-t-full blur-3xl opacity-20 pointer-events-none" />
      
      
      <div className="flex flex-col items-center justify-end pb-30 w-full h-full">
        <Title label="Binary Search" />
        <Button label="Play" onClick={() => router.push("/signin")} />
      </div>
    </div>
    </div>
  );
}
