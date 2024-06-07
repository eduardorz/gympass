// ! DATA TRANSFER OBJECT (dto)
// * nos sirve para, si una función del controlador
// * va a llamar a una función del servicio 
// * y le va a pasar un objeto con informacion
// * poder describir esa información


interface UserDto {
    name: string,
    email: string,
    password: string;
    age: number;
    birthdate: string,
    nDni: number
}

export default UserDto;

