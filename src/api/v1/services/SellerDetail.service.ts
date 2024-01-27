import * as sellerDetailModel from "@api/v1/models/SellerDetail.model";
import { seller_details } from "@prisma/client";

interface createSellerDetailI {
    user_id:string,
    identification_number:string,
    name:string,
    date_of_birth:Date,
    address:string,
    shopname:string,
    user_bank_id:string
}

interface updateSellerDetailI {
    identification_number?:string,
    name?:string,
    date_of_birth?:Date,
    address?:string,
    shopname?:string
}

async function createSellerDetail(inputData:createSellerDetailI,transaction?:any):Promise<seller_details>{
    try{
        return await sellerDetailModel.createSellerDetail(inputData,transaction);
    }catch(error){
        throw error;
    }    
}

async function getSellerDetailById(id:string):Promise<seller_details|null>{
    try{
        return await sellerDetailModel.getSellerDetailById(id);
    }catch(error){
        throw error;
    }
}

async function getSellerDetailByUserId(user_id:string):Promise<seller_details|null>{
    try{
        return await sellerDetailModel.getSellerDetailByUserId(user_id);
    }catch(error){
        throw error;
    }
}

async function updateSellerDetailById(id:string,update:updateSellerDetailI,transaction:any):Promise<seller_details>{
    try{
        return await sellerDetailModel.updateSellerDetailById(id,update,transaction);
    }catch(error){
        throw error;
    }
}

async function updateSellerDetailByUserId(user_id:string,update:updateSellerDetailI,transaction:any):Promise<seller_details>{
    try{
        return await sellerDetailModel.updateSellerDetailByUserId(user_id,update,transaction);
    }catch(error){
        throw error;
    }
}

async function deleteSellerDetailById(id:string,transaction:any):Promise<seller_details>{
    try{
        return sellerDetailModel.deleteSellerDetailById(id,transaction);
    }catch(error){
        throw error;
    }
}

async function deleteSellerDetailByUserId(user_id:string,transaction:any):Promise<seller_details>{
    try{
        return await sellerDetailModel.deleteSellerDetailByUserId(user_id,transaction);
    }catch(error){
        throw error;
    }
}

export {createSellerDetail, getSellerDetailById, getSellerDetailByUserId, updateSellerDetailById, updateSellerDetailByUserId, deleteSellerDetailById, deleteSellerDetailByUserId}