
import { CredentialModel } from "../config/data-source";
import CredentialDto from "../dto/CredentialDto";
import ICredential from "../interfaces/ICredential";


const credentials: ICredential[] = []

let id: number = 1;

// ! Implementar una función que reciba username y password 
// ! y cree un nuevo par de credenciales con estos datos. 
// ! Debe retornar el ID del par de credenciales creado.

export const createCredentials = async (usersData: CredentialDto) => {
    const newCredential = await CredentialModel.create(usersData);
    await CredentialModel.save(newCredential);
    console.log(newCredential);
    return newCredential;
}


// ! Implementar una función que recibirá username y password, 
// ! y deberá chequear si el nombre de usuario existe entre los datos 
// ! disponibles y, si es así, si el password es correcto. En caso de 
// ! que la validación sea exitosa, deberá retornar el ID de las credenciales. 

export const checkCredentialService = async (usersData: CredentialDto) => {
    const userFinded = credentials.find(user => user.username === usersData.username);
    if(userFinded && userFinded.password === usersData.password){
        return userFinded.id
    } else {
        throw Error("El usuario/contraseña no son correctos")
    }
}
