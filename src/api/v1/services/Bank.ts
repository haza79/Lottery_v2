import * as bankModel from "@api/v1/models/Bank";
import { banks } from "@prisma/client";

async function createBank(code:string,name:string):Promise<banks>{
    try{
        const bank = await bankModel.createBank(code,name);
        return bank;
    }catch(error){
        throw new Error("Error while create bank "+error);
    }
}

async function getBankById(id:string):Promise<banks|null>{
    try{
        const bank = await bankModel.getBankById(id);
        return bank;
    }catch(error){
        throw new Error("Error while get bank "+error);
    }
}

async function getBankByCode(code:string):Promise<banks|null>{
    try{
        const bank = await bankModel.getBankByCode(code);
        return bank;
    }catch(error){
        throw new Error("Error while get bank "+error);
    }
}

async function updateBankById(id:string,updates:{code:string,name:string}):Promise<banks>{
    try{
        const bank = await bankModel.updateBankById(id,updates);
        return bank;
    }catch(error){
        throw new Error("Error while update bank "+error);
    }
}

async function deleteBankById(id:string):Promise<banks>{
    try{
        const bank = await bankModel.deleteBankById(id);
        return bank;
    }catch(error){
        throw new Error("Error while delete bank "+error);
    }
}

export {createBank, getBankById, updateBankById, getBankByCode, deleteBankById}