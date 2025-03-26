import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/app/models/User";
import  connectDB  from "../../../lib/db";
import { zodSigninSchema } from "@/app/lib/zodSchemas/zodSigninSchema";
import generateToken from "@/app/utils/tokenGeneration";

const jwt_token_secret = process.env.JWT_TOKEN_SECRET as string;

export async function POST(req: NextRequest) {
    console.log("entered");
    await connectDB();



    console.log("entering Signin route!");

    // Destructure the credentials from the req body.
    const{ email, password } = await req.json();
    console.log(email, password);

    //Validate the credentials to the zod schema.
    const zodCheck = zodSigninSchema.safeParse({ email, password });
    if(!zodCheck.success){
        return new Response( JSON.stringify({
            success:false,
            message:"zod Check failede",
            error:zodCheck.error.errors
        }),
        {
            status:400,
            headers:{"Content-Type":"application/json"}         
        });
    }

    // Check for existing Users by the same credentials
    const existingUser = await User.findOne({ email });

    if(!existingUser){
         return new Response(JSON.stringify({ success: false, message: "Account not Found!" }), 
         {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }

    // Hash the password
    const hashedPassword = existingUser.password;

    const verifyPassword = await bcrypt.compare(password, hashedPassword)
            
    if(!verifyPassword){
        return new Response(JSON.stringify({ success: false, message: "Invalid Credentials!" }),
        {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }   

    // Generate a token
    const token = generateToken({
        id:existingUser._id,
        username:existingUser.username,
        email:existingUser.email,  
        createdAt: Date.now()
    }, jwt_token_secret
    );

    if(!token){
        return new Response(JSON.stringify({ success: false, message: "Token signing failed!" }),
        {
            status: 400,
            headers: { "Content-Type": "application/json" }
        }
    )};

    return new Response(JSON.stringify({
        success: true,
        msg: "User logged in successfully",
        token:token,
        payload:{
            id:existingUser._id,
            username:existingUser.username,
            email:existingUser.email
        }
    }),
    {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });

}