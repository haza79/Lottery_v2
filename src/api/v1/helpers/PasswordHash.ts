import bcrypt from 'bcrypt';

const saltRounds = 10;

// Function to hash a password
export async function hashPasswordWithSalt(password: string, salt: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password + salt, saltRounds);
  return hashedPassword;
}

// Function to generate a salt
export async function generateSalt(): Promise<string> {
  const salt = await bcrypt.genSalt(saltRounds);
  return salt;
}

// Function to compare a password with its hash
export async function comparePasswordWithSalt(password: string, salt: string, hashedPassword: string): Promise<boolean> {
  const combinedPassword = password + salt;
  const match = await bcrypt.compare(combinedPassword, hashedPassword);
  return match;
}