"use client"

import { atom } from "recoil";



export  const usernameAtom = atom<string>({
    key: "usernameAtom",
    default:""
})
 
