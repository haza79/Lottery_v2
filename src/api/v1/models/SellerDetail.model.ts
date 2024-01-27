import prisma from "@config/database";
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

async function createSellerDetail(inputData:createSellerDetailI,transaction:any=prisma):Promise<seller_details>{
    return await transaction.seller_details.create({
        data:inputData
    });
}

async function getSellerDetailById(id:string):Promise<seller_details|null>{
    return await prisma.seller_details.findUnique({
        where:{id}
    });
}

async function getSellerDetailByUserId(user_id:string):Promise<seller_details|null>{
    return await prisma.seller_details.findUnique({
        where:{user_id}
    });
}

async function updateSellerDetailById(id:string,update:updateSellerDetailI,transaction:any=prisma):Promise<seller_details>{
    return transaction.seller_details.update({
        where:{id},
        data:update
    });
}

async function updateSellerDetailByUserId(user_id:string,update:updateSellerDetailI,transaction:any=prisma):Promise<seller_details>{
    return transaction.seller_details.update({
        where:{user_id},
        data:update
    });
}

async function deleteSellerDetailById(id:string,transaction:any=prisma):Promise<seller_details>{
    return prisma.seller_details.delete({
        where:{id}
    });
}

async function deleteSellerDetailByUserId(user_id:string,transaction:any=prisma):Promise<seller_details>{
    return prisma.seller_details.delete({
        where:{user_id}
    });
}

export {createSellerDetail, getSellerDetailById, getSellerDetailByUserId, updateSellerDetailById, updateSellerDetailByUserId, deleteSellerDetailById, deleteSellerDetailByUserId}