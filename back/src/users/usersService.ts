import { AppDataSource, UserModel } from '../config/data-source';
import { sign } from 'jsonwebtoken';
import UserDto from './UserDto';
import { User } from '../entities/User';
import { checkCredentialService, createCredentials } from '../credentials/credentialService';


export const getUsersService = async () => {
    const users: User[] = await UserModel.find();
    if (users.length === 0) throw new Error(`De momento no hay usuarios registrados ...`);
    return users
}

export const getUserByIdService = async (id: number) => {
    const userFinded = await UserModel.findOneBy({id});
    return userFinded;
}


export const registerUserService = async (usersData: UserDto) => {
    const { email } = usersData;
    const foundUser = await UserModel.findOneBy({ email });

    if (foundUser) {
        return { message: "Este usuario ya existe" };
    }

    const newCredential = await createCredentials(usersData.email, usersData.password);

    const newUser = UserModel.create(usersData);
    newUser.credential = newCredential;
    await UserModel.save(newUser);

    return newUser;

}

/*
el servicio recibe el email y el password
usa checkCredentialService para verificar si las credenciales son correctas

*/

export const loginService = async (email: string, password: string) => {
    const userId = await checkCredentialService({ email, password });
    const token = sign({ userId }, 'secretKey', { expiresIn: '1h' });
    return token;
}





