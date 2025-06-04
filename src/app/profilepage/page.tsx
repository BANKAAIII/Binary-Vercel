"use client"

import { usernameAtom } from "../store/usernameAtom";
import { emailAtom } from "../store/emailAtom";
import { useAtom, useAtomValue } from "jotai";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/warningNav";
import { tokenAtom } from "../store/tokenAtom";
import { useRouter } from "next/navigation";

export default function TestPage  () {

  const router = useRouter();
   const token = useAtomValue(tokenAtom);
        if(!token){
          router.push("/signin");
        }

  const [username ] = useAtom(usernameAtom);
  const [email] = useAtom(emailAtom);
  
  console.log(username);
  console.log(email);

    return (
      <div className="flex flex-col w-screen h-screen justify-center bg-[#1A1A1D] items-center ">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-100
                      bg-yellow-500 rounded-t-full blur-3xl opacity-20 pointer-events-none" />
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
             
      </div>     
    );
}