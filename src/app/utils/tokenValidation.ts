import jwt from "jsonwebtoken";
import { IUser } from "../models/User";


export async function tokenValidation(token: string, jwt_token_secret: jwt.Secret): Promise<IUser | null> {
    try {
        // Decode and cast to IUser
        const decoded = jwt.verify(token, jwt_token_secret) as IUser;
        console.log("decoded:", decoded);
        return decoded;
    } catch (error) {
        console.error("JWT Verification Failed:", error);
        return null;
    }
}
