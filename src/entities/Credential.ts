import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AppDataSource } from '../config/data-source';

@Entity()
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    userName: string;

    @Column()
    password: string;
};

