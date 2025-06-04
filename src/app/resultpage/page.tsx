"use client";

import { useAtomValue } from "jotai";
import { Button } from "../components/Button";
import AppNav from "../components/appNav";
import { useRouter } from "next/navigation"; // Change to "next/navigation" if using App Router
import { tokenAtom } from "../store/tokenAtom";

export default function LandingPage() {

 

   const router = useRouter();
     const token = useAtomValue(tokenAtom);
          if(!token){
            router.push("/signin");
          }
  return (
    <div>
      
    <div className="relative w-screen h-screen bg-[#1A1A1D] overflow-hidden">
    <AppNav />
      
      {/* Blurry semi-circle glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-100
                      bg-yellow-500 rounded-t-full blur-3xl opacity-20 pointer-events-none" />
      
      {/* Main content */}
      <div className="flex flex-col items-center justify-end pb-30 w-full h-full">
        <div className="text-yellow-400 text-7xl font-extrabold italic pt-5 pb-15">
          Thank You
        </div>
        <Button label="Play Again!" onClick={() => router.push("/signin")} />
      </div>
    </div>
    </div>
  );
}
