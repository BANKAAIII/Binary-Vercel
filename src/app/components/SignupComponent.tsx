"use client"

import { useRecoilState } from 'recoil';
import { usernameAtom } from '../store/usernameAtom';
import { emailAtom } from "../store/emailAtom";
import { passwordAtom } from "../store/passwordAtom";

import { Button } from "./Button";
import Inputbox from "./InputBox";
import { Heading } from "./Heading";
import BottomWarning from "./warningNav";

import React from 'react'

const SigninComponent = () => {

  const [username,setUsername] = useRecoilState<string>(usernameAtom);
  const [password,setPassword] = useRecoilState<string>(passwordAtom);
  const [email,setEmail] = useRecoilState<string>(emailAtom);


  return (
   
    <div className="relative flex flex-col bg-yellow-100/15 items-center justify-center text-center w-80 h-120 z-10 p-4 rounded-2xl">
      
        <Heading Heading={"Sign-Up"} SubHeading={"Enter Credentials to signin!"} />
        <Inputbox
        
        label={"Username"} /*The text insid the atcual input box*/
        name={"username"}
        type={"text"}
        value={username}
        onChange={e=> setUsername( e.target.value )}
        />

        <Inputbox
                
                label={"Email-Identity  "} /*The text insid the atcual input box*/
                name={"email"}
                type={"text"}
                value={email}
                onChange={ e=> setEmail( e.target.value ) }
                />

          <Inputbox
                
                label={"Password  "} /*The text insid the atcual input box*/
                name={"password"}
                type={"text"}
                value={password}
                onChange={e=> setPassword( e.target.value )}
                />        
        

        <Button label="Signup" onClick={()=>{"signup"}} /> 
        <BottomWarning label={"Already have an account ?"} link={"signin"} />
    </div>
 
  
  )
}

export default SigninComponent;
