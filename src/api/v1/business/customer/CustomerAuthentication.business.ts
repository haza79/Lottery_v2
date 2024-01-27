import * as jwtAuthenticationService from "@api/v1/services/JWTAuthentication";
import * as customerAuthenticationService from "@api/v1/services/CustomerAuthentication";
import prisma from "@config/database";
import { PrismaClient, banks, customer_bank_accounts, customer_details, roles, user_roles, users } from "@prisma/client";

interface register {
    user:users,
    userRole:user_roles,
    role:roles,
    customerDetail:customer_details,
    customerBankAccount:customer_bank_accounts,
    bank:banks
}

async function login(username:string,password:string):Promise<string>{
    try{
        const login = await customerAuthenticationService.customerLogin(username,password);
        if(!login){
            throw new Error("login error");
        }
        const jwtToken = jwtAuthenticationService.generateToken(login.user.id,login.user.username,login.role.role);
        return jwtToken;
    }catch(error){
        throw new Error("login error "+error);
    }
}

async function register(
    username: string,
    password: string,
    name: string,
    phone: string,
    dateOfBirth: Date,
    bankCode: string,
    customerBankName: string,
    bankNumber: string
): Promise<string> {
    try {
        const jwtToken = await prisma.$transaction(async (prismaTransaction) => {
            try {
                // Perform registration process within the transaction
                const register = await customerAuthenticationService.customerRegister(
                    username,
                    password,
                    name,
                    phone,
                    dateOfBirth,
                    bankCode,
                    customerBankName,
                    bankNumber,
                    prismaTransaction
                );

                // Check if the registration was successful
                if (!register) {
                    throw new Error('Registration failed');
                }

                // Generate JWT token based on registration data
                const token = jwtAuthenticationService.generateToken(
                    register.user.id,
                    register.user.username,
                    register.role.role
                );

                return token;
            } catch (error) {
                // Throw the error to trigger transaction rollback
                throw error;
            }
        });

        // Return the JWT token
        return jwtToken;
    } catch (error) {
        // Handle transaction errors
        throw new Error('Transaction error during registration: ' + error.message);
    }
}


export {login,register}  ;