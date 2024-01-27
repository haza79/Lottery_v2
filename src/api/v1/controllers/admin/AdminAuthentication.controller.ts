import * as adminAuthenticationBusiness from "@api/v1/business/admin/AdminAuthentication.business";
import { IncorrectPasswordError } from "@api/v1/error/Error";
import { Request,Response } from "express"

async function adminLogin(req:Request,res:Response):Promise<Response>{
    try{
        const {username,password} = req.body;
        const login = await adminAuthenticationBusiness.login(username,password);
        if(login){
            return res.status(200).json(login)
        }
        return res.status(401).json({error:"Invalid Credental"});
    }catch(error){
        console.error(error)
        if(error instanceof IncorrectPasswordError){
            return res.status(401).json({error:"Invalid Credental"});
        }
        return res.status(500).json({error:"Internal Server Error"});
    }
}

export {adminLogin}