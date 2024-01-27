import { Prisma, PrismaClient, user_roles } from "@prisma/client";
import prisma from "@config/database";

async function createUserRole(userId:string,roleId:string,transaction:any=prisma):Promise<user_roles>{
    return await transaction.user_roles.create({
        data:{user_id:userId,role_id:roleId}
    });
}

async function getUserRoleById(id:string):Promise<user_roles|null>{
    const userRole = await prisma.user_roles.findUnique({
        where:{
            id
        }
    });
    return userRole;
}

async function getUserRoleByUserId(userId:string):Promise<user_roles|null>{
    const userRole = await prisma.user_roles.findFirst({
        where:{user_id:userId}
    });
    return userRole;
}

async function getUserRoleByUserIdAndRoleId(userId:string,roleId:string):Promise<user_roles|null>{
    const userRole = await prisma.user_roles.findFirst({
        where:{
            user_id:userId,
            role_id:roleId
        }
    });
    return userRole;
}

async function updateUserRoleById(id: string, updates: { roleId: string },transaction:any=prisma): Promise<user_roles | null> {
    return await transaction.user_roles.update({where:{id},data:{role_id:updates.roleId}});
}

async function deleteUserRole(id:string,transaction:any=prisma):Promise<user_roles>{
    return transaction.user_roles.delete({where:{id}});
}

export {createUserRole, getUserRoleById, getUserRoleByUserIdAndRoleId, updateUserRoleById, deleteUserRole, getUserRoleByUserId}