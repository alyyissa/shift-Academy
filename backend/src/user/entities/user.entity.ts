import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Name: string

    @Column()
    email: string

    @Column()
    university: string

}
