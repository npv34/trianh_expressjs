import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entity.ts";

@Entity("roles")
class Role {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar' })
    public name: string;

    @ManyToMany(() => User, user => user.roles)
    @JoinTable()
    public users: User[]
}

export default Role;
