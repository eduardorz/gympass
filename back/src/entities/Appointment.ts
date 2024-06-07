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

    @Column()
    description: string;

    @Column({ default : "active" })
    status: string

    
    @ManyToOne(()=> User, (user)=> user.appointment)
    user: User

  }