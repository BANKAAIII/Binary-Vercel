"use client";

import {  useEffect, useState } from "react";
import Ltr from "../components/ltr";
import MiddleElement from "../components/middleElement";
import Rtl from "../components/rtr";
import { Button } from "../components/Button";
import Title from "../components/title";
import axios from "axios";
import { useAtom } from "jotai";
import { gameArrayAtom } from "../store/gameArray";
import { gameKeyAtom } from "../store/gameKeyAtom";
import AppNav from "../components/appNav";
import { useRouter } from "next/navigation";

export default function TestPage() {
  const router = useRouter();
  const [gameArray, setGameArray] = useAtom(gameArrayAtom);
  const [gameKey, setGameKey] = useAtom(gameKeyAtom);
 

  const [leftButtonState, setLeftButtonState] = useState(false);
  const [rightButtonState, setRightButtonState] = useState(false);


  
  useEffect(() => {
    const fetchGameData = async () => {


      try {
        const response = await axios.post("/api/search");

        if (!response || !response.data) {
          console.error("Game data fetch failed");
          return;
        }

        const { array, key } = response.data;
        const settingArray = setGameArray(array);
        const settingKey = setGameKey(key);

        console.log(settingArray,settingKey);

        if(!array || !key){
          return new Error("no array and key");
        }

        console.log("Fetched Game Array:", array);
        console.log("Fetched Game Key:", key);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };
    
    fetchGameData();
  }, [gameArray]);

 
  if (!gameArray.length || !gameKey) {
    return <p className="text-red-500 text-center">Error: Game data not found</p>;
  }

  const setHover = (side: "left" | "right"): void => {
    if (side === "left") {
      setLeftButtonState(true);
    } else {
      setRightButtonState(true);
    }
  };

  const removeHover = (side: "left" | "right"): void => {
    if (side === "left") {
      setLeftButtonState(false);
    } else {
      setRightButtonState(false);
    }
  };

  // ✅ Properly update state to force re-render
  function arrayReRender() {
    if (gameArray.length <= 0) return; // Prevent slicing when only one element is left
    if (gameArray.length === 1) router.push("/resultpage"); // Prevent slicing when only one element is left


    const mid = Math.floor(gameArray.length / 2);
    const firstHalf = gameArray.slice(0, mid);
    const secondHalf = gameArray.slice(mid);

    console.log("mid", mid);
    console.log("firstHalf", firstHalf);
    console.log("secondHalf", secondHalf);

    setGameArray((prevArray) => {
      console.log(prevArray);
      if (gameKey && firstHalf.includes(gameKey)) return firstHalf;
      return secondHalf;
    });
  }

  return (
    <div className="flex flex-col w-full h-full min-h-screen justify-center items-center bg-[#1A1A1D] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-yellow-500 rounded-t-full blur-3xl opacity-20 pointer-events-none" />
      
      <AppNav />
      <Title label={"Choose"} />

      {/* Middle Elements - Splitting into Two Sections */}
      <div className="flex flex-wrap justify-center items-center px-4">
        {gameArray.length > 0 ? (
          <>
            {/* Left Section (First 5 Elements including Ltr) */}
            <Ltr label={gameArray[0]} hovered={leftButtonState} />

            {gameArray.slice(1,(gameArray.length/2)).map((item, index) => (
              <MiddleElement key={index + 1} label={item} hovered={leftButtonState} />
            ))}

            {/* Right Section (Last 5 Elements including Rtl) */}
            {gameArray.slice(gameArray.length/2,gameArray.length-1).map((item, index) => (
              <MiddleElement key={index + 5} label={item} hovered={rightButtonState} />
            ))}

            <Rtl label={gameArray[gameArray.length-1]} hovered={rightButtonState} />
          </>
        ) : (
          <p className="text-white">Loading game data...</p>
        )}
      </div>

      {/* Buttons - Hover Functionality */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
        <Button
          label={"Left"}
          onClick={arrayReRender} // ✅ Correct function call
          onMouseEnter={() => setHover("left")}  
          onMouseLeave={() => removeHover("left")}
        />
        <Button
          label={"Right"}
          onClick={arrayReRender} // ✅ Correct function call
          onMouseEnter={() => setHover("right")}  
          onMouseLeave={() => removeHover("right")}
        />
      </div>
    </div>
  );
}
