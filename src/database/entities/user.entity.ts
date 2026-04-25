import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}

export default User