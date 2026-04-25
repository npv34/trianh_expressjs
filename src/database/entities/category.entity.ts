import Book from "./book.entity.ts";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    name: string;

    @OneToMany(() => Book, (book: any) => book.category, { cascade: true })
    books: Book[];
}

export default Category;
