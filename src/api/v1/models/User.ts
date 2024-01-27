import { PrismaClient, users} from '@prisma/client';
import prisma from '@config/database';

// Function to create a new user
async function createUser(username: string, password: string, salt: string,transaction:any=prisma): Promise<users> {
  return await transaction.users.create({
      data: {
        username,
        password,
        salt,
      },
    })
}

// Function to get a user by ID
async function getUserById(userId: string): Promise<users | null> {
  const user = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
}

async function getUserByUsername(username:string):Promise<users|null>{
  const user = await prisma.users.findUnique({
    where:{
      username:username
    }
  });
  return user;
}

// Function to get all users
async function getAllUsers(limit:number, offset:number): Promise<users[]> {
  const users = await prisma.users.findMany({
    take:limit,
    skip:offset
  });
  return users;
}

// Function to update a user's information
async function updateUser(userId: string, updates: { username?: string; password?: string; salt?: string },transaction:any=prisma): Promise<users | null> {
  return await transaction.users.update({
      where:{id:userId},data:updates
    });
}

// Function to delete a user by ID
async function deleteUser(userId: string,transaction:any=prisma): Promise<users | null> {
  return await transaction.users.delete({where:{id:userId}});
}

export { createUser, getUserById, getAllUsers, updateUser, deleteUser, getUserByUsername};