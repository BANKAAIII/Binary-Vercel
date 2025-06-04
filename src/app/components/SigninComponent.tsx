"use client"

import { Button } from "./Button";
import Inputbox from "./InputBox";
import { Heading } from "./Heading";
import { useAtom } from "jotai";
import { emailAtom } from "../store/emailAtom";
import { passwordAtom } from "../store/passwordAtom";
import React, { useEffect } from 'react';
import BottomWarning from "./warningNav";
import axios from "axios";
import { useRouter } from "next/navigation";
import { tokenAtom } from "../store/tokenAtom";

const SigninComponent = () => {
  const router = useRouter();

  // Log when the component mounts
  useEffect(() => {
    console.log("SigninComponent mounted");
  }, []);

  const [email, setEmail] = useAtom(emailAtom);
  const [password, setPassword] = useAtom(passwordAtom);
  const [userToken, setUserToken] = useAtom(tokenAtom);

  // Log the updated userToken value when it changes.
  // This ensures that the log displays the updated token value,
  // since state updates are asynchronous.
  useEffect(() => {
    console.log("Token updated:", userToken);
  }, [userToken]);

  return (
    <div className="relative flex flex-col items-center justify-center bg-yellow-100/15 text-center w-80 h-120 z-10 p-4 rounded-2xl">
      <Heading Heading={"Sign-In"} SubHeading={"Enter Credentials to signin!"} />
      <Inputbox
        label={"Email-Identity"} 
        name={"email"}
        type={"text"}
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
      />
      <Inputbox
        label={"Password "} 
        name={"password"}
        type={"text"}
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
      />
      <Button
        label="SignIn"
        onClick={async () => {
          try {
            const response = await axios.post("/api/auth/signin", { email, password });
            console.log("API response:", response.data);

            // Check if API call was successful and a token is returned
            if (response.data.success && response.data.token) {
              // Set the userToken atom state.
              setUserToken(response.data.token);
              // Note: Logging right after setUserToken might not show the updated value.
              console.log("Token set (immediate log):", userToken);
              console.log("signin successful");
              router.push("/gamepage");
            } else {
              console.error("Signin failed or token missing in the response");
            }
          } catch (error) {
            console.error("Error during signin:", error);
          }
        }}
      />
      <BottomWarning label={"Don't have an account ?"} link={"signup"} />
    </div>
  )
}

export default SigninComponent;
