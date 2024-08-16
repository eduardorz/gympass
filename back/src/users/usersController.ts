import { Request, Response } from 'express';
import { getUsersService, getUserByIdService, registerUserService, loginService } from './usersService';
import { User } from '../entities/User';
import UserDto from './UserDto';
import CredentialDto from '../credentials/CredentialDto';


export const getUsersController = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getUsersService(); 
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await getUserByIdService(Number(id));
        if (!user) {
            return res.status(404).json({ message: `Usuario con ID ${id} no encontrado` });
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const registerController = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { name, email, password, dni, age, phone, birthday, address, city, country }: UserDto = req.body;
        const newUser = await registerUserService({ 
            name, email, password, dni, age, phone, birthday, address, city, country 
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
    }
}

export const loginController = async (req: Request, res: Response) => {
    const { email, password }: CredentialDto = req.body;
    try {
        const token = await loginService(email, password);
        return res.status(200).json({ message: "Inicio de sesión exitoso", token });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        return res.status(401).json({ message: error.message });
    }
}





