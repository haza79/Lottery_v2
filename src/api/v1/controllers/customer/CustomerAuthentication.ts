import * as customerAuthenticationBusiness from "@api/v1/business/customer/CustomerAuthentication.business";
import { Request,Response } from "express"
import { IncorrectPasswordError } from "@api/v1/error/Error";

async function customerLogin(req:Request,res:Response):Promise<Response>{
    try{
        const {username,password} = req.body;
        const login = await customerAuthenticationBusiness.login(username,password);
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

async function customerRegister(req:Request,res:Response):Promise<Response>{
    try{
        const {username,password,name,phone,dateOfBirth,bankCode,bankName,bankNumber} = req.body;
        const register = await customerAuthenticationBusiness.register(username,password,name,phone,new Date(dateOfBirth),bankCode,bankName,bankNumber);
        if(register){
            return res.status(200).json(register);
        }
        return res.status(401).json({error:"Cannot Register"});
    }catch(error){
        console.error(error)
        return res.status(500).json({error:"Internal Server Error"});
    }
}

export { customerLogin, customerRegister }