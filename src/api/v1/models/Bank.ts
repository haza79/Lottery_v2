import { PrismaClient, banks } from "@prisma/client";
import prisma from "@config/database";

async function createBank(code:string,name:string,transaction:any=prisma):Promise<banks>{
    return await transaction.banks.create({data:{code,name}});
}

async function getBankById(id:string):Promise<banks|null>{
    const bank = await prisma.banks.findUnique({
        where:{id}
    });
    return bank;
}

async function getBankByCode(code:string):Promise<banks|null>{
    const bank = await prisma.banks.findFirst({
        where:{code}
    });
    return bank;
}

async function updateBankById(id:string,updates:{code:string,name:string},transaction:any=prisma):Promise<banks>{
    return await transaction.banks.update({where:{id},data:updates});
}

async function deleteBankById(id:string,transaction:any=prisma):Promise<banks>{
    return await transaction.banks.delete({where:{id}});
}

export {createBank, getBankById, getBankByCode, updateBankById, deleteBankById}