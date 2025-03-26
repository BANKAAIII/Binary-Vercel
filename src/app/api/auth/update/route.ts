import { NextRequest } from "next/server";
import User from "@/app/models/User";
import  connectDB  from "../../../lib/db";
import { zodUpdateSchema } from "@/app/lib/zodSchemas/zodUpdateSchema";
const jwt_token_secret = process.env.JWT_TOKEN_SECRET as string;
import { IUser } from "@/app/models/User";
import { tokenValidation } from "@/app/utils/tokenValidation";


export async function PUT(req: NextRequest) {

    

    await connectDB();
    const token = req.headers.get('Authorization')?.split(" ")[1];
    console.log(token);
    if(!token){
        return new Response(
            JSON.stringify(
                { success:false , msg:"token not provided" }),
            { status:400,
             })
        
    }


    const decoded = await tokenValidation(token,jwt_token_secret);
    console.log("decoded", decoded);

    if (!decoded) {
        return new Response(JSON.stringify({ success: false, message: "Invalid token" }),
        {
            status: 401,
            headers: { "Content-Type": "application/json" }
        });
    }

    const email = decoded.email;

    // Get the credentials from the request body
    const newCreds = await req.json();
    console.log(newCreds);

    const newEmail = newCreds.email;
    const newUsername = newCreds.username;
    const newPassword = newCreds.password;

    const updatePayload: Partial<IUser> = {
        email: newEmail,
        username: newUsername,
        password: newPassword
    }

    console.log(updatePayload);

    console.log("Entering Update route!");


    
    
    // Validate the credentials to the zod schema
    const zodCheck = zodUpdateSchema.safeParse({ newEmail, newPassword, newUsername });
    if(!zodCheck.success){
        return new Response( JSON.stringify({
            success:false,
            message:"zod Check failed",
            error:zodCheck.error.errors
        }),
        {
            status:400,
            headers:{"Content-Type":"application/json"}     
        });
    }

    const emailUser = await User.findOne({email:email});
    console.log(emailUser);

    // Find the user by email
    const existingUser = await User.findOneAndUpdate({email},
        {
            email:newEmail,
            password:newPassword,
            username:newUsername
        },
        {new:true}      
    );



    if(!existingUser){
        return new Response(JSON.stringify({ success: false, message: "Account not Found!" }),
        {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }   


    await existingUser.save();

    console.log("User successfully updated!");

    return new Response(JSON.stringify({ success: true, message: "User successfully updated!",updatedUser:existingUser }),
    {
        status: 200,
        headers: { "Content-Type": "application/json" }
        
    });         

}