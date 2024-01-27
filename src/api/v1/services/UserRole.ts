import { user_roles } from "@prisma/client";
import * as userRole from "@api/v1/models/UserRole";

async function createUserRole(userId:string,roleId:string,transaction:any):Promise<user_roles>{
    try{
        return await userRole.createUserRole(userId,roleId,transaction);
    }catch(error){
        throw new Error("Error while create user role "+error);
    }
}

async function getUserRoleById(id:string):Promise<user_roles|null>{
    try{
        return await userRole.getUserRoleById(id);
    }catch(error){
        throw new Error("Error while getting user role "+error);
    }
}

async function getUserRoleByUserId(userId:string):Promise<user_roles|null>{
    try{
        return await userRole.getUserRoleByUserId(userId);
    }catch(error){
        throw new Error("Error while get user role "+error);
    }
}

async function getUserRoleByUserIdAndRoleId(userId:string,roleId:string):Promise<user_roles|null>{
    try{
        return await userRole.getUserRoleByUserIdAndRoleId(userId,roleId);
    }catch(error){
        throw new Error("Error while getting user role "+error);
    }
}

async function updateUserRoleById(id: string, updates: { roleId: string },transaction?:any): Promise<user_roles | null>{
    try{
        return await userRole.updateUserRoleById(id,updates,transaction);
    }catch(error){
        throw new Error("Error while update user role "+error);
    }
}

async function deleteUserRole(id:string,transaction?:any):Promise<user_roles>{
    try{
        return await userRole.deleteUserRole(id,transaction);
    }catch(error){
        throw new Error("Error while delete user role "+error);
    }
}

export {createUserRole, getUserRoleById, getUserRoleByUserIdAndRoleId, updateUserRoleById, deleteUserRole, getUserRoleByUserId}