import * as customerDetailModel from "@api/v1/models/CustomerDetail";
import { customer_details } from "@prisma/client";

async function createUserDetail(user_id:string,name:string,phone:string,date_of_birth:Date,bank_account_id:string,transaction:any):Promise<customer_details>{
    try{
        const create = await customerDetailModel.createUserDetail(user_id,name,phone,date_of_birth,bank_account_id,transaction);
        return create;
    }catch(error){
        throw new Error("Error while create user detail "+error);
    }
}

async function getUserDetailById(id:string):Promise<customer_details|null>{
    try{
        const userDetail = await customerDetailModel.getUserDetailById(id);
        return userDetail;
    }catch(error){
        throw new Error("Error while get user detail "+error);
    }
}

async function getUserDetailByUserId(user_id:string):Promise<customer_details|null>{
    try{
        const userDetail = await customerDetailModel.getUserDetailByUserId(user_id);
        return userDetail;
    }catch(error){
        throw new Error("Error while get user detail "+Error);
    }
}

async function updateUserDetailById(id:string,updates:{name?:string,phone?:string,date_of_birth?:Date},transaction?:any):Promise<customer_details>{
    try{
        const updated = await customerDetailModel.updateUserDetailById(id,updates,transaction);
        return updated;
    }catch(error){
        throw new Error("Error while update user detail "+error);
    }
}

async function updateUserDetailByUserId(user_id:string,updates:{name?:string,phone?:string,date_of_birth?:Date},transaction?:any):Promise<customer_details>{
    try{
        const updated = await customerDetailModel.updateUserDetailByUserId(user_id,updates,transaction);
        return updated;
    }catch(error){
        throw new Error("Error while update user detail "+error);
    }
}

async function deleteUserDetailById(id:string,transaction?:any):Promise<customer_details>{
    try{
        const deleted = await customerDetailModel.deleteUserDetailById(id,transaction);
        return deleted
    }catch(error){
        throw new Error("Error while delete user detail "+error);
    }
}

async function deleteUserDetailByUserId(user_id:string,transaction?:any):Promise<customer_details>{
    try{
        const deleted = await customerDetailModel.deleteUserDetailByUserId(user_id,transaction);
        return deleted;
    }catch(error){
        throw new Error("Error while delete user detail "+error);
    }
}

export {createUserDetail,getUserDetailById,getUserDetailByUserId,updateUserDetailById,updateUserDetailByUserId,deleteUserDetailById,deleteUserDetailByUserId};