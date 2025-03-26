"use client"


import { Button } from "./Button";
import Inputbox from "./InputBox";
import { Heading } from "./Heading";

import React from 'react'
import BottomWarning from "./warningNav";

const SigninComponent = () => {
  return (
  
    
    <div className="relative flex flex-col items-center justify-center bg-yellow-100/15  text-center w-80 h-120 z-10 p-4 rounded-2xl">
      
        <Heading Heading={"Sign-In"} SubHeading={"Enter Credentials to signin!"} />
        <Inputbox
        
        label={"Username"} /*The text insid the atcual input box*/
        name={""}
        type={"text"}
        value={""}
        onChange={()=>{console.log("set!")}}
        />

        <Inputbox
                
                label={"Password  "} /*The text insid the atcual input box*/
                name={""}
                type={"text"}
                value={""}
                onChange={()=>{console.log("set!")}}
                />
        

        <Button label="SignIn" onClick={()=>{"signin"}} /> 
         <BottomWarning label={"Don't have an account ?"} link={"signup"}  /> 

    </div>
  
  )
}

export default SigninComponent;
