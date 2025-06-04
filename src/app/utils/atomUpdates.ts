

import { useAtom } from "jotai";
import { usernameAtom } from "../store/usernameAtom";
import { emailAtom } from "../store/emailAtom";
import TokenInterface from "../types/tokenInterface";
//atomUpdates



export function useAtomUpdate(tokenDecoded:TokenInterface):void{
   const [username,setUsername] = useAtom(usernameAtom);
   const [email,setEmail] = useAtom(emailAtom);

   setUsername(tokenDecoded.username);
   setEmail(tokenDecoded.email);

    console.log("Username updated to: ", username); 
    console.log("Email updated to: ", email);
}
