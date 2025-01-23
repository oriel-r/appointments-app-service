import { CreateDateColumn, DataSource } from "typeorm"
import { User } from "../entities/User"
import { Credential } from "../entities/Credential"
import { Appointment } from "../entities/Appointment"
import { DB, DB_PASSWORD, DB_PORT, DB_USER } from "./envs"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: DB_USER, 
    password: DB_PASSWORD,
    database: DB,
    synchronize: true,
    logging: ["error"],
    entities: [User, Credential, Appointment], 
    subscribers: [],
    migrations: [],
    dropSchema: true,
  })

export const UserModel = AppDataSource.getRepository(User);
export const AppointmentModel = AppDataSource.getRepository(Appointment);
export const CredentialModel = AppDataSource.getRepository(Credential);