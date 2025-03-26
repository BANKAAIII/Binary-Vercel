
import { NextRequest, NextResponse } from "next/server";

async function missingCheck(req: NextRequest){
    const { email, password, username } = await req.json();
    
    const missingFields = [];

    if(!email) missingFields.push("email");
    if(!password) missingFields.push("password");
    
    //Conditional check for username
    const path = req.nextUrl.pathname;
    if(path.includes("signup") && !username) missingFields.push("username");

    if(missingFields.length > 0){
        return new Response(JSON.stringify({
            success:false,
            message:`${missingFields.join(", ")} is missing`
            //Here the .join displays each element with ", " in between
        }),
        { 
            status:400,
            headers:{"Content-Type":"application/json"}
        }
    )
    }return NextResponse.next();

}

export const config = {
    matcher: [
        "/api/auth/signup",
        "/api/auth/signin",

    ]
}

export default missingCheck;