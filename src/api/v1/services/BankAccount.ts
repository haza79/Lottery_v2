import * as customerBankAccountModel from "@api/v1/models/BankAccount";
import { bank_accounts } from "@prisma/client";

async function createBankAccount(bank_id:string,user_id:string,customer_bank_name:string,bank_number:string,transaction:any):Promise<bank_accounts>{
    try{
        const created = await customerBankAccountModel.createBankAccount(bank_id,user_id,customer_bank_name,bank_number,transaction);
        return created;
    }catch(error){
        throw new Error("Error while create customer bank account "+error);
    }
}

async function getCustomerBankAccountById(id:string):Promise<bank_accounts[]|null>{
    try{
        const customerBankAccount = await customerBankAccountModel.getCustomerBankAccountById(id);
        return customerBankAccount;
    }catch(error){
        throw new Error("Error while get customer bank account "+error);
    }
}

async function getCustomerBankAccountByUserId(user_id:string):Promise<bank_accounts[]|null>{
    try{
        const customerBankAccount = await customerBankAccountModel.getCustomerBankAccountByUserId(user_id);
        return customerBankAccount;
    }catch(error){
        throw new Error("Error while get customer bank account "+error);
    }
}

async function updateCustomerBankAccountById(id:string,updates:{customer_bank_name:string,bank_number:string},transaction?:any):Promise<bank_accounts>{
    try{
        const updated = customerBankAccountModel.updateCustomerBankAccountById(id,updates,transaction);
        return updated;
    }catch(error){
        throw new Error("Error while update customer bank account "+error);
    }
}

async function deleteCustomerBankAccountById(id:string,transaction?:any):Promise<bank_accounts>{
    try{
        const deleted = customerBankAccountModel.deleteCustomerBankAccountById(id,transaction);
        return deleted;
    }catch(error){
        throw new Error("Error while delete customer bank account "+error);
    }
}

export {createBankAccount, getCustomerBankAccountById, getCustomerBankAccountByUserId, updateCustomerBankAccountById, deleteCustomerBankAccountById}