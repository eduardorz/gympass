import bcrypt from 'bcrypt';

export const comparePassword = async (enteredPassword: string, storedPasswordHash: string): Promise<boolean> => {
    return await bcrypt.compare(enteredPassword, storedPasswordHash);
}