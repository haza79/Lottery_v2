import * as authenticationService from "@api/v1/services/Authentication"
import {Role} from "@api/v1/enums/Role";
import { users, user_roles, roles } from "@prisma/client";

interface login {
    user:users,
    userRole:user_roles,
    role:roles
}

async function adminLogin(username:string,password:string):Promise<login>{
    try{
        const login = await authenticationService.login(username,password,);
        if(!login){
            throw new Error("login fail");
        }
        const isCustomer: boolean = login.role.role === Role.admin;
        if(!isCustomer){
            throw new Error("not admin");
        }
        return login;
    }catch(error){
        throw new Error("admin login error "+error);
    }
}

export {adminLogin}