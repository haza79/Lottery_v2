import { PrismaClient, bank_accounts } from "@prisma/client";
import prisma from "@config/database";

async function createBankAccount(bank_id:string,user_id:string,customer_bank_name:string,bank_number:string,transaction:any=prisma):Promise<bank_accounts>{
    return await transaction.bank_accounts.create({
        data:{bank_id,user_id,customer_bank_name,bank_number}
    });
}

async function getCustomerBankAccountById(id:string):Promise<bank_accounts[]|null>{
    const customerBankAccount = await prisma.bank_accounts.findMany({
        where:{id}
    });
    return customerBankAccount;
}

async function getCustomerBankAccountByUserId(user_id:string):Promise<bank_accounts[]|null>{
    const customerBankAccount = await prisma.bank_accounts.findMany({
        where:{user_id}
    });
    return customerBankAccount
}

async function updateCustomerBankAccountById(id:string,updates:{customer_bank_name:string,bank_number:string},transaction:any=prisma):Promise<bank_accounts>{
    return await transaction.bank_accounts.update({where:{id},data:updates});
}

async function deleteCustomerBankAccountById(id:string,transaction:any=prisma):Promise<bank_accounts>{
    return await transaction.bank_accounts.delete({where:{id}});
}

export {createBankAccount, getCustomerBankAccountById, getCustomerBankAccountByUserId, updateCustomerBankAccountById, deleteCustomerBankAccountById}