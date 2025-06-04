"use client"

import {  useAtom } from "jotai";


import { Button } from "./Button";
import Inputbox from "./InputBox";
import { Heading } from "./Heading";
import React, { useEffect } from 'react' 
import { usernameAtom } from "../store/usernameAtom";
import { emailAtom } from "../store/emailAtom";
import { passwordAtom } from "../store/passwordAtom";
import axios from "axios";

const UpdateComponent = () => {

  useEffect(()=>{console.log("SigninComponent")},[])
  
  const [username,setUsername] = useAtom(usernameAtom);
  const [email,setEmail] = useAtom(emailAtom);
  const [password,setPassword] = useAtom(passwordAtom);



  return (
   
    <div className="relative flex flex-col bg-yellow-100/15 items-center justify-center text-center w-80 h-120 z-10 p-4 rounded-2xl overflow-hidden">
      
        <Heading Heading={"Update"} SubHeading={"Enter updated credentials"} />
        <Inputbox
        
        label={"Username"} /*The text insid the atcual input box*/
        name={"username"}
        type={"text"}
        value={username}
        onChange={ async(e)=>{
          
          try{
            setUsername(e.target.value);
            await axios.post(
              "/api/auth/signup",
              {username},
              { headers: { "Content-Type": "application/json" } }
            )
          }catch{
            return new Error("Backend call failed");
          }
        }}
        className={'text-white/30'}
        />

        <Inputbox
                
                label={"Email-Identity  "} /*The text insid the atcual input box*/
                name={"email"}
                type={"text"}
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className={'text-white/30'}
                />

          <Inputbox
                
                label={"Password  "} /*The text insid the atcual input box*/
                name={"password"}
                type={"text"}
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
        className={'text-white/30'}
                />        
        

        <Button label="update" onClick={()=>{"update"}} /> 
    </div>
 
  
  )
}

export default UpdateComponent;
