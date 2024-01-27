import { PrismaClient, customer_details } from "@prisma/client";
import prisma from '@config/database';

async function createUserDetail(user_id:string,name:string,phone:string,date_of_birth:Date,bank_account_id:string,transaction:any):Promise<customer_details>{
    return await transaction.customer_details.create({
            data:{
                user_id,name,phone,date_of_birth,bank_account_id
            }
        });
}

async function getUserDetailById(id:string):Promise<customer_details|null>{
    const userDetail = await prisma.customer_details.findUnique({
        where:{id}
    });
    return userDetail;
}

async function getUserDetailByUserId(user_id:string):Promise<customer_details|null>{
    const userDetail = await prisma.customer_details.findFirst({
        where:{user_id}
    });
    return userDetail;
}

async function updateUserDetailById(id:string,updates:{name?:string,phone?:string,date_of_birth?:Date},transaction:any=prisma):Promise<customer_details>{
    return await transaction.customer_details.update({where:{id},data:updates});
}

async function updateUserDetailByUserId(user_id:string,updates:{name?:string,phone?:string,date_of_birth?:Date},transaction:any=prisma):Promise<customer_details>{
    return await transaction.customer_details.update({where:{user_id},data:updates});
}

async function deleteUserDetailById(id:string,transaction:any=prisma):Promise<customer_details>{
    return await transaction.customer_details.delete({where:{id}});
}

async function deleteUserDetailByUserId(user_id:string,transaction:any=prisma):Promise<customer_details>{
    return await transaction.customer_details.delete({where:{user_id}});
}

export {createUserDetail,getUserDetailById,getUserDetailByUserId,updateUserDetailById,updateUserDetailByUserId,deleteUserDetailById,deleteUserDetailByUserId};