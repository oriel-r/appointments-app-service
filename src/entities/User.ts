import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany} from "typeorm"
import { AppDataSource } from "../config/data-source"
import { Credential } from "./Credential"
import { Appointment } from "./Appointment"

@Entity({name : "users"})
export class User {

@PrimaryGeneratedColumn()
    id: number    

@Column()
    name: string

@Column()
    email: string

@Column({type: "date"})
    birthdate: Date
    
@Column()
    nDni: string

@OneToOne(() => Credential)
@JoinColumn()
credential: Credential;

@OneToMany(() => Appointment, appointment => appointment.user)
appointments: Appointment[];
}

