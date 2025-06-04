"use client"


import { Button } from "./Button";
import { Heading } from "./Heading";


import {useAtom, useAtomValue } from "jotai";
import BottomWarning from "./warningNav";

import { usernameAtom } from "../store/usernameAtom";
import { emailAtom } from "../store/emailAtom";


const ProfileComponent = () => {

  const [username, ] = useAtom(usernameAtom);
  const [email, ] = useAtomValue(emailAtom);
  
  console.log(username);
  console.log(email);
  
  return (
  
  
    <div className="relative flex flex-col items-center justify-center bg-yellow-100/15  text-center w-80 h-120 z-10 p-4 rounded-2xl">
      
        <Heading Heading={"Profile"} SubHeading={"Update to change Credentials!"} />
        <div className=" flex justify-center items-center font-serif text-2xl w-15 h-15 rounded-full bg-yellow-100/10 text-white shadow-2xl" >A</div>
      
        <div className="flex flex-col justify-between p-4">

            <div className={"flex flex-row"} >
            <div className="text-yellow-200">Username :</div>
            <div>{username}</div>
            </div>
            
            <div className={"flex flex-row"} >
            <div className="text-yellow-200">Email :</div>
            <div>{email}</div>
            </div>



           
        </div>

        <Button label="Update" onClick={()=>{"signin"}} /> 
        <BottomWarning label={"Go back to game?"} link={"/"}  /> 

    </div>
  
  )
}

export default ProfileComponent;
