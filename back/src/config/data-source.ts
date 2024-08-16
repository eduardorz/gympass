import { DataSource } from "typeorm"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import { User } from "../entities/User"
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    dropSchema: true, // !  FORMATEAR DATOS EN TABLAS CADA VEZ QUE SE INICIALICE EL SERVIDOR
    synchronize: true,
    logging: true, // ! PARA DESACTIVAR EL MUESTREO DE QUERYS EN LA CONSOLA, CAMBIAR A FALSE
    entities: [User, Appointment, Credential], 
    subscribers: [],
    migrations: [],
})


export const UserModel = AppDataSource.getRepository(User); 
export const CredentialModel = AppDataSource.getRepository(Credential);
export const AppointmentModel = AppDataSource.getRepository(Appointment)