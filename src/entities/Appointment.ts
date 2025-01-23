import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';
import { AppDataSource } from '../config/data-source';
import { AppointmetStatus } from '../dto/appointmentDto';
import { Credential } from './Credential';

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "date"})
    date: Date;

    @Column()
    time: string;

    @Column({default: AppointmetStatus.ACTIVE})
    status: AppointmetStatus

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;
}

