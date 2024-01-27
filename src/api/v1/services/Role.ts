import * as roleModel from "@api/v1/models/Role";
import { roles } from "@prisma/client";

async function getRoleById(id:string):Promise<roles|null>{
    try{
        return await roleModel.getRoleById(id);
    }catch(error){
        throw new Error("Error while get role "+error);
    }
}

async function getRoleByName(role:string):Promise<roles|null>{
    try{
        return await roleModel.getRoleByName(role);
    }catch(error){
        throw new Error("Error while get role "+error);
    }
}

export {getRoleById,getRoleByName}