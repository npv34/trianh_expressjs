import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Category from "./category.entity.ts";

@Entity("books")
class Book {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type: 'varchar'})
    public name: string;

    @Column({type: 'decimal'})
    public price: number;

    @Column({type: 'varchar'})
    public author: string;

    @ManyToOne(() => Category, (category: any) => category.books, { onDelete: 'CASCADE' })
    public category: Category;
}  

export default Book;