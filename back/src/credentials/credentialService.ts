import { CredentialModel } from "../config/data-source";
import CredentialDto from "./CredentialDto";
import bcrypt from 'bcrypt';
import { comparePassword } from '../utils/passwordUtils';

// ! Implementar una función que reciba username y password 
// ! y cree un nuevo par de credenciales con estos datos. 
// ! Debe retornar el ID del par de credenciales creado.

export const createCredentials = async (email: string, password: string) => {
    try {
        const newCredential = CredentialModel.create({
            email,
            password,
        });
        await CredentialModel.save(newCredential);
        console.log(newCredential);
        return newCredential;
    } catch (error) {
        throw new Error('Error al crear las credenciales');
    }
}


// ! Implementar una función que recibirá username y password, 
// ! y deberá chequear si el nombre de usuario existe entre los datos 
// ! disponibles y, si es así, si el password es correcto. En caso de 
// ! que la validación sea exitosa, deberá retornar el ID de las credenciales. 


export const checkCredentialService = async (usersData: CredentialDto) => {
    const { email, password } = usersData;
    const credential = await CredentialModel.findOne({ where: { email: email } });
    console.log("ESTE ES EL USUARIO QUE CONSEGUI EN CHECKCREDENTIALSERVICE");
    console.log(credential);
    if (!credential) throw new Error("Las credenciales no son correctas");
    const isPasswordValid = await bcrypt.compare(password, credential.password);
    if (!isPasswordValid) throw new Error("Las credenciales no son correctas");
    return credential.id;
}



