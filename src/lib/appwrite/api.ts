import { ID } from 'appwrite';
import { INewUser } from "@/types";
import { account } from './config';

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email, 
            user.password,
            user.name 
        );
        // Retornar o novo usuário criado
        return newAccount;
    } catch (error) {
        console.error("Failed to create user account:", error);
        throw error;  // Lançar o erro para ser tratado na camada de chamada
    }
}
