import * as jwtAuthenticationService from "@api/v1/services/JWTAuthentication";
import * as adminAuthenticationService from "@api/v1/services/AdminAuthentication.service";

async function login(username:string,password:string):Promise<string>{
    try{
        const login = await adminAuthenticationService.adminLogin(username,password);
        if(!login){
            throw new Error("login error");
        }
        const jwtToken = jwtAuthenticationService.generateToken(login.user.id,login.user.username,login.role.role);
        return jwtToken;
    }catch(error){
        throw new Error("login error "+error);
    }
}

export {login}