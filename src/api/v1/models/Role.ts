import { roles } from "@prisma/client";
import prisma from "@config/database";

async function getRoleById(id:string):Promise<roles|null>{
    const role = await prisma.roles.findUnique({
        where:{id}
    });
    return role;
}

async function getRoleByName(roleName:string):Promise<roles|null>{
    const role = await prisma.roles.findFirst({
        where:{role:roleName}
    });
    return role;
}

export { getRoleById, getRoleByName} 