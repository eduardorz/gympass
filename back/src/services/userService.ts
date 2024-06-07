import { AppDataSource, UserModel } from '../config/data-source';
import UserDto from '../dto/UserDto';
import { User } from '../entities/User';
import IUser from '../interfaces/IUser';
import { createCredentials } from './credentialsService';


export const getUsersService = async () => {
    const users: User[] = await UserModel.find();
    return users
}

export const getUserByIdService = async (id: number) => {
    const userFinded = await UserModel.findOneBy({id});
    if (!userFinded) throw Error("El usuario no existe");
    return userFinded;
}

export const registerUserService = async (usersData: UserDto) => {
    console.log("estoy en el servicio de usuarios");
    const newCredentials = await createCredentials({
        username: usersData.email,
        password: usersData.password
    });

    const newUser = await UserModel.create(usersData);
    newUser.credential = newCredentials;
    await UserModel.save(newUser);
    return newUser;
}

