import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, ManyToMany, JoinTable } from "typeorm";
import Role from "./role.entity.ts";

@Entity("users")
class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type: 'varchar'})
    public name: string;

    @Column({type: 'varchar'})
    public email: string;

    @Column({type: 'varchar'})
    public password: string;

    @Column({type: 'varchar'})
    public address: string;

    @DeleteDateColumn()
    deletedAt?: Date;

    @ManyToMany(() => Role, (role: any) => role.users, { onDelete: 'CASCADE' })
    public roles: Role[]
}

export default User