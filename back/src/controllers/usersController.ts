import { Request, Response } from 'express';
import { getUsersService, getUserByIdService, registerUserService } from '../services/userService';
import { User } from '../entities/User';
import UserDto from '../dto/UserDto';


export const getUsers = async (req: Request, res: Response) => {
    const users: User[] = await getUsersService(); 
    res.status(200).json(users)
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserByIdService(Number(id));
    res.status(200).json(user)
}

export const register = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { name, email, password, age, birthdate, nDni }: UserDto = req.body;
        const newUser = await registerUserService({ name, email, password, age, birthdate, nDni});
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json(error);
    }
}



