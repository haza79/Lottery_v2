import * as hash from "../PasswordHash";

const username = "admin";
const password = "1234";
let salt:string = "";

async function encrypPassword(password:string):Promise<string>{
    salt = await hash.generateSalt();
    const hashedPassword:string = await hash.hashPasswordWithSalt(password,salt);
    return hashedPassword;
}

async function decrypPassword(password:string,salt:string,hashedPassword:string):Promise<boolean>{
    return hash.comparePasswordWithSalt(password,salt,hashedPassword);
}

async function main() {
    const hashedPassword = await encrypPassword(password);
    console.log(hashedPassword);
    console.log(salt);
    console.log(decrypPassword("1234",salt,hashedPassword));
}

main()