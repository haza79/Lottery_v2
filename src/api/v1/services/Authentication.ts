import {comparePasswordWithSalt} from "@api/v1/helpers/PasswordHash";
import * as userService from "@api/v1/services/User";
import * as userRoleService from "@api/v1/services/UserRole";
import * as roleService from "@api/v1/services/Role";
import { users,user_roles, roles, PrismaClient, Prisma, } from "@prisma/client";
import {IncorrectPasswordError,UserNotFoundError,RoleNotFoundError,UserRoleNotFoundError} from "@api/v1/error/Error";

interface login{
    user:users,
    userRole:user_roles,
    role:roles
};

async function login(username: string, password: string): Promise<login> {
    const user: users | null = await userService.getUserByUsername(username);

    if (!user) {
        throw new UserNotFoundError("Login Error: User Not Found");
    }

    const isPasswordCorrect: boolean = await comparePasswordWithSalt(password, user.salt, user.password);

    if (!isPasswordCorrect) {
        throw new IncorrectPasswordError("Login Error: Incorrect Password");
    }

    const userRole: user_roles | null = await userRoleService.getUserRoleByUserId(user.id);

    if (!userRole) {
        throw new UserRoleNotFoundError("Login Error: User Role Not Found");
    }

    const role: roles | null = await roleService.getRoleById(userRole.role_id);

    if (!role) {
        throw new RoleNotFoundError("Login Error: Role Not Found");
    }

    return {
        user,userRole,role
    }
}

async function register(username:string,password:string,role:string,transaction?:any): Promise<{user:users,userRole:user_roles,role:roles}>{

    try{
        const getRole = await roleService.getRoleByName(role);
        if(!getRole){
            throw new Error("Error role not found");
        }
        const createUser = await userService.createUser(username,password,transaction);
        console.log(createUser)
        const createUserRole = await userRoleService.createUserRole(createUser.id,getRole.id,transaction)
        return {
            user:createUser,
            userRole:createUserRole,
            role:getRole
        };
    }catch(error){
        throw new Error("Error while register "+error);
    }

}
export {login,register};