import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/app/models/User";
import  connectDB  from "../../../lib/db";
import generateToken from "@/app/utils/tokenGeneration";
import { zodSignupSchema } from "@/app/lib/zodSchemas/zodSignupSchema";

const jwt_token_secret = process.env.JWT_TOKEN_SECRET as string;

export async function POST(req: NextRequest) {

    await connectDB();

    console.log("Entering Signup route!");

        // Destructure email, password, and username from request body
        const { email, password, username } = await req.json();

        // validate inputs to zod schema
        const zodCheck = zodSignupSchema.safeParse({ email, password, username });
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

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return new Response(JSON.stringify({ success: false, message: "User already exists" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            email,
            password: hashedPassword,
            username,
        });
        await newUser.save();

        console.log("New user successfully created!");

        const payload = {
            id: newUser._id,
            username,
            email,
            createdAt: Date.now(),
        };

        const token = generateToken(payload, jwt_token_secret);

        if (!token) {
            throw new Error("Token signing failed");
        }

        return new Response(
            JSON.stringify({
                success: true,
                msg: "User created successfully",
                token:token,
                payload:payload
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
   
}
