import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: "appointments"
})

export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string

    @Column()
    time: string

    @Column({ default : "active" })
    status: string

    @Column()
    description: string;
    
    @ManyToOne(()=> User, (user)=> user.appointment)
    user: User
}