import { Request,Response } from "express";
import * as userService from "@api/v1/services/User";

async function createUser(req:Request,res:Response):Promise<Response>{
    try{
        const {username,password} = req.body;
        const createUser = await userService.createUser(username,password);
        return res.status(200).json(createUser);
    }catch(error){
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"});
    }
}

async function getUserById(req:Request,res:Response):Promise<Response>{
    try{
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        if(user){
            return res.status(200).json(user);
        }

        return res.status(404).json({error:"User Not Found"});
    }catch(error){
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"});
    }
}

async function getAllusers(req:Request,res:Response):Promise<Response>{
    try{
        const limit = parseInt(req.query.limit as string) || 100;
        const offset = parseInt(req.query.offset as string) || 0;
        const users = await userService.getAllUsers(limit,offset);
        return res.status(200).json(users);
    }catch(error){
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"});
    }
}

async function updateUser(req:Request,res:Response):Promise<Response>{
    try{
        const userId = req.params.id;
        const {username,password,salt} = req.body;
        const updatedUser = await userService.updateUser(userId,{username,password,salt});
        if(updatedUser){
            return res.status(200).json(updatedUser);
        }

        return res.status(404).json({error:"User Not Found"});
    }catch(error){
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"})
    }
}

async function deleteUser(req:Request,res:Response):Promise<Response>{
    try{
        const userId = req.params.id;
        const deletedUser = await userService.deleteUser(userId);
        if(deletedUser){
            return res.status(200).json(deletedUser);
        }

        return res.status(404).json({error:"User Not Found"});
    }catch(error){
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"});
    }
}

export {createUser,getUserById,getAllusers,updateUser,deleteUser};