
import jwt from "jsonwebtoken";
import {JWTPayload} from "@api/v1/interfaces/JWTPayload"

function generateToken(userId:string,username:string,role:string):string{
    const secretKey:string = process.env.ACCESS_TOKEN_SECRET || "";
    const payload:JWTPayload = {userId,username,role};
    const option = {expiresIn:process.env.JWT_EXPIRES_IN};
    return jwt.sign(payload,secretKey,option);
}

function verifyToken(token:string):JWTPayload|null{
    try{
        const secretKey:string = process.env.ACCESS_TOKEN_SECRET || "";
        return jwt.verify(token,secretKey) as JWTPayload;
    }catch(error){
        return null;
    }
}

export {generateToken,verifyToken};