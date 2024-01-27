import * as authenticationService from "@api/v1/services/Authentication";
import * as customerDetailService from "@api/v1/services/CustomerDetail";
import * as bankService from "@api/v1/services/Bank";
import * as bankAccount from "@api/v1/services/BankAccount";
import {Role} from "@api/v1/enums/Role";
import { PrismaClient, banks, bank_accounts, customer_details, roles, user_roles, users } from "@prisma/client";

interface register {
    user:users,
    userRole:user_roles,
    role:roles,
    customerDetail:customer_details,
    customerBankAccount:bank_accounts,
    bank:banks
}

interface login {
    user:users,
    userRole:user_roles,
    role:roles
}

async function customerLogin(username:string,password:string):Promise<login>{
    try{
        const login = await authenticationService.login(username,password,);
        if(!login){
            throw new Error("login fail");
        }
        const isCustomer: boolean = login.role.role === Role.customer;
        if(!isCustomer){
            throw new Error("not customer");
        }
        return login;
    }catch(error){
        throw new Error("customer login error "+error);
    }
}

async function customerRegister(username:string,password:string,name:string,phone:string,dateOfBirth:Date,bankCode:string,customerBankName:string,bankNumber:string,transaction?:any):Promise<register>{
    try{
        const getBank = await bankService.getBankByCode(bankCode);
        if(!getBank){
            throw new Error("bank not found");
        }
        const userRegister = await authenticationService.register(username,password,Role.customer,transaction);
        const createBankAccount = await bankAccount.createBankAccount(getBank.id,userRegister.user.id,customerBankName,bankNumber,transaction);

        const createUserDetail = await customerDetailService.createUserDetail(userRegister.user.id,name,phone,dateOfBirth,createBankAccount.id,transaction);
        return {
            user:userRegister.user,
            userRole:userRegister.userRole,
            role:userRegister.role,
            customerDetail:createUserDetail,
            customerBankAccount:createBankAccount,
            bank:getBank
        }
    }catch(error){
        throw new Error("customer register error "+error);
    }
}

export { customerLogin, customerRegister };