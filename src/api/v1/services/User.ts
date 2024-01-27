import { PrismaClient, users } from "@prisma/client";
import * as userModel from "@api/v1/models/User";
import {generateSalt,hashPasswordWithSalt} from "@api/v1/helpers/PasswordHash";

async function createUser(username:string,password:string,transaction?:any):Promise<users>{
  try{
    const genSalt:string = await generateSalt();
    const hashedPassword = await hashPasswordWithSalt(password,genSalt);
    return userModel.createUser(username,hashedPassword,genSalt,transaction);
  }catch(error){
    throw new Error("Error while create user "+error);
  }
}

async function getUserById(userId: string): Promise<users | null> {
    try {
      return await userModel.getUserById(userId);
    } catch (error) {
      if (error.code === 'P2023') {
        throw new Error(`Error creating UUID`);
      }
      throw error;
    }
  }

async function getUserByUsername(username:string):Promise<users | null>{
    try{
        return await userModel.getUserByUsername(username);
    }catch(error){
        throw new Error("Error getting user "+error)
    }
}

async function getAllUsers(limit:number = 100,offset:number=0):Promise<users[] | null>{
    return await userModel.getAllUsers(limit,offset);
}

async function updateUser(userId:string,updates:{username?:string,password?:string,salt?:string},transaction?:any):Promise<users | null>{
  try{
    return await userModel.updateUser(userId,updates,transaction);
  }catch(error){
    throw new Error("Error while update user "+error);
  }
}

async function deleteUser(userId:string,transaction?:any):Promise<users | null>{
  try{
    return userModel.deleteUser(userId,transaction);
  }catch(error){
    throw new Error("Error while delete user "+error);
  }
}

export {createUser,getUserById,getAllUsers,updateUser,deleteUser, getUserByUsername}