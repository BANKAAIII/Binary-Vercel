import jwt from "jsonwebtoken";

function generateToken(payload:object, secret:jwt.Secret ): string{
    
    return jwt.sign(payload,secret);
}

export default  generateToken;